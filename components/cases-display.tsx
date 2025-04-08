"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"

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
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Create background text elements data
  const backgroundTexts = Array.from({ length: 20 }, (_, i) => {
    // Alternate between "Cases" and "Portfolio"
    const text = i % 2 === 0 ? "Cases" : "Portfolio"
    // Calculate position
    const row = Math.floor(i / 5)
    const col = i % 5
    // Alternate direction for each row
    const isEvenRow = row % 2 === 0

    return {
      text,
      x: `${col * 25}%`,
      y: `${row * 25}%`,
      delay: i * 0.1,
      direction: isEvenRow ? 1 : -1,
    }
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Sample service tags for each case
  const serviceTags = [
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
    <section ref={sectionRef} className="w-full py-16 bg-[#d9f2f2] dark:bg-background relative overflow-hidden">
      {/* Animated background text decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundTexts.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-[8rem] md:text-[12rem] font-bold text-[#c1e8e8] dark:text-green-900/30 opacity-30 select-none pointer-events-none"
            style={{
              left: item.x,
              top: item.y,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.3,
              x: [0, item.direction * 50, 0],
              y: [0, item.direction * 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Full-width header with paraphrased text */}
        <motion.div
          className="w-full mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="w-full text-3xl md:text-5xl font-bold text-[#1b7935] dark:text-white mb-6 leading-tight">
            Wij verbinden jouw merk met de digitale wereld
          </h2>
          <p className="w-full text-xl md:text-2xl text-gray-700 dark:text-white max-w-5xl mx-auto">
            Samen creëren we de brug tussen jouw merk en de online omgeving. In het digitale landschap is het essentieel
            om op een authentieke en impactvolle manier op te vallen.
          </p>
        </motion.div>

        {/* Masonry grid layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cases.slice(0, 4).map((caseItem, index) => {
            const title = decodeHtml(caseItem.title.rendered)
            const industry = caseItem.acf?.industry || ""
            const imageSrc = caseItem._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"

            // Determine card height based on position
            const cardHeight = index === 0 || index === 3 ? "h-[500px]" : "h-[450px]"

            return (
              <motion.div
                key={caseItem.id}
                className={`relative overflow-hidden rounded-lg ${cardHeight}`}
                variants={itemVariants}
              >
                {/* Company/Industry name */}
                <div className="absolute top-4 left-4 z-20">
                  <h3 className="text-white text-lg font-bold bg-black/50 px-3 py-1 rounded-md backdrop-blur-sm">
                    {industry}
                  </h3>
                </div>

                {/* Full-width image */}
                <div className="relative w-full h-full">
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                    priority={index < 2}
                  />

                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Title and service tags */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h4 className="text-white text-xl font-bold mb-3">{title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {serviceTags[index % serviceTags.length].slice(0, 5).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-white text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Spinning icon in the exact middle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <Link href="/cases" className="block">
            <div className="relative group">
              <motion.div
                className="w-24 h-24 bg-[#1b7935] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#a6e267] transition-colors duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#1b7935] font-bold text-sm">
                  Bekijk alle cases
                </div>
              </motion.div>
              <motion.svg
                className="absolute -inset-2 w-28 h-28 text-[#1b7935] opacity-70"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
              >
                <path
                  d="M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
              </motion.svg>
            </div>
          </Link>
        </div>

        {/* View all cases button (now hidden on desktop as we have the spinning button) */}
        <div className="w-full mt-12 text-center md:hidden">
          <Link
            href="/cases"
            className="inline-flex items-center px-6 py-3 bg-[#1b7935] hover:bg-[#145a28] text-white font-medium rounded-md transition-colors"
          >
            Bekijk alle cases
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
