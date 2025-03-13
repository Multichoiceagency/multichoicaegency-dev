"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faServer,
  faChartLine,
  faBriefcase,
  faUserPlus,
  faChartPie,
  faRobot,
  faGlobe,
  faShoppingCart,
  faCloud,
  faFileAlt,
  faDatabase,
  faCalendarAlt,
  faCheck,
  faLaptopCode,
  faShieldAlt,
  faRocket,
  faCogs,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { NextSeo } from "next-seo"
import { decodeHtml } from "@/utils/decodeHtml"
import Oplossingen from "@/components/oplossingen"
import Portfolio from "@/components/cases-display"
import { faAngular, faAws, faJs, faLaravel, faNodeJs, faPhp, faPython, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons"

// Development diensten
const developmentServices = [
  {
    icon: <FontAwesomeIcon icon={faCode} className="h-6 w-6" />,
    title: "Frontend Development",
    description: "Bouw snelle en aantrekkelijke interfaces met moderne technologieën.",
    href: "/frontend-development",
  },
  {
    icon: <FontAwesomeIcon icon={faServer} className="h-6 w-6" />,
    title: "Backend Development",
    description: "Ontwikkel robuuste en schaalbare backend-oplossingen voor elke toepassing.",
    href: "/backend-development",
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} className="h-6 w-6" />,
    title: "Dashboard Ontwikkeling",
    description: "Creëer maatwerk dashboards met data-inzichten en interactieve functionaliteiten.",
    href: "/dashboard-ontwikkeling",
  },
  {
    icon: <FontAwesomeIcon icon={faBriefcase} className="h-6 w-6" />,
    title: "CRM Systemen",
    description: "Beheer klantrelaties en verkoopprocessen met efficiënte CRM-oplossingen.",
    href: "/crm-systemen",
  },
  {
    icon: <FontAwesomeIcon icon={faUserPlus} className="h-6 w-6" />,
    title: "Lead Management Systemen",
    description: "Automatiseer het beheer van leads en optimaliseer je verkoopprocessen.",
    href: "/lead-management",
  },
  {
    icon: <FontAwesomeIcon icon={faChartPie} className="h-6 w-6" />,
    title: "Marketing Automatisering",
    description: "Implementeer software om marketingcampagnes effectiever en efficiënter te maken.",
    href: "/marketing-automatisering",
  },
  {
    icon: <FontAwesomeIcon icon={faRobot} className="h-6 w-6" />,
    title: "AI Geoptimaliseerde Systemen",
    description: "Gebruik AI om processen te optimaliseren en complexe problemen op te lossen.",
    href: "/ai-systemen",
  },
  {
    icon: <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />,
    title: "Webapplicaties",
    description: "Ontwikkel moderne, responsieve webapplicaties die overal toegankelijk zijn.",
    href: "/webapplicaties",
  },
  {
    icon: <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />,
    title: "E-commerce Platformen",
    description: "Bouw gebruiksvriendelijke en schaalbare e-commerce oplossingen.",
    href: "/e-commerce",
  },
  {
    icon: <FontAwesomeIcon icon={faCloud} className="h-6 w-6" />,
    title: "Portalen en Platformen",
    description: "Ontwikkel portalen en platformen voor interne en externe samenwerking.",
    href: "/portalen-platformen",
  },
  {
    icon: <FontAwesomeIcon icon={faFileAlt} className="h-6 w-6" />,
    title: "Document Management Systemen",
    description: "Beheer documenten efficiënt met versiebeheer en cloudopslag.",
    href: "/document-management",
  },
  {
    icon: <FontAwesomeIcon icon={faDatabase} className="h-6 w-6" />,
    title: "Data Management Oplossingen",
    description: "Optimaliseer en beheer grote datasets met betrouwbare datamanagementoplossingen.",
    href: "/data-management",
  },
  {
    icon: <FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" />,
    title: "Planning en Rooster Systemen",
    description: "Implementeer tools voor efficiënte planning en tijdbeheer.",
    href: "/planning-rooster",
  },
]

