'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CaseStudy {
  id: number
  slug: string
  title: { rendered: string }
  acf: {
    client_name?: string
    subtitle?: string
    tags?: string
    media_type?: 'image' | 'video'
    video_url?: string
    image?: { url: string }
    logo?: { url: string }
  }
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>
  }
}

interface RelatedCasesProps {
  currentSlug: string
}

export default function RelatedCases({ currentSlug }: RelatedCasesProps) {
  const [relatedCases, setRelatedCases] = useState<CaseStudy[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRelatedCases() {
      try {
        const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed')
        if (!res.ok) {
          throw new Error('Failed to fetch related cases')
        }
        const data: CaseStudy[] = await res.json()
        const filteredCases = data.filter(cs => cs.slug !== currentSlug).slice(0, 5)
        setRelatedCases(filteredCases)
        setIsLoading(false)
      } catch (err) {
        console.error('Error fetching related cases:', err)
        setError('Failed to load related cases. Please try again later.')
        setIsLoading(false)
      }
    }

    fetchRelatedCases()
  }, [currentSlug])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === relatedCases.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? relatedCases.length - 1 : prevIndex - 1
    )
  }

  if (isLoading) {
    return <div className="text-center py-16">Loading related cases...</div>
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>
  }

  if (relatedCases.length === 0) {
    return null
  }

  return (
    <section className="bg-[#0A0A0B] py-24">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-green-400 text-lg font-medium tracking-wide uppercase">
            GERELATEERDE PROJECTEN
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white">
            Andere cases
          </h3>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[0, 1].map((offset) => {
                const caseIndex = (currentIndex + offset) % relatedCases.length
                const cs = relatedCases[caseIndex]
                return (
                  <PortfolioCard key={cs.id} item={cs} index={offset} />
                )
              })}
            </motion.div>
          </AnimatePresence>

          {relatedCases.length > 2 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ item, index }: { item: CaseStudy; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [imageError, setImageError] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    if (videoRef.current && item.acf?.media_type === "video") {
      videoRef.current.play().catch(error => console.error("Autoplay failed:", error))
    }
  }, [item.acf?.media_type])

  return (
    <Link href={`/cases/${item.slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative rounded-3xl bg-[#141417] p-4 transition-all duration-300 hover:bg-[#1A1A1D] cursor-pointer"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
          {item.acf?.media_type === "video" ? (
            <video
              ref={videoRef}
              src={item.acf.video_url}
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <Image
              src={imageError || !item.acf?.image?.url ? '/default-portfolio-image.jpg' : item.acf.image.url}
              alt={item.title.rendered}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/5">
            {item.acf?.logo?.url && !logoError ? (
              <Image
                src={item.acf.logo.url}
                alt={`${item.title.rendered} logo`}
                width={40}
                height={40}
                className="object-cover"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">
                {item.title.rendered.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white transition-colors duration-200 group-hover:text-green-400 hover:underline">
              {item.title.rendered}
            </h4>
            <p className="text-gray-400">{item.acf?.subtitle || ''}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.acf?.tags?.split(',').map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  )
}

