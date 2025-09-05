"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import CTASection from "./cta-section"

// Extend the Window interface to include openGoogleCalendarModal
declare global {
  interface Window {
    openGoogleCalendarModal?: () => void
  }
}

interface HeroSectionProps {
  videoSrc: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ videoSrc, title, description, buttonText, buttonLink }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState(false)
  const [bgVideoLoaded, setBgVideoLoaded] = useState(false)

  /** -------------------- MAIN VIDEO (15s→100s loop) -------------------- */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const startTime = 15
    const endTime = 100

    const handleMetadata = () => {
      try {
        video.currentTime = startTime
      } catch {}
    }

    const handleTimeUpdate = () => {
      if (video.currentTime >= endTime) {
        video.currentTime = startTime
        video.play().catch(() => {})
      }
    }

    try {
      video.currentTime = startTime
    } catch {}
    video.addEventListener("loadedmetadata", handleMetadata)
    video.addEventListener("timeupdate", handleTimeUpdate)
    return () => {
      video.removeEventListener("loadedmetadata", handleMetadata)
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [])

  /** -------------------- BACKGROUND VIDEO -------------------- */
  useEffect(() => {
    const bgVideo = bgVideoRef.current
    if (!bgVideo) return

    bgVideo.playbackRate = 0.9

    const handleBgMetadata = () => {
      bgVideo.play().catch(() => {})
    }
    const handleBgCanPlay = () => {
      setBgVideoLoaded(true)
      bgVideo.play().catch(() => {})
    }
    const handleTimeUpdate = () => {
      if (bgVideo.duration - bgVideo.currentTime < 0.5) {
        bgVideo.style.opacity = "0.8"
      } else {
        bgVideo.style.opacity = "1"
      }
    }
    const handleLoop = () => {
      bgVideo.style.opacity = "1"
    }

    bgVideo.addEventListener("loadedmetadata", handleBgMetadata)
    bgVideo.addEventListener("canplay", handleBgCanPlay)
    bgVideo.addEventListener("timeupdate", handleTimeUpdate)
    bgVideo.addEventListener("loop", handleLoop)

    return () => {
      bgVideo.removeEventListener("loadedmetadata", handleBgMetadata)
      bgVideo.removeEventListener("canplay", handleBgCanPlay)
      bgVideo.removeEventListener("timeupdate", handleTimeUpdate)
      bgVideo.removeEventListener("loop", handleLoop)
    }
  }, [])

  /** -------------------- INTERSECTION OBSERVER -------------------- */
  useEffect(() => {
    if (!sectionRef.current) return
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
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  /** ---------------- LOGO-LIJSTEN (wit + zwart) ---------------- */
  const whiteLogoFiles = [
    "handtekening-wit.png",
    "logo-xlgroothandelbv.png",
    "Adeaconstruct.png",
    "Lionzone.png",
    "orangereclame.png",
    "adeainfra.png",
    "Alkanaany.png",
    "Autoservice-Maestropoort.png",
    "Autotradervoorschoten.png",
    "BGR-TaxiAmsterdam.png",
    "Binvino.png",
    "BK-Bewindvoering.png",
    "Bluelinenetwork.png",
    "CKN-infratechniek.png",
    "Cleopatra-beauty.png",
    "Dutchtransportgroup.png",
    "E&H-Bouwbv.png",
    "Ergonbouwaannemersbedrijf.png",
    "Hengelvissportschiedam.png",
    "HUB-Makelaardij.png",
    "logo-bouhs-steigerwerken 1.png",
    "Lovka.png",
    "Maazcleanrevolution.png",
    "Orangereclame.png",
    "Powerforce uitzendgroep.png",
    "Sunsen-Zonnestudio.png",
    "sydneydranken.png",
    "Volta-elektrotechniek.png",
    "YZ-Content.png",
  ]

  // Veilig paden bouwen (spaties/tekens encoden)
  const logos = [
    ...whiteLogoFiles.map((f) => `/partners/witte-logos/${encodeURIComponent(f)}`),
  ]

  /** -------------------- MARQUEE DUUR DYNAMISCH -------------------- */
  useEffect(() => {
    const track = trackRef.current
    const wrap = marqueeRef.current
    if (!track || !wrap) return

    // breedte van één set (we renderen 2 sets)
    const halfWidth = track.scrollWidth / 2
    const viewportWidth = wrap.clientWidth || 1

    // ~20s per viewport-breedte; schaal met content; min 18s voor “rust”
    const seconds = Math.max(18, (halfWidth / viewportWidth) * 20)
    track.style.setProperty("--marquee-duration", `${seconds.toFixed(2)}s`)
  }, [logos.length])

  return (
<section ref={sectionRef} className="relative w-full min-h-screen bg-[#3F5F33] overflow-hidden z-10">
  {/* Achtergrond video */}
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
    {/* Donkere overlay */}
    <div className="absolute inset-0 bg-green/30 z-10" />

    {/* Video container */}
    <div className={`transition-opacity duration-700 ${bgVideoLoaded ? "opacity-100" : "opacity-0"} z-0`}>
      <video
        ref={bgVideoRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        src="/video/bg-web.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  </div>

      <div className="max-w-[1200px] mx-auto px-4 py-48 md:pl-[5%] relative z-20">
      {/* Titel */}
      <div
        className={`max-w-3xl mb-6 transform transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
        style={{ transitionDelay: "80ms" }}
      >
<h1
  className="outline-reveal text-white text-5xl sm:text-xl md:text-5xl lg:text-7xl leading-[1.0] tracking-tight drop-shadow-md"
  data-text={title}
>
          {title}
        </h1>
      </div>

        {/* Beschrijving + CTA's */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
          <div
            className={`max-w-2xl transform transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <p className="text-gray-300 text-lg drop-shadow-sm">{description}</p>
          </div>

          <div
            className={`flex flex-row gap-4 transform transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            <Link href={buttonLink}>
              <Button className="bg-green-700 hover:bg-[#3a582f] text-white rounded-md px-6 py-6 text-base font-medium whitespace-nowrap">
                {buttonText}
              </Button>
            </Link>

            <Link href="/cases" passHref>
              <Button
              className="bg-green-600 backdrop-blur-sm hover:bg-white/30 text-white border-0 rounded-md px-6 py-6 text-base font-medium flex items-center whitespace-nowrap"
              >
              <span>Bekijk projecten</span>
              <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Showcase video */}
        <CTASection /> 
        <h3 className="text-white/90 text-lg font-bold uppercase text-center drop-shadow-sm">Bekijk wat we hebben gebouwd</h3>
        <p className="text-gray-300 text-sm text-center pb-8">Bekijk hoe wij andere ondernemers al hebben geholpen met websites die converteren</p>
        <div
          className={`relative w-full max-w-full transform transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="rounded-lg overflow-hidden shadow-2xl relative">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>

        {/* Partner logos */}
        <div className="mt-16 mb-4 text-center">
          <h3 className="text-white/90 text-lg font-bold uppercase drop-shadow-sm">Onze partners</h3>
          <p className="text-gray-300 text-sm">Bedrijven die ons vertrouwen voor hun digitale groei</p>
        </div>

        {/* Naadloze marquee */}
        <div ref={marqueeRef} className="marquee-wrap bg-black/60 rounded-md relative overflow-hidden w-full py-6">
          <div
            ref={trackRef}
            className="marquee-track flex items-center w-max will-change-transform whitespace-nowrap gap-16"
          >
            {/* Set A */}
            {logos.map((src, i) => (
              <div key={`a-${i}`} className="flex-shrink-0 h-12 md:h-16 flex items-center justify-center">
                <Image
                  src={src}
                  width={200}
                  height={8}
                  alt={`Partner logo ${i + 1}`}
                  className="h-auto w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
            {/* Set B (identiek) */}
            {logos.map((src, i) => (
              <div key={`b-${i}`} className="flex-shrink-0 h-12 md:h-16 flex items-center justify-center" aria-hidden="true">
                <Image
                  src={src}
                  width={200}
                  height={64}
                  alt=""
                  className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div
          className={`mt-20 grid bg-green-700/50 px-7 py-4 rounded-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "260ms" }}
        >
          {[
            {
              title: "Ontwerpen en bouwen",
              desc: "We leven volgens onze eigen code, beginnend met jouw context voordat we in technologie duiken.",
              iconPath:
                "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
            },
            {
              title: "Publiceren en bewerken",
              desc: "Geen code zonder context - we starten in jouw wereld, niet met technologie.",
              iconPath:
                "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
            },
            {
              title: "Analyseren en optimaliseren",
              desc: "We starten niet met techniek maar in jouw wereld, met begrip van jouw unieke context.",
              iconPath:
                "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
            },
            {
              title: "Schalen en samenwerken",
              desc: "We leven volgens onze eigen code, met focus op jouw behoeften voordat we technologische oplossingen bieden.",
              iconPath:
                "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            },
          ].map(({ title, desc, iconPath }, i) => (
            <div key={i} className="border-t border-[#5a7a4f]/30 pt-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-[#3a582f] mr-3">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                  </svg>
                </div>
                <h3 className="text-white font-bold drop-shadow-sm">{title}</h3>
              </div>
              <p className="text-white text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>

{/* Styles: naadloze marquee + edge-fade + title-outline */}
<style jsx>{`
  .marquee-wrap {
    --edge: 7%;
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0,
      black var(--edge),
      black calc(100% - var(--edge)),
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0,
      black var(--edge),
      black calc(100% - var(--edge)),
      transparent 100%
    );
  }
  .marquee-track {
    --marquee-duration: 28s; /* default, wordt overschreven door JS */
    animation: marquee var(--marquee-duration) linear infinite;
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); } /* 2 identieke sets → halve breedte */
  }
  @media (prefers-reduced-motion: reduce) {
    .marquee-track { animation: none; }
  }
`}</style>
    </section>
  )
}

export default HeroSection
