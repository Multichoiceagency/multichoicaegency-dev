'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronRight, Target, Palette, Wrench, Database, Server, HeadphonesIcon, Globe, Zap, Shield, Users, BarChart, Search, Star } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress, faShopify, faLaravel, faReact, faVuejs, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { CaseStudies } from '@/components/case-studies'
import { PricingTable } from '@/components/pricing-table'

export default function WebsitesPage() {
  const features = [
    {
      title: "Maatwerk websites",
      description: "Wij bouwen websites die perfect aansluiten op jouw doelen en doelgroep. Van corporate websites tot leadgenerators.",
      icon: <Globe className="w-12 h-12 text-primary mb-4" />
    },
    {
      title: "Webshops",
      description: "E-commerce oplossingen die verkopen. Met de nieuwste features en optimale gebruiksvriendelijkheid.",
      icon: <Zap className="w-12 h-12 text-primary mb-4" />
    },
    {
      title: "Portalen & Platformen",
      description: "Complexe web applicaties die processen automatiseren en het leven makkelijker maken.",
      icon: <Shield className="w-12 h-12 text-primary mb-4" />
    }
  ];

  const benefits = [
    "Responsive design voor alle devices",
    "SEO-vriendelijke structuur",
    "Snelle laadtijd",
    "Gebruiksvriendelijke interface",
    "Veilig en betrouwbaar",
    "Makkelijk te beheren",
    "Schaalbaar platform",
    "24/7 support"
  ];

  const statistics = [
    { number: "500+", label: "Tevreden klanten", icon: <Users className="w-8 h-8" /> },
    { number: "98%", label: "Klanttevredenheid", icon: <BarChart className="w-8 h-8" /> },
    { number: "24/7", label: "Support beschikbaar", icon: <HeadphonesIcon className="w-8 h-8" /> },
    { number: "100+", label: "Websites gelanceerd", icon: <Globe className="w-8 h-8" /> }
  ];

  const technologies = [
    { name: "WordPress", icon: faWordpress },
    { name: "Shopify", icon: faShopify },
    { name: "Laravel", icon: faLaravel },
    { name: "React", icon: faReact },
    { name: "Vue.js", icon: faVuejs },
    { name: "Node.js", icon: faNodeJs },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70 dark:from-primary/80 dark:via-primary/70 dark:to-primary/60"></div>
        </div>
        <div className="container mx-auto px-4 py-20 text-center z-10 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Unieke resultaatgerichte websites
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto mb-8">
            Wij ontwikkelen websites die scoren: stijlvol design ontmoet krachtige technologie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group gap-2 rounded-full bg-green-700 text-secondary hover:text-black hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
              Start je project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group gap-2 bg-grey-700 rounded-full border-white hover:text-black text-white hover:bg-white">
              Bekijk portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white dark:bg-gray-800 relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <Card key={index} className="border-none shadow-lg dark:bg-gray-700">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-primary-light">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-green-100 dark:bg-green-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Link href="/" className="hover:text-primary dark:hover:text-primary-light">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 dark:text-white">Websites</span>
          </div>
        </div>
      </div>

      {/* Main Content Section with Parallax */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                En nu écht een website die resultaat oplevert.
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Bij Multichoiceagency bouwen we websites die meer doen dan alleen er goed uitzien. 
                Onze maatwerk websites zijn ontworpen om resultaat te leveren: meer leads, hogere 
                conversies en tevreden klanten.
              </p>
              <div className="space-y-4">
                {[
                  "Strategische aanpak voor maximaal resultaat",
                  "Conversion-driven design",
                  "Gebruiksvriendelijk CMS",
                  "SEO-geoptimaliseerd"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary dark:text-primary-light" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary-light dark:text-gray-900 dark:hover:bg-primary-light/90">
                  Neem contact op
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="group gap-2 rounded-full dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                  Bekijk cases
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop"
                  alt="Website Preview"
                  width={1000}
                  height={800}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Hover Effects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Wat we voor je kunnen betekenen
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Van eenvoudige websites tot complexe web applicaties, wij hebben de expertise in huis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2340&auto=format&fit=crop"
                  alt="Website Development Process"
                  width={1000}
                  height={800}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-2xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Waarom kiezen voor onze websites?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group"
                  >
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-primary dark:text-primary-light group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologieën waar we mee werken
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We gebruiken de nieuwste en meest efficiënte technologieën om jouw website te bouwen.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={tech.icon} 
                    className="text-4xl text-gray-700 dark:text-gray-300"
                  />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ons ontwikkelproces
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Van concept tot realisatie, wij hanteren een bewezen aanpak.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Analyse & Planning",
                description: "We beginnen met een grondige analyse van je wensen en doelstellingen."
              },
              {
                step: "2",
                title: "Design",
                description: "We ontwerpen een unieke website die perfect aansluit bij je merk."
              },
              {
                step: "3",
                title: "Ontwikkeling",
                description: "We bouwen je website met de nieuwste technologieën."
              },
              {
                step: "4",
                title: "Launch & Support",
                description: "We lanceren je website en bieden continue ondersteuning."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary dark:bg-primary-light text-white dark:text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{phase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Blocks Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze bouwstenen
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Essentiële bouwstenen leveren jullie ideale maatwerk online oplossing, van websites tot webapplicaties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary dark:text-primary-light" />,
                title: "Strategie",
                description: "We beginnen met een diepgaande analyse van je behoeften, jullie buyer persona en de customer journey. De doelen die we stellen, zoals meer leads of efficiëntere processen, bepalen onze koers."
              },
              {
                icon: <Palette className="w-8 h-8 text-primary dark:text-primary-light" />,
                title: "UX & Design",
                description: "Onze vormgevers en UX designers zorgen voor hét perfecte plaatje. Door een goed uitgedachte vormgeving krijgt je website de succesvolle indeling en look and feel."
              },
              {
                icon: <Wrench className="w-8 h-8 text-primary dark:text-primary-light" />,
                title: "Maatwerk",
                description: "Het toevoegen van specifieke maatwerk functionaliteiten maakt je website nog unieker en succesvoller. Onze developers zorgen voor een implementatie van complexe maatwerk functies."
              },
              {
                icon: <Database className="w-8 h-8 text-primary dark:text-primary-light" />,
                title: "Umbraco CMS",
                description: "We implementeren het design, de functionaliteiten en de content in het beste CMS dat je ooit hebt gebruikt. Umbraco is open source, zeer gebruiksvriendelijk en bloedend."
              },
              {
                icon: <Server className="w-8 h-8 text-primary dark:text-primary-light" />,
                title: "Hosting",
                description: "We hosten je website op een van onze drie snelle windows servers. Of we reserveren een hele server voor je. Naast de webserver voorzien we je website van een razendsnelle database server."
              },
              {
                icon: <HeadphonesIcon className="w-8 h-8 text-primary dark:text-primary-light" />,
                title: "Support",
                description: "Onze supportmedewerkers staan je met raad en daad bij. Weet je even niet meer hoe je iets moet aanpassen of wil je tips over het CMS. Daarvoor kan je ons altijd bereiken via telefoon en e-mail."
              }
            ].map((block, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary-light transition-colors group">
                <div className="mb-4">{block.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{block.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{block.description}</p>
                <ArrowRight className="text-primary dark:text-primary-light w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <PricingTable />

      {/* Advanced Modules Section */}
      <section className="py-20 bg-primary dark:bg-primary-light text-white dark:text-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Geavanceerde modules & componenten
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Alle websites kunnen we uitbreiden met verschillende modules en componenten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "Multi-language module",
              "Blog module",
              "Nieuws module",
              "Events/Agenda module",
              "Vacature module",
              "FAQ module",
              "Forms module",
              "Search module",
              "Social media module",
              "Newsletter module"
            ].map((module, index) => (
              <div key={index} className="p-6 border border-white/20 dark:border-gray-800/20 rounded-lg hover:border-white/40 dark:hover:border-gray-800/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{module}</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Clients Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze klanten
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Wij werken samen met toonaangevende bedrijven en organisaties.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt={`Client ${index}`}
                  width={120}
                  height={60}
                  className="opacity-50 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

