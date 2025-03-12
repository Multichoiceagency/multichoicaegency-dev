"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { parseISO, isValid } from "date-fns"
import Image from "next/image"

interface ClientInfoProps {
  clientName: string
  industry: string
  projectDate: string
  logonew: string // Prop for logo
  featuredImage: string // New prop for featured image
}

export default function ClientInfo({ clientName, industry, projectDate, logonew, featuredImage }: ClientInfoProps) {
  const { theme } = useTheme()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox = () => {
    setLightboxOpen(true)
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    // Re-enable scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <div className="space-y-6">
      <div
        className={`${theme === "dark" ? "bg-white" : "bg-gray-100"} p-6 rounded-lg shadow-md transition-colors duration-200`}
      >
        {/* Client Information */}
        {logonew && (
          <div className="flex justify-left mb-6">
            <Image
              src={logonew || "/placeholder.svg"}
              alt={`${clientName} logo`}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        )}
        <h3 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-black" : "text-gray-900"}`}>
          Klantinformatie
        </h3>
        <ul className="space-y-2">
          <li className={`${theme === "dark" ? "text-black" : "text-gray-700"}`}>
            <span className="font-semibold">Naam:</span> {clientName}
          </li>
          <li className={`${theme === "dark" ? "text-black" : "text-gray-700"}`}>
            <span className="font-semibold">Industrie:</span> {industry}
          </li>
          <li className={`${theme === "dark" ? "text-black" : "text-gray-700"}`}>
            <span className="font-semibold">Projectdatum:</span> {(() => {
              const date = parseISO(projectDate)
              if (isValid(date)) {
                return new Intl.DateTimeFormat("nl-NL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(date)
              }
              return projectDate // Return original string if parsing fails
            })()}
          </li>
        </ul>
      </div>

      {/* Featured Image with Lightbox */}
      {featuredImage && (
        <div
          className="mt-6 inset-3 relative h-[400px] rounded-lg overflow-hidden group cursor-pointer"
          onClick={openLightbox}
        >
          <Image
            src={featuredImage || "/placeholder.svg"}
            alt="Featured project image"
            fill
            style={{ objectFit: "contain" }}
            className="transition-opacity duration-300"
          />

          {/* Bekijk project button */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#4cd964] text-white py-2 px-4 rounded-full flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Bekijk project</span>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 bg-[#4cd964] rounded-full p-2 text-white hover:bg-[#3cb953] transition-colors"
              onClick={closeLightbox}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Lightbox image */}
            <div className="relative w-full h-full">
              <Image
                src={featuredImage || "/placeholder.svg"}
                alt="Featured project image"
                fill
                style={{ objectFit: "contain" }}
                className="transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

