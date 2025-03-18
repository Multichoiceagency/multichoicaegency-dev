"use client"

import type React from "react"

import { JSX, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
  faUsers,
  faUserTie,
  faTrophy,
  faHandshake,
  faTruck,
  faChartBar,
  faHospital,
  faBuilding,
  faGraduationCap,
  faLeaf,
  faUtensils,
  faTools,
  faLightbulb,
  faEdit,
  faCode,
  faServer,
  faChartLine,
  faBriefcase,
  faUserPlus,
  faChartPie,
  faRobot,
  faCalendarAlt,
  faFileAlt,
  faGlobe,
  faShoppingCart,
  faCloud,
} from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { AppleStyleThemeSwitcher } from "./apple-style-theme-switcher"
import {
  Palette,
  Smartphone,
  Globe,
  Code,
  ShoppingCart,
  FileText,
  Search,
  Video,
  PlayCircle,
  ShoppingBagIcon,
} from "lucide-react"
import { IconBrandWordpress } from "@tabler/icons-react"
// Voeg deze import toe bovenaan het bestand
import { MegaMenuCases } from "./mega-menu-cases"
import { ChevronRight } from "lucide-react"

interface MenuItem {
  title: string
  href?: string
  description?: string
}

// Interfaces voor de verschillende submenu's
interface CaseItem {
  title: string
  href: string
  description?: string
}

interface DevelopmentItem {
  title: string
  href: string
  description?: string
}

interface PortalenItem {
  title: string
  href: string
  description?: string
}

interface IndustrieItem {
  title: string
  href: string
  description?: string
}

interface Direction {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

interface Solution {
  icon: React.ReactNode
  title: string
  href: string
  isNew?: boolean
}

// Portalen interface en data
interface Portal {
  icon: JSX.Element
  title: string
  subtitle: string
  description: string
  link: string
  buttonText: string
}

const portals: Portal[] = [
  {
    icon: <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-primary" />,
    title: "Ledenportaal",
    subtitle: "Voor verenigingen / stichtingen",
    description:
      "Elke vereniging heeft leden. Stel je voor dat bijna alle administratieve handelingen gedigitaliseerd zijn. Leden kunnen hun gegevens inzien, wijzigen, abonnementen beheren en verenigingsnieuws bekijken. Dit bespaart tijd en werk.",
    link: "/portalen/ledenportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} className="h-6 w-6 text-primary" />,
    title: "Klantenportaal",
    subtitle: "Voor commerciële organisaties",
    description:
      "Met een klantenportaal kunnen jouw klanten 24/7 bestellingen doorgeven, afspraken maken, orders volgen en informatie bekijken. Dit verbetert klanttevredenheid en verhoogt omzet.",
    link: "/portalen/klantenportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faTrophy} className="h-6 w-6 text-primary" />,
    title: "Medewerkersportaal",
    subtitle: "Intranet voor medewerkers",
    description:
      "Een medewerkersportaal fungeert als een intranet waar werknemers informatie kunnen bekijken en delen, zoals loonstroken, planning, beschikbaarheid en (bedrijfs)nieuws. Dit versterkt interne communicatie.",
    link: "/portalen/medewerkersportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faHandshake} className="h-6 w-6 text-primary" />,
    title: "Partnerportaal",
    subtitle: "Voor zakelijke samenwerkingen",
    description:
      "Partners kunnen toegang krijgen tot gedeelde projecten, documenten en statusupdates. Hiermee verbeter je samenwerking, communicatie en transparantie met je zakelijke partners.",
    link: "/portalen/partnerportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faTruck} className="h-6 w-6 text-primary" />,
    title: "Leveranciersportaal",
    subtitle: "Voor supply chain management",
    description:
      "Met een leveranciersportaal kun je bestellingen beheren, leveringsstatussen volgen en eenvoudig communiceren met je leveranciers. Dit stroomlijnt je supply chain en minimaliseert fouten.",
    link: "/portalen/leveranciersportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faChartBar} className="h-6 w-6 text-primary" />,
    title: "Salesportaal",
    subtitle: "Voor inzichten in je bedrijf",
    description:
      "Met een salesportaal krijg je realtime inzicht in verkoopgegevens, klantanalyses en prestatieoverzichten. Hiermee kun je strategieën verbeteren en groeikansen identificeren.",
    link: "/portalen/salesportaal",
    buttonText: "Meer informatie",
  },
]

const directions: Direction[] = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Website laten maken",
    description: "Wij bouwen dynamische en schaalbare websites.",
    href: "/website-laten-maken",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Webshop laten maken",
    description: "Creëer krachtige online winkels.",
    href: "/webshop-laten-maken",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Ontwerp intuïtieve en visueel aantrekkelijke interfaces.",
    href: "/wat-is-ux-ui-design",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Maatwerk Websites",
    description: "Ontwikkel websites die perfect passen bij jouw merk.",
    href: "/maatwerk-website-laten-maken",
  },
  {
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    title: "Shopify Webshop laten maken",
    description: "Ideaal voor snelle conversies",
    href: "/shopify-webshop-laten-maken",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Woocommerce webshop laten maken",
    description: "Geheel een ontwerp op maat naar jouw wensen en eisen.",
    href: "/woocommerce-webshop-laten-maken",
  },
  {
    icon: <IconBrandWordpress className="h-5 w-5" />,
    title: "Wordpress website laten maken",
    description: "Geheel een ontwerp op maat naar jouw wensen en eisen.",
    href: "/wordpress-website-laten-maken",
  },
]

