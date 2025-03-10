"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from 'next-seo';

const WebsiteLatenMakenVoorDuurzaamheid = () => {
  return (
    <>
      <NextSeo
        title="Website Laten Maken voor Duurzaamheid | Professioneel Webdesign"
        description="Wilt u een website laten maken voor duurzaamheid? Ontdek hoe een duurzame website uw bedrijf versterkt met milieubewustzijn en innovatie. Vraag een offerte aan!"
        canonical="https://www.multichoiceagency.nl/website-laten-maken-voor-duurzaamheid"
        openGraph={{
          type: 'website',
          url: 'https://www.multichoiceagency.nl/website-laten-maken-voor-duurzaamheid',
          title: 'Website Laten Maken voor Duurzaamheid | Professioneel Webdesign',
          description:
            'Wilt u een website laten maken voor duurzaamheid? Ontdek hoe een duurzame website uw bedrijf versterkt met milieubewustzijn en innovatie. Vraag een offerte aan!',
          images: [
            {
              url: '/partners/website-laten-maken-voor-duurzaamheid.png',
              width: 1200,
              height: 630,
              alt: 'Website laten maken voor duurzaamheid',
            },
          ],
        }}
        twitter={{
          handle: '@jouwtwitterhandle',
          site: '@jouwtwitterhandle',
          cardType: 'summary_large_image',
        }}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'Home', item: 'https://www.multichoiceagency.nl' },
          { position: 2, name: 'Website Laten Maken voor Duurzaamheid', item: 'https://www.multichoiceagency.nl/website-laten-maken-voor-duurzaamheid' },
        ]}
      />

      {/* FAQ Schema */}
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Waarom is een duurzame website belangrijk?',
            acceptedAnswerText:
              'Een duurzame website versterkt uw merk door milieubewustzijn uit te stralen en innovatie te stimuleren. Het trekt klanten aan die waarde hechten aan duurzaamheid en maatschappelijk verantwoord ondernemen.',
          },
          {
            questionName: 'Hoeveel kost een website laten maken voor duurzaamheid?',
            acceptedAnswerText:
              'De kosten variëren, maar doorgaans liggen de prijzen tussen de €1.499 voor een eenvoudige website tot €10.000+ voor maatwerk. De prijs is afhankelijk van het design, de functionaliteiten en de duurzaamheidsfeatures.',
          },
          {
            questionName: 'Hoe lang duurt het om een duurzame website te laten maken?',
            acceptedAnswerText:
              'Een standaard duurzame website kan binnen 2 tot 4 weken worden opgeleverd. Voor complexe maatwerkprojecten kan de ontwikkeling 6 tot 12 weken duren.',
          },
          {
            questionName: 'Is een mobiele versie van de website inbegrepen?',
            acceptedAnswerText:
              'Ja, alle websites die wij ontwikkelen – inclusief duurzame websites – zijn 100% responsive en geoptimaliseerd voor mobiele apparaten, tablets en desktops.',
          },
          {
            questionName: 'Bieden jullie onderhoud en support na de lancering?',
            acceptedAnswerText:
              'Ja, we bieden verschillende onderhoudspakketten, inclusief beveiligingsupdates, back-ups en technische ondersteuning, zodat uw duurzame website veilig en up-to-date blijft.',
          },
        ]}
      />      
    </>
  );
};

