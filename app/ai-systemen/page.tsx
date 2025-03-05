"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import { PricingTable } from "@/components/pricing-table"
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from 'next-seo';

export default function AIGeoptimaliseerdeSystemenPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat zijn AI-geoptimaliseerde systemen?",
      answer:
        "AI-geoptimaliseerde systemen maken gebruik van kunstmatige intelligentie en machine learning om bedrijfsprocessen te automatiseren, data realtime te analyseren en inzichten te genereren die leiden tot efficiëntere besluitvorming.",
    },
    {
      question: "Welke voordelen bieden deze systemen?",
      answer:
        "Ze zorgen voor kostenbesparingen, efficiëntere workflows, verbeterde klantrelaties en een verhoogde omzet door repetitieve taken te automatiseren en data-gedreven beslissingen mogelijk te maken.",
    },
    {
      question: "Hoe lang duurt de implementatie van een AI-systeem?",
      answer:
        "De implementatietijd varieert per project, maar gemiddeld duurt het tussen de 8 en 16 weken, afhankelijk van de complexiteit en de benodigde integraties.",
    },
    {
      question: "Kan ik het systeem volledig op maat laten maken?",
      answer:
        "Ja, onze AI-oplossingen worden volledig afgestemd op uw bedrijfsprocessen en wensen, zodat u een systeem krijgt dat perfect aansluit bij uw unieke behoeften.",
    },
    {
      question: "Bieden jullie ondersteuning na de implementatie?",
      answer:
        "Zeker, wij bieden uitgebreide support- en onderhoudpakketten, inclusief trainingen en regelmatige updates, om te garanderen dat uw systeem altijd optimaal functioneert.",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* SEO & Schema */}
      <NextSeo
        title="AI Geoptimaliseerde Systemen | Innovatieve AI-oplossingen voor uw Bedrijf"
        description="Ontdek hoe AI-geoptimaliseerde systemen uw bedrijfsprocessen transformeren. Onze op maat gemaakte AI-oplossingen analyseren data, optimaliseren processen en verhogen de efficiëntie."
        canonical="https://www.multichoiceagency.nl/ai-geoptimaliseerde-systemen"
        openGraph={{
          type: 'website',
          url: 'https://www.multichoiceagency.nl/ai-geoptimaliseerde-systemen',
          title: 'AI Geoptimaliseerde Systemen | Innovatieve AI-oplossingen voor uw Bedrijf',
          description:
            'Ontdek hoe AI-geoptimaliseerde systemen uw bedrijfsprocessen transformeren. Onze op maat gemaakte AI-oplossingen analyseren data, optimaliseren processen en verhogen de efficiëntie.',
          images: [
            {
              url: '/partners/ai-geoptimaliseerde-systemen.png',
              width: 1200,
              height: 630,
              alt: 'AI Geoptimaliseerde Systemen',
            },
          ],
        }}
        twitter={{
          handle: '@jouwtwitterhandle',
          site: '@jouwtwitterhandle',
          cardType: 'summary_large_image',
        }}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'Home', item: 'https://www.multichoiceagency.nl' },
          { position: 2, name: 'AI Geoptimaliseerde Systemen', item: 'https://www.multichoiceagency.nl/ai-geoptimaliseerde-systemen' },
        ]}
      />

      <FAQPageJsonLd
        mainEntity={faqItems.map(item => ({
          questionName: item.question,
          acceptedAnswerText: item.answer,
        }))}
      />

      {/* Hero Sectie met Video */}
      <HeroNieuw
        title={"AI Geoptimaliseerde Systemen"}
        description={
          "Transformeer uw bedrijfsprocessen met innovatieve AI-oplossingen. Onze systemen analyseren data in realtime en optimaliseren uw processen voor maximale efficiëntie en groei."
        }
        buttonText={"Vraag een offerte aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/12345678/file/original-ai-video.mp4"}
      />

      {/* Extra Informatie Sectie met Video */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom kiezen voor AI-geoptimaliseerde systemen?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                In een steeds competitievere markt is het essentieel om data-gedreven beslissingen te nemen en processen te optimaliseren. AI-geoptimaliseerde systemen bieden u de mogelijkheid om enorme hoeveelheden data te verwerken en realtime inzichten te verkrijgen. Hierdoor kunt u sneller reageren op marktveranderingen, kosten verlagen en de klanttevredenheid verhogen.
              </p>
              <Link
                href="/offerte-aanvragen"
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-black text-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
              >
                Start uw project vandaag nog
              </Link>
            </div>
            {/* Video Kolom */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <video
                className="w-full h-full object-contain rounded-md"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://cdn.dribbble.com/userupload/98765432/file/original-ai-video2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Sectie: Uitgebreide Uitleg (700+ woorden) */}
      <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
            In-Depth: De Kracht van AI-geoptimaliseerde Systemen
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              In de hedendaagse competitieve markt is efficiëntie van cruciaal belang. AI-geoptimaliseerde systemen bieden bedrijven de mogelijkheid om enorme hoeveelheden data te analyseren en processen te optimaliseren. Door gebruik te maken van geavanceerde algoritmes en machine learning, kunnen deze systemen realtime inzichten bieden die voorheen ondenkbaar waren. Dit stelt organisaties in staat om proactief te reageren op veranderingen in de markt en sneller beslissingen te nemen.
            </p>
            <p>
              Deze systemen centraliseren alle klant- en bedrijfsdata, waardoor u een compleet beeld krijgt van uw bedrijfsprocessen. Dit resulteert in efficiëntere workflows en verhoogt de productiviteit. Automatisering van repetitieve taken vermindert de kans op menselijke fouten en bespaart kostbare tijd, waardoor uw medewerkers zich kunnen richten op strategisch belangrijke taken.
            </p>
            <p>
              Een van de grootste voordelen van AI-geoptimaliseerde systemen is de mogelijkheid om data in realtime te verwerken. Dit betekent dat u niet langer hoeft te wachten op rapportages, maar direct kunt inspelen op de inzichten die uw systeem genereert. Of het nu gaat om het optimaliseren van de supply chain, het voorspellen van klantgedrag of het automatiseren van marketingcampagnes, AI biedt u de tools om uw bedrijf naar een hoger niveau te tillen.
            </p>
            <p>
              Daarnaast speelt veiligheid een cruciale rol in de implementatie van AI-systemen. Gevoelige data wordt met de hoogste beveiligingsnormen verwerkt, zodat u zeker weet dat uw bedrijfsinformatie veilig is. Encryptie, strikte toegangscontroles en regelmatige updates zorgen ervoor dat uw systeem voldoet aan de laatste regelgeving, zoals de AVG.
            </p>
            <p>
              De toepassingen van AI zijn breed en divers. In de retail kan AI worden ingezet voor gepersonaliseerde marketing, waardoor klanten op maat gemaakte aanbiedingen ontvangen. In de productie helpt AI bij het monitoren en optimaliseren van processen, waardoor de efficiëntie wordt verhoogd en verspilling wordt verminderd. Ook in de gezondheidszorg en financiële sector worden AI-systemen gebruikt om complexe datasets te analyseren en risico’s te beheersen.
            </p>
            <p>
              Innovatie is de sleutel tot succes in de digitale wereld. Met de voortdurende vooruitgang in machine learning, deep learning en natuurlijke taalverwerking worden AI-systemen steeds slimmer en effectiever. Deze technologieën maken het mogelijk om niet alleen reactief, maar ook proactief te werken. Zo kunnen bedrijven trends voorspellen en hun strategieën aanpassen voordat de concurrentie dat doet.
            </p>
            <p>
              Een ander belangrijk aspect van AI-geoptimaliseerde systemen is hun schaalbaarheid. Traditionele systemen kunnen vaak niet meegroeien met een bedrijf, maar AI-oplossingen zijn ontworpen om flexibel en aanpasbaar te zijn. Dit betekent dat uw systeem kan evolueren naarmate uw organisatie groeit, zonder dat u ingrijpende technische aanpassingen hoeft door te voeren.
            </p>
            <p>
              De implementatie van een AI-systeem is echter geen eenmalige investering. Het vergt een gedegen strategie en samenwerking tussen verschillende disciplines, waaronder IT, datawetenschap, marketing en business analytics. Deze samenwerking zorgt ervoor dat het systeem niet alleen technisch robuust is, maar ook perfect aansluit bij uw zakelijke doelstellingen.
            </p>
            <p>
              Daarnaast kunnen AI-geoptimaliseerde systemen bijdragen aan kostenbesparingen. Door repetitieve taken te automatiseren en de efficiëntie van uw processen te verbeteren, verlaagt u de operationele kosten. Dit resulteert in een hoger rendement op uw investering en geeft u de ruimte om te investeren in verdere groei en innovatie.
            </p>
            <p>
              Samengevat, AI-geoptimaliseerde systemen bieden u de mogelijkheid om uw bedrijfsprocessen te transformeren en te optimaliseren. Ze bieden realtime inzichten, automatiseren complexe taken en verbeteren de algehele efficiëntie. Met een op maat gemaakt systeem dat zich aanpast aan uw unieke behoeften, kunt u niet alleen kosten besparen, maar ook de concurrentie voorblijven. Of u nu uw marketing, productie of klantenservice wilt verbeteren, AI biedt de tools en inzichten om uw organisatie te transformeren.
            </p>
            <p>
              Bent u klaar om de kracht van AI te benutten en uw bedrijfsvoering naar een hoger niveau te tillen? Investeer in een AI-geoptimaliseerd systeem en ontdek hoe u met data en automatisering de toekomst van uw bedrijf vormgeeft. Neem vandaag nog contact met ons op voor een vrijblijvende offerte en ervaar zelf de voordelen van innovatieve AI-oplossingen.
            </p>
          </div>
        </div>
      </section>

      {/* Process / Services Sectie */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-gray-900 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium text-white">
                Ons AI Development Proces
              </span>
            </div>
            <div className="border-t border-gray-700 pt-14">
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">
                Stap voor stap naar uw AI-geoptimaliseerde systeem
              </h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Analyse en Strategie",
                    description:
                      "We beginnen met een grondige analyse van uw bedrijfsprocessen en data om de beste AI-strategie te bepalen die aansluit bij uw doelstellingen.",
                  },
                  {
                    title: "Concept en Ontwerp",
                    description:
                      "Op basis van onze analyse ontwikkelen we een concept en ontwerp dat de basis vormt voor een efficiënt en schaalbaar AI-systeem.",
                  },
                  {
                    title: "Ontwikkeling en Integratie",
                    description:
                      "Onze experts bouwen het systeem op maat en integreren het naadloos met uw bestaande IT-infrastructuur, zodat u direct kunt profiteren van geavanceerde data-analyse en automatisering.",
                  },
                  {
                    title: "Testen en Optimalisatie",
                    description:
                      "Voor de lancering doorloopt het systeem een intensieve testfase, waarin we prestaties optimaliseren en eventuele bugs verhelpen.",
                  },
                  {
                    title: "Lancering en Ondersteuning",
                    description:
                      "Na een succesvolle lancering bieden we continue ondersteuning en onderhoud, zodat uw AI-systeem altijd up-to-date blijft en optimaal functioneert.",
                  },
                  {
                    title: "Feedback en Iteratie",
                    description:
                      "We monitoren de prestaties en passen op basis van gebruikersfeedback iteratieve verbeteringen toe, zodat het systeem blijft evolueren.",
                  },
                ].map((service, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-0">
                    <div className="flex flex-col h-full">
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

      {/* FAQ Sectie */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-white">
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over onze AI Development diensten.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 3).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96" : "max-h-0"}`}>
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
                {faqItems.slice(3).map((item, index) => (
                  <button
                    key={index + 3}
                    onClick={() => setOpenAccordion(openAccordion === index + 3 ? null : index + 3)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-white shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 3 ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-gray-700 mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 3 ? (
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
                Voor meer informatie over onze frontend development diensten kunt u onze{" "}
                <Link href="/contact" className="inline-block text-black font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-black font-medium">010 322 04 10</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw frontend te optimaliseren?</h2>
          <p className="text-xl mb-12">
            Laat uw online aanwezigheid stralen met een moderne en responsive website, gebouwd met professionele frontend development.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-lime-500 rounded-full transition duration-200"
          >
            Start uw project
          </Link>
        </div>
      </section>
    </div>
  )
}