const solutions: Solution[][] = [
  [
    {
      icon: <Search className="h-5 w-5" />,
      title: "SEO",
      href: "https://www.essmarketing.nl/seo-uitbesteden",
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Google Ads",
      href: "https://www.essmarketing.nl/google-ads-uitbesteden",
    },
  ],
  [
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Social Media",
      href: "https://www.essmarketing.nl/social-media",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Content Marketing",
      href: "https://www.essmarketing.nl/content-marketing",
    },
  ],
  [
    {
      icon: <Video className="h-5 w-5" />,
      title: "Bedrijfsvideo laten maken",
      href: "https://www.essmedia.nl/bedrijfsvideo-laten-maken",
    },
    {
      icon: <PlayCircle className="h-5 w-5" />,
      title: "Productvideo laten maken",
      href: "https://www.essmedia.nl/productvideo-video-laten-maken",
    },
  ],
]

// De hoofdmenu-items
const menuItems: MenuItem[] = [
  { title: "Wat wij doen" },
  { title: "Cases" },
  { title: "Development" },
  { title: "Portalen" },
  { title: "Industrieën" },
  { title: "Contact", href: "/contact" },
  { title: "Over Ons", href: "/over-ons" },
]

// Cases submenu items
const casesItems: CaseItem[] = [
  {
    title: "Alle Cases",
    href: "/cases",
    description: "Bekijk al onze projecten en succesverhalen.",
  },
  {
    title: "E-commerce",
    href: "/cases/e-commerce",
    description: "Webshops en online verkoopplatformen.",
  },
  {
    title: "Websites",
    href: "/cases/websites",
    description: "Professionele websites voor diverse branches.",
  },
  {
    title: "Webapplicaties",
    href: "/cases/webapplicaties",
    description: "Complexe web-gebaseerde applicaties.",
  },
  {
    title: "Portalen",
    href: "/cases/portalen",
    description: "Klant- en leveranciersportalen.",
  },
]

// Development submenu items
const developmentItems: DevelopmentItem[] = [
  {
    title: "Frontend Development",
    href: "/frontend-development",
    description: "Gebruiksvriendelijke interfaces en interacties.",
  },
  {
    title: "Backend Development",
    href: "/backend-development",
    description: "Krachtige server-side oplossingen.",
  },
  {
    title: "WordPress Development",
    href: "/wordpress-development",
    description: "Websites en webshops op WordPress.",
  },
  {
    title: "WooCommerce Webshops",
    href: "/woocommerce-webshop-laten-maken",
    description: "E-commerce oplossingen met WooCommerce.",
  },
  {
    title: "Shopify Development",
    href: "/shopify-development",
    description: "Professionele Shopify webshops.",
  },
  {
    title: "API Ontwikkeling",
    href: "/api-ontwikkeling",
    description: "Integraties en API-oplossingen.",
  },
]

