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
  ChevronDown,
  MoreHorizontal,
} from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

const languages = [
  { code: "nl", label: "Nederlands" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
  const [language, setLanguage] = useState("nl")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const moreMenuRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  // Ensure theme component renders correctly
  useEffect(() => {
    setMounted(true)
  }, [])

  // Track scroll position to determine when to show bottom navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100) // Show bottom nav after scrolling 100px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close more menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Change language
  const changeLanguage = (code: string) => {
    setLanguage(code)
    setIsLanguageOpen(false)
    setIsMobileLanguageOpen(false)
  }

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

  return (
    <>
      {/* Main Header - NOT fixed, scrolls with the page */}
      <header className="w-full py-4 z-40 relative">
        <div className="container mx-auto px-4">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full border border-[#3a582f]/20 shadow-sm px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo - Using logo.png for light mode and logo-wit.png for dark mode - Larger size */}
              <Link href="/" className="flex items-center">
                <Image
                  src={theme === "dark" ? "/logos/logo-wit.png" : "/logos/logo.png"}
                  alt="Logo"
                  width={200}
                  height={50}
                  className="h-12 w-auto" // Increased height from h-10 to h-12
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  href="/diensten"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#3a582f] dark:hover:text-[#4a6e3d]"
                >
                  Diensten
                </Link>
                <Link
                  href="/branches"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#3a582f] dark:hover:text-[#4a6e3d]"
                >
                  Branches
                </Link>
                <Link
                  href="/cases"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#3a582f] dark:hover:text-[#4a6e3d]"
                >
                  Cases
                </Link>
                <Link
                  href="/inzichten"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#3a582f] dark:hover:text-[#4a6e3d]"
                >
                  Inzichten
                </Link>
                <Link
                  href="/cultuur"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#3a582f] dark:hover:text-[#4a6e3d]"
                >
                  Cultuur
                </Link>
                <Link
                  href="/werken-bij"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#3a582f] dark:hover:text-[#4a6e3d]"
                >
                  Werken Bij
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#3a582f] hover:bg-[#2d4625] text-white px-4 py-2 rounded-full transition-colors"
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden">
                {/* Mobile Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="mr-4 text-gray-700 dark:text-gray-300 hover:text-[#3a582f] dark:hover:text-[#4a6e3d]"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  className="text-gray-700 dark:text-gray-300 hover:text-[#3a582f] dark:hover:text-[#4a6e3d]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Improved Design */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2"
            >
              <div className="container mx-auto px-4">
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-[#3a582f]/20 shadow-sm p-4">
                  <nav className="flex flex-col space-y-1">
                    <Link
                      href="/diensten"
                      className="flex items-center justify-between py-3 px-3 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <Briefcase className="w-5 h-5 mr-3 text-[#3a582f] dark:text-[#4a6e3d]" />
                        <span>Diensten</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </Link>

                    <Link
                      href="/branches"
                      className="flex items-center justify-between py-3 px-3 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <Building2 className="w-5 h-5 mr-3 text-[#3a582f] dark:text-[#4a6e3d]" />
                        <span>Branches</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </Link>

                    <Link
                      href="/cases"
                      className="flex items-center justify-between py-3 px-3 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <FolderOpen className="w-5 h-5 mr-3 text-[#3a582f] dark:text-[#4a6e3d]" />
                        <span>Cases</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </Link>

                    <Link
                      href="/inzichten"
                      className="flex items-center justify-between py-3 px-3 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <Lightbulb className="w-5 h-5 mr-3 text-[#3a582f] dark:text-[#4a6e3d]" />
                        <span>Inzichten</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </Link>

                    <Link
                      href="/cultuur"
                      className="flex items-center justify-between py-3 px-3 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-3 text-[#3a582f] dark:text-[#4a6e3d]" />
                        <span>Cultuur</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </Link>

                    <Link
                      href="/werken-bij"
                      className="flex items-center justify-between py-3 px-3 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <Building2 className="w-5 h-5 mr-3 text-[#3a582f] dark:text-[#4a6e3d]" />
                        <span>Werken Bij</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </Link>
                  </nav>

                  {/* Mobile Language Selector */}
                  <div className="mt-4 border-t border-gray-100 dark:border-gray-800 pt-4">
                    <button
                      onClick={() => setIsMobileLanguageOpen(!isMobileLanguageOpen)}
                      className="flex items-center justify-between w-full py-3 px-3 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 rounded-xl"
                    >
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 mr-3 text-[#3a582f] dark:text-[#4a6e3d]" />
                        <span>Taal: {language.toUpperCase()}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${isMobileLanguageOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isMobileLanguageOpen && (
                      <div className="mt-2 pl-10 space-y-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`block w-full text-left py-2 px-3 rounded-xl ${
                              language === lang.code
                                ? "text-[#3a582f] dark:text-[#4a6e3d] bg-white dark:bg-gray-800"
                                : "text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800"
                            }`}
                          >
                            {lang.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Contact Button */}
                  <div className="mt-4">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center bg-[#3a582f] hover:bg-[#2d4625] text-white py-3 px-4 rounded-full transition-colors w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      <span>Contact</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Apple-style Bottom Navigation - Appears when scrolled */}
      <AnimatePresence>
        {isScrolled && (
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
                <Image
                  src={theme === "dark" ? "/logos/logo-wit.png" : "/logos/logo.png"}
                  alt="Logo"
                  width={150}
                  height={150}
                  className="h-6 w-auto"
                />
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
    </>
  )
}
