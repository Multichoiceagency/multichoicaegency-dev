"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
    <section className="w-full py-16 bg-[#d9f2f2] relative overflow-hidden">
      {/* Background text decoration */}
      <div className="absolute top-0 left-0 text-[20rem] font-bold text-[#c1e8e8] opacity-50 select-none pointer-events-none z-0">
        Cases
      </div>
      <div className="absolute bottom-0 right-0 text-[20rem] font-bold text-[#c1e8e8] opacity-50 select-none pointer-events-none z-0">
        Cases
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Full-width header with paraphrased text */}
        <motion.div
          className="w-full mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="w-full text-3xl md:text-5xl font-bold text-[#1b7935] mb-6 leading-tight">
            Wij verbinden jouw merk met de digitale wereld
          </h2>
          <p className="w-full text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto">
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
            const cardHeight = index === 0 || index === 3 ? "h-[800px]" : "h-[900px]"

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
                    className="object-contain"
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

        {/* View all cases button */}
        <div className="w-full mt-12 text-center">
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
