"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function LeadManagementSystem() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een lead management systeem belangrijk voor mijn bedrijf?",
      answer:
        "Een effectief lead management systeem optimaliseert uw verkoopproces door potentiële klanten efficiënt te volgen, te kwalificeren en om te zetten in daadwerkelijke klanten. Het biedt waardevolle inzichten en versterkt uw marketinginspanningen.",
    },
    {
      question: "Hoe lang duurt de implementatie van een lead management systeem?",
      answer:
        "De implementatietijd varieert per project, maar gemiddeld kunt u binnen 1 tot 3 maanden resultaat verwachten. Dit omvat de planning, configuratie, integratie en training van uw team.",
    },
    {
      question: "Kunnen jullie mijn bestaande CRM-systemen integreren met het nieuwe systeem?",
      answer:
        "Ja, wij zorgen voor een naadloze integratie met uw bestaande CRM en andere marketingtools, zodat al uw data centraal beheerd wordt zonder uw huidige workflows te verstoren.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor lead management systemen?",
      answer:
        "Wij maken gebruik van moderne, cloud-gebaseerde oplossingen, API-integraties en realtime data-analysetools die uw verkoopproces optimaliseren en direct inzicht geven in uw lead funnel.",
    },
    {
      question: "Hoe waarborgen jullie de beveiliging van klantdata in het systeem?",
      answer:
        "Beveiliging staat bij ons voorop. We implementeren encryptie, strikte toegangscontroles en regelmatige audits zodat uw klantgegevens beschermd zijn volgens de hoogste industriestandaarden.",
    },
    {
      question: "Wat zijn de voordelen van een op maat gemaakt systeem ten opzichte van standaard oplossingen?",
      answer:
        "Een op maat gemaakt lead management systeem sluit perfect aan bij uw bedrijfsprocessen, biedt flexibiliteit, betere integratie en unieke functionaliteiten die standaardoplossingen vaak niet leveren.",
    },
    {
      question: "Hoe waarborgen jullie de schaalbaarheid van het systeem?",
      answer:
        "Ons systeem is ontworpen om met uw bedrijf mee te groeien. Of het nu gaat om een toename in leadvolume of uitbreiding naar nieuwe markten, onze schaalbare oplossingen zorgen voor een soepele operatie.",
    },
    {
      question: "Kunnen jullie geavanceerde analysetools en automatiseringsprocessen implementeren?",
      answer:
        "Absoluut! Wij integreren krachtige analysetools en automatiseringsfuncties die klantgedrag monitoren en u helpen uw marketingstrategieën te optimaliseren op basis van realtime data.",
    },
    {
      question: "Hoe zorgen jullie voor onderhoud en ondersteuning na implementatie?",
      answer:
        "Wij bieden uitgebreide ondersteuning na implementatie, inclusief regelmatige updates, 24/7 monitoring en training, zodat uw systeem altijd optimaal functioneert.",
    },
    {
      question: "Hoe verzorgen jullie de migratie van bestaande klantdata?",
      answer:
        "Data migratie is een cruciaal onderdeel van de transitie. We analyseren en mappen uw data zorgvuldig en zorgen voor een veilige migratie met minimale verstoring van uw bedrijfsvoering.",
    },
  ]

  return (
<>      <HeroNieuw
        title={"Lead Management Systeem & CRM Oplossingen"}
        description={
          "Optimaliseer uw verkoopproces met een geavanceerd lead management systeem dat potentiële klanten efficiënt beheert en omzet in loyale klanten. Ontdek hoe onze oplossing u realtime inzichten en naadloze integraties biedt."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://videos.pexels.com/video-files/29458457/12680994_1920_1080_25fps.mp4"}
      />

      {/* Lead Management Section */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row lg:items-center">
            {/* Linker kolom op desktop (HTML als eerste, dus rechts op mobiel) */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Efficiënt beheer van uw leads
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Een geavanceerd lead management systeem helpt u bij het organiseren, kwalificeren en opvolgen van potentiële klanten. Zo verbetert u uw conversie en versterkt u de klantrelatie.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Realtime inzicht in klantactiviteiten",
                    "Geautomatiseerde opvolgstrategieën",
                    "Naadloze integratie met bestaande CRM-systemen",
                    "Uitgebreide data-analyse en rapportages",
                    "Verhoogde conversie en klanttevredenheid",
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
                      <span className="ml-3 text-lg text-gray-700 font-600 hover:font-bold dark:hover:text-green-700 dark:text-white hover:text-green-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-black text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start uw lead management project vandaag nog!
                </Link>
              </div>
            </div>

            {/* Rechter kolom op desktop (HTML als tweede, dus onder op mobiel) */}
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
                    src="https://cdn.dribbble.com/userupload/10762311/file/original-a3c2a7155d0e755ddc205f1b1df8991a.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row-reverse lg:items-center">
            {/* Linker kolom op desktop (HTML als eerste, dus rechts op mobiel) */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Optimaliseer uw verkoopstrategie
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Met ons lead management systeem krijgt u volledige controle over uw sales funnel. Organiseer uw leads en zet inzichten om in actie voor maximale groei.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Geautomatiseerde lead capturing",
                    "Intuïtieve dashboards en rapportages",
                    "Efficiënte workflow automatisering",
                    "Integratie met marketingtools en CRM",
                    "Realtime tracking en analytics",
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
                      <span className="ml-3 text-lg text-gray-700 font-600 hover:font-bold dark:hover:text-green-700 dark:text-white hover:text-green-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-black text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start uw lead management project vandaag nog!
                </Link>
              </div>
            </div>

            {/* Rechter kolom op desktop (HTML als tweede, dus onder op mobiel) */}
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
                    src="https://cdn.dribbble.com/userupload/4987167/file/original-998e79da4d42830174eadcd610511ca6.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-gray-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">
                Hoe werkt een Lead Management Systeem?
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een effectief systeem omvat:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Geautomatiseerde lead capturing",
                    description: "Verzamel en kwalificeer leads automatisch via diverse kanalen.",
                  },
                  {
                    title: "Intuïtieve dashboards",
                    description: "Krijg realtime inzichten en rapportages over uw sales funnel.",
                  },
                  {
                    title: "Workflow automatisering",
                    description: "Automatiseer routinetaken om uw team te ontlasten.",
                  },
                  {
                    title: "Naadloze integratie",
                    description: "Integreer met uw bestaande CRM en marketingtools voor een vloeiende dataflow.",
                  },
                  {
                    title: "Realtime tracking",
                    description: "Monitor klantinteracties en optimaliseer uw opvolging.",
                  },
                  {
                    title: "Veilige infrastructuur",
                    description: "Bescherm uw klantdata met geavanceerde beveiligingsmaatregelen.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-0">
                    <div className="flex flex-col h-full">
                      <h5 className="text-2xl font-medium text-white mt-6 mb-3">{service.title}</h5>
                      <p className="text-gray-400 mb-6">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingTable />

      {/* About Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">
              Lead Management Specialisten
            </span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://videos.pexels.com/video-files/29458457/12680994_1920_1080_25fps.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">
                      Wat kunt u van ons verwachten?
                    </h1>
                    <p className="text-lg text-gray-700 mb-10">
                      Bij de implementatie van ons lead management systeem staat optimalisatie voorop. Onze aanpak zorgt voor een oplossing die uw verwachtingen overtreft door efficiënte lead capturing en conversie-optimalisatie.
                    </p>
                    <ul className="text-black">
                      {[
                        "Geavanceerde lead capturing methodes",
                        "Realtime data-analyse en rapportages",
                        "Schaalbare oplossingen voor groeiende verkoopteams",
                        "Naadloze integratie met bestaande tools",
                        "Verbeterde klantbetrokkenheid en conversie",
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
                          <span className="ml-3 text-lg text-gray-700 font-black">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-24 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">Veelgestelde vragen</h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u antwoorden op de meest gestelde vragen over ons lead management systeem.
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
                <Image
                  src="/logos/logo.png"
                  alt={""}
                  height={800}
                  width={400}
                />
              </span>
              <h5 className="text-4xl font-medium mb-4 text-black dark:text-white">
                Heeft u nog vragen?
              </h5>
              <p className="text-gray-700">
                Voor meer informatie over ons lead management systeem kunt u onze{" "}
                <Link href="#" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">010 322 04 10</span>. Ons toegewijde team staat klaar om u te helpen met uw verkoopoptimalisatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw verkoopproces te optimaliseren?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Laat uw bedrijf groeien met een geavanceerd lead management systeem dat realtime inzichten en optimale conversie biedt.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw lead management project
          </Link>
        </div>
      </section>
    </>
  )
}
