"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  FolderOpen,
  Lightbulb,
  Users,
  Building2,
  MessageCircle,
  Moon,
  Sun,
  Globe,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Palette,
  Code,
  Search,
  Compass,
  BarChart,
  Database,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Server,
  ShoppingCart,
  Smartphone,
  Camera,
  Video,
  Zap,
  TrendingUp,
  FileText,
  Handshake,
  UserCheck,
  Settings,
  Cloud,
  Lock,
  Headphones,
  HardDrive,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const languages = [{ code: "nl", label: "Nederlands" }];

export interface NavItem {
  href?: string;
  icon: LucideIcon;
  label: string;
  description?: string;
  subItems?: NavItem[];
  ctaLabel?: string;
  ctaLink?: string;
  accentColor?: string;
  iconBgColor?: string;
  isExternal?: boolean;
}

// Complete services structure based on diensten page
const dienstenSubItems: NavItem[] = [
  {
    label: "Webdevelopment & Platforms",
    icon: Code,
    description:
      "High-performance websites, robuuste webshops, en maatwerk applicaties & portalen.",
    ctaLabel: "Alle Webdevelopment Diensten",
    ctaLink: "/webdevelopment",
    accentColor: "text-sky-600",
    iconBgColor: "bg-sky-100 dark:bg-sky-900",
    subItems: [
      {
        label: "Custom Webdesign",
        href: "/webdevelopment/custom-webdesign",
        icon: Palette,
      },
      {
        label: "Website Laten Maken",
        href: "/webdevelopment/website-laten-maken",
        icon: Code,
      },
      {
        label: "Maatwerk Website",
        href: "/webdevelopment/maatwerk-website-laten-maken",
        icon: Settings,
      },
      {
        label: "Frontend Development",
        href: "/webdevelopment/frontend-development",
        icon: Code,
      },
      {
        label: "Backend Development",
        href: "/webdevelopment/backend-development",
        icon: Server,
      },
      {
        label: "App Development",
        href: "/webdevelopment/app-development",
        icon: Smartphone,
      },
      {
        label: "Webapplicaties",
        href: "/webdevelopment/webapplicaties",
        icon: Code,
      },
      {
        label: "E-commerce Oplossingen",
        href: "/webdevelopment/e-commerce",
        icon: ShoppingCart,
      },
      {
        label: "Headless E-commerce",
        href: "/webdevelopment/headless-ecommerce",
        icon: Database,
      },
      {
        label: "Shopify Webshop",
        href: "/webdevelopment/shopify-webshop-laten-maken",
        icon: ShoppingCart,
      },
      {
        label: "WooCommerce Webshop",
        href: "/webdevelopment/woocommerce-webshop-laten-maken",
        icon: ShoppingCart,
      },
      {
        label: "Portalen en Platformen",
        href: "/webdevelopment/portalen-en-platformen",
        icon: Building2,
      },
      {
        label: "Dashboard Ontwikkeling",
        href: "/webdevelopment/dashboard-ontwikkeling",
        icon: BarChart,
      },
    ],
  },
  {
    label: "Hosting & Domein Services",
    icon: Globe,
    description:
      "Betrouwbare hosting, domeinregistratie en technisch onderhoud voor jouw online aanwezigheid.",
    ctaLabel: "Alle Hosting Diensten",
    ctaLink: "/hosting-domein-overzicht",
    accentColor: "text-gray-600",
    iconBgColor: "bg-gray-100 dark:bg-gray-800",
    subItems: [
      {
        label: "Domeinnaam Kopen & Registratie",
        href: "/diensten/domeinnaam-kopen",
        icon: Globe,
      },
      {
        label: "Info Mail Adres Aanmaken",
        href: "/diensten/email-hosting",
        icon: MessageCircle,
      },
      {
        label: "WordPress Webhosting",
        href: "/diensten/wordpress-webhosting",
        icon: Server,
      },
      {
        label: "Performance Webhosting",
        href: "/diensten/performance-webhosting",
        icon: Zap,
      },
      {
        label: "WordPress Onderhoud",
        href: "/diensten/wordpress-onderhoud",
        icon: Settings,
      },
    ],
  },
  {
    label: "UX/UI Design",
    icon: Lightbulb,
    description:
      "Van diepgaand gebruikersonderzoek tot interactieve prototypes en design systems.",
    ctaLabel: "Alle UX/UI Diensten",
    ctaLink: "/ux-ui-design-overzicht",
    accentColor: "text-amber-600",
    iconBgColor: "bg-amber-100 dark:bg-amber-900",
    subItems: [
      {
        label: "Wat is UX/UI Design?",
        href: "/wat-is-ux-ui-design",
        icon: Lightbulb,
      },
      {
        label: "User Research & Persona's",
        href: "/ux-ui-design/user-research",
        icon: Users,
      },
      {
        label: "Wireframing & Prototyping",
        href: "/ux-ui-design/wireframing-prototyping",
        icon: FileText,
      },
      {
        label: "Responsief Webdesign",
        href: "/webdevelopment/responsief-webdesign",
        icon: Smartphone,
      },
      {
        label: "Mobile App Design",
        href: "/ux-ui-design/mobile-app-design",
        icon: Smartphone,
      },
      {
        label: "E-commerce UX Optimalisatie",
        href: "/ux-ui-design/ecommerce-ux",
        icon: ShoppingCart,
      },
      {
        label: "Usability Testing",
        href: "/ux-ui-design/usability-testing",
        icon: UserCheck,
      },
      {
        label: "Design System Ontwikkeling",
        href: "/ux-ui-design/design-systems",
        icon: Building2,
      },
      {
        label: "Accessibility Audits",
        href: "/ux-ui-design/accessibility-audits",
        icon: Users,
      },
    ],
  },
  {
    label: "Online Marketing & Groei",
    icon: BarChart,
    description:
      "Vergroot je online zichtbaarheid en conversies met datagedreven marketing via EssMarketing.",
    ctaLabel: "Naar EssMarketing.nl",
    ctaLink: "https://www.essmarketing.nl/",
    accentColor: "text-emerald-600",
    iconBgColor: "bg-emerald-100 dark:bg-emerald-900",
    isExternal: true,
    subItems: [
      {
        label: "SEO Specialist",
        href: "https://www.essmarketing.nl/seo-specialist",
        icon: Search,
        isExternal: true,
      },
      {
        label: "Google Ads Uitbesteden",
        href: "https://www.essmarketing.nl/google-ads-uitbesteden",
        icon: BarChart,
        isExternal: true,
      },
      {
        label: "Content Marketing",
        href: "https://www.essmarketing.nl/content-marketing-uitbesteden",
        icon: FileText,
        isExternal: true,
      },
      {
        label: "Social Media Advertising",
        href: "https://www.essmarketing.nl/social-media-adverteren",
        icon: Users,
        isExternal: true,
      },
      {
        label: "E-mailmarketing",
        href: "https://www.essmarketing.nl/e-mailmarketing",
        icon: MessageCircle,
        isExternal: true,
      },
      {
        label: "Conversie Optimalisatie",
        href: "https://www.essmarketing.nl/conversie-optimalisatie",
        icon: TrendingUp,
        isExternal: true,
      },
      {
        label: "Marketplace Advertising",
        href: "https://www.essmarketing.nl/marketplaces",
        icon: ShoppingCart,
        isExternal: true,
      },
      {
        label: "Affiliate Marketing",
        href: "https://www.essmarketing.nl/affiliate-marketing",
        icon: Handshake,
        isExternal: true,
      },
    ],
  },
  {
    label: "Strategie & Branding",
    icon: Compass,
    description:
      "Van merkpositionering tot professionele content. Voor foto/video werken we samen met EssMedia.",
    ctaLabel: "Alle Strategie Diensten",
    ctaLink: "/diensten/strategie-en-branding-overzicht",
    accentColor: "text-purple-600",
    iconBgColor: "bg-purple-100 dark:bg-purple-900",
    subItems: [
      {
        label: "Merkpositionering",
        href: "/diensten/merkpositionering",
        icon: Compass,
      },
      {
        label: "Merkidentiteit",
        href: "/diensten/merkidentiteit",
        icon: Palette,
      },
      {
        label: "Visuele Identiteit",
        href: "/diensten/visuele-identiteit",
        icon: Palette,
      },
      { label: "Rebranding", href: "/diensten/rebranding", icon: ArrowRight },
      {
        label: "Campagnes en Activatie",
        href: "/diensten/campagnes-en-activatie",
        icon: Zap,
      },
      {
        label: "Contentmarketing",
        href: "/diensten/contentmarketing",
        icon: FileText,
      },
      {
        label: "Bedrijfsvideo (EssMedia)",
        href: "https://www.essmedia.nl/bedrijfsvideo-laten-maken",
        icon: Video,
        isExternal: true,
      },
      {
        label: "Productvideo (EssMedia)",
        href: "https://www.essmedia.nl/productvideo-laten-maken",
        icon: Video,
        isExternal: true,
      },
      {
        label: "Social Media Content (EssMedia)",
        href: "https://www.essmedia.nl/social-media-content",
        icon: Video,
        isExternal: true,
      },
      {
        label: "Bedrijfsfotografie (EssMedia)",
        href: "https://www.essmedia.nl/fotografie",
        icon: Camera,
        isExternal: true,
      },
      {
        label: "Drone Video & Foto (EssMedia)",
        href: "https://www.essmedia.nl/drone",
        icon: Camera,
        isExternal: true,
      },
      {
        label: "Animatievideo's (EssMedia)",
        href: "https://www.essmedia.nl/animatie",
        icon: Video,
        isExternal: true,
      },
    ],
  },
  {
    label: "AI & Generatieve Oplossingen",
    icon: Sparkles,
    description:
      "Benut de kracht van AI. Van slimme chatbots tot content generatie en voorspellende analyses.",
    ctaLabel: "Alle AI Oplossingen",
    ctaLink: "/ai-oplossingen",
    accentColor: "text-teal-600",
    iconBgColor: "bg-teal-100 dark:bg-teal-900",
    subItems: [
      {
        label: "AI Chatbots & Conversational AI",
        href: "/ai-oplossingen/chatbots",
        icon: MessageCircle,
      },
      {
        label: "AI VoIP & Klantenservice",
        href: "/ai-oplossingen/voip-klantenservice",
        icon: Headphones,
      },
      {
        label: "AI Content Generatie",
        href: "/ai-oplossingen/content-creatie",
        icon: Sparkles,
      },
      {
        label: "AI Data Analyse",
        href: "/ai-oplossingen/data-analyse",
        icon: BarChart,
      },
      {
        label: "Custom AI Modellen",
        href: "/ai-oplossingen/custom-ai-modellen",
        icon: Settings,
      },
      {
        label: "AI Strategie",
        href: "/ai-oplossingen/strategie",
        icon: Compass,
      },
    ],
  },
  {
    label: "Data & Procesautomatisering",
    icon: Database,
    description:
      "Transformeer data in waardevolle inzichten en automatiseer bedrijfsprocessen.",
    ctaLabel: "Alle Data & Automatisering",
    ctaLink: "/data-en-automatisering-overzicht",
    accentColor: "text-rose-600",
    iconBgColor: "bg-rose-100 dark:bg-rose-900",
    subItems: [
      {
        label: "Marketing Automatisering",
        href: "/marketing-automatisering",
        icon: BarChart,
      },
      {
        label: "Bedrijfsproces Automatisering",
        href: "/automatisering/rpa",
        icon: Settings,
      },
      {
        label: "Workflow Optimalisatie",
        href: "/automatisering/workflow",
        icon: ArrowRight,
      },
      { label: "CRM Automatisering", href: "/automatisering/crm", icon: Users },
      {
        label: "Data Pipeline Ontwikkeling",
        href: "/automatisering/data-pipelines",
        icon: Database,
      },
      {
        label: "Business Intelligence",
        href: "/data-inzichten/dashboards",
        icon: BarChart,
      },
    ],
  },
  {
    label: "ICT & Cloud Diensten",
    icon: ShieldCheck,
    description:
      "Betrouwbare ICT-oplossingen via onze partner EssICT. Van systeembeheer tot cloud en security.",
    ctaLabel: "Naar EssICT.nl",
    ctaLink: "https://www.essict.nl/",
    accentColor: "text-blue-600",
    iconBgColor: "bg-blue-100 dark:bg-blue-900",
    isExternal: true,
    subItems: [
      {
        label: "VoIP Telefonie",
        href: "https://www.essict.nl/voip",
        icon: Headphones,
        isExternal: true,
      },
      {
        label: "Systeembeheer",
        href: "https://www.essict.nl/systeembeheer",
        icon: Server,
        isExternal: true,
      },
      {
        label: "Werkplekbeheer",
        href: "https://www.essict.nl/werkplekbeheer",
        icon: Users,
        isExternal: true,
      },
      {
        label: "ICT Beveiliging",
        href: "https://www.essict.nl/ict-beveiliging",
        icon: Lock,
        isExternal: true,
      },
      {
        label: "Office 365 Beheer",
        href: "https://www.essict.nl/office-365",
        icon: Cloud,
        isExternal: true,
      },
      {
        label: "Security Awareness",
        href: "https://www.essict.nl/security-awareness",
        icon: ShieldCheck,
        isExternal: true,
      },
      {
        label: "ICT Support",
        href: "https://www.essict.nl/support",
        icon: Headphones,
        isExternal: true,
      },
      {
        label: "Algemene ICT Diensten",
        href: "https://www.essict.nl/",
        icon: HardDrive,
        isExternal: true,
      },
    ],
  },
];

