import {
  Code,
  Globe,
  Lightbulb,
  BarChart,
  Compass,
  Sparkles,
  Database,
  ShieldCheck,
  Users,
  Briefcase,
  FolderOpen,
  type LucideIcon,
} from "lucide-react"

export interface ServiceLink {
  name: string
  href: string
  icon?: LucideIcon
  isExternal?: boolean
  description?: string
}

export type NavItem = {
  id: string
  title: string
  href: string
  icon?: LucideIcon
  services?: ServiceLink[]
  megaMenuColumns?: ServiceLink[][]
  accentColor?: string
  isExternal?: boolean
}

// This data should ideally be sourced or transformed from your diensten-page.tsx sections
const dienstenSectionsData = [
  {
    id: "webdevelopment",
    title: "Webdevelopment & Platforms",
    href: "/webdevelopment",
    icon: Code,
    accentColor: "#0EA5E9",
    services: [
      { name: "Custom Webdesign", href: "/webdevelopment/custom-webdesign", description: "Unieke ontwerpen op maat." },
      {
        name: "Website Laten Maken",
        href: "/webdevelopment/website-laten-maken",
        description: "Professionele websites die converteren.",
      },
      {
        name: "Maatwerk Website",
        href: "/webdevelopment/maatwerk-website-laten-maken",
        description: "Complexe oplossingen voor unieke eisen.",
      },
      {
        name: "Frontend Development",
        href: "/webdevelopment/frontend-development",
        description: "Interactieve en snelle gebruikersinterfaces.",
      },
      {
        name: "Backend Development",
        href: "/webdevelopment/backend-development",
        description: "Robuuste server-side logica en API's.",
      },
      {
        name: "App Development",
        href: "/webdevelopment/app-development",
        description: "Mobiele apps voor iOS en Android.",
      },
      { name: "Webapplicaties", href: "/webdevelopment/webapplicaties", description: "Schaalbare web-based software." },
      {
        name: "E-commerce Oplossingen",
        href: "/webdevelopment/e-commerce",
        description: "Online winkels die verkopen.",
      },
      {
        name: "Headless E-commerce",
        href: "/webdevelopment/headless-ecommerce",
        description: "Flexibele en snelle e-commerce.",
      },
      {
        name: "Shopify Webshop",
        href: "/webdevelopment/shopify-webshop-laten-maken",
        description: "Krachtige Shopify winkels.",
      },
      {
        name: "WooCommerce Webshop",
        href: "/webdevelopment/woocommerce-webshop-laten-maken",
        description: "Flexibele WordPress webshops.",
      },
      {
        name: "Portalen en Platformen",
        href: "/webdevelopment/portalen-en-platformen",
        description: "Online communities en service portals.",
      },
      {
        name: "Dashboard Ontwikkeling",
        href: "/webdevelopment/dashboard-ontwikkeling",
        description: "Data visualisatie en beheer.",
      },
    ],
  },
  {
    id: "hosting",
    title: "Hosting & Domein Services",
    href: "/hosting-domein-overzicht",
    icon: Globe,
    accentColor: "#6B7280",
    services: [
      { name: "Domeinnaam Kopen & Registratie", href: "/diensten/domeinnaam-kopen" },
      { name: "Info Mail Adres Aanmaken", href: "/diensten/email-hosting" },
      { name: "WordPress Webhosting", href: "/diensten/wordpress-webhosting" },
      { name: "Performance Webhosting", href: "/diensten/performance-webhosting" },
      { name: "WordPress Onderhoud", href: "/diensten/wordpress-onderhoud" },
    ],
  },
  {
    id: "ux-ui",
    title: "UX/UI Design",
    href: "/ux-ui-design-overzicht",
    icon: Lightbulb,
    accentColor: "#F59E0B",
    services: [
      { name: "Wat is UX/UI Design?", href: "/wat-is-ux-ui-design" },
      { name: "User Research & Persona's", href: "/ux-ui-design/user-research" },
      { name: "Wireframing & Prototyping", href: "/ux-ui-design/wireframing-prototyping" },
      { name: "Responsief Webdesign", href: "/webdevelopment/responsief-webdesign" },
      { name: "Mobile App Design", href: "/ux-ui-design/mobile-app-design" },
      { name: "E-commerce UX Optimalisatie", href: "/ux-ui-design/ecommerce-ux" },
      { name: "Usability Testing & Analyse", href: "/ux-ui-design/usability-testing" },
      { name: "Design System Ontwikkeling", href: "/ux-ui-design/design-systems" },
      { name: "Accessibility (WCAG) Audits", href: "/ux-ui-design/accessibility-audits" },
    ],
  },
  {
    id: "marketing",
    title: "Online Marketing & Groei",
    href: "https://www.essmarketing.nl/",
    isExternal: true,
    icon: BarChart,
    accentColor: "#10B981",
    services: [
      { name: "SEO Specialist", href: "https://www.essmarketing.nl/seo-specialist", isExternal: true },
      { name: "Google Ads Uitbesteden", href: "https://www.essmarketing.nl/google-ads-uitbesteden", isExternal: true },
      {
        name: "Content Marketing Uitbesteden",
        href: "https://www.essmarketing.nl/content-marketing-uitbesteden",
        isExternal: true,
      },
      {
        name: "Social Media Advertising",
        href: "https://www.essmarketing.nl/social-media-adverteren",
        isExternal: true,
      },
      {
        name: "E-mailmarketing & Automatisering",
        href: "https://www.essmarketing.nl/e-mailmarketing",
        isExternal: true,
      },
      {
        name: "Conversie Optimalisatie (CRO)",
        href: "https://www.essmarketing.nl/conversie-optimalisatie",
        isExternal: true,
      },
    ],
  },
  {
    id: "strategie",
    title: "Strategie & Branding",
    href: "/diensten/strategie-en-branding-overzicht",
    icon: Compass,
    accentColor: "#8B5CF6",
    services: [
      { name: "Merkpositionering", href: "/diensten/merkpositionering" },
      { name: "Merkidentiteit", href: "/diensten/merkidentiteit" },
      { name: "Visuele Identiteit", href: "/diensten/visuele-identiteit" },
      { name: "Rebranding", href: "/diensten/rebranding" },
      { name: "Campagnes en Activatie", href: "/diensten/campagnes-en-activatie" },
      { name: "Contentmarketing (Strategie)", href: "/diensten/contentmarketing" },
      { name: "Bedrijfsvideo (EssMedia)", href: "https://www.essmedia.nl/bedrijfsvideo-laten-maken", isExternal: true },
      { name: "Productvideo (EssMedia)", href: "https://www.essmedia.nl/productvideo-laten-maken", isExternal: true },
    ],
  },
  {
    id: "ai",
    title: "AI & Generatieve Oplossingen",
    href: "/ai-oplossingen",
    icon: Sparkles,
    accentColor: "#14B8A6",
    services: [
      { name: "AI Chatbots & Conversational AI", href: "/ai-oplossingen/chatbots" },
      { name: "AI VoIP & Klantenservice Automatisering", href: "/ai-oplossingen/voip-klantenservice" },
      { name: "AI Content Generatie & Optimalisatie", href: "/ai-oplossingen/content-creatie" },
      { name: "AI Gedreven Data Analyse & Inzichten", href: "/ai-oplossingen/data-analyse" },
      { name: "Custom AI Model Ontwikkeling", href: "/ai-oplossingen/custom-ai-modellen" },
      { name: "AI Strategie & Implementatie", href: "/ai-oplossingen/strategie" },
    ],
  },
  {
    id: "data-automatisering",
    title: "Data & Procesautomatisering",
    href: "/data-en-automatisering-overzicht",
    icon: Database,
    accentColor: "#F43F5E",
    services: [
      { name: "Marketing Automatisering", href: "/marketing-automatisering" },
      { name: "Bedrijfsproces Automatisering (RPA)", href: "/automatisering/rpa" },
      { name: "Workflow Optimalisatie & Automatisering", href: "/automatisering/workflow" },
      { name: "CRM Automatisering & Integratie", href: "/automatisering/crm" },
      { name: "Data Pipeline Ontwikkeling & ETL", href: "/automatisering/data-pipelines" },
      { name: "Business Intelligence & Dashboards", href: "/data-inzichten/dashboards" },
    ],
  },
  {
    id: "ict",
    title: "ICT & Cloud Diensten",
    href: "https://www.essict.nl/",
    isExternal: true,
    icon: ShieldCheck,
    accentColor: "#3B82F6",
    services: [
      { name: "VoIP Telefonie Oplossingen", href: "https://www.essict.nl/voip", isExternal: true },
      { name: "Systeembeheer & Netwerkbeheer", href: "https://www.essict.nl/systeembeheer", isExternal: true },
      { name: "Werkplekbeheer", href: "https://www.essict.nl/werkplekbeheer", isExternal: true },
      { name: "ICT Beveiliging", href: "https://www.essict.nl/ict-beveiliging", isExternal: true },
    ],
  },
]

