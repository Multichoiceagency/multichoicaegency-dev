"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"

export default function UXUIDesign() {
  const [showContent, setShowContent] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Wat is het verschil tussen UX en UI design?",
      answer: "UX (User Experience) design richt zich op de algehele ervaring van de gebruiker, inclusief hoe gemakkelijk en plezierig een product is om te gebruiken. Het omvat aspecten zoals gebruikersonderzoek, informatiearchitectuur, en het ontwerpen van de gebruikersreis. UI (User Interface) design focust op het visuele aspect en de interactie-elementen van een product. Dit omvat het ontwerpen van knoppen, formulieren, lay-outs, en andere visuele elementen die gebruikers direct zien en mee interacteren. Samen zorgen UX en UI design voor een product dat zowel functioneel als aantrekkelijk is.",
    },
    {
      question: "Hoe lang duurt een UX/UI design project gemiddeld?",
      answer: "De duur van een UX/UI design project varieert afhankelijk van de complexiteit en omvang. Gemiddeld duurt een project 4-12 weken, inclusief onderzoek, ontwerp, prototyping en testen. Kleinere projecten kunnen in 2-4 weken worden afgerond, terwijl complexe, grootschalige projecten soms 3-6 maanden kunnen duren. We stellen een gedetailleerde tijdlijn op bij de start van elk project en houden u gedurende het hele proces op de hoogte van de voortgang.",
    },
    {
      question: "Hoe zorgen jullie ervoor dat het ontwerp aansluit bij onze merkidentiteit?",
      answer: "We beginnen elk project met een grondige analyse van uw merk, doelgroep en bedrijfsdoelen. Dit omvat het bestuderen van uw bestaande merkrichtlijnen, het analyseren van uw concurrenten, en het houden van gesprekken met key stakeholders. Op basis hiervan creëren we een design systeem dat uw merkidentiteit weerspiegelt en consistent is in alle aspecten van het ontwerp. We zorgen ervoor dat kleuren, typografie, iconografie en andere visuele elementen perfect aansluiten bij uw merk, terwijl we tegelijkertijd de gebruiksvriendelijkheid en functionaliteit optimaliseren.",
    },
    {
      question: "Maken jullie gebruik van gebruikerstesten in het ontwerpproces?",
      answer: "Absoluut! Gebruikerstesten zijn een essentieel onderdeel van ons ontwerpproces. We voeren zowel kwalitatieve als kwantitatieve tests uit om inzichten te krijgen in gebruikersgedrag en voorkeuren. Dit kan variëren van vroege concepttests en card sorting voor informatiearchitectuur, tot usability tests met interactieve prototypes. We maken gebruik van verschillende methoden, waaronder A/B-tests, heatmaps, en gebruikersobservaties. De inzichten die we hieruit verkrijgen, helpen ons het ontwerp te verfijnen en te optimaliseren, wat resulteert in een product dat echt aansluit bij de behoeften en verwachtingen van de eindgebruikers.",
    },
    {
      question: "Kunnen jullie ook helpen bij het implementeren van het ontwerp?",
      answer: "Ja, we bieden ondersteuning bij de implementatie van het ontwerp. Onze diensten omvatten niet alleen het creëren van het UX/UI design, maar ook het begeleiden van het ontwikkelingsproces. We werken nauw samen met uw ontwikkelaars of ons eigen ontwikkelteam om ervoor te zorgen dat het uiteindelijke product precies overeenkomt met het ontwerp en de beoogde gebruikerservaring. We leveren gedetailleerde design specificaties, stijlgidsen en, indien nodig, kunnen we ook direct bijdragen aan de front-end ontwikkeling. Bovendien bieden we ondersteuning na de lancering om eventuele aanpassingen of optimalisaties door te voeren op basis van real-world gebruikersdata.",
    },
    {
      question: "Hoe zorgen jullie voor toegankelijkheid in jullie ontwerpen?",
      answer: "Toegankelijkheid is een kernprincipe in ons ontwerpproces. We volgen de Web Content Accessibility Guidelines (WCAG) en ontwerpen inclusief, zodat onze producten bruikbaar zijn voor mensen met verschillende vaardigheden en beperkingen. Dit omvat het gebruik van voldoende kleurcontrast, het toevoegen van alt-tekst voor afbeeldingen, het zorgen voor toetsenbordnavigatie, en het ontwerpen van responsieve layouts die goed werken met schermlezers. We testen onze ontwerpen regelmatig met toegankelijkheidstools en, indien mogelijk, met gebruikers met verschillende beperkingen om ervoor te zorgen dat het product voor iedereen bruikbaar is.",
    },
    {
      question: "Wat is jullie aanpak voor responsive design?",
      answer: "We hanteren een 'mobile-first' benadering en ontwerpen voor verschillende schermformaten. Dit betekent dat we beginnen met het ontwerpen voor mobiele apparaten en vervolgens het ontwerp uitbreiden voor tablets en desktops. Onze ontwerpen zijn flexibel en passen zich aan verschillende apparaten aan, waarbij we ervoor zorgen dat de kernfunctionaliteit en gebruikerservaring consistent blijven. We maken gebruik van flexibele grids, schaalbaren afbeeldingen en CSS media queries om ervoor te zorgen dat het ontwerp er goed uitziet en goed functioneert op alle apparaten. Daarnaast houden we rekening met verschillende interactiemethoden, zoals touch, muis en toetsenbord, om een optimale gebruikerservaring te garanderen ongeacht het gebruikte apparaat.",
    },
    {
      question: "Hoe meten jullie het succes van een UX/UI design project?",
      answer: "We definiëren samen met de klant KPI's (Key Performance Indicators) aan het begin van het project. Deze kunnen variëren van gebruikerstevredenheid en taakvoltooing tot conversiepercentages en engagement metrics. Na de lancering monitoren we deze KPI's om het succes te meten en verdere optimalisaties voor te stellen. We maken gebruik van verschillende tools en methoden, waaronder analytics platforms, heatmaps, gebruikersfeedback en A/B-tests. Daarnaast voeren we regelmatig gebruikerstevredenheidsonderzoeken uit om kwalitatieve feedback te verzamelen. Op basis van deze data stellen we een rapport op met inzichten en aanbevelingen voor verdere verbeteringen, zodat uw product blijft evolueren en optimaal blijft presteren.",
    },
    {
      question: "Kunnen jullie ons bestaande ontwerp verbeteren?",
      answer: "Zeker! We bieden UX/UI audits aan waarbij we uw bestaande ontwerp analyseren en concrete aanbevelingen doen voor verbeteringen. Dit proces begint met een grondige analyse van uw huidige product, waarbij we kijken naar aspecten zoals gebruiksvriendelijkheid, visueel ontwerp, toegankelijkheid en prestaties. We combineren deze analyse met gebruikersonderzoek en best practices in UX/UI design om een gedetailleerd rapport op te stellen met onze bevindingen en aanbevelingen. Vervolgens kunnen we deze verbeteringen implementeren of, indien nodig, uw product volledig herontwerpen. Onze aanpak is altijd gericht op het behouden van wat goed werkt, terwijl we tegelijkertijd significante verbeteringen doorvoeren om de algehele gebruikerservaring te optimaliseren.",
    },
    {
      question: "Hoe blijven jullie op de hoogte van de laatste UX/UI trends en best practices?",
      answer: "Ons team volgt voortdurend de nieuwste ontwikkelingen in UX/UI design door deel te nemen aan conferenties, workshops en online cursussen. We zijn geabonneerd op toonaangevende industrie publicaties en nemen deel aan professionele netwerken waar we kennis uitwisselen met collega's uit de industrie. Daarnaast experimenteren we regelmatig met nieuwe tools en technieken in interne projecten om innovatieve oplossingen te kunnen bieden aan onze klanten. We moedigen ons team aan om zich continu te ontwikkelen en hun kennis te delen binnen ons bedrijf. Dit zorgt ervoor dat we altijd up-to-date zijn met de nieuwste trends en best practices, en dat we deze kennis effectief kunnen toepassen in onze klantenprojecten.",
    },
  ]

  return (
    <div>
      <HeroNieuw
        title={"UX/UI Design Diensten"}
        description={
          "Transformeer uw digitale aanwezigheid met onze expert UX/UI design diensten. Ons team combineert creativiteit met diepgaande gebruikersinzichten om interfaces te ontwerpen die niet alleen visueel aantrekkelijk zijn, maar ook intuïtief, effectief en conversiegericht. Ontdek hoe wij uw online ervaring kunnen optimaliseren en uw bedrijfsdoelstellingen kunnen ondersteunen."
        }
        buttonText={"Gratis UX/UI Consult Aanvragen"}
        buttonLink={"/ux-ui-consult-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/7732139/file/original-92c6a4c8c8d0e0c99e2a5c3d4c656d2a.mp4"}
      />

      {/* UX/UI Design Section */}
      <section className="py-12 lg:py-24 relative">
        <div className="container mx-auto px-4 ">
          <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-24">
            <div className="flex mb-6 items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
              </svg>
              <span className="ml-2 text-sm font-medium">Transformeer uw digitale aanwezigheid met professioneel UX/UI design</span>
            </div>
            <h1 className="font-heading text-6xl xs:text-2xl sm:text-xl xl:text-6xl tracking-tight mb-8">Wat is UX/UI Design en waarom is het cruciaal voor uw succes?</h1>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-6">
              UX (User Experience) Design en UI (User Interface) Design zijn twee onlosmakelijk verbonden disciplines die samen de fundering vormen van effectieve digitale producten. UX Design richt zich op de algehele ervaring van de gebruiker, waarbij de nadruk ligt op gebruikersgemak, toegankelijkheid en het creëren van een logische flow door uw digitale product.
            </p>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-6">
              UI Design, daarentegen, focust op het visuele aspect en de interactie-elementen van uw product. Het omvat de esthetische elementen zoals kleurenschema&apos;s, typografie, knoppen, en andere visuele componenten die gebruikers direct zien en mee interacteren. Samen zorgen UX en UI Design voor een product dat niet alleen functioneel en gebruiksvriendelijk is, maar ook visueel aantrekkelijk en in lijn met uw merkidentiteit.
            </p>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
              Bij Multichoiceagency begrijpen we dat goed UX/UI Design cruciaal is voor het succes van uw digitale producten. Het gaat verder dan alleen een mooi uiterlijk; het is een strategische investering die directe impact heeft op uw bedrijfsresultaten. Effectief UX/UI Design:
            </p>
            <ul className="list-disc pl-5 mb-10 text-gray-700">
              <li>Verhoogt de gebruikerstevredenheid en loyaliteit</li>
              <li>Verbetert conversiepercentages en ROI</li>
              <li>Versterkt uw merkidentiteit en onderscheidt u van concurrenten</li>
              <li>Vermindert ondersteuningskosten door intuïtieve interfaces</li>
              <li>Bevordert gebruikersretentie en herhaald gebruik van uw product</li>
            </ul>
            <div className="flex flex-col sm:flex-row">
              <Link
                href="#"
                className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
              >
                Gratis UX/UI Consult Aanvragen
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 h-full w-2/5">
          <video className="w-1/8 h-full object-cover rounded-md" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/16416668/file/original-f8233de0bb4513591711d49c80793044.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-1/2">
          <video className="w-full h-64 object-cover" autoPlay loop muted playsInline>
            <source
              src="https://cdn.dribbble.com/userupload/17826232/file/large-caca22f6996733841e15a1eb583ca96b.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Expanded "Why is professional UX/UI design essential?" section */}
      <section className="py-12 lg:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div className="lg:sticky lg:top-8 bg-black/10 px-10 py-10 rounded-xl">
                <h2 className="font-heading text-7xl md:text-7xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.700),theme(colors.gray.500),theme(colors.green.400),theme(colors.black),theme(colors.green.300),theme(colors.green.700))] bg-[length:200%_auto] animate-gradient">
                  Waarom is professioneel UX/UI design essentieel?
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <p className="text-xl font-medium mb-6">
                  In de huidige digitale wereld is professioneel UX/UI design niet langer een luxe, maar een noodzaak. Het vormt de basis voor het succes van elk digitaal product, of het nu gaat om een website, mobiele app, of complexe softwareoplossing.
                </p>
                <p className="text-lg mb-6">
                  Goed ontworpen gebruikerservaringen en interfaces zorgen voor een naadloze interactie tussen uw product en uw doelgroep. Dit resulteert niet alleen in tevreden gebruikers, maar vertaalt zich ook direct naar betere bedrijfsresultaten.
                </p>
                <h3 className="text-2xl font-bold mb-4">Hier zijn enkele redenen waarom professioneel UX/UI design essentieel is:</h3>
                <ul className="list-none pl-0 mb-10">
                  <li className="flex items-center mb-4 hover:text-green-700 transition-colors">
                    <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-semibold">Verbeterde gebruikerstevredenheid en loyaliteit</span>
                  </li>
                  <li className="flex items-center mb-4 hover:text-green-700 transition-colors">
                    <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-semibold">Hogere conversiepercentages en ROI</span>
                  </li>
                  <li className="flex items-center mb-4 hover:text-green-700 transition-colors">
                    <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-semibold">Versterking van uw merkidentiteit</span>
                  </li>
                  <li className="flex items-center mb-4 hover:text-green-700 transition-colors">
                    <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-semibold">Verbeterde toegankelijkheid en inclusiviteit</span>
                  </li>
                  <li className="flex items-center mb-4 hover:text-green-700 transition-colors">
                    <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-semibold">Efficiëntere ontwikkeling en onderhoud</span>
                  </li>
                  <li className="flex items-center mb-4 hover:text-green-700 transition-colors">
                    <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-semibold">Concurrentievoordeel in de markt</span>
                  </li>
                </ul>
                <p className="text-lg mb-6">
                  Door te investeren in professioneel UX/UI design, investeert u niet alleen in de esthetiek van uw product, maar ook in de tevredenheid van uw gebruikers, de efficiëntie van uw bedrijfsprocessen en uiteindelijk in de groei van uw onderneming.
                </p>
                <Link
                  href="#"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-green-700 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                >
                  Start uw UX/UI project vandaag!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New section: UX/UI Design Process */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl mb-12 text-center">Ons UX/UI Design Proces</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Bij Multichoiceagency volgen we een gestructureerd en iteratief proces om optimale resultaten te bereiken. Ons UX/UI design proces is ontworpen om uw unieke behoeften te begrijpen en te vertalen naar effectieve digitale oplossingen.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "1. Onderzoek & Analyse",
                description: "We beginnen met een grondige analyse van uw doelgroep, bedrijfsdoelen en concurrentielandschap. Dit vormt de basis voor datagedreven ontwerpbeslissingen.",
                icon: "🔍"
              },
              {
                title: "2. Strategie & Conceptontwikkeling",
                description: "Op basis van onze bevindingen ontwikkelen we een UX/UI strategie en concepten die aansluiten bij uw merkidentiteit en gebruikersbehoeften.",
                icon: "💡"
              },
              {
                title: "3. Design & Prototyping",
                description: "We creëren visueel aantrekkelijke en functionele designs, gevolgd door interactieve prototypes om de gebruikerservaring te testen en te verfijnen.",
                icon: "🎨"
              },
              {
                title: "4. Testen & Optimalisatie",
                description: "Door middel van gebruikerstests en data-analyse optimaliseren we het ontwerp continu, om ervoor te zorgen dat het voldoet aan zowel gebruikers- als bedrijfsdoelstellingen.",
                icon: "🚀"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
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
              <h2 className="font-heading text-4xl sm:text-6xl text-white mb-24">UX/UI Design door experts</h2>
              <div className="flex flex-wrap -mx-4">
                {[
                  {
                    title: "Gebruikersonderzoek",
                    description:
                      "Diepgaande analyse van uw doelgroep en hun behoeften voor een op maat gemaakt ontwerp.",
                  },
                  {
                    title: "Interactief prototyping",
                    description:
                      "Creatie van interactieve prototypes om de gebruikerservaring te testen en te verfijnen.",
                  },
                  {
                    title: "Visueel ontwerp",
                    description: "Aantrekkelijke en consistente visuele elementen die uw merk versterken.",
                  },
                  {
                    title: "Gebruikerstesten",
                    description:
                      "Rigoureuze tests om de effectiviteit en gebruiksvriendelijkheid van het ontwerp te garanderen.",
                  },
                  {
                    title: "Responsive design",
                    description: "Ontwerpen die zich naadloos aanpassen aan verschillende schermformaten en apparaten.",
                  },
                  {
                    title: "Toegankelijkheid",
                    description:
                      "Inclusieve ontwerpen die voldoen aan WCAG-richtlijnen voor maximale toegankelijkheid.",
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
            <span className="inline-block ml-2 text-sm font-medium text-teal-900">UX/UI Design specialisten</span>
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
                      Bij het ontwikkelen van UX/UI design staat de gebruiker centraal. Onze aanpak is gericht op het
                      creëren van digitale ervaringen die niet alleen aan uw verwachtingen voldoen, maar deze
                      overtreffen. Hier is wat je van ons kunt verwachten:
                    </p>
                    <ul>
                      {[
                        "Gebruikersgerichte ontwerpen",
                        "Interactieve prototypes",
                        "Visueel aantrekkelijke interfaces",
                        "Toegankelijke designs",
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

              {/* Nieuwe Sectie: Waarom kiezen voor Multichoiceagency? */}
              <div className="mt-16">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 text-teal-900">
                  Waarom kiezen voor Multichoiceagency voor UX/UI Design?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Met zoveel UX/UI designbureaus om uit te kiezen, waarom zou je kiezen voor Multichoiceagency? Het
                  antwoord is simpel: wij leveren meer dan alleen mooie designs. We leveren resultaten die uw bedrijf
                  vooruit helpen.
                </p>
                <ul className="space-y-4">
                  <li>
                    <h3 className="text-xl font-bold">1. Ervaring en expertise</h3>
                    <p className="text-lg text-gray-700">
                      Ons team bestaat uit ervaren UX/UI professionals die gespecialiseerd zijn in het creëren van
                      gebruiksvriendelijke en visueel aantrekkelijke interfaces.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold">2. Data-gedreven aanpak</h3>
                    <p className="text-lg text-gray-700">
                      We baseren onze ontwerpbeslissingen op grondige gebruikersonderzoeken en data-analyse om de beste
                      resultaten te garanderen.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold">3. Focus op conversie</h3>
                    <p className="text-lg text-gray-700">
                      Onze designs zijn niet alleen mooi, maar ook gericht op het verhogen van conversies en het
                      verbeteren van key performance indicators (KPI&apos;s).
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold">4. Holistische benadering</h3>
                    <p className="text-lg text-gray-700">
                      We kijken verder dan alleen het visuele aspect. Onze UX/UI designs passen naadloos in uw bredere
                      digitale strategie en bedrijfsdoelstellingen.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">
              Veelgestelde vragen over UX/UI Design
            </h2>
            <p className="text-gray-700">
              Hier vindt u antwoorden op de meest gestelde vragen over onze UX/UI design diensten.
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
                    d="M0 8C0 3.58172 3.58172 0 8 0"
                  />
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
                <span>Voor meer informatie over onze UX/UI design diensten kunt u onze </span>
                <Link href="#" className="inline-block text-black font-medium underline">
                  Contactpagina
                </Link>
                <span> bezoeken of bel ons designteam op </span>
                <span className="text-black font-medium">071 203 24 88</span>
                <span>
                  . Ons toegewijde team staat klaar om u te helpen bij het realiseren van uw perfecte
                  gebruikerservaring.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw digitale ervaring naar een hoger niveau te tillen?</h2>
          <p className="text-xl mb-12">
            Verbeter gebruikerstevredenheid, verhoog conversies en versterk uw merk met professioneel UX/UI design van
            Multichoiceagency.
          </p>
          <Link
            href="#"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-lime-500 rounded-full transition duration-200"
          >
            Start uw UX/UI project
          </Link>
        </div>
      </section>
    </div>
  )
}
