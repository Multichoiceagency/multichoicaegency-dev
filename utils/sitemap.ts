interface SitemapUrl {
  url: string
  lastModified?: string
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}

// Voeg de cases URL toe aan de mainPages array
const mainPages: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: "https://www.multichoiceagency.nl/contact",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/portalen",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/over-ons",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/offerte-aanvragen",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/cases",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.9,
  },
]

// Website services
const websiteServices: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/website-laten-maken",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/maatwerk-website-laten-maken",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/wordpress-website-laten-maken",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/wat-is-ux-ui-design",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
]

// Webshop services
const webshopServices: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/webshop-laten-maken",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/shopify-webshop-laten-maken",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/woocommerce-webshop-laten-maken",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/e-commerce",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
]

// Development services
const developmentServices: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/frontend-development",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/backend-development",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/webapplicaties",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/dashboard-ontwikkeling",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
]

// Business systems
const businessSystems: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/crm-systemen",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/lead-management",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/marketing-automatisering",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/document-management",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/planning-rooster",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/data-management",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/ai-systemen",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
]

// Portals
const portals: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/portalen-platformen",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/portalen/ledenportaal",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/portalen/klantenportaal",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/portalen/medewerkersportaal",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/portalen/partnerportaal",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/portalen/leveranciersportaal",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/portalen/salesportaal",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
]

// Industry specific
const industrySpecific: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/website-laten-maken/website-laten-maken-voor-gezondheidszorg",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/website-laten-maken/website-laten-maken-voor-bouw",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/website-laten-maken/website-laten-maken-voor-onderwijs",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/website-laten-maken/website-laten-maken-voor-duurzaamheid",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/website-laten-maken/website-laten-maken-voor-horeca",
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  },
]

// Combine all URLs
export const sitemapUrls: SitemapUrl[] = [
  ...mainPages,
  ...websiteServices,
  ...webshopServices,
  ...developmentServices,
  ...businessSystems,
  ...portals,
  ...industrySpecific,
]

// Helper function to get all URLs as strings
export const getAllUrls = (): string[] => {
  return sitemapUrls.map((item) => item.url)
}

// Helper function to generate sitemap XML
export const generateSitemapXml = (): string => {
  const xmlItems = sitemapUrls
    .map(
      (item) => `
    <url>
      <loc>${item.url}</loc>
      ${item.lastModified ? `<lastmod>${item.lastModified}</lastmod>` : ""}
      ${item.changeFrequency ? `<changefreq>${item.changeFrequency}</changefreq>` : ""}
      ${item.priority !== undefined ? `<priority>${item.priority}</priority>` : ""}
    </url>
  `,
    )
    .join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${xmlItems}
</urlset>`
}

export default sitemapUrls

