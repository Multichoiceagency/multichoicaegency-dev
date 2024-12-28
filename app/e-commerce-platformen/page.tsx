'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BasePage } from '@/components/base-page'
import { HeroSection } from '@/components/hero-section'
import { FeatureSection } from '@/components/feature-section'
import { ProcessSection } from '@/components/process-section'
import { TechnologyStack } from '@/components/technology-stack'
import { CaseStudies } from '@/components/case-studies'
import { ContactForm } from '@/components/contact-form'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ShoppingCart, Server, Globe, Lock, Zap, Users } from 'lucide-react'

export const metadata = {
  title: 'E-commerce Platformontwikkeling | Multichoice Agency',
  description: 'Krachtige en schaalbare e-commerce platforms op maat. Boost uw online verkoop met onze geavanceerde oplossingen.',
}

export default function ECommercePlatformPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('custom')
  const [monthlyVisitors, setMonthlyVisitors] = useState(10000)
  const [includeHosting, setIncludeHosting] = useState(false)

  const calculateEstimate = () => {
    let basePrice = 15000
    if (selectedPlatform === 'headless') basePrice += 5000
    if (selectedPlatform === 'saas') basePrice -= 5000
    basePrice += Math.floor(monthlyVisitors / 1000) * 100
    if (includeHosting) basePrice += 1000
    return basePrice
  }

  return (
    <BasePage title={metadata.title} description={metadata.description}>
      <HeroSection
        title="E-commerce Platformontwikkeling"
        description="Boost uw online verkoop met geavanceerde e-commerce oplossingen"
        backgroundVideo="/videos/ecommerce-platform.mp4"
        buttonText="Start uw e-commerce project"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FeatureSection
          title="Waarom kiezen voor onze E-commerce Platformontwikkeling?"
          features={[
            {
              title: "Maatwerk Platforms",
              description: "Op maat gemaakte oplossingen die perfect aansluiten bij uw bedrijfsmodel",
              icon: "ShoppingBag"
            },
            {
              title: "Schaalbaarheid",
              description: "Platforms die meegroeien met uw bedrijf, van startup tot enterprise",
              icon: "TrendingUp"
            },
            {
              title: "Integraties",
              description: "Naadloze koppelingen met ERP, CRM, en andere bedrijfssystemen",
              icon: "Link"
            },
            {
              title: "Prestatie-optimalisatie",
              description: "Snelle laadtijden en efficiënte verwerking van grote aantallen bezoekers",
              icon: "Zap"
            },
            {
              title: "Geavanceerde Analytics",
              description: "Diepgaande inzichten in klantgedrag en verkooppatronen",
              icon: "BarChart2"
            },
            {
              title: "Omnichannel Ondersteuning",
              description: "Naadloze integratie van online en offline verkoopkanalen",
              icon: "Layers"
            }
          ]}
        />
      </motion.div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Onze E-commerce Platform Oplossingen</h2>
          <Tabs defaultValue="custom" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="custom">Custom Platform</TabsTrigger>
              <TabsTrigger value="headless">Headless Commerce</TabsTrigger>
              <TabsTrigger value="saas">SaaS Oplossing</TabsTrigger>
            </TabsList>
            <TabsContent value="custom">
              <Card>
                <CardHeader>
                  <CardTitle>Custom E-commerce Platform</CardTitle>
                  <CardDescription>Volledig op maat gemaakt voor uw unieke bedrijfsbehoeften</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Volledige controle over functionaliteit en gebruikerservaring</li>
                    <li>Optimale prestaties en schaalbaarheid</li>
                    <li>Naadloze integratie met bestaande systemen</li>
                    <li>Unieke features die u onderscheiden van de concurrentie</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setSelectedPlatform('custom')}>Kies Custom Platform</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="headless">
              <Card>
                <CardHeader>
                  <CardTitle>Headless Commerce</CardTitle>
                  <CardDescription>Flexibele architectuur voor omnichannel ervaringen</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Scheiding van front-end en back-end voor maximale flexibiliteit</li>
                    <li>Snelle time-to-market voor nieuwe touchpoints</li>
                    <li>Optimale prestaties en gebruikerservaring</li>
                    <li>Ideaal voor bedrijven met meerdere verkoopkanalen</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setSelectedPlatform('headless')}>Kies Headless Commerce</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="saas">
              <Card>
                <CardHeader>
                  <CardTitle>SaaS E-commerce Oplossing</CardTitle>
                  <CardDescription>Snel te implementeren en kosteneffectief</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Snelle setup en lancering</li>
                    <li>Lagere initiële kosten</li>
                    <li>Regelmatige updates en nieuwe features</li>
                    <li>Ideaal voor kleine tot middelgrote bedrijven</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setSelectedPlatform('saas')}>Kies SaaS Oplossing</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ProcessSection
        title="Ons E-commerce Platform Ontwikkelingsproces"
        steps={[
          { 
            title: "Behoefteanalyse", 
            description: "We brengen uw specifieke e-commerce behoeften in kaart",
            details: "In deze fase voeren we diepgaande gesprekken met uw team, analyseren we uw huidige systemen en processen, en identificeren we de unieke uitdagingen en kansen voor uw e-commerce platform."
          },
          { 
            title: "Conceptontwikkeling", 
            description: "We ontwerpen de architectuur en functionaliteiten van uw platform",
            details: "Op basis van de analyse creëren we een gedetailleerd concept voor uw e-commerce platform, inclusief technische architectuur, functionaliteiten, en integraties."
          },
          { 
            title: "Design", 
            description: "We creëren een gebruiksvriendelijke en conversie-geoptimaliseerde interface",
            details: "Ons designteam ontwikkelt een visueel aantrekkelijke en intuïtieve gebruikersinterface die aansluit bij uw merk en gericht is op het maximaliseren van conversies."
          },
          { 
            title: "Ontwikkeling", 
            description: "We bouwen uw e-commerce platform met geavanceerde technologieën",
            details: "Onze ervaren developers zetten het ontwerp om in een robuust en schaalbaar e-commerce platform, met focus op prestaties, beveiliging en toekomstbestendigheid."
          },
          { 
            title: "Testen & Optimalisatie", 
            description: "We zorgen voor een foutloze en geoptimaliseerde gebruikerservaring",
            details: "Uitgebreide tests worden uitgevoerd om de functionaliteit, gebruiksvriendelijkheid en prestaties van uw platform te garanderen. We optimaliseren waar nodig voor de beste resultaten."
          },
          { 
            title: "Lancering & Ondersteuning", 
            description: "We lanceren uw platform en bieden doorlopende ondersteuning",
            details: "Na een zorgvuldige lancering blijven we uw e-commerce platform monitoren, onderhouden en optimaliseren om continue groei en succes te waarborgen."
          }
        ]}
      />

      <TechnologyStack
        title="Onze E-commerce Platform Technologieën"
        frontEnd={["React", "Vue.js", "Next.js", "Angular"]}
        backEnd={["Node.js", "Python", "Java", "PHP"]}
        databases={["PostgreSQL", "MongoDB", "Elasticsearch", "Redis"]}
        cloud={["AWS", "Google Cloud", "Azure", "Vercel"]}
        tools={["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD"]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Wat is het verschil tussen een custom platform en een SaaS oplossing?</AccordionTrigger>
              <AccordionContent>
                Een custom platform wordt volledig op maat ontwikkeld voor uw specifieke behoeften, biedt maximale flexibiliteit en controle, maar vereist een grotere initiële investering. Een SaaS (Software-as-a-Service) oplossing is sneller te implementeren, heeft lagere opstartkosten, maar biedt minder maatwerkmogelijkheden. De keuze hangt af van uw specifieke bedrijfsbehoeften, budget en groeiverwachtingen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wat zijn de voordelen van headless commerce?</AccordionTrigger>
              <AccordionContent>
                Headless commerce biedt flexibiliteit door de front-end (presentatielaag) te scheiden van de back-end (e-commerce functionaliteit). Dit maakt het mogelijk om snel nieuwe touchpoints toe te voegen, zoals mobiele apps, IoT-devices of sociale media shops, zonder de core e-commerce functionaliteit aan te passen. Het resulteert in betere prestaties, snellere time-to-market voor nieuwe features, en een optimale gebruikerservaring op elk apparaat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Hoe zorgen jullie voor de schaalbaarheid van het e-commerce platform?</AccordionTrigger>
              <AccordionContent>
                We zorgen voor schaalbaarheid door gebruik te maken van moderne cloud-technologieën en microservices-architectuur. Dit stelt het platform in staat om automatisch op en af te schalen op basis van de vraag. Daarnaast implementeren we caching-strategieën, database-optimalisaties en load balancing om piekbelastingen aan te kunnen. We ontwerpen het platform ook met toekomstige groei in gedachten, zodat nieuwe functionaliteiten eenvoudig kunnen worden toegevoegd.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Welke beveiligingsmaatregelen nemen jullie voor e-commerce platforms?</AccordionTrigger>
              <AccordionContent>
                Beveiliging is een topprioriteit bij de ontwikkeling van e-commerce platforms. We implementeren diverse maatregelen, waaronder:
                - SSL/TLS-encryptie voor alle dataoverdracht
                - Regelmatige beveiligingsaudits en penetratietests
                - Implementatie van firewalls en intrusion detection systems
                - Veilige opslag van klantgegevens en encryptie van gevoelige informatie
                - Regelmatige updates en patches om bekend geworden kwetsbaarheden te dichten
                - Implementatie van sterke authenticatie- en autorisatiemechanismen
                - Naleving van relevante regelgeving zoals GDPR en PCI DSS
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Bereken een Schatting</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>E-commerce Platform Prijsschatting</CardTitle>
                <CardDescription>Pas de opties aan voor een indicatie van de kosten</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="platform">Gekozen Platform</Label>
                  <select
                    id="platform"
                    className="w-full p-2 border rounded"
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                  >
                    <option value="custom">Custom Platform</option>
                    <option value="headless">Headless Commerce</option>
                    <option value="saas">SaaS Oplossing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visitors">Maandelijkse Bezoekers</Label>
                  <Slider
                    id="visitors"
                    min={1000}
                    max={1000000}
                    step={1000}
                    value={[monthlyVisitors]}
                    onValueChange={(value) => setMonthlyVisitors(value[0])}
                  />
                  <div className="text-right">{monthlyVisitors.toLocaleString()} bezoekers</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="hosting"
                    checked={includeHosting}
                    onCheckedChange={setIncludeHosting}
                  />
                  <Label htmlFor="hosting">Inclusief Hosting</Label>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full text-center">
                  <p className="text-lg font-semibold">Geschatte Prijs</p>
                  <p className="text-3xl font-bold">€{calculateEstimate().toLocaleString()}</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Onze E-commerce Platform Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-2" />
                  Geavanceerd Productbeheer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Complexe productcatalogi, configureerbare producten, en dynamische prijsstrategieën.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="w-6 h-6 mr-2" />
                  Hoge Prestaties & Schaalbaarheid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Optimale laadtijden en naadloze verwerking van piekbelastingen.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-6 h-6 mr-2" />
                  Internationale E-commerce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Multi-language, multi-currency en lokalisatie-ondersteuning voor wereldwijde verkoop.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-6 h-6 mr-2" />
                  Geavanceerde Beveiliging
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Implementatie van de nieuwste beveiligingsprotocollen en fraudepreventie-maatregelen.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Realtime Integraties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Naadloze koppelingen met ERP, CRM, PIM en andere bedrijfskritische systemen.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Personalisatie & AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Geavanceerde personalisatie-engines en AI-gestuurde aanbevelingen voor verhoogde conversies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CaseStudies category="e-commerce-platform" />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Klaar om uw e-commerce platform naar het volgende niveau te tillen?</h2>
          <p className="text-center mb-8">Neem contact met ons op voor een gratis consultatie en ontdek hoe wij uw e-commerce visie kunnen realiseren.</p>
          <div className="flex justify-center">
            <Button size="lg" onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}>
              Start uw e-commerce project
            </Button>
          </div>
        </div>
      </section>

      <ContactForm id="contact-form" />
    </BasePage>
  )
}

