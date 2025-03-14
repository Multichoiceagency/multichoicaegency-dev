"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from 'next-seo';

const ShopifyWebshopSEO = () => {
  return (
    <>
<NextSeo
        title="Shopify Webshop Laten Maken: Bouw Jouw Online Winkel"
        description="Laat jouw Shopify webshop maken door experts. Wij bouwen een gebruiksvriendelijke en converterende Shopify webshop die perfect aansluit bij jouw merk en groeidoelstellingen."
        canonical="https://www.multichoiceagency.nl/shopify-webshop-laten-maken"
        openGraph={{
          type: 'website',
          url: 'https://www.multichoiceagency.nl/shopify-webshop-laten-maken',
          title: 'Shopify Webshop Laten Maken: Bouw Jouw Online Winkel',
          description:
            'Laat jouw Shopify webshop maken door experts. Wij bouwen een gebruiksvriendelijke en converterende Shopify webshop die perfect aansluit bij jouw merk en groeidoelstellingen.',
          images: [
            {
              url: '/partners/shopify-webshop.png',
              width: 1200,
              height: 630,
              alt: 'Shopify Webshop Laten Maken',
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
          { position: 2, name: 'Shopify Webshop Laten Maken', item: 'https://www.multichoiceagency.nl/shopify-webshop-laten-maken' },
        ]}
      />

      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Wat is een Shopify webshop?',
            acceptedAnswerText:
              'Een Shopify webshop is een online winkel gebouwd op het Shopify platform, dat bekend staat om zijn gebruiksvriendelijkheid en krachtige e-commerce functies.',
          },
          {
            questionName: 'Waarom kiezen voor Shopify?',
            acceptedAnswerText:
              'Shopify biedt een complete en schaalbare oplossing voor e-commerce, met gemakkelijke integraties, betrouwbare hosting en tal van apps voor extra functionaliteit.',
          },
          {
            questionName: 'Hoe lang duurt het om een Shopify webshop te laten maken?',
            acceptedAnswerText:
              'De ontwikkeling van een Shopify webshop duurt meestal tussen de 2 en 6 weken, afhankelijk van de complexiteit en specifieke wensen.',
          },
          {
            questionName: 'Kan ik na oplevering zelf aanpassingen doen?',
            acceptedAnswerText:
              'Ja, Shopify is zeer gebruiksvriendelijk en biedt een intuïtief CMS waarmee je gemakkelijk producten en content kunt beheren.',
          },
          {
            questionName: 'Bieden jullie ondersteuning na de lancering?',
            acceptedAnswerText:
              'Ja, wij bieden uitgebreide support- en onderhoudspakketten om ervoor te zorgen dat jouw webshop altijd up-to-date en veilig is.',
          },
        ]}
      />
    </>
  );
};