// Function to transform dienstenSections into NavItem[] with megaMenuColumns
export const getNavigationItems = (): NavItem[] => {
  return dienstenSectionsData.map((section) => {
    const services = section.services || []
    // Determine number of columns for mega menu, e.g., max 10 items per column
    const itemsPerColumn = 7
    const numColumns = services.length > itemsPerColumn ? Math.ceil(services.length / itemsPerColumn) : 1
    const columnSize = Math.ceil(services.length / numColumns)

    const megaMenuColumns: ServiceLink[][] = []
    if (services.length > 0) {
      for (let i = 0; i < numColumns; i++) {
        megaMenuColumns.push(services.slice(i * columnSize, (i + 1) * columnSize))
      }
    }

    // Use mega menu if there are columns to display, otherwise use simple services list for dropdown
    const useMegaMenu = megaMenuColumns.length > 0 && megaMenuColumns.some((col) => col.length > 0)

    return {
      ...section,
      megaMenuColumns: useMegaMenu ? megaMenuColumns : undefined,
      services: !useMegaMenu && services.length > 0 ? services : undefined,
    }
  })
}

export const otherNavLinks = [
  { id: "cases", title: "Cases", href: "/cases", icon: FolderOpen },
  { id: "over-ons", title: "Over Ons", href: "/over-ons", icon: Users },
  { id: "vacatures", title: "Werken Bij", href: "/vacatures", icon: Briefcase },
]
