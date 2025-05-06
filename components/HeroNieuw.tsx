"use client"
import type React from "react"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  videoSrc: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ videoSrc }) => {
  const { theme } = useTheme()
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const mottoRef = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (video) {
      const startTime = 15 // Begin op 15 seconden
      const endTime = 100 // Eindig op 100 seconden (1:40)
      video.currentTime = startTime

      const handleTimeUpdate = () => {
        if (video.currentTime >= endTime) {
          video.currentTime = startTime // Terug naar starttijd
          video.play() // Herstart de video
        }
      }

      video.addEventListener("timeupdate", handleTimeUpdate)

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-[#2d4625] to-[#1c3a14] overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#5a7a4f 1px, transparent 1px), linear-gradient(90deg, #5a7a4f 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top tagline */}
        <div
          ref={taglineRef}
          className={`mb-8 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h2 className="text-[#5a7a4f] text-xl font-medium">Geen code zonder context</h2>
        </div>

        {/* Main headline with highlighted words */}
        <div
          ref={headlineRef}
          className={`max-w-3xl mb-12 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
            We starten niet bij <span className="text-[#5a7a4f]">techniek</span>
            <br />
            maar in <span className="text-[#5a7a4f]">jouw wereld</span>
          </h1>
        </div>

        {/* Button */}
        <div
          ref={buttonRef}
          className={`mb-16 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <Link
            href="/markten"
            className="inline-flex items-center px-6 py-3 bg-white text-[#1c3a14] rounded-full hover:bg-gray-100 transition-colors"
          >
            <span className="mr-2">Markten waar we excelleren</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Video section - larger on mobile */}
        <div
          ref={videoContainerRef}
          className={`relative w-[95%] md:w-[80%] aspect-[16/9] mx-auto transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        {/* "We live by our own code" now below the video */}
        <div
          ref={mottoRef}
          className={`bg-[#3a582f] p-8 max-w-md mx-auto md:ml-[10%] mt-8 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">We live by our own code</h3>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
