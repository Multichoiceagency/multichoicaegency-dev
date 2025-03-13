"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUsers,
  faUserTie,
  faTrophy,
  faHandshake,
  faTruck,
  faChartBar,
  faArrowRight,
  faCheck,
  faShieldAlt,
  faLock,
  faUserFriends,
  faChartLine,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { NextSeo } from "next-seo"
import { decodeHtml } from "@/utils/decodeHtml"
import { faReact, faNodeJs, faPython, faPhp, faLaravel, faVuejs, faAngular, faJs, faAws } from "@fortawesome/free-brands-svg-icons"
import Portfolio from "@/components/cases-display"
import Oplossingen from "@/components/oplossingen"

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
// Portalen data
const portals = [
  {
    icon: <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-primary" />,
    title: "Ledenportaal",
    subtitle: "Voor verenigingen / stichtingen",
    description:
      "Elke vereniging heeft leden. Stel je voor dat bijna alle administratieve handelingen gedigitaliseerd zijn. Leden kunnen hun gegevens inzien, wijzigen, abonnementen beheren en verenigingsnieuws bekijken. Dit bespaart tijd en werk.",
    link: "/portalen/ledenportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} className="h-6 w-6 text-primary" />,
    title: "Klantenportaal",
    subtitle: "Voor commerciële organisaties",
    description:
      "Met een klantenportaal kunnen jouw klanten 24/7 bestellingen doorgeven, afspraken maken, orders volgen en informatie bekijken. Dit verbetert klanttevredenheid en verhoogt omzet.",
    link: "/portalen/klantenportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faTrophy} className="h-6 w-6 text-primary" />,
    title: "Medewerkersportaal",
    subtitle: "Intranet voor medewerkers",
    description:
      "Een medewerkersportaal fungeert als een intranet waar werknemers informatie kunnen bekijken en delen, zoals loonstroken, planning, beschikbaarheid en (bedrijfs)nieuws. Dit versterkt interne communicatie.",
    link: "/portalen/medewerkersportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faHandshake} className="h-6 w-6 text-primary" />,
    title: "Partnerportaal",
    subtitle: "Voor zakelijke samenwerkingen",
    description:
      "Partners kunnen toegang krijgen tot gedeelde projecten, documenten en statusupdates. Hiermee verbeter je samenwerking, communicatie en transparantie met je zakelijke partners.",
    link: "/portalen/partnerportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faTruck} className="h-6 w-6 text-primary" />,
    title: "Leveranciersportaal",
    subtitle: "Voor supply chain management",
    description:
      "Met een leveranciersportaal kun je bestellingen beheren, leveringsstatussen volgen en eenvoudig communiceren met je leveranciers. Dit stroomlijnt je supply chain en minimaliseert fouten.",
    link: "/portalen/leveranciersportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faChartBar} className="h-6 w-6 text-primary" />,
    title: "Salesportaal",
    subtitle: "Voor inzichten in je bedrijf",
    description:
      "Met een salesportaal krijg je realtime inzicht in verkoopgegevens, klantanalyses en prestatieoverzichten. Hiermee kun je strategieën verbeteren en groeikansen identificeren.",
    link: "/portalen/salesportaal",
    buttonText: "Meer informatie",
  },
]

// Voordelen van portalen
const benefits = [
  {
    icon: <FontAwesomeIcon icon={faChartLine} className="h-6 w-6" />,
    title: "Verhoogde Efficiëntie",
    description:
      "Automatiseer processen en verminder handmatige taken, waardoor je team zich kan concentreren op waarde toevoegende activiteiten.",
  },
  {
    icon: <FontAwesomeIcon icon={faUserFriends} className="h-6 w-6" />,
    title: "Verbeterde Samenwerking",
    description:
      "Creëer een centrale hub waar alle belanghebbenden kunnen communiceren, documenten kunnen delen en samen kunnen werken.",
  },
  {
    icon: <FontAwesomeIcon icon={faShieldAlt} className="h-6 w-6" />,
    title: "Veilige Gegevensuitwisseling",
    description:
      "Deel gevoelige informatie in een beveiligde omgeving met robuuste authenticatie en autorisatiecontroles.",
  },
  {
    icon: <FontAwesomeIcon icon={faLock} className="h-6 w-6" />,
    title: "Gecontroleerde Toegang",
    description:
      "Beheer nauwkeurig wie toegang heeft tot welke informatie met gedetailleerde gebruikersrechten en rollen.",
  },
]

// Testimonials
const testimonials = [
  {
    quote:
      "Het klantenportaal heeft onze klanttevredenheid met 40% verhoogd. Klanten waarderen de 24/7 toegang tot hun gegevens en bestellingen.",
    author: "Joost Verbeek",
    company: "TechSolutions B.V.",
  },
  {
    quote:
      "Sinds we ons ledenportaal hebben geïmplementeerd, is onze administratieve werklast met 60% verminderd. Een geweldige investering!",
    author: "Marieke de Jong",
    company: "Sportvereniging Olympia",
  },
  {
    quote:
      "Het medewerkersportaal heeft onze interne communicatie getransformeerd. Iedereen is nu op de hoogte en betrokken.",
    author: "Thomas Bakker",
    company: "GroeiNu Consultancy",
  },
]

