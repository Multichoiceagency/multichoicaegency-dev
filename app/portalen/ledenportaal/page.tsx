"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function LedenportaalVerenigingen() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een digitaal ledenportaal belangrijk voor uw vereniging?",
      answer:
        "Een modern ledenportaal biedt uw leden 24/7 toegang tot persoonlijke gegevens, laat hen abonnementen beheren en houdt hen op de hoogte van het laatste verenigingsnieuws. Dit vereenvoudigt uw administratieve processen en verhoogt de betrokkenheid.",
    },
    {
      question: "Hoe lang duurt de implementatie van een ledenportaal?",
      answer:
        "Afhankelijk van de gewenste functionaliteiten en de integratie met bestaande systemen, kunt u rekenen op een doorlooptijd van ongeveer 2 tot 4 maanden.",
    },
    {
      question: "Kunnen bestaande systemen worden geïntegreerd?",
      answer:
        "Ja, wij zorgen voor een naadloze koppeling met uw bestaande administratieve en communicatieplatforms, zodat alle ledeninformatie centraal wordt beheerd.",
    },
    {
      question: "Welke functionaliteiten biedt het ledenportaal?",
      answer:
        "Het portaal maakt het mogelijk om persoonlijke gegevens in te zien en aan te passen, abonnementen te beheren, en het laatste verenigingsnieuws en evenementen te volgen.",
    },
    {
      question: "Hoe waarborgt u de veiligheid van de gegevens?",
      answer:
        "Wij implementeren strikte beveiligingsmaatregelen zoals encryptie en veilige authenticatie om de privacy van uw leden te garanderen.",
    },
    {
      question: "Wat zijn de voordelen van een op maat gemaakt ledenportaal?",
      answer:
        "Een custom oplossing sluit perfect aan op de unieke behoeften van uw vereniging, stroomlijnt het ledenbeheer en versterkt de betrokkenheid binnen uw organisatie.",
    },
    {
      question: "Hoe schaalbaar is het ledenportaal?",
      answer:
        "Onze systemen zijn ontworpen om mee te groeien met uw vereniging, zodat u altijd snel en betrouwbaar inzicht behoudt, zelfs bij een groeiend ledenbestand.",
    },
    {
      question: "Biedt u ondersteuning na de lancering?",
      answer:
        "Zeker! Wij bieden uitgebreide ondersteuning en nazorg, inclusief regelmatige updates en training, zodat uw digitale ledenbeheer optimaal blijft functioneren.",
    },
    {
      question: "Hoe verloopt de migratie van bestaande ledengegevens?",
      answer:
        "Wij verzorgen een zorgvuldige migratie van uw huidige data, zodat de overgang naar het nieuwe portaal soepel en zonder onderbrekingen verloopt.",
    },
  ]

  return (
<>      <HeroNieuw
        title={"Ledenportaal voor Verenigingen & Digitaal Lidbeheer"}
        description={
          "Optimaliseer uw ledenbeheer met een modern, gebruiksvriendelijk digitaal portaal. Uw leden hebben altijd toegang tot hun gegevens, kunnen abonnementen beheren en blijven op de hoogte van het laatste verenigingsnieuws."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/14449969/file/original-104b2aadd44576bba88eba9d634cfcd8.mp4"}
      />

      {/* Ledenportaal Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row lg:items-center">
            {/* Linker kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-3xl sm:text-3xl md:text-3xl mb-6 dark:text-white">
                  Vereenvoudig uw Ledenbeheer
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Met ons digitale ledenportaal krijgt u een centrale plek waar leden hun persoonlijke gegevens kunnen bekijken en bijwerken, abonnementen kunnen beheren en op de hoogte blijven van verenigingsnieuws en evenementen.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Altijd toegang tot persoonlijke gegevens",
                    "Beheer van abonnementen en lidmaatschappen",
                    "Overzichtelijk verenigingsnieuws",
                    "Veilige en gebruiksvriendelijke interface",
                    "Efficiënt en geautomatiseerd ledenbeheer",
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
                      <span className="ml-3 text-sm text-black font-600 font-black dark:hover:text-green-700 dark:text-white hover:text-green-700">                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-sm font-medium text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start uw ledenportaal project vandaag nog!
                </Link>
              </div>
            </div>

            {/* Rechter kolom */}
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
                    src="https://cdn.dribbble.com/userupload/24545465/file/original-5468729f61204f8d463d7f0b25922722.mp4"
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
              Hier vindt u antwoorden op de meest gestelde vragen over ons digitale ledenportaal voor verenigingen.
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
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-white dark:text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.69995V18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 5 ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-white dark:text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 5 ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.69995V18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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
                Voor meer informatie over ons digitale ledenportaal voor verenigingen kunt u onze{" "}
                <Link href="#" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">071 203 24 88</span>. Ons deskundige team staat klaar om u te ondersteunen bij het realiseren van een efficiënt digitaal ledenbeheer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw ledenportaal te lanceren?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Transformeer uw verenigingsbeheer met een modern en efficiënt digitaal ledenportaal dat uw organisatie versterkt.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw project
          </Link>
        </div>
      </section>
    </>
  )
}
