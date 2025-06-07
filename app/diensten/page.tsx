"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  Compass,
  Code,
  BarChart,
  Database,
  Lightbulb,
  Sparkles,
  Globe,
  ShieldCheck,
  Video,
  Camera,
} from "lucide-react"
import { FaGoogle } from "react-icons/fa6"

const sections = [
  {
    title: "Webdevelopment & Platforms",
    description:
      "High-performance websites, robuuste webshops, en maatwerk applicaties & portalen. Gebouwd met de nieuwste technologieën voor optimale gebruikerservaring en schaalbaarheid.",
    services: [
      { name: "Custom Webdesign", href: "/webdevelopment/custom-webdesign" },
      { name: "Website Laten Maken", href: "/webdevelopment/website-laten-maken" },
      { name: "Maatwerk Website", href: "/webdevelopment/maatwerk-website-laten-maken" },
      { name: "Frontend Development", href: "/webdevelopment/frontend-development" },
      { name: "Backend Development", href: "/webdevelopment/backend-development" },
      { name: "App Development", href: "/webdevelopment/app-development" },
      { name: "Webapplicaties", href: "/webdevelopment/webapplicaties" },
      { name: "E-commerce Oplossingen", href: "/webdevelopment/e-commerce" },
      { name: "Headless E-commerce", href: "/webdevelopment/headless-ecommerce" },
      { name: "Shopify Webshop", href: "/webdevelopment/shopify-webshop-laten-maken" },
      { name: "WooCommerce Webshop", href: "/webdevelopment/woocommerce-webshop-laten-maken" },
      { name: "Portalen en Platformen", href: "/webdevelopment/portalen-en-platformen" },
      { name: "Dashboard Ontwikkeling", href: "/webdevelopment/dashboard-ontwikkeling" },
    ],
    cta: "/webdevelopment",
    icon: <Code className="w-6 h-6 text-white" />,
    bg: { light: "bg-sky-50", dark: "dark:bg-sky-900/30" },
    accent: "#0EA5E9",
  },
  {
    title: "Hosting & Domein Services",
    description: "Betrouwbare hosting, domeinregistratie en technisch onderhoud voor jouw online aanwezigheid.",
    services: [
      { name: "Domeinnaam Kopen & Registratie", href: "/diensten/domeinnaam-kopen" },
      { name: "Info Mail Adres Aanmaken", href: "/diensten/email-hosting" },
      { name: "WordPress Webhosting", href: "/diensten/wordpress-webhosting" },
      { name: "Performance Webhosting", href: "/diensten/performance-webhosting" },
      { name: "WordPress Onderhoud", href: "/diensten/wordpress-onderhoud" },
    ],
    cta: "/hosting-domein-overzicht", // Maak deze overzichtspagina aan
    icon: <Globe className="w-6 h-6 text-white" />,
    bg: { light: "bg-gray-100", dark: "dark:bg-gray-800/30" },
    accent: "#6B7280", // Grijs accent
  },
  {
    title: "UX/UI Design",
    description:
      "Van diepgaand gebruikersonderzoek en wireframes tot interactieve prototypes en design systems. Wij creëren intuïtieve, toegankelijke en esthetisch aantrekkelijke digitale ervaringen die converteren.",
    services: [
      { name: "Wat is UX/UI Design?", href: "/wat-is-ux-ui-design" },
      { name: "User Research & Persona's", href: "/ux-ui-design/user-research" },
      { name: "Wireframing & Prototyping", href: "/ux-ui-design/wireframing-prototyping" },
      { name: "Responsief Webdesign", href: "/webdevelopment/responsief-webdesign" }, // Behoud deze als relevant
      { name: "Mobile App Design (iOS & Android)", href: "/ux-ui-design/mobile-app-design" },
      { name: "E-commerce UX Optimalisatie", href: "/ux-ui-design/ecommerce-ux" },
      { name: "Usability Testing & Analyse", href: "/ux-ui-design/usability-testing" },
      { name: "Design System Ontwikkeling", href: "/ux-ui-design/design-systems" },
      { name: "Accessibility (WCAG) Audits", href: "/ux-ui-design/accessibility-audits" },
    ],
    cta: "/ux-ui-design-overzicht",
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    bg: { light: "bg-amber-50", dark: "dark:bg-amber-900/30" },
    accent: "#F59E0B",
  },
  {
    title: "Online Marketing & Groei (via EssMarketing)",
    description:
      "Vergroot je online zichtbaarheid en conversies met datagedreven SEO, Google Ads, social media en contentmarketing, uitgevoerd door onze gespecialiseerde partner EssMarketing.",
    services: [
      { name: "SEO Specialist", href: "https://www.essmarketing.nl/seo-specialist" },
      { name: "Google Ads Uitbesteden", href: "https://www.essmarketing.nl/google-ads-uitbesteden" },
      { name: "Content Marketing Uitbesteden", href: "https://www.essmarketing.nl/content-marketing-uitbesteden" },
      { name: "Social Media Advertising", href: "https://www.essmarketing.nl/social-media-adverteren" },
      { name: "E-mailmarketing & Automatisering", href: "https://www.essmarketing.nl/e-mailmarketing" },
      { name: "Conversie Optimalisatie (CRO)", href: "https://www.essmarketing.nl/conversie-optimalisatie" },
      { name: "Marketplace Advertising", href: "https://www.essmarketing.nl/marketplaces" },
      { name: "Affiliate Marketing", href: "https://www.essmarketing.nl/affiliate-marketing" },
    ],
    cta: "https://www.essmarketing.nl/",
    icon: <BarChart className="w-6 h-6 text-white" />,
    bg: { light: "bg-emerald-50", dark: "dark:bg-emerald-900/30" },
    accent: "#10B981",
  },
  {
    title: "Strategie & Branding (deels via EssMedia)",
    description:
      "Van merkpositionering en visuele identiteit tot campagnes en professionele content. Voor hoogwaardige foto- en videoproducties werken we samen met onze partner EssMedia.",
    services: [
      { name: "Merkpositionering", href: "/diensten/merkpositionering" },
      { name: "Merkidentiteit", href: "/diensten/merkidentiteit" },
      { name: "Visuele Identiteit", href: "/diensten/visuele-identiteit" },
      { name: "Rebranding", href: "/diensten/rebranding" },
      { name: "Campagnes en Activatie", href: "/diensten/campagnes-en-activatie" },
      { name: "Contentmarketing (Strategie)", href: "/diensten/contentmarketing" },
      {
        name: "Bedrijfsvideo (via EssMedia)",
        href: "https://www.essmedia.nl/bedrijfsvideo-laten-maken",
        icon: <Video className="w-4 h-4 inline mr-1" />,
      },
      {
        name: "Productvideo (via EssMedia)",
        href: "https://www.essmedia.nl/productvideo-laten-maken",
        icon: <Video className="w-4 h-4 inline mr-1" />,
      },
      {
        name: "Social Media Reels & Shorts (via EssMedia)",
        href: "https://www.essmedia.nl/social-media-content",
        icon: <Video className="w-4 h-4 inline mr-1" />,
      },
      {
        name: "Bedrijfs- & Productfotografie (via EssMedia)",
        href: "https://www.essmedia.nl/fotografie",
        icon: <Camera className="w-4 h-4 inline mr-1" />,
      },
      {
        name: "Drone Video & Foto (via EssMedia)",
        href: "https://www.essmedia.nl/drone",
        icon: <Camera className="w-4 h-4 inline mr-1" />,
      },
      {
        name: "Animatievideo's (via EssMedia)",
        href: "https://www.essmedia.nl/animatie",
        icon: <Video className="w-4 h-4 inline mr-1" />,
      },
    ],
    cta: "/diensten/strategie-en-branding-overzicht",
    icon: <Compass className="w-6 h-6 text-white" />,
    bg: { light: "bg-purple-50", dark: "dark:bg-purple-900/30" },
    accent: "#8B5CF6",
  },
  {
    title: "AI & Generatieve Oplossingen",
    description:
      "Benut de kracht van Artificial Intelligence. Van slimme chatbots en AI-gedreven klantenservice tot content generatie en voorspellende analyses.",
    services: [
      { name: "AI Chatbots & Conversational AI", href: "/ai-oplossingen/chatbots" },
      { name: "AI VoIP & Klantenservice Automatisering", href: "/ai-oplossingen/voip-klantenservice" },
      { name: "AI Content Generatie & Optimalisatie", href: "/ai-oplossingen/content-creatie" },
      { name: "AI Gedreven Data Analyse & Inzichten", href: "/ai-oplossingen/data-analyse" },
      { name: "Custom AI Model Ontwikkeling", href: "/ai-oplossingen/custom-ai-modellen" },
      { name: "AI Strategie & Implementatie", href: "/ai-oplossingen/strategie" },
    ],
    cta: "/ai-oplossingen",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    bg: { light: "bg-teal-50", dark: "dark:bg-teal-900/40" },
    accent: "#14B8A6",
  },
  {
    title: "Data & Procesautomatisering",
    description:
      "Transformeer data in waardevolle inzichten en automatiseer bedrijfsprocessen voor maximale efficiëntie en groei.",
    services: [
      { name: "Marketing Automatisering", href: "/marketing-automatisering" },
      { name: "Bedrijfsproces Automatisering (RPA)", href: "/automatisering/rpa" },
      { name: "Workflow Optimalisatie & Automatisering", href: "/automatisering/workflow" },
      { name: "CRM Automatisering & Integratie", href: "/automatisering/crm" }, // Ook onder webdevelopment, hier specifieker voor automatisering
      { name: "Data Pipeline Ontwikkeling & ETL", href: "/automatisering/data-pipelines" },
      { name: "Business Intelligence & Dashboards", href: "/data-inzichten/dashboards" },
    ],
    cta: "/data-en-automatisering-overzicht",
    icon: <Database className="w-6 h-6 text-white" />,
    bg: { light: "bg-rose-50", dark: "dark:bg-rose-900/30" },
    accent: "#F43F5E",
  },
  {
    title: "ICT & Cloud Diensten (via EssICT)",
    description:
      "Betrouwbare en toekomstgerichte ICT-oplossingen via onze partner EssICT. Van systeembeheer tot cloud en security.",
    services: [
      { name: "VoIP Telefonie Oplossingen", href: "https://www.essict.nl/voip" }, // Specifieke link indien bekend, anders algemeen
      { name: "Systeembeheer & Netwerkbeheer", href: "https://www.essict.nl/systeembeheer" },
      { name: "Werkplekbeheer (Modern Workplace)", href: "https://www.essict.nl/werkplekbeheer" },
      { name: "ICT Beveiliging & Cybersecurity", href: "https://www.essict.nl/ict-beveiliging" },
      { name: "Office 365 Beheer & Support", href: "https://www.essict.nl/office-365" },
      { name: "Security Awareness Training", href: "https://www.essict.nl/security-awareness" },
      { name: "Hulp op Afstand & ICT Support", href: "https://www.essict.nl/support" },
      { name: "Algemene ICT Diensten", href: "https://www.essict.nl/" },
    ],
    cta: "https://www.essict.nl/",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    bg: { light: "bg-blue-50", dark: "dark:bg-blue-900/30" },
    accent: "#3B82F6", // Blauw accent voor ICT
  },
]

