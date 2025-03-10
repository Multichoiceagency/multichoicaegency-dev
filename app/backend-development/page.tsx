"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import Image from "next/image";
import { PricingTable } from "@/components/pricing-table";

export default function BackendDevelopment() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is backend development belangrijk voor mijn bedrijf?",
      answer:
        "Backend development is essentieel voor uw digitale oplossingen. Het zorgt voor de krachtige infrastructuur achter uw applicaties, waardoor complexe functionaliteiten, dataverwerking en beveiliging mogelijk worden. Dit verbetert de prestaties, schaalbaarheid en betrouwbaarheid van uw software.",
    },
    {
      question: "Hoe lang duurt het om een custom software of app te ontwikkelen?",
      answer:
        "De ontwikkeltijd voor custom software of een app varieert afhankelijk van de complexiteit en omvang van het project. Gemiddeld duurt het proces 3 tot 6 maanden, inclusief planning, ontwikkeling, testen en implementatie. We houden u gedurende het hele proces op de hoogte van de voortgang.",
    },
    {
      question: "Kunnen jullie mijn bestaande systemen integreren met nieuwe backend oplossingen?",
      answer:
        "Ja, we specialiseren ons in het integreren van bestaande systemen met nieuwe backend oplossingen. We analyseren uw huidige infrastructuur, identificeren integratiepunten en ontwikkelen aangepaste API's of middleware om naadloze communicatie tussen systemen te garanderen.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor backend development?",
      answer:
        "We gebruiken moderne technologieën zoals Node.js, Python (Django/Flask), Java (Spring), en .NET voor backend ontwikkeling. Voor databases werken we met SQL (PostgreSQL, MySQL) en NoSQL (MongoDB, Cassandra) oplossingen. We passen ook cloud-native ontwikkeling toe met AWS, Azure of Google Cloud Platform.",
    },
    {
      question: "Hoe zorgen jullie voor de beveiliging van backend systemen?",
      answer:
        "Beveiliging is onze topprioriteit. We implementeren best practices zoals versleuteling van data in rust en in transit, veilige authenticatie en autorisatie mechanismen, regelmatige beveiligingsaudits, en naleving van industriestandaarden zoals OWASP. We zorgen ook voor regelmatige updates en patches om uw systemen te beschermen tegen nieuwe bedreigingen.",
    },
    {
      question: "Wat zijn de voordelen van custom software ten opzichte van off-the-shelf oplossingen?",
      answer:
        "Custom software biedt verschillende voordelen: perfecte aansluiting bij uw bedrijfsprocessen, volledige controle over functionaliteiten en schaalbaarheid, betere integratie met bestaande systemen, verhoogde efficiëntie door op maat gemaakte workflows, en een concurrentievoordeel door unieke oplossingen die niet beschikbaar zijn voor uw concurrenten.",
    },
    {
      question: "Hoe gaan jullie om met schaalbaarheid in backend ontwikkeling?",
      answer:
        "Schaalbaarheid is een kernprincipe in onze ontwikkelingsaanpak. We ontwerpen systemen met het oog op toekomstige groei, gebruikmakend van microservices architectuur, load balancing, en auto-scaling oplossingen. We implementeren ook caching strategieën en optimaliseren database queries om prestaties te garanderen bij toenemende belasting.",
    },
    {
      question: "Kunnen jullie complexe algoritmen en data-intensieve processen implementeren?",
      answer:
        "Absoluut! We hebben ruime ervaring met het ontwikkelen van complexe algoritmen en het verwerken van grote hoeveelheden data. Of het nu gaat om machine learning modellen, real-time data processing, of complexe business logic, we zorgen voor efficiënte en schaalbare implementaties die voldoen aan uw specifieke behoeften.",
    },
    {
      question: "Hoe zorgen jullie voor onderhoud en ondersteuning na de lancering?",
      answer:
        "We bieden uitgebreide ondersteuning na de lancering. Dit omvat 24/7 monitoring, regelmatige updates en patches, performance optimalisatie, en technische ondersteuning. We kunnen ook trainingen verzorgen voor uw team en bieden verschillende support levels aan, van basis onderhoud tot volledig beheerde diensten.",
    },
    {
      question: "Hoe gaan jullie om met data migratie bij het overstappen naar een nieuw systeem?",
      answer:
        "Data migratie is een cruciaal onderdeel van veel projecten. We volgen een zorgvuldig proces van data-analyse, mapping, en transformatie. We ontwikkelen aangepaste scripts voor de migratie, voeren uitgebreide tests uit, en plannen de migratie zo dat er minimale downtime is voor uw bedrijf. We zorgen ook voor back-ups en rollback-plannen voor het geval er onvoorziene problemen optreden.",
    },
  ]

  return (
    <div className="bg-white text-black">
      <HeroNieuw
        title={"Backend Development & Custom Software"}
        description={
          "Versterk uw digitale infrastructuur met krachtige backend oplossingen. Onze expertise in backend development en custom software zorgt voor schaalbare, veilige en efficiënte systemen die uw bedrijf naar het volgende niveau tillen. Ontdek hoe wij uw ideeën kunnen omzetten in robuuste digitale realiteit."
        }
        buttonText={"Offerte aanvragen"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/17855128/file/large-45aef91c794d3dfe747127edc550fd15.mp4"}
      />
      {/* Backend Development Section */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 lg:flex-row lg:items-center">
          {/* LINKER KOLOM OP DESKTOP (maar in HTML als eerste, dus RECHTS op mobiel) */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-xl">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
              Sterke backend voor toekomstbestendige oplossingen
              </h1>
              <p className="text-lg text-gray-700 mb-1 dark:text-white">
              Een goed ontwikkelde backend zorgt voor stabiliteit, veiligheid en schaalbaarheid binnen jouw digitale omgeving. Met een doordacht systeem stroomlijn je bedrijfsprocessen en maximaliseer je efficiëntie.
              </p>
              <ul className="text-black py-5">
                {[
                  "Automatisering van complexe workflows",
                  "Betrouwbare en veilige data-opslag",
                  "Flexibel en schaalbaar voor groei",
                  "Eenvoudige integratie met externe software en API’s",
                  "De basis voor slimme en innovatieve toepassingen",
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
                Start jouw backend project vandaag nog!
              </Link>
            </div>
            </div>

                    {/* RECHTER KOLOM OP DESKTOP (maar in HTML als tweede, dus ONDER op mobiel) */}
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
                  src="https://cdn.dribbble.com/userupload/2956351/file/original-3e80fcc86b8a3b5340a1864832c8a82c.mp4"
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
          {/* LINKER KOLOM OP DESKTOP (maar in HTML als eerste, dus RECHTS op mobiel) */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-xl">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
              Optimale controle over jouw data
              </h1>
              <p className="text-lg text-gray-700 mb-1 dark:text-white">
              Moderne backend development vormt de kern van digitale innovatie. Het zorgt voor efficiënte automatisering, veilige opslag en naadloze integratie met andere systemen, zodat jouw bedrijf altijd klaar is voor groei.              </p>
              <ul className="text-black py-5">
                {[
                  "Robuuste verwerking van complexe processen",
                  "Geavanceerde en veilige dataopslag",
                  "Schaalbare infrastructuur die meegroeit",
                  "Slimme koppelingen met externe systemen en API’s",
                  "Stevige basis voor innovatieve functionaliteiten",
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
                Start jouw backend project vandaag nog!
              </Link>
            </div>
          </div>

          {/* RECHTER KOLOM OP DESKTOP (maar in HTML als tweede, dus ONDER op mobiel) */}
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
                  src="https://cdn.dribbble.com/userupload/3370574/file/large-f8ab3e4b35d881d8bfbb5a27ca163c89.mp4"
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
              <span className="inline-block ml-2 text-sm font-medium text-white">Hoe Werkt Backend Development?</span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een robuuste backend wordt gebouwd met behulp van:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Schaalbare architectuur",
                    description: "Ontwerp dat meegroeit met uw bedrijfsbehoeften en gebruikersaantallen.",
                  },
                  {
                    title: "Efficiënte databases",
                    description: "Optimale dataopslag en -retrieval voor snelle en betrouwbare prestaties.",
                  },
                  {
                    title: "Krachtige API's",
                    description: "Interfaces die naadloze communicatie tussen verschillende systemen mogelijk maken.",
                  },
                  {
                    title: "Robuuste beveiliging",
                    description: "Geavanceerde maatregelen om uw data en systemen te beschermen.",
                  },
                  {
                    title: "Cloud-integratie",
                    description: "Flexibele en schaalbare oplossingen met gebruik van cloud-technologieën.",
                  },
                  {
                    title: "Prestatie-optimalisatie",
                    description: "Technieken om de snelheid en efficiëntie van uw systemen te maximaliseren.",
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
              Backend development specialisten
            </span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/users/745262/screenshots/17629963/media/718b7bf2a71129bcd8531280baa6de02.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">
                      Wat kun je van ons verwachten?
                    </h1>
                    <p className="text-lg text-gray-700 mb-10">
                      Bij het ontwikkelen van backend systemen en custom software staat kwaliteit voorop. Onze aanpak is
                      gericht op het leveren van oplossingen die niet alleen aan uw verwachtingen voldoen, maar deze
                      overtreffen. Hier is wat u van ons kunt verwachten:
                    </p>
                    <ul className="text-black">
                      {[
                        "Krachtige verwerking van complexe processen",
                        "Veilige opslag en beheer van data",
                        "Schaalbaarheid voor groeiende bedrijven",
                        "Integratie met externe systemen en API's",
                        "Fundament voor innovatieve features",
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
              Hier vindt u antwoorden op de meest gestelde vragen over backend development en custom software.
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
                <Image src="/logos/logo.png" 
                alt={""}
                  height={800}
                  width={400}>
                </Image>
              </span>
              <h5 className="text-4xl font-medium mb-4 text-black dark:text-white">Heb je nog vragen?</h5>
              <p className="text-gray-700">
                <span>Voor meer informatie over backend development en custom software kunt u onze </span>
                <Link href="#" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>
                <span> bezoeken of bel onze klantenservice op </span>
                <span className="text-lime-500 font-medium">010 322 04 10</span>
                <span>
                Ons toegewijde team staat klaar om u te helpen bij het realiseren van uw perfecte backend oplossing.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw digitale infrastructuur te versterken?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Laat uw bedrijf groeien met krachtige, schaalbare backend oplossingen en custom software die perfect
            aansluiten bij uw doelstellingen.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw backend project
          </Link>
        </div>
      </section>
    </div>
  )
}

