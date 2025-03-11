"use client"

import { useEffect, useState, useRef } from "react"
import "flickity/css/flickity.css"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { decodeHtml } from "@/utils/decodeHtml"

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
}

export default function Portfolio() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const flickityRef = useRef<any>(null)
  const flickityContainerRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    let flkty: any = null

    async function loadFlickity() {
      if (typeof window !== "undefined" && cases.length > 0 && flickityContainerRef.current) {
        try {
          const FlickityModule = await import("flickity")
          const FlickityInstance = FlickityModule.default

          // Only initialize if not already initialized
          if (!flickityRef.current && flickityContainerRef.current) {
            flkty = new FlickityInstance(flickityContainerRef.current, {
              cellAlign: "left",
              contain: true,
              groupCells: 2,
              wrapAround: false,
              freeScroll: false,
              pageDots: false,
              prevNextButtons: false, // We'll use custom buttons
              draggable: true,
              friction: 0.15,
            })

            flickityRef.current = flkty
          }
        } catch (error) {
          console.error("Error initializing Flickity:", error)
        }
      }
    }

    loadFlickity()

    // Cleanup function
    return () => {
      if (flickityRef.current) {
        try {
          flickityRef.current.destroy()
        } catch (error) {
          console.error("Error destroying Flickity:", error)
        }
        flickityRef.current = null
      }
    }
  }, [cases])

  const handlePrevClick = () => {
    if (flickityRef.current) {
      flickityRef.current.previous()
    }
  }

  const handleNextClick = () => {
    if (flickityRef.current) {
      flickityRef.current.next()
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
      </div>
    )
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Onze Cases</h2>
        </div>

        {/* Flickity Slider */}
        <div className="relative">
          <div ref={flickityContainerRef} className="overflow-hidden">
            {cases.map((caseItem) => {
              const title = decodeHtml(caseItem.title.rendered)
              const industry = caseItem.acf?.industry || ""
              const stats = caseItem.acf?.stats || ""
              const imageSrc = caseItem._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"

              return (
                <div key={caseItem.id} className="w-full md:w-[calc(50%-20px)] px-2 md:px-4">
                  <div className="mb-8">
                    {/* Laptop mockup with image */}
                    <div className="relative mb-6 bg-gray-900 rounded-md overflow-hidden">
                      <div className="pt-8 pb-12 px-12">
                        {/* Company logo or icon */}
                        <div className="absolute top-8 left-8 bg-white rounded-full p-2 z-10 w-12 h-12 flex items-center justify-center">
                          {caseItem.id % 2 === 0 ? (
                            <div className="text-2xl font-bold">X</div>
                          ) : (
                            <div className="w-8 h-8">
                              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" />
                                <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="2" />
                                <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Laptop screen with website image */}
                        <div className="relative w-full h-[280px] rounded-t-md overflow-hidden border-t-8 border-x-8 border-gray-800 bg-white">
                          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
                        </div>

                        {/* Laptop base */}
                        <div className="h-4 bg-gray-800 rounded-b-md"></div>
                      </div>
                    </div>

                    {/* Text content */}
                    <div>
                      {/* Company name and stats */}
                      <div className="flex items-center mb-2">
                        <p className="text-sm font-bold text-gray-900">{industry}</p>
                        {stats && (
                          <>
                            <div className="mx-2 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs text-green-800 font-bold">
                              1
                            </div>
                            <p className="text-sm text-gray-700">{stats}</p>
                          </>
                        )}
                      </div>

                      {/* Case title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-end mt-4">
            <Link
              href="/cases"
              className="mr-auto bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Alle cases
            </Link>
            <button
              onClick={handlePrevClick}
              className="w-12 h-12 border border-gray-300 flex items-center justify-center mr-2 hover:bg-gray-100"
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNextClick}
              className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

