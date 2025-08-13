interface SitemapUrl {
  url: string
  lastModified?: string
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}

const NOW = new Date().toISOString()

// Main pages
const mainPages: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/", lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },
  { url: "https://www.multichoiceagency.nl/cases", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/diensten", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/over-ons", lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: "https://www.multichoiceagency.nl/onze-werkwijze", lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: "https://www.multichoiceagency.nl/offerte-aanvragen", lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
  { url: "https://www.multichoiceagency.nl/gratis-adviesgesprek", lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
  { url: "https://www.multichoiceagency.nl/contact", lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/stel-een-vraag", lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
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

// Info & Support
const infoSupport: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/helpdesk", lastModified: NOW, changeFrequency: "monthly", priority: 0.5 },
  { url: "https://www.multichoiceagency.nl/veelgestelde-vragen", lastModified: NOW, changeFrequency: "monthly", priority: 0.5 },
  { url: "https://www.multichoiceagency.nl/kennisbank", lastModified: NOW, changeFrequency: "weekly", priority: 0.6 },
  { url: "https://www.multichoiceagency.nl/downloads", lastModified: NOW, changeFrequency: "monthly", priority: 0.4 },
]

// Legal
const legal: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/privacy-policy", lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
  { url: "https://www.multichoiceagency.nl/algemene-voorwaarden", lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
  { url: "https://www.multichoiceagency.nl/cookiebeleid", lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
]

// Extended Services (jouw lijst)
const extendedServices: SitemapUrl[] = [
  { url: "https://www.multichoiceagency.nl/webdevelopment/custom-webdesign", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/maatwerk-website-laten-maken", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/backend-development", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/webapplicaties", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/headless-ecommerce", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/woocommerce-webshop-laten-maken", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/dashboard-ontwikkeling", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/website-laten-maken", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/frontend-development", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/app-development", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/shopify-webshop-laten-maken", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/portalen-en-platformen", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/wat-is-ux-ui-design", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ux-ui-design/wireframing-prototyping", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ux-ui-design/mobile-app-design", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ux-ui-design/usability-testing", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ux-ui-design/accessibility-audits", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ux-ui-design/user-research", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/webdevelopment/responsief-webdesign", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ux-ui-design/ecommerce-ux", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ux-ui-design/design-systems", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ai-oplossingen/chatbots", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ai-oplossingen/ai-voip-klantenservice", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ai-oplossingen/ai-data-analyse", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ai-oplossingen/ai-marketing", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ai-oplossingen/ai-automatisering", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ai-oplossingen/ai-content-creatie", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/ai-oplossingen/custom-ai-modellen", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/marketing-automatisering", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/automatisering/workflow", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/automatisering/data-pipelines", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/automatisering/rpa", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/automatisering/crm", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  { url: "https://www.multichoiceagency.nl/data-inzichten/dashboards", lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
]

// Combine & deduplicate
const byUrl = new Map<string, SitemapUrl>()
;[
  ...mainPages,
  ...websiteServices,
  ...ecommerceServices,
  ...developmentServices,
  ...marketingServices,
  ...designServices,
  ...technicalServices,
  ...infoSupport,
  ...legal,
  ...extendedServices,
].forEach((it) => byUrl.set(it.url, it))

export const sitemapUrls: SitemapUrl[] = Array.from(byUrl.values())

export const getAllUrls = (): string[] => sitemapUrls.map((item) => item.url)

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
