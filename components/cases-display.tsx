'use client'

import { useState, useEffect, useMemo } from 'react'
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
    return Array.from(uniqueIndustries).sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b))
  }, [cases])

  const filteredCases = useMemo(() => {
    return activeTab === 'All' 
      ? cases 
      : cases.filter(c => c.acf?.industry === activeTab)
  }, [cases, activeTab])

  if (loading) {
    return <div className="text-center py-12">Loading cases...</div>
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>
  }

  if (cases.length === 0) {
    return <div className="text-center py-12">No cases available. Please check your data source.</div>
  }

  return (
    <section className="py-12 md:py-24 bg-coolGray-50" x-data="{ tab: '' }" x-init="tab = $refs.tab1.textContent">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto lg:max-w-none mb-20">
          <div className="flex flex-wrap -mx-4 items-end">
            <div className="w-full 2xl:w-7/12 px-4 mb-16 2xl:mb-0">
              <div className="inline-flex mx-auto items-start">
                <h1 className="font-heading text-3xl xs:text-5xl md:text-6xl lg:text-4xl tracking-tighter pt-4">Onze Cases</h1>
                <span className="block -mb-4 mr-12 lg:mr-8 text-right text-xl sm:text-2xl text-coolGray-600">({cases.length})</span>
              </div>
            </div>
            <div className="w-full 2xl:w-5/12 px-4">
              <ul className="flex flex-wrap -mb-2 items-center justify-end">
                {industries.map((industry) => (
                  <li key={industry} className="mb-2 mr-2 sm:mr-8">
                    <button
                      onClick={() => setActiveTab(industry)}
                      className={`inline-block py-2.5 px-5 text-lg leading-none ${
                        activeTab === industry
                          ? 'bg-black text-white'
                          : 'hover:bg-black hover:text-white'
                      } rounded-full transition duration-100`}
                    >
                      {industry}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:max-w-xl mx-auto lg:max-w-none">
          <div className="flex flex-wrap -mx-3 mb-20">
            {filteredCases.slice(0, 2).map((caseItem, index) => (
              <div key={caseItem.id} className={`w-full ${index === 0 ? 'lg:w-7/12' : 'lg:w-5/12'} px-3 mb-20 lg:mb-0`}>
                <Link href={`/cases/${caseItem.slug}`} className="group block">
                  <div className={`relative ${index === 0 ? 'h-112 md:h-200' : 'h-112 md:h-135'} mb-8 rounded-5xl overflow-hidden`}>
                    <div className="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-black transition duration-200"></div>
                    <Image
                      src={caseItem._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg'}
                      alt={caseItem.title.rendered}
                      objectFit="contain"
                      width={1000}
                      height={400}
                    />
                  </div>
                  <div className="max-w-xs lg:max-w-md">
                    <span className="inline-block mb-3 py-2 px-3 text-sm leading-none border-1.5 border-black group-hover:bg-black group-hover:text-white rounded-full transition duration-200">
                      {caseItem.acf?.industry || 'Uncategorized'}
                    </span>
                    <h3 className="text-4xl mb-6 tracking-tight leading-none">{decodeHtml(caseItem.title.rendered)}
                    </h3>
                    <span className="block text-coolGray-600">{caseItem.acf?.location || ''}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="mb-20">
            <div className="flex flex-wrap -mx-3">
              {filteredCases.slice(2, 5).map((caseItem) => (
                <div key={caseItem.id} className="w-full lg:w-1/3 px-3 mb-20 lg:mb-0">
                  <Link href={`/cases/${caseItem.slug}`} className="group block">
                    <div className="relative h-96 md:h-112 mb-8 rounded-5xl overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-black transition duration-200"></div>
                      <Image
                        src={caseItem._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg'}
                        alt={caseItem.title.rendered}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="max-w-xs">
                      <span className="inline-block mb-3 py-2 px-3 text-sm leading-none border-1.5 border-black group-hover:bg-black group-hover:text-white rounded-full transition duration-200">
                        {caseItem.acf?.industry || 'Uncategorized'}
                      </span>
                      <h3 className="text-3xl mb-6 tracking-tight leading-none">{caseItem.title.rendered}</h3>
                      <span className="block text-coolGray-600">{caseItem.acf?.location || ''}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link href="/cases" className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black">
              <span className="mr-4">Bekijk alle cases</span>
              <span className="group-hover:rotate-45 transform transition duration-100">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 1.5L1.5 9.5" stroke="black" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.5 8.83571V1.5H2.16429" stroke="black" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function generateStaticParams() {
  const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed')
  const cases = await res.json()

  return cases.map((caseItem: Case) => ({
    slug: caseItem.slug,
  }))
}

