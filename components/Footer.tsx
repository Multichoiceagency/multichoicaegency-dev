"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope,
  faPhone,
  faChevronDown,
  faArrowRight,
  faCode,
  faPencil,
  faUsers,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import { motion, AnimatePresence } from "framer-motion"

// Keep all your original data
const navSections = [
  {
    title: "Web Development",
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
    links: [
      { name: "Inloggen bestaande klant", href: "https://projecten.mlt.multichoiceagency.nl" },
      { name: "Helpdesk", href: "/helpdesk" },
      { name: "Veelgestelde Vragen", href: "/veelgestelde-vragen" },
      { name: "Kennisbank", href: "/kennisbank" },
      { name: "Downloads", href: "/downloads" },
    ],
  },
]

const contactSections = [
  {
    title: "Contact",
    info: ["Multichoiceagency", "Wij werken uitsluitend op locatie en op afspraak door heel Nederland."],
    links: [
      { icon: faEnvelope, text: "sales@multichoiceagency.nl", href: "mailto:sales@multichoiceagency.nl" },
      { icon: faPhone, text: "0103220410", href: "tel:0103220410" },
    ],
  },
  {
    title: "Service & Support",
    info: ["Ma - Do: 09:00 - 17:00", "Vrij: 09:00 - 13:00"],
    links: [
      { icon: faEnvelope, text: "service@multichoiceagency.nl", href: "mailto:service@multichoiceagency.nl" },
      { icon: faPhone, text: "0103220410", href: "tel:0103220410" },
    ],
  },
  {
    title: "Overige Gegevens",
    info: ["KVK: 71511776", "BTW: NL.002353407.B39", "IBAN: NL91.INGB.0008.3417.40"],
  },
]

const socialLinks = [
  { icon: faFacebook, text: "Volg ons op Facebook", href: "https://facebook.com/multichoiceagency" },
  { icon: faInstagram, text: "Volg ons op Instagram", href: "https://instagram.com/multichoiceagency" },
  { icon: faLinkedin, text: "Volg ons op LinkedIn", href: "https://linkedin.com/company/multichoiceagency" },
]

// Map section titles to icons
const sectionIcons = {
  "Web Development": faCode,
  "Online Marketing": faPencil,
  "Over Ons": faUsers,
  Informatie: faInfoCircle,
}

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  icon: any
}

