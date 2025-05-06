"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/Hero-section"

export default function ResponsiefWebdesign() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is responsief webdesign belangrijk voor mijn bedrijf?",
      answer:
        "Responsief webdesign is essentieel voor uw online aanwezigheid. Het zorgt ervoor dat uw website optimaal wordt weergegeven op alle apparaten, van desktops tot smartphones. Dit verbetert de gebruikerservaring, verhoogt de betrokkenheid van bezoekers en kan uw zoekmachinerangschikking verbeteren.",
    },
    {
      question: "Hoe lang duurt het om een responsieve website te ontwikkelen?",
      answer:
        "De ontwikkeltijd voor een responsieve website varieert afhankelijk van de complexiteit en omvang van het project. Gemiddeld duurt het proces 6 tot 8 weken, inclusief ontwerp, ontwikkeling, testen en lancering. We houden u gedurende het hele proces op de hoogte van de voortgang.",
    },
    {
      question: "Kan ik mijn bestaande website responsief maken?",
      answer:
        "Ja, het is mogelijk om een bestaande website responsief te maken. Dit proces wordt vaak 'responsive retrofit' genoemd. We analyseren uw huidige site, passen het ontwerp en de code aan om responsiviteit te garanderen, en zorgen ervoor dat alle functionaliteiten behouden blijven op alle schermformaten.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor responsief webdesign?",
      answer:
        "We gebruiken moderne technologieën zoals HTML5, CSS3 met flexbox en grid layouts, en JavaScript frameworks zoals React of Vue.js. Voor contentmanagement systemen werken we vaak met responsieve thema's in WordPress of headless CMS-oplossingen. We passen ook technieken toe zoals 'mobile-first' design en progressieve verbetering.",
    },
    {
      question: "Hoe zorgen jullie ervoor dat mijn responsieve website goed presteert op alle apparaten?",
      answer:
        "We optimaliseren uw website voor alle apparaten door gebruik te maken van flexibele layouts, responsieve afbeeldingen, en aanpasbare contenthiërarchieën. We testen uitgebreid op verschillende apparaten en browsers, optimaliseren de laadsnelheid, en zorgen voor een consistente gebruikerservaring op alle schermformaten.",
    },
    {
      question: "Wat zijn de voordelen van responsief webdesign ten opzichte van een aparte mobiele site?",
      answer:
        "Responsief webdesign biedt verschillende voordelen: één website voor alle apparaten, eenvoudiger onderhoud, betere SEO-prestaties, consistente gebruikerservaring, en kosteneffectiviteit. In tegenstelling tot een aparte mobiele site, hoeft u niet meerdere versies van uw content te beheren.",
    },
    {
      question: "Hoe beïnvloedt responsief webdesign de SEO van mijn website?",
      answer:
        "Responsief webdesign heeft een positieve invloed op uw SEO. Google geeft de voorkeur aan mobiel-vriendelijke websites in zijn zoekresultaten. Een responsieve site verbetert de gebruikerservaring, verlaagt de bouncerates, en verhoogt de tijd die bezoekers op uw site doorbrengen - allemaal factoren die uw zoekmachinerangschikking kunnen verbeteren.",
    },
    {
      question: "Kunnen jullie ook complexe functionaliteiten responsief maken?",
      answer:
        "Absoluut! We hebben ervaring met het responsief maken van complexe functionaliteiten zoals e-commerce platforms, dashboards, en interactieve applicaties. We zorgen ervoor dat alle functies intuïtief werken op elk apparaat, zonder compromissen te sluiten op functionaliteit of gebruiksgemak.",
    },
    {
      question: "Hoe zorgen jullie voor consistente branding in responsief webdesign?",
      answer:
        "We hanteren een 'mobile-first' aanpak waarbij we eerst ontwerpen voor kleinere schermen en vervolgens uitbreiden naar grotere formaten. Dit zorgt ervoor dat uw merkidentiteit consistent blijft op alle apparaten. We gebruiken flexibele layouts, schaalbare vectorafbeeldingen, en aanpasbare typografie om uw branding effectief over te brengen, ongeacht het schermformaat.",
    },
    {
      question: "Bieden jullie ondersteuning na de lancering van de responsieve website?",
      answer:
        "Ja, we bieden uitgebreide ondersteuning na de lancering. Dit omvat technische ondersteuning, hulp bij content updates, en regelmatige controles om ervoor te zorgen dat uw website optimaal blijft presteren op alle apparaten. We kunnen ook trainingen verzorgen zodat u en uw team de website zelfstandig kunnen beheren en updaten.",
    },
  ]

  return (
    <div>
      <HeroNieuw
        title={"Responsief webdesign"}
        description={
          "Bereik uw doelgroep op elk apparaat met een responsieve website. Onze expertise in responsief webdesign zorgt voor een naadloze gebruikerservaring op desktops, tablets en smartphones. Ontdek hoe wij uw online aanwezigheid kunnen optimaliseren voor het mobiele tijdperk."
        }
        buttonText={"Offerte aanvragen"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/16909015/file/large-59194edddad70b48df0face483195999.mp4"}
      />
      {/* Websites Section */}
      <section className="py-12 lg:py-24 relative">
        <div className="container mx-auto px-4 ">
          <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-24">
            <div className="flex mb-6 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="ml-2 text-sm font-medium">
                Transformeer uw online aanwezigheid met responsief webdesign
              </span>
            </div>
            <h1 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
              Wat is Responsief Webdesign?
            </h1>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
              Responsief webdesign is een ontwerptechniek waarbij een website zich automatisch aanpast aan verschillende
              schermformaten en apparaten. Of iemand nu een desktop, tablet of smartphone gebruikt, de website blijft
              goed leesbaar en functioneel. Dit wordt bereikt door flexibele grids, afbeeldingen en mediaquery's in CSS.
              Met de groei van mobiel internetverkeer is een responsieve website geen luxe meer, maar een absolute
              noodzaak. Google waardeert mobielvriendelijke websites hoger in de zoekresultaten, wat betekent dat
              responsief webdesign direct invloed heeft op SEO en online zichtbaarheid.
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
        <div className="hidden lg:block absolute top-0 right-0 h-full w-2/5">
          <video className="w-1/8 h-full object-cover rounded-md" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/16888255/file/large-84177aa34648dc9d842a724a030f3c6a.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:hidden">
          <video className="w-full h-64 object-cover" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/16888255/file/large-84177aa34648dc9d842a724a030f3c6a.mp4"
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
                <h2 className="font-heading text-5xl md:text-7xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.700),theme(colors.gray.500),theme(colors.green.400),theme(colors.black),theme(colors.green.300),theme(colors.green.700))] bg-[length:200%_auto] animate-gradient">
                  Wij ontwerpen al jaren responsieve websites
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <h2 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">
                  Waarom responsief webdesign?
                </h2>
                <p className="text-xl font-medium mb-10">
                  Responsief webdesign is niet langer een luxe, maar een noodzaak in het huidige digitale landschap. Met
                  de toenemende diversiteit aan apparaten waarmee mensen het internet gebruiken, is het cruciaal dat uw
                  website zich naadloos aanpast aan elk schermformaat.
                </p>
                <ul className="pl-5 mb-10">
                  <h4 className="font-bold">Waarom is Responsief Webdesign Belangrijk?</h4>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Verbeterde gebruikerservaring op alle apparaten
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Hogere conversieratio's en lagere bouncerates
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Betere SEO-prestaties en zoekmachinerangschikking
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Kosteneffectief onderhoud van één website voor alle apparaten
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">
                    ✅ Toekomstbestendig ontwerp dat meegroeit met nieuwe technologieën
                  </li>
                  <li className="hover:text-green-700 hover:font-bold">✅ Verbeterde laadsnelheid en prestaties</li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-green-700 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                >
                  Start uw responsieve project vandaag!
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
              <span className="inline-block ml-2 text-sm font-medium text-white">Hoe Werkt Responsief Webdesign?</span>
            </div>
            <div className="border-t border-white border-opacity-25 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een responsieve website wordt gebouwd met behulp van:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Volledig responsief",
                    description:
                      "Uw website past zich naadloos aan elk schermformaat aan, van smartphones tot desktops.",
                  },
                  {
                    title: "Optimale gebruikerservaring",
                    description:
                      "Intuïtieve navigatie en leesbaarheid op alle apparaten voor maximale gebruikerstevredenheid.",
                  },
                  {
                    title: "SEO-vriendelijk",
                    description: "Responsief design verbetert uw zoekmachinerangschikking en online zichtbaarheid.",
                  },
                  {
                    title: "Snelle laadtijden",
                    description: "Geoptimaliseerde code en afbeeldingen voor snelle laadtijden op alle apparaten.",
                  },
                  {
                    title: "Toekomstbestendig",
                    description: "Uw website is voorbereid op toekomstige apparaten en schermformaten.",
                  },
                  {
                    title: "Consistente branding",
                    description:
                      "Uw merkidentiteit blijft consistent, ongeacht het apparaat waarop uw site wordt bekeken.",
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
              Responsief webdesign specialisten
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
                        src="https://cdn.dribbble.com/userupload/16832353/file/large-34dec4c5ab5da805674d31e9d0922168.mp4"
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
                      Bij het ontwikkelen van een responsieve website staat kwaliteit voorop. Onze aanpak is gericht op
                      het leveren van websites die niet alleen aan uw verwachtingen voldoen, maar deze overtreffen. Hier
                      is wat u van ons kunt verwachten:
                    </p>
                    <ul>
                      {[
                        "Volledig responsieve websites",
                        "Optimale gebruikerservaring",
                        "SEO-vriendelijk ontwerp",
                        "Snelle laadtijden",
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
              Hier vindt u antwoorden op de meest gestelde vragen over responsief webdesign.
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
                <span>Voor meer informatie over responsief webdesign kunt u onze </span>
                <Link href="#" className="inline-block text-black font-medium underline">
                  Contactpagina
                </Link>
                <span> bezoeken of bel onze klantenservice op </span>
                <span className="text-black font-medium">010 322 04 10</span>
                <span>
                  . Ons toegewijde team staat klaar om u te helpen bij het realiseren van uw perfecte responsieve
                  website.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw online aanwezigheid te optimaliseren?</h2>
          <p className="text-xl mb-12">
            Bereik meer klanten en verbeter uw gebruikerservaring met een responsieve website.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-lime-500 rounded-full transition duration-200"
          >
            Start uw responsieve project
          </Link>
        </div>
      </section>
    </div>
  )
}

