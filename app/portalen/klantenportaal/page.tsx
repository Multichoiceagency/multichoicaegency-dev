"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/Hero-section"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function Klantenportaal() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een klantenportaal essentieel voor uw bedrijf?",
      answer:
        "Een modern klantenportaal biedt uw klanten een centrale, digitale omgeving waar zij hun accountgegevens kunnen beheren, bestellingen kunnen volgen en eenvoudig contact kunnen opnemen met uw klantenservice. Dit leidt tot een efficiëntere communicatie, verhoogde klanttevredenheid en een lagere werkdruk voor uw supportteam.",
    },
    {
      question: "Hoe draagt een klantenportaal bij aan een betere klantbeleving?",
      answer:
        "Met een gebruiksvriendelijk klantenportaal hebben uw klanten 24/7 toegang tot hun persoonlijke data en bestelgeschiedenis. Hierdoor kunnen zij zelfstandig problemen oplossen, afspraken inplannen en realtime updates ontvangen, wat resulteert in een transparante en proactieve klantenservice.",
    },
    {
      question: "Welke functionaliteiten zijn er beschikbaar in het klantenportaal?",
      answer:
        "Ons klantenportaal is uitgerust met uitgebreide functies, zoals het inzien en aanpassen van persoonlijke gegevens, het volgen van bestellingen en facturen, interactieve supportmodules en geavanceerde zoekmogelijkheden. Daarnaast kunnen klanten gemakkelijk communiceren via geïntegreerde chat- en e-mailopties.",
    },
    {
      question: "Hoe waarborgt u de veiligheid van klantgegevens?",
      answer:
        "Wij hanteren de nieuwste beveiligingsstandaarden, waaronder encryptie van data, multi-factor authenticatie en regelmatige beveiligingsaudits. Dit garandeert dat alle klantinformatie veilig wordt opgeslagen en dat de privacy gewaarborgd blijft.",
    },
    {
      question: "Wat zijn de voordelen van een op maat gemaakt klantenportaal?",
      answer:
        "Een custom klantenportaal is volledig afgestemd op de specifieke behoeften van uw organisatie. Het verbetert de klantinteractie, stroomlijnt de administratieve processen en zorgt voor een consistente, gepersonaliseerde beleving, wat leidt tot een hogere klantloyaliteit en een efficiëntere bedrijfsvoering.",
    },
    {
      question: "Hoe schaalbaar is het klantenportaal?",
      answer:
        "Onze oplossingen zijn ontworpen met een flexibele architectuur, zodat het portaal eenvoudig mee kan groeien met uw bedrijf. Of u nu te maken heeft met een stijgend aantal gebruikers of extra functionaliteiten wilt toevoegen, het systeem blijft betrouwbaar en snel presteren.",
    },
    {
      question: "Is integratie met bestaande systemen mogelijk?",
      answer:
        "Absoluut. Ons klantenportaal kan naadloos worden geïntegreerd met uw bestaande CRM-, ERP- en communicatiesystemen, wat zorgt voor een uniforme gegevensstroom en een consistente klantenervaring over alle kanalen heen.",
    },
    {
      question: "Welke ondersteuning biedt u na de lancering van het klantenportaal?",
      answer:
        "Na de lancering bieden wij uitgebreide nazorg, inclusief regelmatige updates, onderhoud en 24/7 technische ondersteuning. Dit zorgt ervoor dat het portaal altijd up-to-date is en optimaal functioneert, zodat u zich kunt richten op uw kernactiviteiten.",
    },
    {
      question: "Hoe verloopt de migratie van bestaande klantgegevens?",
      answer:
        "Wij verzorgen een zorgvuldige en veilige migratie van uw huidige klantdata naar het nieuwe systeem, zodat de overgang soepel verloopt en er geen informatie verloren gaat. Dit minimaliseert de onderbreking in uw dagelijkse bedrijfsvoering.",
    },
    {
      question: "Hoe helpt het klantenportaal uw klanten om zelf problemen op te lossen?",
      answer:
        "Door selfservice-functies te integreren, kunnen klanten vaak zelf antwoorden vinden op veelgestelde vragen via interactieve FAQ’s, tutorials en live chat-support. Dit vermindert de belasting van uw klantenservice en versnelt de oplossing van eventuele problemen.",
    },
  ]

  return (
<>      <HeroNieuw
        title={"Klantenportaal & Digitale Klantenservice"}
        description={
          "Verbeter de klanttevredenheid en optimaliseer uw serviceprocessen met een modern klantenportaal. Uw klanten krijgen 24/7 toegang tot hun account, bestellingen en support, waardoor u een efficiënte, transparante en persoonlijke service kunt bieden."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/4386932/file/original-4f6a56440006d0239f058b7cdee5d9fe.mp4"}
      />

      {/* Klantenportaal Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:flex-row lg:items-center">
            {/* Linker kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Transformeer Uw Klantenservice
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Ons klantenportaal centraliseert alle klantinteracties op één plek. Hiermee kunnen uw klanten zelf hun gegevens beheren, bestellingen volgen en eenvoudig contact opnemen met uw supportteam. Deze selfservice-aanpak verhoogt de efficiëntie en verbetert de algehele klantbeleving.
                </p>
                <ul className="text-black py-5">
                  {[
                    "24/7 zelfservice toegang",
                    "Real-time order tracking",
                    "Directe communicatie met support",
                    "Veilige en gebruiksvriendelijke interface",
                    "Integratie met uw bestaande systemen",
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
                  Start uw klantenportaal project vandaag nog!
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
                    src="https://cdn.dribbble.com/userupload/17947050/file/original-72b0654039123e163baaa8f059033d1b.mp4"
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
              Hieronder vindt u uitgebreide antwoorden op de meest gestelde vragen over ons klantenportaal en de digitale ondersteuning die wij bieden.
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
                Voor meer informatie over ons klantenportaal en de digitale klantenservice kunt u onze{" "}
                <Link href="#" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">071 203 24 88</span>. Ons deskundige team staat klaar om u te ondersteunen bij het realiseren van een efficiënte, klantgerichte digitale service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw klantenportaal te lanceren?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Transformeer uw klantenservice met een modern, gebruiksvriendelijk digitaal portaal dat uw klanten ondersteunt en de interactie vereenvoudigt.
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
