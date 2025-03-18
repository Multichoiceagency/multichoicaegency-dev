"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"

export default function PlanningRoosterSystemenPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat zijn planning en rooster systemen?",
      answer:
        "Planning en rooster systemen zijn softwareoplossingen die organisaties helpen bij het efficiënt plannen van werkroosters, het beheren van personeelsbezetting en het optimaliseren van resource allocatie. Ze centraliseren alle planning en roosters zodat medewerkers, teams en afdelingen eenvoudig toegang hebben tot actuele informatie.",
    },
    {
      question: "Hoe verbeteren deze systemen de efficiëntie?",
      answer:
        "Door geautomatiseerde planning en real-time updates verminderen deze systemen administratieve lasten, minimaliseren ze fouten en zorgen ze voor een betere afstemming tussen de personeelsbezetting en de bedrijfsbehoeften. Dit leidt tot een verhoogde productiviteit en kostenbesparing.",
    },
    {
      question: "Kan ik het systeem volledig op maat laten maken?",
      answer:
        "Ja, onze oplossingen worden volledig afgestemd op de specifieke wensen en processen van uw organisatie. Of u nu een eenvoudig rooster voor uw winkel of een complex planningssysteem voor een groot bedrijf nodig heeft, wij leveren een oplossing die perfect aansluit.",
    },
    {
      question: "Hoe lang duurt de implementatie van zo'n systeem?",
      answer:
        "De implementatietijd varieert afhankelijk van de complexiteit van uw wensen, maar gemiddeld duurt een project tussen de 6 en 12 weken, inclusief analyse, ontwikkeling, testen en training van uw medewerkers.",
    },
    {
      question: "Bieden jullie ondersteuning na de lancering?",
      answer:
        "Ja, we bieden uitgebreide support- en onderhoudpakketten om ervoor te zorgen dat uw planning en rooster systeem altijd up-to-date blijft en optimaal functioneert.",
    },
  ]

  return (
    <>
      {/* Remove NextSeo, BreadcrumbJsonLd, and FAQPageJsonLd components */}
      {/* Instead, use metadata in layout.tsx or add a separate metadata.ts file */}

      {/* Hero Sectie met Video */}
      <HeroNieuw
        title={"Planning en Rooster Systemen"}
        description={
          "Optimaliseer uw personeelsplanning en resource management met onze geavanceerde planning en rooster systemen. Real-time updates en geïntegreerde functionaliteiten zorgen voor een efficiënte en flexibele organisatie."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/17381263/file/original-f496ef02cc02dc2a971f1271bdd61898.mp4"}
      />

      {/* Extra Informatie Sectie met Video */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom kiezen voor een planning- en rooster systeem?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                Een efficiënt planningssysteem helpt organisaties om medewerkers, taken en resources optimaal in te
                plannen. Dit vermindert administratieve lasten, verhoogt de productiviteit en zorgt voor een betere
                afstemming tussen werk en capaciteit. Met realtime updates en geautomatiseerde processen bespaart u tijd
                en voorkomt u fouten.
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
              <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                <source
                  src="https://cdn.dribbble.com/userupload/36847666/file/large-a9fa4720103b422627a0028f8083160e.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Sectie: Uitgebreide Uitleg over Planning en Rooster Systemen (700+ woorden) */}
      <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
            In-Depth: De Kracht van Planning en Rooster Systemen
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              In een dynamische en snel veranderende markt is een goed georganiseerd rooster van cruciaal belang voor
              elk bedrijf. Planning en rooster systemen stellen organisaties in staat om de inzet van personeel en
              resources nauwkeurig te beheren. Deze systemen bieden niet alleen overzicht, maar maken het ook mogelijk
              om snel in te spelen op onverwachte veranderingen, zoals ziekte of piekdrukte. Hierdoor kunnen bedrijven
              efficiënter werken en blijven zij wendbaar in een concurrerende omgeving.
            </p>
            <p>
              Een belangrijk aspect van deze systemen is de mogelijkheid om alle planning centraal te beheren. In plaats
              van gebruik te maken van losse spreadsheets of handmatige processen, bundelt een modern planningssysteem
              alle relevante informatie op één plek. Dit zorgt voor een helder overzicht van de beschikbaarheid van
              medewerkers, geplande diensten en de verdeling van taken. Door deze centralisatie worden fouten verminderd
              en kan er snel worden bijgestuurd wanneer dat nodig is.
            </p>
            <p>
              Automatisering speelt een sleutelrol in planning en rooster systemen. Door routinetaken te automatiseren,
              zoals het genereren van roosters en het versturen van meldingen, kunnen managers zich richten op
              strategische beslissingen. Automatisering helpt ook bij het minimaliseren van menselijke fouten, wat leidt
              tot een efficiënter en betrouwbaarder planningsproces. Met behulp van algoritmes en machine learning
              kunnen deze systemen voorspellingen doen over de benodigde personeelsbezetting, gebaseerd op historische
              data en actuele trends.
            </p>
            <p>
              Daarnaast bieden moderne planningssystemen de mogelijkheid tot integratie met andere bedrijfsprocessen. Zo
              kunnen ze gekoppeld worden aan HR-systemen, zodat verlofaanvragen en ziekteverzuim automatisch in het
              rooster worden verwerkt. Ook integratie met ERP-systemen maakt het mogelijk om resourceallocatie en
              productieplanning te optimaliseren. Dit resulteert in een naadloze workflow waarbij alle afdelingen binnen
              het bedrijf profiteren van de inzichten en automatiseringen die het systeem biedt.
            </p>
            <p>
              Veiligheid en privacy zijn eveneens van groot belang in planning en rooster systemen. Omdat deze systemen
              vaak gevoelige gegevens bevatten, zoals persoonlijke informatie van medewerkers en bedrijfsdata, is het
              essentieel dat zij voldoen aan de strengste beveiligingsnormen. Geavanceerde encryptietechnieken,
              regelmatige updates en strikte toegangscontroles zorgen ervoor dat uw data veilig is en dat alleen
              bevoegde personen toegang hebben tot de informatie.
            </p>
            <p>
              Een ander voordeel van een modern planningssysteem is de flexibiliteit en schaalbaarheid. Organisaties
              groeien en veranderen voortdurend, en een systeem dat vandaag perfect werkt, moet morgen nog steeds mee
              kunnen groeien. Met een schaalbaar systeem kunt u eenvoudig extra functionaliteiten toevoegen of bestaande
              processen aanpassen naarmate uw bedrijfsbehoeften evolueren. Dit maakt het systeem niet alleen een
              investering voor de korte termijn, maar ook een duurzame oplossing voor de toekomst.
            </p>
            <p>
              De impact van een efficiënt planningssysteem reikt verder dan alleen de operationele efficiëntie. Het
              verbetert de tevredenheid en motivatie van medewerkers doordat zij altijd inzicht hebben in hun roosters
              en snel kunnen reageren op wijzigingen. Dit zorgt voor een betere balans tussen werk en privé, wat op zijn
              beurt leidt tot een hogere productiviteit en een positieve bedrijfscultuur.
            </p>
            <p>
              Innovatie speelt eveneens een belangrijke rol in de ontwikkeling van planning en rooster systemen. Met de
              opkomst van cloud computing en mobiele technologieën hebben deze systemen een geheel nieuwe dimensie
              gekregen. Medewerkers kunnen nu via mobiele apps hun roosters inzien, verlof aanvragen en zelfs in
              realtime communiceren met hun team. Dit verhoogt de toegankelijkheid en gebruiksvriendelijkheid van het
              systeem en zorgt voor een meer flexibele en moderne werkomgeving.
            </p>
            <p>
              Samengevat bieden planning en rooster systemen een krachtige oplossing voor de uitdagingen van moderne
              bedrijfsvoering. Ze centraliseren data, automatiseren repetitieve taken en bieden realtime inzichten,
              waardoor organisaties beter kunnen plannen, sneller kunnen reageren en efficiënter kunnen werken. Door te
              investeren in een geavanceerd planningssysteem creëert u niet alleen meer overzicht en efficiëntie, maar
              versterkt u ook de betrokkenheid en tevredenheid van uw medewerkers. Dit alles resulteert in een robuuste
              en toekomstbestendige organisatie die klaar is om de uitdagingen van morgen aan te gaan.
            </p>
          </div>
        </div>
      </section>

      {/* Process / Services Sectie */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-gray-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">
                Ons Plannings- en Roostersysteem Proces
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Stap voor stap naar een efficiënt roostersysteem
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Analyse en Inventarisatie",
                    description:
                      "We starten met een grondige analyse van uw huidige planningsprocessen en identificeren de knelpunten die verbeterd kunnen worden.",
                  },
                  {
                    title: "Concept en Ontwerp",
                    description:
                      "Op basis van deze analyse ontwikkelen we een concept dat perfect aansluit bij uw wensen. Dit omvat een gebruiksvriendelijke interface en slimme automatiseringen.",
                  },
                  {
                    title: "Ontwikkeling en Integratie",
                    description:
                      "Onze experts bouwen een op maat gemaakt systeem en integreren het met bestaande HR- en ERP-systemen voor een naadloze workflow.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voor de lancering doorloopt het systeem een intensieve testfase, waarbij we de functionaliteit, snelheid en gebruiksvriendelijkheid grondig controleren en optimaliseren.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na een succesvolle implementatie bieden we continue ondersteuning en onderhoud om ervoor te zorgen dat het systeem altijd optimaal presteert.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "Wij monitoren het gebruik van het systeem en passen het continu aan op basis van feedback van gebruikers en veranderende bedrijfsbehoeften.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-0">
                    <div className="flex flex-col h-full">
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

      {/* FAQ Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over onze planning en rooster systemen.
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
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96" : "max-h-0"}`}
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
                {faqItems.slice(3).map((item, index) => (
                  <button
                    key={index + 3}
                    onClick={() => setOpenAccordion(openAccordion === index + 3 ? null : index + 3)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 3 ? "max-h-96" : "max-h-0"}`}
                      >
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
                Voor meer informatie over onze planning en rooster systemen kunt u onze{" "}
                <Link href="/contact" className="inline-block text-black font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op                 <Link href="tel:0103220410"> 
                <span className="text-lime-500 font-medium underline">010 322 04 10</span>. Ons deskundige team staat klaar om u te ondersteunen bij het realiseren van uw datavisualisatieprojecten.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw planning en rooster systemen te optimaliseren?</h2>
          <p className="text-xl mb-12">
            Ontwikkel een geïntegreerd planningssysteem dat uw organisatie stroomlijnt, uw medewerkers efficiënt inzet
            en uw bedrijfsprocessen optimaliseert.
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

