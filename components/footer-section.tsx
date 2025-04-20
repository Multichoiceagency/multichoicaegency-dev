"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Code, Megaphone, Users, Info, Phone, Database, Clock, ChevronRight, Mail, MapPin } from "lucide-react"

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <footer ref={sectionRef} className="bg-[#1a2a18] text-white relative overflow-hidden pt-16 pb-8">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full grid grid-cols-12 grid-rows-6">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-[#a6e267]/20"></div>
            ))}
          </div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#2D4625] filter blur-[100px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#a6e267] filter blur-[120px] opacity-10 animate-pulse-slower"></div>

        {/* Tech lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Web Development Column */}
          <div
            className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5 text-[#a6e267]" />
              <h3 className="text-lg font-medium">Web Development</h3>
            </div>
            <ul className="space-y-2">
              {[
                { name: "Websites", href: "/diensten/websites" },
                { name: "Webshops", href: "/diensten/webshops" },
                { name: "Portalen", href: "/diensten/portalen" },
                { name: "Development", href: "/diensten/development" },
                { name: "UI/UX Design", href: "/diensten/ui-ux-design" },
                { name: "Maatwerk Websites", href: "/diensten/maatwerk-websites" },
                { name: "Shopify webshop", href: "/diensten/shopify-webshop" },
                { name: "Woocommerce webshop", href: "/diensten/woocommerce-webshop" },
                { name: "Wordpress website", href: "/diensten/wordpress-website" },
              ].map((item, index) => (
                <li key={index} className="group">
                  <Link
                    href={item.href}
                    className="flex items-center text-white/70 hover:text-[#a6e267] transition-colors duration-300"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-[#a6e267] transition-opacity duration-300 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Marketing Column */}
          <div
            className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Megaphone className="h-5 w-5 text-[#a6e267]" />
              <h3 className="text-lg font-medium">Online Marketing</h3>
            </div>
            <ul className="space-y-2">
              {[
                { name: "SEO", href: "/diensten/seo" },
                { name: "Google Ads", href: "/diensten/google-ads" },
                { name: "Social Media", href: "/diensten/social-media" },
                { name: "Content Marketing", href: "/diensten/content-marketing" },
                { name: "Bedrijfsvideo laten maken", href: "/diensten/bedrijfsvideo" },
                { name: "Productvideo laten maken", href: "/diensten/productvideo" },
              ].map((item, index) => (
                <li key={index} className="group">
                  <Link
                    href={item.href}
                    className="flex items-center text-white/70 hover:text-[#a6e267] transition-colors duration-300"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-[#a6e267] transition-opacity duration-300 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Over Ons Column */}
          <div
            className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-[#a6e267]" />
              <h3 className="text-lg font-medium">Over Ons</h3>
            </div>
            <ul className="space-y-2">
              {[
                { name: "Over ons", href: "/over-ons" },
                { name: "Onze Werkwijze", href: "/werkwijze" },
                { name: "Ons Team", href: "/team" },
                { name: "Vacatures", href: "/vacatures" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <li key={index} className="group">
                  <Link
                    href={item.href}
                    className="flex items-center text-white/70 hover:text-[#a6e267] transition-colors duration-300"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-[#a6e267] transition-opacity duration-300 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informatie Column */}
          <div
            className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-[#a6e267]" />
              <h3 className="text-lg font-medium">Informatie</h3>
            </div>
            <ul className="space-y-2">
              {[
                { name: "Inloggen bestaande klant", href: "/login" },
                { name: "Helpdesk", href: "/helpdesk" },
                { name: "Veelgestelde Vragen", href: "/faq" },
                { name: "Kennisbank", href: "/kennisbank" },
                { name: "Downloads", href: "/downloads" },
              ].map((item, index) => (
                <li key={index} className="group">
                  <Link
                    href={item.href}
                    className="flex items-center text-white/70 hover:text-[#a6e267] transition-colors duration-300"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-[#a6e267] transition-opacity duration-300 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Service Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/10">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Phone className="h-5 w-5 text-[#a6e267]" />
              <h3 className="text-lg font-medium">Contact</h3>
            </div>
            <div className="space-y-3">
              <p className="font-medium">Multichoiceagency</p>
              <p className="text-white/70 flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-[#a6e267]" />
                <span>Wij werken uitsluitend op locatie en op afspraak door heel Nederland.</span>
              </p>
              <a
                href="mailto:sales@multichoiceagency.nl"
                className="text-white/70 hover:text-[#a6e267] transition-colors duration-300 flex items-center"
              >
                <Mail className="h-4 w-4 mr-2 text-[#a6e267]" />
                sales@multichoiceagency.nl
              </a>
              <a
                href="tel:0103220410"
                className="text-white/70 hover:text-[#a6e267] transition-colors duration-300 flex items-center"
              >
                <Phone className="h-4 w-4 mr-2 text-[#a6e267]" />
                0103220410
              </a>
            </div>
          </div>

          {/* Service & Support */}
          <div
            className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-[#a6e267]" />
              <h3 className="text-lg font-medium">Service & Support</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-1 text-[#a6e267]" />
                <div>
                  <p className="text-white/70">Ma - Do: 09:00 - 17:00</p>
                  <p className="text-white/70">Vrij: 09:00 - 13:00</p>
                </div>
              </div>
              <a
                href="mailto:service@multichoiceagency.nl"
                className="text-white/70 hover:text-[#a6e267] transition-colors duration-300 flex items-center"
              >
                <Mail className="h-4 w-4 mr-2 text-[#a6e267]" />
                service@multichoiceagency.nl
              </a>
              <a
                href="tel:0103220410"
                className="text-white/70 hover:text-[#a6e267] transition-colors duration-300 flex items-center"
              >
                <Phone className="h-4 w-4 mr-2 text-[#a6e267]" />
                0103220410
              </a>
            </div>
          </div>

          {/* Overige Gegevens */}
          <div
            className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-[#a6e267]" />
              <h3 className="text-lg font-medium">Overige Gegevens</h3>
            </div>
            <div className="space-y-3">
              <p className="text-white/70 flex items-center">
                <span className="text-[#a6e267] font-medium mr-2">KVK:</span> 71511776
              </p>
              <p className="text-white/70 flex items-center">
                <span className="text-[#a6e267] font-medium mr-2">BTW:</span> NL002353407B39
              </p>
              <p className="text-white/70 flex items-center">
                <span className="text-[#a6e267] font-medium mr-2">IBAN:</span> NL91INGB0008341740
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Multichoiceagency. Alle rechten voorbehouden.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-white/50 hover:text-[#a6e267] text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-[#a6e267] text-sm transition-colors duration-300">
              Algemene Voorwaarden
            </Link>
            <Link href="/cookies" className="text-white/50 hover:text-[#a6e267] text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.2; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  )
}
