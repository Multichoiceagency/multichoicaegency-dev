"use client"

import { useRef, useEffect } from "react"
import HeroNieuw from "./HeroNieuw"

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
    <section className="bg-white text-black">
    <HeroNieuw
      title={"Over ons"}
      description={
        " Met onze expertise in maatwerk webdesign, backend development en digitale strategieën, helpen we bedrijven en ondernemers om hun online doelen te realiseren."
      }
      buttonText={"Offerte aanvragen"}
      buttonLink={"/offerte-aanvragen"}
      videoSrc={
        "https://cdn.dribbble.com/userupload/7872434/file/original-a1397ab48ba1331e935ca52bcab129fa.mp4"
      }
    />

    <section className="max-w-[1440px] mx-auto justify-center align-center dark:bg-gray-900 py-20 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Video Section */}
        <div className="relative w-full h-[1000px] lg:w-3/4">
          <video
            ref={videoRef}
            src="https://cdn.dribbble.com/userupload/19782527/file/original-df7538bde44a627629972308e962116b.mp4"
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
          Bij Multichoiceagency geloven we dat een sterke online aanwezigheid essentieel is voor het succes van moderne bedrijven. Met onze expertise in maatwerk webdesign, backend development en digitale strategieën, helpen we bedrijven en ondernemers om hun online doelen te realiseren.
          </p>
          <p className="text-lg md:text-xl dark:text-white text-gray-600 leading-relaxed mb-6">
          Onze missie is om innovatieve, schaalbare en gebruiksvriendelijke websites te ontwikkelen die niet alleen visueel aantrekkelijk zijn, maar ook technisch optimaal presteren. Van corporate websites tot geavanceerde webshops, wij bieden op maat gemaakte oplossingen die perfect aansluiten bij jouw wensen en bedrijfsdoelstellingen.
          </p>
          <ul className="pb-4">
          <li className="font-bold">Waarom kiezen voor Multichoiceagency?</li>
          <li>✅ Maatwerk Webdesign – Unieke en professionele websites die jouw merk laten opvallen.</li>
          <li>✅ SEO Geoptimaliseerd – Wij zorgen ervoor dat jouw website goed vindbaar is in Google.</li>
          <li>✅ Responsive & Snel – Geoptimaliseerd voor mobiel, tablet en desktop voor een naadloze gebruikerservaring.</li>
          <li>✅ Technische Expertise – Wij werken met moderne technologieën zoals Next.js, Vue.js, WordPress en Laravel.</li>
          <li>✅ Persoonlijke Ondersteuning – Altijd bereikbaar voor advies, onderhoud en updates.</li>
          <p className="text-lg md:text-xl dark:text-white text-gray-600 leading-relaxed mb-6"/>Wil je een professionele website laten maken of jouw huidige website optimaliseren? Neem vrijblijvend contact met ons op en ontdek hoe wij jouw bedrijf online kunnen laten groeien.
          </ul>
          <div className="text-left p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
                📧 E-mail:{" "}
                <a href="mailto:info@multichoiceagency.nl" className="text-blue-600 hover:underline">
                  info@multichoiceagency.nl
                </a>
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
                📞 Telefoon:{" "}
                <a href="tel:0103220410" className="text-blue-600 hover:underline">
                  010-3220410
                </a>
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
                🌍 Website:{" "}
                <a href="https://www.multichoiceagency.nl" target="_blank" className="text-blue-600 hover:underline">
                  www.multichoiceagency.nl
                </a>
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                🚀 Multichoiceagency – Jouw Partner in Webdesign en Online Groei!
              </h2>
            </div>
          <a
            href="diensten"
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
    </section>
  )
}

