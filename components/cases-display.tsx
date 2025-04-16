"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

export default function Portfolio() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Fetch cases from WordPress API
  useEffect(() => {
    async function fetchCases() {
      try {
        const res = await fetch("https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=6")
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`)
        const data = await res.json()
        setCases(data)
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
      <div className="w-full flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#1b7935]"></div>
      </div>
    )
  }

  // Error state
  if (error) {
    return <div className="w-full text-center py-12 text-red-500">Error: {error}</div>
  }

  return (
    <section ref={sectionRef} className="w-full py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header section with title and subtitle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <div className="text-[#1b7935] dark:text-[#2eac4e] font-medium mb-2">Van startbaan tot succes</div>
            <h2 className="text-3xl md:text-5xl font-bold">Onze klantcases</h2>
          </div>
          <Link
            href="/cases"
            className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-md transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            Alle klantcases
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Slider container */}
        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 -ml-4 md:-ml-6">
            <button
              onClick={prevSlide}
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-[#1b7935] dark:text-[#2eac4e]" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 -mr-4 md:-mr-6">
            <button
              onClick={nextSlide}
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-[#1b7935] dark:text-[#2eac4e]" />
            </button>
          </div>

          {/* Slider */}
          <div ref={sliderRef} className="overflow-hidden">
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

                const title2 = decodeHtml(case2.title.rendered)
                const industry2 = case2.acf?.industry || ""
                const imageSrc2 = case2._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"

                return (
                  <div key={`slide-${index}`} className="min-w-full px-2">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Left case card */}
                      <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                        <div className="relative overflow-hidden rounded-lg h-[350px] sm:h-[450px] group">
                          <div className="absolute top-4 left-4 z-20">
                            <h3 className="text-white text-lg font-bold bg-black/50 px-3 py-1 rounded-md backdrop-blur-sm">
                              {industry1}
                            </h3>
                          </div>
                          <div className="relative w-full h-full">
                            <Image
                              src={imageSrc1 || "/placeholder.svg"}
                              alt={title1}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              priority={index === currentIndex}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                            <h4 className="text-white text-xl font-bold mb-3">{title1}</h4>
                            <div className="flex flex-wrap gap-2">
                              {serviceTags[index % serviceTags.length].slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="text-white text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right case card */}
                      <div className="w-full sm:w-1/2">
                        <div className="relative overflow-hidden rounded-lg h-[350px] sm:h-[450px] group">
                          <div className="absolute top-4 left-4 z-20">
                            <h3 className="text-white text-lg font-bold bg-black/50 px-3 py-1 rounded-md backdrop-blur-sm">
                              {industry2}
                            </h3>
                          </div>
                          <div className="relative w-full h-full">
                            <Image
                              src={imageSrc2 || "/placeholder.svg"}
                              alt={title2}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              priority={index === currentIndex}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                            <h4 className="text-white text-xl font-bold mb-3">{title2}</h4>
                            <div className="flex flex-wrap gap-2">
                              {serviceTags[(index + 1) % serviceTags.length].slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="text-white text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: cases.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-[#1b7935] dark:bg-[#2eac4e]" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
