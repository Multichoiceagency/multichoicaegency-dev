"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd, } from 'next-seo';


const WebsiteLatenMaken = () => {
  return (
    <>
      <NextSeo
        title="Website Laten Maken | Professioneel Webdesign voor Bedrijven"
        description="Wil je een website laten maken? Ontdek de voordelen van een professionele website en hoe je de beste webdesigner kiest voor jouw bedrijf. Vraag een offerte aan!"
        canonical="https://www.multichoiceagency.nl/website-laten-maken"
        openGraph={{
          type: 'website',
          url: 'https://www.multichoiceagency.nl/website-laten-maken',
          title: 'Website Laten Maken | Professioneel Webdesign voor Bedrijven',
          description:
            'Wil je een website laten maken? Ontdek de voordelen van een professionele website en hoe je de beste webdesigner kiest voor jouw bedrijf. Vraag een offerte aan!',
          images: [
            {
              url: '/partners/website-laten-maken.png',
              width: 1200,
              height: 630,
              alt: 'Website laten maken',
            },
          ],
        }}
        twitter={{
          handle: '@jouwtwitterhandle',
          site: '@jouwtwitterhandle',
          cardType: 'summary_large_image',
        }}
      />

      {/* Breadcrumb Schema (voor betere navigatie-indexering) */}
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'Home', item: 'https://www.multichoiceagency.nl' },
          { position: 2, name: 'Website Laten Maken', item: 'https://www.multichoiceagency.nl/website-laten-maken' },
        ]}
      />

      {/* FAQ Schema (voor Google Rich Snippets) */}
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Waarom is een professionele website belangrijk?',
            acceptedAnswerText:
              'Een professionele website vergroot de online zichtbaarheid, verbetert klantvertrouwen en verhoogt conversies. Het biedt een professionele uitstraling en helpt je beter gevonden te worden in zoekmachines.',
          },
          {
            questionName: 'Hoeveel kost een website laten maken?',
            acceptedAnswerText:
              'De kosten variëren van €1.499 voor een eenvoudige website tot €10.000+ voor maatwerk. De prijs is afhankelijk van het design, functionaliteiten en de complexiteit van de website.',
          },
          {
            questionName: 'Hoe lang duurt het om een website te laten maken?',
            acceptedAnswerText:
              'Een standaard website kan binnen 2 tot 4 weken worden opgeleverd. Voor complexe maatwerkprojecten kan de ontwikkeling 6 tot 12 weken duren.',
          },
          {
            questionName: 'Is een mobiele versie van de website inbegrepen?',
            acceptedAnswerText:
              'Ja, alle websites die wij ontwikkelen zijn 100% responsive en geoptimaliseerd voor mobiele apparaten, tablets en desktops.',
          },
          {
            questionName: 'Bieden jullie onderhoud en support na de lancering?',
            acceptedAnswerText:
              'Ja, we bieden verschillende onderhoudspakketten, inclusief beveiligingsupdates, back-ups en technische ondersteuning.',
          },
        ]}
      />      
    </>
  );
};

