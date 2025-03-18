"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"

export default function WebsiteLatenMakenVoorOnderwijsPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een website voor onderwijs belangrijk?",
      answer:
        "Een professionele onderwijswebsite verbetert de communicatie met studenten, ouders en docenten. Het biedt een digitaal platform voor informatie, lessen en interactief leren.",
    },
    {
      question: "Hoe lang duurt het om een onderwijswebsite te laten maken?",
      answer:
        "De ontwikkeltijd hangt af van de gewenste functies. Een eenvoudige schoolwebsite kan binnen 2 tot 4 weken klaar zijn, terwijl een uitgebreide e-learning omgeving 6 tot 12 weken kan duren.",
    },
    {
      question: "Kan ik een bestaande website laten vernieuwen voor onderwijs?",
      answer:
        "Ja, wij kunnen uw huidige onderwijswebsite moderniseren met een fris design, betere functionaliteiten en e-learning integraties.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor onderwijssites?",
      answer:
        "Wij bouwen onderwijswebsites met WordPress, Next.js of maatwerkoplossingen met Laravel of Django, inclusief integraties met e-learning en studentportalen.",
    },
    {
      question: "Hoe zorgen jullie ervoor dat mijn website goed vindbaar is in Google?",
      answer:
        "Wij optimaliseren uw onderwijswebsite met SEO, laadsnelheden en mobielvriendelijk design, zodat uw school of instituut beter gevonden wordt in zoekmachines.",
    },
    {
      question: "Wat zijn de kosten voor een onderwijswebsite?",
      answer:
        "Een standaard onderwijswebsite begint bij €1.499,-, terwijl een uitgebreide e-learning site of online platform €5.000,- tot €20.000,- kan kosten.",
    },
    {
      question: "Is mijn onderwijswebsite geschikt voor mobiele apparaten?",
      answer:
        "Ja, wij ontwikkelen volledig responsive websites, zodat studenten en docenten op elk apparaat eenvoudig toegang hebben tot de website.",
    },
    {
      question: "Kan ik zelf content aanpassen op mijn onderwijswebsite?",
      answer:
        "Ja, wij bouwen websites met gebruiksvriendelijke CMS-systemen zoals WordPress of een maatwerk dashboard, zodat u eenvoudig lessen, nieuws en documenten kunt beheren.",
    },
    {
      question: "Hoe zit het met onderhoud en updates na de lancering?",
      answer:
        "Wij bieden onderhoudspakketten met beveiligingsupdates, back-ups en prestatie-optimalisaties, zodat uw website veilig en up-to-date blijft.",
    },
    {
      question: "Kunnen jullie mijn website koppelen aan een leerplatform (LMS)?",
      answer:
        "Ja, wij integreren Learning Management Systems (LMS) zoals Moodle, Canvas of Google Classroom in uw onderwijswebsite.",
    },
  ];
  

  return (
<>      <HeroNieuw
        title={"Website laten maken voor onderwijs"}
        description={
          "Wilt u een website laten maken voor onderwijs? Ontdek hoe een professioneel onderwijsplatform e-learning, studentenbeheer en communicatie optimaliseert."
        }
        buttonText={"Offerte aanvragen"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={
          "https://cdn.dribbble.com/userupload/20585023/file/original-f77ab4e11e45439d6a0c173d8ad2c6cb.mp4"
        }
      />

      {/* About Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">
              Onderwijs specialisten
            </span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center lg:flex-row-reverse -mx-4">
                {/* Video Column */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video
                      className="w-full h-full object-contain rounded-md"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src="https://cdn.dribbble.com/userupload/3266205/file/original-65cf49de6dc583c826a888011e6e75ff.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                {/* Text Column */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                      Website Laten Maken voor Onderwijs: Alles Wat U Moet Weten
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Een goede onderwijswebsite maakt digitaal leren toegankelijk, ondersteunt studenten en versterkt de communicatie tussen docenten, studenten en ouders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingTable />
    </>
  )
}
