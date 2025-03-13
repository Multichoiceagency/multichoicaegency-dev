"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from "next-seo"

const WooCommerceWebshopSEO = () => {
  return (
    <>
      <NextSeo
        title="WooCommerce Webshop Laten Maken: Bouw Jouw Online Winkel op WordPress"
        description="Laat jouw WooCommerce webshop op maat maken. Profiteer van de kracht van WordPress en WooCommerce voor een flexibele, schaalbare en converterende online winkel."
        canonical="https://www.multichoiceagency.nl/woocommerce-webshop-laten-maken"
        openGraph={{
          type: "website",
          url: "https://www.multichoiceagency.nl/woocommerce-webshop-laten-maken",
          title: "WooCommerce Webshop Laten Maken: Bouw Jouw Online Winkel op WordPress",
          description:
            "Laat jouw WooCommerce webshop op maat maken. Profiteer van de kracht van WordPress en WooCommerce voor een flexibele, schaalbare en converterende online winkel.",
          images: [
            {
              url: "/partners/woocommerce-webshop.png",
              width: 1200,
              height: 630,
              alt: "WooCommerce Webshop Laten Maken",
            },
          ],
        }}
        twitter={{
          handle: "@jouwtwitterhandle",
          site: "@jouwtwitterhandle",
          cardType: "summary_large_image",
        }}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: "Home", item: "https://www.multichoiceagency.nl" },
          {
            position: 2,
            name: "WooCommerce Webshop Laten Maken",
            item: "https://www.multichoiceagency.nl/woocommerce-webshop-laten-maken",
          },
        ]}
      />

      {/* FAQ Schema */}
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "Wat is een WooCommerce webshop?",
            acceptedAnswerText:
              "Een WooCommerce webshop is een online winkel gebouwd op WordPress met de WooCommerce plugin, die krachtige e-commerce functionaliteiten biedt.",
          },
          {
            questionName: "Waarom kiezen voor WooCommerce?",
            acceptedAnswerText:
              "WooCommerce is flexibel, schaalbaar en volledig geïntegreerd met WordPress, waardoor het een ideale keuze is voor bedrijven die op zoek zijn naar maatwerk en uitgebreide functionaliteiten.",
          },
          {
            questionName: "Hoe lang duurt het om een WooCommerce webshop te laten maken?",
            acceptedAnswerText:
              "De ontwikkelingstijd varieert per project, maar gemiddeld duurt een WooCommerce webshop tussen de 6 en 12 weken.",
          },
          {
            questionName: "Kan ik na de lancering zelf de content beheren?",
            acceptedAnswerText:
              "Ja, omdat WooCommerce onderdeel is van WordPress, kun je gemakkelijk producten, content en andere elementen zelf beheren.",
          },
          {
            questionName: "Bieden jullie ondersteuning en onderhoud na de lancering?",
            acceptedAnswerText:
              "Ja, wij bieden diverse support- en onderhoudpakketten aan om jouw WooCommerce webshop veilig en up-to-date te houden.",
          },
          {
            questionName: "Welke extra functionaliteiten kunnen worden geïntegreerd?",
            acceptedAnswerText:
              "Wij kunnen extra integraties realiseren, zoals betalingssystemen, CRM, marketingtools en logistieke oplossingen, zodat jouw webshop volledig op maat wordt gemaakt.",
          },
          {
            questionName: "Hoe zit het met SEO en performance?",
            acceptedAnswerText:
              "Onze WooCommerce webshops worden gebouwd met de nieuwste SEO-technieken en optimalisaties voor snelle laadtijden en hoge vindbaarheid in zoekmachines.",
          },
          {
            questionName: "Wat zijn de kosten voor een WooCommerce webshop?",
            acceptedAnswerText:
              "De kosten variëren afhankelijk van de complexiteit en jouw wensen. Neem contact met ons op voor een vrijblijvende offerte op maat.",
          },
        ]}
      />
    </>
  )
}

