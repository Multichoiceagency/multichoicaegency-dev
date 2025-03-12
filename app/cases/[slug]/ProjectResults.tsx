"use client"

import Image from "next/image"
import type { CaseStudy } from "./CaseStudyContent"

interface ProjectResultsProps {
  content: CaseStudy
}

export default function ProjectResults({ content }: ProjectResultsProps) {
  // Helper function to decode HTML entities
  const decodeHtml = (html: string): string => {
    const txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
  }

  return (
    <section className="container mx-auto px-6 my-12">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative h-[300px] md:h-auto order-2 md:order-1">
            <Image
              src={"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"}
              alt="Project Results"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute bottom-4 right-4">
              <div className="bg-[#4cd964] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[#3cb953] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="p-6 md:p-8 order-1 md:order-2">
            <h2 className="text-xl font-bold mb-4">Resultaten</h2>
            <p className="text-gray-700 mb-6">
              Door de samenwerking met MultiChoice Agency heeft de klant aanzienlijke verbeteringen gezien in hun
              recruitment proces. De nieuwe aanpak heeft geleid tot een hogere kwaliteit van sollicitaties en een
              verbeterde candidate experience.
            </p>

            {content.acf?.quote && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <blockquote className="text-lg font-medium italic text-gray-700">"{content.acf.quote}"</blockquote>
                {content.acf?.quote_author && (
                  <p className="text-sm text-gray-500 mt-2">- {content.acf.quote_author}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

