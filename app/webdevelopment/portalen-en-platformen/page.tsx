"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/Hero-section"
import { PricingTable } from "@/components/pricing-table"

export default function PortalenPlatformenPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat is een digitaal portaal?",
      answer:
        "Een digitaal portaal is een centrale toegangspoort tot diverse diensten, informatie en interacties. Het fungeert als een verzameling van modules en functionaliteiten die bedrijven in staat stelt om gebruikers op een overzichtelijke en efficiënte manier te bedienen.",
    },
    {
      question: "Wat zijn de voordelen van een platformoplossing?",
      answer:
        "Een platform biedt de mogelijkheid om meerdere diensten en applicaties te integreren, waardoor gebruikers een complete en samenhangende ervaring krijgen. Dit leidt tot betere interactie, hogere klanttevredenheid en efficiëntie in bedrijfsprocessen.",
    },
    {
      question: "Hoe lang duurt de ontwikkeling van een portaal of platform?",
      answer:
        "De ontwikkeltijd varieert sterk, afhankelijk van de complexiteit en het aantal te integreren functionaliteiten. Gemiddeld loopt dit proces van 8 tot 20 weken.",
    },
    {
      question: "Kan ik het portaal volledig op maat laten maken?",
      answer:
        "Ja, onze oplossingen worden volledig afgestemd op uw specifieke bedrijfsprocessen en doelstellingen. Dit betekent dat het portaal of platform precies die functies bevat die u nodig heeft, zonder overbodige standaardoplossingen.",
    },
    {
      question: "Bieden jullie ondersteuning en onderhoud na de lancering?",
      answer:
        "Zeker, we bieden uitgebreide support- en onderhoudpakketten om ervoor te zorgen dat uw digitale portaal of platform altijd up-to-date is en optimaal presteert.",
    },
  ];

  return (
      <>
      {/* Hero Sectie met Video */}
      <HeroNieuw
        title={"Portalen en Platformen"}
        description={
          "Bouw uw digitale ecosysteem met op maat gemaakte portalen en platformen die naadloos integreren met uw bedrijfsprocessen en de gebruikerservaring naar een hoger niveau tillen."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/12345678/file/original-portalen.mp4"}
      />

      {/* Extra Informatie Sectie met Video */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom kiezen voor digitale portalen en platformen?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                In de huidige digitale economie zijn portalen en platformen onmisbaar geworden. Ze bieden een centrale toegangspoort tot informatie, diensten en interacties. Of u nu interne bedrijfsprocessen wilt stroomlijnen of een extern platform voor klanten wilt creëren, een goed ontwikkeld digitaal portaal biedt de flexibiliteit en schaalbaarheid die nodig is om te groeien.
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
                  src="https://cdn.dribbble.com/userupload/98765432/file/original-portalen-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Sectie: Uitgebreide Uitleg (700+ woorden) */}
      <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
            In-Depth: De Kracht van Digitale Portalen en Platformen
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              Digitale portalen en platformen vormen het hart van de moderne digitale strategie. Ze fungeren als centrale toegangspunten waar informatie, diensten en interacties samenkomen. Deze systemen bieden gebruikers een geïntegreerde ervaring en stellen bedrijven in staat om hun aanbod op een gestructureerde en toegankelijke manier te presenteren. In een wereld waar digitale connectiviteit essentieel is, maken portalen en platformen het mogelijk om klanten, partners en interne teams naadloos met elkaar te verbinden.
            </p>
            <p>
              Een van de belangrijkste voordelen van een digitaal portaal is de centralisatie van informatie. In plaats van verschillende, losstaande systemen te gebruiken, bundelt een portaal alle belangrijke data op één plek. Dit zorgt voor een overzichtelijk beheer van klantinformatie, productdata en andere cruciale bedrijfsinformatie. Het resultaat is een efficiënter bedrijfsproces waarin alle belanghebbenden toegang hebben tot dezelfde betrouwbare data.
            </p>
            <p>
              Daarnaast bieden digitale platformen de mogelijkheid om verschillende diensten te integreren. Denk bijvoorbeeld aan een e-commerce platform dat niet alleen als online winkel functioneert, maar ook extra diensten zoals klantenservice, community features en contentmanagement aanbiedt. Dit zorgt voor een holistische gebruikerservaring, waarbij klanten niet alleen producten kunnen kopen, maar ook direct kunnen communiceren en informatie vinden. De integratie van meerdere functionaliteiten in één platform maakt het beheer eenvoudiger en verhoogt de tevredenheid van de gebruiker.
            </p>
            <p>
              Een ander cruciaal aspect van portalen en platformen is de schaalbaarheid. Naarmate uw bedrijf groeit, moet uw digitale infrastructuur mee-evolueren. Een goed ontwikkeld platform is ontworpen met de flexibiliteit om nieuwe modules en diensten te integreren, zonder dat dit ten koste gaat van de prestaties. Dit betekent dat u zich geen zorgen hoeft te maken over de technische beperkingen, maar zich kunt concentreren op groei en innovatie.
            </p>
            <p>
              Veiligheid en privacy spelen een belangrijke rol bij digitale portalen. Met de toenemende hoeveelheid data die wordt verzameld en verwerkt, is het van essentieel belang dat uw platform voldoet aan de strengste beveiligingsnormen. Geavanceerde encryptie, toegangscontroles en regelmatige beveiligingsupdates zijn standaard onderdelen van een robuust portaal. Hierdoor beschermt u niet alleen de gegevens van uw klanten, maar bouwt u ook vertrouwen op bij uw gebruikers.
            </p>
            <p>
              Innovatie staat centraal in de ontwikkeling van moderne platformen. Technologieën zoals cloud computing, big data analytics en kunstmatige intelligentie worden steeds vaker geïntegreerd in digitale portalen. Deze innovaties maken het mogelijk om real-time inzichten te verkrijgen, klantgedrag te analyseren en gepersonaliseerde ervaringen te bieden. Zo kan een platform niet alleen statische informatie presenteren, maar ook dynamisch inspelen op de behoeften van de gebruiker.
            </p>
            <p>
              De implementatie van een digitaal portaal of platform is een complex proces dat een multidisciplinaire aanpak vereist. Het begint met een grondige analyse van uw bedrijfsdoelstellingen en de wensen van uw gebruikers. Vervolgens wordt er een concept ontwikkeld dat de basis legt voor het ontwerp en de functionaliteiten van het platform. Gedurende het ontwikkelproces werken ontwerpers, ontwikkelaars en data-specialisten nauw samen om een oplossing te creëren die niet alleen technisch robuust is, maar ook visueel aantrekkelijk en gebruiksvriendelijk.
            </p>
            <p>
              Na de implementatie is continue optimalisatie van cruciaal belang. Digitale platformen zijn nooit “af” – ze moeten voortdurend worden aangepast en verbeterd op basis van gebruikersfeedback en veranderende marktomstandigheden. Regelmatige updates, nieuwe functionaliteiten en prestatieverbeteringen zorgen ervoor dat uw platform relevant en effectief blijft. Dit is essentieel om de concurrentie voor te blijven in een snel veranderende digitale wereld.
            </p>
            <p>
              Tot slot is het belangrijk om te benadrukken dat een digitaal portaal of platform niet alleen een technische investering is, maar ook een strategische keuze. Het is een instrument dat uw bedrijf helpt om beter in te spelen op de behoeften van de klant, de efficiëntie te verhogen en uiteindelijk de omzet te stimuleren. Door te investeren in een op maat gemaakt platform, legt u de basis voor duurzame groei en innovatie.
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
                Ons Portalen en Platformen Proces
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Stap voor stap naar uw ideale digitale oplossing
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Analyse en Strategie",
                    description:
                      "Wij beginnen met een grondige analyse van uw bedrijfsprocessen en de wensen van uw doelgroep om de beste digitale strategie te bepalen.",
                  },
                  {
                    title: "Concept en Ontwerp",
                    description:
                      "Op basis van onze analyse ontwikkelen we een concept en visueel ontwerp dat de basis vormt voor uw op maat gemaakte portaal of platform.",
                  },
                  {
                    title: "Ontwikkeling en Integratie",
                    description:
                      "Onze experts bouwen het systeem op maat en integreren het naadloos met uw bestaande IT-infrastructuur, zodat u direct kunt profiteren van een geïntegreerde oplossing.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voor de lancering doorloopt uw platform een intensieve testfase, waarin we prestatie, veiligheid en gebruiksvriendelijkheid optimaliseren.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na een succesvolle lancering bieden wij continue ondersteuning en onderhoud, zodat uw digitale oplossing altijd up-to-date blijft.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "Wij monitoren de prestaties en passen op basis van gebruikersfeedback iteratieve verbeteringen toe, zodat uw platform blijft evolueren.",
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
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over onze digitale portalen en platformen.
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
                Voor meer informatie over onze digitale portalen en platformen kunt u onze{" "}
                <Link href="/contact" className="inline-block text-black font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                                <Link href="tel:0103220410"> 
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
          <h2 className="text-4xl font-bold mb-8">Klaar om uw digitale platform te lanceren?</h2>
          <p className="text-xl mb-12">
            Ontwikkel een geïntegreerd digitaal portaal dat al uw diensten en informatie bundelt en uw gebruikers een naadloze ervaring biedt.
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