const baseNavItems: NavItem[] = [
  {
    label: "Diensten",
    icon: Briefcase,
    subItems: dienstenSubItems,
  },
  { href: "/over-ons", icon: Users, label: "Over Ons" },
  { href: "/cases", icon: FolderOpen, label: "Cases" },
  { href: "/webdevelopment/e-commerce", icon: Lightbulb, label: "Ecommerce" },
  {
    href: "/webdevelopment/website-laten-maken",
    icon: Users,
    label: "Websites",
  },
  { href: "/diensten", icon: Lightbulb, label: "AI" },
  { href: "https://www.essict.nl", icon: Lightbulb, label: "ICT" },
  { href: "https://www.essmarketing.nl/", icon: Lightbulb, label: "Marketing" },
  { href: "https://www.essmedia.nl", icon: Lightbulb, label: "Content" },
  { href: "/vacatures", icon: Building2, label: "Werken Bij" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("nl");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  const [mobileMenuStack, setMobileMenuStack] = useState<NavItem[][]>([
    baseNavItems,
  ]);
  const [menuTitlesStack, setMenuTitlesStack] = useState<string[]>(["Menu"]);
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [sidebarMenuStack, setSidebarMenuStack] = useState<NavItem[][]>([
    dienstenSubItems,
  ]);
  const [sidebarTitlesStack, setSidebarTitlesStack] = useState<string[]>([
    "Diensten",
  ]);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [headerBgVisible, setHeaderBgVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const currentMobileMenuItems = mobileMenuStack[mobileMenuStack.length - 1];
  const currentMenuTitle = menuTitlesStack[menuTitlesStack.length - 1];
  const currentSidebarMenuItems = sidebarMenuStack[sidebarMenuStack.length - 1];
  const currentSidebarTitle = sidebarTitlesStack[sidebarTitlesStack.length - 1];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen || isSidebarMenuOpen) return;

      const currentScrollY = window.scrollY;
      const localBannerHeight = bannerRef.current
        ? bannerRef.current.offsetHeight
        : 0;
      const scrollThreshold =
        localBannerHeight > 0 ? localBannerHeight + 10 : 10;
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 80;

      if (currentScrollY <= scrollThreshold) {
        setHeaderVisible(true);
        setHeaderBgVisible(false);
      } else if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);
        setIsSidebarMenuOpen(false);
        setHeaderBgVisible(true);
      } else {
        setHeaderVisible(true);
        setHeaderBgVisible(true);
      }

      if (currentScrollY > headerHeight + localBannerHeight) {
        if (headerVisible) setHeaderBgVisible(true);
      } else if (currentScrollY <= scrollThreshold) {
        setHeaderBgVisible(false);
      }

      setLastScrollY(currentScrollY < 0 ? 0 : currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    lastScrollY,
    isMobileMenuOpen,
    isSidebarMenuOpen,
    bannerHeight,
    headerVisible,
    headerBgVisible,
  ]);

  useEffect(() => {
    if (bannerRef.current && showBanner) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setBannerHeight(entry.contentRect.height);
        }
      });
      resizeObserver.observe(bannerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    } else if (!showBanner) {
      setBannerHeight(0);
    }
  }, [showBanner]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isSidebarMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isSidebarMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      const timer = setTimeout(() => {
        setMobileMenuStack([baseNavItems]);
        setMenuTitlesStack(["Menu"]);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isSidebarMenuOpen) {
      const timer = setTimeout(() => {
        setSidebarMenuStack([dienstenSubItems]);
        setSidebarTitlesStack(["Diensten"]);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isSidebarMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeLanguage = (code: string) => {
    setLanguage(code);
    setIsLanguageOpen(false);
  };

  const handleMobileNavItemClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setMobileMenuStack([...mobileMenuStack, item.subItems]);
      setMenuTitlesStack([...menuTitlesStack, item.label]);
    }
  };

  const handleMobileMenuBack = () => {
    if (mobileMenuStack.length > 1) {
      setMobileMenuStack((prev) => prev.slice(0, -1));
      setMenuTitlesStack((prev) => prev.slice(0, -1));
    }
  };

  const handleSidebarNavItemClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setSidebarMenuStack([...sidebarMenuStack, item.subItems]);
      setSidebarTitlesStack([...sidebarTitlesStack, item.label]);
    } else if (item.href) {
      window.open(item.href, item.isExternal ? "_blank" : "_self");
      setIsSidebarMenuOpen(false);
    }
  };

  const handleSidebarMenuBack = () => {
    if (sidebarMenuStack.length > 1) {
      setSidebarMenuStack((prev) => prev.slice(0, -1));
      setSidebarTitlesStack((prev) => prev.slice(0, -1));
    }
  };

  if (!mounted) return null;

  const headerBaseColor = "bg-black";
  const headerTextColor = "text-white";
  const headerHoverColor = "hover:text-gray-300";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <AnimatePresence>
          {showBanner && (
            <motion.div
              ref={bannerRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gradient-to-r from-[#3a582f] to-[#4a6e3d] text-white w-full"
            >
              <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">
                      Plan direct jouw gratis strategiegesprek en ontdek hoe wij
                      meer bezoekers én klanten voor je realiseren.
                    </span>
                    <Link
                      href="/diensten"
                      className="ml-3 inline-flex items-end text-sm font-medium text-white hover:text-white/90"
                    >
                      <span className="font-bold">Meer informatie</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="flex rounded-md p-1 hover:bg-white/20 focus:outline-none"
                    onClick={() => setShowBanner(false)}
                  >
                    <span className="sr-only">Sluiten</span>
                    <X className="h-4 w-4 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          ref={headerRef}
          className={`w-full transition-colors duration-300 ${
            headerBgVisible ? headerBaseColor + " shadow-lg" : "bg-transparent"
          }`}
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: headerVisible ? 0 : "-100%",
            opacity: headerVisible ? 1 : 0,
            pointerEvents: headerVisible ? "auto" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <motion.div>
                <Link href="/" className="flex items-center">
                  <Image
                    src={
                      theme === "dark"
                        ? "https://cloud.multichoiceagency.nl/wp-content/uploads/2024/12/Logo-wit@4x.png"
                        : "https://cloud.multichoiceagency.nl/wp-content/uploads/2024/12/Logo-wit@4x.png"
                    }
                    alt="Multichoice Logo"
                    width={200}
                    height={50}
                    className="h-12 w-auto"
                  />
                </Link>
              </motion.div>

              <nav className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => setIsSidebarMenuOpen(true)}
                  className={`${headerTextColor} ${headerHoverColor} text-sm font-medium transition-colors relative group flex items-center`}
                >
                  Diensten
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200" />
                </button>
                {baseNavItems.slice(1).map((item) => (
                  <Link
                    key={item.href || item.label}
                    href={item.href || "#"}
                    className={`${headerTextColor} ${headerHoverColor} text-sm font-medium transition-colors relative group`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-6">
                <div className="relative" ref={languageMenuRef}>
                  <LanguageSwitcher/>
                </div>

                <motion.button
                  onClick={toggleTheme}
                  className={`${headerTextColor} ${headerHoverColor} transition-colors`}
                  aria-label="Thema wisselen"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.button>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="bg-[#3a582f] hover:bg-[#2d4625] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg"
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>

              <div className="flex md:hidden">
                <motion.button
                  onClick={toggleTheme}
                  className={`${headerTextColor} ${headerHoverColor} mr-4 transition-colors`}
                  aria-label="Thema wisselen"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.button>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`inline-flex items-center justify-center p-2 rounded-md ${headerTextColor} ${headerHoverColor} focus:outline-none transition-colors z-50`}
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Hoofdmenu openen</span>
                  {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-[#3a582f]/95 dark:bg-[#2d4625]/95 backdrop-blur-md z-40 md:hidden flex flex-col"
                style={{ top: bannerHeight }}
              >
                <div className="flex flex-col items-center justify-start h-full w-full p-6 pt-8">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image
                        src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/12/Logo-wit@4x.png"
                        alt="Logo"
                        width={200}
                        height={60}
                        className="h-12 w-auto"
                      />
                    </Link>
                  </motion.div>
                  <div className="flex items-center justify-between w-full mb-4 px-2">
                    {mobileMenuStack.length > 1 ? (
                      <motion.button
                        onClick={handleMobileMenuBack}
                        className="text-white p-2 -ml-2 hover:bg-white/10 rounded-full"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronLeft className="w-6 h-6" />
                        <span className="sr-only">Terug</span>
                      </motion.button>
                    ) : (
                      <div className="w-10 h-10"></div>
                    )}
                    <motion.h2
                      key={currentMenuTitle + "-title"}
                      className="text-white text-xl font-semibold text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {currentMenuTitle}
                    </motion.h2>
                    <div className="w-10 h-10"></div>
                  </div>
                  <div className="w-full flex-grow overflow-y-auto scrollbar-custom max-h-[60vh]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentMenuTitle}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="w-full"
                      >
                        <motion.div
                          className="flex flex-col items-center space-y-2 w-full px-2"
                          initial="staggerHidden"
                          animate="staggerVisible"
                          exit="staggerExit"
                          variants={{
                            staggerHidden: { opacity: 0 },
                            staggerVisible: {
                              opacity: 1,
                              transition: { staggerChildren: 0.07 },
                            },
                            staggerExit: {
                              opacity: 0,
                              transition: {
                                staggerChildren: 0.05,
                                staggerDirection: -1,
                              },
                            },
                          }}
                        >
                          {currentMobileMenuItems.map((item, index) => (
                            <motion.div
                              key={item.label + currentMenuTitle + index}
                              variants={{
                                staggerHidden: { opacity: 0, y: 20 },
                                staggerVisible: { opacity: 1, y: 0 },
                                staggerExit: {
                                  opacity: 0,
                                  y: -10,
                                  transition: { duration: 0.15 },
                                },
                              }}
                              className="w-full"
                            >
                              {item.subItems && item.subItems.length > 0 ? (
                                <button
                                  onClick={() => handleMobileNavItemClick(item)}
                                  className="flex items-center justify-between text-white text-lg font-medium py-3 px-4 hover:bg-white/10 rounded-lg transition-colors w-full min-h-[60px]"
                                >
                                  <span className="flex items-center min-w-0 flex-1">
                                    <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                                    <span className="truncate">
                                      {item.label}
                                    </span>
                                  </span>
                                  <ChevronRight className="w-5 h-5 ml-2 flex-shrink-0" />
                                </button>
                              ) : (
                                <Link
                                  href={item.href || "#"}
                                  className="flex items-center text-white text-lg font-medium py-3 px-4 hover:bg-white/10 rounded-lg transition-colors w-full min-h-[60px]"
                                  onClick={() => {
                                    if (item.href) {
                                      setIsMobileMenuOpen(false);
                                    }
                                  }}
                                  target={
                                    item.isExternal ? "_blank" : undefined
                                  }
                                  rel={
                                    item.isExternal
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                >
                                  <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                                  <span className="truncate flex-1">
                                    {item.label}
                                  </span>
                                  {item.isExternal && (
                                    <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
                                  )}
                                </Link>
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: mobileMenuStack.length > 1 ? 0 : 0.3 }}
                    className="mt-auto pt-6 w-full space-y-6"
                  >
                    <div className="flex justify-center space-x-3">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`px-4 py-2 text-sm rounded-full border ${
                            language === lang.code
                              ? "bg-white text-[#3a582f] border-white"
                              : "text-white border-white/30 hover:border-white hover:bg-white/10"
                          } transition-colors`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-white hover:bg-white/90 text-[#3a582f] px-6 py-3.5 rounded-lg text-lg font-medium transition-colors shadow-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* Sidebar Menu - Multi-level Diensten Only */}
      <AnimatePresence>
        {isSidebarMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
              onClick={() => setIsSidebarMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 h-screen w-96 z-[9999] shadow-2xl bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                {sidebarMenuStack.length > 1 ? (
                  <motion.button
                    onClick={handleSidebarMenuBack}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="text-sm font-medium">Terug</span>
                  </motion.button>
                ) : (
                  <div className="flex items-center space-x-2 text-primary">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-sm font-medium">Menu</span>
                  </div>
                )}

                <motion.h2
                  key={currentSidebarTitle + "-sidebar-title"}
                  className="text-lg font-semibold text-gray-900 dark:text-white"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentSidebarTitle}
                </motion.h2>

                <button
                  onClick={() => setIsSidebarMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Menu Content */}
              <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                <div className="flex-1 overflow-y-auto scrollbar-custom">
                  <div className="p-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSidebarTitle}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="space-y-2 pb-32"
                      >
                        {currentSidebarMenuItems.map((item, index) => (
                          <motion.div
                            key={item.label + currentSidebarTitle + index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                          >
                            <button
                              onClick={() => handleSidebarNavItemClick(item)}
                              className="flex items-center justify-between w-full text-left py-4 px-4 rounded-lg transition-all duration-200 group hover:bg-primary/5 hover:border-primary/20 border border-transparent"
                            >
                              <div className="flex items-center space-x-3 min-w-0 flex-1">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-200 flex-shrink-0">
                                  <item.icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200 block truncate">
                                    {item.label}
                                  </span>
                                  {item.description &&
                                    sidebarMenuStack.length === 1 && (
                                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                                        {item.description}
                                      </p>
                                    )}
                                </div>
                              </div>
                              <div className="flex-shrink-0 ml-2">
                                {item.subItems && item.subItems.length > 0 ? (
                                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-gray-400 group-hover:text-primary" />
                                ) : item.isExternal ? (
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors duration-200" />
                                ) : null}
                              </div>
                            </button>
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Fixed Bottom Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex-shrink-0 p-6 space-y-3 bg-gradient-to-t from-white via-white to-white/90 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsSidebarMenuOpen(false)}
                    className="block w-full text-center py-3 px-6 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <span className="font-medium">Contact Opnemen</span>
                  </Link>

                  <Link
                    href="/diensten"
                    onClick={() => setIsSidebarMenuOpen(false)}
                    className="block w-full text-center py-3 px-6 rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    <span className="font-medium">Alle Diensten Bekijken</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Scrollbar Styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Custom scrollbar for sidebar and mobile menu */
        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }

        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }

        /* Dark mode scrollbar */
        .dark .scrollbar-custom::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }
        .dark .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Ensure smooth scrolling */
        .scrollbar-custom {
          scroll-behavior: smooth;
        }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Prevent text overflow in navigation items */
        .nav-item-text {
          word-break: break-word;
          hyphens: auto;
        }
      `}</style>
    </>
  );
}
