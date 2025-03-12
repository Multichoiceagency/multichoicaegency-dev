"use client"
import Image from "next/image"
import Link from "next/link"
import type { CaseStudy } from "./CaseStudyContent"

interface ProjectGalleryProps {
  cases: CaseStudy[]
}

export default function ProjectGallery({ cases }: ProjectGalleryProps) {
  // Stock photos from Pexels
  const stockPhotos = [
    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
  ]

  // Helper function to decode HTML entities
  const decodeHtml = (html: string): string => {
    const txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Gerelateerde projecten</h2>
        <Link href="/cases" className="text-[#4cd964] font-medium flex items-center">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((caseItem, index) => (
          <Link key={caseItem.id} href={`/cases/${caseItem.slug}`} className="group">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={
                    caseItem._embedded?.["wp:featuredmedia"]?.[0]?.source_url || stockPhotos[index % stockPhotos.length]
                  }
                  alt={decodeHtml(caseItem.title.rendered)}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 right-4">
                  <div className="bg-[#4cd964] rounded-full w-10 h-10 flex items-center justify-center shadow-lg group-hover:rotate-45 transition-transform duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 4V20M4 12H20"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-500">{caseItem.acf?.industry || "Case Study"}</span>
                <h3 className="font-bold group-hover:text-[#4cd964] transition-colors">
                  {decodeHtml(caseItem.title.rendered)}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

