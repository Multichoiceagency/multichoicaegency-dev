"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Check,
  Star,
  ChevronRight,
  ChevronDown,
  BarChart3,
  Users,
  Target,
  Lightbulb,
  Zap,
  Award,
  TrendingUp,
  PieChart,
  BarChart,
  LineChart,
  Layers,
  Briefcase,
  CheckCircle2,
  ShoppingBag,
  Building,
  Rocket,
  Heart,
  Sparkles,
  Palette,
  Megaphone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

const features = [
  {
    id: "market-analysis",
    title: "Merkanalyse & Positionering",
    description:
      "Onze experts analyseren uw merk en marktpositie, identificeren kansen en geven u waardevolle inzichten om uw merkpositionering te versterken.",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    tryLink: "/demo/merkanalyse",
    videoSrc: "/videos/data-analysis.mp4",
  },
  {
    id: "content-strategy",
    title: "Merkgerichte Content",
    description:
      "Ontwikkel content die perfect aansluit bij uw merkidentiteit en positionering, voor consistente communicatie over alle kanalen.",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    tryLink: "/demo/merkcontent",
    videoSrc: "/videos/content-creation.mp4",
  },
  {
    id: "customer-experience",
    title: "Merkbeleving Versterken",
    description:
      "Verbeter de klantervaring met uw merk via gepersonaliseerde interacties die uw merkwaarden en positionering versterken.",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    tryLink: "/demo/merkbeleving",
    videoSrc: "/videos/customer-service.mp4",
  },
]

const miniFeatures = [
  {
    title: "Merkstrategie Ontwikkeling",
    description: "Ontwikkel een krachtige merkstrategie die uw unieke positie in de markt definieert",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    imageSrc: "/images/workflow-automation.png",
  },
  {
    title: "Concurrentieanalyse",
    description: "Analyseer uw concurrenten en ontdek hoe u uw merk effectief kunt onderscheiden",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    imageSrc: "/images/market-explorer.png",
  },
  {
    title: "Merkidentiteit Versterken",
    description: "Versterk uw merkidentiteit met consistente visuele en verbale communicatie",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    imageSrc: "/images/digital-assistant.png",
  },
]

const testimonials = [
  {
    name: "Lisa van der Berg",
    company: "TechNova B.V.",
    text: "Dankzij de merkpositionering strategie van Multichoiceagency hebben we onze marktpositie aanzienlijk versterkt en een duidelijker onderscheid gecreëerd ten opzichte van onze concurrenten.",
    avatar: "/confident-leader.png",
    rating: 5,
  },
  {
    name: "Mark Jansen",
    company: "Eco Solutions",
    text: "De merkstrategie die Multichoiceagency voor ons heeft ontwikkeld heeft geleid tot een consistentere merkbeleving en een stijging van 40% in merkherkenning binnen onze doelgroep.",
    avatar: "/confident-leader.png",
    rating: 5,
  },
  {
    name: "Sophie de Vries",
    company: "Creative Minds",
    text: "Het team van Multichoiceagency heeft ons geholpen om onze merkidentiteit te herdefiniëren. Het resultaat is een authentiek en onderscheidend merk dat perfect aansluit bij onze doelgroep.",
    avatar: "/confident-professional.png",
    rating: 4,
  },
]

