"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from 'next-seo';

export default function CRMDevelopmentPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat is CRM Development?",
      answer:
        "CRM Development omvat het ontwerpen, ontwikkelen en implementeren van softwareoplossingen voor klantrelatiebeheer, waarmee bedrijven hun klantdata centraal kunnen beheren en processen kunnen automatiseren.",
    },
    {
      question: "Waarom is een CRM systeem belangrijk?",
      answer:
        "Een goed ontwikkeld CRM systeem helpt bedrijven bij het verbeteren van klantrelaties, het stroomlijnen van sales- en marketingprocessen en het verhogen van de omzet door inzicht te geven in klantgedrag.",
    },
    {
      question: "Hoe lang duurt het om een CRM systeem te ontwikkelen?",
      answer:
        "Afhankelijk van de complexiteit en gewenste functionaliteiten duurt de ontwikkeling van een CRM systeem doorgaans tussen de 8 en 16 weken.",
    },
    {
      question: "Kan ik het CRM systeem op maat laten maken?",
      answer:
        "Ja, onze CRM Development oplossingen worden volledig afgestemd op de unieke wensen en processen van uw bedrijf, zodat u exact krijgt wat u nodig heeft.",
    },
    {
      question: "Bieden jullie ook ondersteuning na de lancering?",
      answer:
        "Zeker, wij bieden uitgebreide support- en onderhoudpakketten, inclusief training en updates, zodat uw CRM systeem altijd optimaal functioneert.",
    },
  ];

  return (
    <div className="bg-white text-black">
      <NextSeo
        title="CRM Development | Ontwikkeling van Klantrelatiebeheer Software"
        description="Ontwikkel een op maat gemaakt CRM systeem dat uw klantrelaties optimaliseert. Onze CRM Development oplossingen helpen u klantdata centraal te beheren, processen te automatiseren en de omzet te verhogen."
        canonical="https://www.multichoiceagency.nl/crm-development"
        openGraph={{
          type: 'website',
          url: 'https://www.multichoiceagency.nl/crm-development',
          title: 'CRM Development | Ontwikkeling van Klantrelatiebeheer Software',
          description:
            'Ontwikkel een op maat gemaakt CRM systeem dat uw klantrelaties optimaliseert. Onze CRM Development oplossingen helpen u klantdata centraal te beheren, processen te automatiseren en de omzet te verhogen.',
          images: [
            {
              url: '/partners/crm-development.png',
              width: 1200,
              height: 630,
              alt: 'CRM Development',
            },
          ],
        }}
        twitter={{
          handle: '@jouwtwitterhandle',
          site: '@jouwtwitterhandle',
          cardType: 'summary_large_image',
        }}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'Home', item: 'https://www.multichoiceagency.nl' },
          { position: 2, name: 'CRM Development', item: 'https://www.multichoiceagency.nl/crm-development' },
        ]}
      />

      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Wat is CRM Development?',
            acceptedAnswerText:
              'CRM Development omvat het ontwerpen, ontwikkelen en implementeren van op maat gemaakte CRM systemen die klantgegevens centraliseren en bedrijfsprocessen automatiseren.',
          },
          {
            questionName: 'Waarom is een CRM systeem belangrijk?',
            acceptedAnswerText:
              'Een effectief CRM systeem verbetert de klantrelaties, stroomlijnt de sales- en marketingprocessen en zorgt voor een hogere omzet door waardevolle inzichten in klantgedrag te bieden.',
          },
          {
            questionName: 'Hoe lang duurt de ontwikkeling van een CRM systeem?',
            acceptedAnswerText:
              'Afhankelijk van de complexiteit en gewenste functionaliteiten duurt het ontwikkelen van een CRM systeem gemiddeld tussen de 8 en 16 weken.',
          },
          {
            questionName: 'Kan het CRM systeem volledig op maat worden gemaakt?',
            acceptedAnswerText:
              'Ja, onze CRM Development oplossingen worden volledig afgestemd op uw bedrijfsprocessen, zodat u een systeem krijgt dat perfect aansluit bij uw unieke behoeften.',
          },
          {
            questionName: 'Bieden jullie ondersteuning na de lancering?',
            acceptedAnswerText:
              'Ja, wij bieden uitgebreide support- en onderhoudspakketten, zodat uw CRM systeem altijd up-to-date en optimaal functioneert.',
          },
        ]}
      />

      {/* Hero Sectie */}
      <HeroNieuw
        title={"CRM Development"}
        description={
          "Ontwikkel een krachtig CRM systeem dat uw klantrelaties optimaliseert en uw bedrijfsprocessen stroomlijnt. Onze op maat gemaakte CRM oplossingen zijn ontworpen om uw groei te stimuleren."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/12345678/file/original-crm-video.mp4"}
      />

      {/* Overige Sectie met Extra Informatie en Video */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom kiezen voor CRM Development?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                In een competitieve markt is het beheren van klantrelaties cruciaal voor succes. CRM Development helpt u alle klantdata centraal te beheren en uw bedrijfsprocessen te automatiseren. Hierdoor krijgt u een volledig overzicht van klantgedrag, wat leidt tot gerichtere marketing, efficiëntere sales en uiteindelijk een hogere omzet.
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
                  src="https://cdn.dribbble.com/userupload/98765432/file/original-crm-video2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Sectie: Uitgebreide Uitleg over CRM Development (700+ woorden) */}
      <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
            In-Depth: De Kracht van CRM Development
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              CRM Development, oftewel de ontwikkeling van klantrelatiebeheersystemen, is een essentieel onderdeel van de moderne bedrijfsvoering. In een wereld waar klantgerichtheid centraal staat, speelt het beheren van klantdata en interacties een cruciale rol in het succes van een organisatie. CRM systemen helpen bedrijven niet alleen bij het structureren van klantinformatie, maar ook bij het automatiseren van marketing, sales en serviceprocessen. Door deze processen te centraliseren, krijgen bedrijven beter inzicht in het gedrag en de behoeften van hun klanten, wat leidt tot efficiëntere besluitvorming en een verbeterde klanttevredenheid.
            </p>
            <p>
              De ontwikkeling van een CRM systeem vereist een diepgaande analyse van de bedrijfsprocessen en klantinteracties. In deze fase worden alle benodigde functionaliteiten in kaart gebracht, van leadbeheer en verkoopautomatisering tot klantondersteuning en aftersales. Door nauw samen te werken met de opdrachtgever, kunnen ontwikkelaars een systeem ontwerpen dat perfect aansluit bij de unieke behoeften van het bedrijf. Dit maatwerk is een belangrijk voordeel van CRM Development, omdat standaard oplossingen vaak niet alle gewenste functionaliteiten bieden.
            </p>
            <p>
              Een goed ontwikkeld CRM systeem biedt tal van voordelen. Ten eerste centraliseert het alle klantgegevens, wat resulteert in een gestructureerd en overzichtelijk databestand. Hierdoor kunnen bedrijven eenvoudig trends en patronen in klantgedrag analyseren. Deze inzichten leiden tot gerichte marketingcampagnes en verkoopstrategieën die beter aansluiten bij de wensen van de klant. Daarnaast helpt een CRM systeem bij het automatiseren van repetitieve taken, waardoor medewerkers meer tijd hebben voor strategische en creatieve werkzaamheden.
            </p>
            <p>
              Naast de functionele voordelen speelt ook de technologische basis een belangrijke rol. Moderne CRM Development maakt gebruik van geavanceerde technologieën en programmeertalen zoals JavaScript, Python, en PHP, in combinatie met robuuste databasesystemen. Veel CRM systemen worden tegenwoordig ontwikkeld met behulp van cloudgebaseerde platformen, waardoor ze schaalbaar en flexibel zijn. Dit betekent dat bedrijven hun CRM systeem eenvoudig kunnen uitbreiden naarmate ze groeien, zonder dat er ingrijpende technische aanpassingen nodig zijn.
            </p>
            <p>
              Integratie is een ander essentieel aspect van CRM Development. Een succesvol CRM systeem staat niet op zichzelf; het moet naadloos integreren met andere bedrijfsapplicaties zoals ERP-systemen, marketingtools, en supportsoftware. Door deze integraties kunnen gegevens automatisch worden gesynchroniseerd, wat de efficiëntie verhoogt en de kans op fouten verkleint. Dit zorgt voor een volledig geïntegreerde oplossing die de gehele bedrijfsvoering optimaliseert.
            </p>
            <p>
              Veiligheid en privacy zijn eveneens van groot belang bij de ontwikkeling van CRM systemen. Aangezien deze systemen gevoelige klantgegevens bevatten, is het essentieel dat ze voldoen aan de hoogste beveiligingsnormen en regelgeving, zoals de AVG. Tijdens het ontwikkelproces wordt er dan ook veel aandacht besteed aan het beveiligen van data, het implementeren van encryptie en het opzetten van strikte toegangscontroles.
            </p>
            <p>
              De implementatiefase van CRM Development is vaak net zo belangrijk als de ontwikkeling zelf. Na de oplevering van het systeem, zorgen wij voor uitgebreide training en ondersteuning, zodat uw team direct aan de slag kan met de nieuwe tool. Onze supportpakketten omvatten zowel technische ondersteuning als regelmatige updates en optimalisaties. Dit garandeert dat uw CRM systeem altijd optimaal functioneert en blijft voldoen aan de veranderende eisen van uw bedrijf.
            </p>
            <p>
              Een ander voordeel van CRM Development is de mogelijkheid tot personalisatie. Elk bedrijf heeft zijn eigen unieke processen en behoeften. Onze maatwerk CRM oplossingen stellen u in staat om exact de functionaliteiten te implementeren die u nodig heeft, of het nu gaat om geavanceerde rapportages, workflow automatisering of integratie met specifieke externe systemen. Hierdoor krijgt u een systeem dat niet alleen efficiënt is, maar ook perfect aansluit bij uw bedrijfsdoelstellingen.
            </p>
            <p>
              Innovatie staat centraal in onze aanpak van CRM Development. Wij streven ernaar om de nieuwste technologische ontwikkelingen en trends te integreren in onze oplossingen. Dit betekent dat uw CRM systeem niet alleen functioneel en veilig is, maar ook toekomstbestendig. Met de voortdurende evolutie van technologieën, zoals kunstmatige intelligentie en machine learning, kunnen CRM systemen steeds slimmer worden. Deze innovaties bieden de mogelijkheid om klantgedrag te voorspellen en proactief in te spelen op toekomstige behoeften, wat u een aanzienlijk concurrentievoordeel kan opleveren.
            </p>
            <p>
              Tot slot, de return on investment (ROI) van een goed ontwikkeld CRM systeem is vaak aanzienlijk. Door processen te stroomlijnen, medewerkers te ontlasten en gerichte klantinteracties mogelijk te maken, kan een CRM systeem leiden tot een hogere omzet en een betere klantretentie. Het is een investering die niet alleen de efficiëntie verbetert, maar ook bijdraagt aan de lange termijn groei van uw bedrijf.
            </p>
            <p>
              Samengevat, CRM Development is een strategisch en technisch proces dat bedrijven helpt om klantrelaties te beheren, bedrijfsprocessen te optimaliseren en de algehele prestaties te verbeteren. Door te investeren in een op maat gemaakt CRM systeem, creëert u een solide basis voor duurzame groei en succes. Onze expertise stelt ons in staat om oplossingen te ontwikkelen die niet alleen voldoen aan de huidige behoeften, maar ook klaar zijn voor toekomstige uitdagingen. Of u nu uw sales- en marketingprocessen wilt automatiseren of uw klantinteracties wilt centraliseren, met CRM Development legt u de basis voor een efficiëntere en succesvollere bedrijfsvoering.
            </p>
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
                Ons CRM Ontwikkelingsproces
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Stap voor stap naar uw ideale CRM systeem
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Intake en Analyse",
                    description:
                      "We starten met een uitgebreid gesprek om uw bedrijfsprocessen, klantbehoeften en doelstellingen in kaart te brengen.",
                  },
                  {
                    title: "Concept en Ontwerp",
                    description:
                      "Op basis van de analyse ontwikkelen we een concept en ontwerp dat volledig is afgestemd op uw unieke wensen.",
                  },
                  {
                    title: "Ontwikkeling en Integratie",
                    description:
                      "Onze ontwikkelaars bouwen een CRM systeem op maat en integreren de gewenste functionaliteiten en externe systemen.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "We testen het systeem grondig en optimaliseren de prestaties en gebruiksvriendelijkheid.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na een succesvolle lancering bieden we voortdurende ondersteuning en onderhoud om uw CRM systeem optimaal te laten functioneren.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "Op basis van uw feedback voeren we verdere verbeteringen door om het systeem continu te optimaliseren.",
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

      {/* FAQ Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over onze CRM Development diensten.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 3).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96" : "max-h-0"}`}>
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
                {faqItems.slice(3).map((item, index) => (
                  <button
                    key={index + 3}
                    onClick={() => setOpenAccordion(openAccordion === index + 3 ? null : index + 3)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 3 ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-gray-700 mt-4">{item.answer}</p>
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
              <h5 className="text-xl font-medium mb-4">Nog vragen?</h5>
              <p className="text-gray-700">
                Voor meer informatie over onze frontend development diensten kunt u onze{" "}
                <Link href="/contact" className="inline-block text-black font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-black font-medium">010 322 04 10</span>.
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
    </div>
  )
}
