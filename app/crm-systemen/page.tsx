"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from 'next-seo';

const CRMSysteemSEO = () => {
  return (
    <>
      <NextSeo
        title="CRM Systemen: Optimaliseer Uw Klantrelaties"
        description="Ontdek hoe een op maat gemaakt CRM systeem uw bedrijfsprocessen stroomlijnt, klantrelaties versterkt en de verkoop stimuleert. Laat uw CRM systeem ontwikkelen door onze experts."
        canonical="https://www.multichoiceagency.nl/crm-systemen"
        openGraph={{
          type: 'website',
          url: 'https://www.multichoiceagency.nl/crm-systemen',
          title: 'CRM Systemen: Optimaliseer Uw Klantrelaties',
          description:
            'Ontdek hoe een op maat gemaakt CRM systeem uw bedrijfsprocessen stroomlijnt, klantrelaties versterkt en de verkoop stimuleert. Laat uw CRM systeem ontwikkelen door onze experts.',
          images: [
            {
              url: '/partners/crm-systemen.png',
              width: 1200,
              height: 630,
              alt: 'CRM Systemen',
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
          { position: 2, name: 'CRM Systemen', item: 'https://www.multichoiceagency.nl/crm-systemen' },
        ]}
      />

      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Wat is een CRM systeem?',
            acceptedAnswerText:
              'Een CRM (Customer Relationship Management) systeem is software die bedrijven helpt bij het beheren van klantinteracties, sales en marketingprocessen.',
          },
          {
            questionName: 'Waarom is een CRM systeem belangrijk voor mijn bedrijf?',
            acceptedAnswerText:
              'Een effectief CRM systeem verbetert klantrelaties, optimaliseert verkoopprocessen en helpt bij het analyseren van klantgedrag, wat resulteert in een hogere klanttevredenheid en omzet.',
          },
          {
            questionName: 'Kan ik het CRM systeem aanpassen aan mijn bedrijfsbehoeften?',
            acceptedAnswerText:
              'Ja, op maat gemaakte CRM systemen kunnen volledig worden afgestemd op de specifieke processen en wensen van uw bedrijf.',
          },
          {
            questionName: 'Hoe lang duurt het om een CRM systeem te ontwikkelen?',
            acceptedAnswerText:
              'Afhankelijk van de complexiteit van uw project duurt de ontwikkeling van een CRM systeem gemiddeld tussen de 8 en 16 weken.',
          },
          {
            questionName: 'Bieden jullie ondersteuning en onderhoud na de lancering?',
            acceptedAnswerText:
              'Ja, wij bieden uitgebreide support- en onderhoudspakketten om ervoor te zorgen dat uw CRM systeem altijd up-to-date en optimaal functioneert.',
          },
        ]}
      />
    </>
  );
};

export default function CRMSysteemPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Wat is een CRM systeem en waarom is het essentieel?",
      answer:
        "Een CRM systeem helpt bedrijven bij het centraliseren van klantgegevens, automatiseren van sales- en marketingprocessen en het analyseren van klantgedrag. Dit leidt tot efficiëntere workflows en een hogere omzet.",
    },
    {
      question: "Hoe kan een CRM systeem mijn bedrijfsprocessen verbeteren?",
      answer:
        "Door klantinformatie centraal te beheren en processen te automatiseren, verbetert een CRM systeem de communicatie, verhoogt het de klanttevredenheid en stroomlijnt het de verkoopcyclus.",
    },
    {
      question: "Kan het CRM systeem volledig op maat gemaakt worden?",
      answer:
        "Ja, wij ontwikkelen CRM systemen die volledig zijn afgestemd op de unieke behoeften en processen van uw bedrijf, zodat u precies krijgt wat u nodig heeft.",
    },
    {
      question: "Wat is de gemiddelde ontwikkeltijd van een CRM systeem?",
      answer:
        "Afhankelijk van de functionaliteiten en complexiteit kan de ontwikkeling van een CRM systeem variëren van 8 tot 16 weken.",
    },
    {
      question: "Bieden jullie ook training en ondersteuning na implementatie?",
      answer:
        "Absoluut, wij bieden uitgebreide trainingen, support en onderhoud om ervoor te zorgen dat u het maximale uit uw CRM systeem haalt.",
    },
    {
      question: "Hoe helpt een CRM systeem bij het verhogen van de omzet?",
      answer:
        "Door klantgegevens effectief te beheren en verkoopprocessen te optimaliseren, helpt een CRM systeem bij het identificeren van verkoopkansen, het verbeteren van klantrelaties en het verhogen van de omzet.",
    },
  ];

  return (
    <div className="bg-white text-black" >
      {/* Hero Sectie */}
      <HeroNieuw
        title={"CRM Systemen"}
        description={
          "Optimaliseer uw klantrelaties en bedrijfsprocessen met een op maat gemaakt CRM systeem. Onze oplossingen helpen u bij het beheren van klantdata, sales en marketing voor maximale groei."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/12345678/file/original-crm-video.mp4"}  {/* Pas de video URL aan */}
      />

      {/* Overige Sectie met Extra Informatie en Video */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom kiezen voor een CRM systeem?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                Een effectief CRM systeem centraliseert klantinformatie, automatiseert repetitieve taken en biedt waardevolle inzichten. Dit resulteert in een efficiëntere sales, betere klantenservice en uiteindelijk een hogere omzet.
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
                  src="https://cdn.dribbble.com/userupload/98765432/file/original-crm-video2.mp4"  {/* Pas de video URL aan */}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth "Waarom CRM?" Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Wat maakt een CRM systeem waardevol?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                Met een CRM systeem beheert u al uw klantgegevens centraal en automatiseert u belangrijke processen. Dit zorgt voor een efficiëntere bedrijfsvoering en een betere klantrelatie.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-white">
                <li>Centralisatie van klantinformatie</li>
                <li>Automatisering van sales- en marketingprocessen</li>
                <li>Diepgaande klantanalyses en rapportages</li>
                <li>Verbeterde klantrelaties en retentie</li>
                <li>Optimalisatie van de verkoopcyclus</li>
              </ul>
            </div>
            {/* Video Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="visible">
                <video
                  className="w-full h-full object-contain rounded-md"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="https://cdn.dribbble.com/userupload/98765432/file/original-crm-video2.mp4"  {/* Zelfde video als hierboven, aanpasbaar */}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
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
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over onze CRM systemen en de ontwikkeling ervan.
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
                Voor meer informatie over onze CRM systemen en diensten kunt u onze{" "}
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
          <h2 className="text-4xl font-bold mb-8">Klaar om uw CRM systeem te optimaliseren?</h2>
          <p className="text-xl mb-12">
            Laat uw bedrijfsprocessen verbeteren en klantrelaties versterken met een op maat gemaakt CRM systeem.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-lime-500 rounded-full transition duration-200"
          >
            Start uw CRM project
          </Link>
        </div>
      </section>
    </div>
  );
}
