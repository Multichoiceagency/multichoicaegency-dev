"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/Hero-section"
import PortfolioSection from "@/components/portfolio-section"


// Helper component for section list items (can be removed if not used elsewhere after hero change)
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center mb-4">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
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
    <span className="ml-3 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">{children}</span>
  </li>
)

export default function WebDevelopmentClientPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat voor soort webdevelopment projecten doen jullie?",
      answer:
        "Wij zijn gespecialiseerd in het bouwen van high-performance websites, complexe webshops en schaalbare maatwerk portalen. Onze focus ligt op het leveren van digitale platformen die naadloos aansluiten op jouw bedrijfsprocessen en groeiambities.",
    },
    {
      question: "Welke technologieën gebruiken jullie?",
      answer:
        "Onze kerntechnologieën zijn Next.js voor razendsnelle en SEO-vriendelijke frontends, en een headless CMS (zoals Contentful, Strapi of Sanity) voor flexibel contentbeheer. We integreren met diverse API's en systemen om de functionaliteit uit te breiden.",
    },
    {
      question: "Hoe lang duurt een gemiddeld webdevelopment traject?",
      answer:
        "De doorlooptijd hangt af van de complexiteit. Een strategische website duurt doorgaans 4-8 weken. Een uitgebreide webshop of maatwerk portaal kan 8-16 weken of langer duren. We stellen altijd een realistische planning op in de strategiefase.",
    },
    {
      question: "Is mijn nieuwe platform schaalbaar voor de toekomst?",
      answer:
        "Absoluut. Schaalbaarheid is een kernprincipe van onze aanpak. Door te bouwen op een moderne, flexibele architectuur (zoals Next.js en headless CMS) zorgen we ervoor dat jouw platform kan meegroeien met je bedrijf zonder kostbare herbouw.",
    },
    {
      question: "Hoe zorgen jullie voor een goede gebruikerservaring (UX)?",
      answer:
        "Gebruikerservaring staat centraal in ons ontwerpproces. We starten met een diepgaande analyse van de doelgroep, ontwikkelen wireframes en prototypes, en voeren gebruikerstests uit om te zorgen voor een intuïtieve en conversiegerichte interface.",
    },
    {
      question: "Wat zijn de kosten voor een webdevelopment project?",
      answer:
        "De kosten zijn afhankelijk van de scope. Een maatwerk website begint doorgaans vanaf €5.000, terwijl complexe portalen of webshops kunnen oplopen tot €25.000 of meer. We bieden een transparante offerte na een grondige kennismaking.",
    },
  ]

  return (
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white">
      {/* New Hero Section */}
      <HeroSection
        videoSrc={"/partners/ui.mp4"} // Make sure this video exists in public/partners/
        title={"Multichoiceagency - jouw full service digital agency"}
        description={
          "Als full service digital agency helpen we marketeers, ontwerpers en ontwikkelaars samen te werken om digitale ervaringen te bouwen, beheren en optimaliseren die resultaat opleveren."
        }
        buttonText={"Gratis Offerte"}
        buttonLink={"/offerte-aanvragen"}
      />

      {/* Section 1: Websites */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">Websites</span>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center lg:flex-row-reverse -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                    <source
                      src="https://cdn.dribbble.com/userupload/3266205/file/original-65cf49de6dc583c826a888011e6e75ff.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h2 className="font-heading text-4xl sm:text-5xl mb-6">Websites die converteren</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                      Een succesvolle website is meer dan een online visitekaartje. Het is een krachtige tool die
                      bijdraagt aan jouw bedrijfsdoelstellingen, van leadgeneratie tot directe verkoop. Wij ontwerpen en
                      ontwikkelen websites die niet alleen visueel aantrekkelijk zijn, maar ook strategisch zijn
                      opgebouwd voor maximale conversie en gebruiksvriendelijkheid.
                    </p>
                    <ul>
                      <CheckListItem>Strategisch en doordacht ontwerp</CheckListItem>
                      <CheckListItem>Technisch sterk en betrouwbaar</CheckListItem>
                      <CheckListItem>Optimaal gebruiksvriendelijk (UX/UI)</CheckListItem>
                      <CheckListItem>Klaar voor de toekomst en schaalbaar</CheckListItem>
                    </ul>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="bg-lime-500 hover:bg-lime-600 text-black dark:text-white dark:bg-lime-600 dark:hover:bg-lime-700"
                      >
                        <Link href="/onze-diensten">Bekijk onze diensten</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-lime-500 text-lime-500 hover:bg-lime-500/10 hover:text-lime-600 dark:border-lime-600 dark:text-lime-500 dark:hover:bg-lime-600/10 dark:hover:text-lime-400"
                      >
                        <Link href="/webdesign-configurator">Webdesign configurator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Webshops */}
      <section className="py-12 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                <source
                  src="https://cdn.dribbble.com/userupload/2935470/file/original-41678497c3bbcf77470768a2420438b7.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <div className="flex mb-4 items-center">
                  <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
                  </svg>
                  <span className="inline-block ml-2 text-sm font-medium text-lime-500">Webshops</span>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl mb-6">Webshops die verkopen</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Een winstgevende webshop vereist een doordachte e-commerce strategie, naadloze integraties en een
                  design dat klanten verleidt tot aankoop. Wij bouwen webshops die niet alleen mooi zijn, maar ook
                  geoptimaliseerd zijn voor verkoop, gebruiksgemak en groei.
                </p>
                <ul>
                  <CheckListItem>Doelgerichte e-commerce strategie</CheckListItem>
                  <CheckListItem>Naadloze integraties (ERP, PIM, CRM)</CheckListItem>
                  <CheckListItem>Conversiegericht design en UX</CheckListItem>
                  <CheckListItem>Schaalbare en robuuste technologie</CheckListItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Portalen */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">Portalen</span>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center lg:flex-row-reverse -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                    <source
                      src="https://cdn.dribbble.com/userupload/15831576/file/original-77e3918e88d9f08e8e79e7ad2f8154f9.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h2 className="font-heading text-4xl sm:text-5xl mb-6">Portalen die verbinden</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                      Digitale portalen stroomlijnen bedrijfsprocessen, verbeteren de samenwerking en bieden een
                      centrale hub voor informatie en interactie. Wij ontwikkelen maatwerk portalen die perfect
                      aansluiten op jouw specifieke behoeften, van klantenportalen tot interne systemen.
                    </p>
                    <ul>
                      <CheckListItem>Efficiënte en gestroomlijnde bedrijfsprocessen</CheckListItem>
                      <CheckListItem>Verbeterde samenwerking en communicatie</CheckListItem>
                      <CheckListItem>Veilige data-uitwisseling en -beheer</CheckListItem>
                      <CheckListItem>Gebruiksvriendelijke en intuïtieve interfaces</CheckListItem>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - New Dark Themed Component */}
      <PortfolioSection />

      {/* Process Section */}
      <section className="p-4 bg-white dark:bg-gray-950">
        <div className="py-16 px-5 sm:px-8 xl:px-12 bg-gray-900 dark:bg-gray-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">Onze Werkwijze</span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een gestructureerd proces voor gegarandeerd resultaat.
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "01. Kennismaking & Strategie",
                    description: "We starten met een diepgaande analyse van jouw doelen, doelgroep en markt.",
                  },
                  {
                    title: "02. Concept & Design",
                    description:
                      "Creatieve concepten en wireframes worden uitgewerkt tot een visueel en functioneel ontwerp.",
                  },
                  {
                    title: "03. Development & Realisatie",
                    description: "Onze developers bouwen het platform met de nieuwste, schaalbare technologieën.",
                  },
                  {
                    title: "04. Testen & Livegang",
                    description:
                      "Grondige tests op alle apparaten zorgen voor een vlekkeloze lancering van jouw platform.",
                  },
                  {
                    title: "05. Optimalisatie & Groei",
                    description: "Na livegang monitoren en optimaliseren we continu voor duurzaam succes en groei.",
                  },
                  {
                    title: "06. Support & Onderhoud",
                    description: "We bieden doorlopende ondersteuning om je platform veilig en up-to-date te houden.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12">
                    <div className="flex flex-col h-full">
                      <h5 className="text-2xl font-medium text-white mt-6 mb-3">{service.title}</h5>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">Veelgestelde vragen</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Antwoorden op de meest gestelde vragen over webdevelopment.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-4xl">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 3).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-green-900 dark:bg-gray-900 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96 mt-4" : "max-h-0"}`}
                      >
                        <p className="text-gray-300">{item.answer}</p>
                      </div>
                    </div>
                    <span
                      className={`flex-shrink-0 text-lime-300 mt-1 transition-transform duration-300 transform ${openAccordion === index ? "rotate-45" : ""}`}
                    >
                      {openAccordion === index ? "−" : "+"}
                    </span>
                  </button>
                ))}
              </div>
              <div className="w-full lg:w-1/2 px-4">
                {faqItems.slice(3).map((item, index) => (
                  <button
                    key={index + 3}
                    onClick={() => setOpenAccordion(openAccordion === index + 3 ? null : index + 3)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-green-900 dark:bg-gray-900 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 3 ? "max-h-96 mt-4" : "max-h-0"}`}
                      >
                        <p className="text-gray-300">{item.answer}</p>
                      </div>
                    </div>
                    <span
                      className={`flex-shrink-0 text-lime-300 mt-1 transition-transform duration-300 transform ${openAccordion === index + 3 ? "rotate-45" : ""}`}
                    >
                      {openAccordion === index + 3 ? "−" : "+"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white dark:bg-gray-950 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Klaar om jouw digitale ambities waar te maken?</h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Zet vandaag de stap naar een modern, snel en conversiegericht digitaal platform. Wij helpen je met een op
            maat gemaakte oplossing die jouw bedrijf online laat groeien.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-green-700 text-white font-semibold py-4 px-6 rounded-full text-lg hover:bg-green-800 transition duration-300"
            >
              Vraag een gratis offerte aan
            </Link>
            <Link
              href="/cases"
              className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-semibold py-4 px-6 rounded-full text-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
            >
              Bekijk ons werk
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
