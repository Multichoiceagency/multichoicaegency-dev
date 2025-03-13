import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"],
    },
    sitemap: "https://www.multichoiceagency.nl/sitemap.xml",
    host: "https://www.multichoiceagency.nl",
  }
}

