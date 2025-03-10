"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function EcommercePlatformen() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom zijn e-commerce platformen cruciaal voor mijn bedrijf?",
      answer:
        "E-commerce platformen vormen de ruggengraat van uw online verkoopstrategie. Ze zorgen voor een naadloze winkelervaring, efficiënt voorraadbeheer en integratie met betaaloplossingen, wat leidt tot hogere conversies en groeiende omzet.",
    },
    {
      question: "Welke e-commerce oplossingen ontwikkelen jullie?",
      answer:
        "Wij bouwen op maat gemaakte e-commerce platformen met technologieën als Nuxt.js, Shopify, WooCommerce en Magento. Onze oplossingen zijn flexibel en schaalbaar, perfect afgestemd op uw bedrijfsbehoeften.",
    },
    {
      question: "Kunnen jullie bestaande systemen integreren met een nieuw e-commerce platform?",
      answer:
        "Ja, we zorgen voor een geïntegreerde oplossing door uw bestaande CRM-, ERP- en marketingtools naadloos te koppelen aan uw nieuwe e-commerce platform.",
    },
    {
      question: "Hoe waarborgen jullie de veiligheid van mijn online winkel?",
      answer:
        "Onze oplossingen voldoen aan de nieuwste beveiligingsstandaarden, met SSL-certificaten, veilige betaalmethodes en regelmatige updates om de veiligheid van uw klantdata te garanderen.",
    },
    {
      question: "Wat zijn de voordelen van een op maat gemaakt e-commerce platform?",
      answer:
        "Een custom e-commerce platform biedt u volledige controle over functionaliteiten, een unieke gebruikerservaring en de mogelijkheid om uw platform doorlopend te optimaliseren op basis van realtime data.",
    },
    {
      question: "Hoe lang duurt het om een e-commerce platform te ontwikkelen?",
      answer:
        "Afhankelijk van de complexiteit en functionaliteiten, duurt de ontwikkeling gemiddeld 3 tot 6 maanden, inclusief design, implementatie en testen.",
    },
    {
      question: "Kunnen jullie realtime analyses en rapportages integreren?",
      answer:
        "Zeker! Onze oplossingen voorzien u van realtime dashboards die inzicht bieden in verkoopcijfers, klantgedrag en voorraadbeheer, zodat u snel kunt bijsturen.",
    },
    {
      question: "Hoe zorgen jullie voor de schaalbaarheid van het platform?",
      answer:
        "Onze e-commerce platformen zijn opgebouwd met een modulaire architectuur, waardoor ze eenvoudig meegroeien met uw bedrijf en grote hoeveelheden verkeer en data aankunnen.",
    },
    {
      question: "Bieden jullie ondersteuning na de lancering?",
      answer:
        "Ja, wij bieden uitgebreide ondersteuning en onderhoud, inclusief regelmatige updates en 24/7 technische assistentie, zodat uw online winkel altijd optimaal functioneert.",
    },
    {
      question: "Hoe verloopt de migratie van bestaande webshops?",
      answer:
        "Wij verzorgen een zorgvuldige migratie van uw huidige webshopdata, zodat de overgang naar uw nieuwe platform soepel verloopt zonder verlies van informatie of functionaliteit.",
    },
  ]

  return (
    <div className="bg-white text-black">
      <HeroNieuw
        title={"E-commerce Platformen & Online Winkel Oplossingen"}
        description={
          "Versterk uw online verkoop met een op maat gemaakt e-commerce platform. Of u nu kiest voor Nuxt.js, Shopify, WooCommerce of Magento, onze oplossingen bieden een krachtige, veilige en schaalbare winkelervaring."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://videos.pexels.com/video-files/5527832/pexels-artem-podrez-5527832.mp4"}
      />

      {/* E-commerce Platformen Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row lg:items-center">
            {/* Linker kolom op desktop */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Krachtige Online Winkels
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Onze e-commerce platformen combineren de nieuwste technologieën met een intuïtief design, zodat uw klanten moeiteloos kunnen shoppen en u volledige controle heeft over uw online verkoop.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Naadloze integratie met betalingssystemen",
                    "Responsieve en gebruiksvriendelijke interfaces",
                    "Realtime data en gedetailleerde rapportages",
                    "Flexibele en schaalbare architectuur",
                    "Veilige en betrouwbare transacties",
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
                  Start uw e-commerce project vandaag nog!
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

      {/* Extra Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row-reverse lg:items-center">
            {/* Linker kolom op desktop */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Geavanceerde Integraties voor uw Winkel
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Of u nu kiest voor Shopify, WooCommerce, Magento of Nuxt.js, onze oplossingen integreren moeiteloos met uw bestaande systemen en ondersteunen de groei van uw bedrijf.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Koppeling met diverse e-commerce tools",
                    "Integratie met betalingsproviders",
                    "Uitgebreide product- en voorraadbeheerfuncties",
                    "Realtime updates en analyses",
                    "Volledige personalisatie van uw online winkel",
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
                  Start uw e-commerce project vandaag nog!
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

      {/* FAQ Sectie */}
      <section className="py-12 lg:py-24 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u antwoorden op de meest gestelde vragen over onze e-commerce platform ontwikkeling.
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
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
              <p className="text-gray-700 dark:text-white">
                Voor meer informatie over onze e-commerce platform ontwikkeling kunt u onze{" "}
                <Link href="contact" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">010 322 0410</span>. Ons deskundige team staat klaar om u te ondersteunen bij het realiseren van uw online verkoopstrategie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw online verkoop te boosten?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Ontwikkel een krachtig e-commerce platform dat uw producten perfect presenteert en uw omzet verhoogt.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw e-commerce project
          </Link>
        </div>
      </section>
    </div>
  )
}
