"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons"

const navSections = [
  {
    title: "Web Development",
    links: [
      { name: "Websites", href: "/website-laten-maken" },
      { name: "Webshops", href: "/wat-is-ui-ux-design" },
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

export function Footer() {
  const svgRef = useRef<SVGSVGElement>(null)

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

  return (
    <footer className="bg-gray-900 text-white">
      {/* Hero CTA Section */}
      <div className="container mx-auto px-4 py-24 relative">
        <div className="max-w-2xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Laten we jouw project bespreken.</h2>
          <p className="text-gray-400 mb-8">Neem contact met ons op. We helpen je graag verder.</p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 transition-colors px-8 py-4 text-white font-medium relative"
          >
            Offerte aanvragen
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full"></span>
          </Link>
        </div>

        {/* Animated SVG Line */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <svg ref={svgRef} viewBox="0 0 100 100" className="w-full h-full">
            <path d="M90 10 Q 50 50 10 90" fill="none" stroke="#ef4444" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Web Development */}
        <div>
          <h3 className="text-lg font-bold mb-6">{navSections[0].title}</h3>
          <ul className="space-y-3">
            {navSections[0].links.map((link, linkIdx) => (
              <li key={linkIdx}>
                <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Service & Support */}
          <div className="mt-8">
            <h4 className="text-lg font-bold mb-4">{contactSections[1].title}</h4>
            {contactSections[1].info.map((line, i) => (
              <p key={i} className="text-gray-400">
                {line}
              </p>
            ))}
            <ul className="mt-2 space-y-2">
              {contactSections[1].links?.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
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
          <h3 className="text-lg font-bold mb-6">{navSections[1].title}</h3>
          <ul className="space-y-3">
            {navSections[1].links.map((link, linkIdx) => (
              <li key={linkIdx}>
                <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Overige Gegevens */}
          <div className="mt-8">
            <h4 className="text-lg font-bold mb-4">{contactSections[2].title}</h4>
            {contactSections[2].info.map((line, i) => (
              <p key={i} className="text-gray-400">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Over Ons */}
        <div>
          <h3 className="text-lg font-bold mb-6">{navSections[2].title}</h3>
          <ul className="space-y-3">
            {navSections[2].links.map((link, linkIdx) => (
              <li key={linkIdx}>
                <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Informatie and Contact */}
        <div>
          <h3 className="text-lg font-bold mb-6">{navSections[3].title}</h3>
          <ul className="space-y-3">
            {navSections[3].links.map((link, linkIdx) => (
              <li key={linkIdx}>
                <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Contact */}
          <div className="mt-8">
            <h4 className="text-lg font-bold mb-4">{contactSections[0].title}</h4>
            {contactSections[0].info.map((line, i) => (
              <p key={i} className="text-gray-400">
                {line}
              </p>
            ))}
            <ul className="mt-2 space-y-2">
              {contactSections[0].links?.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/12/Logo-wit@4x.png"
                alt="Multichoiceagency logo"
                width={200}
                height={25}
                className="h-8 w-auto"
              />
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <Link key={idx} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                    <span className="sr-only">{social.text}</span>
                  </Link>
                ))}
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-800 rounded">
              <span>Nederlands</span>
              <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

