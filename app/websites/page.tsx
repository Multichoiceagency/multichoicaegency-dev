"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import ProcessTimeline from "@/components/ProcessTimeline"
import HeroNieuw from "@/components/HeroNieuw"
import CasesPage from "../cases/page"

export default function Website() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een professionele website belangrijk voor mijn bedrijf?",
      answer:
        "Een professionele website is essentieel voor uw online aanwezigheid. Het is vaak het eerste contactpunt met potentiële klanten en weerspiegelt de kwaliteit en professionaliteit van uw bedrijf. Een goed ontworpen website kan uw geloofwaardigheid vergroten, leads genereren en uw merk versterken.",
    },
    {
      question: "Hoe lang duurt het om een website te laten maken?",
      answer:
        "De ontwikkeltijd voor een website varieert afhankelijk van de complexiteit en omvang van het project. Gemiddeld duurt het proces 6 tot 8 weken, inclusief ontwerp, ontwikkeling, testen en lancering. We houden u gedurende het hele proces op de hoogte van de voortgang.",
    },
    {
      question: "Kan ik mijn website zelf beheren na de lancering?",
      answer:
        "Absoluut! We bouwen onze websites op gebruiksvriendelijke platforms zoals NextJS of React of een andere keuze cms, waardoor u gemakkelijk zelf content kunt toevoegen of wijzigen. Na de lancering bieden we een uitgebreide handleiding en ondersteuning om u vertrouwd te maken met het content management systeem.",
    },
    {
      question: "Bieden jullie ook hosting en onderhoud aan?",
      answer:
        "Ja, we bieden hosting aan met een snelle en betrouwbare server. Dit zorgt voor optimale prestaties van uw website en betrouwbare uptime. We bieden ook onderhoudsplannen aan om ervoor te zorgen dat uw website up-to-date, veilig en goed presterend blijft.",
    },
    {
      question: "Hoe zorgen jullie ervoor dat mijn website goed scoort in zoekmachines?",
      answer:
        "We implementeren best practices voor SEO vanaf het begin van het ontwikkelingsproces. Dit omvat het optimaliseren van de websitestructuur, het verbeteren van de laadsnelheid, het implementeren van relevante metadata, en het zorgen voor een mobiel-vriendelijk ontwerp. Daarnaast adviseren we over content-strategieën die uw zichtbaarheid in zoekmachines kunnen verbeteren.",
    },
    {
      question: "Is de website die jullie maken mobiel-vriendelijk?",
      answer:
        "Absoluut! Alle websites die we ontwikkelen zijn volledig responsief en mobiel-vriendelijk. Dit betekent dat ze zich automatisch aanpassen aan verschillende schermformaten, of het nu gaat om smartphones, tablets of desktops. Dit is cruciaal voor een goede gebruikerservaring en SEO-ranking.",
    },
    {
      question: "Kunnen jullie mijn bestaande website vernieuwen of herontwerpen?",
      answer:
        "Zeker! We hebben ruime ervaring met het vernieuwen en herontwerpen van bestaande websites. We analyseren uw huidige site, bespreken uw doelen en wensen, en komen met een plan om uw online aanwezigheid te verbeteren en te moderniseren.",
    },
    {
      question: "Welke soorten bedrijven helpen jullie met het maken van websites?",
      answer:
        "We hebben ervaring met het bouwen van websites voor een breed scala aan bedrijven en industrieën. Of u nu een kleine startup bent, een middelgrote onderneming of een grote corporatie, we kunnen een op maat gemaakte oplossing bieden die past bij uw specifieke behoeften en doelstellingen.",
    },
    {
      question: "Hoe ziet het proces van website laten maken eruit?",
      answer:
        "Ons proces begint met een grondige analyse van uw behoeften en doelen. Vervolgens gaan we over tot het ontwerp, waarbij we nauw met u samenwerken om de look en feel van uw site te perfectioneren. Na goedkeuring van het ontwerp, gaan we over tot de ontwikkeling, waarbij we de site bouwen en testen. Tenslotte lanceren we de site en bieden we ondersteuning na de lancering.",
    },
    {
      question: "Bieden jullie ondersteuning na de lancering van de website?",
      answer:
        "Ja, we bieden uitgebreide ondersteuning na de lancering. Dit omvat technische ondersteuning, hulp bij content updates, en regelmatige controles om ervoor te zorgen dat uw website optimaal blijft presteren. We zijn er om u te helpen uw online aanwezigheid te onderhouden en te laten groeien.",
    },
  ]

  return (
    <div>
      <HeroNieuw 
      title={"Website laten maken"} 
      description={"Een professionele website laten maken? Bij ons kunt u rekenen op optimaal rendement. Zoekt u een ontwerp op maat, diepgaand gebruikersonderzoek, sterke merkpositionering en techniek op het hoogste niveau? Kies voor een website laten maken bij ons! "} 
      buttonText={"Offerte aanvragen"} 
      buttonLink={"/offerte-aanvragen"} 
      videoSrc={"https://cdn.dribbble.com/userupload/17855128/file/large-45aef91c794d3dfe747127edc550fd15.mp4"} />
      {/* Websites Section */}
      <section className="py-12 lg:py-24 relative">
        <div className="container mx-auto px-4 ">
          <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-24">
            <div className="flex mb-6 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="ml-2 text-sm font-medium">Transformeer jouw online aanwezigheid met een maatwerk website</span>
            </div>
            <h1 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">Wat levert een maatwerk website jouw bedrijf op?</h1>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
            Laat jouw merk opvallen met een professioneel ontwerp, geavanceerde functionaliteiten, en strategische oplossingen die resultaat opleveren.
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
              src="https://cdn.dribbble.com/userupload/17826232/file/large-caca22f6996733841e15a1eb583ca96b.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:hidden">
          <video className="w-full h-64 object-cover" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/17826232/file/large-caca22f6996733841e15a1eb583ca96b.mp4"
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
                    <div className="lg:sticky lg:top-8 bg-green-700/10 px-10 py-10 rounded-xl">
                    <h2 className="font-heading text-7xl md:text-7xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.700),theme(colors.gray.500),theme(colors.teal.400),theme(colors.black),theme(colors.green.300),theme(colors.green.700))] bg-[length:200%_auto] animate-gradient">
                    Waarom is een maatwerk website essentieel?
                      </h2>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <div className="lg:max-w-lg md:ml-auto">
                      <p className="text-xl font-medium mb-10">
                      Een maatwerk website biedt voordelen die standaardoplossingen simpelweg niet kunnen evenaren. Waar veel websites beperkt zijn door vooraf ontworpen templates, biedt een maatwerk website de vrijheid om volledig afgestemd te worden op jouw unieke merkidentiteit en bedrijfsdoelen. Of je nu een e-commerceplatform nodig hebt, een informatieve bedrijfswebsite of een interactieve applicatie, een maatwerk website opent de deur naar eindeloze mogelijkheden.</p>
                      <ul className="list-disc pl-5 mb-10">
                        <h4 className="font-bold">Hier zijn enkele redenen waarom een maatwerk website essentieel is voor jouw bedrijf:</h4>
                        <li className="hover:text-green-700 hover:font-bold">✅ Uniek maatwerk dat perfect aansluit op jouw merk.</li>
                        <li className="hover:text-green-700 hover:font-bold">✅ Razendsnelle laadtijden voor een optimale gebruikerservaring.</li>
                        <li className="hover:text-green-700 hover:font-bold">✅ Volledig responsief ontwerp, geschikt voor elk apparaat.</li>
                        <li className="hover:text-green-700 hover:font-bold">✅ Technische perfectie, van Next.js tot NextJS of React of een andere keuze cms.</li>
                        <li className="hover:text-green-700 hover:font-bold">✅ Centraal punt voor al uw marketing</li>
                        <li className="hover:text-green-700 hover:font-bold">✅ Schaalbaarheid voor de toekomst</li>
                      </ul>
                      <Link
                        href="#"
                        className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-green-700 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                      >
                        Start jouw digitale succes vandaag!
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
              <span className="inline-block ml-2 text-sm font-medium text-white">Wat kunt u van ons verwachten?</span>
            </div>
            <div className="border-t border-white border-opacity-25 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">Website laten maken door experts</h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "100% maatwerk",
                    description: "Jouw website wordt gebouwd met technologie die aansluit bij je specifieke doelen.",
                  },
                  {
                    title: "Mobiel vriendelijk",
                    description:
                      "Ontwerp en tests die zorgen voor een optimale gebruikerservaring op diverse apparaten.",
                  },
                  {
                    title: "Merkpositionering",
                    description:
                      "We helpen u niet alleen aan een mooie website, maar denken mee over het versterken van uw merk.",
                  },
                  {
                    title: "Unieke uitstraling",
                    description: "Jouw merk verdient een website die onderscheidend is en een blijvende indruk achterlaat.",
                  },
                  {
                    title: "Flexibiliteit en schaalbaarheid",
                    description: "Een maatwerk website groeit met jouw bedrijf mee en kan eenvoudig worden uitgebreid met nieuwe functionaliteiten.",
                  },
                  {
                    title: "Optimale prestaties",
                    description:
                      "Websites op maat worden gebouwd met schone code, wat resulteert in snellere laadtijden en betere zoekmachineposities.",
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
      <span className="inline-block ml-2 text-sm font-medium text-teal-900">Maatwerk specialisten</span>
    </div>
    <div className="border-t pt-16">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="flex flex-wrap lg:items-center -mx-4">
          {/* Afbeeldingsgedeelte */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="visible">
              <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                <source
                  src="https://cdn.dribbble.com/userupload/17938568/file/large-8ad20ebfa52322c8242d8c90f565dc45.mp4"
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
                Bij het ontwikkelen van een maatwerk website staat kwaliteit voorop. Onze aanpak is gericht op het leveren van websites die niet alleen aan jouw verwachtingen voldoen, maar deze overtreffen. Hier is wat je van ons kunt verwachten:
              </p>
              <ul>
                {["Maatwerk websites", "Responsief ontwerp", "SEO-optimalisatie", "Gebruiksvriendelijk CMS"].map(
                  (item, index) => (
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
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Nieuwe Sectie: Waarom kiezen voor Multichoiceagency? */}
        <div className="mt-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 text-teal-900">
            Waarom kiezen voor Multichoiceagency?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Met zoveel webdesignbureaus om uit te kiezen, waarom zou je kiezen voor Multichoiceagency? Het antwoord is simpel: wij leveren meer dan alleen websites. We leveren resultaten.
          </p>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-bold">1. Ervaring en expertise</h3>
              <p className="text-lg text-gray-700">
                Ons team bestaat uit ervaren professionals die gespecialiseerd zijn in design, ontwikkeling en strategie.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">2. Innovatieve technologie</h3>
              <p className="text-lg text-gray-700">
                We maken gebruik van de nieuwste technologieën, zoals Next.js, React en Storyblok, om websites te bouwen die zowel mooi als functioneel zijn.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">3. Focus op resultaat</h3>
              <p className="text-lg text-gray-700">
                Jouw succes is ons succes. Daarom richten we ons op het leveren van websites die meetbare resultaten opleveren, zoals hogere conversieratio's, meer verkeer en betere vindbaarheid.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">4. Persoonlijke service</h3>
              <p className="text-lg text-gray-700">
                Wij geloven in een persoonlijke aanpak. We luisteren naar jouw wensen, denken met je mee en zorgen ervoor dat jouw website perfect aansluit op jouw doelen.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



{/* About Section */}
<section className="py-12 lg:py-24">
  <div className="container mx-auto px-4">
    {/* Header: Titel en Afbeelding */}
    <div className="flex flex-wrap items-center -mx-4 mb-12">
      {/* Titel */}
      <div className="lg:sticky lg:top-8 w-full lg:w-1/2 px-4">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-teal-900">
          Wat kan je van ons verwachten?
        </h1>
      </div>
      {/* Afbeelding */}
      <div className="w-full lg:w-1/2 px-4">
        <div className="rounded-md overflow-hidden">
          <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/17576064/file/large-66aa8390bb133c8789bfc8bf6b663d9f.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

    {/* Horizontale Puntenlijst */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4  top-6">1. Een unieke website die jouw merk weerspiegelt</h2>
        <p className="text-lg text-gray-700">
          Elke website die we bouwen is uniek. Geen templates, maar een ontwerp dat volledig is afgestemd op jouw merkidentiteit.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">2. Volledig responsief ontwerp</h2>
        <p className="text-lg text-gray-700">
          Jouw website functioneert perfect op elk apparaat, of het nu een smartphone, tablet of desktop is.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">3. Razendsnelle laadtijden</h2>
        <p className="text-lg text-gray-700">
          Bezoekers zijn ongeduldig. We zorgen voor websites die snel laden en de gebruikerservaring verbeteren.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">4. Gebruiksvriendelijkheid</h2>
        <p className="text-lg text-gray-700">
          Intuïtieve interfaces die jouw bezoekers moeiteloos door jouw site leiden.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">5. Zoekmachineoptimalisatie (SEO)</h2>
        <p className="text-lg text-gray-700">
          We zorgen ervoor dat jouw website goed scoort in zoekmachines met de nieuwste SEO-technieken.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">6. Schaalbaarheid voor de toekomst</h2>
        <p className="text-lg text-gray-700">
          Onze websites groeien mee met jouw bedrijf en zijn flexibel en schaalbaar.
        </p>
      </div>
    </div>
  </div>
</section>




      {/* FAQ Section */}
      <section className="py-12 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">Veelgestelde vragen</h2>
            <p className="text-gray-700">Hier vindt u antwoorden op de meest gestelde vragen over onze diensten.</p>
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
                <span>Voor meer informatie kunt u onze </span>
                <Link href="#" className="inline-block text-black font-medium underline">
                  Contactpagina
                </Link>
                <span> bezoeken of bel onze klantenservice op </span>
                <span className="text-black font-medium">071 203 24 88</span>
                <span>
                  . Ons toegewijde team staat klaar om u te helpen bij het realiseren van uw perfecte website.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw bedrijf naar een hoger niveau te tillen?</h2>
          <p className="text-xl mb-12">Meer leads, meer klanten en een sterker merk met een professionele website.</p>
          <Link
            href="#"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-lime-500 rounded-full transition duration-200"
          >
            Start uw project
          </Link>
        </div>
      </section>
    </div>
  )
}

