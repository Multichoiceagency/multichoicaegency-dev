"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Grid, List, ArrowUpRight, X } from "lucide-react"
import { decodeHtml } from "@/utils/decodeHtml"

interface Case {
  id: number
  title: { rendered: string }
  subtitle: string
  slug: string
  acf?: {
    location?: string
    industry?: string
    media_type?: "video" | "image"
    video_url?: string
    tags?: string
    category?: string
    description?: string
  }
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
    }>
  }
}

interface CasesPageClientProps {
  initialCases: Case[]
}

export default function CasesPageClient({ initialCases }: CasesPageClientProps) {
  const [cases] = useState<Case[]>(initialCases)
  const [filteredCases, setFilteredCases] = useState<Case[]>(initialCases)
  const [activeFilter, setActiveFilter] = useState("All")
  const [hoveredCase, setHoveredCase] = useState<Case | null>(initialCases[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid") // Default to grid view to match the image
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [featuredCase] = useState<Case>(initialCases[0])
  const searchRef = useRef<HTMLInputElement>(null)

  const industries = ["All", ...Array.from(new Set(cases.map((c) => c.acf?.industry).filter(Boolean) as string[]))]
  const locations = [
    "All Locations",
    ...Array.from(new Set(cases.map((c) => c.acf?.location).filter(Boolean) as string[])),
  ]

  useEffect(() => {
    let filtered = [...cases]

    // Apply industry filter
    if (activeFilter !== "All") {
      filtered = filtered.filter((c) => c.acf?.industry === activeFilter)
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (c) =>
          decodeHtml(c.title.rendered).toLowerCase().includes(query) ||
          c.acf?.industry?.toLowerCase().includes(query) ||
          c.acf?.location?.toLowerCase().includes(query) ||
          c.acf?.description?.toLowerCase().includes(query),
      )
    }

    setFilteredCases(filtered)

    // Reset hovered case when filters change
    if (filtered.length > 0) {
      setHoveredCase(filtered[0])
    } else {
      setHoveredCase(null)
    }
  }, [activeFilter, searchQuery, cases])

  const filterCases = (filter: string) => {
    setActiveFilter(filter)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchRef.current) {
      setSearchQuery(searchRef.current.value)
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
    if (searchRef.current) {
      searchRef.current.value = ""
      searchRef.current.focus()
    }
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen pt-48">
      {/* Header Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold dark:text-white">Werk waar we trots op zijn</h1>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mr-4">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}
                  aria-label="List view"
                >
                  <List className="h-5 w-5 dark:text-white" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}
                  aria-label="Grid view"
                >
                  <Grid className="h-5 w-5 dark:text-white" />
                </button>
              </div>
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Zoek cases..."
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-black/20 dark:bg-gray-800 dark:text-white"
                  defaultValue={searchQuery}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => filterCases(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === industry
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          {filteredCases.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Geen resultaten gevonden</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">Probeer andere zoektermen of filters.</p>
              <button
                onClick={() => {
                  setActiveFilter("All")
                  clearSearch()
                }}
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Alle cases bekijken
              </button>
            </div>
          ) : viewMode === "list" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Case List */}
              <div>
                <h2 className="text-2xl font-bold mb-8 flex items-center dark:text-white">
                  <span>Alle Cases</span>
                  <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                    ({filteredCases.length})
                  </span>
                </h2>
                <div className="space-y-8">
                  {filteredCases.map((caseItem) => (
                    <Link
                      key={caseItem.id}
                      href={`/cases/${caseItem.slug}`}
                      className="group block"
                      onMouseEnter={() => setHoveredCase(caseItem)}
                    >
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {caseItem.acf?.industry || "Uncategorized"}
                        </span>
                        {caseItem.acf?.location && (
                          <>
                            <span className="inline-block mx-2">•</span>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {caseItem.acf.location}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-200 transition-colors">
                          {decodeHtml(caseItem.title.rendered)}
                        </h3>
                        <div className="transform group-hover:rotate-45 transition-transform duration-300">
                          <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-black dark:group-hover:text-white" />
                        </div>
                      </div>
                      {caseItem.subtitle && (
                        <p className="mt-3 text-gray-600 dark:text-gray-400 line-clamp-2">{caseItem.subtitle}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Column: Preview */}
              <div className="hidden lg:block sticky top-24 h-[calc(100vh-200px)]">
                <AnimatePresence mode="wait">
                  {hoveredCase && (
                    <motion.div
                      key={hoveredCase.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-full w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800"
                    >
                      {hoveredCase.acf?.media_type === "video" && hoveredCase.acf.video_url ? (
                        <video
                          src={hoveredCase.acf.video_url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : hoveredCase._embedded?.["wp:featuredmedia"] ? (
                        <Image
                          src={hoveredCase._embedded["wp:featuredmedia"][0].source_url || "/placeholder.svg"}
                          alt={decodeHtml(hoveredCase.title.rendered)}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-700 hover:scale-105"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <p className="text-gray-500 dark:text-gray-400">Geen afbeelding beschikbaar</p>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                        <div className="text-white">
                          <h2 className="text-2xl font-bold mb-2">{decodeHtml(hoveredCase.title.rendered)}</h2>
                          <Link
                            href={`/cases/${hoveredCase.slug}`}
                            className="inline-flex items-center text-white hover:underline"
                          >
                            <span>Bekijk case</span>
                            <ArrowUpRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            // Grid View - Matching the image design
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredCases.map((caseItem) => (
                  <Link key={caseItem.id} href={`/cases/${caseItem.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                      {caseItem.acf?.media_type === "video" && caseItem.acf.video_url ? (
                        <video
                          src={caseItem.acf.video_url}
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : caseItem._embedded?.["wp:featuredmedia"] ? (
                        <Image
                          src={
                            caseItem._embedded["wp:featuredmedia"][0].source_url ||
                            "/placeholder.svg?height=600&width=800&query=portfolio project"
                          }
                          alt={decodeHtml(caseItem.title.rendered)}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
                          <p className="text-gray-500 dark:text-gray-400">Geen afbeelding beschikbaar</p>
                        </div>
                      )}
                    </div>
                    <div>
                      {caseItem.acf?.industry && (
                        <div className="mb-2">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {caseItem.acf.industry}
                          </span>
                          {caseItem.acf?.location && (
                            <>
                              <span className="inline-block mx-2">•</span>
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {caseItem.acf.location}
                              </span>
                            </>
                          )}
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-200 transition-colors">
                        {decodeHtml(caseItem.title.rendered)}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Klaar om samen te werken?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Laat ons weten waar je mee bezig bent. We helpen je graag met het realiseren van jouw digitale ambities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Neem contact op
              </Link>
              <Link
                href="/diensten"
                className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Bekijk onze diensten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
