"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote, User, ArrowRight } from "lucide-react"
import Image from "next/image"

// Sample review data
const reviews = [
  {
    id: 1,
    name: "Thomas Bakker",
    company: "TechSolutions B.V.",
    position: "Marketing Director",
    rating: 5,
    text: "Multichoiceagency heeft onze website volledig getransformeerd. De combinatie van een strak design en slimme functionaliteit heeft onze online conversie met 40% verhoogd. Hun team was zeer professioneel en communicatief gedurende het hele proces.",
    image: "/diverse-group-city.png",
  },
  {
    id: 2,
    name: "Laura de Vries",
    company: "Green Garden Webshop",
    position: "CEO",
    rating: 5,
    text: "Na jaren van problemen met onze webshop hebben we Multichoiceagency ingeschakeld. Ze hebben niet alleen onze technische problemen opgelost, maar ook een volledig nieuwe strategie ontwikkeld die perfect aansluit bij onze doelgroep. Onze omzet is sindsdien verdubbeld!",
    image: "/contemplative-artist.png",
  },
  {
    id: 3,
    name: "Martijn Jansen",
    company: "Innovate Marketing",
    position: "Technical Lead",
    rating: 4,
    text: "De SEO-diensten van Multichoiceagency hebben ons enorm geholpen. We staan nu op de eerste pagina voor al onze belangrijkste zoekwoorden, wat heeft geleid tot een aanzienlijke toename in organisch verkeer. Hun team is kundig, responsief en denkt altijd mee.",
    image: "/confident-city-leader.png",
  },
  {
    id: 4,
    name: "Sophie Vermeulen",
    company: "Lifestyle Brands Nederland",
    position: "E-commerce Manager",
    rating: 5,
    text: "Wat Multichoiceagency onderscheidt is hun holistische aanpak. Ze begrijpen dat een succesvolle online aanwezigheid meer is dan alleen een mooie website. Hun strategisch advies en continue ondersteuning zijn van onschatbare waarde geweest voor ons bedrijf.",
    image: "/confident-city-leader.png",
  },
]

export default function ReviewSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Handle visibility detection for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Handle autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % reviews.length)
      }, 6000)
    }

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % reviews.length)
  }

  const handleDotClick = (index: number) => {
    setAutoplay(false)
    setActiveIndex(index)
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#1a2a18] text-white relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full grid grid-cols-12 grid-rows-6">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-[#a6e267]/20"></div>
            ))}
          </div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#2D4625] filter blur-[100px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#a6e267] filter blur-[120px] opacity-10 animate-pulse-slower"></div>

        {/* Tech lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-[#2D4625]/50 text-[#a6e267] text-sm font-medium mb-4 border border-[#a6e267]/30"
          >
            <Star className="h-4 w-4 mr-2" />
            <span>Klantervaringen</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-white mb-6 relative inline-block"
          >
            Wat onze klanten zeggen
            <div className="absolute -bottom-2 left-0 h-[2px] w-1/3 bg-gradient-to-r from-[#a6e267] to-transparent"></div>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/70"
          >
            Ontdek waarom bedrijven door heel Nederland kiezen voor onze digitale oplossingen
          </motion.p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#2D4625]/30 backdrop-blur-sm rounded-xl p-8 border border-[#333333] hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_30px_rgba(166,226,103,0.3)] relative overflow-hidden group"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute top-0 right-0 w-full h-full">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#a6e267]/5 rounded-full filter blur-[50px] transform translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-full">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2D4625]/10 rounded-full filter blur-[50px] transform -translate-x-1/2 translate-y-1/2"></div>
                      </div>
                    </div>

                    <Quote className="absolute top-6 right-6 h-16 w-16 text-[#a6e267]/10 group-hover:text-[#a6e267]/20 transition-colors duration-500" />

                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left side - Reviewer info */}
                      <div className="md:w-1/3 flex flex-col items-center md:items-start">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#a6e267]/30 group-hover:border-[#a6e267] transition-colors duration-500 relative">
                          {review.image ? (
                            <div className="w-full h-full relative">
                              <Image
                                src={review.image || "/placeholder.svg"}
                                alt={review.name}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#2D4625]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                          ) : (
                            <div className="w-full h-full bg-[#2D4625]/30 flex items-center justify-center">
                              <User className="h-10 w-10 text-[#a6e267]" />
                            </div>
                          )}
                          <div className="absolute inset-0 rounded-full border border-[#a6e267]/0 group-hover:border-[#a6e267]/30 group-hover:scale-110 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                        </div>

                        <h4 className="font-medium text-white text-xl mb-1 text-center md:text-left">{review.name}</h4>
                        <p className="text-[#a6e267] mb-1 text-center md:text-left">{review.company}</p>
                        <p className="text-white/50 text-sm mb-4 text-center md:text-left">{review.position}</p>

                        {/* Rating */}
                        <div className="flex mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < review.rating ? "text-[#a6e267]" : "text-gray-600"
                              } transition-transform duration-300 ${
                                hoveredCard === index && i < review.rating ? "scale-110" : ""
                              }`}
                              fill={i < review.rating ? "#a6e267" : "none"}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Right side - Review Text */}
                      <div className="md:w-2/3 flex flex-col justify-center">
                        <div className="relative">
                          <div className="absolute top-0 left-0 w-10 h-10 -mt-4 -ml-2 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                            <Quote className="h-10 w-10 text-[#a6e267]" />
                          </div>
                          <p className="text-white/80 text-lg relative z-10 pl-6 leading-relaxed">{review.text}</p>
                          <div className="absolute bottom-0 right-0 w-10 h-10 -mb-4 -mr-2 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-180">
                            <Quote className="h-10 w-10 text-[#a6e267]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-br-[64px] rounded-tl-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-[#a6e267] to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-[64px] rounded-br-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="w-full h-full bg-gradient-to-tl from-[#a6e267] to-transparent"></div>
                    </div>

                    {/* Tech line animation */}
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#a6e267] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                    <div className="absolute top-0 right-0 w-0 h-[1px] bg-[#a6e267] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267] flex items-center justify-center transition-all duration-300 group hover:bg-[#2D4625]/50"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6 text-white group-hover:text-[#a6e267] transition-colors duration-300" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-3">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#a6e267] w-10 shadow-[0_0_10px_rgba(166,226,103,0.5)]"
                      : "bg-white/30 hover:bg-white/50 w-3"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267] flex items-center justify-center transition-all duration-300 group hover:bg-[#2D4625]/50"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6 text-white group-hover:text-[#a6e267] transition-colors duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="/reviews"
            className="inline-flex items-center px-6 py-3 bg-[#2D4625] hover:bg-[#a6e267] text-white hover:text-[#2D4625] font-medium rounded-full transition-colors duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-[#a6e267]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10">Bekijk alle reviews</span>
            <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.2; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}
