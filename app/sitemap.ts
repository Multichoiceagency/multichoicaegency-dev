import type { MetadataRoute } from "next"
import { sitemapUrls } from "@/utils/sitemap"
import { getCases } from "@/lib/wp"

const SITE_URL = (process.env.SITE_URL || "https://www.multichoiceagency.nl").replace(/\/+$/, "")
const CASES_BASE_PATH = "/cases"

// ⚠️ Voorkom prerender tijdens build:
export const dynamic = "force-dynamic"
// en gebruik ISR (hier 1 uur):
export const revalidate = 60 * 60

function canonicalize(url: string) {
  let u = url.replace(/([^:]\/)\/+/g, "$1")
  try {
    const { origin, pathname, search } = new URL(u)
    const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "")
    u = `${origin}${cleanPath}${search || ""}`
  } catch {}
  return u
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // 1) Statisch
  const staticEntries: MetadataRoute.Sitemap = sitemapUrls.map((item) => ({
    url: canonicalize(item.url),
    lastModified: item.lastModified ? new Date(item.lastModified) : now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))

  // 2) Dynamisch (met fallback bij 403/timeout/etc.)
  let caseEntries: MetadataRoute.Sitemap = []
  try {
    const cases = await getCases()
    caseEntries = cases.map((c) => ({
      url: canonicalize(`${SITE_URL}${CASES_BASE_PATH}/${c.slug}`),
      lastModified: c.modified_gmt ? new Date(c.modified_gmt) : now,
      changeFrequency: "weekly",
      priority: 0.7,
    }))
  } catch (err) {
    console.warn("Sitemap: WP cases konden niet worden opgehaald:", err)
    // Geen throw → build/request faalt niet, je krijgt tenminste je statische sitemap
  }

  // 3) Merge + dedupe
  const seen = new Set<string>()
  const merged = [...staticEntries, ...caseEntries].filter((it) => {
    const key = it.url
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  return merged
}