export default function PortalenPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <NextSeo
        title={decodeHtml("Digitale Portalen op Maat | Multichoice Agency")}
        description={decodeHtml(
          "Verhoog efficiëntie en verbeter samenwerking met op maat gemaakte digitale portalen voor leden, klanten, medewerkers en partners."
        )}
        canonical="https://www.multichoiceagency.nl/portalen"
        openGraph={{
          type: "website",
          url: "https://www.multichoiceagency.nl/portalen",
          title: decodeHtml("Digitale Portalen op Maat | Multichoice Agency"),
          description: decodeHtml(
            "Verhoog efficiëntie en verbeter samenwerking met op maat gemaakte digitale portalen voor leden, klanten, medewerkers en partners."
          ),
          images: [
            {
              url: "/partners/portalen.png",
              width: 1200,
              height: 630,
              alt: "Digitale Portalen",
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Digitale Portalen voor Optimale Samenwerking
                </h1>
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
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white bg-black text-white hover:bg-green-500"
                    >
                      Bekijk alle portalen
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <video
                  className="w-full rounded-lg shadow-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="https://cdn.dribbble.com/userupload/24541894/file/original-cfc19800350bfe01bc5621d50c052559.mp4"
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
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 80.75C1248 89.625 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Portalen Overzicht Section */}
      <section id="portalen-overzicht" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Onze Portaal Oplossingen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij ontwikkelen verschillende soorten portalen, elk ontworpen om specifieke behoeften te vervullen en
              processen te optimaliseren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
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
                      {portal.icon}
                    </div>
                    <span className="ml-3 text-sm font-semibold text-green-700">{portal.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{portal.title}</h3>
                  <p className="text-gray-600 mb-6">{portal.description}</p>
                  <Link href={portal.link}>
                    <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                      {portal.buttonText}
                    </Button>
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
            <h2 className="text-4xl font-bold mb-4">Voordelen van Digitale Portalen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek hoe digitale portalen uw organisatie kunnen transformeren en waarde kunnen toevoegen voor alle
              belanghebbenden.
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
            <h2 className="text-4xl font-bold mb-4">Ons Ontwikkelingsproces</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We volgen een gestructureerd proces om ervoor te zorgen dat uw portaal perfect aansluit bij uw behoeften
              en doelstellingen.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="flex flex-col space-y-4">
                {["Analyse & Planning", "Design & Prototyping", "Ontwikkeling", "Testen & Optimalisatie", "Lancering & Support"].map(
                  (step, index) => (
                    <button
                      key={index}
                      className={`text-left p-4 rounded-lg transition-all ${
                        activeTab === index
                          ? "bg-green-700 text-white font-semibold"
                          : "bg-gray-100 hover:bg-gray-200"
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
                  )
                )}
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-gray-50 p-8 rounded-lg">
              {activeTab === 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Analyse & Planning</h3>
                  <p className="text-gray-600 mb-4">
                    We beginnen met een grondige analyse van uw organisatie, processen en behoeften. Tijdens deze fase:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Identificeren we de belangrijkste stakeholders en hun behoeften",
                      "Analyseren we bestaande processen en identificeren verbeterpunten",
                      "Definiëren we de functionele en technische vereisten",
                      "Stellen we een gedetailleerd projectplan op met mijlpalen en deadlines",
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
                  <h3 className="text-2xl font-bold mb-4">Design & Prototyping</h3>
                  <p className="text-gray-600 mb-4">
                    In deze fase creëren we het visuele ontwerp en de gebruikerservaring van het portaal:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Ontwikkelen van wireframes en user flows",
                      "Creëren van een visueel ontwerp dat aansluit bij uw huisstijl",
                      "Bouwen van interactieve prototypes voor gebruikerstests",
                      "Itereren op basis van feedback om de gebruikerservaring te optimaliseren",
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
                    Tijdens de ontwikkelingsfase bouwen we het portaal volgens de vastgestelde specificaties:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Ontwikkelen van de frontend met moderne, responsieve technologieën",
                      "Bouwen van een robuuste backend met veilige dataopslag",
                      "Implementeren van authenticatie- en autorisatiemechanismen",
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
                  <h3 className="text-2xl font-bold mb-4">Testen & Optimalisatie</h3>
                  <p className="text-gray-600 mb-4">
                    We voeren uitgebreide tests uit om de kwaliteit en functionaliteit te waarborgen:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Uitvoeren van functionele tests om alle features te valideren",
                      "Uitvoeren van gebruikerstests met echte eindgebruikers",
                      "Testen van prestaties, beveiliging en schaalbaarheid",
                      "Optimaliseren op basis van testresultaten en feedback",
                      "Voorbereiden van de lancering met een gedetailleerd implementatieplan",
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
                  <h3 className="text-2xl font-bold mb-4">Lancering & Support</h3>
                  <p className="text-gray-600 mb-4">
                    Na de lancering blijven we ondersteuning bieden om het succes van uw portaal te waarborgen:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Gecontroleerde lancering met nauwkeurige monitoring",
                      "Training voor beheerders en eindgebruikers",
                      "Documentatie en kennisoverdracht",
                      "Doorlopende technische ondersteuning en onderhoud",
                      "Regelmatige updates en nieuwe functionaliteiten op basis van gebruikersfeedback",
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Wat Onze Klanten Zeggen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek hoe onze portaaloplossingen het verschil maken voor onze klanten.
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
                className="bg-white p-8 rounded-lg shadow-md"
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