export default function BackendDevelopment() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een professionele website belangrijk voor mijn bedrijf?",
      answer:
        "Een professionele website is het online visitekaartje van je bedrijf en een essentieel marketinginstrument. Het zorgt voor geloofwaardigheid, vergroot je bereik en helpt bij het aantrekken van klanten. Een goed ontworpen website verbetert de gebruikerservaring en draagt bij aan hogere conversies.",
    },
    {
      question: "Hoe lang duurt het om een website te laten maken?",
      answer:
        "De doorlooptijd van een website varieert afhankelijk van de complexiteit en functionaliteiten. Een eenvoudige bedrijfswebsite kan binnen 2 tot 4 weken gereed zijn, terwijl een maatwerk website of webshop 6 tot 12 weken kan duren. We zorgen ervoor dat je gedurende het hele proces op de hoogte blijft.",
    },
    {
      question: "Kan ik mijn bestaande website laten vernieuwen of optimaliseren?",
      answer:
        "Ja, we kunnen je bestaande website moderniseren, zowel qua design als prestaties. Dit kan variëren van een visuele opfrissing tot een volledige technische herstructurering om de snelheid, SEO en gebruiksvriendelijkheid te verbeteren.",
    },
    {
      question: "Welke technologieën gebruiken jullie voor webdevelopment?",
      answer:
        "We werken met moderne technologieën zoals WordPress, Next.js, Vue.js en Shopify voor front-end en back-end ontwikkeling. Voor maatwerk oplossingen gebruiken we frameworks zoals Laravel, Django of Node.js, afhankelijk van de behoeften van je project.",
    },
    {
      question: "Hoe zorgen jullie ervoor dat mijn website goed vindbaar is in Google?",
      answer:
        "We passen zoekmachineoptimalisatie (SEO) toe vanaf de basis, inclusief technische SEO, snelle laadtijden, mobielvriendelijk design en geoptimaliseerde content. We zorgen ervoor dat je website goed scoort in zoekmachines en helpen bij de juiste strategie om meer verkeer aan te trekken.",
    },
    {
      question: "Wat zijn de kosten voor een website laten maken?",
      answer:
        "De kosten hangen af van de complexiteit en functies van de website. Een eenvoudige website begint vanaf €1.499,-, terwijl een uitgebreide webshop of maatwerk platform €5.000,- tot €20.000,- kan kosten. We bieden transparante prijzen en adviseren je graag over de beste optie voor jouw bedrijf.",
    },
    {
      question: "Is mijn website geschikt voor mobiel en tablets?",
      answer:
        "Ja, alle websites die we bouwen zijn volledig responsive, wat betekent dat ze zich automatisch aanpassen aan verschillende schermformaten. Dit zorgt voor een optimale gebruikerservaring op desktops, tablets en smartphones.",
    },
    {
      question: "Kan ik zelf content aanpassen op mijn website?",
      answer:
        "Ja, we bouwen websites met gebruiksvriendelijke CMS-systemen zoals WordPress of een maatwerk dashboard. Hiermee kun je eenvoudig teksten, afbeeldingen en producten aanpassen zonder technische kennis.",
    },
    {
      question: "Hoe zit het met onderhoud en updates na de lancering?",
      answer:
        "We bieden onderhoudspakketten waarmee je website veilig en up-to-date blijft. Dit omvat beveiligingsupdates, back-ups, prestatie-optimalisatie en technische ondersteuning. Zo voorkom je problemen en blijft je website optimaal functioneren.",
    },
    {
      question: "Kunnen jullie mijn website koppelen aan externe systemen zoals CRM of betalingsproviders?",
      answer:
        "Ja, we kunnen integraties verzorgen met verschillende systemen zoals CRM-software, betalingsproviders (zoals Mollie of Stripe), boekhoudprogramma's en marketingtools. Hierdoor wordt je website een krachtig onderdeel van je bedrijfsvoering.",
    },
  ];
  

  return (
    <div className="bg-white text-black">
      <HeroNieuw
        title={"Website laten maken"}
        description={
          "Website laten maken? Ontdek de voordelen van een professionele website en hoe je de beste webdesigner kiest voor jouw bedrijf."
        }
        buttonText={"Offerte aanvragen"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={
          "https://cdn.dribbble.com/userupload/17109055/file/original-2cafa8b32d4d214f655c9c127ad036fd.mp4"
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
        Website specialisten
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
              Website Laten Maken: Alles Wat Je Moet Weten
              </h1>
              <p className="text-lg text-gray-700 mb-10 dark:text-white">
              In het digitale tijdperk is een professionele website onmisbaar voor bedrijven en ondernemers. Een goed ontworpen website is niet alleen een online visitekaartje, maar ook een krachtig marketinginstrument. Het bepaalt hoe potentiële klanten jouw merk waarnemen en beïnvloedt hun aankoopbeslissingen. Daarom is een website laten maken door een professional een slimme investering.
              </p>
              <p className="text-lg text-gray-700 mb-10 dark:text-white">
              Een website biedt zichtbaarheid, geloofwaardigheid en toegankelijkheid. Klanten zoeken tegenwoordig online naar producten en diensten, en zonder een sterke online aanwezigheid mis je kansen. Een op maat gemaakte website verhoogt de betrouwbaarheid en zorgt ervoor dat je beter vindbaar bent in zoekmachines.
              </p>

              <ul className="text-black">
                {[
                  "Een Uniek en Aantrekkelijk Design",
                  "Betere Gebruikerservaring",
                  "SEO Geoptimaliseerd voor Beter Vindbaarheid",
                  "Schaalbaarheid en Toekomstbestendigheid",
                  "Fundament voor innovatieve opties",
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
                    <span className="ml-3 text-xs font-medium text-gray-700 dark:text-white">
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
          <h2 className="font-heading text-2xl sm:text-2xl md:text-3xl mb-6 dark:text-white">
          Waar Moet Je Op Letten Bij Het Laten Maken van een Website?
          </h2>
          <p className="text-lg text-gray-700 mb-1 dark:text-white">
            Backend development is de ruggengraat van moderne digitale oplossingen. Het stelt
            bedrijven in staat om complexe processen te automatiseren, grote hoeveelheden data
            te verwerken en schaalbare systemen te bouwen die kunnen groeien met uw bedrijf.
          </p>
          <ul className="text-black py-5">
            {[
              "Portfolio en Ervaring: Bekijk eerdere projecten en beoordeel de kwaliteit van het werk.",
              "Specialisaties: Sommige webdesigners zijn gespecialiseerd in e-commerce, terwijl anderen zich richten op corporate websites of blogs.",
              "Prijs en Kostenstructuur: Vraag altijd een duidelijke offerte en check wat is inbegrepen.",
              "SEO en Marketing Integratie: Een goede website is niet alleen mooi, maar ook goed vindbaar.",
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="ml-3 text-xs text-gray-700 font-medium font-600 dark:text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-6 items-center justify-center text-xs font-black text-white hover:text-white hover:border-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
          >
            Start jouw website project vandaag nog!
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
                Hoe Werkt Backend Development?
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Een robuuste website wordt gebouwd met behulp van:
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Kennismaking en Analyse",
                    description:
                      "Tijdens een eerste gesprek worden de wensen en doelen van de website besproken. Dit helpt de webdesigner om een strategie op te stellen.",
                  },
                  {
                    title: "Ontwerp en Conceptontwikkeling",
                    description:
                      "Hier wordt een eerste ontwerp (wireframe) gemaakt. Dit geeft een visuele voorstelling van de structuur en indeling van de website.",
                  },
                  {
                    title: "Ontwikkeling en Programmeren",
                    description:
                      "De daadwerkelijke bouw van de website vindt plaats. Hier worden functionaliteiten geïmplementeerd zoals formulieren, animaties en e-commerce functies.",
                  },
                  {
                    title: "Testfase en Optimalisatie",
                    description:
                      "Voordat de website live gaat, wordt deze uitgebreid getest op verschillende apparaten en browsers. Eventuele fouten en verbeterpunten worden doorgevoerd.",
                  },
                  {
                    title: "Lancering en Onderhoud",
                    description:
                      "Na goedkeuring wordt de website live gezet. Onderhoud en updates zijn belangrijk om de website veilig en up-to-date te houden.",
                  },
                  {
                    title: "Prestatie-optimalisatie",
                    description:
                      "Technieken om de snelheid en efficiëntie van uw systemen te maximaliseren.",
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
        Website specialisten
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
                  src="https://cdn.dribbble.com/userupload/31676732/file/original-396e835eee2b982448adba728049e125.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Text Column */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-xl">
            <h2 className="font-heading text-2xl sm:text-2xl md:text-3xl mb-6 dark:text-white">
              Veelgemaakte Fouten Bij Het Laten Maken van een Website
              </h2>
              <p className="text-md text-gray-700 mb-10 dark:text-white">
              Ondernemers maken vaak fouten bij het ontwikkelen van een website, en deze valkuilen kunnen de effectiviteit van een site sterk beïnvloeden. Een veelvoorkomende fout is het ontbreken van een duidelijk doel. Zonder een strategie mist de website focus en wordt het lastig om de juiste doelgroep te bereiken. Daarnaast zien we vaak dat er te veel nadruk ligt op het design, terwijl functionaliteit en gebruiksvriendelijkheid minstens zo belangrijk zijn. Een mooie website is waardevol, maar als bezoekers moeite hebben met navigeren of niet worden aangezet tot actie, dan mist de site zijn doel.</p>
              <p className="text-md text-gray-700 mb-10 dark:text-white">
              Een andere grote misser is het negeren van SEO. Zonder zoekmachineoptimalisatie wordt de website nauwelijks gevonden, wat betekent dat potentiële klanten de site niet bereiken. Ook mobiele optimalisatie wordt nog te vaak over het hoofd gezien. Aangezien een groot deel van de internetgebruikers websites bezoekt via een smartphone, is een mobielvriendelijke site essentieel. Door deze valkuilen te vermijden, zorg je voor een website die niet alleen visueel aantrekkelijk is, maar ook goed functioneert en effectief is in het aantrekken van bezoekers en klanten.
              </p>

              <ul className="text-black">
                <h3 className="text-sm py-3 font-bold dark:text-white">Wat Zijn de Belangrijkste Functionaliteiten van een Goede Website?</h3>
                {[
                  "Responsief Design: Geschikt voor mobiel, tablet en desktop.",
                  "Snelle Laadtijd: Bezoekers haken af bij een trage website.",
                  "Duidelijke Navigatie: Gebruiksvriendelijke menu’s en knoppen.",
                  "Sterke Call-to-Action (CTA’s): Duidelijke knoppen om bezoekers te laten converteren.",
                  "SEO-geoptimaliseerde Content: Belangrijke zoekwoorden en relevante teksten.",
                  "Veiligheid en SSL-certificaat: Bescherming van gegevens en een betrouwbaar imago.",
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
                    <span className="ml-3 text-xs font-medium text-gray-700 dark:text-white">
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
              Backend development specialisten
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
                    Hoeveel Kost een Website Laten Maken?
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 dark:text-white">
                    De kosten van een website laten maken variëren sterk, afhankelijk van complexiteit, functionaliteiten en de gekozen ontwikkelaar. Gemiddeld kun je rekening houden met de volgende richtprijzen:
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
                        <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>€249- €500</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Standaard Bedrijfswebsite</td>
                        <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>€1.999 - €5.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Webshop / E-commerce</td>
                        <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>€2.499 - €10.000+</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Gecodeerde website</td>
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
              Hier vindt u antwoorden op de meest gestelde vragen over backend development en
              custom software.
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
              <h2 className="text-4xl font-bold mb-6">Klaar om een professionele website te laten maken?</h2>
              <p className="text-lg mb-8 text-black-700 max-w-2xl mx-auto">
                Zet vandaag nog de stap naar een moderne, snelle en conversiegerichte website. Wij helpen je met een op maat gemaakte oplossing die jouw bedrijf online laat groeien.
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
                  className="dark:bg-black dark:text-white text-black font-semibold py-4 px-6 rounded-full text-lg hover:bg-white hover:text-green-900 transition duration-300"
                >
                  Bekijk ons werk
                </a>
              </div>
            </div>
          </section>
        </div>
  )
}