const processSteps = [
  {
    number: "01",
    title: "Merkanalyse",
    description: "We beginnen met een grondige analyse van uw huidige merkpositie, doelgroep en concurrenten.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "Strategie Ontwikkeling",
    description: "Op basis van de analyse ontwikkelen we een op maat gemaakte merkpositioneringsstrategie.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "Implementatie",
    description: "We implementeren de strategie over alle relevante kanalen en touchpoints.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "Monitoring & Optimalisatie",
    description: "We monitoren de resultaten en optimaliseren de strategie waar nodig voor maximaal effect.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
]

const statistics = [
  {
    value: "87%",
    label: "van de klanten ziet merkherkenning stijgen",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    value: "64%",
    label: "hogere conversieratio na merkpositionering",
    icon: <BarChart className="h-6 w-6" />,
  },
  {
    value: "3.5x",
    label: "meer engagement op sociale media",
    icon: <Users className="h-6 w-6" />,
  },
  {
    value: "42%",
    label: "stijging in klantloyaliteit",
    icon: <Award className="h-6 w-6" />,
  },
]

const caseStudies = [
  {
    title: "Retail Transformatie",
    client: "ModeFusion",
    description: "Hoe we een traditionele retailer hielpen om zich te herpositioneren in een digitale markt.",
    results: ["35% stijging in online verkoop", "Verdubbeling van merkbekendheid", "28% toename in klantloyaliteit"],
    image: "/case-study-retail.png",
  },
  {
    title: "B2B Merkversterking",
    client: "TechSolutions",
    description: "Een B2B-bedrijf dat zich onderscheidde van concurrenten met een duidelijke merkpositionering.",
    results: [
      "47% meer gekwalificeerde leads",
      "Verkorting van de verkoopcyclus met 22%",
      "31% hogere gemiddelde orderwaarde",
    ],
    image: "/case-study-b2b.png",
  },
  {
    title: "Startup Lancering",
    client: "GreenImpact",
    description: "Een succesvolle marktintroductie voor een duurzame startup met een sterke merkidentiteit.",
    results: [
      "Succesvolle financieringsronde van €2M",
      "89% merkherkenning binnen doelgroep",
      "Mediabereik van 1.2M in eerste kwartaal",
    ],
    image: "/case-study-startup.png",
  },
]

const faqs = [
  {
    question: "Wat is merkpositionering precies?",
    answer:
      "Merkpositionering is het strategisch proces waarbij je jouw merk op een unieke en waardevolle manier in de markt plaatst. Het gaat erom hoe je merk wordt waargenomen door je doelgroep in vergelijking met concurrenten. Een sterke merkpositionering communiceert duidelijk wat je merk uniek maakt, welke waarde het biedt en waarom klanten voor jouw merk zouden moeten kiezen.",
  },
  {
    question: "Waarom is merkpositionering belangrijk voor mijn bedrijf?",
    answer:
      "Een sterke merkpositionering helpt je om je te onderscheiden in een concurrerende markt, bouwt vertrouwen op bij je doelgroep, ondersteunt hogere prijsmarges, verhoogt klantloyaliteit en zorgt voor consistentie in je marketingcommunicatie. Het vormt de basis voor alle marketingactiviteiten en helpt bij het nemen van strategische beslissingen die in lijn zijn met je merkidentiteit.",
  },
  {
    question: "Hoe lang duurt een merkpositioneringstraject?",
    answer:
      "De duur van een merkpositioneringstraject varieert afhankelijk van de grootte van je bedrijf, de complexiteit van je markt en de huidige staat van je merk. Gemiddeld duurt een volledig traject 2-3 maanden, inclusief onderzoek, strategie-ontwikkeling en implementatieplan. De daadwerkelijke implementatie en het zien van resultaten kan 6-12 maanden duren, aangezien merkpositionering een langetermijnstrategie is.",
  },
  {
    question: "Wat is het verschil tussen merkpositionering en branding?",
    answer:
      "Merkpositionering is een onderdeel van branding. Branding omvat alle aspecten van je merkidentiteit, waaronder naam, logo, visuele stijl, tone of voice en merkwaarden. Merkpositionering richt zich specifiek op hoe je merk zich verhoudt tot concurrenten in de markt en in de perceptie van je doelgroep. Het bepaalt de unieke positie die je merk inneemt in de markt en in de gedachten van je klanten.",
  },
  {
    question: "Hoe meet je het succes van merkpositionering?",
    answer:
      "Het succes van merkpositionering kan worden gemeten met verschillende metrics, waaronder merkbekendheid, merkvoorkeur, merkassociaties, klantloyaliteit, marktaandeel, prijspremium, conversieratio's en ROI van marketingcampagnes. We stellen een meetplan op dat is afgestemd op je specifieke doelstellingen en gebruiken zowel kwantitatieve als kwalitatieve methoden om de impact van je merkpositionering te evalueren.",
  },
  {
    question: "Moeten we onze huidige merkidentiteit volledig veranderen?",
    answer:
      "Niet noodzakelijk. Merkpositionering gaat vaak meer om het verfijnen en versterken van je bestaande merkidentiteit dan om deze volledig te veranderen. We beginnen met een grondige analyse van je huidige merkpositie en bepalen vervolgens welke elementen behouden moeten blijven en welke aangepast moeten worden om je merk effectiever te positioneren. In sommige gevallen kan een volledige herpositionering nodig zijn, maar vaak gaat het om strategische aanpassingen die voortbouwen op je bestaande sterke punten.",
  },
  {
    question: "Werkt merkpositionering ook voor kleine bedrijven?",
    answer:
      "Absoluut! Merkpositionering is misschien zelfs nog belangrijker voor kleine bedrijven, omdat het hen helpt om zich te onderscheiden in markten die vaak worden gedomineerd door grotere spelers. Een duidelijke merkpositionering stelt kleine bedrijven in staat om een specifieke niche te targeten, een sterke band op te bouwen met hun doelgroep en effectiever te concurreren, zelfs met een beperkter budget.",
  },
]

const expertiseAreas = [
  {
    title: "Merkstrategie",
    description: "Ontwikkeling van onderscheidende merkpositionering en -strategie",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Marktonderzoek",
    description: "Diepgaande analyse van doelgroepen, concurrenten en markttrends",
    icon: <PieChart className="h-6 w-6" />,
  },
  {
    title: "Merkidentiteit",
    description: "Creatie van visuele en verbale merkidentiteit die resoneert met uw doelgroep",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: "Content Strategie",
    description: "Ontwikkeling van content die uw merkpositionering versterkt",
    icon: <LineChart className="h-6 w-6" />,
  },
  {
    title: "Implementatie",
    description: "Uitrol van merkpositionering over alle relevante kanalen en touchpoints",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: "Meting & Optimalisatie",
    description: "Continue monitoring en verbetering van merkprestaties",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
]

const industryApplications = [
  {
    industry: "E-commerce & Retail",
    description:
      "In de competitieve e-commerce en retailsector is een sterke merkpositionering essentieel om je te onderscheiden. We helpen retailers om een unieke merkidentiteit te ontwikkelen die resoneert met hun doelgroep, zowel online als offline.",
    icon: <ShoppingBag className="h-6 w-6" />,
    benefits: [
      "Verhoogde klantloyaliteit en herhalingsaankopen",
      "Sterkere online aanwezigheid en merkherkenning",
      "Mogelijkheid om premium prijzen te hanteren",
    ],
  },
  {
    industry: "B2B & Professionele Diensten",
    description:
      "Voor B2B-bedrijven en professionele dienstverleners is een duidelijke merkpositionering cruciaal om vertrouwen op te bouwen en je te onderscheiden in een markt waar diensten vaak als commodities worden gezien.",
    icon: <Building className="h-6 w-6" />,
    benefits: [
      "Verkorting van de verkoopcyclus door verhoogd vertrouwen",
      "Hogere kwaliteit leads en betere conversie",
      "Sterkere relaties met klanten en partners",
    ],
  },
  {
    industry: "Startups & Scale-ups",
    description:
      "Voor startups en scale-ups is een sterke merkpositionering vanaf het begin essentieel om snel marktaandeel te winnen en investeerders aan te trekken. We helpen je om een onderscheidende positie in te nemen in je markt.",
    icon: <Rocket className="h-6 w-6" />,
    benefits: [
      "Snellere marktacceptatie en gebruikersgroei",
      "Aantrekkelijker voor investeerders en partners",
      "Duidelijke richting voor product- en bedrijfsontwikkeling",
    ],
  },
  {
    industry: "Non-profit & Maatschappelijke Organisaties",
    description:
      "Voor non-profit en maatschappelijke organisaties helpt een sterke merkpositionering om je missie effectiever te communiceren, donateurs aan te trekken en je impact te vergroten.",
    icon: <Heart className="h-6 w-6" />,
    benefits: [
      "Verhoogde betrokkenheid van donateurs en vrijwilligers",
      "Sterkere band met de gemeenschap en belanghebbenden",
      "Effectievere communicatie van je missie en impact",
    ],
  },
]

const showcases = [
  {
    title: "Merkidentiteit Transformatie",
    client: "ATA Home & Design",
    description:
      "Strategische transformatie van een traditionele tegels en sanitair showroom naar een premium lifestyle merk. Door innovatieve merkpositionering en doelgerichte communicatie hebben we ATA Home & Design gevestigd als marktleider in duurzaam interieurdesign.",
    before: {
      image: "/atahome-oud.png",
      description: "Conventionele merkidentiteit zonder onderscheidend vermogen in een competitieve markt. Gefragmenteerde online presence en inconsistente communicatie naar potentiële klanten.",
    },
    after: {
      image: "/atahome-nextjs.png",
      description:
        "Premium lifestyle merk met krachtige visuele identiteit en heldere positionering in duurzaam design. Naadloze integratie van digitale en fysieke merkbeleving met focus op expertise en klanttevredenheid.",
    },
    results: [
      "85% stijging in online conversies binnen 6 maanden na implementatie",
      "45% toename in merkherkenning onder architecten en interieurontwerpers",
      "Lancering van 4 exclusieve duurzame collecties met 70% hogere winstmarges",
      "125% stijging in gemiddelde orderwaarde door verbeterde merkperceptie"
    ],
  },
  {
    title: "Digitale Transformatie",
    client: "XL Dranken",
    description:
      "Complete digitale transformatie voor Nederlandse drankengroothandel met geavanceerde ERP-integratie. Focus op gebruiksgemak en efficiënte orderverwerking voor B2B-klanten.",
    before: {
      image: "/showcase-before-2.png",
      description: "Verouderd bestelsysteem met beperkte functionaliteit en gebruikersonvriendelijke interface. Inefficiënte orderverwerking en beperkte analysemogelijkheden.",
    },
    after: {
      image: "/showcase-after-2.png",
      description:
        "Geavanceerd digital-first platform met realtime voorraadbeheer en gepersonaliseerde B2B-ervaring. Naadloze integratie met bestaande systemen en gebruiksvriendelijke interface.",
    },
    results: [
      "200% toename in online B2B-bestellingen binnen eerste kwartaal",
      "65% reductie in verwerkingstijd van orders door automatisering",
      "90% klanttevredenheid met nieuwe digitale platform",
      "45% groei in terugkerende klanten door verbeterde gebruikerservaring"
    ],
  },
  {
    title: "Internationale Merkstrategie",
    client: "HealthTech Solutions",
    description:
      "Ontwikkeling van een schaalbare internationale merkstrategie voor een innovatief healthtech bedrijf. Focus op lokale relevantie met behoud van globale merkwaarden en compliance-eisen.",
    before: {
      image: "/showcase-before-3.png",
      description: "Sterke nationale positie maar beperkte internationale merkstrategie. Uitdagingen met lokale marktbenadering en regelgeving in verschillende regio's.",
    },
    after: {
      image: "/showcase-after-3.png",
      description:
        "Geoptimaliseerde internationale merkarchitectuur met lokale relevantie en globale consistentie. Effectieve multichannel strategie aangepast aan regionale behoeften.",
    },
    results: [
      "Succesvolle expansie naar 7 Europese markten binnen 12 maanden",
      "95% merkherkenning behouden tijdens internationale uitbreiding",
      "40% snellere markttoetreding dan industriegemiddelde",
      "250% ROI op internationale merkstrategie binnen eerste jaar"
    ],
  }
]

const brandPositioningBenefits = [
  {
    title: "Onderscheidend vermogen",
    description:
      "Een sterke merkpositionering helpt je om je te onderscheiden in een verzadigde markt en een unieke plaats in te nemen in de gedachten van je doelgroep.",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Hogere prijsmarges",
    description:
      "Merken met een sterke positionering kunnen vaak hogere prijzen vragen omdat klanten bereid zijn meer te betalen voor merken die ze vertrouwen en waarderen.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "Consistente communicatie",
    description:
      "Een duidelijke merkpositionering zorgt voor consistentie in alle communicatie-uitingen, wat leidt tot een sterkere merkidentiteit en -herkenning.",
    icon: <Megaphone className="h-6 w-6" />,
  },
  {
    title: "Klantloyaliteit",
    description:
      "Een goed gepositioneerd merk bouwt sterkere emotionele banden op met klanten, wat leidt tot hogere loyaliteit en herhalingsaankopen.",
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: "Strategische focus",
    description:
      "Merkpositionering biedt een duidelijk kader voor strategische beslissingen, van productontwikkeling tot marketingcommunicatie.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Aantrekkingskracht talent",
    description:
      "Sterke merken trekken niet alleen klanten aan, maar ook toptalent dat zich identificeert met de waarden en missie van het merk.",
    icon: <Users className="h-6 w-6" />,
  },
]

const methodologyDetails = [
  {
    title: "Merkaudit & Analyse",
    description:
      "We beginnen met een grondige analyse van je huidige merkpositie, inclusief perceptie, associaties, sterke punten en verbeterpunten. We onderzoeken ook je concurrenten en de bredere marktcontext om kansen te identificeren.",
    steps: [
      "Analyse van huidige merkperceptie en -associaties",
      "Concurrentieanalyse en marktpositionering",
      "Identificatie van onderscheidende merkwaarden",
      "SWOT-analyse van je huidige merkpositie",
    ],
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Doelgroep & Marktonderzoek",
    description:
      "We voeren diepgaand onderzoek uit naar je doelgroep om hun behoeften, voorkeuren, pijnpunten en beslissingsproces te begrijpen. Dit helpt ons om een merkpositionering te ontwikkelen die echt resoneert met je publiek.",
    steps: [
      "Ontwikkeling van gedetailleerde klantpersona's",
      "Kwalitatief en kwantitatief doelgroeponderzoek",
      "Customer journey mapping",
      "Identificatie van klantbehoeften en -verwachtingen",
    ],
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Strategieontwikkeling",
    description:
      "Op basis van de inzichten uit de analyse- en onderzoeksfase ontwikkelen we een op maat gemaakte merkpositioneringsstrategie die je onderscheidt van concurrenten en resoneert met je doelgroep.",
    steps: [
      "Ontwikkeling van positioneringsstatement en merkbelofte",
      "Definitie van kernwaarden en merkpersoonlijkheid",
      "Creatie van merkarchitectuur en -hiërarchie",
      "Ontwikkeling van merkboodschap en communicatiestrategie",
    ],
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Creatieve Vertaling",
    description:
      "We vertalen de merkpositioneringsstrategie naar concrete creatieve elementen die je merk tot leven brengen, van visuele identiteit tot tone of voice en contentrichtlijnen.",
    steps: [
      "Ontwikkeling van visuele merkidentiteit",
      "Creatie van merkrichtlijnen en stijlgids",
      "Ontwikkeling van tone of voice en communicatiestijl",
      "Design van merkmateriaal en templates",
    ],
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "Implementatie & Activatie",
    description:
      "We ondersteunen je bij de implementatie van de nieuwe merkpositionering over alle relevante kanalen en touchpoints, van website en sociale media tot verpakkingen en interne communicatie.",
    steps: [
      "Ontwikkeling van implementatieplan en roadmap",
      "Uitrol over digitale en fysieke touchpoints",
      "Training van medewerkers en partners",
      "Ontwikkeling van lancerings- en activatiecampagnes",
    ],
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Meting & Optimalisatie",
    description:
      "We monitoren de resultaten van de nieuwe merkpositionering en optimaliseren waar nodig om maximale impact te realiseren. We gebruiken zowel kwantitatieve als kwalitatieve metrics om succes te meten.",
    steps: [
      "Ontwikkeling van KPI's en meetplan",
      "Regelmatige monitoring en rapportage",
      "A/B-testing en optimalisatie",
      "Periodieke merkaudits en bijsturing",
    ],
    icon: <LineChart className="h-6 w-6" />,
  },
]

function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const isDark = useTheme().theme === "dark"
  const isMobile = useMobile()

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const particles = Array.from({ length: 50 }, (_, i) => {
    const x = Math.random() * 100
    const y = Math.random() * 100
    const size = Math.random() * 4 + 1
    const speed = Math.random() * 0.5 + 0.2
    return { id: i, x, y, size, speed }
  })

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      onMouseMove={isMobile ? undefined : handleMouseMove}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full grid grid-cols-12 grid-rows-6">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/20"></div>
          ))}
        </div>
      </div>

      {/* 3D Interactive Elements */}
      <div className="absolute inset-0">
        {particles.map((particle) => {
          // Calculate distance from mouse
          const dx = mousePosition.x / dimensions.width - particle.x / 100
          const dy = mousePosition.y / dimensions.height - particle.y / 100
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Calculate movement based on mouse position
          const moveX = distance > 0 ? (dx / distance) * 20 : 0
          const moveY = distance > 0 ? (dy / distance) * 20 : 0

          // Apply movement only if mouse is active and not on mobile
          const translateX = isMobile ? 0 : moveX * particle.speed
          const translateY = isMobile ? 0 : moveY * particle.speed

          return (
            <div
              key={particle.id}
              className={`absolute rounded-full ${
                isDark ? "bg-[#a6e267]" : "bg-[#2C4725]"
              } opacity-${Math.floor(particle.size * 10)}`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                transform: `translate(${translateX}px, ${translateY}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />
          )
        })}
      </div>

      {/* Glowing orbs with interactive movement */}
      <div
        className={`absolute w-64 h-64 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow ${
          isDark ? "bg-[#a6e267]" : "bg-[#2C4725]"
        }`}
        style={{
          left: `${dimensions.width * 0.7 - 128 + (isMobile ? 0 : (mousePosition.x - dimensions.width / 2) * 0.02)}px`,
          top: `${dimensions.height * 0.3 - 128 + (isMobile ? 0 : (mousePosition.y - dimensions.height / 2) * 0.02)}px`,
          transition: "left 0.5s ease-out, top 0.5s ease-out",
        }}
      />
      <div
        className={`absolute w-96 h-96 rounded-full filter blur-[120px] opacity-10 animate-pulse-slower ${
          isDark ? "bg-[#2C4725]" : "bg-[#a6e267]"
        }`}
        style={{
          left: `${dimensions.width * 0.3 - 192 - (isMobile ? 0 : (mousePosition.x - dimensions.width / 2) * 0.03)}px`,
          top: `${dimensions.height * 0.7 - 192 - (isMobile ? 0 : (mousePosition.y - dimensions.height / 2) * 0.03)}px`,
          transition: "left 0.5s ease-out, top 0.5s ease-out",
        }}
      />
    </div>
  )
}

function ParallaxHero() {
  const { scrollY } = useScroll()

  // Create parallax effect for different elements
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const contentY = useTransform(scrollY, [0, 500], [0, -50])
  const opacityHeader = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <>
      {/* Parallax Background with Interactive Elements */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <InteractiveBackground />
      </motion.div>

      {/* Content with opposite parallax effect */}
      <motion.div
        className="container mx-auto px-4 h-full flex items-center relative z-10"
        style={{ y: contentY, opacity: opacityHeader }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="md:w-7/12 mb-8 md:mb-0 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 bg-[#a6e267]/20 text-[#a6e267] border border-[#a6e267]/30">
              Wat we doen
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Wij laten jouw merk
              <span className="block">online winnen</span>
            </h1>

            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="mr-2">
                <svg viewBox="0 0 24 24" width="20" height="20" className="text-[#a6e267]">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
                  />
                </svg>
              </div>
              <span className="text-sm">Onze klanten beoordelen ons met een 4,9</span>
              <div className="flex ml-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-sm">150+ reviews</span>
            </div>
          </div>

          <div className="md:w-4/12">
            <p className="text-lg mb-6 text-white/80 text-center md:text-left">
              Wij realiseren groei voor jouw organisatie door
              <span className="block text-[#a6e267] font-medium">branding, websites en marketing.</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 font-medium rounded-full bg-[#a6e267] text-[#2C4725] hover:bg-[#95cc5a] transition-colors"
              >
                Contact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center px-6 py-3 font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors"
              >
                Bekijk cases
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#2C4725] z-10"></div>
    </>
  )
}

function FAQ({
  question,
  answer,
  isOpen,
  onClick,
}: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-[#2C4725]/20 dark:border-white/20 last:border-0">
      <button className="flex justify-between items-center w-full py-5 text-left" onClick={onClick}>
        <h3 className="text-lg font-medium">{question}</h3>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[#2C4725]/70 dark:text-white/70">{answer}</p>
      </div>
    </div>
  )
}

function ShowcaseCard({ showcase, isDark }: { showcase: (typeof showcases)[0]; isDark: boolean }) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-500",
        isDark
          ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267] hover:shadow-[0_0_20px_rgba(166,226,103,0.3)]"
          : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725] hover:shadow-[0_0_20px_rgba(45,70,37,0.2)]",
      )}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className={cn("text-xl font-medium", isDark ? "text-white" : "text-[#2C4725]")}>{showcase.title}</h3>
          <span
            className={cn(
              "text-sm px-2 py-1 rounded-full",
              isDark ? "bg-[#2C4725] text-[#a6e267]" : "bg-[#a6e267] text-[#2C4725]",
            )}
          >
            {showcase.client}
          </span>
        </div>
        <p className={cn("mb-6", isDark ? "text-white/70" : "text-[#2C4725]/70")}>{showcase.description}</p>
      </div>

      <div className="relative">
        <div className="flex justify-center items-center mb-4 px-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setShowAfter(false)}
              className={cn(
                "px-4 py-2 rounded-l-lg transition-colors",
                !showAfter
                  ? isDark
                    ? "bg-[#2C4725] text-white"
                    : "bg-[#a6e267] text-[#2C4725]"
                  : isDark
                    ? "bg-[#1a1a1a] text-white/70"
                    : "bg-white/50 text-[#2C4725]/70",
              )}
            >
              Voor
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={cn(
                "px-4 py-2 rounded-r-lg transition-colors",
                showAfter
                  ? isDark
                    ? "bg-[#2C4725] text-white"
                    : "bg-[#a6e267] text-[#2C4725]"
                  : isDark
                    ? "bg-[#1a1a1a] text-white/70"
                    : "bg-white/50 text-[#2C4725]/70",
              )}
            >
              Na
            </button>
          </div>
        </div>

        <div className="relative h-64 overflow-hidden">
          <motion.div
            initial={false}
            animate={{ opacity: showAfter ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={showcase.before.image || `/placeholder.svg?height=400&width=600&query=before brand positioning`}
              alt={`${showcase.client} before`}
              fill
              className="object-cover"
            />
            <div className={cn("absolute bottom-0 left-0 right-0 p-4", isDark ? "bg-black/60" : "bg-white/60")}>
              <p className={cn("text-sm", isDark ? "text-white" : "text-[#2C4725]")}>
                <strong>Voor:</strong> {showcase.before.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: showAfter ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={showcase.after.image || `/placeholder.svg?height=400&width=600&query=after brand positioning`}
              alt={`${showcase.client} after`}
              fill
              className="object-cover"
            />
            <div className={cn("absolute bottom-0 left-0 right-0 p-4", isDark ? "bg-black/60" : "bg-white/60")}>
              <p className={cn("text-sm", isDark ? "text-white" : "text-[#2C4725]")}>
                <strong>Na:</strong> {showcase.after.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <h4 className={cn("text-lg font-medium mb-3", isDark ? "text-white" : "text-[#2C4725]")}>Resultaten:</h4>
        <ul className="space-y-2">
          {showcase.results.map((result, i) => (
            <li key={i} className="flex items-start">
              <Check
                className={cn("h-5 w-5 mr-2 flex-shrink-0 mt-0.5", isDark ? "text-[#a6e267]" : "text-[#2C4725]")}
              />
              <span className={cn("text-sm", isDark ? "text-white/70" : "text-[#2C4725]/70")}>{result}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function MerkpositioneringSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(".animatable")
    animatableElements.forEach((el) => observer.observe(el))

    return () => {
      animatableElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <>
      {/* Hero Section with Parallax - REDUCED HEIGHT */}
      <section className="bg-[#2C4725] text-white relative overflow-hidden h-[80vh]">
        <ParallaxHero />
      </section>

      {/* Rest of the content */}
      <section
        ref={sectionRef}
        className={cn(
          "py-24 relative overflow-hidden",
          isDark ? "bg-[#1a2a18] text-white" : "bg-[#f5f9f3] text-[#2C4725]",
        )}
      >
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Merkpositionering",
              description:
                "Professionele merkpositionering diensten om uw merk te versterken en uw marktpositie te verbeteren.",
              provider: {
                "@type": "Organization",
                name: "Multichoiceagency",
                url: "https://www.multichoiceagency.nl",
              },
              serviceType: "Brand Positioning",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full grid grid-cols-12 grid-rows-6">
              {Array.from({ length: 72 }).map((_, i) => (
                <div
                  key={i}
                  className={cn("border-[0.5px]", isDark ? "border-[#a6e267]/20" : "border-[#2C4725]/20")}
                ></div>
              ))}
            </div>
          </div>

          {/* Glowing orbs */}
          <div
            className={cn(
              "absolute top-1/4 right-1/4 w-64 h-64 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow",
              isDark ? "bg-[#2C4725]" : "bg-[#a6e267]",
            )}
          ></div>
          <div
            className={cn(
              "absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full filter blur-[120px] opacity-10 animate-pulse-slower",
              isDark ? "bg-[#a6e267]" : "bg-[#2C4725]",
            )}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 animatable fade-in-up">
            <span className={cn("block text-sm font-medium mb-1", isDark ? "text-[#a6e267]" : "text-[#2C4725]")}>
              Strategisch & Effectief
            </span>
            <h2
              className={cn(
                "text-4xl md:text-5xl font-bold mb-6 relative inline-block",
                isDark ? "text-white" : "text-[#2C4725]",
              )}
            >
              Merkpositionering
              <div
                className={cn(
                  "absolute -bottom-2 left-0 h-[2px] w-1/3 bg-gradient-to-r",
                  isDark ? "from-[#a6e267] to-transparent" : "from-[#2C4725] to-transparent",
                )}
              ></div>
            </h2>
            <div
              className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium my-4 border",
                isDark
                  ? "bg-[#2C4725]/50 text-[#a6e267] border-[#a6e267]/30"
                  : "bg-[#a6e267]/30 text-[#2C4725] border-[#2C4725]/30",
              )}
            >
              <Check className="h-4 w-4 mr-2" />
              <span className="relative">Merkpositionering Experts</span>
            </div>
            <p className={cn("text-lg", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
              Ontdek hoe Multichoiceagency uw merk versterkt, uw marktpositie verbetert en uw bedrijf laat groeien in
              een competitieve markt.
            </p>
          </div>

          {/* Introduction Section */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                  Wat is merkpositionering?
                </h3>
                <p className={cn("mb-4", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                  Merkpositionering is het strategische proces waarbij je jouw merk op een unieke en waardevolle manier
                  in de markt plaatst. Het gaat om het creëren van een onderscheidende positie in de gedachten van je
                  doelgroep, waardoor je merk de voorkeur krijgt boven concurrenten.
                </p>
                <p className={cn("mb-4", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                  Een sterke merkpositionering is gebaseerd op een diepgaand begrip van je doelgroep, je concurrenten en
                  je eigen unieke waardepropositie. Het vormt de basis voor alle marketingactiviteiten en helpt bij het
                  nemen van strategische beslissingen die in lijn zijn met je merkidentiteit.
                </p>
                <p className={cn(isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                  Bij Multichoiceagency helpen we je om een krachtige merkpositionering te ontwikkelen die resoneert met
                  je doelgroep, je onderscheidt van concurrenten en je bedrijf laat groeien in een competitieve markt.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-80 md:h-96"
              >
                <Image
                  src="/brand-positioning-diagram.png"
                  alt="Merkpositionering diagram"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "p-6 rounded-xl text-center transition-all duration-300 hover:scale-105",
                  isDark
                    ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267]"
                    : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725]",
                )}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={cn(
                      "p-3 rounded-full",
                      isDark ? "bg-[#2C4725] text-[#a6e267]" : "bg-[#a6e267] text-[#2C4725]",
                    )}
                  >
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className={cn("text-sm", isDark ? "text-white/70" : "text-[#2C4725]/70")}>{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Features */}
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24 animatable fade-in-up",
                index % 2 === 1 ? "md:flex-row-reverse" : "",
                index === 0 ? "delay-1" : index === 1 ? "delay-2" : "delay-3",
              )}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={cn("order-2 md:order-1", index % 2 === 1 ? "md:order-2" : "md:order-1")}
              >
                <div
                  className={cn(
                    "rounded-xl overflow-hidden p-6 group transition-all duration-500",
                    isDark
                      ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267] hover:shadow-[0_0_20px_rgba(166,226,103,0.3)]"
                      : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725] hover:shadow-[0_0_20px_rgba(45,70,37,0.2)]",
                  )}
                >
                  {/* Video showcase */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-auto rounded-lg">
                      <source src={feature.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {feature.id === "market-analysis" && (
                    <div
                      className={cn(
                        "p-4 rounded-lg",
                        isDark ? "bg-[#2C4725] text-white" : "bg-[#f0f7eb] text-[#2C4725]",
                      )}
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Merkanalyse Dashboard</h4>
                        <p className={isDark ? "text-white/80 text-sm" : "text-[#2C4725]/80 text-sm"}>
                          Inzichten en prestatie-indicatoren voor uw merk
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex justify-between items-center mb-2">
                            <span className={isDark ? "text-sm text-white/80" : "text-sm text-[#2C4725]/80"}>
                              Merkbekendheid
                            </span>
                            <span className={isDark ? "text-sm text-green-300" : "text-sm text-green-600"}>+24%</span>
                          </div>
                          <div className={cn("h-2 rounded-full mb-1", isDark ? "bg-white/20" : "bg-[#2C4725]/10")}>
                            <div
                              className={cn("h-2 rounded-full w-3/4", isDark ? "bg-green-400" : "bg-green-600")}
                            ></div>
                          </div>
                          <p className="text-lg font-medium">72%</p>
                        </div>
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex justify-between items-center mb-2">
                            <span className={isDark ? "text-sm text-white/80" : "text-sm text-[#2C4725]/80"}>
                              Merkvoorkeur
                            </span>
                            <span className={isDark ? "text-sm text-green-300" : "text-sm text-green-600"}>+12%</span>
                          </div>
                          <div className={cn("h-2 rounded-full mb-1", isDark ? "bg-white/20" : "bg-[#2C4725]/10")}>
                            <div
                              className={cn("h-2 rounded-full w-1/2", isDark ? "bg-green-400" : "bg-green-600")}
                            ></div>
                          </div>
                          <p className="text-lg font-medium">38%</p>
                        </div>
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex justify-between items-center mb-2">
                            <span className={isDark ? "text-sm text-white/80" : "text-sm text-[#2C4725]/80"}>
                              Merkassociaties
                            </span>
                            <span className={isDark ? "text-sm text-green-300" : "text-sm text-green-600"}>+18%</span>
                          </div>
                          <div className={cn("h-2 rounded-full mb-1", isDark ? "bg-white/20" : "bg-[#2C4725]/10")}>
                            <div
                              className={cn("h-2 rounded-full w-2/3", isDark ? "bg-green-400" : "bg-green-600")}
                            ></div>
                          </div>
                          <p className="text-lg font-medium">85%</p>
                        </div>
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex justify-between items-center mb-2">
                            <span className={isDark ? "text-sm text-white/80" : "text-sm text-[#2C4725]/80"}>
                              Merktrouw
                            </span>
                            <span className={isDark ? "text-sm text-green-300" : "text-sm text-green-600"}>+8%</span>
                          </div>
                          <div className={cn("h-2 rounded-full mb-1", isDark ? "bg-white/20" : "bg-[#2C4725]/10")}>
                            <div
                              className={cn("h-2 rounded-full w-2/5", isDark ? "bg-green-400" : "bg-green-600")}
                            ></div>
                          </div>
                          <p className="text-lg font-medium">67%</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.id === "content-strategy" && (
                    <div
                      className={cn(
                        "p-4 rounded-lg",
                        isDark ? "bg-[#2C4725] text-white" : "bg-[#f0f7eb] text-[#2C4725]",
                      )}
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Content Strategie</h4>
                        <p className={isDark ? "text-white/80 text-sm" : "text-[#2C4725]/80 text-sm"}>
                          Professionele content op maat van uw merk
                        </p>
                      </div>
                      <div className={cn("p-4 rounded-lg mb-4", isDark ? "bg-white/10" : "bg-white/50")}>
                        <div className="flex items-center mb-3">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                              isDark ? "bg-white/20" : "bg-[#2C4725]/20",
                            )}
                          >
                            <Check className={isDark ? "h-4 w-4 text-white" : "h-4 w-4 text-[#2C4725]"} />
                          </div>
                          <span className={isDark ? "text-sm text-white/80" : "text-sm text-[#2C4725]/80"}>
                            Merkgerichte content strategie
                          </span>
                        </div>
                        <div className="flex gap-2 mb-3">
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-sm",
                              isDark ? "bg-white/20" : "bg-[#2C4725]/10 text-[#2C4725]",
                            )}
                          >
                            Social media
                          </span>
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-sm",
                              isDark ? "bg-[#a6e267] text-[#2C4725]" : "bg-[#2C4725] text-white",
                            )}
                          >
                            Website
                          </span>
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-sm",
                              isDark ? "bg-white/20" : "bg-[#2C4725]/10 text-[#2C4725]",
                            )}
                          >
                            E-mail
                          </span>
                        </div>
                        <div
                          className={cn(
                            "p-3 rounded-lg border",
                            isDark
                              ? "bg-white/5 border-white/10 text-sm text-white/90"
                              : "bg-white/70 border-[#2C4725]/10 text-sm text-[#2C4725]/90",
                          )}
                        >
                          <p>
                            Ontdek hoe onze innovatieve oplossingen uw bedrijf naar een hoger niveau kunnen tillen. Met
                            jarenlange ervaring en een team van experts staan wij klaar om u te helpen groeien in een
                            digitale wereld.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button
                          className={cn(
                            "px-3 py-1 rounded-lg text-sm transition-colors",
                            isDark
                              ? "bg-white/10 hover:bg-white/20"
                              : "bg-[#2C4725]/10 hover:bg-[#2C4725]/20 text-[#2C4725]",
                          )}
                        >
                          Voorbeelden bekijken
                        </button>
                        <button
                          className={cn(
                            "px-3 py-1 rounded-lg text-sm transition-colors",
                            isDark
                              ? "bg-[#a6e267] hover:bg-[#95cc5a] text-[#2C4725]"
                              : "bg-[#2C4725] hover:bg-[#1b5a1e] text-white",
                          )}
                        >
                          Meer info
                        </button>
                      </div>
                    </div>
                  )}

                  {feature.id === "customer-experience" && (
                    <div
                      className={cn(
                        "p-4 rounded-lg",
                        isDark ? "bg-[#2C4725] text-white" : "bg-[#f0f7eb] text-[#2C4725]",
                      )}
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Klantbeleving Strategie</h4>
                        <p className={isDark ? "text-white/80 text-sm" : "text-[#2C4725]/80 text-sm"}>
                          Versterk uw merkbeleving bij klanten
                        </p>
                      </div>
                      <div className={cn("p-4 rounded-lg mb-4", isDark ? "bg-white/10" : "bg-white/50")}>
                        <div className="flex justify-end mb-3">
                          <div
                            className={cn(
                              "px-3 py-2 rounded-lg rounded-tr-none max-w-[80%]",
                              isDark ? "bg-white/20" : "bg-[#2C4725]/10",
                            )}
                          >
                            <p className="text-sm">Wat maakt jullie merk uniek?</p>
                          </div>
                        </div>
                        <div className="flex mb-3">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center mr-2",
                              isDark ? "bg-[#a6e267]" : "bg-[#2C4725]",
                            )}
                          >
                            <Check className={isDark ? "h-4 w-4 text-[#2C4725]" : "h-4 w-4 text-white"} />
                          </div>
                          <div
                            className={cn(
                              "px-3 py-2 rounded-lg rounded-tl-none max-w-[80%]",
                              isDark ? "bg-[#a6e267] text-[#2C4725]" : "bg-[#2C4725] text-white",
                            )}
                          >
                            <p className="text-sm">
                              Ons merk onderscheidt zich door persoonlijke aandacht, expertise en innovatieve
                              oplossingen die perfect aansluiten bij de behoeften van onze klanten. We streven naar
                              langdurige relaties gebaseerd op vertrouwen en resultaten.
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div
                            className={cn(
                              "px-3 py-2 rounded-lg rounded-tr-none max-w-[80%]",
                              isDark ? "bg-white/20" : "bg-[#2C4725]/10",
                            )}
                          >
                            <p className="text-sm">Dat klinkt goed, dank je wel!</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "flex items-center rounded-lg p-2 border",
                          isDark ? "bg-white/5 border-white/10" : "bg-white/70 border-[#2C4725]/10",
                        )}
                      >
                        <input
                          type="text"
                          placeholder="Stel een vraag over merkbeleving..."
                          className={cn(
                            "bg-transparent border-0 outline-none flex-1 text-sm",
                            isDark ? "text-white" : "text-[#2C4725]",
                          )}
                        />
                        <button
                          className={cn(
                            "p-2 rounded-lg",
                            isDark ? "bg-[#a6e267] text-[#2C4725]" : "bg-[#2C4725] text-white",
                          )}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={cn("order-1 md:order-2", index % 2 === 1 ? "md:order-1" : "md:order-2")}
              >
                <div className="flex items-start mb-4">
                  <div className={cn("p-2 rounded-lg mr-4", feature.color)}>{feature.icon}</div>
                  <span className={cn("text-sm font-medium", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                    Merkpositionering
                  </span>
                </div>

                <h3 className={cn("text-2xl font-medium mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                  {feature.title}
                </h3>

                <p className={cn("mb-6", isDark ? "text-white/70" : "text-[#2C4725]/70")}>{feature.description}</p>

                <ul className="space-y-3 mb-8">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <div
                        className={cn(
                          "flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3",
                          isDark ? "bg-[#2C4725]" : "bg-[#a6e267]",
                        )}
                      >
                        <Check className={isDark ? "h-4 w-4 text-[#a6e267]" : "h-4 w-4 text-[#2C4725]"} />
                      </div>
                      <span className={isDark ? "text-white/70" : "text-[#2C4725]/70"}>
                        {feature.id === "market-analysis" &&
                          item === 1 &&
                          "Diepgaande analyse van uw huidige merkpositie"}
                        {feature.id === "market-analysis" &&
                          item === 2 &&
                          "Identificatie van onderscheidende merkwaarden"}
                        {feature.id === "market-analysis" &&
                          item === 3 &&
                          "Strategisch advies voor optimale positionering"}

                        {feature.id === "content-strategy" &&
                          item === 1 &&
                          "Content afgestemd op uw doelgroep en branding"}
                        {feature.id === "content-strategy" &&
                          item === 2 &&
                          "SEO-geoptimaliseerde teksten voor betere vindbaarheid"}
                        {feature.id === "content-strategy" &&
                          item === 3 &&
                          "Consistente communicatie over alle kanalen"}

                        {feature.id === "customer-experience" && item === 1 && "Klantgerichte merkbeleving strategie"}
                        {feature.id === "customer-experience" &&
                          item === 2 &&
                          "Training van medewerkers in merkwaarden en -communicatie"}
                        {feature.id === "customer-experience" &&
                          item === 3 &&
                          "Meetbare verbetering van klantloyaliteit en merkperceptie"}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={feature.tryLink}
                  className={cn(
                    "inline-flex items-center px-6 py-3 font-medium rounded-full transition-colors duration-300",
                    isDark
                      ? "bg-[#2C4725] hover:bg-[#1b5a1e] text-white"
                      : "bg-[#a6e267] hover:bg-[#95cc5a] text-[#2C4725]",
                  )}
                >
                  Meer informatie
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          ))}

          {/* Brand Positioning Benefits */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Voordelen van Merkpositionering
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Ontdek waarom een sterke merkpositionering essentieel is voor het succes van je bedrijf
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandPositioningBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "p-6 rounded-xl transition-all duration-300 hover:scale-105 group",
                    isDark
                      ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267]"
                      : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725]",
                  )}
                >
                  <div
                    className={cn(
                      "p-3 rounded-full inline-flex mb-4 transition-colors duration-300",
                      isDark
                        ? "bg-[#2C4725] text-[#a6e267] group-hover:bg-[#a6e267] group-hover:text-[#2C4725]"
                        : "bg-[#a6e267] text-[#2C4725] group-hover:bg-[#2C4725] group-hover:text-[#a6e267]",
                    )}
                  >
                    {benefit.icon}
                  </div>
                  <h4 className={cn("text-xl font-medium mb-2", isDark ? "text-white" : "text-[#2C4725]")}>
                    {benefit.title}
                  </h4>
                  <p className={cn(isDark ? "text-white/70" : "text-[#2C4725]/70")}>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Showcases Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Merkpositionering Showcases
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Bekijk hoe we merken hebben getransformeerd met effectieve merkpositionering
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {showcases.map((showcase, index) => (
                <ShowcaseCard key={index} showcase={showcase} isDark={isDark} />
              ))}
            </div>
          </div>

          {/* Process Steps Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>Ons Proces</h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Een systematische aanpak voor het versterken van uw merkpositionering
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "p-6 rounded-xl relative transition-all duration-300 hover:scale-105",
                    isDark
                      ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267]"
                      : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725]",
                  )}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={cn(
                        "p-3 rounded-full mr-4",
                        isDark ? "bg-[#2C4725] text-[#a6e267]" : "bg-[#a6e267] text-[#2C4725]",
                      )}
                    >
                      {step.icon}
                    </div>
                    <span className={cn("text-4xl font-bold", isDark ? "text-white/20" : "text-[#2C4725]/20")}>
                      {step.number}
                    </span>
                  </div>
                  <h4 className={cn("text-xl font-medium mb-2", isDark ? "text-white" : "text-[#2C4725]")}>
                    {step.title}
                  </h4>
                  <p className={cn(isDark ? "text-white/70" : "text-[#2C4725]/70")}>{step.description}</p>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className={cn("h-6 w-6", isDark ? "text-[#a6e267]" : "text-[#2C4725]")} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Methodology Details */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Onze Methodologie
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Een diepgaande kijk in onze merkpositionering methodologie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {methodologyDetails.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "p-6 rounded-xl transition-all duration-300",
                    isDark
                      ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267]"
                      : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725]",
                  )}
                >
                  <div className="flex items-start mb-4">
                    <div
                      className={cn(
                        "p-3 rounded-full mr-4 flex-shrink-0",
                        isDark ? "bg-[#2C4725] text-[#a6e267]" : "bg-[#a6e267] text-[#2C4725]",
                      )}
                    >
                      {method.icon}
                    </div>
                    <div>
                      <h4 className={cn("text-xl font-medium mb-2", isDark ? "text-white" : "text-[#2C4725]")}>
                        {method.title}
                      </h4>
                      <p className={cn("mb-4", isDark ? "text-white/70" : "text-[#2C4725]/70")}>{method.description}</p>
                    </div>
                  </div>
                  <div className={cn("p-4 rounded-lg", isDark ? "bg-black/20" : "bg-[#f0f7eb]")}>
                    <h5 className={cn("text-sm font-medium mb-2", isDark ? "text-white/90" : "text-[#2C4725]/90")}>
                      Stappen:
                    </h5>
                    <ul className="space-y-2">
                      {method.steps.map((step, i) => (
                        <li key={i} className="flex items-start">
                          <Check
                            className={cn(
                              "h-4 w-4 mr-2 flex-shrink-0 mt-0.5",
                              isDark ? "text-[#a6e267]" : "text-[#2C4725]",
                            )}
                          />
                          <span className={cn("text-sm", isDark ? "text-white/70" : "text-[#2C4725]/70")}>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industry Applications */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Toepassingen per Sector
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Hoe merkpositionering verschillende sectoren helpt groeien
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industryApplications.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "p-6 rounded-xl transition-all duration-300",
                    isDark
                      ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267]"
                      : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725]",
                  )}
                >
                  <div className="flex items-start mb-4">
                    <div
                      className={cn(
                        "p-3 rounded-full mr-4 flex-shrink-0",
                        isDark ? "bg-[#2C4725] text-[#a6e267]" : "bg-[#a6e267] text-[#2C4725]",
                      )}
                    >
                      {industry.icon}
                    </div>
                    <div>
                      <h4 className={cn("text-xl font-medium mb-2", isDark ? "text-white" : "text-[#2C4725]")}>
                        {industry.industry}
                      </h4>
                      <p className={cn("mb-4", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                        {industry.description}
                      </p>
                    </div>
                  </div>
                  <div className={cn("p-4 rounded-lg", isDark ? "bg-black/20" : "bg-[#f0f7eb]")}>
                    <h5 className={cn("text-sm font-medium mb-2", isDark ? "text-white/90" : "text-[#2C4725]/90")}>
                      Voordelen:
                    </h5>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check
                            className={cn(
                              "h-4 w-4 mr-2 flex-shrink-0 mt-0.5",
                              isDark ? "text-[#a6e267]" : "text-[#2C4725]",
                            )}
                          />
                          <span className={cn("text-sm", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Onze Expertise
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Specialistische kennis en ervaring in alle aspecten van merkpositionering
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "p-6 rounded-xl transition-all duration-300 hover:scale-105 group",
                    isDark
                      ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267]"
                      : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725]",
                  )}
                >
                  <div
                    className={cn(
                      "p-3 rounded-full inline-flex mb-4 transition-colors duration-300",
                      isDark
                        ? "bg-[#2C4725] text-[#a6e267] group-hover:bg-[#a6e267] group-hover:text-[#2C4725]"
                        : "bg-[#a6e267] text-[#2C4725] group-hover:bg-[#2C4725] group-hover:text-[#a6e267]",
                    )}
                  >
                    {area.icon}
                  </div>
                  <h4 className={cn("text-xl font-medium mb-2", isDark ? "text-white" : "text-[#2C4725]")}>
                    {area.title}
                  </h4>
                  <p className={cn(isDark ? "text-white/70" : "text-[#2C4725]/70")}>{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>Case Studies</h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Ontdek hoe we bedrijven hebben geholpen met effectieve merkpositionering
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "rounded-xl overflow-hidden transition-all duration-500 group",
                    isDark
                      ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267] hover:shadow-[0_0_20px_rgba(166,226,103,0.3)]"
                      : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725] hover:shadow-[0_0_20px_rgba(45,70,37,0.2)]",
                  )}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={
                        caseStudy.image ||
                        `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(caseStudy.title) || "/placeholder.svg"}`
                      }
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
                        isDark ? "bg-black/40" : "bg-white/40",
                      )}
                    >
                      <div className={cn("p-3 rounded-full", isDark ? "bg-white/20" : "bg-black/20")}>
                        <ArrowRight className={cn("h-6 w-6", isDark ? "text-white" : "text-black")} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={cn("text-xl font-medium", isDark ? "text-white" : "text-[#2C4725]")}>
                        {caseStudy.title}
                      </h4>
                      <span
                        className={cn(
                          "text-sm px-2 py-1 rounded-full",
                          isDark ? "bg-[#2C4725] text-[#a6e267]" : "bg-[#a6e267] text-[#2C4725]",
                        )}
                      >
                        {caseStudy.client}
                      </span>
                    </div>
                    <p className={cn("mb-4", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                      {caseStudy.description}
                    </p>
                    <div className={cn("p-4 rounded-lg", isDark ? "bg-black/20" : "bg-[#f0f7eb]")}>
                      <h5 className={cn("text-sm font-medium mb-2", isDark ? "text-white/90" : "text-[#2C4725]/90")}>
                        Resultaten:
                      </h5>
                      <ul className="space-y-1">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <Check
                              className={cn(
                                "h-4 w-4 mr-2 flex-shrink-0 mt-0.5",
                                isDark ? "text-[#a6e267]" : "text-[#2C4725]",
                              )}
                            />
                            <span className={cn("text-sm", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Wat onze klanten zeggen
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Ontdek hoe wij bedrijven hebben geholpen hun merkpositionering te versterken
              </p>
            </div>

            <div className="relative">
              <button
                onClick={prevTestimonial}
                className={cn(
                  "absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 p-2 rounded-full",
                  isDark
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-[#2C4725]/10 hover:bg-[#2C4725]/20 text-[#2C4725]",
                )}
              >
                <ChevronRight className="h-5 w-5 rotate-180" />
              </button>

              <button
                onClick={nextTestimonial}
                className={cn(
                  "absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 p-2 rounded-full",
                  isDark
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-[#2C4725]/10 hover:bg-[#2C4725]/20 text-[#2C4725]",
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="overflow-hidden">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "p-8 rounded-xl",
                    isDark ? "bg-[#1a1a1a]/80 border border-[#333333]" : "bg-white/80 border border-[#e0e0e0]",
                  )}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#a6e267]/20">
                        <Image
                          src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                          alt={testimonials[activeTestimonial].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-5 h-5 mr-1",
                              i < testimonials[activeTestimonial].rating
                                ? "text-yellow-400 fill-current"
                                : isDark
                                  ? "text-white/20"
                                  : "text-[#2C4725]/20",
                            )}
                          />
                        ))}
                      </div>
                      <p className={cn("text-lg italic mb-4", isDark ? "text-white/90" : "text-[#2C4725]/90")}>
                        "{testimonials[activeTestimonial].text}"
                      </p>
                      <div>
                        <h4 className={cn("font-bold", isDark ? "text-white" : "text-[#2C4725]")}>
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className={isDark ? "text-white/70" : "text-[#2C4725]/70"}>
                          {testimonials[activeTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      activeTestimonial === index
                        ? isDark
                          ? "bg-[#a6e267]"
                          : "bg-[#2C4725]"
                        : isDark
                          ? "bg-white/30"
                          : "bg-[#2C4725]/30",
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Veelgestelde vragen
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Antwoorden op de meest gestelde vragen over merkpositionering
              </p>
            </div>

            <div
              className={cn(
                "rounded-xl p-6",
                isDark ? "bg-[#1a1a1a]/80 border border-[#333333]" : "bg-white/80 border border-[#e0e0e0]",
              )}
            >
              {faqs.map((faq, index) => (
                <FAQ
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={activeFaq === index}
                  onClick={() => toggleFaq(index)}
                />
              ))}
            </div>
          </div>

          {/* Mini Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {miniFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "rounded-xl p-6 transition-all duration-500 group",
                  isDark
                    ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267] hover:shadow-[0_0_20px_rgba(166,226,103,0.3)]"
                    : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725] hover:shadow-[0_0_20px_rgba(45,70,37,0.2)]",
                )}
              >
                <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={feature.imageSrc || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div
                    className={cn(
                      "p-2 rounded-lg mr-3 transition-colors duration-300",
                      feature.color,
                      isDark ? "group-hover:bg-[#2C4725]" : "group-hover:bg-[#a6e267]",
                    )}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className={cn(
                      "text-lg font-medium transition-colors duration-300",
                      isDark ? "text-white group-hover:text-[#a6e267]" : "text-[#2C4725] group-hover:text-[#2C4725]",
                    )}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p
                  className={cn(
                    "transition-colors duration-300",
                    isDark
                      ? "text-white/60 group-hover:text-white/80"
                      : "text-[#2C4725]/60 group-hover:text-[#2C4725]/80",
                  )}
                >
                  {feature.description}
                </p>
                <div
                  className={cn(
                    "mt-3 h-[1px] w-0 group-hover:w-full transition-all duration-700 ease-in-out",
                    isDark ? "bg-[#a6e267]" : "bg-[#2C4725]",
                  )}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn(
              "rounded-2xl p-8 md:p-12 text-center transition-all duration-500 group relative overflow-hidden",
              isDark
                ? "bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#a6e267] hover:shadow-[0_0_20px_rgba(166,226,103,0.3)]"
                : "bg-white/80 border border-[#e0e0e0] hover:border-[#2C4725] hover:shadow-[0_0_20px_rgba(45,70,37,0.2)]",
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                isDark ? "from-[#2C4725]/40 to-transparent" : "from-[#a6e267]/40 to-transparent",
              )}
            ></div>
            <div className="relative z-10">
              <h3
                className={cn(
                  "text-2xl md:text-3xl font-medium mb-4 transition-colors duration-300",
                  isDark ? "text-white group-hover:text-[#a6e267]" : "text-[#2C4725] group-hover:text-[#2C4725]",
                )}
              >
                Versterk uw Merkpositionering vandaag nog
              </h3>
              <p
                className={cn(
                  "max-w-2xl mx-auto mb-8 transition-colors duration-300",
                  isDark
                    ? "text-white/70 group-hover:text-white/90"
                    : "text-[#2C4725]/70 group-hover:text-[#2C4725]/90",
                )}
              >
                Geen gemiste kansen meer in uw merkstrategie. Met de Merkpositionering aanpak van Multichoiceagency
                versterkt u uw marktpositie, onderscheidt u zich van concurrenten en bouwt u een krachtige
                merkidentiteit die resoneert met uw doelgroep.
              </p>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center px-6 py-3 font-medium rounded-full duration-300 group-hover:translate-y-[-2px] transition-transform",
                  isDark
                    ? "bg-[#2C4725] hover:bg-[#a6e267] text-white hover:text-[#2C4725]"
                    : "bg-[#a6e267] hover:bg-[#2C4725] text-[#2C4725] hover:text-white",
                )}
              >
                Plan een gesprek
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div
              className={cn(
                "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-1000 ease-in-out",
                isDark ? "bg-[#a6e267]" : "bg-[#2C4725]",
              )}
            ></div>
          </motion.div>
        </div>
        {/* Add CSS for animations */}
        <style jsx global>{`
          .animatable {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }
          
          .animate-in {
            opacity: 1;
            transform: translateY(0);
          }
          
          .fade-in-up {
            transition-property: opacity, transform;
          }
          
          .delay-1 { transition-delay: 0.1s; }
          .delay-2 { transition-delay: 0.2s; }
          .delay-3 { transition-delay: 0.3s; }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.2; }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          .animate-pulse-slower {
            animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </section>
    </>
  )
}
