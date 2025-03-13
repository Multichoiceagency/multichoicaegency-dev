"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from "next-seo"

export default function WebshopLatenMaken() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom zou ik mijn webwinkel door Multichoiceagency laten bouwen?",
      answer:
        "Onze experts bouwen alle webshops in WooCommerce. Dit systeem is de winkelomgeving binnen WordPress en wereldwijd het systeem dat het meest gebruikt wordt voor webwinkels. Het staat bovendien bekend om zijn gebruiksvriendelijkheid. Als je jouw webwinkel door Multichoiceagency laat maken, betekent dit dat je jouw webshop eenvoudig zelf kunt onderhouden en beheren.",
    },
    {
      question: "Hoe lang duurt het om een webshop te laten maken?",
      answer:
        "De doorlooptijd van een webshop varieert afhankelijk van de complexiteit en functionaliteiten. Een eenvoudige webshop kan binnen 2 tot 4 weken gereed zijn, terwijl een maatwerk webshop 6 tot 12 weken kan duren. We zorgen ervoor dat je gedurende het hele proces op de hoogte blijft.",
    },
    {
      question: "Kan ik mijn bestaande webshop laten vernieuwen of optimaliseren?",
      answer:
        "Ja, we kunnen je bestaande webshop moderniseren, zowel qua design als prestaties. Dit kan variëren van een visuele opfrissing tot een volledige technische herstructurering om de snelheid, SEO en gebruiksvriendelijkheid te verbeteren.",
    },
    {
      question: "Welke betaalmethoden kunnen worden geïntegreerd in mijn webshop?",
      answer:
        "We kunnen je webshop koppelen aan alle gangbare betaalsystemen zoals iDEAL, PayPal, creditcards, en andere populaire betaalmethoden. Je kunt ook kiezen voor vooruitbetaling of verzending onder rembours. Jij bepaalt hoe je jouw klanten laat betalen.",
    },
    {
      question: "Hoe zorgen jullie ervoor dat mijn webshop goed vindbaar is in Google?",
      answer:
        "We passen zoekmachineoptimalisatie (SEO) toe vanaf de basis, inclusief technische SEO, snelle laadtijden, mobielvriendelijk design en geoptimaliseerde content. We zorgen ervoor dat je webshop goed scoort in zoekmachines en helpen bij de juiste strategie om meer verkeer aan te trekken.",
    },
    {
      question: "Is mijn webshop geschikt voor mobiel en tablets?",
      answer:
        "Ja, alle webshops die we bouwen zijn volledig responsive, wat betekent dat ze zich automatisch aanpassen aan verschillende schermformaten. Dit zorgt voor een optimale gebruikerservaring op desktops, tablets en smartphones.",
    },
    {
      question: "Kan ik zelf producten toevoegen en beheren in mijn webshop?",
      answer:
        "Ja, we bouwen webshops met gebruiksvriendelijke beheersystemen zoals WooCommerce. Hiermee kun je eenvoudig producten, categorieën, prijzen en voorraad beheren zonder technische kennis. Je krijgt toegang tot exclusieve video's met uitleg over hoe je jouw webshop zelf beheert.",
    },
    {
      question: "Hoe zit het met onderhoud en updates na de lancering?",
      answer:
        "We bieden onderhoudspakketten waarmee je webshop veilig en up-to-date blijft. Dit omvat beveiligingsupdates, back-ups, prestatie-optimalisatie en technische ondersteuning. Zo voorkom je problemen en blijft je webshop optimaal functioneren.",
    },
    {
      question: "Kunnen jullie mijn webshop koppelen aan externe systemen zoals voorraad- of boekhoudprogramma's?",
      answer:
        "Ja, we kunnen integraties verzorgen met verschillende systemen zoals voorraadbeheersystemen, boekhoudprogramma's, CRM-software en marketingtools. Hierdoor wordt je webshop een krachtig onderdeel van je bedrijfsvoering.",
    },
    {
      question: "Wat maakt jullie webshops anders dan die van andere aanbieders?",
      answer:
        "Onze webshops onderscheiden zich door de combinatie van professioneel design, gebruiksvriendelijkheid en technische kwaliteit. We focussen niet alleen op het uiterlijk, maar ook op conversie-optimalisatie, snelheid en schaalbaarheid. Bovendien bieden we uitstekende ondersteuning en zorgen we dat je zelf je webshop kunt beheren.",
    },
  ]

  return (
    <div className="bg-white text-black">
      <NextSeo
        title="Webshop Laten Maken | Professionele E-commerce Oplossingen"
        description="Wil je een webshop laten maken? Ontdek de voordelen van een professionele webshop en hoe wij jouw online verkoop kunnen stimuleren. Vraag een offerte aan!"
        canonical="https://www.multichoiceagency.nl/webshop-laten-maken"
        openGraph={{
          type: "website",
          url: "https://www.multichoiceagency.nl/webshop-laten-maken",
          title: "Webshop Laten Maken | Professionele E-commerce Oplossingen",
          description:
            "Wil je een webshop laten maken? Ontdek de voordelen van een professionele webshop en hoe wij jouw online verkoop kunnen stimuleren. Vraag een offerte aan!",
          images: [
            {
              url: "/partners/webshop-laten-maken.png",
              width: 1200,
              height: 630,
              alt: "Webshop laten maken",
            },
          ],
        }}
        twitter={{
          handle: "@jouwtwitterhandle",
          site: "@jouwtwitterhandle",
          cardType: "summary_large_image",
        }}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: "Home", item: "https://www.multichoiceagency.nl" },
          { position: 2, name: "Webshop Laten Maken", item: "https://www.multichoiceagency.nl/webshop-laten-maken" },
        ]}
      />

      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "Waarom is een professionele webshop belangrijk?",
            acceptedAnswerText:
              "Een professionele webshop vergroot je online verkoopkansen, verbetert klantvertrouwen en verhoogt conversies. Het biedt een professionele uitstraling en helpt je beter gevonden te worden in zoekmachines.",
          },
          {
            questionName: "Hoe lang duurt het om een webshop te laten maken?",
            acceptedAnswerText:
              "Een standaard webshop kan binnen 2 tot 4 weken worden opgeleverd. Voor complexe maatwerkprojecten kan de ontwikkeling 6 tot 12 weken duren.",
          },
          {
            questionName: "Is een mobiele versie van de webshop inbegrepen?",
            acceptedAnswerText:
              "Ja, alle webshops die wij ontwikkelen zijn 100% responsive en geoptimaliseerd voor mobiele apparaten, tablets en desktops.",
          },
          {
            questionName: "Welke betaalmethoden kunnen worden geïntegreerd?",
            acceptedAnswerText:
              "We kunnen je webshop koppelen aan alle gangbare betaalsystemen zoals iDEAL, PayPal, creditcards en andere populaire betaalmethoden.",
          },
          {
            questionName: "Bieden jullie onderhoud en support na de lancering?",
            acceptedAnswerText:
              "Ja, we bieden verschillende onderhoudspakketten, inclusief beveiligingsupdates, back-ups en technische ondersteuning.",
          },
        ]}
      />

      <HeroNieuw
        title={"Webshop laten maken"}
        description={"Webshop laten maken? Bij Multichoiceagency vind je de webshop die bij jou past."}
        buttonText={"Offerte aanvragen"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/17109055/file/original-2cafa8b32d4d214f655c9c127ad036fd.mp4"}
      />

      {/* About Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">Webshop specialisten</span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center lg:flex-row-reverse -mx-4">
                {/* Video Column */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/3266205/file/original-65cf49de6dc583c826a888011e6e75ff.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                {/* Text Column */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                      Webshop Laten Maken: Alles Wat Je Moet Weten
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      In het digitale tijdperk is een professionele webshop onmisbaar voor bedrijven en ondernemers. Een
                      goed ontworpen webshop is niet alleen een online winkel, maar ook een krachtig verkoopinstrument.
                      Het bepaalt hoe potentiële klanten jouw producten waarnemen en beïnvloedt hun aankoopbeslissingen.
                      Daarom is een webshop laten maken door een professional een slimme investering.
                    </p>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Een webshop biedt zichtbaarheid, geloofwaardigheid en toegankelijkheid. Klanten zoeken
                      tegenwoordig online naar producten, en zonder een sterke online aanwezigheid mis je kansen. Een op
                      maat gemaakte webshop verhoogt de betrouwbaarheid en zorgt ervoor dat je beter vindbaar bent in
                      zoekmachines.
                    </p>

                    <ul className="text-black">
                      {[
                        "Een Uniek en Aantrekkelijk Design",
                        "Betere Gebruikerservaring",
                        "SEO Geoptimaliseerd voor Beter Vindbaarheid",
                        "Schaalbaarheid en Toekomstbestendigheid",
                        "Professionele Productpresentatie",
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
                          <span className="ml-3 text-xs font-medium text-gray-700 dark:text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overige content */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center -mx-4">
            {/* Linker kolom op desktop (rechter kolom op mobiel) */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h2 className="font-heading text-2xl sm:text-2xl md:text-3xl mb-6 dark:text-white">
                  Waar Moet Je Op Letten Bij Het Laten Maken van een Webshop?
                </h2>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Een goede webshop is meer dan alleen een online catalogus. Het is een compleet verkoopplatform dat
                  gebruiksvriendelijk, veilig en schaalbaar moet zijn. Bij het laten maken van een webshop zijn er
                  verschillende aspecten waar je op moet letten.
                </p>
                <ul className="text-black py-5">
                  {[
                    "E-commerce Expertise: Kies een ontwikkelaar met specifieke ervaring in het bouwen van webshops.",
                    "Gebruiksvriendelijk CMS: Zorg dat je zelf eenvoudig producten kunt toevoegen en beheren.",
                    "Veilige Betalingsopties: Integratie met betrouwbare betaalsystemen is essentieel.",
                    "Mobiele Optimalisatie: Je webshop moet perfect werken op alle apparaten.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center mb-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20" rx="10" fill="#BEF264"></rect>
                        <path
                          d="M14.8 6.40002L8.19995 13L5.19995 10"
                          stroke="#022C22"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="ml-3 text-xs text-gray-700 font-medium font-600 dark:text-white">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-xs font-black text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start jouw webshop project vandaag nog!
                </Link>
              </div>
            </div>

            {/* Rechter kolom op desktop (linker kolom op mobiel) */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="visible">
                <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                  <source
                    src="https://cdn.dribbble.com/userupload/2935470/file/original-41678497c3bbcf77470768a2420438b7.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-gray-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">Hoe Werkt Webshop Development?</span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een succesvolle webshop wordt gebouwd met behulp van:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Strategie en Planning",
                    description:
                      "We beginnen met het begrijpen van je doelen, doelgroep en producten om een effectieve webshop-strategie te ontwikkelen.",
                  },
                  {
                    title: "Design en Gebruikerservaring",
                    description:
                      "We ontwerpen een aantrekkelijke en gebruiksvriendelijke interface die bezoekers omzet in klanten.",
                  },
                  {
                    title: "E-commerce Functionaliteiten",
                    description:
                      "Implementatie van productcatalogi, winkelwagens, betaalsystemen en andere essentiële e-commerce functies.",
                  },
                  {
                    title: "Integratie en Koppelingen",
                    description:
                      "Koppeling met voorraadsystemen, betaalproviders, verzendmethoden en andere bedrijfssystemen.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Uitgebreide tests op functionaliteit, gebruiksvriendelijkheid en prestaties voordat de webshop live gaat.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Professionele lancering van je webshop en doorlopende ondersteuning om je online succes te garanderen.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-0">
                    <div className="flex flex-col h-full ">
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

      {/* About Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">Webshop specialisten</span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center lg:flex-row-reverse -mx-4">
                {/* Video Column */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/31676732/file/original-396e835eee2b982448adba728049e125.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                {/* Text Column */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h2 className="font-heading text-2xl sm:text-2xl md:text-3xl mb-6 dark:text-white">
                      Veelgemaakte Fouten Bij Het Laten Maken van een Webshop
                    </h2>
                    <p className="text-md text-gray-700 mb-10 dark:text-white">
                      Ondernemers maken vaak fouten bij het ontwikkelen van een webshop, en deze valkuilen kunnen de
                      effectiviteit van een online winkel sterk beïnvloeden. Een veelvoorkomende fout is het
                      onderschatten van gebruiksvriendelijkheid. Een ingewikkeld bestelproces of onoverzichtelijke
                      navigatie kan potentiële klanten afschrikken. Daarnaast zien we vaak dat er te weinig aandacht
                      wordt besteed aan productfoto's en -beschrijvingen, terwijl deze juist cruciaal zijn voor het
                      overtuigen van klanten.
                    </p>
                    <p className="text-md text-gray-700 mb-10 dark:text-white">
                      Een andere grote misser is het negeren van mobiele optimalisatie. Met het groeiende aantal mobiele
                      shoppers is een responsieve webshop essentieel. Ook worden beveiligingsaspecten vaak over het
                      hoofd gezien, terwijl veilige betalingen en gegevensbescherming het vertrouwen van klanten sterk
                      beïnvloeden. Door deze valkuilen te vermijden en te kiezen voor een professionele aanpak, zorg je
                      voor een webshop die niet alleen aantrekkelijk is, maar ook effectief verkoopt.
                    </p>

                    <ul className="text-black">
                      <h3 className="text-sm py-3 font-bold dark:text-white">
                        Wat Zijn de Belangrijkste Functionaliteiten van een Goede Webshop?
                      </h3>
                      {[
                        "Gebruiksvriendelijk bestelproces met minimale stappen",
                        "Duidelijke productcategorieën en filteropties",
                        "Veilige en diverse betaalmethoden",
                        "Professionele productfotografie en -beschrijvingen",
                        "Mobiel-vriendelijk design voor shoppers onderweg",
                        "Integratie met voorraad- en orderbeheer",
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
                          <span className="ml-3 text-xs font-medium text-gray-700 dark:text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">
              Webshop development specialisten
            </span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/15831576/file/original-77e3918e88d9f08e8e79e7ad2f8154f9.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                      Waarom een Webshop Laten Maken bij Multichoiceagency?
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Bij Multichoiceagency begrijpen we dat een webshop meer is dan alleen een online winkel. Het is
                      een verlengstuk van je merk en een belangrijk verkoopkanaal. Daarom bieden we maatwerk oplossingen
                      die perfect aansluiten bij jouw bedrijf en doelstellingen.
                    </p>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Onze webshops worden gebouwd in WooCommerce, het meest gebruikte e-commerce platform ter wereld.
                      Dit geeft je niet alleen een betrouwbare basis, maar ook eindeloze mogelijkheden voor uitbreiding
                      en aanpassing. Bovendien zorgen we ervoor dat je zelf eenvoudig je webshop kunt beheren, met
                      duidelijke instructies en ondersteuning wanneer je die nodig hebt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u antwoorden op de meest gestelde vragen over webshop development en e-commerce oplossingen.
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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r bg-white text-black dark:text-white dark:bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Klaar om een professionele webshop te laten maken?</h2>
          <p className="text-lg mb-8 text-black-700 max-w-2xl mx-auto">
            Zet vandaag nog de stap naar een moderne, snelle en conversiegerichte webshop. Wij helpen je met een op maat
            gemaakte oplossing die jouw bedrijf online laat groeien.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/offerte-aanvragen"
              className="bg-green-700 text-white font-semibold py-4 px-6 rounded-full text-lg hover:bg-green-900 hover:text-white transition duration-300"
            >
              Vraag een gratis offerte aan
            </a>
            <a
              href="/portfolio"
              className="dark:bg-black dark:text-white text-black font-semibold py-4 px-6 rounded-full text-lg hover:bg-white hover:text-green-900 transition duration-300"
            >
              Bekijk ons werk
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

