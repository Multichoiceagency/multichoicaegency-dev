"use client"

import { NextSeo } from "next-seo"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight, Compass, Code, BarChart, Database, Lightbulb } from "lucide-react"
import { FaGoogle } from "react-icons/fa6"

const sections = [
  {
    title: "Branding",
    description:
      "Een sterk merk laat mensen jou herkennen, vertrouwen én onthouden. Wij helpen je merk bouwen vanaf positionering tot visuele identiteit.",
    services: [
      { name: "Merkpositionering", slug: "merkpositionering" },
      { name: "Merkidentiteit", slug: "merkidentiteit" },
      { name: "Employer branding", slug: "employer-branding" },
      { name: "Campagnes en activatie", slug: "campagnes-en-activatie" },
      { name: "Contentmarketing", slug: "contentmarketing" },
      { name: "Visuele identiteit", slug: "visuele-identiteit" },
      { name: "Videomarketing", slug: "videomarketing" },
      { name: "PR", slug: "pr" },
      { name: "Rebranding", slug: "rebranding" },
      { name: "Animatie", slug: "animatie" },
    ],
    cta: "/branding",
    icon: <Compass className="w-6 h-6" />,
    bg: {
      light: "bg-[#f3f7f3]",
      dark: "dark:bg-[#1d2a1d]",
    },
    accent: "#2D4625",
  },
  {
    title: "Development & Technology",
    description:
      "Wij bouwen schaalbare platformen, webapplicaties en websites die werken op elk niveau. Van design tot integraties en configuratoren.",
    services: [
      { name: "E-commerce webshop", slug: "e-commerce-webshop" },
      { name: "Corporate website", slug: "corporate-website" },
      { name: "PIM systemen", slug: "pim-systemen" },
      { name: "Integratieplatform", slug: "integratieplatform" },
      { name: "Webapplicatie", slug: "webapplicatie" },
      { name: "Webdesign", slug: "webdesign" },
      { name: "Configuratoren", slug: "configuratoren" },
      { name: "Digital Experience Platform (DXP)", slug: "digital-experience-platform" },
    ],
    cta: "/development",
    icon: <Code className="w-6 h-6" />,
    bg: {
      light: "bg-[#f1f8f5]",
      dark: "dark:bg-[#162921]",
    },
    accent: "#0F766E",
  },
  {
    title: "Online Marketing",
    description:
      "Wij versterken je digitale zichtbaarheid met slimme online campagnes: van SEA tot CRO en affiliate marketing.",
    services: [
      { name: "SEA", slug: "sea" },
      { name: "Programmatic Advertising", slug: "programmatic-advertising" },
      { name: "Social Advertising", slug: "social-advertising" },
      { name: "SEO", slug: "seo" },
      { name: "CRO", slug: "cro" },
      { name: "Affiliate marketing", slug: "affiliate-marketing" },
      { name: "Marketplaces", slug: "marketplaces" },
      { name: "Leadgen & Gamification", slug: "leadgen-gamification" },
      { name: "E-mailmarketing", slug: "e-mailmarketing" },
      { name: "Interim online marketing", slug: "interim-online-marketing" },
    ],
    cta: "/online-marketing",
    icon: <BarChart className="w-6 h-6" />,
    bg: {
      light: "bg-[#f6f9f3]",
      dark: "dark:bg-[#1b291c]",
    },
    accent: "#7E22CE",
  },
  {
    title: "Data & Automation",
    description:
      "Zet data slim in voor groei en efficiëntie. Van dashboards tot marketing automation: datagedreven succes begint hier.",
    services: [
      { name: "Data Insights", slug: "data-insights" },
      { name: "Data Consultancy", slug: "data-consultancy" },
      { name: "Data Engineering", slug: "data-engineering" },
      { name: "Marketing Automation", slug: "marketing-automation" },
    ],
    cta: "/data-automation",
    icon: <Database className="w-6 h-6" />,
    bg: {
      light: "bg-[#f4f9f5]",
      dark: "dark:bg-[#182b21]",
    },
    accent: "#0369A1",
  },
  {
    title: "Strategy & Innovation",
    description:
      "Samen bouwen aan digitale strategieën die écht impact maken. Innovatie, marketingstrategie en digitale transformatie staan centraal.",
    services: [
      { name: "Digital Transformation", slug: "digital-transformation" },
      { name: "Innovation Consultancy", slug: "innovation-consultancy" },
      { name: "Innovation Lab", slug: "innovation-lab" },
      { name: "Marketing Strategy", slug: "marketing-strategy" },
    ],
    cta: "/strategy-innovation",
    icon: <Lightbulb className="w-6 h-6" />,
    bg: {
      light: "bg-[#f5f8f2]",
      dark: "dark:bg-[#1e2d20]",
    },
    accent: "#CA8A04",
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
      <NextSeo
        title="Onze Diensten | Multichoiceagency"
        description="Ontdek onze expertise in branding, development, online marketing, data en innovatie. Wij helpen jouw merk online winnen."
        canonical="https://multichoiceagency.nl/diensten"
        openGraph={{
          url: "https://multichoiceagency.nl/diensten",
          title: "Onze Diensten | Multichoiceagency",
          description:
            "Ontdek hoe wij jouw merk digitaal laten groeien met branding, websites, marketing & technologie.",
          images: [
            {
              url: "https://multichoiceagency.nl/social/diensten-share.jpg",
              width: 1200,
              height: 630,
              alt: "Wij laten jouw merk online winnen",
              type: "image/jpeg",
            },
          ],
          siteName: "Multichoiceagency",
        }}
        twitter={{
          handle: "@multichoiceagency",
          site: "@multichoiceagency",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "branding, webdesign, online marketing, development, seo, digital agency, Next.js websites, digital innovation",
          },
        ]}
      />

      {/* HERO SECTION */}
      <section ref={ref} className="relative bg-[#2D4625] dark:bg-[#1a2a18] text-white overflow-hidden py-32">
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
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
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
              <ul className="space-y-4 text-lg text-gray-800 dark:text-gray-200 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {section.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="group"
                    onMouseEnter={() => setHoveredService({ section: index, service: idx })}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <Link
                      href={`/diensten/${service.slug}`}
                      className="flex items-center hover:translate-x-1 transition-transform"
                    >
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
