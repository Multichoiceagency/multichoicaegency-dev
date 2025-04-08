"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import {
  IconChartBar,
  IconSignature,
  IconPalette,
  IconCode,
  IconChartLine,
  IconArrowRight,
  IconArrowNarrowRight,
  IconChevronLeft,
  IconChevronRight,
  IconArrowsHorizontal,
} from "@tabler/icons-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const items = [
  {
    title: "Strategie",
    description:
      "Een heldere en effectieve strategie is het fundament voor succes. We helpen je bedrijf duidelijk te krijgen wat nu eigenlijk je kernvraag is en wat je werkelijke doelen zijn.",
    icon: <IconChartBar className="h-6 w-6" />,
    video: "https://cdn.dribbble.com/userupload/3343934/file/large-db28115f00f6cd118d0cfed16ba9c59f.mp4",
    link: "strategie",
    tags: ["Marktonderzoek", "Doelgroepanalyse", "Concurrentieanalyse"],
    background: "bg-green-50",
  },
  {
    title: "Branding",
    description:
      "Onze expertise in branding helpt je visuele identiteit aan te scherpen voor een digital-first (r)evolutie, zodat je merk weer up-to-date is en iedereen weer weet waar je merk voor staat.",
    icon: <IconSignature className="h-6 w-6" />,
    video: "https://cdn.dribbble.com/userupload/18827551/file/large-ebb8018fcdd46e6a7257b8163581a47c.mp4",
    link: "branding",
    tags: ["Logo Design", "Brand Identity", "Style Guides"],
    background: "bg-green-50",
  },
  {
    title: "Design",
    description:
      "De kracht van (web)design is niet te onderschatten. Als je je strategie op een rake manier visualiseert, zorg je voor effectieve communicatie en vergroot je daarmee gebruikersinteractie.",
    icon: <IconPalette className="h-6 w-6" />,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    link: "design",
    tags: ["UX/UI Design", "Wireframing", "Prototyping"],
    background: "bg-green-50",
  },
  {
    title: "Development",
    description:
      "Wij bouwen websites en applicaties die niet alleen mooi zijn, maar ook technisch perfect werken. Onze developers zorgen voor snelle, veilige en gebruiksvriendelijke oplossingen.",
    icon: <IconCode className="h-6 w-6" />,
    video: "https://videos.pexels.com/video-files/4549682/4549682-hd_1920_1080_30fps.mp4",
    link: "development",
    tags: ["Frontend", "Backend", "CMS Integratie"],
    background: "bg-green-50",
  },
  {
    title: "Groei",
    description:
      "Na de lancering begint het pas. We helpen je met het analyseren van gebruikersgedrag, het optimaliseren van conversies en het continu verbeteren van je digitale aanwezigheid.",
    icon: <IconChartLine className="h-6 w-6" />,
    image: "https://cdn.dribbble.com/userupload/15412680/file/original-a65b2b4a950aa5b59c6f80c3db78447d.jpg",
    link: "groei",
    tags: ["SEO", "Analytics", "Conversion Optimization"],
    background: "bg-green-50",
  },
]

const ServicesCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(Array(items.length).fill(null))
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)

  // Embla carousel setup with loop enabled
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
    duration: 50,
  })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  // Play/pause videos based on hover
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return

      if (index === hoveredIndex) {
        video.currentTime = 0
        video.play().catch((err) => console.log("Video play error:", err))
      } else {
        video.pause()
      }
    })
  }, [hoveredIndex])

  // Auto-scroll effect
  useEffect(() => {
    if (!emblaApi) return

    const startAutoScroll = () => {
      stopAutoScroll()
      autoScrollRef.current = setInterval(() => {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0)
        } else {
          emblaApi.scrollNext()
        }
      }, 5000)
    }

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
        autoScrollRef.current = null
      }
    }

    // Start auto-scroll when not hovering
    if (!isHoveringCarousel) {
      startAutoScroll()
    } else {
      stopAutoScroll()
    }

    // Clean up on unmount
    return () => {
      stopAutoScroll()
    }
  }, [emblaApi, isHoveringCarousel])

  return (
    <div
      className="relative dark:bg-background bg-[#f8f8f3] py-16 px-4 sm:px-6 lg:px-8 custom-cursor-container"
      onMouseEnter={() => setIsHoveringCarousel(true)}
      onMouseLeave={() => setIsHoveringCarousel(false)}
    >
      {/* Custom Cursor */}
      <style jsx global>{`
  .custom-cursor-container {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'><circle cx='20' cy='20' r='20' fill='%23a6e267'/><path d='M14 20H26M14 20L18 16M14 20L18 24M26 20L22 16M26 20L22 24' stroke='%23000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/></svg>") 20 20, auto;
  }
  
  /* Prevent text selection */
  .embla-carousel-container {
    user-select: none;
  }
  
  /* Ensure heading stays bold */
  .services-heading {
    font-weight: 700 !important;
  }
`}</style>

      <div className="w-full">
        <div className="flex justify-between items-center mb-12 px-4 w-full mx-auto">
          <h2 className="text-4xl md:text-5xl font-[400] text-[#1b7935] services-heading dark:text-white">Onze diensten</h2>
          <Link
            href="/diensten"
            className="inline-flex items-center px-6 py-3  bg-[#a6e267] hover:bg-[#8bc74c] text-black font-medium rounded-full transition-colors duration-300"
          >
            Naar alle diensten
            <IconArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Embla Carousel */}
        <div className="relative w-full">
          <div className="overflow-hidden embla-carousel-container" ref={emblaRef}>
            <div className="flex gap-6">
              {/* Duplicate the items array to create a smoother loop effect */}
              {[...items, ...items].map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: Math.min(index, items.length) * 0.1 }}
                    className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg"
                    onMouseEnter={() => setHoveredIndex(index % items.length)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Background Media */}
                    <div
                      className={cn(
                        "absolute inset-0 z-10 transition-all duration-500",
                        hoveredIndex === index % items.length
                          ? "bg-gradient-to-br from-[#1b7935]/90 to-[#a6e267]/80"
                          : "bg-gradient-to-t from-black/80 via-black/40 to-black/10",
                      )}
                    />

                    {item.video ? (
                      <video
                        ref={(el) => {
                          // Only store refs for the original items
                          if (index < items.length) {
                            videoRefs.current[index] = el
                          }
                        }}
                        src={item.video}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300",
                            hoveredIndex === index % items.length
                              ? "bg-white text-[#1b7935]"
                              : "bg-white/90 backdrop-blur-sm text-[#1b7935]",
                          )}
                        >
                          {item.icon}
                        </div>
                      </div>

                      <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                        <h3 className="font-bold text-4xl mb-4 drop-shadow-md">
                          <span className={hoveredIndex === index % items.length ? "text-white" : "text-white"}>
                            {item.title}
                          </span>
                        </h3>

                        <p
                          className={cn(
                            "mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300",
                            hoveredIndex === index % items.length ? "text-white" : "text-white/90",
                          )}
                        >
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={cn(
                                "px-3 py-1 text-sm font-medium rounded-full",
                                hoveredIndex === index % items.length
                                  ? "bg-white/30 text-white"
                                  : "bg-white/20 backdrop-blur-sm text-white",
                              )}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={item.link}
                          className="inline-flex items-center text-white font-medium transition-colors duration-300"
                        >
                          Meer info
                          <IconArrowNarrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Only visible on hover */}
          <div className={cn("transition-opacity duration-300", isHoveringCarousel ? "opacity-100" : "opacity-0")}>
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#a6e267] hover:bg-[#8bc74c] flex items-center justify-center shadow-lg transition-all duration-300"
              onClick={scrollPrev}
              aria-label="Previous services"
            >
              <IconChevronLeft className="h-6 w-6 text-black" />
            </button>

            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#a6e267] hover:bg-[#8bc74c] flex items-center justify-center shadow-lg transition-all duration-300"
              onClick={scrollNext}
              aria-label="Next services"
            >
              <IconChevronRight className="h-6 w-6 text-black" />
            </button>
          </div>

          {/* Custom Cursor Icon (visible on mobile) */}
          <div
            className={cn(
              "fixed bottom-4 right-4 w-12 h-12 rounded-full bg-[#a6e267] flex items-center justify-center md:hidden transition-opacity duration-300",
              isHoveringCarousel ? "opacity-100" : "opacity-0",
            )}
          >
            <IconArrowsHorizontal className="h-6 w-6 text-black" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesCarousel
