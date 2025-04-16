"use client"
import type React from "react"
import { useRef, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"

interface HeroSectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  videoSrc: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText, buttonLink, videoSrc }) => {
  const { theme } = useTheme()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current

    if (video) {
      const startTime = 6 // Begin op 6 seconden
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

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {/* Optional overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content overlay - centered in the viewport */}
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-white text-4xl sm:text-5xl md:text-7xl xl:text-8xl tracking-tight mb-6 sm:mb-8">
              {title}
            </h1>
            <p className="max-w-sm sm:max-w-md xl:max-w-3xl text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10">
              {description}
            </p>
            <Link
              href={buttonLink}
              className="inline-flex py-3 px-5 sm:py-4 sm:px-6 items-center justify-center text-base sm:text-lg font-medium text-white bg-[#3a582f] hover:bg-[#2d4625] rounded-full transition duration-200"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