export default function WebsiteLatenMakenVoorDuurzaamheidPage() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een duurzame website belangrijk voor mijn bedrijf?",
      answer:
        "Een duurzame website is essentieel om uw bedrijf te positioneren als milieubewust en innovatief. Het draagt bij aan een positieve merkidentiteit en trekt klanten aan die waarde hechten aan duurzaamheid.",
    },
    {
      question: "Hoe lang duurt het om een duurzame website te laten maken?",
      answer:
        "De doorlooptijd varieert afhankelijk van de complexiteit en functionaliteiten. Een eenvoudige duurzame website kan binnen 2 tot 4 weken gereed zijn, terwijl een maatwerk website 6 tot 12 weken kan duren.",
    },
    {
      question: "Kan ik mijn bestaande website laten vernieuwen naar een duurzame variant?",
      answer:
        "Ja, we kunnen uw bestaande website moderniseren en verduurzamen door energiezuinige technologieën en milieuvriendelijke ontwerpen te integreren.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor duurzame webdevelopment?",
      answer:
        "We werken met moderne technologieën zoals WordPress, Next.js en andere energiezuinige frameworks. Voor maatwerkoplossingen gebruiken we onder andere Laravel, Django of Node.js, afhankelijk van uw wensen.",
    },
    {
      question: "Hoe zorgen jullie ervoor dat mijn duurzame website goed vindbaar is in Google?",
      answer:
        "We passen vanaf het begin zoekmachineoptimalisatie (SEO) toe, inclusief technische SEO, snelle laadtijden en mobielvriendelijk design, zodat uw website goed scoort in zoekmachines.",
    },
    {
      question: "Wat zijn de kosten voor een duurzame website?",
      answer:
        "De kosten hangen af van de complexiteit en functies. Een eenvoudige duurzame website begint vanaf €1.499,-, terwijl een uitgebreide duurzame webshop of maatwerk platform €5.000,- tot €20.000,- kan kosten.",
    },
    {
      question: "Is mijn duurzame website geschikt voor mobiel en tablets?",
      answer:
        "Ja, alle websites die we bouwen zijn volledig responsive en passen zich automatisch aan verschillende schermformaten aan, wat een optimale gebruikerservaring garandeert.",
    },
    {
      question: "Kan ik zelf content aanpassen op mijn duurzame website?",
      answer:
        "Ja, we bouwen websites met gebruiksvriendelijke CMS-systemen zoals WordPress of een maatwerk dashboard, zodat u eenvoudig teksten, afbeeldingen en producten kunt aanpassen.",
    },
    {
      question: "Hoe zit het met onderhoud en updates na de lancering?",
      answer:
        "Wij bieden onderhoudspakketten aan waarmee uw website veilig en up-to-date blijft, inclusief beveiligingsupdates, back-ups, en prestatie-optimalisatie.",
    },
    {
      question: "Kunnen jullie mijn website koppelen aan externe systemen zoals CRM of betalingsproviders?",
      answer:
        "Ja, we verzorgen integraties met diverse systemen zoals CRM-software, betalingsproviders, boekhoudprogramma's en marketingtools.",
    },
  ];
  

  return (
    <div className="bg-white text-black">
      <HeroNieuw
        title={"Website laten maken voor duurzaamheid"}
        description={
          "Wilt u een website laten maken voor duurzaamheid? Ontdek hoe een duurzame website uw bedrijf versterkt met een milieubewuste en innovatieve uitstraling."
        }
        buttonText={"Offerte aanvragen"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={
          "https://cdn.dribbble.com/userupload/20585023/file/original-f77ab4e11e45439d6a0c173d8ad2c6cb.mp4"
        }
      />

      {/* About Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">
              Duurzaamheid specialisten
            </span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center lg:flex-row-reverse -mx-4">
                {/* Video Column */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video
                      className="w-full h-full object-contain rounded-md"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
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
                      Website Laten Maken voor Duurzaamheid: Alles Wat U Moet Weten
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      In het digitale tijdperk is een duurzame website niet alleen een visitekaartje, maar ook een krachtig instrument om uw milieubewustzijn te tonen. Een duurzame website combineert esthetiek met functionaliteit en draagt bij aan een positief imago.
                    </p>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Door te investeren in een duurzame website onderscheidt u zich van de concurrentie en communiceert u uw toewijding aan innovatie en het milieu.
                    </p>

                    <ul className="text-black">
                      {[
                        "Innovatief en milieubewust design",
                        "Betere gebruikerservaring",
                        "SEO Geoptimaliseerd voor duurzaamheid",
                        "Energie-efficiënt en schaalbaar",
                        "Fundament voor toekomstgerichte oplossingen",
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

      {/* Overige content */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center -mx-4">
            {/* Linker kolom op desktop (rechter kolom op mobiel) */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Waar Moet U Op Letten Bij Het Laten Maken van een Duurzame Website?
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Duurzaamheid en innovatie staan centraal in moderne weboplossingen. Let op energiezuinige technologieën, milieuvriendelijke designs en toekomstbestendige functionaliteiten.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Portfolio en Ervaring: Bekijk eerdere duurzame projecten.",
                    "Specialisaties: Sommige webdesigners richten zich op duurzame en energiezuinige oplossingen.",
                    "Prijs en Kostenstructuur: Vraag altijd een duidelijke offerte en controleer wat inbegrepen is.",
                    "SEO en Marketing Integratie: Zorg dat uw website goed vindbaar is en uw duurzaamheidswaarden uitstraalt.",
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
                  Start uw duurzame website project vandaag nog!
                </Link>
              </div>
            </div>

            {/* Rechter kolom op desktop (linker kolom op mobiel) */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="visible">
                <video
                  className="w-full h-full object-contain rounded-md"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
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
                Hoe Werkt Duurzame Webdevelopment?
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een robuuste duurzame website wordt gebouwd met behulp van:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Kennismaking en Analyse",
                    description:
                      "Tijdens een eerste gesprek bespreken we de wensen en doelen van uw duurzame website om een passende strategie op te stellen.",
                  },
                  {
                    title: "Ontwerp en Conceptontwikkeling",
                    description:
                      "Wij creëren een eerste ontwerp (wireframe) dat de structuur en duurzaamheid van de website weerspiegelt.",
                  },
                  {
                    title: "Ontwikkeling en Programmeren",
                    description:
                      "Hier vindt de bouw van de website plaats. We integreren energiezuinige functionaliteiten en duurzame oplossingen.",
                  },
                  {
                    title: "Testfase en Optimalisatie",
                    description:
                      "Voordat de website live gaat, testen we deze op diverse apparaten en browsers zodat u verzekerd bent van optimale prestaties.",
                  },
                  {
                    title: "Lancering en Onderhoud",
                    description:
                      "Na uw goedkeuring zetten we de website live. Onderhoud en updates garanderen dat uw duurzame website veilig en up-to-date blijft.",
                  },
                  {
                    title: "Prestatie-optimalisatie",
                    description:
                      "We passen technieken toe om de snelheid en efficiëntie van uw website te maximaliseren met een focus op duurzaamheid.",
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

      {/* Overige About Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">
              Duurzaamheid specialisten
            </span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video
                      className="w-full h-full object-contain rounded-md"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src="https://cdn.dribbble.com/userupload/31676732/file/original-396e835eee2b982448adba728049e125.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                      Hoeveel Kost een Duurzame Website Laten Maken?
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      De kosten voor een duurzame website variëren sterk, afhankelijk van de complexiteit, functionaliteiten en de mate van duurzaamheid. Gemiddeld kunt u rekening houden met de volgende richtprijzen:
                    </p>
                    <section className="dark:bg-white">
                      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                        <thead>
                          <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Type Website</th>
                            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Kostenindicatie</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Simpele Onepager (zzp)</td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>€249 - €500</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Standaard Duurzame Website</td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>€1.999 - €5.000</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Webshop / E-commerce</td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>€2.499 - €10.000+</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Gecodeerde Website</td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>€6.995 - €20.000+</td>
                          </tr>
                        </tbody>
                      </table>
                    </section>
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
              Hier vindt u antwoorden op de meest gestelde vragen over het laten maken van een duurzame website.
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
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
          <h2 className="text-4xl font-bold mb-6">Klaar om een duurzame website te laten maken?</h2>
          <p className="text-lg mb-8 text-black-700 hover:text-green-700 max-w-2xl mx-auto">
            Zet vandaag nog de stap naar een moderne, duurzame en conversiegerichte website. Wij helpen u met een op maat gemaakte oplossing die uw bedrijf duurzaam laat groeien.
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
              className="border border-white text-black font-semibold py-4 px-6 rounded-full text-lg hover:bg-white hover:text-green-900 transition duration-300"
            >
              Bekijk ons werk
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
