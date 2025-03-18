"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function MarketingAutomatisering() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is marketing automatisering belangrijk voor mijn bedrijf?",
      answer:
        "Marketing automatisering stroomlijnt uw campagnes, verhoogt de efficiëntie en zorgt voor een gerichte communicatie met uw doelgroep. Dit leidt tot hogere conversies en een betere klantbeleving.",
    },
    {
      question: "Hoe lang duurt de implementatie van een marketing automatiseringsoplossing?",
      answer:
        "De implementatietijd is afhankelijk van de complexiteit van uw marketingstrategie, maar gemiddeld kunt u binnen 2 tot 4 maanden een operationeel systeem verwachten.",
    },
    {
      question: "Kunnen jullie bestaande CRM- en marketingtools integreren?",
      answer:
        "Ja, wij zorgen voor een naadloze integratie met uw huidige systemen zodat al uw marketingdata centraal beheerd wordt en uw campagnes optimaal worden aangestuurd.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor marketing automatisering?",
      answer:
        "Wij maken gebruik van toonaangevende platforms zoals HubSpot, Marketo en custom API-integraties, aangevuld met moderne webtechnologieën om flexibele en schaalbare oplossingen te bouwen.",
    },
    {
      question: "Hoe waarborgen jullie de veiligheid en privacy van klantdata?",
      answer:
        "Wij hanteren strikte beveiligingsprotocollen en voldoen aan de geldende privacywetgeving, zodat uw klantgegevens altijd veilig worden verwerkt en opgeslagen.",
    },
    {
      question: "Wat zijn de voordelen van een op maat gemaakte automatiseringsoplossing?",
      answer:
        "Een custom oplossing sluit naadloos aan op uw unieke bedrijfsprocessen en marketingbehoeften, waardoor u sneller kunt inspelen op marktveranderingen en de klantbeleving optimaliseert.",
    },
    {
      question: "Hoe zorgen jullie voor de schaalbaarheid van het systeem?",
      answer:
        "Onze systemen zijn ontworpen om met uw organisatie mee te groeien. Ze kunnen grote hoeveelheden data en toenemende campagnevereisten aan zonder prestatieverlies.",
    },
    {
      question: "Kunnen jullie realtime analyses en rapportages integreren?",
      answer:
        "Absoluut! Wij implementeren realtime dashboards en rapportagetools, zodat u continu inzicht heeft in de prestaties van uw marketingcampagnes en direct kunt bijsturen waar nodig.",
    },
    {
      question: "Hoe verloopt de ondersteuning na implementatie?",
      answer:
        "Wij bieden uitgebreide ondersteuning en onderhoud, inclusief regelmatige updates en 24/7 technische assistentie, zodat uw marketing automatisering altijd optimaal functioneert.",
    },
    {
      question: "Hoe gaan jullie om met de migratie van bestaande marketingdata?",
      answer:
        "Wij verzorgen een zorgvuldige migratie van uw huidige data, waarbij compatibiliteit en veiligheid centraal staan, zodat de overgang naar het nieuwe systeem soepel verloopt.",
    },
  ]

  return (
<>      <HeroNieuw
        title={"Marketing Automatisering & Geautomatiseerde Campagnes"}
        description={
          "Boost uw marketinginspanningen met geavanceerde automatiseringsoplossingen. Onze systemen stroomlijnen uw campagnes, verbeteren klantinteracties en optimaliseren uw ROI."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://videos.pexels.com/video-files/5527832/pexels-artem-podrez-5527832.mp4"}
      />

      {/* Marketing Automatisering Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row lg:items-center">
            {/* Linker kolom op desktop */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Efficiënte Marketingcampagnes
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Onze marketing automatiseringsoplossingen stellen u in staat om uw campagnes te automatiseren en te optimaliseren. Hierdoor bereikt u uw doelgroep op het juiste moment en verhoogt u uw conversie.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Geautomatiseerde e-mailcampagnes",
                    "Realtime data en analyses",
                    "Integratie met CRM en sociale media",
                    "A/B-testen en optimalisatie",
                    "Personalisatie en segmentatie",
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
                  Start uw automatiseringsproject vandaag nog!
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
                  Geavanceerde Automatiseringsoplossingen
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Wij ontwikkelen op maat gemaakte systemen die uw marketingprocessen automatiseren, zodat u meer tijd overhoudt voor strategische beslissingen.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Geautomatiseerde workflows",
                    "Realtime monitoring en rapportages",
                    "Integratie met meerdere marketingkanalen",
                    "A/B-testen en optimalisatie",
                    "Segmentatie en personalisatie",
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
                  Start uw automatiseringsproject vandaag nog!
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
              Hier vindt u antwoorden op de meest gestelde vragen over onze marketing automatiseringsdiensten.
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
              <h5 className="text-4xl font-medium mb-4 text-black dark:text-white">
                Heeft u nog vragen?
              </h5>
              <p className="text-gray-700 dark:text-white">
                Voor meer informatie over onze marketing automatiseringsdiensten kunt u onze{" "}
                <Link href="contact" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">010 322 04 10</span>. Ons deskundige team staat klaar om u te ondersteunen bij het optimaliseren van uw marketingstrategieën.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw marketing te automatiseren?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Transformeer uw marketingprocessen met geavanceerde automatiseringsoplossingen die uw klantinteracties optimaliseren en uw ROI verhogen.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw automatiseringsproject
          </Link>
        </div>
      </section>
    </>
  )
}
