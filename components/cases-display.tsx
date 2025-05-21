"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useMotionValue, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react"

interface Case {
  id: number
  title: { rendered: string }
  slug: string
  acf?: {
    industry?: string
    subtitle?: string
    stats?: string
  }
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
    }>
  }
  excerpt?: {
    rendered: string
  }
}

// Helper function to decode HTML entities
const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

// Helper function to strip HTML tags
const stripHtml = (html: string) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "")
}

// Custom cursor component
const CustomCursor = ({
  mouseX,
  mouseY,
  isHovering,
  isClicking,
}: {
  mouseX: any
  mouseY: any
  isHovering: boolean
  isClicking: boolean
}) => {
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{
              scale: isClicking ? 0.9 : 1,
              opacity: 1,
              rotate: 0,
            }}
            exit={{ scale: 0, opacity: 0, rotate: 10 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              className="w-24 h-24 bg-[#1b7935] dark:bg-[#2eac4e] rounded-full flex items-center justify-center flex-col"
              animate={{
                scale: isClicking ? [0.9, 1] : [1, 1.05, 1],
                boxShadow: isClicking
                  ? "0 0 0 rgba(27, 121, 53, 0.7)"
                  : ["0 0 0 rgba(27, 121, 53, 0)", "0 0 20px rgba(27, 121, 53, 0.7)", "0 0 0 rgba(27, 121, 53, 0)"],
              }}
              transition={{
                scale: {
                  repeat: isClicking ? 0 : Number.POSITIVE_INFINITY,
                  duration: isClicking ? 0.2 : 2,
                },
                boxShadow: {
                  repeat: isClicking ? 0 : Number.POSITIVE_INFINITY,
                  duration: 2,
                },
              }}
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-1"
                animate={{
                  scale: isClicking ? [0.8, 1] : 1,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <path
                  d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path d="M12 16.5V19.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 4.5V7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5 12H19.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5 12H7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
              <motion.div
                className="text-white text-xs font-medium text-center px-1"
                animate={{
                  scale: isClicking ? [0.9, 1] : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                Bekijk portfolio
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Portfolio() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedCase, setSelectedCase] = useState<Case | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHoveringCase, setIsHoveringCase] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Mouse position for custom cursor
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Drag constraints
  const dragConstraints = useRef<HTMLDivElement>(null)

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [mouseX, mouseY])

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Fetch cases from WordPress API
  useEffect(() => {
    async function fetchCases() {
      try {
        const res = await fetch("https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=6")
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`)
        const data = await res.json()
        setCases(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching cases")
      } finally {
        setLoading(false)
      }
    }
    fetchCases()
  }, [])

  // Navigation functions
  const nextSlide = () => {
    if (cases.length <= 2) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cases.length)
  }

  const prevSlide = () => {
    if (cases.length <= 2) return
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cases.length) % cases.length)
  }

  // Handle case click
  const handleCaseClick = (caseItem: Case) => {
    setSelectedCase(caseItem)
    setIsModalOpen(true)
  }

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Sample service tags for each case
  const serviceTags = [
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
    ["Webdesign", "Webshop & ecommerce", "Development", "Design", "Strategy"],
  ]

  // Loading state
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#1b7935]"></div>
      </div>
    )
  }

  // Error state
  if (error) {
    return <div className="w-full text-center py-12 text-red-500">Error: {error}</div>
  }

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor mouseX={mouseX} mouseY={mouseY} isHovering={isHoveringCase} isClicking={isClicking} />

      <section ref={sectionRef} className="w-full py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Header section with title and subtitle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <div className="text-[#1b7935] dark:text-[#2eac4e] font-medium mb-2">Van startbaan tot succes</div>
              <h2 className="text-3xl md:text-5xl font-bold">Onze klantcases</h2>
            </div>
            <Link
              href="/cases"
              className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-md transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Alle klantcases
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Slider container */}
          <div className="relative" ref={dragConstraints}>
            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 -ml-4 md:-ml-6">
              <button
                onClick={prevSlide}
                className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-[#1b7935] dark:text-[#2eac4e]" />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 -mr-4 md:-mr-6">
              <button
                onClick={nextSlide}
                className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-[#1b7935] dark:text-[#2eac4e]" />
              </button>
            </div>

            {/* Slider */}
            <div ref={sliderRef} className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={dragConstraints}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) {
                    prevSlide()
                  } else if (info.offset.x < -100) {
                    nextSlide()
                  }
                }}
              >
                {cases.map((_, index) => {
                  // Get the two cases to display in this slide
                  const case1 = cases[index % cases.length]
                  const case2 = cases[(index + 1) % cases.length]

                  const title1 = decodeHtml(case1.title.rendered)
                  const industry1 = case1.acf?.industry || ""
                  const imageSrc1 = case1._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"

                  const title2 = decodeHtml(case2.title.rendered)
                  const industry2 = case2.acf?.industry || ""
                  const imageSrc2 = case2._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"

                  return (
                    <div key={`slide-${index}`} className="min-w-full px-2">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Left case card */}
                        <motion.div
                          className="w-full sm:w-1/2 mb-4 sm:mb-0"
                          onHoverStart={() => setIsHoveringCase(true)}
                          onHoverEnd={() => setIsHoveringCase(false)}
                        >
                          <div
                            className="relative overflow-hidden rounded-lg h-[350px] sm:h-[450px] group cursor-none"
                            onClick={() => handleCaseClick(case1)}
                          >
                            <div className="absolute top-4 left-4 z-20">
                              <h3 className="text-white text-lg font-bold bg-black/50 px-3 py-1 rounded-md backdrop-blur-sm">
                                {industry1}
                              </h3>
                            </div>
                            <motion.div
                              className="relative w-full h-full"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Image
                                src={imageSrc1 || "/placeholder.svg"}
                                alt={title1}
                                fill
                                className="object-cover"
                                priority={index === currentIndex}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </motion.div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                              <h4 className="text-white text-xl font-bold mb-3">{title1}</h4>
                              <div className="flex flex-wrap gap-2">
                                {serviceTags[index % serviceTags.length].slice(0, 3).map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="text-white text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Right case card */}
                        <motion.div
                          className="w-full sm:w-1/2"
                          onHoverStart={() => setIsHoveringCase(true)}
                          onHoverEnd={() => setIsHoveringCase(false)}
                        >
                          <div
                            className="relative overflow-hidden rounded-lg h-[350px] sm:h-[450px] group cursor-none"
                            onClick={() => handleCaseClick(case2)}
                          >
                            <div className="absolute top-4 left-4 z-20">
                              <h3 className="text-white text-lg font-bold bg-black/50 px-3 py-1 rounded-md backdrop-blur-sm">
                                {industry2}
                              </h3>
                            </div>
                            <motion.div
                              className="relative w-full h-full"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Image
                                src={imageSrc2 || "/placeholder.svg"}
                                alt={title2}
                                fill
                                className="object-cover"
                                priority={index === currentIndex}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </motion.div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                              <h4 className="text-white text-xl font-bold mb-3">{title2}</h4>
                              <div className="flex flex-wrap gap-2">
                                {serviceTags[(index + 1) % serviceTags.length].slice(0, 3).map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="text-white text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: cases.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? "bg-[#1b7935] dark:bg-[#2eac4e]" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white dark:bg-gray-900 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-video w-full h-full mx-auto">
                {selectedCase._embedded?.["wp:featuredmedia"] ? (
                  <Image
                    src={selectedCase._embedded["wp:featuredmedia"][0].source_url || "/placeholder.svg"}
                    alt={decodeHtml(selectedCase.title.rendered)}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
                    <p className="text-gray-500 dark:text-gray-400">Geen afbeelding beschikbaar</p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {selectedCase.acf?.industry || "Uncategorized"}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 dark:text-white">{decodeHtml(selectedCase.title.rendered)}</h2>
                {selectedCase.acf?.subtitle && (
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedCase.acf.subtitle}</p>
                )}
                {selectedCase.excerpt && (
                  <div className="text-gray-700 dark:text-gray-300 mb-6">
                    {decodeHtml(stripHtml(selectedCase.excerpt.rendered))}
                  </div>
                )}
                <Link
                  href={`/cases/${selectedCase.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-[#1b7935] text-white dark:bg-[#2eac4e] rounded-md hover:bg-[#156129] dark:hover:bg-[#249442] transition-colors"
                >
                  Bekijk volledige case
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
