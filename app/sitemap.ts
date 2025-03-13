import type { MetadataRoute } from "next"
import { sitemapUrls } from "@/utils/sitemap"

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapUrls.map((item) => ({
    url: item.url,
    lastModified: item.lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))
}