// Voordelen van custom development
const benefits = [
  {
    icon: <FontAwesomeIcon icon={faLaptopCode} className="h-6 w-6" />,
    title: "Op Maat Gemaakte Oplossingen",
    description: "Software die exact aansluit bij uw specifieke bedrijfsprocessen en behoeften, zonder compromissen.",
  },
  {
    icon: <FontAwesomeIcon icon={faShieldAlt} className="h-6 w-6" />,
    title: "Verhoogde Veiligheid",
    description:
      "Implementatie van de nieuwste beveiligingsprotocollen en best practices om uw gegevens te beschermen.",
  },
  {
    icon: <FontAwesomeIcon icon={faRocket} className="h-6 w-6" />,
    title: "Schaalbaarheid",
    description: "Oplossingen die kunnen meegroeien met uw bedrijf, zonder grote herontwikkeling in de toekomst.",
  },
  {
    icon: <FontAwesomeIcon icon={faCogs} className="h-6 w-6" />,
    title: "Naadloze Integratie",
    description: "Perfecte aansluiting op uw bestaande systemen en workflows voor maximale efficiëntie.",
  },
]

// Technologieën
const technologies = [
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNodeJs },
    { name: "Python", icon: faPython },
    { name: "PHP", icon: faPhp },
    { name: "Laravel", icon: faLaravel },
    { name: "Vue.js", icon: faVuejs },
    { name: "Angular", icon: faAngular },
    { name: "TypeScript", icon: faJs },
    { name: "MongoDB", icon: faDatabase },
    { name: "MySQL", icon: faDatabase },
    { name: "PostgreSQL", icon: faDatabase },
    { name: "AWS", icon: faAws },
  ]

// Testimonials
const testimonials = [
  {
    quote:
      "De custom webapplicatie die Multichoice voor ons heeft ontwikkeld heeft onze interne processen volledig getransformeerd. We hebben nu real-time inzicht in onze data en kunnen veel sneller beslissingen nemen.",
    author: "Erik van der Meer",
    company: "TechSolutions B.V.",
  },
  {
    quote:
      "Het team van Multichoice heeft ons CRM-systeem volledig op maat gemaakt voor onze specifieke behoeften. De ROI was al binnen 6 maanden zichtbaar door de verhoogde efficiëntie.",
    author: "Laura Jansen",
    company: "Marketing Experts",
  },
  {
    quote:
      "De e-commerce oplossing die Multichoice voor ons heeft gebouwd heeft onze online verkoop met 200% verhoogd. De gebruiksvriendelijkheid en snelheid maken echt het verschil.",
    author: "Thomas Bakker",
    company: "Fashion Forward",
  },
]