const AccordionItem = ({ title, children, isOpen, onToggle, icon }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button className="w-full py-4 px-6 flex justify-between items-center text-left" onClick={onToggle}>
        <span className="text-black dark:text-white font-bold flex items-center gap-2">
          <FontAwesomeIcon icon={icon} className="w-4 h-4" />
          {title}
        </span>

        {/* Animated arrow */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        >
          <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-green-700" />
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
  const svgRef = useRef<SVGSVGElement>(null)
  const [openSection, setOpenSection] = useState<string | null>(null)

  useEffect(() => {
    if (svgRef.current) {
      const path = svgRef.current.querySelector("path")
      if (path) {
        const length = path.getTotalLength()
        path.style.strokeDasharray = length.toString()
        path.style.strokeDashoffset = length.toString()

        setTimeout(() => {
          path.style.transition = "stroke-dashoffset 2s ease-in-out"
          path.style.strokeDashoffset = "0"
        }, 100)
      }
    }
  }, [])

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title)
  }

  return (
    <footer className="bg-green-50 dark:bg-gray-800 text-white">
      {/* Hero CTA Section */}
      <div className="container mx-auto px-4 py-24 relative dark:bg-green-50">
        <div className="max-w-2xl relative z-10">
          <h2 className="text-green-900 dark:text-black text-5xl md:text-6xl font-bold mb-4">
            Laten we jouw project bespreken.
          </h2>
          <p className="text-black dark:text-black mb-8">Neem contact met ons op. We helpen je graag verder.</p>
          <Link
            href="/offerte-aanvragen"
            className="inline-block bg-green-600 hover:bg-black rounded-md transition-colors px-8 py-4 text-white font-medium relative"
          >
            Offerte aanvragen
          </Link>
        </div>

        {/* Spline 3D-object (verborgen op mobiel) */}
        <div className="absolute dark:bg-gray-800 top-0 left-96 w-full h-full pointer-events-auto hidden sm:block">
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-a92834220e6cf3d5f95aca1004f6e5dd/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full bg-green-50"
          ></iframe>
        </div>
      </div>

      {/* Navigation Grid - Desktop */}
      <div className="container mx-auto px-4 py-16 hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Web Development */}
        <div>
          <h3 className="text-1xl text-black dark:text-white font-bold mb-6 flex items-center gap-2">
            <FontAwesomeIcon icon={sectionIcons["Web Development"]} className="w-4 h-4" />
            {navSections[0].title}
          </h3>
          <ul className="space-y-3">
            {navSections[0].links.map((link, linkIdx) => (
              <li key={linkIdx} className="group">
                <Link
                  href={link.href}
                  className="text-black dark:text-white hover:text-green-700 dark:hover:text-green-600 transition-colors flex items-center gap-2"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-3 h-3 text-black group-hover:opacity-100 transition-opacity"
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Service & Support */}
          <div className="text-1xl text-black dark:text-white mt-8">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              {contactSections[1].title}
            </h4>
            {contactSections[1].info.map((line, i) => (
              <p key={i} className="text-black dark:text-white">
                {line}
              </p>
            ))}
            <ul className="mt-2 space-y-2">
              {contactSections[1].links?.map((link, i) => (
                <li key={i} className="group">
                  <Link
                    href={link.href}
                    className="text-black dark:text-white hover:text-green-700 dark:hover:text-green-600 transition-colors flex items-center gap-2"
                  >
                    {link.icon && <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />}
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Online Marketing */}
        <div>
          <h3 className="text-1xl font-bold mb-6 text-black dark:text-white flex items-center gap-2">
            <FontAwesomeIcon icon={sectionIcons["Online Marketing"]} className="w-4 h-4" />
            {navSections[1].title}
          </h3>
          <ul className="space-y-3">
            {navSections[1].links.map((link, linkIdx) => (
              <li key={linkIdx} className="group">
                <Link
                  href={link.href}
                  className="text-black dark:text-white hover:text-green-700 dark:hover:text-green-600 transition-colors flex items-center gap-2"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-3 h-3 text-black group-hover:opacity-100 transition-opacity"
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Overige Gegevens */}
          <div className="text-1xl text-black dark:text-white mt-20">
            <h4 className="text-lg text-black dark:text-white font-bold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4" />
              {contactSections[2].title}
            </h4>
            {contactSections[2].info.map((line, i) => (
              <p key={i} className="text-black dark:text-white">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Over Ons */}
        <div>
          <h3 className="text-1xl text-black dark:text-white font-bold mb-6 flex items-center gap-2">
            <FontAwesomeIcon icon={sectionIcons["Over Ons"]} className="w-4 h-4" />
            {navSections[2].title}
          </h3>
          <ul className="space-y-3">
            {navSections[2].links.map((link, linkIdx) => (
              <li key={linkIdx} className="group">
                <Link
                  href={link.href}
                  className="text-black dark:text-white hover:text-green-700 dark:hover:text-green-600 transition-colors flex items-center gap-2"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-3 h-3 text-black group-hover:opacity-100 transition-opacity"
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Informatie and Contact */}
        <div>
          <h3 className="text-1xl text-black dark:text-white font-bold mb-6 flex items-center gap-2">
            <FontAwesomeIcon icon={sectionIcons["Informatie"]} className="w-4 h-4" />
            {navSections[3].title}
          </h3>
          <ul className="space-y-3">
            {navSections[3].links.map((link, linkIdx) => (
              <li key={linkIdx} className="group">
                <Link
                  href={link.href}
                  className="text-black dark:text-white hover:text-green-700 dark:hover:text-green-600 transition-colors flex items-center gap-2"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-3 h-3 text-black group-hover:opacity-100 transition-opacity"
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Contact */}
          <div className="mt-8">
            <h4 className="text-lg text-black dark:text-white font-bold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              {contactSections[0].title}
            </h4>
            {contactSections[0].info.map((line, i) => (
              <p key={i} className="text-black dark:text-white">
                {line}
              </p>
            ))}
            <ul className="mt-2 space-y-2">
              {contactSections[0].links?.map((link, i) => (
                <li key={i} className="group">
                  <Link
                    href={link.href}
                    className="text-black dark:text-white hover:text-green-700 dark:hover:text-green-600 transition-colors flex items-center gap-2"
                  >
                    {link.icon && <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />}
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Accordion - Mobile */}
      <div className="md:hidden">
        {navSections.map((section) => (
          <AccordionItem
            key={section.title}
            title={section.title}
            isOpen={openSection === section.title}
            onToggle={() => toggleSection(section.title)}
            icon={sectionIcons[section.title as keyof typeof sectionIcons]}
          >
            <ul className="space-y-3">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link
                    href={link.href}
                    className="text-black dark:text-white hover:text-green-700 dark:hover:text-green-600 transition-colors flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
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
                  <p key={i} className="text-black dark:text-white text-sm">
                    {line}
                  </p>
                ))}
                <ul className="mt-2 space-y-2">
                  {contactSections[1].links?.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-black dark:text-white hover:text-green-700 text-sm flex items-center gap-2"
                      >
                        {link.icon && <FontAwesomeIcon icon={link.icon} className="w-3 h-3" />}
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
                  <p key={i} className="text-black dark:text-white text-sm">
                    {line}
                  </p>
                ))}
              </div>
            )}

            {section.title === "Informatie" && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-bold mb-2">{contactSections[0].title}</h4>
                {contactSections[0].info.map((line, i) => (
                  <p key={i} className="text-black dark:text-white text-sm">
                    {line}
                  </p>
                ))}
                <ul className="mt-2 space-y-2">
                  {contactSections[0].links?.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-black dark:text-white hover:text-green-700 text-sm flex items-center gap-2"
                      >
                        {link.icon && <FontAwesomeIcon icon={link.icon} className="w-3 h-3" />}
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
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          {/* Mobile layout */}
          <div className="block md:hidden">
            {/* Logo at top */}
            <div className="flex justify-center mb-4">
              <Image
                src="/logos/logo.png"
                alt="Multichoiceagency logo"
                width={200}
                height={100}
                className="h-16 w-auto"
              />
            </div>
            {/* Social icons right-aligned with 'Volg ons' label */}
            <div className="flex justify-center items-center">
              <span className="text-black dark:text-white  text-sm mr-2">Volg ons</span>
              <div className="flex gap-2">
                {socialLinks.map((social, idx) => (
                  <Link key={idx} href={social.href} className="text-black dark:text-white hover:text-green-700 transition-colors">
                    <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                    <span className="sr-only">{social.text}</span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Language switcher at bottom (centered) */}
            <div className="flex justify-end mt-4">
              <button className="flex items-right gap-2 px-4 py-2 border bg-green-700 rounded">
                <span>Nederlands</span>
                <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop layout: original design */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center gap-8">
              <Image
                src="/logos/logo.png"
                alt="Multichoiceagency logo"
                width={200}
                height={100}
                className="h-16 w-auto"
              />
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <Link key={idx} href={social.href} className="text-black hover:text-green-700 transition-colors">
                    <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                    <span className="sr-only">{social.text}</span>
                  </Link>
                ))}
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 ml-10 border bg-green-700 rounded">
              <span>Nederlands</span>
              <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

