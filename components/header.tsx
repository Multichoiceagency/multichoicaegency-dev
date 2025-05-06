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
  MoreHorizontal,
} from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { usePathname } from "next/navigation"

const languages = [
  { code: "nl", label: "Nederlands" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
  const [language, setLanguage] = useState("nl")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [bannerHeight, setBannerHeight] = useState(0)
  const bannerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const languageMenuRef = useRef<HTMLDivElement>(null)
  const moreMenuRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  // Ensure theme component renders correctly
  useEffect(() => {
    setMounted(true)
  }, [])

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100) // Show bottom nav after scrolling 100px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Measure banner height
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

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
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

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Change language
  const changeLanguage = (code: string) => {
    setLanguage(code)
    setIsLanguageOpen(false)
  }

  // Detect footer visibility
  useEffect(() => {
    const footer = document.querySelector("footer")
    if (!footer) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }, // Trigger when at least 10% of the footer is visible
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  // If not mounted yet, don't render to avoid hydration mismatch
  if (!mounted) return null

  // Define navigation items
  const navItems = [
    { href: "/diensten", icon: Briefcase, label: "Diensten" },
    { href: "/branches", icon: Building2, label: "Branches" },
    { href: "/cases", icon: FolderOpen, label: "Cases" },
    { href: "/inzichten", icon: Lightbulb, label: "Inzichten" },
    { href: "/cultuur", icon: Users, label: "Cultuur" },
    { href: "/werken-bij", icon: Building2, label: "Werken Bij" },
  ]

  // Determine which items to show based on screen size
  const visibleNavItems = isMobile ? navItems.slice(0, 3) : isTablet ? navItems.slice(0, 4) : navItems

  // Determine text color based on page and scroll state
  const textColor = "text-white"
  const hoverColor = "hover:text-white/80"

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Announcement Banner - On top of the header */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            ref={bannerRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gradient-to-r from-[#3a582f] to-[#4a6e3d] text-white w-full"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Ontdek onze nieuwe diensten en mogelijkheden</span>
                  <Link
                    href="/diensten"
                    className="ml-3 inline-flex items-center text-sm font-medium text-white hover:text-white/90"
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

      {/* Transparent Header - Directly below the banner */}
      <motion.div
        ref={headerRef}
        className="w-full"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isScrolled ? 0 : 1,
          pointerEvents: isScrolled ? "none" : "auto",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Larger Size */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <Image src="/logos/logo-wit.png" alt="Logo" width={200} height={60} className="h-12 w-auto" />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`${textColor} ${hoverColor} text-sm font-medium transition-colors relative group`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Language Selector */}
              <motion.div
                className="relative"
                ref={languageMenuRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className={`flex items-center ${textColor} ${hoverColor} transition-colors`}
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
                      className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700"
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
                              ? "text-[#3a582f] dark:text-[#4a6e3d] font-medium"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {lang.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`${textColor} ${hoverColor} transition-colors`}
                aria-label="Toggle theme"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
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

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <motion.button
                onClick={toggleTheme}
                className={`${textColor} ${hoverColor} mr-4 transition-colors`}
                aria-label="Toggle theme"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} ${hoverColor} focus:outline-none transition-colors z-50`}
                aria-expanded="false"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Fullscreen Mobile Menu */}
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
              <div className="flex flex-col items-center justify-center h-full w-full p-8 overflow-y-auto">
                <motion.div
                  className="flex flex-col items-center space-y-8 w-full"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {/* Logo */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: -20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="mb-8"
                  >
                    <Image src="/logos/logo-wit.png" alt="Logo" width={200} height={60} className="h-12 w-auto" />
                  </motion.div>

                  {/* Navigation Items */}
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-center text-white text-2xl font-medium py-3 hover:text-white/80 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-6 h-6 mr-3" />
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Language Selector */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="flex justify-center space-x-4 mt-8 w-full"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`px-4 py-2 rounded-full border ${
                          language === lang.code
                            ? "bg-white text-[#3a582f] border-white"
                            : "text-white border-white/30 hover:border-white"
                        } transition-colors`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>

                  {/* Contact Button */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="mt-8 w-full"
                  >
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-white hover:bg-white/90 text-[#3a582f] px-6 py-4 rounded-lg text-lg font-medium transition-colors shadow-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Social Links at bottom */}
              <motion.div
                className="flex justify-center space-x-6 pb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {/* Example social icons - replace with your actual social links */}
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Apple-style Bottom Navigation - Appears when scrolled */}
      <AnimatePresence>
        {isScrolled && !isFooterVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4"
          >
            <div
              className={`flex items-center backdrop-blur-xl bg-gradient-to-r from-[#3a582f]/85 to-[#4a6e3d]/85 dark:from-[#3a582f]/90 dark:to-[#2d4625]/90 rounded-full shadow-lg border border-white/20 dark:border-white/10 ${
                isMobile ? "px-3 py-3" : "px-6 py-4"
              } max-w-fit mx-auto`}
            >
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center justify-center mx-2 transition-transform duration-300 hover:scale-110"
              >
                <Image src="/logos/logo-wit.png" alt="Logo" width={120} height={30} className="h-8 w-auto" />
              </Link>

              {/* Navigation Items */}
              <nav
                className={`flex items-center ${isMobile ? "space-x-4" : isTablet ? "space-x-6" : "space-x-8"} mx-4`}
              >
                {visibleNavItems.map(({ href, icon: Icon, label }) => (
                  <Link key={href} href={href} className="group flex flex-col items-center relative">
                    <div className="relative">
                      <motion.div whileHover={{ scale: 1.2 }} className="relative flex items-center justify-center">
                        <Icon
                          className="w-5 h-5 text-white/90 transition-colors duration-300 group-hover:text-white"
                          style={{
                            filter: "drop-shadow(0 0 0 rgba(255,255,255,0))",
                            transition: "filter 0.3s ease",
                          }}
                        />
                        {/* Glow effect on hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 z-0"
                          style={{
                            filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))",
                          }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.div>
                      {/* Hover effect circle */}
                      <motion.div
                        className="absolute -inset-3 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 -z-10"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    {!isMobile && (
                      <span className="text-xs mt-1.5 text-white/80 transition-colors duration-300 group-hover:text-white">
                        {label}
                      </span>
                    )}
                    {/* Indicator dot for active page */}
                    <motion.div
                      className="w-1 h-1 rounded-full bg-white absolute -bottom-1 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                ))}

                {/* More menu for mobile/tablet */}
                {(isMobile || isTablet) && navItems.length > visibleNavItems.length && (
                  <div className="relative" ref={moreMenuRef}>
                    <button
                      onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                      className="group flex flex-col items-center relative"
                    >
                      <div className="relative">
                        <motion.div whileHover={{ scale: 1.2 }} className="relative flex items-center justify-center">
                          <MoreHorizontal
                            className="w-5 h-5 text-white/90 transition-colors duration-300 group-hover:text-white"
                            style={{
                              filter: "drop-shadow(0 0 0 rgba(255,255,255,0))",
                              transition: "filter 0.3s ease",
                            }}
                          />
                          {/* Glow effect on hover */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 z-0"
                            style={{
                              filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))",
                            }}
                          >
                            <MoreHorizontal className="w-5 h-5 text-white" />
                          </motion.div>
                        </motion.div>
                        {/* Hover effect circle */}
                        <motion.div
                          className="absolute -inset-3 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 -z-10"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      {!isMobile && (
                        <span className="text-xs mt-1.5 text-white/80 transition-colors duration-300 group-hover:text-white">
                          Meer
                        </span>
                      )}
                    </button>

                    {/* More menu dropdown */}
                    <AnimatePresence>
                      {isMoreMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full mb-2 right-0 backdrop-blur-xl bg-[#3a582f]/95 dark:bg-[#2d4625]/95 rounded-xl border border-white/20 shadow-lg py-2 w-40"
                        >
                          {navItems.slice(visibleNavItems.length).map(({ href, icon: Icon, label }) => (
                            <Link
                              key={href}
                              href={href}
                              className="flex items-center px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                              onClick={() => setIsMoreMenuOpen(false)}
                            >
                              <Icon className="w-4 h-4 mr-2" />
                              <span className="text-sm">{label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </nav>

              {/* Divider - more subtle */}
              <div className="h-10 w-px bg-white/30 mx-2"></div>

              {/* Controls Section */}
              <div className={`flex items-center ${isMobile ? "space-x-4" : "space-x-6"} mx-2`}>
                {/* Theme Switcher */}
                <button
                  onClick={toggleTheme}
                  className="group flex flex-col items-center relative"
                  aria-label="Toggle theme"
                >
                  <div className="relative">
                    <motion.div whileHover={{ scale: 1.2 }} className="relative flex items-center justify-center">
                      {theme === "dark" ? (
                        <Sun
                          className="w-5 h-5 text-white/90 transition-colors duration-300 group-hover:text-white"
                          style={{
                            filter: "drop-shadow(0 0 0 rgba(255,255,255,0))",
                            transition: "filter 0.3s ease",
                          }}
                        />
                      ) : (
                        <Moon
                          className="w-5 h-5 text-white/90 transition-colors duration-300 group-hover:text-white"
                          style={{
                            filter: "drop-shadow(0 0 0 rgba(255,255,255,0))",
                            transition: "filter 0.3s ease",
                          }}
                        />
                      )}
                      {/* Glow effect on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 z-0"
                        style={{
                          filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))",
                        }}
                      >
                        {theme === "dark" ? (
                          <Sun className="w-5 h-5 text-white" />
                        ) : (
                          <Moon className="w-5 h-5 text-white" />
                        )}
                      </motion.div>
                    </motion.div>
                    {/* Hover effect circle */}
                    <motion.div
                      className="absolute -inset-3 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 -z-10"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  {!isMobile && (
                    <span className="text-xs mt-1.5 text-white/80 transition-colors duration-300 group-hover:text-white">
                      {theme === "dark" ? "Light" : "Dark"}
                    </span>
                  )}
                </button>

                {/* Language Switcher */}
                <div className="relative">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="group flex flex-col items-center relative"
                    aria-label="Change language"
                  >
                    <div className="relative">
                      <motion.div whileHover={{ scale: 1.2 }} className="relative flex items-center justify-center">
                        <Globe
                          className="w-5 h-5 text-white/90 transition-colors duration-300 group-hover:text-white"
                          style={{
                            filter: "drop-shadow(0 0 0 rgba(255,255,255,0))",
                            transition: "filter 0.3s ease",
                          }}
                        />
                        {/* Glow effect on hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 z-0"
                          style={{
                            filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))",
                          }}
                        >
                          <Globe className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.div>
                      {/* Hover effect circle */}
                      <motion.div
                        className="absolute -inset-3 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 -z-10"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    {!isMobile && (
                      <span className="text-xs mt-1.5 text-white/80 transition-colors duration-300 group-hover:text-white">
                        {language.toUpperCase()}
                      </span>
                    )}
                  </button>

                  {/* Language Dropdown - Apple-style */}
                  <AnimatePresence>
                    {isLanguageOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-[#3a582f]/95 dark:bg-[#2d4625]/95 rounded-xl border border-white/20 shadow-lg py-2 w-36"
                      >
                        {languages.map((lang) => (
                          <motion.button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            whileHover={{
                              backgroundColor: "rgba(255,255,255,0.15)",
                            }}
                            className={`w-full text-left px-4 py-2 text-sm rounded-lg mx-1 transition-colors ${
                              language === lang.code ? "text-white font-medium" : "text-white/80"
                            }`}
                          >
                            {lang.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Contact Button */}
                <Link href="/contact" className="group flex flex-col items-center relative">
                  <div className="relative">
                    <motion.div whileHover={{ scale: 1.2 }} className="relative flex items-center justify-center">
                      <MessageCircle
                        className="w-5 h-5 text-white/90 transition-colors duration-300 group-hover:text-white"
                        style={{
                          filter: "drop-shadow(0 0 0 rgba(255,255,255,0))",
                          transition: "filter 0.3s ease",
                        }}
                      />
                      {/* Glow effect on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 z-0"
                        style={{
                          filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))",
                        }}
                      >
                        <MessageCircle className="w-5 h-5 text-white" />
                      </motion.div>
                    </motion.div>
                    {/* Hover effect circle */}
                    <motion.div
                      className="absolute -inset-3 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 -z-10"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  {!isMobile && (
                    <span className="text-xs mt-1.5 text-white/80 transition-colors duration-300 group-hover:text-white">
                      Contact
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
