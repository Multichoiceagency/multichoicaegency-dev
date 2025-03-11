"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import "flickity/css/flickity.css"

interface SlideContent {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  image: string
}

const slides: SlideContent[] = [
  {
    title: "Ons DNA",
    description:
      "Bij Webgrade doen we er alles aan om de relatie met onze klanten zo persoonlijk mogelijk te maken. Omdat we dat gewoon heel leuk vinden. Maar het is ook de snelste manier om wederzijds vertrouwen op te bouwen. Daarmee creëren we de vrijheid om het allerbeste werk te kunnen leveren.",
    ctaText: "Meer over ons",
    ctaLink: "/over-ons",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Onze Aanpak",
    description:
      "We geloven in een persoonlijke en transparante werkwijze. Door nauw samen te werken met onze klanten, kunnen we precies begrijpen wat er nodig is en de beste oplossingen bieden.",
    ctaText: "Onze werkwijze",
    ctaLink: "/werkwijze",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Het Team",
    description:
      "Ons team bestaat uit gepassioneerde specialisten die elk hun eigen expertise meebrengen. Samen vormen we een hecht team dat elkaar versterkt en inspireert.",
    ctaText: "Ontmoet het team",
    ctaLink: "/team",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function TeamSection() {
  const textSliderRef = useRef<any>(null)
  const imageSliderRef = useRef<any>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    let textFlickity: any = null
    let imageFlickity: any = null

    async function initializeSliders() {
      if (typeof window !== "undefined") {
        const Flickity = (await import("flickity")).default

        // Initialize text slider
        if (textContainerRef.current && !textSliderRef.current) {
          textFlickity = new Flickity(textContainerRef.current, {
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            draggable: false,
          })
          textSliderRef.current = textFlickity
        }

        // Initialize image slider
        if (imageContainerRef.current && !imageSliderRef.current) {
          imageFlickity = new Flickity(imageContainerRef.current, {
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            draggable: true,
          })
          imageSliderRef.current = imageFlickity

          // Sync sliders when image slider changes
          imageFlickity.on("change", (index: number) => {
            textFlickity.select(index)
            setCurrentSlide(index)
          })
        }
      }
    }

    initializeSliders()

    return () => {
      if (textSliderRef.current) {
        textSliderRef.current.destroy()
        textSliderRef.current = null
      }
      if (imageSliderRef.current) {
        imageSliderRef.current.destroy()
        imageSliderRef.current = null
      }
    }
  }, [])

  const handlePrevClick = () => {
    if (imageSliderRef.current) {
      imageSliderRef.current.previous()
    }
  }

  const handleNextClick = () => {
    if (imageSliderRef.current) {
      imageSliderRef.current.next()
    }
  }

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <h1 className="text-[120px] md:text-[200px] font-bold text-gray-100 absolute -top-10 left-0 right-0 text-center whitespace-nowrap">
          Een eigen team van specialisten
        </h1>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          {/* Text Slider */}
          <div className="max-w-xl">
            <div ref={textContainerRef} className="overflow-hidden">
              {slides.map((slide, index) => (
                <div key={index} className="w-full">
                  <h2 className="text-4xl font-bold mb-6">{slide.title}</h2>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{slide.description}</p>
                  <Link
                    href={slide.ctaLink}
                    className="inline-block bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-8">
              <button
                onClick={handlePrevClick}
                className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={handleNextClick}
                className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Image Slider */}
          <div ref={imageContainerRef} className="overflow-hidden rounded-lg">
            {slides.map((slide, index) => (
              <div key={index} className="w-full">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

