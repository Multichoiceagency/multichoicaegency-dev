"use client"

import { useRef, useEffect } from "react"

export default function OverOns() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play the video:", error)
      })
    }
  }, [])

  return (
    <section className="max-w-[1440px] mx-auto justify-center align-center dark:bg-gray-900 py-20 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Video Section */}
        <div className="relative w-full lg:w-1/2 aspect-video">
          <video
            ref={videoRef}
            src="https://cdn.dribbble.com/userupload/15601042/file/large-9b7718f441bdc6b8dc1ca0f22faa6644.mp4"
            className="rounded-lg w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-4">Over ons</h2>
          <div className="h-1 w-16 bg-teal-700 mb-6"></div>
          <p className="text-lg md:text-xl dark:text-white text-gray-600 leading-relaxed mb-6">
            Wij maken maatwerk websites en helpen bedrijven groeien door sterke online strategieën te ontwikkelen en uit
            te voeren. Onze expertise op het gebied van webdesign, grafisch ontwerp en online marketing zorgt ervoor dat
            jouw bedrijf succesvol kan zijn op digitale kanalen.
          </p>
          <ul className="pb-4">
          <li className="font-bold">Onze expertise:</li>
          <li>✅ UI/UX Design – Intuïtieve en conversiegerichte designs</li>
          <li>✅ Web Development – Maatwerkoplossingen met de nieuwste technologieën</li>
          <li>✅ Branding & Strategie – Een sterke visuele identiteit die impact maakt</li>
          <li>✅ Digitale Marketing – Doelgerichte strategieën voor maximale zichtbaarheid</li>
          <p className="text-lg md:text-xl dark:text-white text-gray-600 leading-relaxed mb-6"/>Wij geloven dat de digitale toekomst wordt gebouwd door sterke samenwerkingen. Laat ons jouw gids zijn in de digitale wereld.
          </ul>
          <a
            href="over-ons"
            className="inline-flex items-center bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-900 transition-colors"
          >
            Over ons
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

