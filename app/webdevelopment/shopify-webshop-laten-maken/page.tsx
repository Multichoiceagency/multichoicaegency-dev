"use client"

import { useState } from "react"
import Link from "next/link"
import { PricingTable } from "@/components/pricing-table" // Assuming this component exists
import HeroSection from "@/components/Hero-section"

export default function ShopifyWebshopPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat is een Shopify webshop en waarom is het populair?",
      answer:
        "Een Shopify webshop is een online winkel gebouwd op het Shopify platform. Het is populair vanwege de gebruiksvriendelijkheid, schaalbaarheid en krachtige e-commerce functies.",
    },
    {
      question: "Waarom zou ik kiezen voor een Shopify webshop laten maken?",
      answer:
        "Door te kiezen voor een Shopify webshop laten maken, krijg je een op maat gemaakte oplossing die perfect aansluit bij jouw merk en bedrijfsdoelstellingen, met de flexibiliteit en betrouwbaarheid van Shopify.",
    },
    {
      question: "Hoe verloopt het ontwikkelproces?",
      answer:
        "Ons proces omvat een intakegesprek, analyse van jouw wensen, ontwerp, ontwikkeling, testen en lancering. We zorgen voor een soepele overgang van concept naar live webshop.",
    },
    {
      question: "Kan ik zelf aanpassingen doen na de lancering?",
      answer:
        "Ja, Shopify is gebruiksvriendelijk en biedt een intuïtief CMS waarmee je zelf producten, content en andere elementen kunt beheren.",
    },
    {
      question: "Welke extra functionaliteiten kunnen we integreren?",
      answer:
        "We kunnen diverse integraties realiseren, zoals betalingsproviders, CRM-systemen, marketingtools en logistieke oplossingen, die de functionaliteit van jouw webshop verder uitbreiden.",
    },
    {
      question: "Hoe zit het met SEO en performance?",
      answer:
        "Onze Shopify webshops worden gebouwd met oog voor SEO en performance. Dit zorgt voor snelle laadtijden, betere vindbaarheid en een optimale gebruikerservaring.",
    },
    {
      question: "Wat zijn de kosten voor een Shopify webshop?",
      answer:
        "De kosten variëren afhankelijk van de complexiteit en specifieke wensen. Neem contact met ons op voor een op maat gemaakte offerte die past bij jouw budget.",
    },
    {
      question: "Bieden jullie ook ondersteuning en onderhoud na de lancering?",
      answer:
        "Ja, we bieden verschillende support- en onderhoudspakketten om ervoor te zorgen dat jouw webshop veilig, up-to-date en optimaal functionerend blijft.",
    },
  ]

  return (
    <>
      <HeroSection
        videoSrc="/partners/ui.mp4" // Example video, replace with a relevant Shopify/e-commerce video
        title="Professionele Shopify Webshops die Verkopen"
        description="Lanceer jouw online succes met een krachtige, op maat gemaakte Shopify webshop. Wij combineren design, technologie en e-commerce expertise voor maximale resultaten."
        buttonText="Start Jouw Webshop"
        buttonLink="/offerte-aanvragen"
      />

      {/* About Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">Shopify Webshop Experts</span>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center lg:flex-row-reverse -mx-4">
                {/* Video Column */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/16959454/file/large-5fd4f9cf4a1786cb189c4e74e5dce8d8.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                {/* Text Column */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
                      Shopify Webshop Laten Maken
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                      Een professionele Shopify webshop is de sleutel tot succes in e-commerce. Wij bouwen een op maat
                      gemaakte online winkel die jouw merk versterkt en zorgt voor een optimale gebruikerservaring.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                      Met een gebruiksvriendelijke interface, geïntegreerde betalingssystemen en krachtige
                      marketingtools is jouw Shopify webshop klaar voor de toekomst.
                    </p>

                    <ul className="text-gray-900 dark:text-white">
                      {[
                        "Gebruiksvriendelijk en Conversiegericht",
                        "Volledig Aangepast Design",
                        "Integratie van Betalings- en Marketingtools",
                        "SEO en Performance Geoptimaliseerd",
                        "Ondersteuning en Onderhoud",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center mb-4">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0"
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
                          <span className="ml-3 text-sm font-medium">{item}</span>
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

      {/* Content Section */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center -mx-4">
            {/* Text Column */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
                  Waarom kiezen voor Shopify?
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Shopify biedt een complete, schaalbare en gebruiksvriendelijke oplossing voor jouw online winkel.
                </p>
                <ul className="text-gray-900 dark:text-white mb-8">
                  {[
                    "Gemakkelijke Content Management",
                    "Betrouwbare Hosting en Beveiliging",
                    "Uitgebreide Integraties met Apps",
                    "Schaalbaarheid voor Groei",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center mb-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0"
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
                      <span className="ml-3 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-3 px-6 items-center justify-center text-base font-medium text-white bg-lime-600 hover:bg-lime-700 rounded-full transition duration-200"
                >
                  Start jouw webshop project vandaag nog
                </Link>
              </div>
            </div>

            {/* Video Column */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="visible">
                <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                  <source
                    src="https://cdn.dribbble.com/userupload/17394148/file/original-908f00def579149997e93e1d2ce33feb.mp4"
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
      <section className="p-4 bg-white dark:bg-gray-950">
        <div className="py-16 px-5 sm:px-8 xl:px-12 bg-gray-900 dark:bg-gray-800 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">
                Hoe Werkt Shopify Webshop Ontwikkeling?
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Ons proces voor jouw Shopify webshop omvat:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Intake en Analyse",
                    description:
                      "We starten met een diepgaand gesprek om jouw wensen, doelstellingen en doelgroep te begrijpen.",
                  },
                  {
                    title: "Concept en Ontwerp",
                    description:
                      "Op basis van de analyse ontwikkelen we een uniek concept en visueel ontwerp dat aansluit bij jouw merk.",
                  },
                  {
                    title: "Ontwikkeling en Integratie",
                    description:
                      "Onze specialisten bouwen jouw Shopify webshop, integreren alle gewenste functionaliteiten en zorgen voor een naadloze gebruikerservaring.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voordat de webshop live gaat, wordt deze grondig getest op alle apparaten en browsers, en geoptimaliseerd voor snelheid en SEO.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na een succesvolle lancering bieden we ondersteuning en onderhoud om de prestaties van jouw webshop te waarborgen.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "We verzamelen gebruikersfeedback en passen de webshop aan om continu te verbeteren en te groeien.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12">
                    <div className="flex flex-col h-full ">
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

      {/* FAQ Section */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Hier vindt u antwoorden op de meest gestelde vragen over Shopify webshop ontwikkeling.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-4xl">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 4).map(
                  (
                    item,
                    index, // Adjusted slice to 4 for even distribution
                  ) => (
                    <button
                      key={index}
                      onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                      className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-lime-700 dark:bg-lime-800/30 shadow-md rounded-2xl text-white"
                    >
                      <div className="pr-5">
                        <h5 className="text-lg font-medium">{item.question}</h5>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96 mt-4" : "max-h-0"}`}
                        >
                          <p className="text-gray-200 dark:text-gray-300">{item.answer}</p>
                        </div>
                      </div>
                      <span className="flex-shrink-0 text-lime-300 mt-1 transition-transform duration-300 transform ${openAccordion === index ? 'rotate-45' : ''}">
                        {openAccordion === index ? "−" : "+"}
                      </span>
                    </button>
                  ),
                )}
              </div>
              <div className="w-full lg:w-1/2 px-4">
                {faqItems.slice(4).map(
                  (
                    item,
                    index, // Adjusted slice to start from 4
                  ) => (
                    <button
                      key={index + 4} // Adjusted key
                      onClick={() => setOpenAccordion(openAccordion === index + 4 ? null : index + 4)} // Adjusted index for state
                      className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-lime-700 dark:bg-lime-800/30 shadow-md rounded-2xl text-white"
                    >
                      <div className="pr-5">
                        <h5 className="text-lg font-medium">{item.question}</h5>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 4 ? "max-h-96 mt-4" : "max-h-0"}`}
                        >
                          <p className="text-gray-200 dark:text-gray-300">{item.answer}</p>
                        </div>
                      </div>
                      <span className="flex-shrink-0 text-lime-300 mt-1 transition-transform duration-300 transform ${openAccordion === index + 4 ? 'rotate-45' : ''}">
                        {openAccordion === index + 4 ? "−" : "+"}
                      </span>
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Klaar om jouw Shopify webshop te lanceren?
          </h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Zet de eerste stap naar een succesvolle online winkel met een professionele Shopify webshop, op maat gemaakt
            voor jouw bedrijf.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/gratis-consult"
              className="bg-lime-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-lime-700 transition duration-300"
            >
              Vraag een gratis consult aan
            </Link>
            <Link
              href="/portfolio" // Assuming you have a portfolio page
              className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
            >
              Bekijk onze projecten
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
