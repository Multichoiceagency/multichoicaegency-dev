"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/Hero-section"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function DocumentManagementSystemen() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom zijn Document Management Systemen belangrijk voor mijn organisatie?",
      answer:
        "Document Management Systemen centraliseren en beveiligen uw documenten, waardoor efficiënte workflows en verbeterde samenwerking mogelijk worden. Dit resulteert in een snellere en betrouwbaardere bedrijfsvoering.",
    },
    {
      question: "Hoe lang duurt het om een op maat gemaakt DMS te implementeren?",
      answer:
        "De implementatietijd varieert per project, maar gemiddeld ligt de doorlooptijd tussen de 3 en 6 maanden, inclusief planning, ontwikkeling, integratie en training.",
    },
    {
      question: "Kunnen jullie mijn bestaande systemen integreren met het nieuwe DMS?",
      answer:
        "Ja, wij zorgen voor een naadloze integratie met uw bestaande software en databases, zodat uw documentbeheer volledig wordt geoptimaliseerd zonder de huidige workflows te verstoren.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor de ontwikkeling van DMS-oplossingen?",
      answer:
        "Wij werken met moderne technologieën zoals .NET, Java en cloud-gebaseerde oplossingen om een veilig, schaalbaar en flexibel Document Management Systeem te bouwen.",
    },
    {
      question: "Hoe waarborgen jullie de beveiliging van gevoelige documenten?",
      answer:
        "Beveiliging is cruciaal. Wij implementeren encryptie, strikte toegangscontrole en voeren regelmatige beveiligingsaudits uit om uw documenten te beschermen volgens de hoogste industriestandaarden.",
    },
    {
      question: "Wat zijn de voordelen van een custom DMS ten opzichte van standaardoplossingen?",
      answer:
        "Een op maat gemaakt DMS sluit perfect aan op uw bedrijfsprocessen, biedt flexibiliteit en schaalbaarheid en verbetert de workflow en samenwerking binnen uw organisatie.",
    },
    {
      question: "Hoe zorgen jullie voor de schaalbaarheid van het DMS?",
      answer:
        "Onze oplossingen zijn ontworpen om met uw organisatie mee te groeien. Door een modulaire architectuur en cloud-integraties garanderen wij optimale prestaties, zelfs bij toenemende documentvolumes.",
    },
    {
      question: "Kunnen jullie integreren met andere bedrijfsapplicaties?",
      answer:
        "Absoluut! Wij realiseren koppelingen met ERP-, CRM- en andere bedrijfssoftware zodat uw DMS naadloos onderdeel wordt van uw gehele digitale infrastructuur.",
    },
    {
      question: "Hoe verzorgen jullie onderhoud en ondersteuning na de implementatie?",
      answer:
        "Wij bieden uitgebreide ondersteuning na de lancering, met regelmatige updates, 24/7 monitoring en technische ondersteuning zodat uw DMS altijd optimaal functioneert.",
    },
    {
      question: "Hoe verloopt de migratie van bestaande documenten naar het nieuwe systeem?",
      answer:
        "Wij voeren een zorgvuldige data migratie uit, waarbij we uw bestaande documenten analyseren, mappen en veilig overzetten met minimale verstoring van uw bedrijfsprocessen.",
    },
  ]

  return (
<>      <HeroNieuw
        title={"Document Management Systemen & Custom Software"}
        description={
          "Beheer uw documenten centraal met op maat gemaakte DMS-oplossingen. Onze systemen optimaliseren uw documentstromen, verbeteren de beveiliging en stroomlijnen uw bedrijfsprocessen."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://videos.pexels.com/video-files/29458457/12680994_1920_1080_25fps.mp4"}
      />

      {/* Document Management Section */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row lg:items-center">
            {/* Linker kolom op desktop (HTML als eerste, dus rechts op mobiel) */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Geavanceerde documentoplossingen voor uw organisatie</h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Onze Document Management Systemen centraliseren en beveiligen al uw documenten. Hierdoor creëert u efficiënte workflows en verbetert u de samenwerking binnen uw team.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Veilige opslag en beheer",
                    "Eenvoudige toegankelijkheid",
                    "Workflow automatisering",
                    "Integratie met bestaande systemen",
                    "Realtime document tracking",
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
                  Start uw DMS-project vandaag nog!
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
                    src="https://videos.pexels.com/video-files/29458457/12680994_1920_1080_25fps.mp4"
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
                  Innovatieve documentbeheer oplossingen
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Wij ontwikkelen systemen die het beheer van uw documenten vereenvoudigen. Optimaliseer de toegankelijkheid en veiligheid van uw data met onze op maat gemaakte oplossingen.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Intuïtieve gebruikersinterfaces",
                    "Efficiënte workflow automatisering",
                    "Naadloze integratie met bestaande tools",
                    "Geavanceerde beveiligingsmaatregelen",
                    "Realtime monitoring en rapportage",
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
                  Start uw DMS-project vandaag nog!
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
                    src="https://cdn.dribbble.com/userupload/18039494/file/original-81040210ac9b39e3762512b794dc9f60.mp4"
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
                Hoe werkt een Document Management Systeem?
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Onze aanpak omvat:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Veilig documentbeheer",
                    description: "Bescherm en beheer uw documenten met geavanceerde beveiligingsmaatregelen.",
                  },
                  {
                    title: "Workflow automatisering",
                    description: "Automatiseer documentstromen en optimaliseer interne processen.",
                  },
                  {
                    title: "Intuïtieve gebruikersinterface",
                    description: "Een gebruiksvriendelijke interface zorgt voor een eenvoudige toegang tot uw documenten.",
                  },
                  {
                    title: "Integratie met bestaande systemen",
                    description: "Naadloze koppelingen met ERP, CRM en andere bedrijfsapplicaties.",
                  },
                  {
                    title: "Realtime rapportage",
                    description: "Monitor documentactiviteiten en verkrijg direct inzicht in uw data.",
                  },
                  {
                    title: "Continue optimalisatie",
                    description: "Regelmatige updates en ondersteuning voor een toekomstbestendig systeem.",
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
              DMS Specialisten
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
                      Bij de ontwikkeling van onze Document Management Systemen staat efficiënt documentbeheer en veiligheid voorop. Wij leveren oplossingen die perfect aansluiten op uw bedrijfsbehoeften.
                    </p>
                    <ul className="text-black">
                      {[
                        "Veilige opslag en beheer",
                        "Efficiënte workflow automatisering",
                        "Integratie met bestaande applicaties",
                        "Realtime monitoring en rapportage",
                        "Uitgebreide ondersteuning en onderhoud",
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
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u antwoorden op de meest gestelde vragen over onze Document Management Systemen.
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
              <h5 className="text-4xl font-medium mb-4  text-black dark:text-white">
                Heeft u nog vragen?
              </h5>
              <p className="text-gray-700 dark:text-white">
                Voor meer informatie over onze Document Management Systemen kunt u onze{" "}
                <Link href="contact" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">010 322 04 10</span>. Ons deskundige team staat klaar om u te ondersteunen bij het optimaliseren van uw documentbeheer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw documentbeheer te optimaliseren?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Transformeer uw organisatie met een op maat gemaakt Document Management Systeem dat uw workflow stroomlijnt en de veiligheid van uw data waarborgt.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw DMS-project
          </Link>
        </div>
      </section>
    </>
  )
}
