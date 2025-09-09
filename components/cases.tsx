"use client"
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Grid,
  List,
  ArrowUpRight,
  X,
  ChevronDown,
  Columns,
  Images,
  Clock,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
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

type ViewMode = "list" | "grid" | "masonry" | "carousel" | "timeline"

export default function CasesPageClient({ initialCases }: CasesPageClientProps) {
  const [cases] = useState<Case[]>(initialCases)
  const [filteredCases, setFilteredCases] = useState<Case[]>(initialCases)
  const [activeFilter, setActiveFilter] = useState("All")
  const [hoveredCase, setHoveredCase] = useState<Case | null>(initialCases[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<ViewMode>("grid") // Default to grid view
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [featuredCase] = useState<Case>(initialCases[0])
  const searchRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselItemsPerPage = 3

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

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Carousel navigation
  const nextCarouselSlide = () => {
    const maxIndex = Math.ceil(filteredCases.length / carouselItemsPerPage) - 1
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevCarouselSlide = () => {
    const maxIndex = Math.ceil(filteredCases.length / carouselItemsPerPage) - 1
    setCarouselIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Featured cases for the hero section
  const featuredCases = cases.slice(0, 3)

  // Get current carousel items
  const currentCarouselItems = filteredCases.slice(
    carouselIndex * carouselItemsPerPage,
    (carouselIndex + 1) * carouselItemsPerPage,
  )

  // Format date for timeline (mock data since we don't have actual dates)
  const getFormattedDate = (index: number) => {
    const baseDate = new Date()
    baseDate.setMonth(baseDate.getMonth() - index)
    return baseDate.toLocaleDateString("nl-NL", { year: "numeric", month: "long" })
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero Overlay Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Video or Image */}
        <div className="absolute inset-0 w-full h-full">
          {featuredCase.acf?.media_type === "video" && featuredCase.acf.video_url ? (
            <video
              src={featuredCase.acf.video_url}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          ) : featuredCase._embedded?.["wp:featuredmedia"] ? (
            <Image
              src={featuredCase._embedded["wp:featuredmedia"][0].source_url || "/placeholder.svg"}
              alt={decodeHtml(featuredCase.title.rendered)}
              fill
              priority
              className="object-contain"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-gray-900 to-gray-800"></div>
          )}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl sm:py-32 md:py-32 font-bold text-white mb-18 mt-96 sm:mt-64">
              Creatieve oplossingen voor ambitieuze merken
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Ontdek ons portfolio van innovatieve projecten die merken helpen groeien en hun doelen te bereiken.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContent}
                className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors flex items-center"
              >
                Bekijk ons werk
                <ChevronDown className="ml-2 h-5 w-5" />
              </button>
              <Link
                href="/offerte-aanvragen"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
              >
                Gratis offerte aanvragen
              </Link>
            </div>
          </motion.div>

          {/* Featured Cases Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featuredCases.map((caseItem) => (
              <Link
                key={caseItem.id}
                href={`/cases/${caseItem.slug}`}
                className="group block bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-black/40 transition-colors"
              >
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-300">
                      {caseItem.acf?.industry || "Uncategorized"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors mb-3">
                    {decodeHtml(caseItem.title.rendered)}
                  </h3>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <span>Bekijk case</span>
                    <ArrowUpRight className="ml-2 h-4 w-4 transform group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <button onClick={scrollToContent} className="text-white flex flex-col items-center">
              <span className="mb-2 text-sm">Scroll naar beneden</span>
              <ChevronDown className="h-6 w-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div ref={contentRef} className="pt-24">
        {/* Header Section */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold dark:text-white">Werk waar we trots op zijn</h1>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                {/* View Mode Selector */}
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mr-4">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}
                    aria-label="List view"
                    title="List view"
                  >
                    <List className="h-5 w-5 dark:text-white" />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}
                    aria-label="Grid view"
                    title="Grid view"
                  >
                    <Grid className="h-5 w-5 dark:text-white" />
                  </button>
                  <button
                    onClick={() => setViewMode("masonry")}
                    className={`p-2 ${viewMode === "masonry" ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}
                    aria-label="Masonry view"
                    title="Masonry view"
                  >
                    <Columns className="h-5 w-5 dark:text-white" />
                  </button>
                  <button
                    onClick={() => setViewMode("carousel")}
                    className={`p-2 ${viewMode === "carousel" ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}
                    aria-label="Carousel view"
                    title="Carousel view"
                  >
                    <Images className="h-5 w-5 dark:text-white" />
                  </button>
                  <button
                    onClick={() => setViewMode("timeline")}
                    className={`p-2 ${viewMode === "timeline" ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}
                    aria-label="Timeline view"
                    title="Timeline view"
                  >
                    <Clock className="h-5 w-5 dark:text-white" />
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
              // LIST VIEW
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
                <div className="hidden lg:block sticky top-24 h-[calc(70vh-200px)]">
                  <AnimatePresence mode="wait">
                    {hoveredCase && (
                      <motion.div
                        key={hoveredCase.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-full w-full rounded-2xl overflow-hidden bg-green-900 dark:bg-gray-800"
                      >
                        {hoveredCase.acf?.media_type === "video" && hoveredCase.acf.video_url ? (
                          <video
                            src={hoveredCase.acf.video_url}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                          />
                        ) : hoveredCase._embedded?.["wp:featuredmedia"] ? (
                          <Image
                            src={hoveredCase._embedded["wp:featuredmedia"][0].source_url || "/placeholder.svg"}
                            alt={decodeHtml(hoveredCase.title.rendered)}
                            fill
                            style={{ objectFit: "contain" }}
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
            ) : viewMode === "grid" ? (
              // GRID VIEW
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
                              "/placeholder.svg?height=600&width=800&query=portfolio project" ||
                              "/placeholder.svg"
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
            ) : viewMode === "masonry" ? (
              // MASONRY VIEW
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredCases.map((caseItem, index) => (
                  <div
                    key={caseItem.id}
                    className="break-inside-avoid mb-6 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    style={{ height: `${300 + (index % 3) * 100}px` }}
                  >
                    <Link href={`/cases/${caseItem.slug}`} className="group block h-full">
                      <div className="relative h-full">
                        {caseItem.acf?.media_type === "video" && caseItem.acf.video_url ? (
                          <video
                            src={caseItem.acf.video_url}
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                          />
                        ) : caseItem._embedded?.["wp:featuredmedia"] ? (
                          <Image
                            src={
                              caseItem._embedded["wp:featuredmedia"][0].source_url ||
                              "/placeholder.svg?height=600&width=800&query=portfolio project" ||
                              "/placeholder.svg"
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <div className="text-white">
                            <div className="mb-2">
                              <span className="text-sm font-medium text-gray-300">
                                {caseItem.acf?.industry || "Uncategorized"}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{decodeHtml(caseItem.title.rendered)}</h3>
                            <div className="flex items-center">
                              <span>Bekijk case</span>
                              <ArrowUpRight className="ml-1 h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : viewMode === "carousel" ? (
              // CAROUSEL VIEW
              <div className="relative">
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 -ml-4 md:-ml-6">
                  <button
                    onClick={prevCarouselSlide}
                    className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-white" />
                  </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 -mr-4 md:-mr-6">
                  <button
                    onClick={nextCarouselSlide}
                    className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800 dark:text-white" />
                  </button>
                </div>

                <div className="overflow-hidden py-12">
                  <motion.div
                    className="flex gap-6"
                    animate={{ x: `-${carouselIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {filteredCases.map((caseItem) => (
                      <div key={caseItem.id} className="min-w-full">
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="md:w-1/2">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                              {caseItem.acf?.media_type === "video" && caseItem.acf.video_url ? (
                                <video
                                  src={caseItem.acf.video_url}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="w-full h-full object-cover"
                                />
                              ) : caseItem._embedded?.["wp:featuredmedia"] ? (
                                <Image
                                  src={
                                    caseItem._embedded["wp:featuredmedia"][0].source_url ||
                                    "/placeholder.svg?height=600&width=800&query=portfolio project" ||
                                    "/placeholder.svg"
                                  }
                                  alt={decodeHtml(caseItem.title.rendered)}
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
                                  <p className="text-gray-500 dark:text-gray-400">Geen afbeelding beschikbaar</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="md:w-1/2">
                            <div className="mb-4">
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
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                              {decodeHtml(caseItem.title.rendered)}
                            </h3>
                            {caseItem.subtitle && (
                              <p className="text-gray-600 dark:text-gray-300 mb-6">{caseItem.subtitle}</p>
                            )}
                            <Link
                              href={`/cases/${caseItem.slug}`}
                              className="inline-flex items-center px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                            >
                              Bekijk case
                              <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center mt-8 gap-2">
                  {Array.from({ length: Math.ceil(filteredCases.length / carouselItemsPerPage) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCarouselIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        carouselIndex === index ? "bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-600"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              // TIMELINE VIEW
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
                <div className="space-y-16">
                  {filteredCases.map((caseItem, index) => (
                    <div key={caseItem.id} className="relative">
                      <div
                        className={`flex flex-col ${
                          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        } items-center gap-8`}
                      >
                        <div className="md:w-1/2 flex flex-col items-center md:items-end">
                          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full mb-4">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                              {getFormattedDate(index)}
                            </span>
                          </div>
                          <div
                            className={`w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden ${
                              index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                            }`}
                          >
                            <div className="relative aspect-video">
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
                                    "/placeholder.svg?height=600&width=800&query=portfolio project" ||
                                    "/placeholder.svg"
                                  }
                                  alt={decodeHtml(caseItem.title.rendered)}
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
                                  <p className="text-gray-500 dark:text-gray-400">Geen afbeelding beschikbaar</p>
                                </div>
                              )}
                            </div>
                            <div className="p-6">
                              <div className="mb-2">
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  {caseItem.acf?.industry || "Uncategorized"}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {decodeHtml(caseItem.title.rendered)}
                              </h3>
                              <Link
                                href={`/cases/${caseItem.slug}`}
                                className="inline-flex items-center text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                              >
                                <span>Bekijk case</span>
                                <ArrowUpRight className="ml-1 h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="absolute left-1/2 top-4 transform -translate-x-1/2 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-gray-900"></div>
                        <div className="md:w-1/2"></div>
                      </div>
                    </div>
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
    </div>
  )
}
