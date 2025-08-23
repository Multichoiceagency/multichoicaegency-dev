"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { parseISO, isValid } from "date-fns"
import Image from "next/image"
import * as RSlider from "@radix-ui/react-slider"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

type WPImage = {
  url?: string
  source_url?: string
  sizes?: Record<string, string>
}

interface ClientInfoProps {
  clientName: string
  industry: string
  projectDate: string
  logonew: string
  featuredImage: string
  project_gallery?: WPImage[]
  video_url?: string
}

export default function ClientInfo({
  clientName,
  industry,
  projectDate,
  logonew,
  featuredImage,
  project_gallery = [],
  video_url,
}: ClientInfoProps) {
  const { theme } = useTheme()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [sliderIndex, setSliderIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const autoplayRef = useRef<number | null>(null)

  // ✅ Zoom state
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })

  // ✅ Normaliseer WP gallery
  const galleryUrls = useMemo(() => {
    return (
      project_gallery
        ?.map((img) => img?.url || img?.source_url || img?.sizes?.large || img?.sizes?.medium || "")
        .filter((u): u is string => typeof u === "string" && u.length > 0) || []
    )
  }, [project_gallery])

  const currentSrc = galleryUrls.length ? galleryUrls[sliderIndex] : featuredImage

  // Autoplay
  useEffect(() => {
    if (galleryUrls.length < 2) return
    if (isHovering) {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current)
      autoplayRef.current = null
      return
    }
    autoplayRef.current = window.setInterval(() => {
      setSliderIndex((i) => (i + 1) % galleryUrls.length)
    }, 5000) as unknown as number
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [galleryUrls.length, isHovering])

  const openLightbox = (index = 0) => {
    setSliderIndex(index)
    setLightboxOpen(true)
    setScale(1)
    setOffset({ x: 0, y: 0 })
    document.body.style.overflow = "hidden"
  }
  const closeLightbox = () => {
    setLightboxOpen(false)
    setScale(1)
    setOffset({ x: 0, y: 0 })
    document.body.style.overflow = "auto"
  }

  const next = () => setSliderIndex((i) => (i + 1) % galleryUrls.length)
  const prev = () => setSliderIndex((i) => (i - 1 + galleryUrls.length) % galleryUrls.length)

  // ✅ Zoom met scroll
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const newScale = Math.min(Math.max(1, scale + e.deltaY * -0.001), 5)
    setScale(newScale)
  }

  // ✅ Drag (pan)
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y }
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return
    setOffset({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y })
  }
  const handleMouseUp = () => setDragging(false)

  return (
    <div className="space-y-6">
      {/* Info card */}
      <div className={`${theme === "dark" ? "bg-white" : "bg-gray-100"} p-6 rounded-lg shadow-md`}>
        {logonew && (
          <div className="flex justify-left mb-6">
            <Image src={logonew} alt={`${clientName} logo`} width={80} height={80} className="object-contain" />
          </div>
        )}
        <h3 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-black" : "text-gray-900"}`}>
          Klantinformatie
        </h3>
        <ul className="space-y-2">
          <li><span className="font-semibold">Naam:</span> {clientName}</li>
          <li><span className="font-semibold">Industrie:</span> {industry}</li>
          <li>
            <span className="font-semibold">Projectdatum:</span>{" "}
            {(() => {
              const d = parseISO(projectDate)
              return isValid(d)
                ? new Intl.DateTimeFormat("nl-NL", { year: "numeric", month: "long", day: "numeric" }).format(d)
                : projectDate
            })()}
          </li>
        </ul>
      </div>

      {/* Video */}
      {video_url && (
        <div className="rounded-lg overflow-hidden mt-6 aspect-video">
          <iframe src={video_url} className="w-full h-full" allowFullScreen />
        </div>
      )}

      {/* Gallery */}
      <div
        className="relative w-full h-[700px] md:h-[800px] overflow-hidden rounded-lg mt-6 group cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => openLightbox(sliderIndex)}
      >
        {currentSrc && (
          <Image key={currentSrc} src={currentSrc} alt="Project slider image" fill className="object-cover" />
        )}
        {galleryUrls.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 bg-[#4cd964] text-white p-3 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
          {galleryUrls.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          {/* Zoomable image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center overflow-hidden"
            onMouseDown={handleMouseDown}
          >
            {currentSrc && (
              <Image
                src={currentSrc}
                alt="Lightbox image"
                width={1600}
                height={1200}
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                  transition: dragging ? "none" : "transform 0.2s ease-out",
                  cursor: dragging ? "grabbing" : scale > 1 ? "grab" : "default",
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
