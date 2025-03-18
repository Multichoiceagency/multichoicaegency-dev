"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from 'next-seo';

const MaatwerkWebsitesSEO = () => {
  return (
    <>
    <NextSeo
      title="Maatwerk Websites: Op Maat Gemaakt voor Jouw Bedrijf"
      description="Ontdek onze maatwerk websites, volledig afgestemd op de unieke behoeften van jouw bedrijf. Hoogwaardige, op maat gemaakte oplossingen die presteren."
      canonical="https://www.multichoiceagency.nl/maatwerk-websites"
      openGraph={{
        type: "website",
        url: "https://www.multichoiceagency.nl/maatwerk-websites",
        title: "Maatwerk Websites: Op Maat Gemaakt voor Jouw Bedrijf",
        description:
          "Ontdek onze maatwerk websites, volledig afgestemd op de unieke behoeften van jouw bedrijf. Hoogwaardige, op maat gemaakte oplossingen die presteren.",

        images: [
          {
            url: "/partners/maatwerk-websites.png",
            width: 1200,
            height: 630,
            alt: "Maatwerk Websites",
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
          { position: 1, name: 'Home', item: 'https://www.multichoiceagency.nl' },
          { position: 2, name: 'Maatwerk Websites', item: 'https://www.multichoiceagency.nl/maatwerk-website-laten-maken' },
        ]}
      />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Wat is een maatwerk website?',
            acceptedAnswerText:
              'Een maatwerk website is volledig ontworpen en ontwikkeld volgens de specifieke wensen van jouw bedrijf, zonder gebruik te maken van standaard templates.',
          },
          {
            questionName: 'Waarom kiezen voor een maatwerk website?',
            acceptedAnswerText:
              'Maatwerk websites bieden volledige flexibiliteit, unieke ontwerpen en functionaliteiten die precies aansluiten op jouw bedrijfsdoelen, wat resulteert in een hogere gebruikerservaring en conversie.',
          },
          {
            questionName: 'Hoe lang duurt het om een maatwerk website te ontwikkelen?',
            acceptedAnswerText:
              'De ontwikkeltijd varieert afhankelijk van de complexiteit, maar meestal duurt een maatwerk website tussen de 4 en 12 weken.',
          },
          {
            questionName: 'Wat zijn de voordelen van een maatwerk website?',
            acceptedAnswerText:
              'Voordelen zijn onder andere een uniek design, optimale performance, verbeterde SEO en de mogelijkheid om precies de functionaliteiten te integreren die jouw bedrijf nodig heeft.',
          },
          {
            questionName: 'Bieden jullie ondersteuning en onderhoud na de lancering?',
            acceptedAnswerText:
              'Ja, we bieden diverse onderhouds- en supportpakketten om ervoor te zorgen dat jouw website veilig en up-to-date blijft.',
          },
        ]}
      />
    </>
  );
};

