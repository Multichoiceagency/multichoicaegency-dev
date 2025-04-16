"use client"

import type React from "react"
import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ArrowRight, ChevronDown, Code, Pencil, Users, Info, Mail, Phone } from "lucide-react"

// Navigation sections from your data
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

// Contact sections from your data
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

// Social links from your data
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
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title)
  }

  return (
    <footer className="w-full relative mt-24" id="footer">
      {/* Top section - Dark green background */}
      <div className="bg-[#3a582f] py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">We horen graag van je</h2>

          {/* Contact info grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone and email */}
            <div className="flex flex-col">
              <Link href="tel:0103220410" className="text-white text-xl flex items-center hover:underline mb-2">
                0103220410 <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="mailto:sales@multichoiceagency.nl"
                className="text-white text-xl flex items-center hover:underline"
              >
                sales@multichoiceagency.nl <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Start a project section */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Een project starten</h3>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3 bg-white/20">
                  <Image
                  src="/favicon.ico"
                  alt="Team member"
                    width={30}
                    height={30}
                    className="w-full h-full bg-white object-contain"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">Sales Team</p>
                  <p className="text-white text-sm">sales@multichoiceagency.nl</p>
                </div>
              </div>
            </div>

            {/* Support section */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Support</h3>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#a6e267] rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">S</span>
                </div>
                <div>
                  <p className="text-white font-medium">Supportteam</p>
                  <p className="text-white text-sm">service@multichoiceagency.nl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - Darker green background */}
      <div className="bg-[#2d4423] py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Navigation Grid - Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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
                        className="text-white hover:text-[#a6e267] transition-colors flex items-center gap-2"
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
                      <p key={i} className="text-white text-sm">
                        {line}
                      </p>
                    ))}
                    <ul className="mt-2 space-y-2">
                      {contactSections[1].links?.map((link, i) => (
                        <li key={i}>
                          <Link
                            href={link.href}
                            className="text-white hover:text-[#a6e267] text-sm flex items-center gap-2"
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
                      <p key={i} className="text-white text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                {section.title === "Informatie" && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="font-bold mb-2">{contactSections[0].title}</h4>
                    {contactSections[0].info.map((line, i) => (
                      <p key={i} className="text-white text-sm">
                        {line}
                      </p>
                    ))}
                    <ul className="mt-2 space-y-2">
                      {contactSections[0].links?.map((link, i) => (
                        <li key={i}>
                          <Link
                            href={link.href}
                            className="text-white hover:text-[#a6e267] text-sm flex items-center gap-2"
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
                  src="/logos/logo-wit.png"
                  alt="Multichoiceagency logo"
                  width={200}
                  height={100}
                  className="h-16 w-auto"
                />
              </div>
              {/* Social icons right-aligned with 'Volg ons' label */}
              <div className="flex justify-center items-center">
                <span className="text-white text-sm mr-2">Volg ons</span>
                <div className="flex gap-2">
                  {socialLinks.map((social, idx) => (
                    <Link key={idx} href={social.href} className="text-white hover:text-[#a6e267] transition-colors">
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
                  src="/logos/logo-wit.png"
                  alt="Multichoiceagency logo"
                  width={200}
                  height={100}
                  className="h-16 w-auto"
                />
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <Link key={idx} href={social.href} className="text-white hover:text-[#a6e267] transition-colors">
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

          {/* New bottom section with copyright and privacy */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 flex items-center gap-4">
                <p className="text-white text-sm">© Multichoiceagency</p>
                <Link href="/privacy" className="text-white hover:text-[#a6e267] text-sm">
                  Privacy verklaring
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
