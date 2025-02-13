"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import HeroNieuw from "@/components/HeroNieuw";
import CaseSlider from "@/components/SliderCases";

export default function Website(): JSX.Element {
  const { theme, resolvedTheme } = useTheme();
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

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
        "Absoluut! We bouwen onze websites op gebruiksvriendelijke platforms zoals NextJS, React of andere CMS‑oplossingen, waardoor u gemakkelijk zelf content kunt toevoegen of wijzigen. Na de lancering bieden we een uitgebreide handleiding en ondersteuning.",
    },
    {
      question: "Bieden jullie ook hosting en onderhoud aan?",
      answer:
        "Ja, we bieden hosting aan met een snelle en betrouwbare server. Dit zorgt voor optimale prestaties van uw website en betrouwbare uptime. We bieden ook onderhoudsplannen aan zodat uw website up‑to‑date en veilig blijft.",
    },
    {
      question: "Hoe zorgen jullie ervoor dat mijn website goed scoort in zoekmachines?",
      answer:
        "We implementeren SEO‑best practices vanaf het begin van het ontwikkelingsproces. Dit omvat een geoptimaliseerde websitestructuur, snelle laadtijden, relevante metadata en een mobielvriendelijk ontwerp. Daarnaast adviseren we over contentstrategieën om uw zichtbaarheid te vergroten.",
    },
    {
      question: "Is de website die jullie maken mobiel‑vriendelijk?",
      answer:
        "Absoluut! Alle websites die we ontwikkelen zijn volledig responsief en passen zich automatisch aan verschillende schermformaten aan, van smartphones tot desktops.",
    },
    {
      question: "Kunnen jullie mijn bestaande website vernieuwen of herontwerpen?",
      answer:
        "Zeker! We hebben ruime ervaring met het vernieuwen en herontwerpen van bestaande websites. We analyseren uw huidige site en werken samen met u om een plan op maat te ontwikkelen dat uw online aanwezigheid versterkt.",
    },
    {
      question: "Welke soorten bedrijven helpen jullie met het maken van websites?",
      answer:
        "Wij hebben ervaring met bedrijven van elke omvang, van startups tot grote ondernemingen. Onze maatwerkoplossingen sluiten aan op de specifieke behoeften en doelstellingen van elk bedrijf.",
    },
    {
      question: "Hoe ziet het proces van website laten maken eruit?",
      answer:
        "Ons proces begint met een grondige analyse van uw wensen en doelen. Vervolgens werken we aan het ontwerp en de ontwikkeling van de website, testen we deze uitgebreid en lanceren we de site. We blijven ondersteuning bieden na de lancering.",
    },
    {
      question: "Bieden jullie ondersteuning na de lancering van de website?",
      answer:
        "Ja, we bieden uitgebreide ondersteuning na de lancering. Dit omvat technische ondersteuning, content updates en regelmatige controles om ervoor te zorgen dat uw website optimaal blijft presteren.",
    },
  ];

  return (
    <div>
      {/* Hero Sectie */}
      <HeroNieuw
        title="Website laten maken"
        description="Een professionele website laten maken? Bij ons kunt u rekenen op optimaal rendement. Zoekt u een ontwerp op maat, diepgaand gebruikersonderzoek, sterke merkpositionering en techniek op het hoogste niveau? Kies voor een website laten maken bij ons!"
        buttonText="Offerte aanvragen"
        buttonLink="/offerte-aanvragen"
        videoSrc="https://cdn.dribbble.com/userupload/17855128/file/large-45aef91c794d3dfe747127edc550fd15.mp4"
      />

      {/* Websites Info Sectie */}
      <section className="py-12 lg:py-24 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-24">
            <div className="flex mb-6 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="2" fill="#022C22" />
                <circle cx="6" cy="6" r="4" fill="#BEF264" />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Transformeer jouw online aanwezigheid met een maatwerk website
              </span>
            </div>
            <h1 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8 text-gray-900 dark:text-white inline-block">
              Wat levert een maatwerk website jouw bedrijf op?
            </h1>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 dark:text-gray-300 mb-10">
              Laat jouw merk opvallen met een professioneel ontwerp, geavanceerde functionaliteiten en strategische oplossingen die resultaat opleveren. Een website op maat creëert vertrouwen en helpt uw bedrijf te groeien.
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

      {/* Services Sectie */}
      <section className="p-4 bg-white dark:bg-gray-900">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-teal-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264" />
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">
                Wat kunt u van ons verwachten?
              </span>
            </div>
            <div className="border-t border-white border-opacity-25 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Website laten maken door experts
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "100% maatwerk",
                    description: "Jouw website wordt gebouwd met technologie die aansluit bij je specifieke doelen.",
                  },
                  {
                    title: "Mobiel vriendelijk",
                    description: "Ontwerp en tests zorgen voor een optimale gebruikerservaring op diverse apparaten.",
                  },
                  {
                    title: "Merkpositionering",
                    description: "Wij denken mee over het versterken van uw merk, zodat uw website naadloos aansluit bij uw bedrijfsidentiteit.",
                  },
                  {
                    title: "Unieke uitstraling",
                    description: "Een website die onderscheidt en een blijvende indruk achterlaat op uw bezoekers.",
                  },
                  {
                    title: "Flexibiliteit en schaalbaarheid",
                    description: "Een maatwerk website groeit mee met uw bedrijf en kan eenvoudig worden uitgebreid.",
                  },
                  {
                    title: "Optimale prestaties",
                    description: "Snelle laadtijden en schone code zorgen voor betere zoekmachineposities en een optimale gebruikerservaring.",
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

      {/* About Sectie */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4 mb-12">
            {/* Titel */}
            <div className="lg:sticky lg:top-8 w-full lg:w-1/2 px-4">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-teal-900 dark:text-white inline-block rounded-md">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Een unieke website die jouw merk weerspiegelt",
                description:
                  "Elke website die we bouwen is uniek. Geen templates, maar een ontwerp dat volledig is afgestemd op jouw merkidentiteit.",
              },
              {
                title: "2. Volledig responsief ontwerp",
                description: "Jouw website functioneert perfect op elk apparaat, of het nu een smartphone, tablet of desktop is.",
              },
              {
                title: "3. Razendsnelle laadtijden",
                description:
                  "Bezoekers zijn ongeduldig. We zorgen voor websites die snel laden en de gebruikerservaring verbeteren.",
              },
              {
                title: "4. Gebruiksvriendelijkheid",
                description: "Intuïtieve interfaces zorgen ervoor dat jouw bezoekers moeiteloos door jouw site navigeren.",
              },
              {
                title: "5. Zoekmachineoptimalisatie (SEO)",
                description:
                  "Wij passen de nieuwste SEO-technieken toe, zodat uw website goed gevonden wordt in zoekmachines.",
              },
              {
                title: "6. Schaalbaarheid voor de toekomst",
                description:
                  "Onze websites groeien mee met uw bedrijf en zijn flexibel en uitbreidbaar.",
              },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onze Werkwijze Sectie */}
      <section className="py-12 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-8 text-gray-900 dark:text-white">
            Onze Werkwijze
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wij geloven in een transparant en gestructureerd proces. Van de eerste kennismaking tot de uiteindelijke lancering van uw website, werken we nauw met u samen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-3">Stap 1: Analyse & Strategie</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We starten met een uitgebreide analyse van uw wensen, doelgroep en concurrenten. Zo kunnen we een strategie op maat ontwikkelen.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-3">Stap 2: Creatief Ontwerp</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Op basis van de analyse maken onze designers een uniek concept dat perfect aansluit bij uw merkidentiteit.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-3">Stap 3: Ontwikkeling</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Onze ontwikkelaars bouwen een technisch robuuste website die voldoet aan de nieuwste standaarden en optimalisaties.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-3">Stap 4: Lancering & Nazorg</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Na uitvoerig testen lanceren we uw website. Ook na de lancering blijft u op ons rekenen voor updates en optimalisaties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Teksten Sectie */}
      <section className="py-12 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-8 text-gray-900 dark:text-white">
            Extra Informatie
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Bij ons staat kwaliteit en maatwerk centraal. We zorgen ervoor dat elke website die we ontwerpen en ontwikkelen volledig is afgestemd op de wensen van onze klanten.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Onze aanpak is uniek. We beginnen altijd met een grondige analyse van uw behoeften en gaan vervolgens over tot een creatief proces waarin we uw merkidentiteit en bedrijfsdoelstellingen verwerken.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Of u nu een startup bent of een gevestigde onderneming, wij bieden een oplossing die perfect past bij uw situatie. Onze websites zijn niet alleen visueel aantrekkelijk, maar ook technisch geoptimaliseerd voor snelheid en zoekmachineoptimalisatie.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Neem contact met ons op voor meer informatie of een vrijblijvend gesprek over de mogelijkheden voor uw bedrijf. Samen brengen we uw online aanwezigheid naar een hoger niveau.
          </p>
        </div>
      </section>

      {/* Slider Sectie */}
      <section className="max-w-screen mx-auto">
        <div>
          <CaseSlider />
        </div>
      </section>

      {/* FAQ Sectie */}
      <section className="py-12 lg:py-24 bg-orange-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white inline-block">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Hier vindt u antwoorden op de meest gestelde vragen over onze diensten.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 5).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white dark:bg-gray-800 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.question}
                      </h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-700 dark:text-gray-300 mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5.69995 12H18.3"
                            stroke={theme === "dark" || resolvedTheme === "dark" ? "#fff" : "#1D1F1E"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 5.69995V18.3"
                            stroke={theme === "dark" || resolvedTheme === "dark" ? "#fff" : "#1D1F1E"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.69995 12H18.3"
                            stroke={theme === "dark" || resolvedTheme === "dark" ? "#fff" : "#1D1F1E"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
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
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white dark:bg-gray-800 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.question}
                      </h5>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index + 5 ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-700 dark:text-gray-300 mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 5 ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5.69995 12H18.3"
                            stroke={theme === "dark" || resolvedTheme === "dark" ? "#fff" : "#1D1F1E"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 5.69995V18.3"
                            stroke={theme === "dark" || resolvedTheme === "dark" ? "#fff" : "#1D1F1E"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.69995 12H18.3"
                            stroke={theme === "dark" || resolvedTheme === "dark" ? "#fff" : "#1D1F1E"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="max-w-xl mx-auto text-center">
              <h5 className="text-4xl font-medium mb-4 text-gray-900 dark:text-white inline-block">
                Heb je nog vragen?
              </h5>
              <p className="text-gray-700 dark:text-gray-300">
                Voor meer informatie kunt u onze{" "}
                <Link href="/contact" className="inline-block text-black dark:text-white font-medium underline">
                  Contact
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-black underline dark:text-white font-medium"><Link href="tel:0103220410">010 322 04 10</Link></span>.
                Ons toegewijde team staat klaar om u te helpen bij het realiseren van uw perfecte website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Teksten Sectie */}
      <section className="py-12 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-8 text-gray-900 dark:text-white">
            Extra Informatie
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Bij ons staat kwaliteit en maatwerk centraal. We zorgen ervoor dat elke website die we ontwerpen en ontwikkelen volledig is afgestemd op de wensen van onze klanten.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Onze aanpak is uniek. We beginnen altijd met een grondige analyse van uw behoeften en gaan vervolgens over tot een creatief proces waarin we uw merkidentiteit en bedrijfsdoelstellingen verwerken.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Of u nu een startup bent of een gevestigde onderneming, wij bieden een oplossing die perfect past bij uw situatie. Onze websites zijn niet alleen visueel aantrekkelijk, maar ook technisch geoptimaliseerd voor snelheid en zoekmachineoptimalisatie.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Neem contact met ons op voor meer informatie of een vrijblijvend gesprek over de mogelijkheden voor uw bedrijf. Samen brengen we uw online aanwezigheid naar een hoger niveau.
          </p>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white dark:bg-teal-900 dark:text-white inline-block">
            Klaar om uw bedrijf naar een hoger niveau te tillen?
          </h2>
          <p className="text-xl mb-12">
            Meer leads, meer klanten en een sterker merk met een professionele website.
          </p>
          <Link
            href="offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-lime-500 rounded-full transition duration-200"
          >
            Start uw project
          </Link>
        </div>
      </section>
    </div>
  );
}
