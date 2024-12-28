'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Case {
  id: number
  title: string
  subtitle: string
  media: {
    type: "video" | "image"
    src: string
  }
  image: string
  logonew: string
  tags: string[]
  slug: string
  category: string
}

export function CaseStudies() {
  const [cases, setCases] = useState<Case[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCases = async ()=> {
      try {
        const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed')
        const data = await res.json()

        const formattedCases = data.map((item: any) => ({
          id: item.id,
          title: item.title.rendered,
          subtitle: item.acf?.subtitle || "",
          media: {
            type: item.acf?.media_type || "image",
            src: item.acf?.media_type === "video"
              ? item.acf?.video_url
              : item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
          },
          image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
          logonew: item.acf?.logonew || "",
          tags: item.acf?.tags ? item.acf.tags.split(",").map((tag: string) => tag.trim()) : [],
          slug: item.slug,
          category: item.acf?.category || 'Uncategorized',
        }))

        setCases(formattedCases)
      } catch (error) {
        console.error('Error fetching cases:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCases()
  }, [])

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Onze projecten
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ontdek onze meest recente en innovatieve projecten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              </div>
            ))
          ) : (
            cases.slice(0, 4).map((project) => (
              <Link href={`/cases/${project.slug}`} className="block group relative perspective-1000">
                <div className="space-y-4 transform-gpu transition-all duration-500 group-hover:scale-[1.02]">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-lg">
                    {project.subtitle}
                  </p>
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-8">
                    {/* Main Image Container */}
                    <div className="relative aspect-[4/3] w-full transform-gpu transition-transform duration-500 group-hover:translate-z-20">
                      <div className="relative z-20 overflow-hidden rounded-lg shadow-xl">
                        {project.media.type === "video" ? (
                          <video
                            src={project.media.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src={project.media.src}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>

                      {/* Logo overlay */}
                      {project.logonew && (
                        <div className="absolute top-4 left-4 z-30 w-16 h-16 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg transform-gpu transition-transform duration-500 group-hover:translate-z-30">
                          <Image
                            src={project.logonew}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      )}

                      {/* Decorative elements */}
                      <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gray-200 dark:border-gray-700 rounded-lg z-10 transform-gpu transition-transform duration-500 group-hover:translate-z-10"></div>
                      
                      {/* Glowing effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg z-30"></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            className="group gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary-light dark:text-gray-900 dark:hover:bg-primary-light/90"
          >
            <Link href="/cases">
              Bekijk alle projecten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

