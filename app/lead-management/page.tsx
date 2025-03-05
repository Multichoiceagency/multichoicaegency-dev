"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from 'next-seo';

export default function LeadManagementPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat is lead management?",
      answer:
        "Lead management is het proces van het verzamelen, kwalificeren en opvolgen van potentiële klanten om hen uiteindelijk om te zetten in daadwerkelijke klanten. Het omvat alle stappen in de sales funnel en zorgt ervoor dat leads efficiënt worden beheerd.",
    },
    {
      question: "Hoe verbetert een lead management systeem mijn sales funnel?",
      answer:
        "Een lead management systeem stroomlijnt uw sales funnel door leads op een gestructureerde wijze te beheren, waardoor uw verkoopteam zich kan concentreren op de meest kansrijke prospects en de conversieratio’s stijgen.",
    },
    {
      question: "Kan ik bestaande CRM- en marketingtools integreren?",
      answer:
        "Ja, moderne lead management systemen integreren naadloos met CRM-systemen en marketing automation tools, waardoor u een compleet overzicht krijgt van uw klanttraject.",
    },
    {
      question: "Hoe lang duurt de implementatie van een lead management systeem?",
      answer:
        "De implementatietijd varieert, maar gemiddeld duurt het tussen de 6 en 12 weken, afhankelijk van de complexiteit en gewenste integraties.",
    },
    {
      question: "Bieden jullie ondersteuning na de implementatie?",
      answer:
        "Ja, wij bieden uitgebreide support- en onderhoudpakketten zodat uw lead management systeem altijd up-to-date is en optimaal presteert.",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* SEO & Schema */}
      <NextSeo
        title="Lead Management | Optimaliseer Uw Sales Funnel"
        description="Ontwikkel een op maat gemaakt lead management systeem dat uw sales funnel optimaliseert en meer gekwalificeerde leads genereert. Onze oplossingen centraliseren data, automatiseren opvolging en verhogen de conversie."
        canonical="https://www.multichoiceagency.nl/lead-management"
        openGraph={{
          type: 'website',
          url: 'https://www.multichoiceagency.nl/lead-management',
          title: 'Lead Management | Optimaliseer Uw Sales Funnel',
          description:
            'Ontwikkel een op maat gemaakt lead management systeem dat uw sales funnel optimaliseert en meer gekwalificeerde leads genereert. Onze oplossingen centraliseren data, automatiseren opvolging en verhogen de conversie.',
          images: [
            {
              url: '/partners/lead-management.png',
              width: 1200,
              height: 630,
              alt: 'Lead Management',
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
          { position: 2, name: 'Lead Management', item: 'https://www.multichoiceagency.nl/lead-management' },
        ]}
      />

      <FAQPageJsonLd
        mainEntity={faqItems.map(item => ({
          questionName: item.question,
          acceptedAnswerText: item.answer,
        }))}
      />

      {/* Hero Sectie met Video */}
      <HeroNieuw
        title={"Lead Management & Sales Funnel Optimalisatie"}
        description={
          "Optimaliseer uw salesproces met een op maat gemaakt lead management systeem. Onze geavanceerde oplossingen centraliseren uw leaddata, automatiseren opvolging en zorgen voor een efficiënte conversie van prospects naar klanten."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/17855128/file/large-45aef91c794d3dfe747127edc550fd15.mp4"}
      />

      {/* Introductie Sectie */}
      <section className="w-screen py-12 lg:py-24 relative flex flex-col lg:flex-row">
        {/* Linker kolom (tekst) */}
        <div className="lg:w-1/2">
          <div className="container mx-auto px-4 pt-12 pb-28 lg:py-24">
            <div className="flex mb-6 items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="12" height="12" rx="2" fill="#BEF264"></rect>
                <circle cx="6" cy="6" r="4" fill="#022C22"></circle>
              </svg>
              <span className="ml-2 text-sm font-medium">
                Versterk uw sales funnel met doelgerichte lead opvolging
              </span>
            </div>
            <h1 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
              Wat is Lead Management?
            </h1>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
              Lead management omvat het volledige proces van leadgeneratie, kwalificatie en opvolging. Het richt zich op het optimaliseren van de sales funnel en het converteren van potentiële klanten naar daadwerkelijke klanten.
            </p>
            <div className="flex flex-col sm:flex-row">
              <Link
                href="/offerte-aanvragen"
                className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-black hover:text-white border border-lime-500 hover:bg-lime-500 rounded-full transition duration-200"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Informatie Sectie met Video */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom kiezen voor een lead management systeem?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                Een effectief lead management systeem stroomlijnt uw sales funnel door het automatiseren van de opvolging van leads en het centraliseren van klantdata. Hierdoor krijgt uw verkoopteam realtime inzicht in welke leads het meest waardevol zijn, waardoor gerichte acties mogelijk worden en de conversieratio stijgt.
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
                  src="https://cdn.dribbble.com/userupload/98765432/file/original-leadmanagement-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Sectie: Uitgebreide Uitleg over Lead Management (700+ woorden) */}
      <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
            In-Depth: De Kracht van Lead Management
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              In de hedendaagse digitale economie is lead management van cruciaal belang voor elke organisatie die wil groeien. Het is niet alleen een methode om potentiële klanten te verzamelen, maar een geïntegreerd proces dat helpt bij het kwalificeren en opvolgen van leads, zodat deze uiteindelijk omgezet worden in waardevolle klanten. Door het hele salesproces te stroomlijnen, kunnen bedrijven efficiënter werken en hun omzet aanzienlijk verhogen.
            </p>
            <p>
              Het fundament van een effectief lead management systeem is de centralisatie van klantinformatie. In plaats van gebruik te maken van meerdere losse systemen en spreadsheets, wordt alle data verzameld in één geïntegreerd platform. Dit maakt het mogelijk om snel en accuraat inzicht te krijgen in klantgedrag, voorkeuren en koopgeschiedenis. Met deze informatie kan uw verkoopteam gerichte en gepersonaliseerde follow-ups uitvoeren, wat leidt tot een hogere conversieratio.
            </p>
            <p>
              Automatisering speelt een sleutelrol in dit proces. Veel repetitieve taken, zoals het versturen van opvolg-e-mails, het plannen van afspraken en het genereren van rapportages, kunnen automatisch worden uitgevoerd. Dit vermindert niet alleen de kans op fouten, maar bespaart ook kostbare tijd. Hierdoor kan uw team zich richten op strategisch belangrijkere taken, zoals het sluiten van deals en het opbouwen van langdurige klantrelaties.
            </p>
            <p>
              Een ander belangrijk aspect van lead management is de integratie met andere systemen, zoals CRM-software en marketing automation tools. Deze integratie zorgt voor een naadloze overdracht van data tussen verschillende afdelingen, waardoor er een compleet overzicht ontstaat van de gehele klantreis. Hierdoor worden marketing- en salesstrategieën op elkaar afgestemd, wat de efficiëntie en effectiviteit van uw campagnes ten goede komt.
            </p>
            <p>
              Veiligheid en privacy zijn eveneens van groot belang in een lead management systeem. Gevoelige klantdata moet beschermd worden met de hoogste beveiligingsstandaarden. Moderne systemen maken gebruik van encryptietechnieken, strikte toegangscontrole en regelmatige beveiligingsupdates om ervoor te zorgen dat uw data veilig is en voldoet aan alle relevante wet- en regelgeving, zoals de AVG.
            </p>
            <p>
              Personalization is een andere cruciale factor. Door gebruik te maken van geavanceerde algoritmes en machine learning, kunnen lead management systemen patronen in klantgedrag herkennen en voorspellingen doen over welke leads het meest kansrijk zijn. Dit maakt het mogelijk om gerichte en gepersonaliseerde marketingcampagnes op te zetten die beter aansluiten bij de behoeften van uw doelgroep, wat leidt tot een hogere klanttevredenheid en een sterkere loyaliteit.
            </p>
            <p>
              Innovatie blijft een drijvende kracht in de wereld van lead management. Met de opkomst van nieuwe technologieën, zoals kunstmatige intelligentie en big data analytics, worden systemen steeds slimmer en efficiënter. Deze technologieën stellen u in staat om trends te voorspellen, klantgedrag in realtime te analyseren en proactief uw strategieën aan te passen. Dit zorgt ervoor dat u altijd een stap voor bent op de concurrentie.
            </p>
            <p>
              Bovendien draagt een efficiënt lead management systeem bij aan kostenbesparingen. Door processen te automatiseren en repetitieve taken te verminderen, kunt u de operationele kosten verlagen. Dit verhoogt niet alleen het rendement op uw investering, maar maakt ook meer middelen vrij voor andere strategische initiatieven, zoals productontwikkeling en klantacquisitie.
            </p>
            <p>
              Tot slot is de impact van een goed ingericht lead management systeem duidelijk te zien in de verbeterde conversieratio’s en de toegenomen klantloyaliteit. Doordat leads sneller en efficiënter worden opgevolgd, voelt de klant zich persoonlijk benaderd en gewaardeerd. Dit leidt tot een betere relatie en verhoogt de kans dat een prospect uiteindelijk klant wordt. In een tijd waarin elke lead telt, is het optimaliseren van het salesproces essentieel voor duurzame groei.
            </p>
            <p>
              Samengevat, een effectief lead management systeem centraliseert data, automatiseert opvolging, integreert met andere cruciale systemen en zorgt voor gepersonaliseerde klantinteracties. Door te investeren in een op maat gemaakt systeem, versterkt u uw sales funnel, verhoogt u de conversie en stimuleert u de algehele groei van uw organisatie. Bent u klaar om uw lead management naar een hoger niveau te tillen en meer gekwalificeerde leads te genereren? Neem vandaag nog contact met ons op en ontdek hoe onze oplossingen uw bedrijf kunnen transformeren.
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
                Ons Lead Management Proces
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Stap voor stap naar uw optimale sales funnel
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Analyse en Strategie",
                    description:
                      "We beginnen met een grondige analyse van uw huidige salesproces en leadgeneratie om de beste strategie te bepalen die aansluit bij uw bedrijfsdoelstellingen.",
                  },
                  {
                    title: "Concept en Ontwerp",
                    description:
                      "Op basis van onze analyse ontwikkelen we een concept en visueel ontwerp dat de basis vormt voor een op maat gemaakt lead management systeem.",
                  },
                  {
                    title: "Ontwikkeling en Integratie",
                    description:
                      "Onze experts bouwen het systeem op maat en integreren het naadloos met uw bestaande CRM en marketingtools, zodat u direct kunt profiteren van een geïntegreerde oplossing.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voor de lancering doorloopt het systeem een intensieve testfase, waarin we de functionaliteit, snelheid en gebruiksvriendelijkheid grondig controleren en optimaliseren.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na een succesvolle implementatie bieden wij continue ondersteuning en onderhoud, zodat uw lead management systeem altijd up-to-date blijft en optimaal functioneert.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "Wij monitoren het gebruik van het systeem en passen het continu aan op basis van feedback van gebruikers en veranderende bedrijfsbehoeften.",
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
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over onze lead management oplossingen.
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
              <span className="inline-block mb-8 ml-10">
                <Image 
                  src="/logos/logo.png" 
                  alt="Logo" 
                  height={800} 
                  width={400} 
                />
              </span>
              <h5 className="text-4xl font-medium mb-4 text-black dark:text-white">Heb je nog vragen?</h5>
              <p className="text-gray-700">
                Voor meer informatie over onze lead management oplossingen kunt u onze{" "}
                <Link href="/contact" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">010 322 04 10</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw sales funnel te optimaliseren?</h2>
          <p className="text-xl mb-12">
            Transformeer uw leadmanagement met een op maat gemaakt systeem dat uw processen stroomlijnt, conversies verhoogt en uw verkoopteam ondersteunt.
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
