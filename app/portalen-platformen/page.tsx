"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from 'next-seo';

export default function PortalenPlatformenPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat zijn portalen en platformen?",
      answer:
        "Portalen en platformen vormen de digitale ruggengraat van moderne organisaties. Waar een portaal fungeert als een toegankelijke interface voor informatie en diensten, bieden platformen een robuuste omgeving voor interactie, samenwerking en maatwerk.",
    },
    {
      question: "Welke voordelen bieden moderne portalen en platformen?",
      answer:
        "Moderne portalen en platformen zorgen voor een geïntegreerde gebruikerservaring, bevorderen samenwerking en verhogen de efficiëntie. Ze stellen gebruikers in staat snel toegang te krijgen tot informatie en diensten, wat de productiviteit en klanttevredenheid verbetert.",
    },
    {
      question: "Welke technologieën worden gebruikt bij de ontwikkeling?",
      answer:
        "Wij maken gebruik van de nieuwste technologieën, waaronder HTML5, CSS3, JavaScript en moderne frameworks zoals React, Vue en Angular. Dit stelt ons in staat dynamische, schaalbare en veilige digitale omgevingen te creëren.",
    },
    {
      question: "Hoe lang duurt een typisch project voor portalen en platformen?",
      answer:
        "De ontwikkelingstijd varieert afhankelijk van de complexiteit, maar een standaard project duurt doorgaans tussen de 6 en 12 weken.",
    },
    {
      question: "Bieden jullie ondersteuning na de lancering?",
      answer:
        "Ja, wij bieden uitgebreide onderhouds- en supportpakketten om ervoor te zorgen dat uw portaal of platform altijd up-to-date en veilig is.",
    },
    {
      question: "Is mijn portaal of platform volledig responsive?",
      answer:
        "Absoluut, wij zorgen ervoor dat al onze projecten volledig responsive zijn en op elk apparaat optimaal functioneren.",
    },
  ];

  return (
    <div className="bg-white text-black">
      <NextSeo
        title="Portalen en Platformen | Moderne, Responsive Weboplossingen"
        description="Ontdek hoe portalen en platformen uw organisatie transformeren. Wij ontwikkelen moderne, veilige en gebruiksvriendelijke digitale omgevingen met de nieuwste technologieën."
        canonical="https://www.multichoiceagency.nl/portalen-platformen"
        openGraph={{
          type: 'website',
          url: 'https://www.multichoiceagency.nl/portalen-platformen',
          title: 'Portalen en Platformen | Moderne, Responsive Weboplossingen',
          description:
            'Ontdek hoe portalen en platformen uw organisatie transformeren. Wij ontwikkelen moderne, veilige en gebruiksvriendelijke digitale omgevingen met de nieuwste technologieën.',
          images: [
            {
              url: '/partners/portalen-platformen.png',
              width: 1200,
              height: 630,
              alt: 'Portalen en Platformen',
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
          { position: 2, name: 'Portalen en Platformen', item: 'https://www.multichoiceagency.nl/portalen-platformen' },
        ]}
      />

      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Waarom zijn portalen en platformen essentieel?',
            acceptedAnswerText:
              'Ze vormen de digitale ruggengraat van moderne organisaties, faciliteren samenwerking, centraliseren informatie en verbeteren de gebruikerservaring.',
          },
          {
            questionName: 'Welke technologieën worden gebruikt?',
            acceptedAnswerText:
              'Wij gebruiken moderne tools en frameworks zoals React, Vue en Angular, in combinatie met HTML5, CSS3 en JavaScript voor het bouwen van dynamische en veilige omgevingen.',
          },
          {
            questionName: 'Hoe lang duurt een project gemiddeld?',
            acceptedAnswerText:
              'Afhankelijk van de complexiteit en vereisten duurt een project gemiddeld tussen de 6 en 12 weken.',
          },
          {
            questionName: 'Is mijn project volledig responsive?',
            acceptedAnswerText:
              'Ja, al onze projecten worden ontwikkeld met een focus op responsiviteit, zodat ze op elk apparaat optimaal functioneren.',
          },
          {
            questionName: 'Bieden jullie ondersteuning na lancering?',
            acceptedAnswerText:
              'Ja, wij bieden uitgebreide support- en onderhoudspakketten om de veiligheid en functionaliteit van uw project te waarborgen.',
          },
        ]}
      />

      {/* Hero Sectie */}
      <HeroNieuw
        title={"Portalen en Platformen"}
        description={
          "Ontdek hoe wij moderne digitale omgevingen ontwikkelen die de gebruikerservaring optimaliseren en uw organisatie versterken."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={
          "https://cdn.dribbble.com/userupload/13697628/file/original-d5b38b0f802f1e1f969383bc50adc434.mp4"
        }
      />

      {/* Overige Sectie met Extra Informatie en Video */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom kiezen voor portalen en platformen?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                In het digitale tijdperk is een krachtig portaal of platform cruciaal voor het centraliseren van informatie en het faciliteren van interactie. Onze aanpak zorgt voor snelle laadtijden, intuïtieve navigatie en een consistent design dat uw organisatie versterkt.
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
                  src="https://cdn.dribbble.com/userupload/15425359/file/original-2b2e2d473e5fee8e7d8d4f6ee7860d94.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Sectie: Uitgebreide Uitleg over Portalen en Platformen (minimaal 700 woorden) */}
      <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
            In-Depth: De Kracht van Portalen en Platformen
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              Portalen en platformen vormen de kern van digitale transformatie in zowel het bedrijfsleven als de publieke sector. Zij fungeren als de centrale toegangspunten tot informatie, diensten en interactie. Waar traditionele websites vaak beperkt blijven tot het presenteren van statische inhoud, bieden portalen en platformen een dynamische en geïntegreerde omgeving waarin gebruikers niet alleen informatie kunnen opzoeken, maar ook actief kunnen participeren, communiceren en transacties uitvoeren.
            </p>
            <p>
              Een portaal is in essentie een toegangspunt dat gebruikers helpt om snel en efficiënt de informatie te vinden die zij nodig hebben. Het aggregeert content uit verschillende bronnen en presenteert deze op een overzichtelijke en intuïtieve manier. Dit maakt het mogelijk om complexe datasets en informatiebronnen samen te brengen in één uniform overzicht, wat niet alleen tijd bespaart maar ook de gebruikservaring aanzienlijk verbetert.
            </p>
            <p>
              Platformen gaan een stap verder door gebruikers in staat te stellen actief te participeren in een digitale omgeving. Zij bieden de mogelijkheid tot interactie, samenwerking en maatwerk. Dit kan variëren van sociale netwerken en e-commerce sites tot zakelijke samenwerkingsomgevingen en educatieve portalen. Door de combinatie van informatievoorziening en interactieve elementen, ontstaat er een ecosysteem waarin zowel de gebruiker als de organisatie profijt heeft.
            </p>
            <p>
              De ontwikkeling van een succesvol portaal of platform begint met een grondige analyse van de behoeften en doelstellingen van de organisatie. Er wordt gekeken naar de gewenste functionaliteiten, de integratie van bestaande systemen en de specifieke eisen op het gebied van beveiliging en performance. Dit vormt de basis voor een doordacht concept dat vervolgens door een uitgebreid ontwerpproces tot leven wordt gebracht.
            </p>
            <p>
              Een belangrijk aspect is de responsiviteit. In een wereld waarin gebruikers via diverse apparaten toegang hebben tot digitale diensten, is het cruciaal dat de interface zich naadloos aanpast aan verschillende schermformaten. Mobile-first design en progressive enhancement zorgen ervoor dat de ervaring consistent en optimaal is, ongeacht of de gebruiker een smartphone, tablet of desktop gebruikt.
            </p>
            <p>
              Naast het visuele en functionele ontwerp speelt veiligheid een sleutelrol bij portalen en platformen. Gegevensbescherming, privacy en compliance met regelgeving zoals de AVG zijn essentiële onderdelen van het ontwikkelproces. Door robuuste beveiligingsmaatregelen te implementeren – zoals encryptie, multi-factor authenticatie en regelmatige beveiligingsaudits – wordt ervoor gezorgd dat de digitale omgeving bestand is tegen cyberdreigingen en datalekken.
            </p>
            <p>
              De technische architectuur van een portaal of platform is vaak gebaseerd op een modulaire en schaalbare opzet. Het gebruik van microservices en API-gedreven integraties maakt het mogelijk om verschillende onderdelen van het systeem onafhankelijk van elkaar te ontwikkelen en te onderhouden. Hierdoor kunnen updates sneller en efficiënter worden doorgevoerd, terwijl de algehele stabiliteit en performance van de applicatie behouden blijft.
            </p>
            <p>
              Een uitstekende gebruikerservaring (UX) staat centraal in elke digitale omgeving. Intuïtieve navigatie, snelle laadtijden en gepersonaliseerde content dragen bij aan een hoge gebruikerstevredenheid. Door continu te testen en gebruikersfeedback te verzamelen, kan de interface iteratief worden verbeterd. Dit resulteert in een platform dat niet alleen functioneel is, maar ook aansluit bij de verwachtingen en behoeften van de eindgebruiker.
            </p>
            <p>
              De ontwikkeling van portalen en platformen vraagt om een nauwe samenwerking tussen verschillende disciplines. Ontwerpers, ontwikkelaars, IT-specialisten en strategische adviseurs werken samen om een geïntegreerde oplossing te realiseren. Deze multidisciplinaire aanpak zorgt ervoor dat alle aspecten – van de visuele presentatie tot de onderliggende technische infrastructuur – naadloos op elkaar aansluiten, wat resulteert in een gebruiksvriendelijke, veilige en efficiënte digitale omgeving.
            </p>
            <p>
              Zakelijk gezien bieden portalen en platformen talrijke voordelen. Zij centraliseren niet alleen informatie en diensten, maar verbeteren ook de interne communicatie en samenwerking binnen organisaties. Dit leidt tot efficiëntere werkprocessen, lagere operationele kosten en een betere klantinteractie. Daarnaast opent een goed ontwikkeld digitaal platform de deur naar nieuwe vormen van datagedreven besluitvorming en innovatie, wat bijdraagt aan een sterkere concurrentiepositie.
            </p>
            <p>
              De toekomst van portalen en platformen ziet er veelbelovend uit. Met de voortdurende ontwikkelingen op het gebied van kunstmatige intelligentie, machine learning en big data analytics zullen deze digitale omgevingen steeds slimmer en meer gepersonaliseerd worden. Innovaties zoals chatbots, geautomatiseerde aanbevelingssystemen en real-time data-integratie zorgen ervoor dat gebruikers nog sneller en gerichter bediend worden. Bovendien speelt de integratie van het Internet of Things (IoT) een steeds belangrijkere rol, waardoor apparaten en sensoren met elkaar communiceren om waardevolle data te genereren.
            </p>
            <p>
              Tot slot is het belangrijk te benadrukken dat de ontwikkeling van hoogwaardige portalen en platformen een continu proces is. De digitale wereld evolueert voortdurend en daarmee ook de wensen van gebruikers. Het is daarom essentieel om niet alleen bij de lancering, maar ook tijdens de nazorg te blijven investeren in updates en optimalisaties. Door regelmatig de functionaliteit, veiligheid en gebruikerservaring te evalueren en te verbeteren, blijft uw digitale omgeving relevant en toekomstbestendig.
            </p>
            <p>
              Samenvattend vormen portalen en platformen een onmisbaar instrument voor organisaties die willen inspelen op de digitale transformatie. Ze combineren functionaliteit, veiligheid en gebruiksgemak in één geïntegreerd systeem dat is toegespitst op de specifieke behoeften van de moderne gebruiker. Investeren in een kwalitatief hoogstaand digitaal platform betekent investeren in de toekomst van uw organisatie.
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
                Ons Ontwikkelingsproces voor Portalen & Platformen
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Stap voor stap naar uw ideale digitale oplossing
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Concept en Analyse",
                    description:
                      "Wij starten met een grondige analyse van uw organisatie, behoeften en doelgroep om een uniek concept te ontwikkelen dat naadloos aansluit bij uw doelstellingen.",
                  },
                  {
                    title: "Prototype en Wireframing",
                    description:
                      "Vervolgens creëren wij wireframes en interactieve prototypes om de structuur, flow en gebruikerservaring van uw portaal of platform te visualiseren.",
                  },
                  {
                    title: "Ontwikkeling en Implementatie",
                    description:
                      "Onze experts ontwikkelen het digitale platform met behulp van de nieuwste technologieën, zorgen voor een responsive design en integreren alle gewenste functionaliteiten.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voordat de lancering vindt plaats, testen we de applicatie uitvoerig op verschillende apparaten en optimaliseren we performance, veiligheid en SEO.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na de succesvolle lancering bieden wij uitgebreide ondersteuning en onderhoud zodat uw digitale oplossing continu optimaal functioneert.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "Wij verzamelen gebruikersfeedback en passen de oplossing continu aan om de gebruikerservaring en functionaliteit verder te verbeteren.",
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
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over onze digitale oplossingen voor portalen en platformen.
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
                Voor meer informatie over onze digitale oplossingen kunt u onze{" "}
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
          <h2 className="text-4xl font-bold mb-8">Klaar om uw digitale strategie te versterken?</h2>
          <p className="text-xl mb-12">
            Transformeer uw organisatie met een modern portaal of platform dat naadloos aansluit bij de behoeften van uw gebruikers.
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
