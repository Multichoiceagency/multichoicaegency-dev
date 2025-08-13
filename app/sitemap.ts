// app/sitemap.ts
import type { MetadataRoute } from "next"
import { sitemapUrls } from "@/utils/sitemap"
import { getCases } from "@/lib/wp" // zie helper hieronder

const SITE_URL = (process.env.SITE_URL || "https://www.multichoiceagency.nl").replace(/\/+$/, "")
const CASES_BASE_PATH = "/cases" // pas aan als je frontend route anders is, bv. "/projecten"

function canonicalize(url: string) {
  // 1) verwijder dubbele slashes
  let u = url.replace(/([^:]\/)\/+/g, "$1")
  // 2) trailing slash policy: root mét slash, overige zónder
  try {
    const { origin, pathname, search } = new URL(u)
    const cleanPath =
      pathname === "/" ? "/" : pathname.replace(/\/+$/, "")
    u = `${origin}${cleanPath}${search || ""}`
  } catch {
    // bij relatieve URLs: fallback
    u = url
  }
  return u
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // 1) Statisch uit utils
  const staticEntries: MetadataRoute.Sitemap = sitemapUrls.map((item) => ({
    url: canonicalize(item.url),
    lastModified: item.lastModified ? new Date(item.lastModified) : now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))

  // 2) Dynamisch uit WordPress (CPT: cases)
  const cases = await getCases()
  const caseEntries: MetadataRoute.Sitemap = cases.map((c) => ({
    url: canonicalize(`${SITE_URL}${CASES_BASE_PATH}/${c.slug}`),
    lastModified: c.modified_gmt ? new Date(c.modified_gmt) : now,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

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

