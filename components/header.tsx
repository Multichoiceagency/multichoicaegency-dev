"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
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
  Palette,
  Code,
  Search,
  ChevronLeft,
  Compass,
  BarChart,
  Database,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const languages = [
  { code: "nl", label: "Nederlands" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
]

export interface NavItem {
  href?: string
  icon: LucideIcon
  label: string
  description?: string
  subItems?: NavItem[]
  ctaLabel?: string
  ctaLink?: string
  accentColor?: string
  iconBgColor?: string // For the icon background circle
}

const dienstenSubItems: NavItem[] = [
  {
    label: "Webdevelopment & Platforms",
    icon: Code,
    description: "High-performance websites, robuuste webshops, en maatwerk applicaties.",
    ctaLabel: "Alle Webdevelopment Diensten",
    ctaLink: "/webdevelopment",
    accentColor: "text-sky-600",
    iconBgColor: "bg-sky-100 dark:bg-sky-900",
    subItems: [
      { name: "Custom Webdesign", href: "/webdevelopment/custom-webdesign", icon: Palette },
      { name: "Website Laten Maken", href: "/webdevelopment/website-laten-maken", icon: Code },
      { name: "Maatwerk Website", href: "/webdevelopment/maatwerk-website-laten-maken", icon: Code },
      { name: "E-commerce Oplossingen", href: "/webdevelopment/e-commerce", icon: Briefcase },
    ].map((item) => ({ ...item, label: item.name, href: item.href, icon: item.icon as LucideIcon })),
  },
  {
    label: "UX/UI Design",
    icon: Lightbulb,
    description: "Intuïtieve, toegankelijke en esthetisch aantrekkelijke digitale ervaringen.",
    ctaLabel: "Alle UX/UI Diensten",
    ctaLink: "/ux-ui-design-overzicht",
    accentColor: "text-amber-600",
    iconBgColor: "bg-amber-100 dark:bg-amber-900",
    subItems: [
      { name: "User Research & Persona's", href: "/ux-ui-design/user-research", icon: Users },
      { name: "Wireframing & Prototyping", href: "/ux-ui-design/wireframing-prototyping", icon: FolderOpen },
      { name: "Responsief Webdesign", href: "/webdevelopment/responsief-webdesign", icon: Palette },
      { name: "Design System Ontwikkeling", href: "/ux-ui-design/design-systems", icon: Building2 },
    ].map((item) => ({ ...item, label: item.name, href: item.href, icon: item.icon as LucideIcon })),
  },
  {
    label: "Online Marketing & Groei",
    icon: BarChart,
    description: "Vergroot je online zichtbaarheid en conversies met datagedreven marketing.",
    ctaLabel: "Naar EssMarketing.nl",
    ctaLink: "https://www.essmarketing.nl/",
    accentColor: "text-emerald-600",
    iconBgColor: "bg-emerald-100 dark:bg-emerald-900",
    subItems: [
      { name: "SEO Specialist", href: "https://www.essmarketing.nl/seo-specialist", icon: Search },
      { name: "Google Ads Uitbesteden", href: "https://www.essmarketing.nl/google-ads-uitbesteden", icon: BarChart },
      { name: "Content Marketing", href: "https://www.essmarketing.nl/content-marketing-uitbesteden", icon: Lightbulb },
    ].map((item) => ({ ...item, label: item.name, href: item.href, icon: item.icon as LucideIcon })),
  },
  {
    label: "Strategie & Branding",
    icon: Compass,
    description: "Van merkpositionering en visuele identiteit tot campagnes en content.",
    ctaLabel: "Alle Strategie Diensten",
    ctaLink: "/diensten/strategie-en-branding-overzicht",
    accentColor: "text-purple-600",
    iconBgColor: "bg-purple-100 dark:bg-purple-900",
    subItems: [
      { name: "Merkpositionering", href: "/diensten/merkpositionering", icon: Compass },
      { name: "Visuele Identiteit", href: "/diensten/visuele-identiteit", icon: Palette },
      { name: "Bedrijfsvideo (via EssMedia)", href: "https://www.essmedia.nl/bedrijfsvideo-laten-maken", icon: Code },
    ].map((item) => ({ ...item, label: item.name, href: item.href, icon: item.icon as LucideIcon })),
  },
  {
    label: "AI & Automatisering",
    icon: Sparkles,
    description: "Benut de kracht van AI en automatiseer processen voor maximale efficiëntie.",
    ctaLabel: "Alle AI Oplossingen",
    ctaLink: "/ai-oplossingen",
    accentColor: "text-teal-600",
    iconBgColor: "bg-teal-100 dark:bg-teal-900",
    subItems: [
      { name: "AI Chatbots", href: "/ai-oplossingen/chatbots", icon: MessageCircle },
      { name: "AI Content Generatie", href: "/ai-oplossingen/content-creatie", icon: Sparkles },
      { name: "Bedrijfsproces Automatisering", href: "/automatisering/rpa", icon: Database },
    ].map((item) => ({ ...item, label: item.name, href: item.href, icon: item.icon as LucideIcon })),
  },
  {
    label: "Hosting & ICT Diensten",
    icon: ShieldCheck,
    description: "Betrouwbare hosting, onderhoud en toekomstgerichte ICT-oplossingen.",
    ctaLabel: "Alle Hosting & ICT Diensten",
    ctaLink: "/hosting-domein-overzicht",
    accentColor: "text-blue-600",
    iconBgColor: "bg-blue-100 dark:bg-blue-900",
    subItems: [
      { name: "Performance Webhosting", href: "/diensten/performance-webhosting", icon: Globe },
      { name: "WordPress Onderhoud", href: "/diensten/wordpress-onderhoud", icon: Code },
      { name: "ICT & Cloud (via EssICT)", href: "https://www.essict.nl/", icon: ShieldCheck },
    ].map((item) => ({ ...item, label: item.name, href: item.href, icon: item.icon as LucideIcon })),
  },
]

const baseNavItems: NavItem[] = [
  {
    label: "Diensten",
    icon: Briefcase,
    subItems: dienstenSubItems,
  },
  { href: "/cases", icon: FolderOpen, label: "Cases" },
  { href: "/inzichten", icon: Lightbulb, label: "Inzichten" },
  { href: "/cultuur", icon: Users, label: "Cultuur" },
  { href: "/vacatures", icon: Building2, label: "Werken Bij" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [language, setLanguage] = useState("nl")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [bannerHeight, setBannerHeight] = useState(0)
  const bannerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const languageMenuRef = useRef<HTMLDivElement>(null)

  const [mobileMenuStack, setMobileMenuStack] = useState<NavItem[][]>([baseNavItems])
  const [menuTitlesStack, setMenuTitlesStack] = useState<string[]>(["Menu"])
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  const currentMobileMenuItems = mobileMenuStack[mobileMenuStack.length - 1]
  const currentMenuTitle = menuTitlesStack[menuTitlesStack.length - 1]

  const [lastScrollY, setLastScrollY] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [headerBgVisible, setHeaderBgVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return

      const currentScrollY = window.scrollY
      const localBannerHeight = bannerRef.current ? bannerRef.current.offsetHeight : 0
      const scrollThreshold = localBannerHeight > 0 ? localBannerHeight + 10 : 10
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80 // Approx header height

      if (currentScrollY <= scrollThreshold) {
        setHeaderVisible(true)
        setHeaderBgVisible(false) // Transparent at top
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHeaderVisible(false)
        setIsMegaMenuOpen(false)
        setHeaderBgVisible(true) // Keep bg if it was visible
      } else {
        // Scrolling up
        setHeaderVisible(true)
        setHeaderBgVisible(true) // Show with background when scrolling up past threshold
      }

      // If scrolled past header height, always show bg when header is visible
      if (currentScrollY > headerHeight + localBannerHeight) {
        if (headerVisible) setHeaderBgVisible(true)
      } else if (currentScrollY <= scrollThreshold) {
        setHeaderBgVisible(false) // Back to transparent if at the very top
      }

      setLastScrollY(currentScrollY < 0 ? 0 : currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, isMobileMenuOpen, bannerHeight, headerVisible])

  useEffect(() => {
    if (bannerRef.current && showBanner) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setBannerHeight(entry.contentRect.height)
        }
      })
      resizeObserver.observe(bannerRef.current)
      return () => {
        resizeObserver.disconnect()
      }
    } else if (!showBanner) {
      setBannerHeight(0)
    }
  }, [showBanner])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      const timer = setTimeout(() => {
        setMobileMenuStack([baseNavItems])
        setMenuTitlesStack(["Menu"])
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isMobileMenuOpen])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const changeLanguage = (code: string) => {
    setLanguage(code)
    setIsLanguageOpen(false)
  }

  const handleMobileNavItemClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setMobileMenuStack([...mobileMenuStack, item.subItems])
      setMenuTitlesStack([...menuTitlesStack, item.label])
    }
  }

  const handleMobileMenuBack = () => {
    if (mobileMenuStack.length > 1) {
      setMobileMenuStack((prev) => prev.slice(0, -1))
      setMenuTitlesStack((prev) => prev.slice(0, -1))
    }
  }

  if (!mounted) return null

  const headerBaseColor = "bg-black" // Header is black as per screenshot
  const headerTextColor = "text-white"
  const headerHoverColor = "hover:text-gray-300"

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
              className="bg-gradient-to-r from-[#3a582f] to-[#4a6e3d] text-white w-full" // Banner color from original
            >
              <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">Ontdek onze nieuwe diensten en mogelijkheden</span>
                    <Link
                      href="/diensten"
                      className="ml-3 inline-flex items-end text-sm font-medium text-white hover:text-white/90"
                    >
                      <span>Meer informatie</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="flex rounded-md p-1 hover:bg-white/20 focus:outline-none"
                    onClick={() => setShowBanner(false)}
                  >
                    <span className="sr-only">Dismiss</span>
                    <X className="h-4 w-4 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          ref={headerRef}
          className={`w-full transition-colors duration-300 ${headerBgVisible ? headerBaseColor + " shadow-lg" : "bg-transparent"}`}
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: headerVisible ? 0 : "-100%",
            opacity: headerVisible ? 1 : 0, // Keep opacity tied to visibility for smoother transitions
            pointerEvents: headerVisible ? "auto" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <motion.div>
                <Link href="/" className="flex items-center">
                  {/* Assuming logo-wit.png is suitable for dark background */}
                  <Image
                    src="/logos/logo-wit.png"
                    alt="Multichoice Logo"
                    width={160}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </motion.div>

              <nav className="hidden md:flex items-center space-x-8">
                {baseNavItems.map((item) =>
                  item.subItems && item.label === "Diensten" ? (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setIsMegaMenuOpen(true)}
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                      <button
                        className={`${headerTextColor} ${headerHoverColor} text-sm font-medium transition-colors relative group flex items-center`}
                      >
                        {item.label}
                        <ChevronRight
                          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                            isMegaMenuOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </div>
                  ) : (
                    <Link
                      key={item.href || item.label}
                      href={item.href || "#"}
                      className={`${headerTextColor} ${headerHoverColor} text-sm font-medium transition-colors relative group`}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>

              <div className="hidden md:flex items-center space-x-6">
                <div className="relative" ref={languageMenuRef}>
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className={`flex items-center ${headerTextColor} ${headerHoverColor} transition-colors`}
                  >
                    <Globe className="w-5 h-5" />
                    <span className="ml-1 text-sm">{language.toUpperCase()}</span>
                  </button>
                  <AnimatePresence>
                    {isLanguageOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20 border border-gray-200 dark:border-gray-700"
                      >
                        {languages.map((lang) => (
                          <motion.button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            whileHover={{
                              backgroundColor: theme === "dark" ? "rgba(75, 85, 99, 0.3)" : "rgba(243, 244, 246, 0.7)",
                            }}
                            className={`block w-full text-left px-4 py-2 text-sm ${
                              language === lang.code
                                ? "text-[#3a582f] dark:text-[#4a6e3d] font-medium" // Accent color for selected lang
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {lang.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  onClick={toggleTheme}
                  className={`${headerTextColor} ${headerHoverColor} transition-colors`}
                  aria-label="Toggle theme"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`inline-flex items-center justify-center p-2 rounded-md ${headerTextColor} ${headerHoverColor} focus:outline-none transition-colors z-50`}
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                </motion.button>
              </div>
            </div>
          </div>

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
                {/* Mobile menu content remains the same */}
                <div className="flex flex-col items-center justify-start h-full w-full p-6 pt-8">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image src="/logos/logo-wit.png" alt="Logo" width={180} height={54} className="h-10 w-auto" />
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
                  <div className="w-full flex-grow overflow-y-auto">
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
                          className="flex flex-col items-center space-y-2 w-full"
                          initial="staggerHidden"
                          animate="staggerVisible"
                          exit="staggerExit"
                          variants={{
                            staggerHidden: { opacity: 0 },
                            staggerVisible: { opacity: 1, transition: { staggerChildren: 0.07 } },
                            staggerExit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                          }}
                        >
                          {currentMobileMenuItems.map((item, index) => (
                            <motion.div
                              key={item.label + currentMenuTitle + index}
                              variants={{
                                staggerHidden: { opacity: 0, y: 20 },
                                staggerVisible: { opacity: 1, y: 0 },
                                staggerExit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
                              }}
                              className="w-full"
                            >
                              {item.subItems && item.subItems.length > 0 ? (
                                <button
                                  onClick={() => handleMobileNavItemClick(item)}
                                  className="flex items-center justify-between text-white text-xl font-medium py-3 px-4 hover:bg-white/10 rounded-lg transition-colors w-full"
                                >
                                  <span className="flex items-center">
                                    {" "}
                                    <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />{" "}
                                    <span className="truncate">{item.label}</span>{" "}
                                  </span>
                                  <ChevronRight className="w-5 h-5 ml-2 flex-shrink-0" />
                                </button>
                              ) : (
                                <Link
                                  href={item.href || "#"}
                                  className="flex items-center text-white text-xl font-medium py-3 px-4 hover:bg-white/10 rounded-lg transition-colors w-full"
                                  onClick={() => {
                                    if (item.href) {
                                      setIsMobileMenuOpen(false)
                                    }
                                  }}
                                >
                                  <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />{" "}
                                  <span className="truncate">{item.label}</span>
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
                          className={`px-4 py-2 text-sm rounded-full border ${language === lang.code ? "bg-white text-[#3a582f] border-white" : "text-white border-white/30 hover:border-white hover:bg-white/10"} transition-colors`}
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

      {/* Modern Mega Menu - Styled as per screenshot */}
      <AnimatePresence>
        {isMegaMenuOpen && headerVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} // Adjusted animation for a softer entry
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed left-0 right-0 z-20" // z-index below header controls (like language dropdown)
            style={{ top: bannerHeight + 80 }} // Position below header
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <div className="dark:bg-gray-900 shadow-xl">
              <div className="container bg-white rounded-md shadow-xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid grid-cols-12 gap-x-8">
                  {/* Left Featured Column */}
                  <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-gray-800 dark:bg-gray-950 p-8 rounded-lg text-white">
                    <h2 className="text-2xl font-bold mb-3">
                      Ontdek onze <span className="text-pink-400">Diensten</span>
                    </h2>
                    <p className="text-xl text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
                      Van strategie tot implementatie, wij helpen jouw merk online te winnen met innovatieve oplossingen
                      en maatwerk.
                    </p>
                    <Link
                      href="/diensten" // Main services overview page
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors duration-150"
                    >
                      Alle Diensten Overzicht
                    </Link>
                    <div className="mt-8 border-t border-gray-700 pt-6">
                      <h4 className="text-xl font-semibold text-gray-200 mb-2">Populaire Keuzes:</h4>
                      <ul className="space-y-1.5">
                        <li>
                          <Link
                            href="/webdevelopment/website-laten-maken"
                            onClick={() => setIsMegaMenuOpen(false)}
                            className="text-xs text-gray-400 hover:text-pink-400 transition-colors"
                          >
                            Website Laten Maken
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/ux-ui-design/user-research"
                            onClick={() => setIsMegaMenuOpen(false)}
                            className="text-xs text-gray-400 hover:text-pink-400 transition-colors"
                          >
                            UX/UI Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.essmarketing.nl/seo-specialist"
                            onClick={() => setIsMegaMenuOpen(false)}
                            className="text-xs text-gray-400 hover:text-pink-400 transition-colors"
                          >
                            SEO Optimalisatie
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Service Cards Column */}
                  <div className="col-span-12 md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {dienstenSubItems.map((category) => (
                      <Link
                        key={category.label}
                        href={category.ctaLink || "#"}
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-1 pr-4">
                            {category.label}
                          </h3>
                          <ArrowRight
                            className={`w-4 h-4 flex-shrink-0 ${
                              category.accentColor || "text-pink-500"
                            } opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-0.5`}
                          />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                          {category.description}
                        </p>
                        {/* Optional: List a few sub-items if desired, but the screenshot is very minimal */}
                         <ul className="mt-3 space-y-1">
                          {category.subItems?.slice(0, 2).map(sub => (
                            <li key={sub.label} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                              <ChevronRight className="w-3 h-3 mr-1 text-gray-400"/>
                              {sub.label}
                            </li>
                          ))}
                        </ul>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
