"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/Hero-section"

export default function HeadlessEcommerce() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat is headless e-commerce en waarom is het belangrijk voor mijn bedrijf?",
      answer:
        "Headless e-commerce is een aanpak waarbij de frontend (presentatielaag) wordt gescheiden van de backend (e-commerce functionaliteit). Dit biedt flexibiliteit in het ontwerp, snellere laadtijden, en de mogelijkheid om content via meerdere kanalen te distribueren. Het is belangrijk omdat het bedrijven in staat stelt snel te innoveren, de gebruikerservaring te optimaliseren en zich aan te passen aan veranderende markteisen.",
    },
    {
      question: "Hoe lang duurt het om een headless e-commerce platform te ontwikkelen?",
      answer:
        "De ontwikkeltijd voor een headless e-commerce platform varieert afhankelijk van de complexiteit en omvang van het project. Gemiddeld duurt het proces 12 tot 20 weken, inclusief planning, ontwikkeling van de backend API, frontend implementatie, integraties, testen en lancering. We houden u gedurende het hele proces op de hoogte van de voortgang.",
    },
    {
      question: "Kan ik mijn bestaande e-commerce website ombouwen naar een headless architectuur?",
      answer:
        "Ja, het is mogelijk om een bestaande e-commerce website om te bouwen naar een headless architectuur. We analyseren uw huidige systeem, identificeren de nodige aanpassingen, en ontwikkelen een migratiestrategie die minimale verstoring van uw bedrijfsactiviteiten garandeert. Dit proces omvat het ontkoppelen van de frontend, het creëren van een robuuste API-laag, en het herimplementeren van de frontend met moderne technologieën.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor headless e-commerce ontwikkeling?",
      answer:
        "We gebruiken moderne technologieën die optimaal geschikt zijn voor headless architecturen. Voor de backend API werken we vaak met Node.js, Python, of .NET Core. Voor de frontend gebruiken we frameworks zoals React, Vue.js, of Next.js voor server-side rendering en optimale prestaties. We integreren ook headless CMS-oplossingen zoals Contentful of Strapi voor contentbeheer, en werken met e-commerce platforms zoals Commercetools of Shopify Plus die sterke API-ondersteuning bieden.",
    },
    {
      question: "Hoe zorgen jullie voor de beveiliging van een headless e-commerce platform?",
      answer:
        "Beveiliging is een topprioriteit in onze headless e-commerce ontwikkeling. We implementeren robuuste authenticatie en autorisatie mechanismen, gebruiken HTTPS voor alle communicatie, en zorgen voor veilige API-endpoints. We voeren regelmatige beveiligingsaudits uit, implementeren best practices voor databeveiliging, en zorgen voor naleving van relevante regelgeving zoals GDPR en PCI DSS voor betalingsverwerking.",
    },
    {
      question: "Wat zijn de voordelen van headless e-commerce ten opzichte van traditionele e-commerce oplossingen?",
      answer:
        "Headless e-commerce biedt verschillende voordelen: grotere flexibiliteit in frontend ontwikkeling, verbeterde prestaties en laadsnelheden, eenvoudigere omnichannel implementatie, betere schaalbaarheid, en de mogelijkheid om snel nieuwe features en interfaces te implementeren zonder de backend te beïnvloeden. Het stelt bedrijven in staat om snel te innoveren en zich aan te passen aan veranderende marktomstandigheden en klantverwachtingen.",
    },
    {
      question: "Hoe beïnvloedt headless e-commerce de SEO van mijn online winkel?",
      answer:
        "Headless e-commerce kan een positieve invloed hebben op SEO. Door de scheiding van frontend en backend kunnen we de presentatielaag optimaliseren voor zoekmachines zonder beperkingen van de e-commerce engine. Dit maakt het mogelijk om snellere, meer responsieve sites te bouwen, wat gunstig is voor SEO. Bovendien kunnen we gemakkelijker server-side rendering implementeren, wat cruciaal is voor zoekmachineoptimalisatie.",
    },
    {
      question: "Kunnen jullie geavanceerde e-commerce functionaliteiten implementeren in een headless architectuur?",
      answer:
        "Absoluut! Headless architectuur is bij uitstek geschikt voor het implementeren van geavanceerde functionaliteiten. We kunnen complexe productconfigurators, gepersonaliseerde aanbevelingssystemen, real-time voorraadmanagement, en geavanceerde zoek- en filterfuncties implementeren. De flexibiliteit van headless maakt het ook eenvoudiger om AI en machine learning te integreren voor verbeterde klantervaringen.",
    },
    {
      question: "Hoe zorgen jullie voor een consistente merkbeleving in een headless e-commerce omgeving?",
      answer:
        "Consistente merkbeleving in een headless omgeving wordt bereikt door een goed ontworpen contentstrategieën en een sterk design system. We ontwikkelen een centraal beheerd design system dat across alle touchpoints wordt toegepast. Door gebruik te maken van een headless CMS, zorgen we ervoor dat content consistent wordt beheerd en gedistribueerd naar alle kanalen, of het nu gaat om web, mobiel, of andere interfaces.",
    },
    {
      question: "Bieden jullie ondersteuning na de lancering van het headless e-commerce platform?",
      answer:
        "Ja, we bieden uitgebreide ondersteuning na de lancering. Dit omvat technische ondersteuning, monitoring van API-prestaties, optimalisatie van de frontend, en hulp bij het beheer van de content en producten via de headless systemen. We kunnen ook trainingen verzorgen zodat uw team effectief kan werken met de nieuwe headless architectuur en de bijbehorende tools en processen.",
    },
  ]

  return (
    <div>
      <HeroNieuw
        title={"Headless E-commerce Ontwikkeling"}
        description={
          "Transformeer uw online verkoop met geavanceerde headless e-commerce oplossingen. Onze expertise in headless architectuur zorgt voor flexibele, schaalbare en hoogpresterende e-commerce platforms die perfect aansluiten bij uw merk en groeistrategie. Ontdek hoe wij uw e-commerce naar het volgende niveau kunnen tillen met innovatieve headless technologie."
        }
        buttonText={"Onze diensten"}
        buttonLink={"diensten"}
        videoSrc={"https://cdn.dribbble.com/users/3667298/screenshots/16292773/media/d8981b37fd523a5100f9cfec8f55cd08.mp4"}
      />
      {/* Headless E-commerce Section */}
      <section className="py-12 lg:py-24 relative">
        <div className="container mx-auto px-4 ">
          <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-24">
            <div className="flex mb-6 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="ml-2 text-sm font-medium">Revolutioneer uw online verkoop met headless e-commerce</span>
            </div>
            <h1 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
              Wat is Headless E-commerce Ontwikkeling?
            </h1>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
              Headless e-commerce ontwikkeling is een innovatieve benadering waarbij de frontend (presentatielaag) wordt
              gescheiden van de backend (e-commerce functionaliteit). Deze architectuur biedt ongekende flexibiliteit,
              schaalbaarheid en prestaties. Het stelt bedrijven in staat om snel te innoveren, naadloos over meerdere
              kanalen te verkopen, en gepersonaliseerde klantervaringen te creëren. In het huidige digitale landschap,
              waar omnichannel aanwezigheid en snelle aanpassing aan marktveranderingen cruciaal zijn, biedt headless
              e-commerce een competitief voordeel en toekomstbestendige oplossing voor ambitieuze online retailers.
            </p>
            <div className="flex flex-col sm:flex-row">
              <Link
                href="offerte-aanvragen"
                className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 h-full w-3/5">
          <video className="w-21/9 h-full object-contain rounded-xl" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/users/852957/screenshots/11178938/media/3b01fb814fc0a9f310eb6adfd06a4c2b.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:hidden">
          <video className="w-full h-64 object-contain" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/users/852957/screenshots/11178938/media/3b01fb814fc0a9f310eb6adfd06a4c2b.mp4"
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
              <div className="lg:sticky lg:top-8 bg-black/10 px-10 py-10 rounded-xl">
                <h2 className="font-heading text-7xl md:text-7xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.700),theme(colors.gray.500),theme(colors.green.400),theme(colors.black),theme(colors.green.300),theme(colors.green.700))] bg-[length:200%_auto] animate-gradient">
                  Wij bouwen al jaren innovatieve headless e-commerce platforms
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <h2 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
                  Waarom kiezen voor headless e-commerce?
                </h2>
                <p className="text-xl font-medium mb-10">
                  Headless e-commerce is de sleutel tot flexibiliteit en innovatie in de online retailwereld. Het biedt
                  niet alleen een krachtig platform om uw producten te verkopen, maar stelt u ook in staat om snel te
                  reageren op veranderende marktomstandigheden en klantverwachtingen.
                </p>
                <ul className="pl-5 mb-10">
                  <h4 className="font-bold">Waarom is Headless E-commerce Belangrijk?</h4>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Ongeëvenaarde flexibiliteit in frontend ontwikkeling
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">✅ Verbeterde prestaties en laadsnelheden</li>
                  <li className="hover:text-green-700 hover:font-bold">✅ Naadloze omnichannel integratie</li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Snellere time-to-market voor nieuwe features
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Betere schaalbaarheid voor groeiende bedrijven
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Toekomstbestendig en technologie-agnostisch
                  </li>
                </ul>
                <Link
                  href="offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-green-700 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                >
                  Gratis kennismakings gesprek
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="h-96vh">
                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2r-BtK2ByjLdjbUzHD56gv5PjOLFiNHnB-Oso70N81dDkz_lVzTcx3r8AaqK1G3248W7QF59lc?gv=true" className="border: 0" width="100%" height="600" frameBorder="0"></iframe>
                </section>

      {/* Services Section */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-teal-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">
                Hoe Werkt Headless E-commerce Ontwikkeling?
              </span>
            </div>
            <div className="border-t border-white border-opacity-25 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een geavanceerd headless e-commerce platform wordt gebouwd met:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "API-first architectuur",
                    description: "Robuuste API's die de backend functionaliteit ontsluiten voor diverse frontends.",
                  },
                  {
                    title: "Flexibele frontend",
                    description:
                      "Onafhankelijke frontend ontwikkeling met moderne frameworks voor optimale gebruikerservaringen.",
                  },
                  {
                    title: "Microservices",
                    description: "Modulaire opbouw voor betere schaalbaarheid en eenvoudiger onderhoud.",
                  },
                  {
                    title: "Headless CMS",
                    description: "Contentbeheer los van de presentatielaag voor maximale flexibiliteit.",
                  },
                  {
                    title: "Cloud-native infrastructuur",
                    description: "Schaalbare en betrouwbare hosting oplossingen voor optimale prestaties.",
                  },
                  {
                    title: "Geavanceerde integraties",
                    description:
                      "Naadloze verbinding met diverse systemen en diensten voor uitgebreide functionaliteit.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-0">
                    <div className="flex flex-col h-full">
                      <h5 className="text-2xl font-medium text-white mt-6 mb-3">{service.title}</h5>
                      <p className="text-white opacity-80 mb-6">{service.description}</p>
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
              <circle cx="4" cy="4" r="4" fill="#022C22"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-teal-900">
              Headless e-commerce ontwikkeling specialisten
            </span>
          </div>
          <div className="border-t pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center -mx-4">
                {/* Afbeeldingsgedeelte */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/20585023/file/large-3394f84a5d0fd476b5b595c6b9942b90.mp4"
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
                    <p className="text-lg text-gray-700 mb-10">
                      Bij het ontwikkelen van een headless e-commerce platform staat innovatie en prestatie voorop. Onze
                      aanpak is gericht op het leveren van flexibele, schaalbare oplossingen die niet alleen aan uw
                      huidige eisen voldoen, maar ook toekomstige groei ondersteunen. Hier is wat u van ons kunt
                      verwachten:
                    </p>
                    <ul>
                      {[
                        "API-first ontwikkeling voor maximale flexibiliteit",
                        "Geavanceerde frontend architecturen voor optimale prestaties",
                        "Naadloze integratie met bestaande systemen",
                        "Omnichannel strategie implementatie",
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
                              stroke="#1D1F1E"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span className="ml-3 text-lg">{item}</span>
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
      <section className="py-12 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">Veelgestelde vragen</h2>
            <p className="text-gray-700">
              Hier vindt u antwoorden op de meest gestelde vragen over headless e-commerce ontwikkeling.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 5).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-700 mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#1D1F1E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 5.69995V18.3"
                            stroke="#1D1F1E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#1D1F1E"
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
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index + 5 ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-700 mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 5 ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#1D1F1E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 5.69995V18.3"
                            stroke="#1D1F1E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#1D1F1E"
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
              <h5 className="text-xl font-medium mb-4">Nog vragen?</h5>
              <p className="text-gray-700">
                <span>Voor meer informatie over headless e-commerce ontwikkeling kunt u onze </span>
                <Link href="#" className="inline-block text-black font-medium underline">
                  Contactpagina
                </Link>
                <span> bezoeken of bel onze klantenservice op </span>
                <span className="text-black font-medium">010 322 04 10</span>
                <span>
                  . Ons toegewijde team staat klaar om u te helpen bij het realiseren van uw innovatieve headless
                  e-commerce platform.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Klaar om uw e-commerce naar een hoger niveau te tillen met headless technologie?
          </h2>
          <p className="text-xl mb-12">
            Laat uw e-commerce dromen werkelijkheid worden met een innovatief, flexibel en schaalbaar headless platform
            dat perfect aansluit bij uw merk en groeistrategie.
          </p>
          <Link
            href="offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-lime-500 rounded-full transition duration-200"
          >
            Start uw headless e-commerce project
          </Link>
        </div>
      </section>
    </div>
  )
}

