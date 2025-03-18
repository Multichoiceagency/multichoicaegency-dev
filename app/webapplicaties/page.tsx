"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function Webapplicaties() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom zijn webapplicaties belangrijk voor mijn bedrijf?",
      answer:
        "Webapplicaties vormen het digitale visitekaartje van uw bedrijf. Ze zorgen voor een efficiënte online aanwezigheid, betere interactie met klanten en dragen bij aan de groei van uw onderneming.",
    },
    {
      question: "Hoe lang duurt het om een custom webapplicatie te ontwikkelen?",
      answer:
        "De ontwikkeltijd varieert per project, maar gemiddeld duurt het proces tussen de 3 en 6 maanden. Dit omvat planning, ontwerp, ontwikkeling, testen en implementatie.",
    },
    {
      question: "Kunnen jullie mijn bestaande systemen integreren met de nieuwe webapplicatie?",
      answer:
        "Ja, wij zorgen voor een naadloze integratie met uw bestaande systemen en databases, zodat u kunt profiteren van extra functionaliteiten zonder uw huidige workflows te verstoren.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor webapplicatie ontwikkeling?",
      answer:
        "Wij werken met moderne technologieën zoals React, Node.js, Django en Ruby on Rails om robuuste en schaalbare webapplicaties te bouwen. Tevens integreren wij met diverse databases en API's.",
    },
    {
      question: "Hoe waarborgen jullie de beveiliging van de webapplicaties?",
      answer:
        "Beveiliging staat bij ons voorop. We implementeren HTTPS, data-encryptie, veilige authenticatie en voeren regelmatige audits uit om uw applicatie optimaal te beschermen.",
    },
    {
      question: "Wat zijn de voordelen van custom webapplicaties ten opzichte van standaard oplossingen?",
      answer:
        "Op maat gemaakte webapplicaties worden precies afgestemd op uw bedrijfsbehoeften, bieden volledige controle over functionaliteiten en leveren een unieke gebruikerservaring die standaardoplossingen vaak niet kunnen bieden.",
    },
    {
      question: "Hoe zorgen jullie voor de schaalbaarheid van de webapplicaties?",
      answer:
        "Onze webapplicaties zijn ontworpen om mee te groeien met uw bedrijf. Met een modulaire architectuur en cloud-oplossingen garanderen wij optimale prestaties, zelfs bij hoge verkeersvolumes.",
    },
    {
      question: "Kunnen jullie complexe functionaliteiten en real-time data integreren in webapplicaties?",
      answer:
        "Zeker! Wij implementeren complexe bedrijfslogica, real-time data processing en integreren diverse API's om een naadloze en dynamische gebruikerservaring te realiseren.",
    },
    {
      question: "Hoe zorgen jullie voor onderhoud en ondersteuning na de lancering?",
      answer:
        "Wij bieden uitgebreide ondersteuning na de lancering, inclusief regelmatige updates, monitoring en technische ondersteuning, zodat uw webapplicatie altijd optimaal functioneert.",
    },
    {
      question: "Hoe gaan jullie om met data migratie bij de overgang naar een nieuwe webapplicatie?",
      answer:
        "Data migratie is een zorgvuldig proces. We analyseren en mappen uw bestaande data en zorgen voor een veilige en soepele migratie met minimale onderbreking van uw bedrijfsvoering.",
    },
  ]

  return (
<>      
<HeroNieuw
        title={"Webapplicaties & Custom Software"}
        description={
          "Transformeer uw online aanwezigheid met op maat gemaakte webapplicaties. Onze oplossingen verbeteren de interactie met klanten, verhogen de efficiëntie en stimuleren de groei van uw bedrijf."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://videos.pexels.com/video-files/29458457/12680994_1920_1080_25fps.mp4"}
      />

      {/* Webapplicaties Section */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row lg:items-center">
            {/* Linker kolom op desktop (HTML als eerste, dus rechts op mobiel) */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Geavanceerde webapplicaties voor uw bedrijf
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Onze op maat gemaakte webapplicaties optimaliseren uw bedrijfsprocessen en verbeteren de gebruikerservaring. Door gebruik te maken van de nieuwste technologieën creëren wij krachtige online oplossingen.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Responsieve en gebruiksvriendelijke interfaces",
                    "Naadloze integratie met bestaande systemen",
                    "Schaalbare oplossingen voor groeiende bedrijven",
                    "Veilige en betrouwbare infrastructuur",
                    "Realtime data en analytics",
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
                  Start uw webapplicatie project vandaag nog!
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
                  Innovatieve weboplossingen
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Wij ontwikkelen dynamische webapplicaties die zich aanpassen aan de behoeften van uw bedrijf. Optimaliseer de interactie met uw klanten en beheer uw data efficiënt.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Op maat gemaakte ontwerpen",
                    "Geavanceerde functionaliteiten",
                    "Optimale prestaties en snelheid",
                    "Integratie met externe systemen",
                    "Realtime monitoring en analytics",
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
                  Start uw webapplicatie project vandaag nog!
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
                    src="https://videos.pexels.com/video-files/5527832/pexels-artem-podrez-5527832.mp4"
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
                Hoe werkt een webapplicatie?
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Onze aanpak omvat:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Responsief ontwerp",
                    description: "Uw applicatie past zich moeiteloos aan elk apparaat aan.",
                  },
                  {
                    title: "Moderne technologie",
                    description: "Gebouwd met de nieuwste frameworks en tools voor optimale prestaties.",
                  },
                  {
                    title: "Geavanceerde integraties",
                    description: "Eenvoudige koppelingen met bestaande systemen en API's.",
                  },
                  {
                    title: "Beveiligde infrastructuur",
                    description: "Geavanceerde beveiligingsmaatregelen om uw data te beschermen.",
                  },
                  {
                    title: "Realtime analytics",
                    description: "Monitor prestaties en gebruikersgedrag met geavanceerde data-analyse.",
                  },
                  {
                    title: "Continue optimalisatie",
                    description: "Regelmatige updates en verbeteringen voor een optimale gebruikerservaring.",
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
              Webapplicatie Specialisten
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
                      Bij de ontwikkeling van onze webapplicaties staat innovatie en gebruiksvriendelijkheid voorop. Wij leveren oplossingen die precies aansluiten op uw bedrijfsbehoeften en zorgen voor een optimale online ervaring.
                    </p>
                    <ul className="text-black">
                      {[
                        "Modern ontwerp en functionaliteit",
                        "Naadloze integratie met bestaande systemen",
                        "Schaalbare en toekomstbestendige oplossingen",
                        "Geavanceerde beveiligingsmaatregelen",
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
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">Veelgestelde vragen</h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u antwoorden op de meest gestelde vragen over onze webapplicaties.
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
                Voor meer informatie over onze webapplicaties kunt u onze{" "}
                <Link href="#" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">010 322 04 10</span>. Ons toegewijde team staat klaar om u te helpen met uw online succes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw online aanwezigheid te versterken?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Laat uw bedrijf groeien met op maat gemaakte webapplicaties die de gebruikerservaring optimaliseren en de efficiëntie verhogen.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw webapplicatie project
          </Link>
        </div>
      </section>
    </>
  )
}
