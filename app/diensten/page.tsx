"use client"
import { NextSeo } from "next-seo"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import { FaGoogle } from "react-icons/fa6";

const sections = [
  {
    title: "Branding",
    description:
      "Een sterk merk laat mensen jou herkennen, vertrouwen én onthouden. Wij helpen je merk bouwen vanaf positionering tot visuele identiteit.",
    services: [
      "Merkpositionering",
      "Merkidentiteit",
      "Employer branding",
      "Campagnes en activatie",
      "Contentmarketing",
      "Visuele identiteit",
      "Videomarketing",
      "PR",
      "Rebranding",
      "Animatie",
    ],
    cta: "/branding",
    bg: {
      light: "bg-[#f3f7f3]",
      dark: "dark:bg-[#1d2a1d]",
    },
  },
  {
    title: "Development & Technology",
    description:
      "Wij bouwen schaalbare platformen, webapplicaties en websites die werken op elk niveau. Van design tot integraties en configuratoren.",
    services: [
      "E-commerce webshop",
      "Corporate website",
      "PIM systemen",
      "Integratieplatform",
      "Webapplicatie",
      "Webdesign",
      "Configuratoren",
      "Digital Experience Platform (DXP)",
    ],
    cta: "/development",
    bg: {
      light: "bg-[#f1f8f5]",
      dark: "dark:bg-[#162921]",
    },
  },
  {
    title: "Online Marketing",
    description:
      "Wij versterken je digitale zichtbaarheid met slimme online campagnes: van SEA tot CRO en affiliate marketing.",
    services: [
      "SEA",
      "Programmatic Advertising",
      "Social Advertising",
      "SEO",
      "CRO",
      "Affiliate marketing",
      "Marketplaces",
      "Leadgen & Gamification",
      "E-mailmarketing",
      "Interim online marketing",
    ],
    cta: "/online-marketing",
    bg: {
      light: "bg-[#f6f9f3]",
      dark: "dark:bg-[#1b291c]",
    },
  },
  {
    title: "Data & Automation",
    description:
      "Zet data slim in voor groei en efficiëntie. Van dashboards tot marketing automation: datagedreven succes begint hier.",
    services: [
      "Data Insights",
      "Data Consultancy",
      "Data Engineering",
      "Marketing Automation",
    ],
    cta: "/data-automation",
    bg: {
      light: "bg-[#f4f9f5]",
      dark: "dark:bg-[#182b21]",
    },
  },
  {
    title: "Strategy & Innovation",
    description:
      "Samen bouwen aan digitale strategieën die écht impact maken. Innovatie, marketingstrategie en digitale transformatie staan centraal.",
    services: [
      "Digital Transformation",
      "Innovation Consultancy",
      "Innovation Lab",
      "Marketing Strategy",
    ],
    cta: "/strategy-innovation",
    bg: {
      light: "bg-[#f5f8f2]",
      dark: "dark:bg-[#1e2d20]",
    },
  },
]

export default function DienstenPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <main className="bg-white dark:bg-black">
      <NextSeo
        title="Onze Diensten | Jouw Digitale Partner"
        description="Ontdek onze expertise in branding, development, online marketing, data en innovatie. Wij helpen jouw merk online winnen."
        canonical="https://jouwdomein.nl/diensten"
        openGraph={{
          url: "https://jouwdomein.nl/diensten",
          title: "Onze Diensten | Jouw Digitale Partner",
          description:
            "Ontdek hoe wij jouw merk digitaal laten groeien met branding, websites, marketing & technologie.",
          images: [
            {
              url: "https://jouwdomein.nl/social/diensten-share.jpg",
              width: 1200,
              height: 630,
              alt: "Wij laten jouw merk online winnen",
              type: "image/jpeg",
            },
          ],
          siteName: "JouwDigitalePartner",
        }}
        twitter={{
          handle: "@jouwTwitterHandle",
          site: "@jouwTwitterHandle",
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
      <section
        ref={ref}
        className="relative bg-white dark:bg-[#0d0d0d] text-black dark:text-white overflow-hidden py-32"
      >
        <motion.div
          style={{
            y,
            backgroundImage: "url(/flow-assets/headers/bg-waves.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 opacity-20"
        />

        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-[#3A582F] uppercase border-l-4 border-[#3A582F] pl-2 mb-4 inline-block">
              Wat we doen
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Wij laten jouw merk online <br className="hidden md:block" /> winnen
            </h1>
            <div className="flex items-center gap-2 text-sm text-black/80 dark:text-white/80">
              <FaGoogle className="w-5 h-5" />
              <span>Onze klanten beoordelen ons met een 4,9</span>
              <div className="flex text-yellow-400 ml-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
              <a href="#" className="underline ml-2 hover:text-black dark:hover:text-white">
                150+ reviews
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center gap-6">
            <p className="text-black/70 dark:text-white/70 text-lg md:text-right">
              Wij realiseren groei voor jouw organisatie door <br className="hidden md:block" />
              <strong>branding</strong>, <strong>websites</strong> en <strong>marketing</strong>.
            </p>
            <div className="flex gap-2">
              <a
                href="/contact"
                className="bg-[#3A582F] hover:bg-black text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Contact
              </a>
              <a
                href="/contact"
                className="bg-[#3A582F] hover:bg-black p-3 rounded-lg transition-colors text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`${section.bg.light} ${section.bg.dark} py-24`}
        >
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 dark:text-white">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
                {section.description}
              </p>
              <Link
                href={section.cta}
                className="inline-flex items-center px-6 py-3 rounded-md bg-gray-900 text-white dark:bg-white dark:text-black font-medium hover:bg-[#3A582F] hover:text-white dark:hover:bg-[#3A582F] dark:hover:text-white transition-colors"
              >
                Lees meer
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <ul className="space-y-4 text-lg text-gray-800 dark:text-gray-200">
              {section.services.map((service, idx) => (
                <li
                  key={idx}
                  className="flex items-center group hover:text-[#3A582F] transition-colors cursor-pointer"
                >
                  <ArrowRightIcon className="w-4 h-4 mr-3 text-[#3A582F] group-hover:translate-x-1 transition-transform" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      ))}
    </main>
  )
}
