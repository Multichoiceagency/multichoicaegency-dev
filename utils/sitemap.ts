interface SitemapUrl {
  url: string
  lastModified?: string
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}

const NOW = new Date().toISOString()

// Main pages
const mainPages: SitemapUrl[] = [
  {
    url: "https://www.multichoiceagency.nl/",
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: "https://www.multichoiceagency.nl/cases",
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/diensten",
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/over-ons",
    lastModified: NOW,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/onze-werkwijze",
    lastModified: NOW,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "https://www.multichoiceagency.nl/offerte-aanvragen",
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/gratis-adviesgesprek",
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://www.multichoiceagency.nl/contact",
    lastModified: NOW,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "https://www.multichoiceagency.nl/stel-een-vraag",
    lastModified: NOW,
    changeFrequency: "monthly",
    priority: 0.7,
  },
]

// Website Development Services
const websiteServices: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/websites", lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
  { url: "https://www.multichoiceagency.nl/custom-webdesign", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/responsief-webdesign", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ui-ux-design", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/wordpress-ontwikkeling", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
]

// E-commerce Services
const ecommerceServices: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/e-commerce", lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
  { url: "https://www.multichoiceagency.nl/webshop-ontwikkeling", lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
  { url: "https://www.multichoiceagency.nl/e-commerce-platformontwikkeling", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/headless-e-commerce", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/shopify-ontwikkeling", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/magento-ontwikkeling", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
]

// Development Services
const developmentServices: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/development", lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
  { url: "https://www.multichoiceagency.nl/backend-development", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webapplicatie-ontwikkeling", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/mobiele-app-ontwikkeling", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
]

// Marketing & SEO Services
const marketingServices: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/online-marketing", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/seo-zoekmachine-optimalisatie", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/conversie-optimalisatie", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/contentcreatie", lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
]

// Design & Branding Services
const designServices: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/branding-design", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/logo-ontwerp-visuele-identiteit", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/fotografie", lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
  { url: "https://www.multichoiceagency.nl/videoproductie", lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
  { url: "https://www.multichoiceagency.nl/animatie-motion-graphics", lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
]

// Hosting & Technical Services
const technicalServices: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/hosting-domeinregistratie", lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
]

// Service category pages
const serviceCategories: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/diensten/webdesign", lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
  { url: "https://www.multichoiceagency.nl/diensten/webdevelopment", lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
  { url: "https://www.multichoiceagency.nl/diensten/e-commerce", lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
  { url: "https://www.multichoiceagency.nl/diensten/online-marketing", lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
  { url: "https://www.multichoiceagency.nl/diensten/branding-design", lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
  { url: "https://www.multichoiceagency.nl/diensten/content-creatie", lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
]

// Info & Support
const infoSupport: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/helpdesk", lastModified: NOW, changeFrequency: "monthly", priority: 0.5 },
  { url: "https://www.multichoiceagency.nl/veelgestelde-vragen", lastModified: NOW, changeFrequency: "monthly", priority: 0.5 },
  { url: "https://www.multichoiceagency.nl/kennisbank", lastModified: NOW, changeFrequency: "weekly", priority: 0.6 },
  { url: "https://www.multichoiceagency.nl/downloads", lastModified: NOW, changeFrequency: "monthly", priority: 0.4 },
]

// Legal
const legal: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/privacy", lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
  { url: "https://www.multichoiceagency.nl/terms", lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
  { url: "https://www.multichoiceagency.nl/cookies", lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
]

// Industry specific pages (placeholder)
const industrySpecific: SitemapUrl[] = [
  // voeg later toe indien je branches maakt
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
  ...infoSupport,
  ...legal,
  ...industrySpecific,
]

// Helper: alle URLs als strings
export const getAllUrls = (): string[] => sitemapUrls.map((item) => item.url)

// Helper: sitemap XML genereren (los endpoint, optioneel)
export const generateSitemapXml = (): string => {
  const xmlItems = sitemapUrls
    .map(
      (item) => `
  <url>
    <loc>${item.url}</loc>
    ${item.lastModified ? `<lastmod>${item.lastModified}</lastmod>` : ""}
    ${item.changeFrequency ? `<changefreq>${item.changeFrequency}</changefreq>` : ""}
    ${item.priority !== undefined ? `<priority>${item.priority}</priority>` : ""}
  </url>`
    )
    .join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`
}

export default sitemapUrls
