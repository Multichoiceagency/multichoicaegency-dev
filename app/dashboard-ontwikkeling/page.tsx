"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/Hero-section"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function DashboardOntwikkeling() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is dashboard ontwikkeling belangrijk voor mijn organisatie?",
      answer:
        "Moderne dashboards geven u realtime inzichten in uw bedrijfsdata, waardoor u beter geïnformeerde beslissingen kunt nemen en uw prestaties kunt optimaliseren.",
    },
    {
      question: "Hoe lang duurt het om een custom dashboard te ontwikkelen?",
      answer:
        "De ontwikkeltijd is afhankelijk van de complexiteit en de gewenste functionaliteiten, maar gemiddeld kunt u binnen 2 tot 4 maanden een werkend dashboard verwachten.",
    },
    {
      question: "Kunnen jullie bestaande data integreren in het nieuwe dashboard?",
      answer:
        "Ja, wij zorgen voor een naadloze koppeling met uw bestaande databronnen en systemen, zodat al uw data overzichtelijk in één dashboard wordt gepresenteerd.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor dashboard ontwikkeling?",
      answer:
        "Wij werken met moderne tools en frameworks zoals React, D3.js en Chart.js, gecombineerd met robuuste backend oplossingen, om dynamische en interactieve dashboards te realiseren.",
    },
    {
      question: "Hoe waarborgen jullie de veiligheid van de weergegeven data?",
      answer:
        "Wij implementeren strikte beveiligingsmaatregelen zoals data-encryptie, toegangscontrole en regelmatige audits om de integriteit en veiligheid van uw data te garanderen.",
    },
    {
      question: "Wat zijn de voordelen van een op maat gemaakt dashboard?",
      answer:
        "Een custom dashboard is volledig afgestemd op uw bedrijfsbehoeften, biedt een intuïtieve gebruikersinterface en levert nauwkeurige inzichten die standaard dashboards vaak niet kunnen bieden.",
    },
    {
      question: "Hoe zorgen jullie voor de schaalbaarheid van het dashboard?",
      answer:
        "Onze dashboards zijn ontworpen met een flexibele architectuur, zodat ze eenvoudig meegroeien met uw organisatie en grotere datasets en gebruikersaantallen aankunnen.",
    },
    {
      question: "Kunnen jullie interactieve en realtime visualisaties implementeren?",
      answer:
        "Absoluut! Wij ontwikkelen interactieve dashboards met realtime data-updates, zodat u altijd over de meest actuele informatie beschikt.",
    },
    {
      question: "Hoe verloopt de ondersteuning na de lancering van het dashboard?",
      answer:
        "Wij bieden uitgebreide ondersteuning na de implementatie, met regelmatige updates, training en 24/7 technische assistentie, zodat uw dashboard optimaal blijft functioneren.",
    },
    {
      question: "Hoe worden data migraties afgehandeld bij de overgang naar een nieuw dashboard?",
      answer:
        "Wij zorgen voor een zorgvuldige migratie van uw bestaande data, waarbij compatibiliteit en veiligheid centraal staan, zodat de overgang soepel verloopt.",
    },
  ]

  return (
<>      <HeroNieuw
        title={"Dashboard Ontwikkeling & Data Visualisatie"}
        description={
          "Transformeer uw ruwe data in overzichtelijke, interactieve dashboards die realtime analyses en rapportages mogelijk maken. Onze op maat gemaakte oplossingen ondersteunen uw besluitvormingsproces en versterken uw bedrijfsstrategie."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/36770828/file/original-99a870c8cab71f266a57e85f35a72e83.mp4"}
      />

      {/* Dashboard Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row lg:items-center">
            {/* Linker kolom op desktop */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Inzichten op een rijtje
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Onze dashboards bieden u een overzichtelijke presentatie van uw bedrijfsdata, zodat u trends en prestaties snel kunt analyseren.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Realtime data en analyses",
                    "Interactieve visualisaties",
                    "Naadloze integratie met uw systemen",
                    "Schaalbare oplossingen",
                    "Uitgebreide rapportagemogelijkheden",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center mb-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="20" height="20" rx="10" fill="#BEF264"></rect>
                        <path
                          d="M14.8 6.40002L8.19995 13L5.19995 10"
                          stroke="#022C22"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="ml-3 text-sm text-black font-600 font-black dark:hover:text-green-700 dark:text-white hover:text-green-700">                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-sm font-medium text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start uw dashboard project vandaag nog!
                </Link>
              </div>
            </div>

            {/* Rechter kolom op desktop */}
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
                    src="https://cdn.dribbble.com/userupload/36543224/file/original-89f649e87ced79e060531ee9c3aa7d22.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row-reverse lg:items-center">
            {/* Linker kolom op desktop */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Interactieve en dynamische visualisaties
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Onze dashboards worden op maat ontwikkeld om uw data op een visueel aantrekkelijke en intuïtieve manier weer te geven.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Gebruiksvriendelijke interfaces",
                    "Interactieve drill-down mogelijkheden",
                    "Realtime updates",
                    "Integratie met meerdere databronnen",
                    "Flexibele aanpasbaarheid",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center mb-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="20" height="20" rx="10" fill="#BEF264"></rect>
                        <path
                          d="M14.8 6.40002L8.19995 13L5.19995 10"
                          stroke="#022C22"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="ml-3 text-sm text-black font-600 font-black dark:hover:text-green-700 dark:text-white hover:text-green-700">                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-sm font-medium text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start uw dashboard project vandaag nog!
                </Link>
              </div>
            </div>

            {/* Rechter kolom op desktop */}
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
                    src="https://cdn.dribbble.com/userupload/24541894/file/original-cfc19800350bfe01bc5621d50c052559.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sectie */}
      <section className="py-12 lg:py-24 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u antwoorden op de meest gestelde vragen over onze dashboard ontwikkelingsdiensten.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 5).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-green-900 dark:bg-green-900/10 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="text-white dark:text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 5.69995V18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <div className="w-full lg:w-1/2 px-4">
                {faqItems.slice(5).map((item, index) => (
                  <button
                    key={index + 5}
                    onClick={() => setOpenAccordion(openAccordion === index + 5 ? null : index + 5)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-green-900 dark:bg-green-900/10 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index + 5 ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="text-white dark:text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 5 ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 5.69995V18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="max-w-xl mx-auto text-center">
              <span className="inline-block mb-8 ml-10">
                <Image src="/logos/logo.png" alt={""} height={800} width={400} />
              </span>
              <h5 className="text-4xl font-medium mb-4 text-black dark:text-white">
                Heeft u nog vragen?
              </h5>
              <p className="text-gray-700">
                Voor meer informatie over onze dashboard ontwikkelingsdiensten kunt u onze{" "}
                <Link href="contact" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <Link href="tel:0103220410"> 
                <span className="text-lime-500 font-medium underline">010 322 04 10</span>. Ons deskundige team staat klaar om u te ondersteunen bij het realiseren van uw datavisualisatieprojecten.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw data tot leven te brengen?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Transformeer uw ruwe data in overzichtelijke, interactieve dashboards die realtime inzichten bieden en uw besluitvorming ondersteunen.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw dashboard project
          </Link>
        </div>
      </section>
    </>
  )
}
