// FooterSection.tsx
"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  Code,
  Pencil,
  Users,
  Info,
  Phone,
  Database,
  Clock,
  ChevronRight,
  Mail,
  MapPin,
  X,
} from "lucide-react"

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true)
      }
    },
    { threshold: 0.1 }
  )

  if (sectionRef.current) {
    observer.observe(sectionRef.current)
  }

  function handleClickOutside(event: MouseEvent) {
    if (
      showModal &&
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      setShowModal(false)
    }
  }

  if (showModal) {
    document.addEventListener("mousedown", handleClickOutside)
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current)
    }
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [showModal])


  const navSections = [
    {
      title: "Web Development",
      icon: <Code className="h-5 w-5 text-[#a6e267]" />,
      links: [
        { name: "Websites", href: "/webdevelopment/website-laten-maken" },
        { name: "Webshops", href: "/webdevelopment/webshop-laten-maken" },
        { name: "Portalen", href: "/webdevelopment/portalen" },
        { name: "Backend Development", href: "/webdevelopment/backend-development" },
        { name: "Frontend Development", href: "/webdevelopment/frontend-development" },
        { name: "UI/UX Design", href: "/wat-is-ux-ui-design" },
        { name: "Maatwerk Websites", href: "/webdevelopment/maatwerk-website-laten-maken" },
        { name: "Shopify webshop", href: "/webdevelopment/shopify-webshop-laten-maken" },
        { name: "Woocommerce webshop", href: "/webdevelopment/woocommerce-webshop-laten-maken" },
        { name: "Wordpress website", href: "/webdevelopment/wordpress-website-laten-maken" },
      ],
    },
    {
      title: "Online Marketing",
      icon: <Pencil className="h-5 w-5 text-[#a6e267]" />,
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
      icon: <Users className="h-5 w-5 text-[#a6e267]" />,
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
      icon: <Info className="h-5 w-5 text-[#a6e267]" />,
      links: [
        { name: "Inloggen bestaande klant", href: "https://projecten.mlt.multichoiceagency.nl" },
        { name: "Ticket indienen", href: "https://projecten.mlt.multichoiceagency.nl/forms/ticket?col=col-md-5" },
      ],
    },
  ]

  const locaties = [
    "Boerhaavelaan 40, 2713 HX Zoetermeer",
    "Burgemeester Stramanweg 102, 1101 AA Amsterdam",
    "La Guardiaweg, 1043 DJ Amsterdam",
    "Kalkovenweg 28, 2401 LK Alphen aan den Rijn",
    "Westblaak 180, 3012 KN Rotterdam",
    "Burgemeester de Raadtsingel 93C, 3311 JG Dordrecht",
    "Arthur van Schendelstraat 650, 3511 MJ Utrecht",
    "Boogschutterstraat 1, 7324 AE Apeldoorn",
    "Bennekomseweg 41, 6717 LL Ede",
    "Europalaan 28, 5232 BC 's-Hertogenbosch",
  ]

  const getEmbedSrc = (address: string) =>
    `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

    const getMapLink = (address: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

    const modalRef = useRef<HTMLDivElement>(null)


  return (
    <footer ref={sectionRef} className="bg-[#1a2a18] text-white relative overflow-hidden pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Navigatiekolommen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {navSections.map((section, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                {section.icon}
                <h3 className="text-lg font-medium">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((item, index) => (
                  <li key={index} className="group">
                    {item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white/70 hover:text-[#a6e267] transition-colors duration-300"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 text-[#a6e267] group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{item.name}</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center text-white/70 hover:text-[#a6e267] transition-colors duration-300"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 text-[#a6e267] group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact, Service & Support, Overige Gegevens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/10">
          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="h-5 w-5 text-[#a6e267]" />
              <h3 className="text-lg font-medium">Contact</h3>
            </div>
            <p className="font-medium">Multichoiceagency</p>
            <p className="text-white/70 flex items-start">
              <MapPin className="h-4 w-4 mr-2 mt-1 text-[#a6e267]" />
              Wij werken uitsluitend op locatie en op afspraak door heel Nederland.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-2 underline z-9999 text-sm text-[#a6e267] hover:text-white"
            >
              Bekijk onze werkgebieden
            </button>
            <div className="mt-3 space-y-2">
              <a href="mailto:sales@multichoiceagency.nl" className="flex items-center text-white/70 hover:text-[#a6e267]">
                <Mail className="h-4 w-4 mr-2 text-[#a6e267]" /> sales@multichoiceagency.nl
              </a>
              <a href="tel:0103220410" className="flex items-center text-white/70 hover:text-[#a6e267]">
                <Phone className="h-4 w-4 mr-2 text-[#a6e267]" /> 0103220410
              </a>
            </div>
          </div>

          {/* Service & Support */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-[#a6e267]" />
              <h3 className="text-lg font-medium">Service & Facturen</h3>
            </div>
            <div className="text-white/70">
              <p>Maandag t/m Zaterdag: 09:00 - 17:00</p>
              <a href="mailto:service@multichoiceagency.nl" className="flex items-center mt-2 hover:text-[#a6e267]">
                <Mail className="h-4 w-4 mr-2 text-[#a6e267]" />Voor support: support@multichoiceagency.nl
              </a>
                            <a href="mailto:facturen@multichoiceagency.nl" className="flex items-center mt-2 hover:text-[#a6e267]">
                <Mail className="h-4 w-4 mr-2 text-[#a6e267]" /> Voor facturen: facturen@multichoiceagency.nl
              </a>
              <a href="tel:0103220410" className="flex items-center hover:text-[#a6e267]">
                <Phone className="h-4 w-4 mr-2 text-[#a6e267]" />Bel ons direct: 010 322 0410              </a>
            </div>
          </div>

          {/* Overige Gegevens */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-[#a6e267]" />
              <h3 className="text-lg font-medium">Overige Gegevens</h3>
            </div>
            <p className="text-white/70"><strong className="text-[#a6e267]">KVK:</strong> 71511776</p>
            <p className="text-white/70"><strong className="text-[#a6e267]">BTW:</strong> NL002353407B39</p>
            <p className="text-white/70"><strong className="text-[#a6e267]">IBAN:</strong> NL91INGB0008341740</p>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
        {showModal && (
          <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
            <div
              ref={modalRef}
              className="relative z-[99999] bg-white text-black max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 shadow-2xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-700 hover:text-black z-[999999]"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-xl font-semibold mb-4">Onze Locaties</h2>

              <div className="space-y-6">
                {locaties.map((locatie, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="font-medium">{locatie}</p>
                    <iframe
                      src={getEmbedSrc(locatie)}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                    ></iframe>
                    <a
                      href={getMapLink(locatie)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-white bg-[#1a2a18] px-4 py-2 rounded hover:bg-[#a6e267] hover:text-black transition"
                    >
                      Navigeer naar locatie
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

                    {/* Copyright */}
                    <div className="pt-8 mt-8 container mx-auto px-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Multichoiceagency. Alle rechten voorbehouden.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-white/50 hover:text-[#a6e267] text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/algemene-voorwaarden" className="text-white/50 hover:text-[#a6e267] text-sm transition-colors duration-300">
              Algemene Voorwaarden
            </Link>
            <Link href="/cookies" className="text-white/50 hover:text-[#a6e267] text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
            <Link href="https://www.multichoiceagency.nl/sitemap.xml
" className="text-white/50 hover:text-[#a6e267] text-sm transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
    </footer>
  )
}