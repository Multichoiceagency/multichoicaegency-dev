"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Grid, List, ArrowUpRight, ChevronDown, X } from "lucide-react"
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
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
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
    <div className="bg-white min-h-screen pt-36">
      {/* Hero Section with Featured Case */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Onze Cases</h1>
              <p className="text-lg text-gray-600 mb-8">
                Ontdek hoe we bedrijven helpen hun digitale aanwezigheid te versterken en hun doelen te bereiken met
                onze op maat gemaakte oplossingen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/cases/${featuredCase.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  <span>Bekijk uitgelichte case</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
                <button
                  onClick={() => searchRef.current?.focus()}
                  className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  <Search className="mr-2 h-4 w-4" />
                  <span>Zoek cases</span>
                </button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              {featuredCase._embedded?.["wp:featuredmedia"] && (
                <Image
                  src={featuredCase._embedded["wp:featuredmedia"][0].source_url || "/placeholder.svg"}
                  alt={decodeHtml(featuredCase.title.rendered)}
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <div className="text-white">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium">{featuredCase.acf?.industry || "Uncategorized"}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm font-medium">{featuredCase.acf?.location || ""}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{decodeHtml(featuredCase.title.rendered)}</h2>
                  <Link
                    href={`/cases/${featuredCase.slug}`}
                    className="inline-flex items-center text-white hover:underline"
                  >
                    <span>Bekijk case</span>
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                ref={searchRef}
                type="text"
                placeholder="Zoek cases..."
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black/20"
                defaultValue={searchQuery}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </form>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
              {/* Mobile Filter Button */}
              <div className="md:hidden w-full">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-lg"
                >
                  <span>Filter: {activeFilter}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Desktop Filters */}
              <div className="hidden md:flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => filterCases(industry)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === industry ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-gray-100" : "bg-white"}`}
                  aria-label="List view"
                >
                  <List className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : "bg-white"}`}
                  aria-label="Grid view"
                >
                  <Grid className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Industrie</h3>
                    <div className="flex flex-wrap gap-2">
                      {industries.map((industry) => (
                        <button
                          key={industry}
                          onClick={() => {
                            filterCases(industry)
                            setIsFilterOpen(false)
                          }}
                          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                            activeFilter === industry
                              ? "bg-black text-white"
                              : "bg-white text-gray-800 border border-gray-200"
                          }`}
                        >
                          {industry}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredCases.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Geen resultaten gevonden</h2>
              <p className="text-gray-600 mb-8">Probeer andere zoektermen of filters.</p>
              <button
                onClick={() => {
                  setActiveFilter("All")
                  clearSearch()
                }}
                className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Alle cases bekijken
              </button>
            </div>
          ) : viewMode === "list" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Case List */}
              <div>
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <span>Alle Cases</span>
                  <span className="ml-2 text-sm font-normal text-gray-500">({filteredCases.length})</span>
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
                        <span className="text-sm font-medium text-gray-600">
                          {caseItem.acf?.industry || "Uncategorized"}
                        </span>
                        {caseItem.acf?.location && (
                          <>
                            <span className="inline-block mx-2">•</span>
                            <span className="text-sm font-medium text-gray-600">{caseItem.acf.location}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors">
                          {decodeHtml(caseItem.title.rendered)}
                        </h3>
                        <div className="transform group-hover:rotate-45 transition-transform duration-300">
                          <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-black" />
                        </div>
                      </div>
                      {caseItem.subtitle && <p className="mt-3 text-gray-600 line-clamp-2">{caseItem.subtitle}</p>}
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
                      className="relative h-full w-full rounded-2xl overflow-hidden bg-gray-100"
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
                          <p className="text-gray-500">Geen afbeelding beschikbaar</p>
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
            // Grid View
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <span>Alle Cases</span>
                <span className="ml-2 text-sm font-normal text-gray-500">({filteredCases.length})</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCases.map((caseItem) => (
                  <Link key={caseItem.id} href={`/cases/${caseItem.slug}`} className="group block">
                    <div className="relative h-[300px] rounded-xl overflow-hidden mb-4">
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
                          src={caseItem._embedded["wp:featuredmedia"][0].source_url || "/placeholder.svg"}
                          alt={decodeHtml(caseItem.title.rendered)}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full bg-gray-100">
                          <p className="text-gray-500">Geen afbeelding beschikbaar</p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">
                          {caseItem.acf?.industry || "Uncategorized"}
                        </span>
                        {caseItem.acf?.location && (
                          <>
                            <span className="inline-block mx-2">•</span>
                            <span className="text-sm font-medium text-gray-600">{caseItem.acf.location}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om samen te werken?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Laat ons weten waar je mee bezig bent. We helpen je graag met het realiseren van jouw digitale ambities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Neem contact op
              </Link>
              <Link
                href="/diensten"
                className="px-8 py-4 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
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

