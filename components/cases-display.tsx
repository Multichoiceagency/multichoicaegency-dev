"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { decodeHtml } from "@/utils/decodeHtml"
import { ArrowUpRight, Moon, Sun } from "lucide-react"

interface Case {
  id: number
  title: { rendered: string }
  slug: string
  featured_media: number
  acf?: {
    location?: string
    industry?: string
  }
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
      media_details?: {
        sizes?: {
          full?: { source_url: string }
          large?: { source_url: string }
          medium?: { source_url: string }
        }
      }
    }>
  }
}

export default function Portfolio() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("All")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    async function fetchCases() {
      try {
        const res = await fetch("https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=100")
        if (!res.ok) {
          throw new Error(`Failed to fetch cases: ${res.status} ${res.statusText}`)
        }
        const data = await res.json()
        setCases(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred while fetching cases")
      } finally {
        setLoading(false)
      }
    }

    fetchCases()
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const industries = useMemo(() => {
    const uniqueIndustries = new Set<string>(["All"])
    cases.forEach((c) => {
      if (c.acf?.industry) {
        uniqueIndustries.add(c.acf.industry)
      }
    })
    return Array.from(uniqueIndustries).sort((a, b) => (a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)))
  }, [cases])

  const filteredCases = useMemo(() => {
    return activeTab === "All" ? cases : cases.filter((c) => c.acf?.industry === activeTab)
  }, [cases, activeTab])

  const getImageUrl = (caseItem: Case): string => {
    const featuredMedia = caseItem._embedded?.["wp:featuredmedia"]?.[0]
    if (!featuredMedia) {
      console.warn(`No featured media found for case:`, caseItem.id)
      return "/placeholder.svg"
    }

    const sizes = featuredMedia.media_details?.sizes
    const imageUrl =
      sizes?.full?.source_url || sizes?.large?.source_url || sizes?.medium?.source_url || featuredMedia.source_url

    if (!imageUrl) {
      console.warn(`No valid image URL found for case:`, caseItem.id)
      return "/placeholder.svg"
    }

    return imageUrl
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-600"></div>
      </div>
    )
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>
  }

  if (cases.length === 0) {
    return <div className="text-center py-12">No cases available. Please check your data source.</div>
  }

  return (
    <section className="py-12 md:py-24 bg-coolGray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto lg:max-w-none mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <motion.div
              className="flex items-baseline mb-8 lg:mb-0 relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h1 className="font-heading text-3xl xs:text-5xl md:text-6xl lg:text-4xl tracking-tighter dark:text-white">
                Onze Cases
              </h1>
              <span className="ml-4 text-xl sm:text-2xl text-coolGray-600 dark:text-coolGray-400">
                ({cases.length})
              </span>
              <motion.div
                className="absolute -bottom-12 left-0 opacity-0 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <Link href="/cases">
                  <motion.button
                    className="px-4 py-2 bg-green-600 text-white rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Bekijk meer
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            <div className="flex items-center">
              <div className="flex-grow lg:ml-8 overflow-x-auto lg:overflow-x-visible mr-4">
                <ul className="flex flex-nowrap lg:flex-wrap -mb-2 items-center lg:justify-end">
                  {industries.map((industry, index) => (
                    <li key={industry} className="mb-2 mr-2 sm:mr-4 flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab(industry)}
                        className={`inline-block py-2 px-4 text-sm lg:text-base leading-none rounded-full transition duration-200 ${
                          activeTab === industry
                            ? "bg-green-600 text-white"
                            : "hover:bg-green-600 hover:text-white border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400"
                        }`}
                        style={{ perspective: "1000px" }}
                      >
                        {industry}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>
        </div>
        <div className="md:max-w-xl mx-auto lg:max-w-none">
          <div className="flex flex-wrap -mx-3 mb-20">
            {filteredCases.slice(0, 2).map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full ${index === 0 ? "lg:w-7/12" : "lg:w-5/12"} px-3 mb-20 lg:mb-0`}
              >
                <Link href={`/cases/${caseItem.slug}`} className="group block">
                  <div
                    className={`bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-lg dark:group-hover:shadow-gray-700`}
                  >
                    <div className={`relative ${index === 0 ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"}`}>
                      <div className="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-green-600 transition duration-200"></div>
                      <Image
                        src={getImageUrl(caseItem) || "/placeholder.svg"}
                        alt={caseItem.title.rendered}
                        layout="fill"
                        objectFit="cover"
                        onError={(e) => {
                          console.error("Image load error for case:", caseItem.id, e)
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg"
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <motion.span
                        className="inline-block mb-3 py-2 px-3 text-sm leading-none border-1.5 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 group-hover:bg-green-600 group-hover:text-white rounded-full transition duration-200"
                        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                      >
                        {caseItem.acf?.industry || "Case"}
                      </motion.span>
                      <motion.h3
                        className="text-4xl mb-6 tracking-tight leading-none group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400 transition-colors duration-200"
                        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                      >
                        {decodeHtml(caseItem.title.rendered)}
                      </motion.h3>
                      <span className="block text-coolGray-600 dark:text-coolGray-400">
                        {caseItem.acf?.location || ""}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mb-20">
            <div className="flex flex-wrap -mx-3">
              {filteredCases.slice(2, 5).map((caseItem, index) => (
                <motion.div
                  key={caseItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 2) * 0.1 }}
                  className="w-full lg:w-1/3 px-3 mb-20 lg:mb-0"
                >
                  <Link href={`/cases/${caseItem.slug}`} className="group block">
                    <div
                      className={`bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-lg dark:group-hover:shadow-gray-700`}
                    >
                      <div className="relative aspect-[4/3]">
                        <div className="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-green-600 transition duration-200"></div>
                        <Image
                          src={getImageUrl(caseItem) || "/placeholder.svg"}
                          alt={caseItem.title.rendered}
                          layout="fill"
                          objectFit="cover"
                          onError={(e) => {
                            console.error("Image load error for case:", caseItem.id, e)
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg"
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <motion.span
                          className="inline-block mb-3 py-2 px-3 text-sm leading-none border-1.5 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 group-hover:bg-green-600 group-hover:text-white rounded-full transition duration-200"
                          whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                        >
                          {caseItem.acf?.industry || "Case"}
                        </motion.span>
                        <motion.h3
                          className="text-3xl mb-6 tracking-tight leading-none group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400 transition-colors duration-200"
                          whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                        >
                          {decodeHtml(caseItem.title.rendered)}
                        </motion.h3>
                        <span className="block text-coolGray-600 dark:text-coolGray-400">
                          {caseItem.acf?.location || ""}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/cases"
              className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 hover:text-green-700 hover:border-green-700 dark:hover:text-green-300 dark:hover:border-green-300 transition-colors duration-200"
            >
              <span className="mr-4">Bekijk alle cases</span>
              <motion.span
                className="transform transition duration-100"
                whileHover={{ rotate: 45, scale: 1.2 }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <ArrowUpRight size={20} />
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

