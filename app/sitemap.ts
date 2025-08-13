// app/sitemap.ts
import type { MetadataRoute } from "next"
import { sitemapUrls } from "@/utils/sitemap"
import { getCases } from "@/lib/wp"

const SITE_URL = (process.env.SITE_URL || "https://www.multichoiceagency.nl").replace(/\/+$/, "")
const CASES_BASE_PATH = "/cases"

export const dynamic = "force-dynamic"
export const revalidate = 3600 // <-- literal, geen expressie

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

  const staticEntries: MetadataRoute.Sitemap = sitemapUrls.map((item) => ({
    url: canonicalize(item.url),
    lastModified: item.lastModified ? new Date(item.lastModified) : now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))

  let caseEntries: MetadataRoute.Sitemap = []
  try {
    const cases = await getCases()
    caseEntries = cases.map((c) => ({
      url: canonicalize(`${SITE_URL}${CASES_BASE_PATH}/${c.slug}`),
      lastModified: c.modified_gmt ? new Date(c.modified_gmt) : now,
      changeFrequency: "weekly",
      priority: 0.7,
    }))
  } catch (e) {
    console.warn("Sitemap: WP fetch faalde, alleen statische URLs gebruikt.", e)
  }

  // dedupe
  const seen = new Set<string>()
  return [...staticEntries, ...caseEntries].filter((it) => {
    if (seen.has(it.url)) return false
    seen.add(it.url)
    return true
  })
}
