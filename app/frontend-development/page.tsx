"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from 'next-seo';

export default function FrontendDevelopmentPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat houdt frontend development in?",
      answer:
        "Frontend development richt zich op het bouwen van de visuele interface van een website. Dit omvat de layout, navigatie, interactieve elementen en animaties die samen zorgen voor een optimale gebruikerservaring.",
    },
    {
      question: "Welke voordelen biedt een moderne frontend?",
      answer:
        "Een moderne frontend zorgt voor een aantrekkelijke, gebruiksvriendelijke en snelle website. Dit verbetert de gebruikerservaring, verhoogt conversies en versterkt uw merkidentiteit.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor frontend development?",
      answer:
        "Wij maken gebruik van HTML5, CSS3, JavaScript en moderne frameworks zoals React, Vue of Angular, zodat we dynamische en schaalbare webapplicaties kunnen bouwen.",
    },
    {
      question: "Hoe lang duurt een typisch frontend project?",
      answer:
        "De ontwikkeltijd varieert per project, maar een standaard frontend project duurt meestal tussen de 4 en 8 weken.",
    },
    {
      question: "Bieden jullie ook optimalisatie voor snelheid en SEO?",
      answer:
        "Ja, naast een prachtig design zorgen we ervoor dat uw website snel laadt en technisch geoptimaliseerd is voor zoekmachines, wat resulteert in betere vindbaarheid en een optimale gebruikerservaring.",
    },
    {
      question: "Is mijn website volledig responsive?",
      answer:
        "Absoluut, wij zorgen ervoor dat uw website op elk apparaat perfect functioneert, of het nu gaat om desktops, tablets of mobiele telefoons.",
    },
  ];

  return (
    <div className="bg-white text-black">
      <NextSeo
        title="Frontend Development | Moderne, Responsive Webapplicaties"
        description="Ontdek hoe frontend development uw website transformeert. Wij bouwen moderne, snelle en visueel aantrekkelijke interfaces met de nieuwste technologieën."
        canonical="https://www.multichoiceagency.nl/frontend-development"
        openGraph={{
          type: 'website',
          url: 'https://www.multichoiceagency.nl/frontend-development',
          title: 'Frontend Development | Moderne, Responsive Webapplicaties',
          description:
            'Ontdek hoe frontend development uw website transformeert. Wij bouwen moderne, snelle en visueel aantrekkelijke interfaces met de nieuwste technologieën.',
          images: [
            {
              url: '/partners/frontend-development.png',
              width: 1200,
              height: 630,
              alt: 'Frontend Development',
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
          { position: 2, name: 'Frontend Development', item: 'https://www.multichoiceagency.nl/frontend-development' },
        ]}
      />

      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Waarom is frontend development belangrijk?',
            acceptedAnswerText:
              'De frontend is het visitekaartje van uw website en bepaalt de eerste indruk en gebruikservaring. Een goed ontwikkelde frontend zorgt voor een optimale gebruikerservaring en stimuleert conversies.',
          },
          {
            questionName: 'Welke technologieën worden er gebruikt?',
            acceptedAnswerText:
              'Wij werken met moderne tools en frameworks zoals React, Vue en Angular, gecombineerd met HTML5, CSS3 en JavaScript om dynamische en responsive interfaces te bouwen.',
          },
          {
            questionName: 'Hoe lang duurt een frontend project?',
            acceptedAnswerText:
              'Afhankelijk van de complexiteit en functionaliteiten duurt een project gemiddeld tussen de 4 en 8 weken.',
          },
          {
            questionName: 'Is mijn website volledig responsive?',
            acceptedAnswerText:
              'Ja, wij zorgen ervoor dat al onze frontend projecten volledig responsive zijn en op elk apparaat optimaal functioneren.',
          },
          {
            questionName: 'Bieden jullie ondersteuning na de lancering?',
            acceptedAnswerText:
              'Ja, wij bieden uitgebreide support- en onderhoudpakketten zodat uw website altijd up-to-date blijft en goed presteert.',
          },
        ]}
      />

      {/* Hero Sectie */}
      <HeroNieuw
        title={"Frontend Development"}
        description={
          "Ontdek hoe wij moderne, responsive webapplicaties ontwikkelen die de gebruikerservaring optimaliseren en uw merk versterken."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={
          "https://cdn.dribbble.com/userupload/20585023/file/original-f77ab4e11e45439d6a0c173d8ad2c6cb.mp4"
        }
      />

      {/* Overige Sectie met Extra Informatie en Video */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom kiezen voor frontend development?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                In het digitale tijdperk is een sterke frontend cruciaal voor een optimale gebruikerservaring. Onze aanpak zorgt voor snelle laadtijden, intuïtieve navigatie en een consistent design dat uw merk versterkt.
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
                  src="https://cdn.dribbble.com/userupload/6441914/file/large-90209f3f4e3ea645eba4d185397ecf58.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Sectie: Uitgebreide Uitleg over Frontend Development (700+ woorden) */}
      <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
            In-Depth: De Kracht van Frontend Development
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              Frontend development is de kunst en wetenschap van het ontwikkelen van de gebruikersinterface van een website. Het vormt de brug tussen de technologie en de gebruiker, en speelt een cruciale rol in hoe informatie wordt gepresenteerd en ervaren. Een goed ontworpen frontend zorgt voor een aantrekkelijke en intuïtieve interface, die de gebruiker niet alleen visueel aanspreekt maar ook functioneel ondersteunt.
            </p>
            <p>
              Een essentieel aspect van frontend development is het realiseren van een responsive design. In een tijd waarin consumenten toegang hebben tot internet via allerlei apparaten – van desktops tot tablets en smartphones – is het van vitaal belang dat een website zich aanpast aan verschillende schermformaten. Responsive design zorgt ervoor dat de inhoud en navigatie op elk apparaat duidelijk en toegankelijk blijven, wat de gebruikerservaring aanzienlijk verbetert en bijdraagt aan een hogere klanttevredenheid.
            </p>
            <p>
              Daarnaast is snelheid een kritieke factor in frontend development. Gebruikers hebben weinig geduld en verwachten dat een website snel laadt. Door technieken zoals code splitting, lazy loading en het optimaliseren van afbeeldingen en scripts, kunnen ontwikkelaars de prestaties van een website aanzienlijk verbeteren. Dit zorgt niet alleen voor een betere gebruikerservaring, maar heeft ook een positief effect op de zoekmachineoptimalisatie (SEO) van de site, aangezien zoekmachines snellere websites vaak hoger waarderen.
            </p>
            <p>
              Een andere belangrijke component is toegankelijkheid. Toegankelijkheid betekent dat een website bruikbaar is voor iedereen, inclusief mensen met beperkingen. Dit omvat het gebruik van semantische HTML, ARIA-labels en andere best practices om ervoor te zorgen dat alle gebruikers, ongeacht hun fysieke of technologische beperkingen, de website kunnen gebruiken. Door toegankelijkheid te integreren in het ontwikkelproces, creëert men een inclusieve ervaring die de reikwijdte van de website vergroot.
            </p>
            <p>
              Naast technische optimalisaties speelt ook design een grote rol in frontend development. Het visuele aspect van een website is vaak het eerste wat opvalt bij een bezoeker. Door gebruik te maken van aantrekkelijke kleurenschema’s, consistente typografie en een goed doordachte lay-out, kan een website niet alleen informatie overbrengen, maar ook een positieve emotionele reactie oproepen bij de gebruiker. Een goed design ondersteunt de merkidentiteit en zorgt ervoor dat de website er professioneel uitziet.
            </p>
            <p>
              De rol van moderne frontend frameworks en libraries kan niet worden onderschat. Tools zoals React, Vue en Angular bieden ontwikkelaars krachtige middelen om dynamische en interactieve webapplicaties te bouwen. Deze frameworks maken het mogelijk om complexe UI-componenten te creëren die gemakkelijk herbruikbaar zijn en snel kunnen worden aangepast aan veranderende eisen. Door gebruik te maken van deze technologieën kunnen we efficiënter werken en innovatiever ontwerpen, wat leidt tot betere en meer schaalbare webapplicaties.
            </p>
            <p>
              Naast de technische en visuele aspecten van frontend development is de gebruikerservaring (UX) van groot belang. UX design richt zich op het optimaliseren van de interactie tussen de gebruiker en de website. Dit omvat het analyseren van gebruikersgedrag, het testen van de interface en het continu verbeteren van de navigatie en functionaliteit. Een goede UX zorgt ervoor dat bezoekers gemakkelijk vinden wat ze zoeken, wat leidt tot hogere conversieratio’s en een sterkere klantloyaliteit.
            </p>
            <p>
              Innovatie in frontend development stopt niet bij de technologieën die we vandaag gebruiken. De digitale wereld evolueert continu, en daarmee ook de verwachtingen van de gebruiker. Ontwikkelaars moeten constant op de hoogte blijven van de nieuwste trends, zoals Progressive Web Apps (PWA’s), motion design en micro-interacties. Deze innovaties dragen bij aan een nog rijkere gebruikerservaring en helpen bedrijven om zich te onderscheiden in een concurrerende markt.
            </p>
            <p>
              Tot slot is samenwerking tussen verschillende disciplines essentieel voor succesvol frontend development. Designers, ontwikkelaars, marketeers en SEO-specialisten werken samen om een geïntegreerde digitale strategie te realiseren. Deze samenwerking zorgt ervoor dat alle aspecten van een website – van het visuele ontwerp tot de technische implementatie en optimalisatie – naadloos op elkaar aansluiten en bijdragen aan de algehele prestaties van de website.
            </p>
            <p>
              Samengevat, frontend development is veel meer dan alleen het bouwen van een mooie website. Het is een multidisciplinaire aanpak die design, technologie, performance en gebruikerservaring combineert om een digitale omgeving te creëren die zowel functioneel als visueel indrukwekkend is. Door te investeren in hoogwaardige frontend development kunnen bedrijven hun online aanwezigheid versterken, de gebruikerservaring optimaliseren en uiteindelijk hun bedrijfsresultaten verbeteren. Onze expertise in frontend development stelt ons in staat om innovatieve en toekomstbestendige webapplicaties te bouwen die de verwachtingen van vandaag overtreffen en klaar zijn voor de uitdagingen van morgen.
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
                Ons Frontend Ontwikkelingsproces
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Stap voor stap naar uw ideale frontend
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Concept en Design",
                    description:
                      "Wij starten met een uitgebreide intake en analyse van uw wensen en doelgroep om een uniek concept te ontwikkelen.",
                  },
                  {
                    title: "Prototype en Wireframing",
                    description:
                      "Vervolgens maken we wireframes en interactieve prototypes om de structuur en flow van uw website te visualiseren.",
                  },
                  {
                    title: "Ontwikkeling en Implementatie",
                    description:
                      "Onze ontwikkelaars bouwen de frontend met de nieuwste technologieën, zorgen voor een responsive design en implementeren alle gewenste functionaliteiten.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voordat de website live gaat, testen we deze op diverse apparaten en optimaliseren we laadtijden, performance en SEO.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na de lancering bieden we ondersteuning en onderhoud zodat uw website continu optimaal functioneert.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "We verzamelen gebruikersfeedback en passen waar nodig verbeteringen toe om de gebruikerservaring te maximaliseren.",
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
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over onze frontend development diensten.
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
