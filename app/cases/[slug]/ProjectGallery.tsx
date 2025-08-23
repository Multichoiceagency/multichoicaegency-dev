"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import type { CaseStudy } from "./CaseStudyContent"

interface ProjectGalleryProps {
  cases: CaseStudy[]
}

/* ----------------- */
/* Helper & Child    */
/* ----------------- */
const decodeHtml = (html: string): string => {
  const txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

function ProjectCard({ caseItem, fallback }: { caseItem: CaseStudy; fallback: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const gallery = caseItem.acf?.project_gallery || []
  const hasGallery = gallery.length > 0

  // Autoplay door de gallery
  useEffect(() => {
    if (!hasGallery) return
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % gallery.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [hasGallery, gallery.length])

  return (
    <Link href={`/cases/${caseItem.slug}`} className="group block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Video bovenaan (indien aanwezig) */}
        {caseItem.acf?.video_url && (
          <div className="aspect-video w-full mb-4">
            <iframe
              src={caseItem.acf.video_url}
              title="Projectvideo"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        )}

        {/* Afbeelding of gallery slider per kaart */}
        {hasGallery ? (
          <div className="relative group/slide overflow-hidden rounded-lg">
            <div className="relative w-full h-48">
              <Image
                key={currentImageIndex}
                src={gallery[currentImageIndex]?.url || ""}
                alt={`Project afbeelding ${currentImageIndex + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover/slide:scale-[1.03]"
              />
            </div>

            {/* Prev/Next mini-knoppen voor de kaart-galerij */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
                  aria-label="Vorige afbeelding"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
                  aria-label="Volgende afbeelding"
                >
                  ›
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="relative h-48">
            <Image
              src={caseItem._embedded?.["wp:featuredmedia"]?.[0]?.source_url || fallback}
              alt={decodeHtml(caseItem.title.rendered)}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-4">
          <span className="text-xs text-gray-500">{caseItem.acf?.industry || "Case Study"}</span>
          <h3 className="font-bold group-hover:text-[#4cd964] transition-colors">
            {decodeHtml(caseItem.title.rendered)}
          </h3>
        </div>
      </div>
    </Link>
  )
}

/* ----------------- */
/* Hoofdcomponent     */
/* ----------------- */
export default function ProjectGallery({ cases }: ProjectGalleryProps) {
  const stockPhotos = [
    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
  ]

  // Keen-slider (outer carousel)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    renderMode: "precision",
    slides: {
      perView: 1.1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.1, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.1, spacing: 24 },
      },
    },
  })

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gerelateerde projecten</h2>

        <div className="flex items-center gap-2">
          {/* Prev/Next knoppen voor de buiten-slider */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="rounded-full bg-white border px-3 py-2 shadow hover:bg-gray-50"
            aria-label="Vorige"
          >
            ←
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="rounded-full bg-white border px-3 py-2 shadow hover:bg-gray-50"
            aria-label="Volgende"
          >
            →
          </button>

          <Link
            href="/cases"
            className="ml-3 text-[#4cd964] font-medium flex items-center"
          >
            Bekijk alle cases
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Outer slider */}
      <div ref={sliderRef} className="keen-slider">
        {cases.map((caseItem, i) => (
          <div key={caseItem.id} className="keen-slider__slide">
            <ProjectCard
              caseItem={caseItem}
              fallback={stockPhotos[i % stockPhotos.length]}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
