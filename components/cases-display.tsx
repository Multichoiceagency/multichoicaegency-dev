// Portfolio Enhanced Component (mobiel verbeterd)
// ✅ Autoplay, Fade, Keyboard nav, Pagination
// ✅ Scroll-lock, object-cover, Scroll reveal
// ✅ Subtitle + Excerpt + HTML entity decoding
// ✅ Mobielvriendelijke tekstgroottes

"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react"

function useBodyScrollLock(lock: boolean) {
  useEffect(() => {
    document.body.style.overflow = lock ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [lock])
}

const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "")

interface Case {
  id: number
  title: { rendered: string }
  slug: string
  excerpt?: { rendered: string }
  acf?: { industry?: string; subtitle?: string }
  _embedded?: { "wp:featuredmedia"?: Array<{ source_url: string }> }
}

export default function Portfolio() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCase, setSelectedCase] = useState<Case | null>(null)
  const sectionRef = useRef(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  useBodyScrollLock(isModalOpen)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  useEffect(() => {
    async function fetchCases() {
      try {
        const res = await fetch("https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=6")
        const data = await res.json()
        setCases(data)
      } catch (err: any) {
        setError("Kan klantcases niet laden.")
      } finally {
        setLoading(false)
      }
    }
    fetchCases()
  }, [])

  const next = useCallback(() => setCurrentIndex((i) => (i + 1) % cases.length), [cases])
  const prev = useCallback(() => setCurrentIndex((i) => (i - 1 + cases.length) % cases.length), [cases])

  const handleCaseClick = (item: Case) => {
    setSelectedCase(item)
    setIsModalOpen(true)
  }

  useEffect(() => {
    autoPlayRef.current = setInterval(() => next(), 5000)
    return () => clearInterval(autoPlayRef.current!)
  }, [next])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "Escape") setIsModalOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [next, prev])

  if (loading) return <div className="w-full flex justify-center items-center h-64">Laden...</div>
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">Onze klantcases</h2>
          <Link href="/cases" className="flex items-center gap-2 text-[#1b7935] font-medium hover:underline text-sm md:text-base">
            Bekijk alles <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <button onClick={prev} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <ChevronLeft />
            </button>
            <button onClick={next} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <ChevronRight />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cases[currentIndex]?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleCaseClick(cases[currentIndex])}
            >
              <Image
                src={cases[currentIndex]?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"}
                alt={decodeHtml(cases[currentIndex].title.rendered)}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-6 left-6 text-white max-w-xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                  {decodeHtml(cases[currentIndex].title.rendered)}
                </h3>
                {cases[currentIndex].acf?.subtitle && (
                  <p className="text-sm sm:text-base md:text-lg font-medium mb-1">
                    {cases[currentIndex].acf.subtitle}
                  </p>
                )}
                {cases[currentIndex].excerpt?.rendered && (
                  <p className="text-xs sm:text-sm md:text-base opacity-80">
                    {decodeHtml(stripHtml(cases[currentIndex].excerpt.rendered)).slice(0, 140)}...
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {cases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-[#1b7935]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCase && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-3xl w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
              <Image
                src={selectedCase._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"}
                alt={decodeHtml(selectedCase.title.rendered)}
                width={1200}
                height={600}
                className="rounded-lg object-cover w-full h-64 md:h-96"
              />
              <h2 className="mt-4 text-xl sm:text-2xl font-bold dark:text-white">
                {decodeHtml(selectedCase.title.rendered)}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm sm:text-base">
                {selectedCase.acf?.subtitle || ""}
              </p>
              {selectedCase.excerpt && (
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
                  {decodeHtml(stripHtml(selectedCase.excerpt.rendered))}
                </p>
              )}
              <Link
                href={`/cases/${selectedCase.slug}`}
                className="mt-4 inline-flex items-center bg-[#1b7935] text-white px-4 py-2 rounded-md hover:bg-[#14592c] text-sm"
              >
                Bekijk volledige case <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
