"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"

export default function FrontendNextjs() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is Next.js een goede keuze voor frontend development?",
      answer:
        "Next.js is een krachtig React framework dat server-side rendering, statische site generatie, en client-side rendering combineert. Het biedt uitstekende prestaties, SEO-voordelen, en een ontwikkelaarsvriendelijke ervaring met functies zoals automatische code splitting en hot module replacement.",
    },
    {
      question: "Hoe lang duurt het om een Next.js project te ontwikkelen?",
      answer:
        "De ontwikkeltijd voor een Next.js project varieert afhankelijk van de complexiteit en omvang. Gemiddeld duurt een middelgroot project 6 tot 10 weken, inclusief ontwerp, ontwikkeling, testen en lancering. Dankzij de efficiëntie van Next.js kunnen we vaak sneller ontwikkelen dan met traditionele methoden.",
    },
    {
      question: "Kan ik mijn bestaande website migreren naar Next.js?",
      answer:
        "Ja, het is mogelijk om een bestaande website te migreren naar Next.js. We analyseren uw huidige site, bepalen de beste migratiestrategie, en bouwen uw site opnieuw op in Next.js. Dit proces kan incrementeel gebeuren, waardoor we pagina voor pagina kunnen migreren zonder uw huidige site te verstoren.",
    },
    {
      question: "Welke CMS-opties zijn er voor gebruik met Next.js?",
      answer:
        "Next.js is flexibel en kan met verschillende CMS-oplossingen worden geïntegreerd. Populaire opties zijn Contentful, Sanity, Strapi, en WordPress (als headless CMS). We kunnen ook statische site generators zoals Next.js met Markdown bestanden gebruiken voor eenvoudige content management.",
    },
    {
      question: "Hoe zorgen jullie voor optimale prestaties in Next.js projecten?",
      answer:
        "We optimaliseren Next.js projecten door gebruik te maken van ingebouwde performance features zoals automatische code splitting, lazy loading van componenten, en image optimization. Daarnaast implementeren we best practices voor caching, minimaliseren we externe dependencies, en gebruiken we server-side rendering of statische site generatie waar mogelijk.",
    },
    {
      question: "Wat zijn de voordelen van Next.js ten opzichte van traditionele single-page applications (SPAs)?",
      answer:
        "Next.js biedt several voordelen: betere SEO door server-side rendering, snellere initiële laadtijden, verbeterde prestaties op mobiele apparaten, en de mogelijkheid om zowel statische als dynamische pagina's te combineren. Het lost ook veel van de routeringsproblemen op die traditionele SPAs kunnen hebben.",
    },
    {
      question: "Hoe beïnvloedt Next.js de SEO van mijn website?",
      answer:
        "Next.js verbetert SEO aanzienlijk door server-side rendering en statische site generatie. Dit zorgt ervoor dat zoekmachines de content van uw site gemakkelijk kunnen indexeren. Bovendien zorgen de snelle laadtijden en goede Core Web Vitals scores, die Next.js helpt te bereiken, voor een betere ranking in zoekmachines.",
    },
    {
      question: "Kunnen jullie complexe applicaties bouwen met Next.js?",
      answer:
        "Absoluut! Next.js is geschikt voor het bouwen van complexe, schaalbare applicaties. We hebben ervaring met het ontwikkelen van e-commerce platforms, dashboards, en interactieve web applicaties met Next.js. Het framework biedt de flexibiliteit om zowel eenvoudige websites als geavanceerde web applicaties te bouwen.",
    },
    {
      question: "Hoe integreren jullie een CMS met Next.js?",
      answer:
        "We integreren CMS-systemen met Next.js door gebruik te maken van API routes en serverless functies. Voor headless CMS-oplossingen zoals Contentful of Sanity, gebruiken we hun API's om content op te halen tijdens build time of runtime. We kunnen ook traditionele CMS-systemen zoals WordPress headless maken en integreren met Next.js voor een krachtige, flexibele oplossing.",
    },
    {
      question: "Bieden jullie ondersteuning na de lancering van de Next.js website?",
      answer:
        "Ja, we bieden uitgebreide ondersteuning na de lancering. Dit omvat technische ondersteuning, hulp bij content updates via het gekozen CMS, performance monitoring, en regelmatige updates van Next.js en andere dependencies. We kunnen ook trainingen verzorgen zodat uw team zelf kleine wijzigingen kan doorvoeren en content kan beheren.",
    },
  ]

  return (
    <div>
      <HeroNieuw
        title={"Frontend Development met Next.js"}
        description={
          "Wij bouwen snelle, schaalbare en SEO-vriendelijke web applicaties met geheel gecodeerd op maat. Onze expertise in frontend development met Next.js zorgt voor een optimale gebruikerservaring en uitstekende prestaties. Ontdek hoe wij uw online aanwezigheid kunnen versterken met moderne web technologieën."
        }
        buttonText={"Offerte aanvragen"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/18815034/file/large-9ca330a421ea85088f775a8825e2a4f7.mp4"}
      />
      {/* Next.js Section */}
      <section className="py-12 lg:py-24 relative">
        <div className="container mx-auto px-4 ">
          <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-24">
            <div className="flex mb-6 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="ml-2 text-sm font-medium">Transformeer uw online aanwezigheid met Next.js</span>
            </div>
            <h1 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
              Wat is Next.js?
            </h1>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
              Next.js is een populair React framework voor het bouwen van moderne web applicaties. Het biedt een
              krachtige combinatie van server-side rendering, statische site generatie, en client-side rendering. Met
              Next.js kunt u snel performante, SEO-vriendelijke websites en applicaties ontwikkelen die uitstekend
              presteren op alle apparaten. Met de toenemende behoefte aan snelle, interactieve websites is Next.js niet
              langer een luxe, maar een essentiële tool voor moderne webontwikkeling. Het verbetert niet alleen de
              gebruikerservaring, maar ook de ontwikkelaarservaring, waardoor we efficiënter en effectiever kunnen
              werken.
            </p>
            <div className="flex flex-col sm:flex-row">
              <Link
                href="#"
                className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 h-full w-3/5">
          <video className="w-1/8 h-full object-cover rounded-md" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/16416668/file/large-fcb129b3f33829266b32e1c4d90e40e2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:hidden">
          <video className="w-full h-64 object-cover" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/16416668/file/large-fcb129b3f33829266b32e1c4d90e40e2.mp4"
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
                  Wij bouwen al jaren Next.js applicaties
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <h2 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
                  Waarom Next.js voor frontend development?
                </h2>
                <p className="text-xl font-medium mb-10">
                  Next.js is niet langer een luxe, maar een noodzaak in het huidige web development landschap. Met de
                  toenemende eisen voor snelheid, SEO, en gebruikerservaring, biedt Next.js de perfecte oplossing voor
                  moderne web applicaties.
                </p>
                <ul className="pl-5 mb-10">
                  <h4 className="font-bold">Waarom is Next.js Belangrijk voor Frontend Development?</h4>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Verbeterde prestaties door server-side rendering en statische generatie
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Uitstekende SEO door zoekmachine-vriendelijke content
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Snelle ontwikkeling met ingebouwde optimalisaties
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Flexibele integratie met verschillende CMS-oplossingen
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Schaalbaarheid voor zowel kleine als grote projecten
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">✅ Verbeterde ontwikkelaarservaring</li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-green-700 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                >
                  Start uw Next.js project vandaag!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-teal-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">Hoe Werkt Next.js Development?</span>
            </div>
            <div className="border-t border-white border-opacity-25 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een Next.js applicatie wordt gebouwd met behulp van:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "React Componenten",
                    description: "Herbruikbare UI-elementen voor een consistente en onderhoudbare codebase.",
                  },
                  {
                    title: "Server-side Rendering",
                    description: "Verbeterde prestaties en SEO door het renderen van pagina's op de server.",
                  },
                  {
                    title: "Statische Site Generatie",
                    description: "Bliksemsnelle laadtijden voor statische content en betere schaalbaarheid.",
                  },
                  {
                    title: "API Routes",
                    description: "Eenvoudige creatie van API endpoints voor serverless functionaliteit.",
                  },
                  {
                    title: "Automatische Code Splitting",
                    description: "Optimale laadtijden door het intelligent opsplitsen van code.",
                  },
                  {
                    title: "CSS-in-JS Ondersteuning",
                    description:
                      "Flexibele styling opties met ingebouwde ondersteuning voor populaire CSS-in-JS libraries.",
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
              Next.js ontwikkeling specialisten
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
                        src="https://cdn.dribbble.com/userupload/16003088/file/large-994c1045232a8f435939b8582d8dd7a5.mp4"
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
                      Bij het ontwikkelen van Next.js applicaties staat kwaliteit voorop. Onze aanpak is gericht op het
                      leveren van web applicaties die niet alleen aan uw verwachtingen voldoen, maar deze overtreffen.
                      Hier is wat u van ons kunt verwachten:
                    </p>
                    <ul>
                      {[
                        "Hoogwaardige, performante Next.js applicaties",
                        "Integratie met moderne CMS-oplossingen",
                        "SEO-geoptimaliseerde websites",
                        "Responsive design voor alle apparaten",
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
      <section className="py-12 lg:py-24 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">Veelgestelde vragen</h2>
            <p className="text-gray-700">
              Hier vindt u antwoorden op de meest gestelde vragen over Next.js en frontend development.
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
                <span>Voor meer informatie over Next.js en frontend development kunt u onze </span>
                <Link href="/contact" className="inline-block text-black font-medium underline">
                  Contactpagina
                </Link>
                <span> bezoeken of bel onze klantenservice op </span>
                <span className="text-black font-medium">010 322 04 10</span>
                <span>
                  . Ons toegewijde team staat klaar om u te helpen bij het realiseren van uw perfecte Next.js
                  applicatie.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw online aanwezigheid te versterken met Next.js?</h2>
          <p className="text-xl mb-12">
            Laat uw merk opvallen met een snelle, schaalbare en SEO-vriendelijke web applicatie gebouwd met Next.js.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-lime-500 rounded-full transition duration-200"
          >
            Start uw Next.js project
          </Link>
        </div>
      </section>
    </div>
  )
}

