"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"

export default function EcommerceWebsite() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een professionele e-commerce website belangrijk voor mijn bedrijf?",
      answer:
        "Een professionele e-commerce website is essentieel voor uw online verkoop. Het zorgt voor een betrouwbare en gebruiksvriendelijke winkelervaring, verhoogt de conversies en versterkt uw merkidentiteit. Een goed ontworpen e-commerce platform kan uw omzet aanzienlijk verhogen en uw bereik vergroten.",
    },
    {
      question: "Hoe lang duurt het om een e-commerce website te ontwikkelen?",
      answer:
        "De ontwikkeltijd voor een e-commerce website varieert afhankelijk van de complexiteit en omvang van het project. Gemiddeld duurt het proces 8 tot 16 weken, inclusief ontwerp, ontwikkeling, productcatalogus opzet, betalingsintegratie, testen en lancering. We houden u gedurende het hele proces op de hoogte van de voortgang.",
    },
    {
      question: "Kan ik mijn bestaande website ombouwen naar een e-commerce platform?",
      answer:
        "Ja, het is mogelijk om een bestaande website om te bouwen naar een volledig functioneel e-commerce platform. We analyseren uw huidige site, bespreken uw verkoopwensen en doelen, en integreren vervolgens de nodige e-commerce functionaliteiten terwijl we de essentie van uw merk behouden.",
    },
    {
      question: "Welke e-commerce platformen en technologieën gebruiken jullie?",
      answer:
        "We werken met toonaangevende e-commerce platformen zoals Shopify, WooCommerce, en Magento, afhankelijk van uw specifieke behoeften. Voor maatwerk oplossingen gebruiken we geavanceerde technologieën zoals React voor de frontend en Node.js of Python voor de backend, gecombineerd met robuuste database-oplossingen.",
    },
    {
      question: "Hoe zorgen jullie voor de veiligheid van mijn e-commerce website?",
      answer:
        "Beveiliging is onze topprioriteit. We implementeren SSL-certificaten, veilige betalingsgateways, regelmatige beveiligingsaudits, en volgen de beste praktijken voor databeveiliging. We zorgen ook voor naleving van relevante regelgeving zoals GDPR en PCI DSS voor betalingsverwerking.",
    },
    {
      question:
        "Wat zijn de voordelen van een op maat gemaakte e-commerce website ten opzichte van standaard oplossingen?",
      answer:
        "Een op maat gemaakte e-commerce website biedt verschillende voordelen: volledige controle over design en functionaliteit, naadloze integratie met uw bestaande systemen, optimalisatie voor uw specifieke producten en doelgroep, betere prestaties, en de flexibiliteit om unieke features te implementeren die uw concurrentievoordeel versterken.",
    },
    {
      question: "Hoe beïnvloedt een professionele e-commerce website de SEO van mijn online winkel?",
      answer:
        "Een professioneel ontwikkelde e-commerce website heeft een positieve invloed op uw SEO. We implementeren best practices zoals geoptimaliseerde productbeschrijvingen, snelle laadtijden, mobiele optimalisatie, en een SEO-vriendelijke sitestructuur. Dit verbetert uw zichtbaarheid in zoekmachines en kan leiden tot meer organisch verkeer en verkoop.",
    },
    {
      question: "Kunnen jullie geavanceerde e-commerce functionaliteiten implementeren?",
      answer:
        "Absoluut! We hebben ruime ervaring met het implementeren van geavanceerde e-commerce functionaliteiten zoals real-time voorraadmanagement, klantspecifieke prijzen, abonnementsmodellen, multi-vendor platforms, en complexe product configurators. We zorgen ervoor dat alle functies naadloos geïntegreerd worden en optimaal presteren.",
    },
    {
      question: "Hoe zorgen jullie voor een consistente merkbeleving in de e-commerce omgeving?",
      answer:
        "We beginnen met een grondige analyse van uw merk, doelgroep en verkoopstrategie. Op basis hiervan ontwikkelen we een uniek e-commerce design dat uw merkidentiteit versterkt. Dit omvat consistente visuele elementen, tone-of-voice in productbeschrijvingen, en een gebruikerservaring die aansluit bij uw merkwaarden.",
    },
    {
      question: "Bieden jullie ondersteuning na de lancering van de e-commerce website?",
      answer:
        "Ja, we bieden uitgebreide ondersteuning na de lancering. Dit omvat technische ondersteuning, hulp bij productupdate, optimalisatie van conversies, en regelmatige prestatie-analyses. We kunnen ook trainingen verzorgen zodat u en uw team de e-commerce platform effectief kunnen beheren en optimaliseren voor maximale verkoop.",
    },
  ]

  return (
    <div>
      <HeroNieuw
        title={"E-commerce Website Laten Maken"}
        description={
          "Boost uw online verkoop met een professionele e-commerce website. Onze expertise in e-commerce ontwikkeling zorgt voor een gebruiksvriendelijk en conversiegericht platform dat perfect aansluit bij uw merk en verkoopstrategie. Ontdek hoe wij uw online winkel kunnen transformeren tot een krachtige verkoopmotor."
        }
        buttonText={"Offerte aanvragen"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/16431131/file/large-6f50ef93c69cb5a7fe2a2f499b30ae88.mp4"}
      />
      {/* E-commerce Section */}
      <section className="py-12 lg:py-24 relative">
        <div className="container mx-auto px-4 ">
          <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-24">
            <div className="flex mb-6 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="ml-2 text-sm font-medium">Transformeer uw online verkoop met e-commerce</span>
            </div>
            <h1 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
              Wat is E-commerce Website Ontwikkeling?
            </h1>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
              E-commerce website ontwikkeling is het proces van het creëren van een online winkelplatform dat perfect is
              afgestemd op uw producten, merk en klanten. Het gaat verder dan alleen een catalogus online zetten; het
              omvat het bouwen van een volledig geïntegreerd systeem voor productbeheer, betalingsverwerking,
              voorraadbeheer en klantenservice. Een goed ontwikkelde e-commerce website biedt een naadloze
              winkelervaring, verhoogt conversies en bouwt klantloyaliteit op. In het huidige digitale tijdperk is een
              professionele e-commerce aanwezigheid essentieel om concurrerend te blijven en uw marktaandeel te
              vergroten.
            </p>
            <div className="flex flex-col sm:flex-row">
              <Link
                href="#"
                className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 h-full w-3/5">
          <video className="w-21/9 h-full object-contain rounded-xl" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/15869409/file/large-42f4c512c68a1b6486711c2733daa3e2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:hidden">
          <video className="w-full h-64 object-contain" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/15869409/file/large-42f4c512c68a1b6486711c2733daa3e2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="py-12 lg:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div className="lg:sticky lg:top-8 bg-black/10 px-10 py-10 rounded-xl">
                <h2 className="font-heading text-7xl md:text-7xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.700),theme(colors.gray.500),theme(colors.green.400),theme(colors.black),theme(colors.green.300),theme(colors.green.700))] bg-[length:200%_auto] animate-gradient">
                  Wij bouwen al jaren succesvolle e-commerce websites
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <h2 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
                  Waarom een professionele e-commerce website?
                </h2>
                <p className="text-xl font-medium mb-10">
                  Een professionele e-commerce website is de sleutel tot succes in de online retailwereld. Het biedt
                  niet alleen een platform om uw producten te verkopen, maar creëert ook een overtuigende merkervaring
                  die klanten aantrekt en behoudt.
                </p>
                <ul className="pl-5 mb-10">
                  <h4 className="font-bold">Waarom is een Professionele E-commerce Website Belangrijk?</h4>
                  <li className="hover:text-green-700 hover:font-bold">✅ Verhoogde conversies en omzet</li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Verbeterde gebruikerservaring en klanttevredenheid
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Effectief voorraadbeheer en orderverwerking
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Uitgebreide analyses en inzichten in klantgedrag
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Naadloze integratie met marketing- en CRM-tools
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">✅ Schaalbaarheid voor groei en uitbreiding</li>
                </ul>
                <Link
                  href="offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-green-700 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                >
                  Start uw e-commerce project vandaag!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-teal-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">
                Hoe Werkt E-commerce Website Ontwikkeling?
              </span>
            </div>
            <div className="border-t border-white border-opacity-25 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een professionele e-commerce website wordt gebouwd met:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Gebruiksvriendelijk design",
                    description: "Intuïtieve navigatie en aantrekkelijke productpresentatie voor optimale conversies.",
                  },
                  {
                    title: "Robuuste backend",
                    description: "Krachtige systemen voor orderbeheer, voorraadbeheer en klantgegevens.",
                  },
                  {
                    title: "Veilige betalingsverwerking",
                    description: "Integratie van betrouwbare en diverse betaalmethoden voor een soepel afrekenproces.",
                  },
                  {
                    title: "Mobiele optimalisatie",
                    description: "Responsief ontwerp voor een naadloze ervaring op alle apparaten.",
                  },
                  {
                    title: "SEO-vriendelijke structuur",
                    description: "Geoptimaliseerde site-architectuur en content voor betere online zichtbaarheid.",
                  },
                  {
                    title: "Analyses en rapportage",
                    description: "Geavanceerde tools voor het volgen van prestaties en klantgedrag.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-0">
                    <div className="flex flex-col h-full">
                      <h5 className="text-2xl font-medium text-white mt-6 mb-3">{service.title}</h5>
                      <p className="text-white opacity-80 mb-6">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#022C22"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-teal-900">
              E-commerce ontwikkeling specialisten
            </span>
          </div>
          <div className="border-t pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center -mx-4">
                {/* Afbeeldingsgedeelte */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/15985787/file/large-3f4aafb1a819152556b5c1d4fee45343.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                {/* Tekstgedeelte */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">
                      Wat kun je van ons verwachten?
                    </h1>
                    <p className="text-lg text-gray-700 mb-10">
                      Bij het ontwikkelen van een e-commerce website staat kwaliteit en functionaliteit voorop. Onze
                      aanpak is gericht op het leveren van online winkels die niet alleen aan uw verwachtingen voldoen,
                      maar deze overtreffen. Hier is wat u van ons kunt verwachten:
                    </p>
                    <ul>
                      {[
                        "Gebruiksvriendelijk en conversiegericht ontwerp",
                        "Geavanceerde e-commerce functionaliteiten",
                        "Veilige en efficiënte betalingsverwerking",
                        "Geoptimaliseerd voor zoekmachines en mobiele apparaten",
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
                              stroke="#1D1F1E"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span className="ml-3 text-lg">{item}</span>
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

      {/* FAQ Section */}
      <section className="py-12 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">Veelgestelde vragen</h2>
            <p className="text-gray-700">
              Hier vindt u antwoorden op de meest gestelde vragen over e-commerce website ontwikkeling.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 5).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index ? "max-h-96" : "max-h-0"
                        }`}
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
                {faqItems.slice(5).map((item, index) => (
                  <button
                    key={index + 5}
                    onClick={() => setOpenAccordion(openAccordion === index + 5 ? null : index + 5)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index + 5 ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-700 mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 5 ? (
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
                <span>Voor meer informatie over e-commerce website ontwikkeling kunt u onze </span>
                <Link href="#" className="inline-block text-black font-medium underline">
                  Contactpagina
                </Link>
                <span> bezoeken of bel onze klantenservice op </span>
                <span className="text-black font-medium">071 203 24 88</span>
                <span>
                  . Ons toegewijde team staat klaar om u te helpen bij het realiseren van uw perfecte online winkel.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw online verkoop naar het volgende niveau te tillen?</h2>
          <p className="text-xl mb-12">
            Laat uw e-commerce dromen werkelijkheid worden met een professionele, op maat gemaakte online winkel die
            perfect aansluit bij uw merk en verkoopstrategie.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-lime-500 rounded-full transition duration-200"
          >
            Start uw e-commerce project
          </Link>
        </div>
      </section>
    </div>
  )
}