export default function ShopifyWebshopPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Wat is een Shopify webshop en waarom is het populair?",
      answer:
        "Een Shopify webshop is een online winkel gebouwd op het Shopify platform. Het is populair vanwege de gebruiksvriendelijkheid, schaalbaarheid en krachtige e-commerce functies.",
    },
    {
      question: "Waarom zou ik kiezen voor een Shopify webshop laten maken?",
      answer:
        "Door te kiezen voor een Shopify webshop laten maken, krijg je een op maat gemaakte oplossing die perfect aansluit bij jouw merk en bedrijfsdoelstellingen, met de flexibiliteit en betrouwbaarheid van Shopify.",
    },
    {
      question: "Hoe verloopt het ontwikkelproces?",
      answer:
        "Ons proces omvat een intakegesprek, analyse van jouw wensen, ontwerp, ontwikkeling, testen en lancering. We zorgen voor een soepele overgang van concept naar live webshop.",
    },
    {
      question: "Kan ik zelf aanpassingen doen na de lancering?",
      answer:
        "Ja, Shopify is gebruiksvriendelijk en biedt een intuïtief CMS waarmee je zelf producten, content en andere elementen kunt beheren.",
    },
    {
      question: "Welke extra functionaliteiten kunnen we integreren?",
      answer:
        "We kunnen diverse integraties realiseren, zoals betalingsproviders, CRM-systemen, marketingtools en logistieke oplossingen, die de functionaliteit van jouw webshop verder uitbreiden.",
    },
    {
      question: "Hoe zit het met SEO en performance?",
      answer:
        "Onze Shopify webshops worden gebouwd met oog voor SEO en performance. Dit zorgt voor snelle laadtijden, betere vindbaarheid en een optimale gebruikerservaring.",
    },
    {
      question: "Wat zijn de kosten voor een Shopify webshop?",
      answer:
        "De kosten variëren afhankelijk van de complexiteit en specifieke wensen. Neem contact met ons op voor een op maat gemaakte offerte die past bij jouw budget.",
    },
    {
      question: "Bieden jullie ook ondersteuning en onderhoud na de lancering?",
      answer:
        "Ja, we bieden verschillende support- en onderhoudspakketten om ervoor te zorgen dat jouw webshop veilig, up-to-date en optimaal functionerend blijft.",
    },
  ];

  return (
    <div className="bg-white text-black">
      <ShopifyWebshopSEO />
      
      <HeroNieuw
        title={"Shopify Webshop Laten Maken"}
        description={
          "Laat jouw online winkel groeien met een professionele Shopify webshop, gebouwd op maat voor jouw bedrijf."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={
          "https://cdn.dribbble.com/userupload/17063963/file/original-3ffbb3e25cbbfd8da5bb893f65b04a12.mp4"
        }
      />

      {/* About Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">
              Shopify Webshop Experts
            </span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center lg:flex-row-reverse -mx-4">
                {/* Video Column */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/16959454/file/large-5fd4f9cf4a1786cb189c4e74e5dce8d8.mp4"
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
                      Shopify Webshop Laten Maken
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Een professionele Shopify webshop is de sleutel tot succes in e-commerce. Wij bouwen een op maat gemaakte online winkel die jouw merk versterkt en zorgt voor een optimale gebruikerservaring.
                    </p>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Met een gebruiksvriendelijke interface, geïntegreerde betalingssystemen en krachtige marketingtools is jouw Shopify webshop klaar voor de toekomst.
                    </p>

                    <ul className="text-black">
                      {[
                        "Gebruiksvriendelijk en Conversiegericht",
                        "Volledig Aangepast Design",
                        "Integratie van Betalings- en Marketingtools",
                        "SEO en Performance Geoptimaliseerd",
                        "Ondersteuning en Onderhoud",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center mb-4">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="10" fill="#BEF264"></rect>
                            <path
                              d="M14.8 6.40002L8.19995 13L5.19995 10"
                              stroke="#022C22"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span className="ml-3 text-lg text-gray-700 font-black dark:text-white">
                            {item}
                          </span>
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

      {/* Content Section */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center -mx-4">
            {/* Text Column */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Waarom kiezen voor Shopify?
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Shopify biedt een complete, schaalbare en gebruiksvriendelijke oplossing voor jouw online winkel.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Gemakkelijke Content Management",
                    "Betrouwbare Hosting en Beveiliging",
                    "Uitgebreide Integraties met Apps",
                    "Schaalbaarheid voor Groei",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center mb-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20" rx="10" fill="#BEF264"></rect>
                        <path
                          d="M14.8 6.40002L8.19995 13L5.19995 10"
                          stroke="#022C22"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="ml-3 text-lg text-gray-700 font-600 hover:font-bold dark:hover:text-green-700 dark:text-white hover:text-green-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-black text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start jouw webshop project vandaag nog
                </Link>
              </div>
            </div>

            {/* Video Column */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="visible">
                <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                  <source
                    src="https://cdn.dribbble.com/userupload/17394148/file/original-908f00def579149997e93e1d2ce33feb.mp4"
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
              <span className="inline-block ml-2 text-sm font-medium text-white">
                Hoe Werkt Shopify Webshop Ontwikkeling?
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Ons proces voor jouw Shopify webshop omvat:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Intake en Analyse",
                    description:
                      "We starten met een diepgaand gesprek om jouw wensen, doelstellingen en doelgroep te begrijpen.",
                  },
                  {
                    title: "Concept en Ontwerp",
                    description:
                      "Op basis van de analyse ontwikkelen we een uniek concept en visueel ontwerp dat aansluit bij jouw merk.",
                  },
                  {
                    title: "Ontwikkeling en Integratie",
                    description:
                      "Onze specialisten bouwen jouw Shopify webshop, integreren alle gewenste functionaliteiten en zorgen voor een naadloze gebruikerservaring.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voordat de webshop live gaat, wordt deze grondig getest op alle apparaten en browsers, en geoptimaliseerd voor snelheid en SEO.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na een succesvolle lancering bieden we ondersteuning en onderhoud om de prestaties van jouw webshop te waarborgen.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "We verzamelen gebruikersfeedback en passen de webshop aan om continu te verbeteren en te groeien.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-0">
                    <div className="flex flex-col h-full ">
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

      {/* FAQ Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u antwoorden op de meest gestelde vragen over Shopify webshop ontwikkeling.
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
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r bg-white text-black dark:text-white dark:bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Klaar om jouw Shopify webshop te lanceren?</h2>
          <p className="text-lg mb-8 text-black-700 hover:text-green-700 max-w-2xl mx-auto">
            Zet de eerste stap naar een succesvolle online winkel met een professionele Shopify webshop, op maat gemaakt voor jouw bedrijf.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/gratis-consult"
              className="bg-green-700 text-white font-semibold py-4 px-6 rounded-full text-lg hover:bg-green-900 hover:text-white transition duration-300"
            >
              Vraag een gratis consult aan
            </a>
            <a
              href="/portfolio"
              className="border border-white text-black dark:bg-white font-semibold py-4 px-6 rounded-full text-lg hover:bg-white hover:text-green-900 transition duration-300"
            >
              Bekijk onze projecten
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
