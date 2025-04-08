"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowUpRight, ArrowRight, ChevronDown, Code, Pencil, Users, Info, Mail, Phone } from "lucide-react"

// Navigation sections
const navSections = [
  {
    title: "Web Development",
    icon: "Code",
    links: [
      { name: "Websites", href: "/website-laten-maken" },
      { name: "Webshops", href: "/webshop-laten-maken" },
      { name: "Portalen", href: "/portalen" },
      { name: "Development", href: "/development" },
      { name: "UI/UX Design", href: "/wat-is-ui-ux-design" },
      { name: "Maatwerk Websites", href: "/maatwerk-website-laten-maken" },
      { name: "Shopify webshop", href: "/shopify-webshop-laten-maken" },
      { name: "Woocommerce webshop", href: "/woocommerce-webshop-laten-maken" },
      { name: "Wordpress website", href: "/wordpress-website-laten-maken" },
    ],
  },
  {
    title: "Online Marketing",
    icon: "Pencil",
    links: [
      { name: "SEO", href: "https://www.essmarketing.nl/seo-specialist" },
      { name: "Google Ads", href: "https://www.essmarketing.nl/google-ads-uitbesteden" },
      { name: "Social Media", href: "https://www.essmarketing.nl/social-media-uitbesteden" },
      { name: "Content Marketing", href: "https://www.essmarketing.nl/content-marketing-uitbesteden" },
      { name: "Bedrijfsvideo laten maken", href: "https://www.essmedia.nl/bedrijfsvideo-laten-maken" },
      { name: "Productvideo laten maken", href: "https://www.essmedia.nl/productvideo-laten-maken" },
    ],
  },
  {
    title: "Over Ons",
    icon: "Users",
    links: [
      { name: "Over ons", href: "/over-ons" },
      { name: "Onze Werkwijze", href: "/onze-werkwijze" },
      { name: "Ons Team", href: "/ons-team" },
      { name: "Vacatures", href: "/vacatures" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Informatie",
    icon: "Info",
    links: [
      { name: "Inloggen bestaande klant", href: "https://projecten.mlt.multichoiceagency.nl" },
      { name: "Helpdesk", href: "/helpdesk" },
      { name: "Veelgestelde Vragen", href: "/veelgestelde-vragen" },
      { name: "Kennisbank", href: "/kennisbank" },
      { name: "Downloads", href: "/downloads" },
    ],
  },
]

// Contact sections
const contactSections = [
  {
    title: "Contact",
    info: ["Multichoiceagency", "Wij werken uitsluitend op locatie en op afspraak door heel Nederland."],
    links: [
      { icon: "Mail", text: "sales@multichoiceagency.nl", href: "mailto:sales@multichoiceagency.nl" },
      { icon: "Phone", text: "0103220410", href: "tel:0103220410" },
    ],
  },
  {
    title: "Service & Support",
    info: ["Ma - Do: 09:00 - 17:00", "Vrij: 09:00 - 13:00"],
    links: [
      { icon: "Mail", text: "service@multichoiceagency.nl", href: "mailto:service@multichoiceagency.nl" },
      { icon: "Phone", text: "0103220410", href: "tel:0103220410" },
    ],
  },
  {
    title: "Overige Gegevens",
    info: ["KVK: 71511776", "BTW: NL.002353407.B39", "IBAN: NL91.INGB.0008.3417.40"],
  },
]

// Social links
const socialLinks = [
  { icon: "Facebook", text: "Volg ons op Facebook", href: "https://facebook.com/multichoiceagency" },
  { icon: "Instagram", text: "Volg ons op Instagram", href: "https://instagram.com/multichoiceagency" },
  { icon: "Linkedin", text: "Volg ons op LinkedIn", href: "https://linkedin.com/company/multichoiceagency" },
]

// Map icon names to Lucide components
const getIcon = (iconName: string, className = "w-4 h-4") => {
  switch (iconName) {
    case "Code":
      return <Code className={className} />
    case "Pencil":
      return <Pencil className={className} />
    case "Users":
      return <Users className={className} />
    case "Info":
      return <Info className={className} />
    case "Mail":
      return <Mail className={className} />
    case "Phone":
      return <Phone className={className} />
    case "Facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    case "Instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    case "Linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    default:
      return <Info className={className} />
  }
}

// Accordion component for mobile view
interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  icon: string
}

const AccordionItem = ({ title, children, isOpen, onToggle, icon }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button className="w-full py-4 px-6 flex justify-between items-center text-left" onClick={onToggle}>
        <span
          className={`${isOpen ? "text-[#1b7935]" : "text-black dark:text-white"} font-bold flex items-center gap-2`}
        >
          {getIcon(icon)}
          {title}
        </span>

        {/* Animated arrow */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        >
          <ArrowRight className="w-4 h-4 text-[#1b7935]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Footer() {
  const topSectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(topSectionRef, { once: true, amount: 0.3 })
  const { theme, setTheme } = useTheme()
  const [openSection, setOpenSection] = useState<string | null>(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Grid animation effect
  useEffect(() => {
    const gridElement = gridRef.current
    if (!gridElement) return

    // Create grid lines
    const createGridLines = () => {
      gridElement.innerHTML = ""
      const isDark = theme === "dark"

      // Horizontal lines
      for (let i = 0; i < 10; i++) {
        const line = document.createElement("div")
        line.className = `absolute left-0 right-0 h-px ${
          isDark ? "bg-white/5" : "bg-black/5"
        } transition-colors duration-500`
        line.style.top = `${(i + 1) * 10}%`
        gridElement.appendChild(line)
      }

      // Vertical lines
      for (let i = 0; i < 10; i++) {
        const line = document.createElement("div")
        line.className = `absolute top-0 bottom-0 w-px ${
          isDark ? "bg-white/5" : "bg-black/5"
        } transition-colors duration-500`
        line.style.left = `${(i + 1) * 10}%`
        gridElement.appendChild(line)
      }
    }

    createGridLines()

    // Update grid on theme change
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          document.documentElement.classList.contains("dark") !== (theme === "dark")
        ) {
          createGridLines()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      observer.disconnect()
    }
  }, [theme])

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title)
  }

  return (
    <footer className="w-full relative mt-24" id="footer">
      {/* Hero CTA Section */}
      <div className={`container mx-auto px-4 py-24 relative ${theme === "dark" ? "bg-gray-900" : "bg-green-50"}`}>
        <div className="max-w-2xl relative z-10">
          <h2 className={`${theme === "dark" ? "text-white" : "text-green-900"} text-5xl md:text-6xl font-bold mb-4`}>
            Laten we jouw project bespreken.
          </h2>
          <p className={`${theme === "dark" ? "text-gray-300" : "text-black"} mb-8`}>
            Neem contact met ons op. We helpen je graag verder.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-block bg-[#1b7935] hover:bg-black rounded-md transition-colors px-8 py-4 text-white font-medium relative"
          >
            Offerte aanvragen
          </Link>
        </div>

        {/* Spline 3D-object (hidden on mobile) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none hidden sm:block">
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-a92834220e6cf3d5f95aca1004f6e5dd/"
            frameBorder="0"
            width="100%"
            height="100%"
            className={`w-full h-full ${theme === "dark" ? "bg-gray-900" : "bg-green-50"}`}
          ></iframe>
        </div>
      </div>

      {/* Top section with animation - positioned to overlap with bottom section */}
      <motion.div
        ref={topSectionRef}
        className={`${
          theme === "dark" ? "bg-primary/80" : "bg-primary"
        } py-12 md:py-16 relative z-20 rounded-t-3xl -mb-8`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background inset with Tailwind classes */}
        <div
          className={`absolute inset-4 ${
            theme === "dark" ? "bg-white/10 border-white/20" : "bg-white/5 border-white/10"
          } rounded-xl border overflow-hidden`}
        >
          {/* Subtle animated grid */}
          <div ref={gridRef} className="absolute inset-0 opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-0" variants={itemVariants}>
              We horen graag van je
            </motion.h2>

            {/* Dark mode toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              variants={itemVariants}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact info */}
            <motion.div variants={itemVariants}>
              <Link
                href="tel:0103220410"
                className="text-white text-xl md:text-2xl font-medium flex items-center hover:underline"
              >
                +31(0)10 322 0410 <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            {/* Project section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white text-lg font-medium mb-4">Een project starten</h3>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-white/20">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Team member"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">Sales Team</p>
                  <p className="text-white text-sm">sales@multichoiceagency.nl</p>
                </div>
              </div>
            </motion.div>

            {/* Support section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white text-lg font-medium mb-4">Support</h3>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#a6e267] rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">?</span>
                </div>
                <div>
                  <p className="text-white font-medium">Supportteam</p>
                  <p className="text-white text-sm">service@multichoiceagency.nl</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom section with menu - with inset background and rounded corners */}
      <div className={`${theme === "dark" ? "bg-gray-900" : "bg-[#0e3e1c]"} py-12 pt-16 relative z-10 rounded-3xl`}>
        {/* Background inset with Tailwind classes */}
        <div
          className={`absolute inset-4 ${
            theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"
          } rounded-xl border overflow-hidden`}
        >
          {/* Subtle animated grid - created via JS */}
          <div className="absolute inset-0 opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Navigation Grid - Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {navSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                  {getIcon(section.icon)}
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="group">
                      <Link
                        href={link.href}
                        className="text-white hover:text-[#a6e267] transition-colors flex items-center gap-2"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Add contact sections to specific columns */}
                {idx === 0 && (
                  <div className="mt-8">
                    <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                      {getIcon("Phone")}
                      {contactSections[1].title}
                    </h4>
                    {contactSections[1].info.map((line, i) => (
                      <p key={i} className="text-white">
                        {line}
                      </p>
                    ))}
                    <ul className="mt-2 space-y-2">
                      {contactSections[1].links?.map((link, i) => (
                        <li key={i} className="group">
                          <Link
                            href={link.href}
                            className="text-white hover:text-[#a6e267] transition-colors flex items-center gap-2"
                          >
                            {getIcon(link.icon)}
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {idx === 1 && (
                  <div className="mt-8">
                    <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                      {getIcon("Info")}
                      {contactSections[2].title}
                    </h4>
                    {contactSections[2].info.map((line, i) => (
                      <p key={i} className="text-white">
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                {idx === 3 && (
                  <div className="mt-8">
                    <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                      {getIcon("Mail")}
                      {contactSections[0].title}
                    </h4>
                    {contactSections[0].info.map((line, i) => (
                      <p key={i} className="text-white">
                        {line}
                      </p>
                    ))}
                    <ul className="mt-2 space-y-2">
                      {contactSections[0].links?.map((link, i) => (
                        <li key={i} className="group">
                          <Link
                            href={link.href}
                            className="text-white hover:text-[#a6e267] transition-colors flex items-center gap-2"
                          >
                            {getIcon(link.icon)}
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Accordion - Mobile */}
          <div className="md:hidden mb-8">
            {navSections.map((section) => (
              <AccordionItem
                key={section.title}
                title={section.title}
                isOpen={openSection === section.title}
                onToggle={() => toggleSection(section.title)}
                icon={section.icon}
              >
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className={`${theme === "dark" ? "text-white" : "text-black"} hover:text-[#a6e267] transition-colors flex items-center gap-2`}
                      >
                        <ArrowRight className="w-3 h-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Add contact sections to relevant accordions on mobile */}
                {section.title === "Web Development" && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="font-bold mb-2">{contactSections[1].title}</h4>
                    {contactSections[1].info.map((line, i) => (
                      <p key={i} className={`${theme === "dark" ? "text-white" : "text-black"} text-sm`}>
                        {line}
                      </p>
                    ))}
                    <ul className="mt-2 space-y-2">
                      {contactSections[1].links?.map((link, i) => (
                        <li key={i}>
                          <Link
                            href={link.href}
                            className={`${theme === "dark" ? "text-white" : "text-black"} hover:text-[#a6e267] text-sm flex items-center gap-2`}
                          >
                            {getIcon(link.icon, "w-3 h-3")}
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.title === "Online Marketing" && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="font-bold mb-2">{contactSections[2].title}</h4>
                    {contactSections[2].info.map((line, i) => (
                      <p key={i} className={`${theme === "dark" ? "text-white" : "text-black"} text-sm`}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                {section.title === "Informatie" && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="font-bold mb-2">{contactSections[0].title}</h4>
                    {contactSections[0].info.map((line, i) => (
                      <p key={i} className={`${theme === "dark" ? "text-white" : "text-black"} text-sm`}>
                        {line}
                      </p>
                    ))}
                    <ul className="mt-2 space-y-2">
                      {contactSections[0].links?.map((link, i) => (
                        <li key={i}>
                          <Link
                            href={link.href}
                            className={`${theme === "dark" ? "text-white" : "text-black"} hover:text-[#a6e267] text-sm flex items-center gap-2`}
                          >
                            {getIcon(link.icon, "w-3 h-3")}
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </AccordionItem>
            ))}
          </div>

          {/* Bottom section with logo, social links and language switcher */}
          <div className="border-t border-gray-700 pt-8">
            {/* Mobile layout */}
            <div className="block md:hidden">
              {/* Logo at top */}
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Multichoiceagency logo"
                  width={200}
                  height={100}
                  className="h-16 w-auto"
                />
              </div>
              {/* Social icons right-aligned with 'Volg ons' label */}
              <div className="flex justify-center items-center">
                <span className={`${theme === "dark" ? "text-white" : "text-black"} text-sm mr-2`}>Volg ons</span>
                <div className="flex gap-2">
                  {socialLinks.map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.href}
                      className={`${theme === "dark" ? "text-white" : "text-black"} hover:text-[#a6e267] transition-colors`}
                    >
                      {getIcon(social.icon, "w-6 h-6")}
                      <span className="sr-only">{social.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
              {/* Language switcher at bottom (centered) */}
              <div className="flex justify-end mt-4">
                <button className="flex items-center gap-2 px-4 py-2 border bg-[#1b7935] rounded text-white">
                  <span>Nederlands</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:flex justify-between items-center">
              <div className="flex items-center gap-8">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Multichoiceagency logo"
                  width={200}
                  height={100}
                  className="h-16 w-auto"
                />
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.href}
                      className={`${theme === "dark" ? "text-white" : "text-black"} hover:text-[#a6e267] transition-colors`}
                    >
                      {getIcon(social.icon, "w-6 h-6")}
                      <span className="sr-only">{social.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 ml-10 border bg-[#1b7935] rounded text-white">
                <span>Nederlands</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
