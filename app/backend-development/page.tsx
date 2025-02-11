"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"

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
    <div className="bg-black text-white">
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
      <section className="py-12 lg:py-24 relative">
        <div className="container mx-auto px-4 ">
          <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-24">
            <div className="flex mb-6 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="2" fill="#BEF264"></rect>
                <circle cx="6" cy="6" r="4" fill="#022C22"></circle>
              </svg>
              <span className="ml-2 text-sm font-medium">
                Transformeer uw bedrijf met krachtige backend oplossingen
              </span>
            </div>
            <h1 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
              Wat is Backend Development?
            </h1>
            <p className="max-w-md xl:max-w-none text-lg text-gray-300 mb-10">
              Backend development vormt het fundament van moderne digitale oplossingen. Het omvat alle processen die
              achter de schermen plaatsvinden: van dataverwerking en -opslag tot beveiliging en integratie met externe
              systemen. Een robuuste backend zorgt voor snelle, schaalbare en betrouwbare applicaties die complexe taken
              kunnen uitvoeren en grote hoeveelheden data kunnen verwerken. Met de toenemende digitalisering is een
              sterke backend niet langer een luxe, maar een noodzaak voor bedrijven die willen innoveren en groeien in
              het digitale tijdperk.
            </p>
            <div className="flex flex-col sm:flex-row">
              <Link
                href="#"
                className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-black hover:text-white border border-lime-500 hover:border-white bg-lime-500 hover:bg-transparent rounded-full transition duration-200"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 h-full w-3/5">
          <video className="w-full h-full object-cover rounded-md" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/3370574/file/large-f8ab3e4b35d881d8bfbb5a27ca163c89.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:hidden">
          <video className="w-full h-64 object-cover" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/3370574/file/large-f8ab3e4b35d881d8bfbb5a27ca163c89.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="py-12 lg:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div className="lg:sticky lg:top-8 bg-gray-900 px-10 py-10 rounded-xl">
                <h2 className="font-heading text-7xl md:text-7xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.lime.500),theme(colors.gray.300),theme(colors.lime.300),theme(colors.white),theme(colors.lime.400),theme(colors.lime.500))] bg-[length:200%_auto] animate-gradient">
                  Wij bouwen al jaren krachtige backend systemen
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <h2 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
                  Waarom backend development?
                </h2>
                <p className="text-xl font-medium mb-10 text-gray-300">
                  Backend development is de ruggengraat van moderne digitale oplossingen. Het stelt bedrijven in staat
                  om complexe processen te automatiseren, grote hoeveelheden data te verwerken en schaalbare systemen te
                  bouwen die kunnen groeien met uw bedrijf.
                </p>
                <ul className="pl-5 mb-10 text-gray-300">
                  <h4 className="font-bold text-white">Waarom is Backend Development Belangrijk?</h4>
                  <li className="hover:text-lime-500 hover:font-bold">
                    ✅ Krachtige verwerking van complexe processen
                  </li>
                  <li className="hover:text-lime-500 hover:font-bold">✅ Veilige opslag en beheer van data</li>
                  <li className="hover:text-lime-500 hover:font-bold">✅ Schaalbaarheid voor groeiende bedrijven</li>
                  <li className="hover:text-lime-500 hover:font-bold">✅ Integratie met externe systemen en API's</li>
                  <li className="hover:text-lime-500 hover:font-bold">✅ Optimalisatie van applicatie prestaties</li>
                  <li className="hover:text-lime-500 hover:font-bold">✅ Fundament voor innovatieve features</li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-lime-500 hover:border-white bg-lime-500 hover:bg-transparent rounded-full transition duration-200"
                >
                  Start uw backend project vandaag!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-4 bg-black">
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
                {/* Afbeeldingsgedeelte */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/17938568/file/large-8ad20ebfa52322c8242d8c90f565dc45.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                {/* Tekstgedeelte */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">
                      Wat kun je van ons verwachten?
                    </h1>
                    <p className="text-lg text-gray-300 mb-10">
                      Bij het ontwikkelen van backend systemen en custom software staat kwaliteit voorop. Onze aanpak is
                      gericht op het leveren van oplossingen die niet alleen aan uw verwachtingen voldoen, maar deze
                      overtreffen. Hier is wat u van ons kunt verwachten:
                    </p>
                    <ul>
                      {[
                        "Schaalbare en robuuste architecturen",
                        "Hoogwaardige beveiliging en data-integriteit",
                        "Optimale prestaties en efficiëntie",
                        "Naadloze integratie met bestaande systemen",
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
                          <span className="ml-3 text-lg text-gray-300">{item}</span>
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
      <section className="py-12 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-white">Veelgestelde vragen</h2>
            <p className="text-gray-300">
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
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-black shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-400 mt-4">{item.answer}</p>
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
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-black shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index + 5 ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-400 mt-4">{item.answer}</p>
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
              <span className="inline-block mb-8">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                    fill="#BEF264"
                  ></path>
                  <path
                    d="M13.676 15.5617C11.7951 17.8602 10.6666 20.7983 10.6666 24C10.6666 27.2017 11.7951 30.1398 13.6761 32.4383L18.9201 27.1943C18.3372 26.2694 18 25.174 18 24C18 22.8259 18.3372 21.7306 18.92 20.8057L13.676 15.5617Z"
                    fill="#022C22"
                  ></path>
                  <path
                    d="M15.5616 13.6761L20.8056 18.9201C21.7306 18.3372 22.8259 18 24 18C25.174 18 26.2694 18.3372 27.1943 18.9201L32.4383 13.6761C30.1398 11.7951 27.2017 10.6666 24 10.6666C20.7982 10.6666 17.8601 11.7951 15.5616 13.6761Z"
                    fill="#022C22"
                  ></path>
                  <path
                    d="M34.3239 15.5617L29.0799 20.8057C29.6628 21.7307 30 22.8259 30 24C30 25.174 29.6627 26.2693 29.0799 27.1943L34.3238 32.4383C36.2048 30.1398 37.3333 27.2017 37.3333 24C37.3333 20.7983 36.2048 17.8602 34.3239 15.5617Z"
                    fill="#022C22"
                  ></path>
                  <path
                    d="M32.4382 34.3239L27.1942 29.0799C26.2693 29.6628 25.174 30 24 30C22.8259 30 21.7307 29.6628 20.8057 29.0799L15.5617 34.3239C17.8602 36.2048 20.7983 37.3333 24 37.3333C27.2016 37.3333 30.1397 36.2048 32.4382 34.3239Z"
                    fill="#022C22"
                  ></path>
                </svg>
              </span>
              <h5 className="text-xl font-medium mb-4 text-white">Nog vragen?</h5>
              <p className="text-gray-300">
                <span>Voor meer informatie over backend development en custom software kunt u onze </span>
                <Link href="#" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>
                <span> bezoeken of bel onze klantenservice op </span>
                <span className="text-lime-500 font-medium">071 203 24 88</span>
                <span>
                  . Ons toegewijde team staat klaar om u te helpen bij het realiseren van uw perfecte backend oplossing.
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
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-lime-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw backend project
          </Link>
        </div>
      </section>
    </div>
  )
}