export default function MaatwerkWebsitesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat is een maatwerk website?",
      answer:
        "Een maatwerk website is speciaal ontwikkeld volgens de unieke wensen en eisen van jouw bedrijf. Het resultaat is een volledig gepersonaliseerde online ervaring die aansluit bij je merkidentiteit.",
    },
    {
      question: "Waarom zou ik kiezen voor een maatwerk website in plaats van een template?",
      answer:
        "Maatwerk websites bieden volledige flexibiliteit en zijn volledig afgestemd op jouw bedrijfsdoelen. Dit leidt tot een uniek ontwerp, betere functionaliteit en een hogere conversie.",
    },
    {
      question: "Hoe lang duurt het om een maatwerk website te ontwikkelen?",
      answer:
        "De ontwikkeltijd is afhankelijk van de complexiteit van je project. Over het algemeen kun je rekenen op een doorlooptijd van 4 tot 12 weken voor een maatwerk website.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor maatwerk websites?",
      answer:
        "Wij werken met moderne technologieën zoals React, Next.js, Laravel en Node.js, zodat we altijd een op maat gemaakte en schaalbare oplossing kunnen leveren.",
    },
    {
      question: "Kan ik na de lancering zelf aanpassingen doen aan mijn website?",
      answer:
        "Ja, we integreren vaak een gebruiksvriendelijk CMS zodat je eenvoudig de content en andere elementen van je website kunt aanpassen zonder technische kennis.",
    },
    {
      question: "Hoe zit het met SEO en performance bij maatwerk websites?",
      answer:
        "Onze maatwerk websites worden gebouwd met oog voor SEO en performance. We zorgen voor snelle laadtijden, optimale structuur en integratie van de nieuwste SEO-technieken.",
    },
    {
      question: "Wat kost een maatwerk website?",
      answer:
        "De kosten variëren afhankelijk van de specificaties en complexiteit van het project. Neem contact met ons op voor een op maat gemaakte offerte die past bij jouw wensen.",
    },
    {
      question: "Bieden jullie ook ondersteuning na de lancering?",
      answer:
        "Ja, wij bieden diverse support- en onderhoudspakketten aan om ervoor te zorgen dat jouw website altijd veilig en up-to-date blijft.",
    },
  ];

  return (
    <div className="bg-white text-black">
      <MaatwerkWebsitesSEO />
      
      <HeroNieuw
        title={"Maatwerk Websites"}
        description={
          "Ontwikkel een unieke, op maat gemaakte website die perfect aansluit bij de behoeften van jouw bedrijf en jouw merk versterkt."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={
          "https://cdn.dribbble.com/userupload/17298535/file/original-712b4db26762e2f7569d48be1c64acdb.mp4"
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
              Maatwerk Web Experts
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
                        src="https://cdn.dribbble.com/userupload/18370891/file/original-c7e789f386b8f077ccc2793bf8d1ed98.mp4"
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
                      Maatwerk Websites: Uniek en Op Maat Gemaakt
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Een maatwerk website is meer dan alleen een online visitekaartje. Het is een krachtige tool die je bedrijf onderscheidt en een unieke gebruikerservaring biedt.
                    </p>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Met een op maat gemaakte website krijg je volledige controle over het ontwerp en de functionaliteit, zodat je precies kunt inspelen op de behoeften van je doelgroep.
                    </p>

                    <ul className="text-black">
                      {[
                        "Uniek en Persoonlijk Ontwerp",
                        "Volledig Aangepaste Functionaliteiten",
                        "Optimale Prestaties en Snelheid",
                        "SEO-geoptimaliseerde Structuur",
                        "Integratie met Jouw Bedrijfsprocessen",
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
                  Wat Maakt Onze Maatwerk Websites Uniek?
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Wij geloven dat geen enkel bedrijf hetzelfde is, daarom bieden wij volledig gepersonaliseerde weboplossingen die zijn afgestemd op jouw specifieke wensen en behoeften.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Volledig op maat gemaakt ontwerp",
                    "Integratie van unieke functionaliteiten",
                    "Optimalisatie voor snelheid en SEO",
                    "Responsive design voor alle apparaten",
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
                  Start jouw project vandaag nog
                </Link>
              </div>
            </div>

            {/* Video Column */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="visible">
                <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                  <source
                    src="https://cdn.dribbble.com/userupload/18676578/file/original-76aa8294de93fe86aef600341d61e81b.mp4"
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
                Hoe Werkt Maatwerk Webontwikkeling?
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Ons proces voor een op maat gemaakte website omvat:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Intake en Analyse",
                    description:
                      "We beginnen met een diepgaand gesprek om jouw wensen, doelen en doelgroep te begrijpen.",
                  },
                  {
                    title: "Concept en Ontwerp",
                    description:
                      "Op basis van de analyse ontwikkelen we een uniek concept en visueel ontwerp dat perfect past bij jouw merk.",
                  },
                  {
                    title: "Ontwikkeling en Integratie",
                    description:
                      "Onze ontwikkelaars bouwen een robuuste website, volledig afgestemd op de specifieke behoeften van jouw bedrijf.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voordat de website live gaat, wordt deze grondig getest op alle apparaten en browsers, en geoptimaliseerd voor snelheid en SEO.",
                  },
                  {
                    title: "Lancering en Onderhoud",
                    description:
                      "Na de lancering bieden we ondersteuning en onderhoud om de prestaties van je website te waarborgen.",
                  },
                  {
                    title: "Feedback en Verbetering",
                    description:
                      "Wij evalueren de prestaties en stellen verbeteringen voor op basis van gebruikersfeedback en data-analyse.",
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
              Hier vindt u antwoorden op de meest gestelde vragen over maatwerk websites.
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
          <h2 className="text-4xl font-bold mb-6">Klaar voor een unieke maatwerk website?</h2>
          <p className="text-lg mb-8 text-black-700 hover:text-green-700 max-w-2xl mx-auto">
            Laat ons jouw visie omzetten in een op maat gemaakte website die perfect aansluit op de behoeften van jouw bedrijf.
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