export default function WooCommerceWebshopPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat is een WooCommerce webshop en waarom is het de juiste keuze?",
      answer:
        "Een WooCommerce webshop is een online winkel gebouwd op WordPress met de krachtige WooCommerce plugin. Het biedt flexibiliteit, schaalbaarheid en uitgebreide functionaliteiten die perfect passen bij zowel kleine als grote ondernemingen.",
    },
    {
      question: "Waarom zou ik kiezen voor een WooCommerce webshop in plaats van een standaard template?",
      answer:
        "Met een maatwerk WooCommerce webshop krijg je volledige controle over design en functionaliteit. Hierdoor creëer je een unieke online winkel die perfect aansluit bij jouw merk en de wensen van jouw doelgroep.",
    },
    {
      question: "Hoe verloopt het ontwikkelproces?",
      answer:
        "Ons proces begint met een uitgebreide intake en analyse, gevolgd door conceptontwikkeling en design. Vervolgens bouwen we de webshop op maat, testen we deze grondig op verschillende apparaten en optimaliseren we voor snelheid en SEO. Tot slot lanceren we de webshop en bieden we continue ondersteuning.",
    },
    {
      question: "Kan ik zelf de inhoud beheren na de lancering?",
      answer:
        "Ja, omdat WooCommerce volledig geïntegreerd is met WordPress, kun je eenvoudig de content, producten en andere elementen beheren via een gebruiksvriendelijk CMS.",
    },
    {
      question: "Welke technische voordelen biedt WooCommerce?",
      answer:
        "WooCommerce is open source en zeer flexibel. Het biedt een groot aantal plugins en thema's, zodat je functionaliteiten kunt toevoegen zoals geavanceerde zoekopties, dynamische verzendmethoden en uitgebreide betalingsintegraties.",
    },
    {
      question: "Hoe zorgen jullie voor een optimale SEO en performance?",
      answer:
        "Wij bouwen onze WooCommerce webshops met schone code, snelle laadtijden en optimaliseren content en afbeeldingen. Dit zorgt voor een hogere ranking in zoekmachines en een verbeterde gebruikerservaring.",
    },
    {
      question: "Wat zijn de kosten voor het laten maken van een WooCommerce webshop?",
      answer:
        "De kosten zijn afhankelijk van de complexiteit en de specifieke wensen van jouw project. Neem contact met ons op voor een vrijblijvende offerte op maat.",
    },
    {
      question: "Bieden jullie ook ondersteuning en onderhoud na de lancering?",
      answer:
        "Ja, wij bieden diverse support- en onderhoudspakketten zodat jouw WooCommerce webshop altijd veilig, up-to-date en optimaal functionerend blijft.",
    },
    {
      question: "Welke extra functionaliteiten kunnen geïntegreerd worden?",
      answer:
        "Wij kunnen extra functionaliteiten integreren zoals integratie met betalingssystemen, CRM, marketingtools en logistieke software. Zo maken we jouw webshop helemaal af op jouw wensen.",
    },
    {
      question: "Hoe zorgen jullie voor een optimale gebruikerservaring?",
      answer:
        "We besteden veel aandacht aan responsive design, intuïtieve navigatie en snelle laadtijden. Door gebruikerstesten en feedback te integreren, zorgen we voor een webshop die zowel aantrekkelijk als functioneel is.",
    },
  ]

  return (
    <div className="bg-white text-black">
      <WooCommerceWebshopSEO />

      <HeroNieuw
        title={"WooCommerce Webshop Laten Maken"}
        description={
          "Bouw een krachtige en flexibele online winkel met een op maat gemaakte WooCommerce webshop, volledig afgestemd op jouw bedrijfsdoelen."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/17295206/file/original-77aa0eb0dd1a9affb8a7a39f37e7d7f5.mp4"}
      />

      {/* About Section */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-lime-500">WooCommerce Experts</span>
          </div>
          <div className="border-t border-gray-800 pt-16">
            <div className="max-w-4xl mx-auto lg:max-w-none">
              <div className="flex flex-wrap lg:items-center lg:flex-row-reverse -mx-4">
                {/* Video Column */}
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="visible">
                    <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
                      <source
                        src="https://cdn.dribbble.com/userupload/16959454/file/large-5fd4f9cf4a1786cb189c4e74e5dce8d8.mp4"
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
                      WooCommerce Webshop Laten Maken: Jouw Online Winkel op Maat
                    </h1>
                    <p className="text-lg text-gray-700 mb-6 dark:text-white">
                      Met een WooCommerce webshop creëer je een online winkel die volledig is afgestemd op de unieke
                      behoeften van jouw bedrijf. Wij combineren de kracht van WordPress met de flexibiliteit van
                      WooCommerce om een webshop te bouwen die zowel functioneel als visueel aantrekkelijk is.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 dark:text-white">
                      Of je nu net begint of je bestaande winkel wilt uitbreiden, een op maat gemaakte WooCommerce
                      webshop biedt de ideale basis voor groei en succes in e-commerce.
                    </p>
                    <ul className="text-black">
                      {[
                        "Volledig Op Maat Gemaakt Ontwerp",
                        "Integratie van Geavanceerde Functionaliteiten",
                        "Optimalisatie voor SEO en Performance",
                        "Responsive en Gebruiksvriendelijk Design",
                        "Ondersteuning en Onderhoud na Lancering",
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
                          <span className="ml-3 text-lg text-gray-700 font-black dark:text-white">{item}</span>
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

      {/* In-Depth "Waarom WooCommerce?" Section */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row -mx-4">
            {/* Text Column */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom WooCommerce?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                WooCommerce biedt een krachtige en flexibele e-commerce oplossing op basis van WordPress. Dit platform
                maakt het mogelijk om een webshop volledig op maat te bouwen, met talloze uitbreidingsmogelijkheden en
                een gebruiksvriendelijk CMS.
              </p>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">Met WooCommerce geniet je van:</p>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-white">
                <li>Volledige controle over design en functionaliteit</li>
                <li>Eenvoudige integratie met honderden plugins en thema’s</li>
                <li>Uitgebreide betalings- en verzendopties</li>
                <li>SEO-vriendelijke structuur en optimalisaties</li>
                <li>Schaalbaarheid voor groeiende bedrijven</li>
              </ul>
            </div>
            {/* Video Column */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="visible">
                <video className="w-full h-full object-contain rounded-md" autoPlay loop muted playsInline>
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

      {/* WordPress Integration Section */}
      <section className="py-12 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse -mx-4">
            {/* Text Column */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                De Kracht van WordPress & WooCommerce
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                Door WooCommerce te combineren met WordPress, profiteer je van het beste van twee werelden. WordPress is
                's werelds meest populaire content management systeem, dat bekend staat om zijn gebruiksvriendelijkheid
                en flexibiliteit. WooCommerce bouwt hierop voort met krachtige e-commerce functionaliteiten.
              </p>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                Deze combinatie biedt unieke voordelen voor jouw online winkel:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-white mb-6">
                <li>Naadloze integratie tussen content en producten</li>
                <li>Eenvoudig beheer van zowel blog als webshop</li>
                <li>Toegang tot duizenden plugins voor extra functionaliteiten</li>
                <li>Uitstekende SEO-mogelijkheden voor betere vindbaarheid</li>
                <li>Grote community voor ondersteuning en doorontwikkeling</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                Met WordPress als basis kun je jouw webshop eenvoudig uitbreiden met blogs, landingspagina's,
                nieuwsbrieven en meer. Dit maakt het een ideale oplossing voor bedrijven die niet alleen willen
                verkopen, maar ook een sterke online aanwezigheid willen opbouwen met waardevolle content.
              </p>
            </div>
            {/* Video Column */}
            <div className="w-full lg:w-1/2 px-4">
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
          </div>
        </div>
      </section>

      {/* Process / Services Section */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-gray-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">
                Ons WooCommerce Ontwikkelingsproces
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Stap voor stap naar jouw perfecte webshop
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Intake en Analyse",
                    description:
                      "We starten met een uitgebreid gesprek om jouw bedrijfsdoelstellingen, doelgroep en wensen in kaart te brengen.",
                  },
                  {
                    title: "Concept en Ontwerp",
                    description:
                      "Op basis van de analyse creëren we een uniek concept en visueel ontwerp, zodat jouw webshop zowel functioneel als aantrekkelijk is.",
                  },
                  {
                    title: "Ontwikkeling en Integratie",
                    description:
                      "Onze ontwikkelaars bouwen de webshop op maat, integreren de gewenste functionaliteiten en zorgen voor een soepele werking.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voordat de webshop live gaat, testen we op verschillende apparaten en browsers, en optimaliseren we de snelheid en SEO.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na een succesvolle lancering bieden we voortdurende ondersteuning en onderhoud om de prestaties van jouw webshop te garanderen.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "We verzamelen gebruikersfeedback en passen waar nodig verbeteringen toe om jouw webshop continu te optimaliseren.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-0">
                    <div className="flex flex-col h-full ">
                      <h5 className="text-2xl font-medium text-white mt-6 mb-3">{service.title}</h5>
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

      {/* Customization Options Section */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
              Maatwerk Mogelijkheden voor Jouw WooCommerce Webshop
            </h2>
            <p className="text-lg text-gray-700 dark:text-white max-w-3xl mx-auto">
              Een WooCommerce webshop biedt talloze mogelijkheden voor aanpassing en uitbreiding. Hieronder vind je
              enkele populaire maatwerk opties die jouw online winkel naar een hoger niveau kunnen tillen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Feature Cards */}
            {[
              {
                title: "Geavanceerde Productfilters",
                description:
                  "Maak het zoeken naar producten eenvoudiger met filters op maat, zoals prijs, kleur, maat, merk en meer.",
                icon: "https://cdn.dribbble.com/userupload/3266205/file/original-65cf49de6dc583c826a888011e6e75ff.mp4",
              },
              {
                title: "Aangepaste Checkout Proces",
                description:
                  "Optimaliseer het afrekenproces met one-page checkout, aangepaste velden of branchegerichte aanpassingen.",
                icon: "https://cdn.dribbble.com/userupload/3266205/file/original-65cf49de6dc583c826a888011e6e75ff.mp4",
              },
              {
                title: "Abonnement & Recurring Payments",
                description: "Bied abonnementsmodellen aan met automatische betalingen voor terugkerende inkomsten.",
                icon: "https://cdn.dribbble.com/userupload/3266205/file/original-65cf49de6dc583c826a888011e6e75ff.mp4",
              },
              {
                title: "B2B & Groothandel Functionaliteiten",
                description: "Speciale prijzen, bulkbestellingen en klantspecifieke catalogi voor zakelijke klanten.",
                icon: "https://cdn.dribbble.com/userupload/3266205/file/original-65cf49de6dc583c826a888011e6e75ff.mp4",
              },
              {
                title: "Multi-vendor Marketplace",
                description:
                  "Transformeer je webshop in een marketplace waar meerdere verkopers hun producten kunnen aanbieden.",
                icon: "https://cdn.dribbble.com/userupload/3266205/file/original-65cf49de6dc583c826a888011e6e75ff.mp4",
              },
              {
                title: "ERP & Voorraad Integratie",
                description:
                  "Koppel je webshop aan je ERP-systeem voor geautomatiseerd voorraadbeheer en orderverwerking.",
                icon: "https://cdn.dribbble.com/userupload/3266205/file/original-65cf49de6dc583c826a888011e6e75ff.mp4",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/offerte-aanvragen"
              className="inline-flex py-4 px-8 items-center justify-center text-sm font-bold text-white hover:text-white bg-green-700 hover:bg-green-900 rounded-full transition duration-200"
            >
              Ontdek alle maatwerk mogelijkheden
            </Link>
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
              Hier vind je uitgebreide antwoorden op de meest gestelde vragen over het laten maken van een WooCommerce
              webshop.
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
                        className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96" : "max-h-0"}`}
                      >
                        <p className="text-white dark:text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 5 ? "max-h-96" : "max-h-0"}`}
                      >
                        <p className="text-white dark:text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 5 ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.69995 12H18.3"
                            stroke="#BEF264"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      {/* Testimonials Section */}
      <section className="py-12 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-lg text-gray-700 dark:text-white max-w-3xl mx-auto">
              Ontdek hoe onze WooCommerce webshops het verschil maken voor ondernemers en bedrijven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "De WooCommerce webshop die voor ons is ontwikkeld heeft onze online verkoop met 150% verhoogd. De gebruiksvriendelijkheid en het professionele design maken echt het verschil.",
                author: "Martijn de Vries",
                company: "SportGear Nederland",
              },
              {
                quote:
                  "Wat me het meest verraste was hoe eenvoudig ik zelf de webshop kan beheren. Producten toevoegen, prijzen aanpassen en bestellingen verwerken gaat allemaal zeer intuïtief.",
                author: "Laura Jansen",
                company: "Boutique Élégance",
              },
              {
                quote:
                  "De integratie met ons voorraadsysteem heeft ons enorm veel tijd bespaard. Alles wordt automatisch gesynchroniseerd, waardoor we nooit meer 'niet op voorraad' producten verkopen.",
                author: "Bas Vermeulen",
                company: "TechSupplies B.V.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
                <svg className="h-8 w-8 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full mr-3"></div>
                  <div>
                    <p className="font-bold dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Start Vandaag Nog Met Jouw WooCommerce Succes</h2>
          <p className="text-lg mb-8 text-white max-w-2xl mx-auto">
            Een professionele WooCommerce webshop is meer dan alleen een online winkel - het is een krachtig
            verkoopkanaal dat 24/7 voor je werkt. Laat ons je helpen om jouw e-commerce visie werkelijkheid te maken met
            een webshop die converteert, schaalt en indruk maakt.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/offerte-aanvragen"
              className="bg-white text-green-900 font-semibold py-4 px-6 rounded-full text-lg hover:bg-gray-100 transition duration-300"
            >
              Vraag een vrijblijvende offerte aan
            </a>
            <a
              href="/cases"
              className="border border-white text-white font-semibold py-4 px-6 rounded-full text-lg hover:bg-white hover:text-green-900 transition duration-300"
            >
              Bekijk onze WooCommerce projecten
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

