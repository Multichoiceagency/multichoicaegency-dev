"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/Hero-section"
import { PricingTable } from "@/components/pricing-table"

export default function FrontendDevelopmentPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat houdt frontend development in?",
      answer:
        "Frontend development richt zich op het bouwen van de visuele interface van een website. Dit omvat de layout, navigatie, interactieve elementen en animaties die samen zorgen voor een optimale gebruikerservaring.",
    },
    {
      question: "Welke voordelen biedt een moderne frontend?",
      answer:
        "Een moderne frontend zorgt voor een aantrekkelijke, gebruiksvriendelijke en snelle website. Dit verbetert de gebruikerservaring, verhoogt conversies en versterkt uw merkidentiteit.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor frontend development?",
      answer:
        "Wij maken gebruik van HTML5, CSS3, JavaScript en moderne frameworks zoals React, Vue of Angular, zodat we dynamische en schaalbare webapplicaties kunnen bouwen.",
    },
    {
      question: "Hoe lang duurt een typisch frontend project?",
      answer:
        "De ontwikkeltijd varieert per project, maar een standaard frontend project duurt meestal tussen de 4 en 8 weken.",
    },
    {
      question: "Bieden jullie ook optimalisatie voor snelheid en SEO?",
      answer:
        "Ja, naast een prachtig design zorgen we ervoor dat uw website snel laadt en technisch geoptimaliseerd is voor zoekmachines, wat resulteert in betere vindbaarheid en een optimale gebruikerservaring.",
    },
    {
      question: "Is mijn website volledig responsive?",
      answer:
        "Absoluut, wij zorgen ervoor dat uw website op elk apparaat perfect functioneert, of het nu gaat om desktops, tablets of mobiele telefoons.",
    },
  ];

  return (
      <> 
      {/* Hero Sectie */}
      <HeroNieuw
        title={"Frontend Development"}
        description={
          "Ontdek hoe wij moderne, responsive webapplicaties ontwikkelen die de gebruikerservaring optimaliseren en uw merk versterken."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={
          "https://cdn.dribbble.com/userupload/16036047/file/original-3d8c7117879ff2d2e9c9635c764b1f7b.mp4"
        }
      />
      

      {/* Overige Sectie met Extra Informatie en Video */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom kiezen voor frontend development?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                In het digitale tijdperk is een sterke frontend cruciaal voor een optimale gebruikerservaring. Onze aanpak zorgt voor snelle laadtijden, intuïtieve navigatie en een consistent design dat uw merk versterkt.
              </p>
              <Link
                href="/offerte-aanvragen"
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-black text-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
              >
                Start uw project vandaag nog
              </Link>
            </div>
            {/* Video Kolom */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <video
                className="w-full h-full object-contain rounded-md"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://cdn.dribbble.com/userupload/6441914/file/large-90209f3f4e3ea645eba4d185397ecf58.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

{/* About Section */}
<section className="py-12 lg:py-24 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="flex mb-4 items-center">
      <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
      </svg>
      <span className="inline-block ml-2 text-sm font-medium text-lime-500">
        Frontend Development Experts
      </span>
    </div>
    <div className="border-t border-gray-800 pt-16">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="flex flex-wrap lg:items-center lg:flex-row-reverse -mx-4">
          {/* Video Column */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="visible">
              <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                <source
                  src="https://cdn.dribbble.com/userupload/18427213/file/original-8ef1e6e4f7a2df1fcdfa7346ebbef47b.mp4"
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
                Frontend Development: De Sleutel tot een Sterke Digitale Ervaring
              </h1>
              <p className="text-lg text-gray-700 mb-10 dark:text-white">
                Een snelle, aantrekkelijke en gebruiksvriendelijke interface is essentieel voor het succes van elk digitaal product. Frontend development richt zich op de visuele en interactieve elementen die de gebruikerservaring bepalen.
              </p>
              <p className="text-lg text-gray-700 mb-10 dark:text-white">
                Bij MultiChoiceAgency zorgen we ervoor dat jouw website of applicatie niet alleen technisch geoptimaliseerd is, maar ook visueel en functioneel perfect aansluit bij je doelgroep. Wij bouwen responsieve en intuïtieve interfaces die conversies verhogen en de gebruikerservaring verbeteren.
              </p>

              <ul className="text-black">
                {[
                  "Schaalbare en Responsieve Webapplicaties",
                  "Pixel-Perfect UI Implementatie",
                  "Optimale Laadtijden en Prestaties",
                  "SEO-vriendelijke Structuren",
                  "Iteratieve Ontwikkeling en Continue Optimalisatie",
                ].map((item, index) => (
                  <li key={index} className="flex items-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="20" rx="10" fill="#BEF264"></rect>
                      <path
                        d="M14.8 6.40002L8.19995 13L5.19995 10"
                        stroke="#022C22"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="ml-3 text-sm text-black hover:text-green-600 font-black dark:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-sm font-bold text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start jouw development proces
                </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Process / Services Sectie */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-gray-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">
                Ons Frontend Ontwikkelingsproces
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Stap voor stap naar uw ideale frontend
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Concept en Design",
                    description:
                      "Wij starten met een uitgebreide intake en analyse van uw wensen en doelgroep om een uniek concept te ontwikkelen.",
                  },
                  {
                    title: "Prototype en Wireframing",
                    description:
                      "Vervolgens maken we wireframes en interactieve prototypes om de structuur en flow van uw website te visualiseren.",
                  },
                  {
                    title: "Ontwikkeling en Implementatie",
                    description:
                      "Onze ontwikkelaars bouwen de frontend met de nieuwste technologieën, zorgen voor een responsive design en implementeren alle gewenste functionaliteiten.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voordat de website live gaat, testen we deze op diverse apparaten en optimaliseren we laadtijden, performance en SEO.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na de lancering bieden we ondersteuning en onderhoud zodat uw website continu optimaal functioneert.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "We verzamelen gebruikersfeedback en passen waar nodig verbeteringen toe om de gebruikerservaring te maximaliseren.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-0">
                    <div className="flex flex-col h-full">
                      <h5 className="text-2xl font-medium text-white mt-6 mb-3">
                        {service.title}
                      </h5>
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

      {/* Veelgemaakte Fouten Section */}
<section className="py-12 lg:py-24 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="flex mb-4 items-center">
      <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
      </svg>
      <span className="inline-block ml-2 text-sm font-medium text-lime-500">
        Frontend Development Best Practices
      </span>
    </div>
    <div className="border-t border-gray-800 pt-16">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="flex flex-wrap lg:items-center -mx-4">
          {/* Video Kolom */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="visible">
              <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                <source
                  src="https://cdn.dribbble.com/userupload/15015906/file/original-6c66e9a715a4a163b1c89a764208494c.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Tekst Kolom */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-xl">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Veelgemaakte Fouten in Frontend Development
              </h1>
              <p className="text-lg text-gray-700 mb-10 dark:text-white">
                Bij het ontwikkelen van een website of applicatie kunnen er fouten ontstaan die de prestaties en gebruikerservaring negatief beïnvloeden. Vaak wordt er onvoldoende aandacht besteed aan optimalisatie, toegankelijkheid en schaalbaarheid.
              </p>
              <p className="text-lg text-gray-700 mb-10 dark:text-white">
                Door deze valkuilen te vermijden en een strategische aanpak te hanteren, zorgen wij bij **MultiChoiceAgency** voor snelle, responsieve en gebruiksvriendelijke digitale producten die conversies verhogen en de betrokkenheid van gebruikers stimuleren.
              </p>

              <ul className="text-black">
                <h3 className="text-lg py-3 font-bold dark:text-white">Cruciale Elementen van Sterk Frontend Development</h3>
                {[
                  "Snel en geoptimaliseerd laden voor betere prestaties",
                  "Responsieve ontwerpen die op elk apparaat werken",
                  "Duidelijke en intuïtieve navigatiestructuur",
                  "SEO-vriendelijke code en semantische HTML",
                  "Continue optimalisatie en iteratieve verbeteringen",
                ].map((item, index) => (
                  <li key={index} className="flex items-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="20" rx="10" fill="#BEF264"></rect>
                      <path
                        d="M14.8 6.40002L8.19995 13L5.19995 10"
                        stroke="#022C22"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="ml-3 text-sm text-black hover:text-green-700 font-black dark:text-white">
                      {item}
                    </span>
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

{/* Kosten Frontend Development */}
<section className="py-12 lg:py-24 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="flex mb-4 items-center">
      <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
      </svg>
      <span className="inline-block ml-2 text-sm font-medium text-lime-500">
        Wat Kost Professioneel Frontend Development?
      </span>
    </div>
    <div className="border-t border-gray-800 pt-16">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="flex flex-wrap lg:items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h3 className="font-heading text-2xl sm:text-2xl md:text-3xl mb-6 dark:text-white">
              Kosten van Frontend Development
            </h3>
            <div className="max-w-xl">
              <p className="text-lg text-gray-700 mb-10 dark:text-white">
                De kosten voor frontend development hangen af van de omvang en complexiteit van het project. Hieronder enkele belangrijke factoren die de investering bepalen:
              </p>

              <h2 className="text-xl font-semibold mt-6">Factoren die de kosten beïnvloeden</h2>
              <ul className="list-disc pl-5">
                <li>Schaal en complexiteit van de applicatie</li>
                <li>Gebruik van maatwerk versus bestaande componenten</li>
                <li>Performance-optimalisatie en SEO-instellingen</li>
                <li>Responsiviteit en compatibiliteit met verschillende apparaten</li>
                <li>Onderhoud, updates en doorlopende optimalisatie</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">Diensten die wij aanbieden</h2>
              <ul className="list-disc pl-5">
                <li>Ontwikkeling van snelle en schaalbare frontend-oplossingen</li>
                <li>UX/UI implementatie op basis van moderne frameworks</li>
                <li>SEO-geoptimaliseerde websites en webapplicaties</li>
                <li>Performance tuning en laadtijdoptimalisatie</li>
                <li>Langdurig onderhoud en updates voor doorlopende verbetering</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">Slim besparen op frontend development</h2>
              <ul className="list-disc pl-5">
                <li>Een duidelijke roadmap voorkomt onnodige aanpassingen</li>
                <li>Gebruik van bewezen technologieën en frameworks</li>
                <li>Iteratieve ontwikkeling voor continue verbetering</li>
              </ul>

              <p className="mt-6">
                Wil je weten wat frontend development voor jouw bedrijf kan betekenen? Neem contact met ons op voor een offerte op maat! 🚀
              </p>
              <div className="py-5">
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-sm font-black text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start jouw digitale transformatie vandaag nog
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="visible">
              <video className="w-full h-full object-cover rounded-md" autoPlay loop muted playsInline>
                <source
                  src="https://cdn.dribbble.com/userupload/34757330/file/large-ffae5f4b8eaa7b28420b21ff00ad5dbf.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FAQ Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over onze frontend development diensten.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 3).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left dark:bg-green-900/10 bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-gray-700 mt-4 dark:text-white">{item.answer}</p>
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
                {faqItems.slice(3).map((item, index) => (
                  <button
                    key={index + 3}
                    onClick={() => setOpenAccordion(openAccordion === index + 3 ? null : index + 3)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left dark:bg-green-900/10 bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium dark:text-white">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 3 ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-gray-700 dark:text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 3 ? (
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
              <h5 className="text-xl font-medium mb-4 dark:text-white">Nog vragen?</h5>
              <p className="text-gray-700 dark:text-white">
                Voor meer informatie over onze frontend development diensten kunt u onze{" "}
                <Link href="/contact" className="inline-block dark:text-white text-black font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{""}
                <Link href="tel:0103220410">
                <span className="text-black font-medium dark:text-white underline"> 010 322 04 10</span>.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw frontend te optimaliseren?</h2>
          <p className="text-xl mb-12">
            Laat uw online aanwezigheid stralen met een moderne en responsive website, gebouwd met professionele frontend development.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-lime-500 rounded-full transition duration-200"
          >
            Start uw project
          </Link>
        </div>
      </section>
      </>
  )
}
