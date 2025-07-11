"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Code, Layers, PenTool, ArrowRight } from "lucide-react"
import type { JSX } from "react"

interface Case {
  id: number
  title: { rendered: string }
  slug: string
  acf?: {
    industry?: string
    subtitle?: string
    stats?: string
  }
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
    }>
  }
  excerpt?: {
    rendered: string
  }
}

// Helper function to decode HTML entities
const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

// Helper function to strip HTML tags
const stripHtml = (html: string) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "")
}

// Map service names to icons
const serviceIcons: Record<string, JSX.Element> = {
  Webdesign: <PenTool className="h-4 w-4" />,
  Development: <Code className="h-4 w-4" />,
  "Webshop & ecommerce": <Layers className="h-4 w-4" />,
  Design: <PenTool className="h-4 w-4" />,
  Strategy: <ExternalLink className="h-4 w-4" />,
}

export default function Portfolio() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  // Fetch cases from WordPress API
  useEffect(() => {
    async function fetchCases() {
      try {
        const res = await fetch("https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=6")
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`)
        const data = await res.json()
        setCases(data)
        console.log("Fetched cases:", data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching cases")
      } finally {
        setLoading(false)
      }
    }
    fetchCases()
  }, [])

  // Navigation functions
  const nextSlide = () => {
    if (cases.length <= 2) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cases.length)
  }

  const prevSlide = () => {
    if (cases.length <= 2) return
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cases.length) % cases.length)
  }

  // Sample service tags for each case
  const serviceTags = [
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
  ]

  // Loading state
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-64 bg-[#1a2a18]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[#a6e267]/20 rounded-full"></div>
          <div className="absolute inset-0 border-t-4 border-[#a6e267] rounded-full animate-spin"></div>
          <div className="absolute inset-[4px] bg-[#2D4625] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-[#a6e267] rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="w-full text-center py-12 text-red-500 bg-[#1a2a18]">
        <div className="container mx-auto px-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-2">Error Loading Portfolio</h3>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} className="w-full py-24 relative overflow-hidden bg-[#1a2a18] text-white">
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
          style={{ y: backgroundY }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#2D4625] filter blur-[100px] opacity-20 animate-pulse-slow"
        ></motion.div>
        <motion.div
          style={{ y: backgroundY }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#a6e267] filter blur-[120px] opacity-10 animate-pulse-slower"
        ></motion.div>

        {/* Tech lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header section with title and subtitle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="relative text-sm font-medium mb-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2D4625]/50 text-[#a6e267] border border-[#a6e267]/30">
              <Layers className="h-4 w-4 mr-2" />
              <span>Portfolio</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 relative inline-block">
              Onze klantcases
              <div className="absolute -bottom-2 left-0 h-[2px] w-1/3 bg-gradient-to-r from-[#a6e267] to-transparent"></div>
            </h2>
            <p className="text-white/70 max-w-xl">
              Ontdek hoe we bedrijven hebben geholpen hun digitale aanwezigheid te transformeren met innovatieve
              oplossingen op maat.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/cases"
              className="inline-flex items-center px-6 py-3 bg-[#2D4625] hover:bg-[#a6e267] text-white hover:text-[#2D4625] font-medium rounded-full transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-[#a6e267]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative z-10">Alle klantcases</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Slider container */}
        <div className="relative">
          {/* Navigation buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 -ml-4 md:-ml-6"
          >
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267] flex items-center justify-center transition-all duration-300 group hover:bg-[#2D4625]/50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-white group-hover:text-[#a6e267] transition-colors duration-300" />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 -mr-4 md:-mr-6"
          >
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267] flex items-center justify-center transition-all duration-300 group hover:bg-[#2D4625]/50"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-white group-hover:text-[#a6e267] transition-colors duration-300" />
            </button>
          </motion.div>

          {/* Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            ref={sliderRef}
            className="overflow-hidden"
          >
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {cases.map((_, index) => {
                // Get the two cases to display in this slide
                const case1 = cases[index % cases.length]
                const case2 = cases[(index + 1) % cases.length]

                const title1 = decodeHtml(case1.title.rendered)
                const industry1 = case1.acf?.industry || ""
                const imageSrc1 = case1._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"
                const slug1 = case1.slug || ""

                const title2 = decodeHtml(case2.title.rendered)
                const industry2 = case2.acf?.industry || ""
                const imageSrc2 = case2._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"
                const slug2 = case2.slug || ""

                return (
                  <div key={`slide-${index}`} className="min-w-full px-2">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Left case card */}
                      <div
                        className="w-full sm:w-1/2 mb-4 sm:mb-0"
                        onMouseEnter={() => setHoveredCard(index * 2)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="relative overflow-hidden rounded-xl h-[350px] sm:h-[450px] group border border-[#333333] hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)]">
                          <div className="absolute top-4 left-4 z-20">
                            <div className="bg-[#1a1a1a]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[#333333] group-hover:border-[#a6e267] transition-all duration-300 flex items-center">
                              <div className="w-2 h-2 bg-[#a6e267] rounded-full mr-2"></div>
                              <h3 className="text-white text-sm font-medium">{industry1}</h3>
                            </div>
                          </div>
                          <div className="relative w-full h-full">
                            <Image
                              src={imageSrc1 || "/placeholder.svg"}
                              alt={title1}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              priority={index === currentIndex}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a18]/90 via-[#1a2a18]/40 to-transparent"></div>

                            {/* Tech overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                              <div className="h-full w-full grid grid-cols-6 grid-rows-6">
                                {Array.from({ length: 36 }).map((_, i) => (
                                  <div key={i} className="border-[0.5px] border-[#a6e267]/20"></div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                            <h4 className="text-white text-xl font-medium mb-4 group-hover:text-[#a6e267] transition-colors duration-300">
                              {title1}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {serviceTags[index % serviceTags.length].slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="text-white text-xs bg-[#1a1a1a]/60 backdrop-blur-sm px-3 py-1 rounded-full border border-[#333333] group-hover:border-[#a6e267]/50 transition-all duration-300 flex items-center"
                                >
                                  {serviceIcons[tag] && <span className="mr-1">{serviceIcons[tag]}</span>}
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="mt-6 h-[1px] w-0 bg-[#a6e267] group-hover:w-full transition-all duration-1000 ease-in-out"></div>

                            <div className="mt-4">
                              <a
                                href={`/cases/${slug1}`}
                                className="inline-flex items-center text-white bg-[#2D4625] hover:bg-[#a6e267] hover:text-[#2D4625] px-4 py-2 rounded-full transition-colors duration-300"
                                onClick={(e) => {
                                  console.log("Case link clicked:", `/cases/${slug1}`)
                                }}
                              >
                                <span>Bekijk case</span>
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                            </div>
                          </div>

                          {/* Animated corner accent */}
                          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                            <div className="absolute top-0 right-0 w-8 h-8 bg-[#a6e267]/0 group-hover:bg-[#a6e267]/20 transform rotate-45 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                          </div>
                        </div>
                      </div>

                      {/* Right case card */}
                      <div
                        className="w-full sm:w-1/2"
                        onMouseEnter={() => setHoveredCard(index * 2 + 1)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="relative overflow-hidden rounded-xl h-[350px] sm:h-[450px] group border border-[#333333] hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)]">
                          <div className="absolute top-4 left-4 z-20">
                            <div className="bg-[#1a1a1a]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[#333333] group-hover:border-[#a6e267] transition-all duration-300 flex items-center">
                              <div className="w-2 h-2 bg-[#a6e267] rounded-full mr-2"></div>
                              <h3 className="text-white text-sm font-medium">{industry2}</h3>
                            </div>
                          </div>
                          <div className="relative w-full h-full">
                            <Image
                              src={imageSrc2 || "/placeholder.svg"}
                              alt={title2}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              priority={index === currentIndex}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a18]/90 via-[#1a2a18]/40 to-transparent"></div>

                            {/* Tech overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                              <div className="h-full w-full grid grid-cols-6 grid-rows-6">
                                {Array.from({ length: 36 }).map((_, i) => (
                                  <div key={i} className="border-[0.5px] border-[#a6e267]/20"></div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                            <h4 className="text-white text-xl font-medium mb-4 group-hover:text-[#a6e267] transition-colors duration-300">
                              {title2}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {serviceTags[(index + 1) % serviceTags.length].slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="text-white text-xs bg-[#1a1a1a]/60 backdrop-blur-sm px-3 py-1 rounded-full border border-[#333333] group-hover:border-[#a6e267]/50 transition-all duration-300 flex items-center"
                                >
                                  {serviceIcons[tag] && <span className="mr-1">{serviceIcons[tag]}</span>}
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="mt-6 h-[1px] w-0 bg-[#a6e267] group-hover:w-full transition-all duration-1000 ease-in-out"></div>

                            <div className="mt-4">
                              <a
                                href={`/cases/${slug2}`}
                                className="inline-flex items-center text-white bg-[#2D4625] hover:bg-[#a6e267] hover:text-[#2D4625] px-4 py-2 rounded-full transition-colors duration-300"
                                onClick={(e) => {
                                  console.log("Case link clicked:", `/cases/${slug2}`)
                                }}
                              >
                                <span>Bekijk case</span>
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                            </div>
                          </div>

                          {/* Animated corner accent */}
                          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                            <div className="absolute top-0 right-0 w-8 h-8 bg-[#a6e267]/0 group-hover:bg-[#a6e267]/20 transform rotate-45 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Pagination dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10 gap-2"
          >
            {Array.from({ length: cases.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-[#a6e267] w-10 shadow-[0_0_10px_rgba(166,226,103,0.5)]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
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
    </section>
  )
}
