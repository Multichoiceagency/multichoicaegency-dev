'use client'

import { useState, useEffect, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { decodeHtml } from '@/utils/decodeHtml'

interface Case {
  id: number
  title: { rendered: string }
  slug: string
  acf?: {
    location?: string
    industry?: string
  }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
    }>
  }
}

export default function CasesPage() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('All')
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  // Autoplay effect
  useEffect(() => {
    if (!emblaApi) return
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, 3000)
    return () => clearInterval(autoplay)
  }, [emblaApi])

  // Fetch cases
  useEffect(() => {
    async function fetchCases() {
      try {
        const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed')
        if (!res.ok) {
          throw new Error(`Failed to fetch cases: ${res.status} ${res.statusText}`)
        }
        const data = await res.json()
        setCases(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching cases')
      } finally {
        setLoading(false)
      }
    }

    fetchCases()
  }, [])

  const industries = useMemo(() => {
    const uniqueIndustries = new Set<string>(['All'])
    cases.forEach(c => {
      if (c.acf?.industry) {
        uniqueIndustries.add(c.acf.industry)
      }
    })
    return Array.from(uniqueIndustries).sort((a, b) => (a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b)))
  }, [cases])

  const filteredCases = useMemo(() => {
    return activeTab === 'All' ? cases : cases.filter(c => c.acf?.industry === activeTab)
  }, [cases, activeTab])

  if (loading) {
    return <div className="text-center py-12">Portfolio is aan het laden...</div>
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>
  }

  if (cases.length === 0) {
    return <div className="text-center py-12">No cases available. Please check your data source.</div>
  }

  return (
    <section className="py-12 md:py-24 bg-coolGray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-lg mx-auto lg:max-w-none mb-20">
          <h1 className="text-3xl md:text-5xl font-heading text-center">Onze Cases</h1>
        </div>

        {/* Tabs */}
        <div className="mb-8 text-center">
          <ul className="flex flex-wrap justify-center gap-4">
            {industries.map(industry => (
              <li key={industry}>
                <button
                  onClick={() => setActiveTab(industry)}
                  className={`px-5 py-2 rounded-full ${
                    activeTab === industry
                      ? 'bg-black text-white'
                      : 'hover:bg-green-700 hover:text-white border border-green-700 text-black'
                  } transition duration-200`}
                >
                  {industry}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Embla Slider */}
        <div ref={emblaRef} className="overflow-hidden w-screen">
        <div className="flex gap-x-32"> {/* Horizontale ruimte tussen slides */}
        {filteredCases.map(caseItem => (
              <div key={caseItem.id} className="flex-none w-1/4 px-36"> {/* 1/4 width for 4 items in a row */}
                <Link href={`/cases/${caseItem.slug}`} className="block group">
                <div
  className="relative h-[400px] md:h-[400px] lg:h-[700px] w-[800px] overflow-visible mb-4 rounded-lg"
>                <Image
                      src={caseItem._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg'}
                      alt={caseItem.title.rendered}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-teal-600 transition">
                    {decodeHtml(caseItem.title.rendered)}
                  </h3>
                  <p className="text-sm text-gray-600">{caseItem.acf?.location || ''}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
