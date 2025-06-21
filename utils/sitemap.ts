interface SitemapUrl {
  url: string
  lastModified?: string
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}

// Main pages
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
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/gratis-adviesgesprek",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/offerte-aanvragen",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/diensten",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/stel-een-vraag",
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
]

// Website Development Services
const websiteServices: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/websites",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/custom-webdesign",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/responsief-webdesign",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/ui-ux-design",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/wordpress-ontwikkeling",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
]

// E-commerce Services
const ecommerceServices: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/e-commerce",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/webshop-ontwikkeling",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/e-commerce-platformontwikkeling",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/headless-e-commerce",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/shopify-ontwikkeling",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/magento-ontwikkeling",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
]

// Development Services
const developmentServices: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/development",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/backend-development",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/webapplicatie-ontwikkeling",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/mobiele-app-ontwikkeling",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
]

// Marketing & SEO Services
const marketingServices: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/online-marketing",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/seo-zoekmachine-optimalisatie",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/conversie-optimalisatie",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/contentcreatie",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
]

// Design & Branding Services
const designServices: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/branding-design",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/logo-ontwerp-visuele-identiteit",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/fotografie",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/videoproductie",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/animatie-motion-graphics",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
]

// Hosting & Technical Services
const technicalServices: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/hosting-domeinregistratie",
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
]

// Service category pages (if they exist)
const serviceCategories: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/diensten/webdesign",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/diensten/webdevelopment",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/diensten/e-commerce",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/diensten/online-marketing",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/diensten/branding-design",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/diensten/content-creatie",
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
]

// Industry specific pages (if you want to add these later)
const industrySpecific: SitemapUrl[] = [
  // These can be added when you create industry-specific landing pages
  // {
  //   url: "https://www.multichoiceagency.nl/branches/gezondheidszorg",
  //   lastModified: new Date().toISOString(),
  //   changeFrequency: "monthly",
  //   priority: 0.6,
  // },
  // {
  //   url: "https://www.multichoiceagency.nl/branches/bouw",
  //   lastModified: new Date().toISOString(),
  //   changeFrequency: "monthly",
  //   priority: 0.6,
  // },
  // {
  //   url: "https://www.multichoiceagency.nl/branches/horeca",
  //   lastModified: new Date().toISOString(),
  //   changeFrequency: "monthly",
  //   priority: 0.6,
  // },
]

// Combine all URLs
export const sitemapUrls: SitemapUrl[] = [
  ...mainPages,
  ...websiteServices,
  ...ecommerceServices,
  ...developmentServices,
  ...marketingServices,
  ...designServices,
  ...technicalServices,
  ...serviceCategories,
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