// Portalen submenu items
const portalenItems: PortalenItem[] = [
  {
    title: "Klantportalen",
    href: "/klantportalen",
    description: "Portalen voor klantinteractie en self-service.",
  },
  {
    title: "Leveranciersportalen",
    href: "/leveranciersportalen",
    description: "Portalen voor leveranciersbeheer.",
  },
  {
    title: "Intranet Oplossingen",
    href: "/intranet-oplossingen",
    description: "Interne communicatie- en samenwerkingsplatformen.",
  },
  {
    title: "Extranet Systemen",
    href: "/extranet-systemen",
    description: "Beveiligde externe toegang tot bedrijfsgegevens.",
  },
]

// Industrieën submenu items
const industrieItems: IndustrieItem[] = [
  {
    title: "Gezondheidszorg",
    href: "/industrie/gezondheidszorg",
    description: "Digitale oplossingen voor de zorgsector.",
  },
  {
    title: "Onderwijs",
    href: "/industrie/onderwijs",
    description: "Educatieve platforms en leeroplossingen.",
  },
  {
    title: "Retail",
    href: "/industrie/retail",
    description: "E-commerce en omnichannel oplossingen.",
  },
  {
    title: "Financiële Dienstverlening",
    href: "/industrie/financiele-dienstverlening",
    description: "Veilige en betrouwbare financiële platforms.",
  },
  {
    title: "Productie",
    href: "/industrie/productie",
    description: "Digitalisering van productieprocessen.",
  },
  {
    title: "Logistiek",
    href: "/industrie/logistiek",
    description: "Supply chain en logistieke oplossingen.",
  },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Hier houden we bij welk submenu actief is
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  // Render een enkel menu-item in het hoofdmenu
  const renderMenuItem = (item: MenuItem) => (
    <div key={item.title} className="py-4 border-b border-gray-100 dark:border-gray-800">
      {item.href ? (
        <Link
          href={item.href}
          onClick={onClose}
          className="flex justify-between items-center w-full text-left text-2xl font-medium"
        >
          <span>{item.title}</span>
        </Link>
      ) : (
        <button
          onClick={() => setActiveSubmenu(item.title)}
          className="flex justify-between items-center w-full text-left text-2xl font-medium"
        >
          <span>{item.title}</span>
          <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6" />
        </button>
      )}
    </div>
  )

  // Speciaal submenu voor "Wat wij doen" met de mega-menu structuur
  const renderWatWijDoenSubmenu = () => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
    >
      <div className="p-6">
        {/* Header met terugknop en sluitknop */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setActiveSubmenu(null)} className="flex items-center text-xl">
            <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 mr-2" />
            Terug
          </button>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          </Button>
        </div>

        {/* DIENSTEN-groep */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold mb-6 uppercase tracking-wider">DIENSTEN</h3>
          <div className="space-y-6">
            {directions.map((direction, index) => (
              <Link
                key={index}
                href={direction.href}
                className="flex items-start gap-4 group text-sm"
                onClick={onClose}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md hover:text-black bg-primary/10 text-primary">
                  {direction.icon}
                </div>
                <div>
                  <div className="font-medium text-foreground group-hover:text-primary">{direction.title}</div>
                  <div className="text-sm text-muted-foreground">{direction.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* OPLOSSINGEN-groep */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold mb-6 uppercase tracking-wider">OPLOSSINGEN</h3>
          <div className="space-y-6">
            {solutions.flat().map((solution, index) => (
              <Link key={index} href={solution.href} className="flex items-center gap-3 group" onClick={onClose}>
                <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 dark:bg-gray-900 text-foreground group-hover:text-primary">
                  {solution.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground group-hover:text-primary">{solution.title}</span>
                  {solution.isNew && (
                    <span className="text-[10px] font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-1.5 py-0.5 rounded">
                      NIEUW
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Video */}
        <div className="mt-8 pt-6 border-t">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <video
              src="https://cdn.dribbble.com/userupload/15425359/file/original-2b2e2d473e5fee8e7d8d4f6ee7860d94.mp4"
              poster="https://cdn.dribbble.com/userupload/15425359/file/original-2b2e2d473e5fee8e7d8d4f6ee7860d94.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <track kind="captions" src="/videos/services-overview-captions.vtt" srcLang="nl" label="Nederlands" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 pointer-events-none">
              <h3 className="text-white text-xl font-semibold mb-2">Leer meer over onze diensten</h3>
              <p className="text-white/80 text-sm mb-4">Ontdek hoe ons platform uw organisatie kan helpen groeien.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  // Render Cases submenu met de MegaMenuCases component
  const renderCasesSubmenu = () => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
    >
      <div className="p-6">
        {/* Header met terugknop en sluitknop */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setActiveSubmenu(null)} className="flex items-center text-xl">
            <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 mr-2" />
            Terug
          </button>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          </Button>
        </div>

        {/* MegaMenuCases component */}
        <MegaMenuCases isOpen={true} onClose={onClose} isMobile={true} />
      </div>
    </motion.div>
  )

  // Render Development submenu
  const renderDevelopmentSubmenu = () => {
    const menuItems = [
      {
        icon: <FontAwesomeIcon icon={faCode} className="h-6 w-6" />,
        title: "Frontend Development",
        description: "Bouw snelle en aantrekkelijke interfaces met moderne technologieën.",
        href: "/frontend-development",
      },
      {
        icon: <FontAwesomeIcon icon={faServer} className="h-6 w-6" />,
        title: "Backend Development",
        description: "Ontwikkel robuuste en schaalbare backend-oplossingen voor elke toepassing.",
        href: "/backend-development",
      },
      {
        icon: <FontAwesomeIcon icon={faChartLine} className="h-6 w-6" />,
        title: "Dashboard Ontwikkeling",
        description: "Creëer maatwerk dashboards met data-inzichten en interactieve functionaliteiten.",
        href: "/dashboard-ontwikkeling",
      },
      {
        icon: <FontAwesomeIcon icon={faBriefcase} className="h-6 w-6" />,
        title: "CRM Systemen",
        description: "Beheer klantrelaties en verkoopprocessen met efficiënte CRM-oplossingen.",
        href: "/crm-systemen",
      },
      {
        icon: <FontAwesomeIcon icon={faUserPlus} className="h-6 w-6" />,
        title: "Lead Management Systemen",
        description: "Automatiseer het beheer van leads en optimaliseer je verkoopprocessen.",
        href: "/lead-management",
      },
      {
        icon: <FontAwesomeIcon icon={faChartPie} className="h-6 w-6" />,
        title: "Marketing Automatisering",
        description: "Implementeer software om marketingcampagnes effectiever en efficiënter te maken.",
        href: "/marketing-automatisering",
      },
      {
        icon: <FontAwesomeIcon icon={faRobot} className="h-6 w-6" />,
        title: "AI Geoptimaliseerde Systemen",
        description: "Gebruik AI om processen te optimaliseren en complexe problemen op te lossen.",
        href: "/ai-systemen",
      },
      {
        icon: <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />,
        title: "Webapplicaties",
        description: "Ontwikkel moderne, responsieve webapplicaties die overal toegankelijk zijn.",
        href: "/webapplicaties",
      },
      {
        icon: <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />,
        title: "E-commerce Platformen",
        description: "Bouw gebruiksvriendelijke en schaalbare e-commerce oplossingen.",
        href: "/e-commerce",
      },
      {
        icon: <FontAwesomeIcon icon={faCloud} className="h-6 w-6" />,
        title: "Portalen en Platformen",
        description: "Ontwikkel portalen en platformen voor interne en externe samenwerking.",
        href: "/portalen-platformen",
      },
      {
        icon: <FontAwesomeIcon icon={faFileAlt} className="h-6 w-6" />,
        title: "Document Management Systemen",
        description: "Beheer documenten efficiënt met versiebeheer en cloudopslag.",
        href: "/document-management",
      },
      {
        icon: <FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" />,
        title: "Planning en Rooster Systemen",
        description: "Implementeer tools voor efficiënte planning en tijdbeheer.",
        href: "/planning-rooster",
      },
    ]

    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween" }}
        className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
      >
        <div className="p-6">
          {/* Header met terugknop en sluitknop */}
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setActiveSubmenu(null)} className="flex items-center text-xl">
              <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 mr-2" />
              Terug
            </button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-900 dark:text-white">
              <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
            </Button>
          </div>

          {/* Development items in een grid voor mobiel */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">DEVELOPMENT</h2>
            <div className="grid grid-cols-1 gap-4">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href} onClick={onClose}>
                  <div className="space-y-2 cursor-pointer border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex items-start gap-4 group">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Render Portalen submenu met de MegaMenuPortalen structuur
  const renderPortalenSubmenu = () => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
    >
      <div className="p-6">
        {/* Header met terugknop en sluitknop */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setActiveSubmenu(null)} className="flex items-center text-xl">
            <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 mr-2" />
            Terug
          </button>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          </Button>
        </div>

        {/* Portalen items in een grid voor mobiel */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">PORTALEN</h2>
          <div className="grid grid-cols-1 gap-4">
            {portals.map((portal, index) => (
              <Link href={portal.link} key={index}>
                <div
                  onClick={onClose}
                  className="border border-gray-200 dark:border-green-700 rounded-lg p-4 bg-white dark:bg-black shadow-sm cursor-pointer hover:shadow-md transition"
                >
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      {portal.icon}
                    </div>
                    <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {portal.subtitle}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{portal.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-4">{portal.description}</p>
                  <Button variant="outline" className="text-primary border-primary w-full">
                    {portal.buttonText}
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  // Render Industrieën submenu
  const renderIndustrieSubmenu = () => {
    const directions: Direction[] = [
      {
        icon: <FontAwesomeIcon icon={faHospital} className="h-6 w-6 text-primary" />,
        title: "Website laten maken voor Gezondheidszorg",
        description:
          "Wij bouwen veilige en gebruiksvriendelijke websites die zorginstellingen verbinden met hun patiënten.",
        href: "/website-laten-maken/website-laten-maken-voor-gezondheidszorg",
      },
      {
        icon: <FontAwesomeIcon icon={faBuilding} className="h-6 w-6 text-primary" />,
        title: "Website laten maken voor Bouw",
        description:
          "Onze oplossingen tonen uw projecten en maken het gemakkelijk voor klanten om offertes aan te vragen.",
        href: "/website-laten-maken/website-laten-maken-voor-bouw",
      },
      {
        icon: <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6 text-primary" />,
        title: "Website laten maken voor Onderwijs",
        description:
          "Wij creëren interactieve platforms die leren en communiceren eenvoudiger maken voor scholen en universiteiten.",
        href: "/website-laten-maken/website-laten-maken-voor-onderwijs",
      },
      {
        icon: <FontAwesomeIcon icon={faLeaf} className="h-6 w-6 text-primary" />,
        title: "Website laten maken voor Duurzaamheid",
        description:
          "Met onze expertise laten we uw groene initiatieven stralen via een inspirerende online aanwezigheid.",
        href: "/website-laten-maken/website-laten-maken-voor-duurzaamheid",
      },
      {
        icon: <FontAwesomeIcon icon={faUtensils} className="h-6 w-6 text-primary" />,
        title: "Website laten maken voor Horeca",
        description: "Wij ontwikkelen stijlvolle websites met online reserveringssystemen en menu-integraties.",
        href: "/website-laten-maken/website-laten-maken-voor-horeca",
      },
    ]

    const solutions: Solution[][] = [
      [
        {
          icon: <FontAwesomeIcon icon={faTools} className="h-5 w-5 text-muted-foreground" />,
          title: "Digitale oplossingen voor Zorg",
          href: "/oplossingen/digitale-zorg",
        },
        {
          icon: <FontAwesomeIcon icon={faGlobe} className="h-5 w-5 text-muted-foreground" />,
          title: "Online platforms voor Bouwprojecten",
          href: "/oplossingen/online-bouw",
        },
        {
          icon: <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5 text-muted-foreground" />,
          title: "E-learning voor Onderwijs",
          href: "/oplossingen/e-learning",
        },
      ],
      [
        {
          icon: <FontAwesomeIcon icon={faEdit} className="h-5 w-5 text-muted-foreground" />,
          title: "Branding voor Duurzaamheidsinitiatieven",
          href: "/oplossingen/branding",
        },
        {
          icon: <FontAwesomeIcon icon={faUtensils} className="h-5 w-5 text-muted-foreground" />,
          title: "Strategieën voor Horeca",
          href: "/oplossingen/horeca",
        },
        {
          icon: <FontAwesomeIcon icon={faChartLine} className="h-5 w-5 text-muted-foreground" />,
          title: "SEO voor Lokale Bedrijven",
          href: "/oplossingen/seo-lokale-bedrijven",
        },
      ],
      [
        {
          icon: <FontAwesomeIcon icon={faLightbulb} className="h-5 w-5 text-muted-foreground" />,
          title: "Marketing voor Industrieën",
          href: "/oplossingen/marketing-industrie",
        },
        {
          icon: <FontAwesomeIcon icon={faGlobe} className="h-5 w-5 text-muted-foreground" />,
          title: "Webhosting en Domeinbeheer",
          href: "/oplossingen/webhosting",
        },
        {
          icon: <FontAwesomeIcon icon={faEdit} className="h-5 w-5 text-muted-foreground" />,
          title: "Content Creatie",
          href: "/oplossingen/content-creatie",
          isNew: true,
        },
      ],
    ]

    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween" }}
        className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
      >
        <div className="p-6">
          {/* Header met terugknop en sluitknop */}
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setActiveSubmenu(null)} className="flex items-center text-xl">
              <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 mr-2" />
              Terug
            </button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-900 dark:text-white">
              <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
            </Button>
          </div>

          {/* Industrieën sectie */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">INDUSTRIËN</h3>
            <div className="space-y-4">
              {directions.map((direction, index) => (
                <Link
                  key={index}
                  href={direction.href}
                  className="flex items-start gap-4 group border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition"
                  onClick={onClose}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                    {direction.icon}
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary">{direction.title}</div>
                    <div className="text-sm text-muted-foreground">{direction.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Oplossingen sectie */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">OPLOSSINGEN</h3>
            <div className="space-y-4">
              {solutions.flat().map((solution, index) => (
                <Link
                  key={index}
                  href={solution.href}
                  className="flex items-center gap-3 group border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition"
                  onClick={onClose}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 dark:bg-gray-800 text-foreground group-hover:text-primary">
                    {solution.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary">
                      {solution.title}
                    </span>
                    {solution.isNew && (
                      <span className="text-[10px] font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-1.5 py-0.5 rounded">
                        NIEUW
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Video sectie */}
          <div className="mt-8 pt-6 border-t">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <video
                src="https://cdn.dribbble.com/userupload/15397598/file/original-efa7e29c3212f8e5b3558d574c7a6654.mp4"
                poster="https://cdn.dribbble.com/userupload/15397598/file/original-efa7e29c3212f8e5b3558d574c7a6654.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <track kind="captions" src="/videos/services-overview-captions.vtt" srcLang="nl" label="Nederlands" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                <h3 className="text-white text-xl font-semibold mb-2">Meer over onze industrie-oplossingen</h3>
                <p className="text-white/80 text-sm mb-4">Ontdek hoe wij jouw branche ondersteunen met maatwerk.</p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/industrien">
                <Button variant="outline" className="w-full gap-2">
                  Bekijk alle industrieën
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
    >
      <div className="p-6">
        {/* Header met logo en themaswitcher */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="flex items-center">
            <Image
              src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/11/logo-multichoiceagency.png"
              alt="Multichoiceagency Logo"
              width={140}
              height={37}
              className="object-contain transition-colors"
            />
          </Link>
          <div className="flex items-center gap-4">
            <AppleStyleThemeSwitcher />
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-900 dark:text-white">
              <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Hoofdmenu */}
        <nav className="mt-6">{menuItems.map((item) => renderMenuItem(item))}</nav>

        {/* Login knop */}
        <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-4">
          <Link
            href="https://projecten.mlt.multichoiceagency.nl/authentication/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center py-3 px-4 bg-green-900 text-white font-semibold rounded-md text-lg hover:bg-green-700 transition duration-300"
          >
            Inloggen
          </Link>
        </div>
      </div>

      {/* Toon de submenu's als ze actief zijn */}
      <AnimatePresence>
        {activeSubmenu === "Wat wij doen" && renderWatWijDoenSubmenu()}
        {activeSubmenu === "Cases" && renderCasesSubmenu()}
        {activeSubmenu === "Development" && renderDevelopmentSubmenu()}
        {activeSubmenu === "Portalen" && renderPortalenSubmenu()}
        {activeSubmenu === "Industrieën" && renderIndustrieSubmenu()}
      </AnimatePresence>
    </motion.div>
  )
}

 