export default function DienstenPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const [hoveredSection, setHoveredSection] = useState<number | null>(null)
  const [hoveredService, setHoveredService] = useState<{ section: number; service: number } | null>(null)

  return (
    <main className="bg-white dark:bg-black min-h-screen">
      {/* HERO SECTION */}
      <section ref={ref} className="relative bg-[#2D4625] dark:bg-[#1a2a18] text-white overflow-hidden py-48">
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
          <motion.div
            style={{ y }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#a6e267] filter blur-[100px] opacity-20 animate-pulse-slow"
          ></motion.div>
          <motion.div
            style={{ y: y.get() * -0.5 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#2D4625] filter blur-[120px] opacity-10 animate-pulse-slower"
          ></motion.div>

          {/* Tech lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a6e267]/20 text-[#a6e267] text-sm font-medium mb-4 border border-[#a6e267]/30">
              <span>Wat we doen</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Wij laten jouw merk online <br className="hidden md:block" /> winnen
            </h1>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <FaGoogle className="w-5 h-5" />
              <span>Onze klanten beoordelen ons met een 4,9</span>
              <div className="flex text-yellow-400 ml-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
              <a href="#" className="underline ml-2 hover:text-white transition-colors">
                150+ reviews
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center gap-6">
            <p className="text-white/80 text-lg md:text-right">
              Wij realiseren groei voor jouw organisatie door <br className="hidden md:block" />
              <strong className="text-[#a6e267]">branding</strong>, <strong className="text-[#a6e267]">websites</strong>{" "}
              en <strong className="text-[#a6e267]">marketing</strong>.
            </p>
            <div className="flex gap-2">
              <Link
                href="/contact"
                className="bg-[#a6e267] hover:bg-white text-[#2D4625] hover:text-black font-medium px-6 py-3 rounded-full transition-colors flex items-center"
              >
                Contact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/cases"
                className="bg-transparent border border-white/30 hover:border-white/80 text-white px-6 py-3 rounded-full transition-all"
              >
                Bekijk cases
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
      </section>

      {/* SERVICE SECTIONS */}
      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`${section.bg.light} ${section.bg.dark} py-24 relative overflow-hidden`}
          onMouseEnter={() => setHoveredSection(index)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Futuristic background elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full grid grid-cols-12 grid-rows-6">
                {Array.from({ length: 72 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-gray-500"></div>
                ))}
              </div>
            </div>

            {/* Subtle glow */}
            <div
              className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full filter blur-[80px] opacity-10"
              style={{ backgroundColor: section.accent }}
            ></div>
          </div>

          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: section.accent }}
                >
                  {section.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white sticky top-0 pt-4">
                  {section.title}
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-8">{section.description}</p>
              <Link
                href={section.cta}
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all"
                style={{
                  backgroundColor: hoveredSection === index ? section.accent : "rgb(17 24 39)",
                  color: "white",
                }}
                onMouseEnter={() => setHoveredSection(index)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                Bekijk alle diensten
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <ul className="space-y-4 text-lg text-gray-800 dark:text-gray-200 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 md:items-baseline">
                {section.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="group"
                    onMouseEnter={() => setHoveredService({ section: index, service: idx })}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <Link href={service.href} className="flex items-center hover:translate-x-1 transition-transform">
                      <ChevronRight
                        className="w-5 h-5 mr-2 transition-colors"
                        style={{
                          color:
                            hoveredService?.section === index && hoveredService?.service === idx
                              ? section.accent
                              : "#a6e267",
                        }}
                      />
                      <span
                        className="transition-colors"
                        style={{
                          color:
                            hoveredService?.section === index && hoveredService?.service === idx
                              ? section.accent
                              : "inherit",
                        }}
                      >
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-[#2D4625] text-white relative overflow-hidden">
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
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#a6e267] filter blur-[100px] opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#2D4625] filter blur-[120px] opacity-10 animate-pulse-slower"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Klaar om jouw merk te laten groeien?</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              Neem contact met ons op voor een vrijblijvend gesprek over hoe wij jouw digitale ambities kunnen
              waarmaken.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#a6e267] hover:bg-white text-[#2D4625] hover:text-black font-medium px-8 py-4 rounded-full transition-colors flex items-center"
              >
                Neem contact op
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/cases"
                className="bg-transparent border border-white/30 hover:border-white/80 text-white px-8 py-4 rounded-full transition-all"
              >
                Bekijk onze cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
    </main>
  )
}
