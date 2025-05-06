"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/Hero-section"
import { PricingTable } from "@/components/pricing-table"

export default function UXUIDesignPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat is UX design en waarom is het belangrijk?",
      answer:
        "UX design richt zich op de gebruikerservaring en zorgt voor een intuïtieve interactie tussen de gebruiker en het digitale product. Dit leidt tot hogere conversies en een betere klanttevredenheid.",
    },
    {
      question: "Wat is UI design en wat maakt het anders?",
      answer:
        "UI design gaat over het visuele aspect van een product. Het bepaalt hoe de interface eruitziet, inclusief kleur, typografie en layout, en zorgt voor een consistente merkbeleving.",
    },
    {
      question: "Hoe verloopt het UX/UI designproces?",
      answer:
        "Het proces omvat meerdere fasen, waaronder onderzoek, wireframing, prototyping, visueel ontwerp, testen en optimalisatie. Gebruikersfeedback speelt hierbij een centrale rol.",
    },
    {
      question: "Kan ik mijn bestaande interface verbeteren met UX/UI design?",
      answer:
        "Ja, door middel van een grondige analyse van gebruikersgedrag en feedback kunnen bestaande interfaces worden geoptimaliseerd voor een betere gebruikerservaring.",
    },
    {
      question: "Wat zijn veelgemaakte fouten in UX/UI design?",
      answer:
        "Veelgemaakte fouten zijn onder andere het negeren van gebruikersfeedback, inconsistente visuele elementen en onvoldoende aandacht voor responsiviteit en toegankelijkheid.",
    },
    {
      question: "Hoeveel kost een UX/UI design project?",
      answer:
        "De kosten variëren afhankelijk van de complexiteit en scope van het project. Basis pakketten beginnen vaak vanaf €1.000, terwijl complexe projecten aanzienlijk meer kunnen kosten.",
    },
    {
      question: "Is het mogelijk om zelf aanpassingen te doen na oplevering?",
      answer:
        "Ja, veel UX/UI ontwerpen worden geleverd met een gebruiksvriendelijk CMS of design system, zodat je eenvoudig aanpassingen kunt doen zonder technische kennis.",
    },
    {
      question: "Hoe garanderen jullie een consistente merkbeleving?",
      answer:
        "We werken nauw samen met jou om een visueel en interactief design te ontwikkelen dat past bij jouw merkidentiteit en doelgroep, zodat elke interactie coherent is.",
    },
    {
      question: "Hoe zorgen jullie voor toegankelijkheid in het ontwerp?",
      answer:
        "We volgen de nieuwste richtlijnen voor toegankelijkheid, zodat je product bruikbaar is voor alle gebruikers, inclusief mensen met beperkingen.",
    },
    {
      question: "Welke tools en technologieën gebruiken jullie voor UX/UI design?",
      answer:
        "We maken gebruik van moderne design tools zoals Sketch, Figma en Adobe XD, gecombineerd met prototyping en testsoftware om de beste resultaten te behalen.",
    },
  ];
  

  return (
<>      <HeroNieuw
        title={"Wat is UX en UI Design?"}
        description={
          "Ontdek hoe een doordacht ontwerp de gebruikerservaring optimaliseert en jouw merk versterkt."
        }
        buttonText={"Meer informatie"}
        buttonLink={"/meer-over-ux-ui"}
        videoSrc={
          "https://cdn.dribbble.com/userupload/30790342/file/large-7a5d79e951693c662908917d615094d1.mp4"
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
              UX en UI Design Experts
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
                      UX en UI Design: Alles Wat Je Moet Weten
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      In de digitale wereld is een goed ontwerp essentieel voor een optimale gebruikerservaring. UX design richt zich op het verbeteren van de interactie en navigatie, terwijl UI design zorgt voor een aantrekkelijke en consistente visuele presentatie.
                    </p>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Samen vormen UX en UI de basis van een succesvol digitaal product. Ze zorgen ervoor dat gebruikers niet alleen snel vinden wat ze zoeken, maar ook genieten van een prettige en efficiënte interactie.
                    </p>

                    <ul className="text-black">
                      {[
                        "Intuïtieve Navigatie en Structuur",
                        "Aantrekkelijk en Consistent Visueel Ontwerp",
                        "Responsieve en Toegankelijke Interfaces",
                        "Gebruikersgerichte Ontwikkeling en Optimalisatie",
                        "Testen en Iteratieve Verbetering",
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
                          <span className="ml-3 text-sm text-black hover:text-green-600 font-black dark:text-white">
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
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                  Belangrijke Aspecten van UX en UI Design
                </h1>
                <p className="text-lg text-gray-700 mb-1 dark:text-white">
                  Een doordacht ontwerp is cruciaal voor het succes van digitale producten. Focus op gebruiksvriendelijkheid, visuele consistentie en responsiviteit om een optimale gebruikerservaring te realiseren.
                </p>
                <ul className="text-black py-5">
                  {[
                    "Duidelijke en Intuïtieve Navigatie",
                    "Consistente Visuele Identiteit",
                    "Responsief Ontwerp voor Alle Apparaten",
                    "Toegankelijkheid voor Alle Gebruikers",
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
                      <span className="ml-3 text-sm text-black font-600 font-black dark:hover:text-green-700 dark:text-white hover:text-green-700">                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-sm font-medium text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start jouw rebranding vandaag nog
                </Link>
              </div>
            </div>

            {/* Video Kolom */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="visible">
                <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                  <source
                    src="https://cdn.dribbble.com/userupload/11325265/file/original-c7a4197143414ce2f5c09a9f0e53fc9f.mp4"
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
                Hoe Werkt UX en UI Design?
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een succesvol ontwerpproces omvat:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Onderzoek en Analyse",
                    description:
                      "Begrijp de behoeften en gedragingen van je gebruikers door middel van onderzoek en data-analyse.",
                  },
                  {
                    title: "Wireframing en Prototyping",
                    description:
                      "Creëer schetsen en interactieve prototypes om de structuur en flow van de interface te testen.",
                  },
                  {
                    title: "Visueel Ontwerp",
                    description:
                      "Ontwikkel een aantrekkelijk design met aandacht voor kleur, typografie en consistentie.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voer gebruikerstesten uit en pas het ontwerp aan op basis van feedback en data.",
                  },
                  {
                    title: "Lancering en Onderhoud",
                    description:
                      "Zorg voor een soepele lancering en blijf optimaliseren voor een blijvende gebruikerservaring.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "Gebruik continue feedback om het ontwerp iteratief te verbeteren en aan te passen aan veranderende behoeften.",
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

      {/* Veelgemaakte Fouten Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">
              UX en UI Design Insights
            </span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center -mx-4">
                {/* Video Kolom */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/15015906/file/original-6c66e9a715a4a163b1c89a764208494c.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                {/* Tekst Kolom */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                      Veelgemaakte Fouten in UX en UI Design
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Ontwikkelaars en ontwerpers maken soms fouten die de gebruikerservaring negatief beïnvloeden. Vaak ontbreekt een duidelijke strategie en worden belangrijke elementen zoals toegankelijkheid en responsiviteit over het hoofd gezien.
                    </p>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                      Door deze valkuilen te vermijden, kun je een ontwerp realiseren dat zowel functioneel als visueel aantrekkelijk is, wat bijdraagt aan een betere interactie en hogere conversies.
                    </p>

                    <ul className="text-black">
                      <h3 className="text-lg py-3 font-bold dark:text-white">Belangrijke Elementen van Goed UX en UI Design</h3>
                      {[
                        "Responsief Ontwerp voor Alle Apparaten",
                        "Duidelijke en Intuïtieve Navigatie",
                        "Consistente Visuele Identiteit",
                        "Gebruiksvriendelijke Interacties",
                        "Toegankelijkheid en Performance",
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
                          <span className="ml-3 text-sm text-black hover:text-green-600 font-black dark:text-white">
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

      {/* Pricing Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">
              Wat Kost Professioneel UX/UI Design?
            </span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <h3 className="font-heading text-2xl sm:text-5xl md:text-3xl mb-6 dark:text-white">
                Kosten van UX en UI Design
                    </h3>
                <h3 className="dark:text-white"></h3>
                  <div className="max-w-xl">
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                        De kosten van een UX/UI design project variëren sterk afhankelijk van de complexiteit en scope. Hieronder een indicatie van de mogelijke investeringen:
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Factoren die de kosten beïnvloeden</h2>
                    <ul className="list-disc pl-5">
                        <li>Complexiteit van het ontwerp: Simpele websites of apps kosten minder dan complexe platforms met interactieve elementen.</li>
                        <li>Aantal schermen/pagina’s: Hoe meer schermen of pagina’s, hoe hoger de ontwerpkosten.</li>
                        <li>Maatwerk vs. standaard templates: Een op maat gemaakt ontwerp is duurder dan een ontwerp gebaseerd op bestaande sjablonen.</li>
                        <li>Onderzoek en testing: Gebruikersonderzoek, A/B-testing en prototyping kunnen de kosten verhogen, maar zorgen voor een beter eindproduct.</li>
                        <li>Ervaring van de ontwerper of bureau: Een ervaren UX/UI designer of een gespecialiseerd bureau vraagt vaak een hoger tarief dan een freelancer met minder ervaring.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Typen projecten</h2>
                    <ul className="list-disc pl-5">
                        <li>Basis website/app met een beperkt aantal schermen.</li>
                        <li>Gemiddeld project met meerdere schermen en interactieve elementen.</li>
                        <li>Complex platform met uitgebreide functionaliteiten en maatwerkoplossingen.</li>
                        <li>UX/UI Redesign van een bestaande applicatie.</li>
                        <li>Enterprise-oplossingen met geavanceerde functies.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Extra kosten om rekening mee te houden</h2>
                    <ul className="list-disc pl-5">
                        <li>Wireframing en prototyping om het ontwerp visueel te maken.</li>
                        <li>Gebruikersonderzoek en testen om de gebruikerservaring te optimaliseren.</li>
                        <li>Iteraties en revisies afhankelijk van het aantal correctierondes.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Hoe bespaar je op UX/UI design kosten?</h2>
                    <ul className="list-disc pl-5">
                        <li>Duidelijke briefing: Een gedetailleerde briefing helpt het proces efficiënter te maken.</li>
                        <li>Gebruik van design libraries zoals Material UI of Bootstrap.</li>
                        <li>MVP-aanpak: Begin met een minimale versie en breid later uit.</li>
                    </ul>

                    <p className="mt-6">
                        Wil je een UX/UI designproject starten en ben je benieuwd naar de exacte kosten? Neem contact met ons op voor een op maat gemaakte offerte. 🚀
                    </p>
                    <div className="py-5">
                    <Link
                  href="/offerte-aanvragen"
                  className="inline-flex py-4 px-6 items-center justify-center text-sm font-black text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
                >
                  Start jouw rebranding vandaag nog
                </Link>
                </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-cover rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/34757330/file/large-ffae5f4b8eaa7b28420b21ff00ad5dbf.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
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
              Hier vindt u antwoorden op de meest gestelde vragen over UX en UI design.
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
          <h2 className="text-4xl font-bold mb-6">Klaar om je digitale ervaring te verbeteren met UX en UI design?</h2>
          <p className="text-lg mb-8 text-black-700 hover:text-green-700 max-w-2xl mx-auto">
            Zet vandaag nog de stap naar een gebruiksvriendelijke en visueel aantrekkelijke interface. Wij helpen je met een op maat gemaakte oplossing die jouw digitale aanwezigheid versterkt.
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
    </>
  )
}
