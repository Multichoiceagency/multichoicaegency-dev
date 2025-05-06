"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface LogoScrollerProps {
  logos: string[]
  basePath: string
}

export function LogoScroller({ logos, basePath }: LogoScrollerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number | null>(null)

  // Manual scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  // Automatic scrolling animation
  useEffect(() => {
    // Don't animate if paused or hovered
    if (isPaused || isHovered) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      return
    }

    let lastTime = 0
    const SCROLL_SPEED = 0.5 // pixels per millisecond

    const animate = (time: number) => {
      if (!scrollContainerRef.current) return

      if (lastTime === 0) {
        lastTime = time
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const delta = time - lastTime
      lastTime = time

      // Scroll by a small amount each frame
      scrollContainerRef.current.scrollLeft += SCROLL_SPEED * delta

      // Reset scroll position when we reach halfway through the duplicated content
      if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth / 2) {
        scrollContainerRef.current.scrollLeft = 0
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }
  }, [isPaused, isHovered])

  // Handle visibility change (tab switching)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden)
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left control */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 flex items-center">
        <button
          onClick={scrollLeft}
          className="ml-2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/70 hover:text-white transition-all"
          aria-label="Scroll logos left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>

      {/* Right control */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 flex items-center justify-end">
        <button
          onClick={scrollRight}
          className="mr-2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/70 hover:text-white transition-all"
          aria-label="Scroll logos right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll scrollbar-hide py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-8 md:gap-10 whitespace-nowrap">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="h-10 md:h-12 inline-block opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110 group relative animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full flex items-center justify-center">
                <Image
                  src={`${basePath}/${logo}`}
                  alt={`Partner logo ${logo.replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, "")}`}
                  width={120}
                  height={48}
                  className="h-full w-auto object-contain transition-all duration-300"
                  style={{ filter: "drop-shadow(0 0 0 rgba(255,255,255,0))" }}
                  priority={index < 8}
                  quality={90}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                  }}
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={`${basePath}/${logo}`}
                    alt=""
                    width={120}
                    height={48}
                    className="h-full w-auto object-contain"
                    style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.7))" }}
                    quality={90}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {logo.replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, "").replace(/-/g, " ")}
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="h-10 md:h-12 inline-block opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110 group relative animate-float"
              style={{ animationDelay: `${(index + logos.length) * 0.1}s` }}
            >
              <div className="relative h-full flex items-center justify-center">
                <Image
                  src={`${basePath}/${logo}`}
                  alt={`Partner logo ${logo.replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, "")}`}
                  width={120}
                  height={48}
                  className="h-full w-auto object-contain transition-all duration-300"
                  style={{ filter: "drop-shadow(0 0 0 rgba(255,255,255,0))" }}
                  quality={90}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                  }}
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={`${basePath}/${logo}`}
                    alt=""
                    width={120}
                    height={48}
                    className="h-full w-auto object-contain"
                    style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.7))" }}
                    quality={90}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {logo.replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, "").replace(/-/g, " ")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