export default function DevelopmentPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <NextSeo
        title={decodeHtml("Software Development op Maat | Multichoice Agency")}
        description={decodeHtml(
          "Professionele software development diensten voor web, mobiel en desktop. Van frontend tot backend, wij bouwen oplossingen die uw bedrijf vooruit helpen.",
        )}
        canonical="https://www.multichoiceagency.nl/development"
        openGraph={{
          type: "website",
          url: "https://www.multichoiceagency.nl/development",
          title: decodeHtml("Software Development op Maat | Multichoice Agency"),
          description: decodeHtml(
            "Professionele software development diensten voor web, mobiel en desktop. Van frontend tot backend, wij bouwen oplossingen die uw bedrijf vooruit helpen.",
          ),
          images: [
            {
              url: "/partners/development.png",
              width: 1200,
              height: 630,
              alt: "Software Development",
            },
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white overflow-hidden pt-36">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Digitale Portalen voor Optimale Samenwerking</h1>
                <p className="text-xl mb-8 text-gray-100">
                  Verbind uw organisatie met klanten, leden, medewerkers en partners via intuïtieve en veilige digitale
                  portalen op maat. Verhoog efficiëntie, verbeter communicatie en bied 24/7 toegang tot relevante
                  informatie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/offerte-aanvragen">
                    <Button
                      size="lg"
                      className="bg-white text-green-900 hover:bg-gray-100 hover:text-green-800 font-semibold"
                    >
                      Vraag een offerte aan
                    </Button>
                  </Link>
                  <Link href="#portalen-overzicht">
                    <Button size="lg" variant="outline" className="border-white bg-black text-white hover:bg-green-500">
                      Bekijk alle portalen
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <video className="w-full rounded-lg shadow-2xl" autoPlay loop muted playsInline>
                  <source
                    src="https://cdn.dribbble.com/userupload/16834853/file/original-dae1aa1b80f665acee5f8bd719ac4f77.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute -bottom-6 -right-6 bg-lime-400 text-green-900 py-3 px-6 rounded-lg font-bold shadow-lg">
                  Maatwerk Oplossingen
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 80.75C1248 89.625 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Development Diensten Section */}
      <section id="development-diensten" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Onze Development Diensten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij bieden een breed scala aan development diensten, elk ontworpen om specifieke uitdagingen op te lossen
              en uw bedrijf te laten groeien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href={service.href}>
                    <Button className="w-full bg-green-700 hover:bg-green-800 text-white">Meer informatie</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Voordelen van Custom Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek waarom maatwerk software development de beste keuze is voor bedrijven die willen innoveren en
              groeien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ons Development Proces</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We volgen een gestructureerd proces om ervoor te zorgen dat uw software perfect aansluit bij uw behoeften
              en doelstellingen.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="flex flex-col space-y-4">
                {[
                  "Analyse & Planning",
                  "Design & Architectuur",
                  "Ontwikkeling",
                  "Testen & QA",
                  "Implementatie",
                  "Onderhoud & Support",
                ].map((step, index) => (
                  <button
                    key={index}
                    className={`text-left p-4 rounded-lg transition-all ${
                      activeTab === index ? "bg-green-700 text-white font-semibold" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                          activeTab === index ? "bg-white text-green-700" : "bg-green-700 text-white"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-gray-50 p-8 rounded-lg">
              {activeTab === 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Analyse & Planning</h3>
                  <p className="text-gray-600 mb-4">
                    We beginnen met een grondige analyse van uw bedrijfsprocessen, behoeften en doelstellingen. Tijdens
                    deze fase:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Identificeren we de belangrijkste stakeholders en hun behoeften",
                      "Analyseren we bestaande systemen en processen",
                      "Definiëren we de functionele en technische vereisten",
                      "Stellen we een gedetailleerd projectplan op met mijlpalen en deadlines",
                      "Bepalen we de meest geschikte technologieën en architectuur",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-green-600 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 1 && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Design & Architectuur</h3>
                  <p className="text-gray-600 mb-4">
                    In deze fase ontwerpen we de architectuur en gebruikersinterface van de software:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Ontwikkelen van wireframes en user flows",
                      "Ontwerpen van de database structuur en datamodellen",
                      "Definiëren van API's en integratiepunten",
                      "Creëren van een visueel ontwerp dat aansluit bij uw huisstijl",
                      "Opstellen van technische specificaties en architectuurdocumentatie",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-green-600 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 2 && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ontwikkeling</h3>
                  <p className="text-gray-600 mb-4">
                    Tijdens de ontwikkelingsfase bouwen we de software volgens de vastgestelde specificaties:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Ontwikkelen van de frontend met moderne, responsieve technologieën",
                      "Bouwen van een robuuste backend met veilige dataopslag",
                      "Implementeren van business logica en functionaliteiten",
                      "Integreren met bestaande systemen en databases",
                      "Regelmatige voortgangsupdates en demonstraties",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-green-600 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 3 && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Testen & QA</h3>
                  <p className="text-gray-600 mb-4">
                    We voeren uitgebreide tests uit om de kwaliteit en functionaliteit te waarborgen:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Uitvoeren van unit tests en integratietests",
                      "Uitvoeren van functionele tests om alle features te valideren",
                      "Uitvoeren van gebruikerstests met echte eindgebruikers",
                      "Testen van prestaties, beveiliging en schaalbaarheid",
                      "Oplossen van bugs en optimaliseren van code",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-green-600 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 4 && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Implementatie</h3>
                  <p className="text-gray-600 mb-4">
                    Na de ontwikkeling en het testen implementeren we de software in uw omgeving:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Voorbereiden van de productieomgeving",
                      "Migreren van data en configuraties",
                      "Uitvoeren van een gecontroleerde lancering",
                      "Training voor beheerders en eindgebruikers",
                      "Documentatie en kennisoverdracht",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-green-600 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 5 && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Onderhoud & Support</h3>
                  <p className="text-gray-600 mb-4">
                    Na de implementatie blijven we ondersteuning bieden om de continuïteit te waarborgen:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Monitoring van prestaties en beschikbaarheid",
                      "Regelmatige updates en beveiligingspatches",
                      "Technische ondersteuning en probleemoplossing",
                      "Doorlopende optimalisatie en verbetering",
                      "Ontwikkeling van nieuwe functionaliteiten op basis van feedback",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-green-600 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Onze Technologieën</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij werken met de nieuwste en meest betrouwbare technologieën om hoogwaardige softwareoplossingen te
              bouwen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-full shadow-md mb-3 h-16 w-16 flex items-center justify-center">
                  <FontAwesomeIcon icon={tech.icon} className="h-8 w-8 text-green-700" />
                </div>
                <p className="text-center font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Wat Onze Klanten Zeggen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek hoe onze development oplossingen het verschil maken voor onze klanten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <svg className="h-8 w-8 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        <div>
            <Portfolio />
        </div>
        <div>
         <Oplossingen />   
        </div>
    </>
  )
}

