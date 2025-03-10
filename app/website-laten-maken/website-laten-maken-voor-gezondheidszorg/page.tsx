"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function WebsiteGezondheidszorg() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een professionele website belangrijk voor uw gezondheidszorgorganisatie?",
      answer:
        "Een professionele website versterkt uw imago, biedt patiënten gemakkelijk toegang tot belangrijke informatie en maakt het mogelijk online afspraken te plannen – essentieel voor het opbouwen van vertrouwen.",
    },
    {
      question: "Hoe lang duurt het om een op maat gemaakte gezondheidszorgwebsite te ontwikkelen?",
      answer:
        "De ontwikkelingstijd varieert per project, maar gemiddeld kunt u binnen 2 tot 4 maanden een complete, functionele website verwachten, afhankelijk van de gewenste functionaliteiten en het design.",
    },
    {
      question: "Kunnen jullie integreren met bestaande patiëntportalen en afspraakplanningssystemen?",
      answer:
        "Ja, wij zorgen voor een naadloze koppeling met uw bestaande systemen, zodat patiënten eenvoudig online afspraken kunnen maken en hun gegevens kunnen beheren.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor het bouwen van gezondheidszorgwebsites?",
      answer:
        "Wij werken met moderne frameworks zoals Nuxt.js en React en zorgen voor een volledig responsief design, zodat uw website op elk apparaat optimaal presteert.",
    },
    {
      question: "Hoe waarborgen jullie de veiligheid van patiëntgegevens op de website?",
      answer:
        "Wij implementeren de nieuwste beveiligingsprotocollen, waaronder SSL-encryptie en veilige authenticatie, en voeren regelmatige audits uit om de privacy van uw patiëntgegevens te waarborgen.",
    },
    {
      question: "Wat zijn de voordelen van een op maat gemaakte gezondheidszorgwebsite?",
      answer:
        "Een maatwerkwebsite sluit perfect aan op de unieke behoeften van uw organisatie, verbetert de communicatie met patiënten en zorgt voor een efficiënte online dienstverlening.",
    },
    {
      question: "Hoe zorgen jullie voor de schaalbaarheid van de website?",
      answer:
        "Onze oplossingen zijn ontworpen om mee te groeien met uw organisatie, zodat uw website snel en betrouwbaar blijft, zelfs bij een toenemend bezoekersaantal.",
    },
    {
      question: "Kunnen jullie interactieve functies zoals online afspraakplanning en patiëntportalen integreren?",
      answer:
        "Absoluut! Wij integreren interactieve modules waarmee patiënten direct toegang krijgen tot hun gegevens en afspraken kunnen plannen, wat de gebruikservaring aanzienlijk verbetert.",
    },
    {
      question: "Bieden jullie ondersteuning na de lancering van de website?",
      answer:
        "Wij bieden uitgebreide nazorg, met regelmatige updates, onderhoud en 24/7 technische ondersteuning, zodat uw website altijd up-to-date blijft.",
    },
    {
      question: "Hoe verloopt de migratie van bestaande websitegegevens naar het nieuwe systeem?",
      answer:
        "Wij verzorgen een zorgvuldige migratie van uw bestaande data, zodat de overgang soepel verloopt zonder verlies van belangrijke informatie.",
    },
  ]

  return (
    <div className="bg-white text-black">
      <HeroNieuw
        title={"Website laten maken voor Gezondheidszorg"}
        description={
          "Transformeer uw gezondheidszorgorganisatie met een moderne, op maat gemaakte website. Onze oplossingen zorgen voor een professionele online aanwezigheid die patiënten informeert en ondersteunt."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://images.pexels.com/photos/40568/medical-appointment-healthcare-doctor-40568.jpeg"}
      />

      {/* Gezondheidszorg Website Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row lg:items-center">
            {/* Linker kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Versterk uw Online Aanwezigheid
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Onze gezondheidszorgwebsites zijn speciaal ontworpen om uw organisatie digitaal te presenteren. Met een responsief design en geïntegreerde functionaliteiten krijgt u een krachtige online tool waarmee u patiënten optimaal bedient.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Responsief design",
                    "Veilige dataoverdracht",
                    "Patiëntvriendelijke interface",
                    "Online afspraakplanning",
                    "SEO-geoptimaliseerd",
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
                  Start uw gezondheidszorgwebsite project vandaag nog!
                </Link>
              </div>
            </div>

            {/* Rechter kolom met stockfoto */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="visible">
                <Image
                  src="https://images.pexels.com/photos/40568/medical-appointment-healthcare-doctor-40568.jpeg"
                  alt="Gezondheidszorg website design"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovatief Design Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row-reverse lg:items-center">
            {/* Linker kolom met stockfoto */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="visible">
                <Image
                  src="https://images.pexels.com/photos/1170973/pexels-photo-1170973.jpeg"
                  alt="Modern healthcare website"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </div>

            {/* Rechter kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Innovatief Design & Functionaliteiten
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Onze websites combineren een modern design met gebruiksvriendelijke functionaliteiten. Patiënten kunnen eenvoudig informatie vinden, online afspraken maken en contact opnemen met uw organisatie.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Interactie met patiënten",
                    "Realtime updates",
                    "Integratie met afspraak- en patiëntportalen",
                    "Duidelijke navigatie",
                    "Toegankelijkheid voor iedereen",
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
                  Start uw gezondheidszorgwebsite project vandaag nog!
                </Link>
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
              Hier vindt u antwoorden op de meest gestelde vragen over het laten maken van een gezondheidszorgwebsite.
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
              <p className="text-gray-700">
                Voor meer informatie over het laten maken van een gezondheidszorgwebsite kunt u onze{" "}
                <Link href="#" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">071 203 24 88</span>. Ons deskundige team staat klaar om u te ondersteunen bij het realiseren van een professionele online aanwezigheid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw gezondheidszorgwebsite te lanceren?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Ontwikkel een moderne en professionele website die uw gezondheidszorgorganisatie vertegenwoordigt en patiënten aantrekt.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw project
          </Link>
        </div>
      </section>
    </div>
  )
}
