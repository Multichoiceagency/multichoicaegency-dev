"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"

export default function WebsiteLatenMakenVoorHorecaPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een website voor horeca belangrijk?",
      answer:
        "Een professionele website is essentieel voor horecabedrijven omdat het de uitstraling van uw zaak versterkt, online reserveringen en bestellingen mogelijk maakt en de klantbeleving verbetert.",
    },
    {
      question: "Hoe lang duurt het om een website voor horeca te laten maken?",
      answer:
        "De doorlooptijd is afhankelijk van de complexiteit. Een eenvoudige website kan binnen 2 tot 4 weken worden opgeleverd, terwijl een uitgebreide site met extra functionaliteiten 6 tot 12 weken kan duren.",
    },
    {
      question: "Kan ik mijn bestaande website laten vernieuwen voor mijn horecazaak?",
      answer:
        "Ja, we kunnen uw huidige website moderniseren met een aantrekkelijk design, verbeterde functionaliteiten en integraties zoals online reserveringen en menu's, speciaal voor de horeca.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor webdevelopment in de horeca?",
      answer:
        "We maken gebruik van moderne technologieën zoals WordPress, Next.js en maatwerkoplossingen met Laravel, Django of Node.js, zodat uw website snel, veilig en gebruiksvriendelijk is.",
    },
    {
      question: "Hoe zorgen jullie ervoor dat mijn website goed vindbaar is in Google?",
      answer:
        "We implementeren een gedegen SEO-strategie, optimaliseren laadtijden en zorgen voor een mobielvriendelijk design, zodat uw horecasite goed scoort in zoekmachines.",
    },
    {
      question: "Wat zijn de kosten voor een website voor horeca?",
      answer:
        "De kosten variëren afhankelijk van de gewenste functies en het design. Een eenvoudige website begint vanaf €1.499,-, terwijl uitgebreide oplossingen met integraties zoals reserveringssystemen €5.000,- tot €20.000,- kunnen kosten.",
    },
    {
      question: "Is mijn website geschikt voor mobiel en tablets?",
      answer:
        "Ja, alle websites die we ontwikkelen zijn volledig responsive, zodat gasten altijd een optimale ervaring hebben, ongeacht het apparaat dat ze gebruiken.",
    },
    {
      question: "Kan ik zelf content aanpassen op mijn website?",
      answer:
        "Ja, we bouwen websites met gebruiksvriendelijke CMS-systemen zoals WordPress of een maatwerk dashboard, zodat u eenvoudig uw menu's, foto's en teksten kunt updaten.",
    },
    {
      question: "Hoe zit het met onderhoud en updates na de lancering?",
      answer:
        "Wij bieden onderhoudspakketten aan om ervoor te zorgen dat uw website veilig, snel en up-to-date blijft, met regelmatige updates en technische ondersteuning.",
    },
    {
      question: "Kunnen jullie mijn website koppelen aan externe systemen zoals online reserveringen of bestelsystemen?",
      answer:
        "Ja, we verzorgen integraties met diverse systemen zoals online reserveringssoftware, bestelsystemen en betalingsproviders, zodat uw website naadloos aansluit op uw bedrijfsprocessen.",
    },
  ];
  

  return (
<>      <HeroNieuw
        title={"Website laten maken voor horeca"}
        description={
          "Wilt u een website laten maken voor horeca? Ontdek hoe een professionele website uw restaurant, café of hotel versterkt met een aantrekkelijk design en gebruiksvriendelijke functies."
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
              Horeca specialisten
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
                      Website Laten Maken voor Horeca: Alles Wat U Moet Weten
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      In de horeca is een professionele website cruciaal om gasten te informeren, reserveringen te vergemakkelijken en de unieke sfeer van uw zaak te presenteren. Een goed ontworpen website trekt klanten en versterkt uw merk.
                    </p>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Door te investeren in een moderne website voor horeca, zorgt u voor een optimale online ervaring die aansluit bij de verwachtingen van uw gasten.
                    </p>

                    <ul className="text-black">
                      {[
                        "Aantrekkelijk en gastvrij design",
                        "Gebruiksvriendelijke online reserveringen",
                        "SEO-geoptimaliseerd voor de horeca",
                        "Integratie van menu's en specials",
                        "Veilig en betrouwbaar platform",
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
                  Waar Moet U Op Letten Bij Het Laten Maken van een Website voor Horeca?
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Let op de ervaring, specialisaties en integraties zoals online reserveringen en bestelsystemen, die specifiek gericht zijn op de horecasector.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Portfolio en Ervaring: Bekijk eerdere horecaprojecten.",
                    "Specialisaties: Kies voor webdesigners met kennis van de horeca.",
                    "Prijs en Kostenstructuur: Vraag een transparante offerte aan.",
                    "SEO en Marketing: Zorg dat uw website goed gevonden wordt door gasten.",
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
                  Start uw horeca website project vandaag nog!
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
                Hoe Werkt Webdevelopment in de Horeca?
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een professionele horeca website wordt gebouwd met behulp van:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Kennismaking en Analyse",
                    description:
                      "Tijdens een eerste gesprek bespreken we de wensen en doelen van uw horecasite om een passende strategie op te stellen.",
                  },
                  {
                    title: "Ontwerp en Conceptontwikkeling",
                    description:
                      "Wij creëren een eerste ontwerp (wireframe) dat de unieke sfeer en functionaliteiten van uw horecabedrijf weerspiegelt.",
                  },
                  {
                    title: "Ontwikkeling en Programmeren",
                    description:
                      "Hier vindt de bouw van de website plaats. We integreren functies zoals online reserveringen, menu's en contactformulieren.",
                  },
                  {
                    title: "Testfase en Optimalisatie",
                    description:
                      "Voordat de website live gaat, testen we deze op diverse apparaten en browsers om een optimale prestatie te garanderen.",
                  },
                  {
                    title: "Lancering en Onderhoud",
                    description:
                      "Na uw goedkeuring zetten we de website live. Onderhoud en updates zorgen ervoor dat uw website veilig en up-to-date blijft.",
                  },
                  {
                    title: "Prestatie-optimalisatie",
                    description:
                      "We passen technieken toe om de snelheid en efficiëntie van uw website te maximaliseren, zodat gasten snel en eenvoudig de informatie vinden.",
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
              Horeca specialisten
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
                      Hoeveel Kost een Website Laten Maken voor Horeca?
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      De kosten voor een horeca website variëren afhankelijk van de complexiteit, functionaliteiten en gewenste integraties. Gemiddeld kunt u rekenen op de volgende richtprijzen:
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
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Standaard Horecawebsite</td>
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
              Hier vindt u antwoorden op de meest gestelde vragen over het laten maken van een website voor horeca.
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
          <h2 className="text-4xl font-bold mb-6">Klaar om een professionele horeca website te laten maken?</h2>
          <p className="text-lg mb-8 text-black-700 hover:text-green-700 max-w-2xl mx-auto">
            Zet vandaag de stap naar een moderne, aantrekkelijke en functionele website voor uw horecazaken. Wij helpen u met een op maat gemaakte oplossing die uw bedrijf online laat groeien.
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
    </>
  )
}
