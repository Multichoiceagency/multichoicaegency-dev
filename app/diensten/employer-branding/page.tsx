"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Check,
  Star,
  ChevronDown,
  Users,
  Target,
  Lightbulb,
  Zap,
  Award,
  Briefcase,
  Building,
  Heart,
  Palette,
  Compass,
  MessageSquare,
  Smile,
  TrendingUp,
  DollarSign,
  Clock,
  Globe,
  Layers,
  Camera,
  Cpu,
  Linkedin,
  Instagram,
  Youtube,
  Search,
  User,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

const features = [
  {
    id: "employer-value-proposition",
    title: "Employer Value Proposition",
    description:
      "Wij ontwikkelen een unieke en authentieke employer value proposition die uw bedrijf onderscheidt als werkgever en resoneert met uw ideale kandidaten.",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    tryLink: "/demo/employer-value-proposition",
    videoSrc: "/videos/employer-value-proposition.mp4",
  },
  {
    id: "employer-branding-strategy",
    title: "Employer Branding Strategie",
    description:
      "Creëer een doelgerichte employer branding strategie die uw werkgeversmerk versterkt en de juiste talenten aantrekt en behoudt.",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    tryLink: "/demo/employer-branding-strategie",
    videoSrc: "/videos/employer-branding-strategy.mp4",
  },
  {
    id: "employer-content",
    title: "Employer Content & Activatie",
    description:
      "Ontwikkel impactvolle employer content en activeer uw werkgeversmerk via de juiste kanalen om uw doelgroep effectief te bereiken.",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    tryLink: "/demo/employer-content",
    videoSrc: "/videos/employer-content.mp4",
  },
]

const miniFeatures = [
  {
    title: "Werkgeversmerk Ontwikkeling",
    description: "Ontwikkel een authentiek en aantrekkelijk werkgeversmerk dat uw bedrijfscultuur weerspiegelt",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    imageSrc: "/collaborative-employer-brand.png",
  },
  {
    title: "Candidate Persona's",
    description: "Definieer uw ideale kandidaten en begrijp wat hen motiveert en aantrekt",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    imageSrc: "/candidate-persona-diversity.png",
  },
  {
    title: "Employee Experience",
    description: "Creëer een consistente en positieve ervaring voor medewerkers in alle fases van hun reis",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    imageSrc: "/employee-experience-journey.png",
  },
]

const testimonials = [
  {
    name: "Lisa van den Berg",
    company: "TechTalent BV",
    text: "De employer branding strategie die Multichoiceagency voor ons heeft ontwikkeld, heeft onze recruitment resultaten compleet getransformeerd. We trekken nu veel meer gekwalificeerde kandidaten aan die echt passen bij onze cultuur.",
    avatar: "/confident-hr-leader.png",
    rating: 5,
  },
  {
    name: "Mark Jansen",
    company: "HealthInnovators",
    text: "Dankzij de employer content strategie van Multichoiceagency is onze zichtbaarheid als werkgever enorm toegenomen. We hebben nu een wachtlijst van kandidaten die graag bij ons willen werken.",
    avatar: "/confident-executive.png",
    rating: 5,
  },
  {
    name: "Sophie Dekker",
    company: "GreenEnergy Solutions",
    text: "Het team van Multichoiceagency heeft ons geholpen om onze unieke bedrijfscultuur te vertalen naar een authentiek werkgeversmerk. Dit heeft niet alleen onze recruitment verbeterd, maar ook het engagement van onze huidige medewerkers verhoogd.",
    avatar: "/confident-hr-leader.png",
    rating: 4,
  },
]

const processSteps = [
  {
    number: "01",
    title: "Analyse & Onderzoek",
    description:
      "We beginnen met een grondige analyse van uw huidige werkgeversmerk, bedrijfscultuur en arbeidsmarktpositie.",
    icon: <Compass className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "Strategie Ontwikkeling",
    description:
      "We ontwikkelen een doelgerichte employer branding strategie die aansluit bij uw bedrijfsdoelen en doelgroep.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "Content Creatie",
    description: "We creëren authentieke en impactvolle employer content die uw werkgeversmerk tot leven brengt.",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "Activatie & Implementatie",
    description: "We activeren uw werkgeversmerk via de juiste kanalen en implementeren het in uw recruitment proces.",
    icon: <Zap className="h-6 w-6" />,
  },
]

const statistics = [
  {
    value: "86%",
    label: "van de werkzoekenden onderzoekt bedrijfscultuur voor sollicitatie",
    icon: <Search className="h-6 w-6" />,
  },
  {
    value: "75%",
    label: "lagere recruitment kosten met sterk werkgeversmerk",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    value: "3.5x",
    label: "meer sollicitaties bij bedrijven met sterk werkgeversmerk",
    icon: <Users className="h-6 w-6" />,
  },
  {
    value: "50%",
    label: "snellere invulling van vacatures",
    icon: <Clock className="h-6 w-6" />,
  },
]

const caseStudies = [
  {
    title: "Tech Talent Aantrekken",
    client: "InnovateTech",
    description: "Een complete employer branding strategie voor een snelgroeiende tech scale-up.",
    results: [
      "250% toename in gekwalificeerde sollicitaties",
      "68% verbetering in candidate quality score",
      "35% reductie in time-to-hire",
    ],
    image: "/collaborative-tech-hub.png",
  },
  {
    title: "Healthcare Employer Branding",
    client: "MedCare Solutions",
    description: "Een authentiek werkgeversmerk voor een innovatieve zorgorganisatie.",
    results: [
      "45% toename in retentie van verpleegkundig personeel",
      "78% van nieuwe hires kwam via employer branding kanalen",
      "92% van medewerkers is trots om voor het bedrijf te werken",
    ],
    image: "/modern-healthcare-team.png",
  },
  {
    title: "Corporate Employer Rebranding",
    client: "Finance Partners",
    description: "Een moderne employer branding aanpak voor een traditioneel financieel bedrijf.",
    results: [
      "65% meer millennials en Gen Z sollicitanten",
      "48% verbetering in employee engagement scores",
      "Succesvolle werving van digital talent uit tech sector",
    ],
    image: "/placeholder.svg?height=400&width=600&query=diverse financial team in modern office environment",
  },
]

const faqs = [
  {
    question: "Wat is employer branding precies?",
    answer:
      "Employer branding is het proces van het ontwikkelen en communiceren van een uniek werkgeversmerk dat laat zien wat uw organisatie als werkgever onderscheidt. Het omvat uw reputatie als werkgever, bedrijfscultuur, waarden, werkomgeving en wat u uw medewerkers biedt. Een sterk werkgeversmerk helpt u om de juiste talenten aan te trekken, te werven en te behouden.",
  },
  {
    question: "Waarom is employer branding belangrijk?",
    answer:
      "Employer branding is essentieel in de huidige competitieve arbeidsmarkt omdat het helpt om: 1) De juiste talenten aan te trekken die passen bij uw cultuur en waarden, 2) Recruitment kosten te verlagen en time-to-hire te verkorten, 3) Retentie van medewerkers te verbeteren, 4) Employee engagement en productiviteit te verhogen, en 5) Uw algemene bedrijfsreputatie te versterken. Bedrijven met een sterk werkgeversmerk hebben 50% lagere cost-per-hire en 28% lagere turnover rates.",
  },
  {
    question: "Hoe lang duurt het ontwikkelen van een employer branding strategie?",
    answer:
      "De ontwikkeling van een complete employer branding strategie duurt gemiddeld 2-3 maanden, afhankelijk van de grootte en complexiteit van uw organisatie. Dit omvat onderzoek, strategie ontwikkeling, content creatie en implementatieplan. De daadwerkelijke implementatie en activatie is een doorlopend proces dat continu aandacht vraagt om effectief te blijven in een veranderende arbeidsmarkt.",
  },
  {
    question: "Hoe meet je het succes van employer branding?",
    answer:
      "Het succes van employer branding kan worden gemeten met verschillende KPI's, waaronder: 1) Aantal en kwaliteit van sollicitaties, 2) Time-to-hire en cost-per-hire, 3) Retentiepercentages en employee turnover, 4) Employee engagement scores, 5) Employer brand awareness (via social media metrics en employer review sites), 6) Candidate experience scores, en 7) Employee Net Promoter Score (eNPS). We helpen u bij het opzetten van de juiste meetinstrumenten om ROI aan te tonen.",
  },
  {
    question: "Wat is het verschil tussen employer branding en recruitment marketing?",
    answer:
      "Employer branding is de langetermijnstrategie voor het ontwikkelen en communiceren van uw identiteit als werkgever, terwijl recruitment marketing de tactische activiteiten zijn om specifieke vacatures te promoten en kandidaten aan te trekken. Employer branding vormt de basis voor effectieve recruitment marketing. Een sterk werkgeversmerk maakt uw recruitment marketing effectiever omdat kandidaten al een positieve perceptie hebben van uw organisatie als werkgever.",
  },
  {
    question: "Moeten we onze huidige employer branding volledig veranderen?",
    answer:
      "Niet noodzakelijk. We beginnen met een grondige analyse van uw huidige employer branding en bepalen vervolgens of een verfijning, versterking of complete herziening het meest geschikt is. Vaak is het effectiever om voort te bouwen op bestaande sterke punten en deze consistent door te voeren, dan om volledig opnieuw te beginnen. Het belangrijkste is dat uw employer branding authentiek is en aansluit bij de werkelijke ervaring van uw medewerkers.",
  },
  {
    question: "Is employer branding ook belangrijk voor kleine bedrijven?",
    answer:
      "Absoluut! Voor kleine bedrijven is een sterk werkgeversmerk misschien nog wel belangrijker, omdat het helpt om te concurreren met grotere organisaties die vaak hogere salarissen kunnen bieden. Een authentiek werkgeversmerk dat uw unieke cultuur, waarden en voordelen benadrukt, kan u helpen om de juiste talenten aan te trekken die passen bij uw organisatie en bijdragen aan uw groei, zelfs met een beperkt recruitment budget.",
  },
]

const expertiseAreas = [
  {
    title: "Employer Value Proposition",
    description: "Ontwikkeling van een unieke en authentieke belofte aan (potentiële) medewerkers",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Candidate Persona's",
    description: "Creatie van gedetailleerde profielen van uw ideale kandidaten en hun behoeften",
    icon: <User className="h-6 w-6" />,
  },
  {
    title: "Employer Branding Strategie",
    description: "Ontwikkeling van doelgerichte strategie om uw werkgeversmerk te versterken",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Employee Experience",
    description: "Optimalisatie van de medewerkerservaring in alle fases van de employee journey",
    icon: <Smile className="h-6 w-6" />,
  },
  {
    title: "Employer Content",
    description: "Creatie van authentieke en impactvolle content die uw werkgeversmerk versterkt",
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    title: "Employer Branding Activatie",
    description: "Implementatie en activatie van uw werkgeversmerk via de juiste kanalen",
    icon: <Zap className="h-6 w-6" />,
  },
]

const industryApplications = [
  {
    industry: "Tech & IT",
    description:
      "In de competitieve tech sector is een sterk werkgeversmerk essentieel om schaars talent aan te trekken. We helpen tech bedrijven om hun unieke cultuur en innovatieve werkomgeving te showcasen.",
    icon: <Cpu className="h-6 w-6" />,
    benefits: [
      "Aantrekken van schaars tech talent in een competitieve markt",
      "Onderscheiden van tech giants met beperktere budgetten",
      "Authentiek communiceren van innovatieve bedrijfscultuur",
    ],
  },
  {
    industry: "Healthcare & Life Sciences",
    description:
      "Voor zorgorganisaties helpt een sterk werkgeversmerk om zorgprofessionals aan te trekken en te behouden in een sector met grote personeelstekorten.",
    icon: <Heart className="h-6 w-6" />,
    benefits: [
      "Aantrekken van zorgprofessionals in een krappe arbeidsmarkt",
      "Verbeteren van retentie en verminderen van burnout",
      "Communiceren van maatschappelijke impact en zingeving",
    ],
  },
  {
    industry: "Professional Services",
    description:
      "Voor professionele dienstverleners is een onderscheidend werkgeversmerk cruciaal om top talent aan te trekken in een markt waar bedrijven vaak op elkaar lijken.",
    icon: <Briefcase className="h-6 w-6" />,
    benefits: [
      "Onderscheiden in een zee van vergelijkbare werkgevers",
      "Aantrekken van talent dat past bij uw bedrijfscultuur",
      "Verbeteren van retentie en verminderen van dure turnover",
    ],
  },
  {
    industry: "Manufacturing & Industry",
    description:
      "Voor industriële bedrijven helpt een modern werkgeversmerk om jonge talenten aan te trekken en het imago van de sector te vernieuwen.",
    icon: <Layers className="h-6 w-6" />,
    benefits: [
      "Vernieuwen van het imago van traditionele industrie",
      "Aantrekken van jonge talenten en technische profielen",
      "Communiceren van innovatie en duurzaamheid in de sector",
    ],
  },
]

const showcases = [
  {
    title: "Tech Scale-up Employer Branding",
    client: "GrowthTech",
    description:
      "Een complete employer branding strategie voor een snelgroeiende tech scale-up die moeite had met het aantrekken van senior developers.",
    before: {
      image: "/placeholder.svg?height=400&width=600&query=generic tech company careers page",
      description: "Generieke employer branding zonder onderscheidend vermogen en lage conversie van sollicitanten.",
    },
    after: {
      image: "/placeholder.svg?height=400&width=600&query=vibrant tech company culture showcase",
      description:
        "Authentiek werkgeversmerk dat de unieke cultuur en ontwikkelmogelijkheden showcased en resoneerde met de doelgroep.",
    },
    results: [
      "250% toename in gekwalificeerde sollicitaties voor tech posities",
      "68% verbetering in candidate quality score",
      "35% reductie in time-to-hire voor moeilijk vervulbare posities",
    ],
  },
  {
    title: "Healthcare Employer Branding",
    client: "MedCare Solutions",
    description:
      "Een authentiek werkgeversmerk voor een innovatieve zorgorganisatie die moeite had met het aantrekken en behouden van verpleegkundig personeel.",
    before: {
      image: "/placeholder.svg?height=400&width=600&query=clinical sterile healthcare recruitment materials",
      description:
        "Klinische en onpersoonlijke employer branding die de menselijke kant en impact van het werk niet liet zien.",
    },
    after: {
      image: "/placeholder.svg?height=400&width=600&query=human centered healthcare employer branding",
      description:
        "Mensgerichte employer branding die de betekenisvolle impact en ondersteunende teamcultuur benadrukte.",
    },
    results: [
      "45% toename in retentie van verpleegkundig personeel",
      "78% van nieuwe hires kwam via employer branding kanalen",
      "92% van medewerkers is trots om voor het bedrijf te werken",
    ],
  },
  {
    title: "Corporate Employer Rebranding",
    client: "Finance Partners",
    description:
      "Een moderne employer branding aanpak voor een traditioneel financieel bedrijf dat moeite had met het aantrekken van jong digitaal talent.",
    before: {
      image: "/placeholder.svg?height=400&width=600&query=traditional corporate finance recruitment",
      description: "Traditionele, formele employer branding die jonge professionals niet aansprak.",
    },
    after: {
      image: "/placeholder.svg?height=400&width=600&query=modern financial workplace culture",
      description:
        "Moderne, dynamische employer branding die innovatie, flexibiliteit en ontwikkelmogelijkheden benadrukte.",
    },
    results: [
      "65% meer millennials en Gen Z sollicitanten",
      "48% verbetering in employee engagement scores",
      "Succesvolle werving van digital talent uit tech sector",
    ],
  },
]

const employerBrandingElements = [
  {
    title: "Employer Value Proposition",
    description: "De unieke belofte die u als werkgever doet aan (potentiële) medewerkers en wat u onderscheidt.",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Bedrijfscultuur & Waarden",
    description: "De authentieke cultuur, waarden en normen die het dagelijks werken bij uw organisatie kenmerken.",
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: "Employee Benefits",
    description: "De tastbare en niet-tastbare voordelen die u uw medewerkers biedt naast salaris.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Carrière & Ontwikkeling",
    description: "De mogelijkheden voor groei, ontwikkeling en carrièreperspectief binnen uw organisatie.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "Werkplek & Omgeving",
    description: "De fysieke en virtuele werkomgeving en de manier waarop werk wordt georganiseerd.",
    icon: <Building className="h-6 w-6" />,
  },
  {
    title: "Maatschappelijke Impact",
    description:
      "De positieve impact die uw organisatie heeft op de maatschappij en hoe medewerkers daaraan bijdragen.",
    icon: <Globe className="h-6 w-6" />,
  },
]

const methodologyDetails = [
  {
    title: "Analyse & Onderzoek",
    description:
      "We beginnen met een grondige analyse van uw huidige employer brand, bedrijfscultuur, employee experience en arbeidsmarktpositie om inzichten te verzamelen.",
    steps: [
      "Interne cultuur audit en employee interviews",
      "Analyse van huidige employer brand perceptie",
      "Concurrentieanalyse en arbeidsmarktonderzoek",
      "Identificatie van onderscheidende werkgeverseigenschappen",
    ],
    icon: <Compass className="h-6 w-6" />,
  },
  {
    title: "Candidate Persona's",
    description:
      "We ontwikkelen gedetailleerde profielen van uw ideale kandidaten, inclusief hun behoeften, motivaties, carrièredoelen en communicatievoorkeuren.",
    steps: [
      "Identificatie van key talent segmenten",
      "Ontwikkeling van gedetailleerde candidate persona's",
      "Inzicht in candidate journey en touchpoints",
      "Bepalen van key messaging per persona",
    ],
    icon: <User className="h-6 w-6" />,
  },
  {
    title: "Employer Value Proposition",
    description:
      "We ontwikkelen een unieke en authentieke employer value proposition die uw bedrijf onderscheidt als werkgever en resoneert met uw ideale kandidaten.",
    steps: [
      "Identificatie van unieke werkgeverskenmerken",
      "Ontwikkeling van kernbelofte aan medewerkers",
      "Formulering van key messaging en proof points",
      "Validatie met huidige medewerkers en doelgroep",
    ],
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Employer Branding Strategie",
    description:
      "We ontwikkelen een doelgerichte employer branding strategie die aansluit bij uw bedrijfsdoelen en de juiste talenten aantrekt en behoudt.",
    steps: [
      "Bepalen van employer branding doelstellingen en KPI's",
      "Ontwikkeling van employer brand positionering",
      "Selectie van key channels en touchpoints",
      "Creatie van employer branding roadmap",
    ],
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Employer Content Creatie",
    description:
      "We creëren authentieke en impactvolle employer content die uw werkgeversmerk tot leven brengt en resoneert met uw doelgroep.",
    steps: [
      "Ontwikkeling van employer content strategie",
      "Creatie van employee stories en testimonials",
      "Ontwikkeling van visuele employer brand assets",
      "Productie van video, social en website content",
    ],
    icon: <Camera className="h-6 w-6" />,
  },
  {
    title: "Activatie & Implementatie",
    description:
      "We activeren uw werkgeversmerk via de juiste kanalen en implementeren het in uw recruitment proces en employee experience.",
    steps: [
      "Implementatie in recruitment marketing",
      "Activatie via social media en content platforms",
      "Integratie in candidate en employee journey",
      "Training van HR en recruitment teams",
    ],
    icon: <Zap className="h-6 w-6" />,
  },
]

const channelStrategies = [
  {
    channel: "Careers Website",
    description:
      "Uw careers website is het hart van uw employer branding en vaak het eerste uitgebreide contactpunt voor potentiële kandidaten.",
    icon: <Globe className="h-6 w-6" />,
    bestPractices: [
      "Authentieke employee stories en video testimonials",
      "Transparante informatie over cultuur, waarden en benefits",
      "Gebruiksvriendelijke vacature zoekfunctie en sollicitatieproces",
      "Mobiel-geoptimaliseerde gebruikerservaring",
    ],
  },
  {
    channel: "LinkedIn & Professional Platforms",
    description:
      "LinkedIn en andere professionele platforms zijn essentieel voor het bereiken van actieve en passieve kandidaten in uw branche.",
    icon: <Linkedin className="h-6 w-6" />,
    bestPractices: [
      "Consistente company page met employer branding content",
      "Regelmatige updates over bedrijfscultuur en ontwikkelingen",
      "Employee advocacy programma met medewerkers als ambassadeurs",
      "Gerichte advertenties naar specifieke talent pools",
    ],
  },
  {
    channel: "Social Media",
    description:
      "Social media platforms bieden een authentiek venster in uw bedrijfscultuur en dagelijkse werkomgeving voor potentiële kandidaten.",
    icon: <Instagram className="h-6 w-6" />,
    bestPractices: [
      "Platform-specifieke content strategie (Instagram, Facebook, TikTok)",
      "Behind-the-scenes content van dagelijks werk en teamactiviteiten",
      "Employee takeovers en day-in-the-life content",
      "Interactieve content zoals Q&As en live sessies",
    ],
  },
  {
    channel: "Video & YouTube",
    description:
      "Video is het meest impactvolle medium om uw bedrijfscultuur en werksfeer over te brengen aan potentiële kandidaten.",
    icon: <Youtube className="h-6 w-6" />,
    bestPractices: [
      "Authentieke employee testimonials en team interviews",
      "Office tours en day-in-the-life video's",
      "Uitleg over unieke projecten en werkprocessen",
      "Insights in bedrijfscultuur, events en teambuilding",
    ],
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
              Wij versterken jouw
              <span className="block">employer brand</span>
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
              Wij ontwikkelen een authentiek employer brand dat
              <span className="block text-[#a6e267] font-medium">de juiste talenten aantrekt en behoudt.</span>
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
              src={showcase.before.image || "/placeholder.svg"}
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
              src={showcase.after.image || "/placeholder.svg"}
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

export default function EmployerBrandingSection() {
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
              name: "Employer Branding",
              description:
                "Professionele employer branding diensten om uw werkgeversmerk te versterken en de juiste talenten aan te trekken.",
              provider: {
                "@type": "Organization",
                name: "Multichoiceagency",
                url: "https://www.multichoiceagency.nl",
              },
              serviceType: "Employer Branding",
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
              Aantrekken & Behouden van Talent
            </span>
            <h2
              className={cn(
                "text-4xl md:text-5xl font-bold mb-6 relative inline-block",
                isDark ? "text-white" : "text-[#2C4725]",
              )}
            >
              Employer Branding
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
              <span className="relative">Employer Branding Experts</span>
            </div>
            <p className={cn("text-lg", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
              Ontdek hoe Multichoiceagency een authentiek werkgeversmerk ontwikkelt dat de juiste talenten aantrekt en behoudt voor uw organisatie.
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
                  Wat is employer branding?
                </h3>
                <p className={cn("mb-4", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                  Employer branding is het proces van het ontwikkelen en communiceren van een uniek werkgeversmerk dat laat zien wat uw organisatie als werkgever onderscheidt. Het omvat uw reputatie als werkgever, bedrijfscultuur, waarden, werkomgeving en wat u uw medewerkers biedt.
                </p>
                <p className={cn("mb-4", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                  Een sterk werkgeversmerk helpt u om de juiste talenten aan te trekken, te werven en te behouden in een steeds competitievere arbeidsmarkt. Het zorgt voor een authentieke en consistente ervaring voor zowel potentiële als huidige medewerkers.
                </p>
                <p className={cn(isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                  Bij Multichoiceagency ontwikkelen we authentieke werkgeversmerken die uw organisatie onderscheiden, de juiste talenten aanspreken en uw bedrijf helpen groeien met de beste mensen aan boord.
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
                  src="/placeholder.svg?height=600&width=800&query=employer branding diagram with employee experience journey"
                  alt="Employer Branding diagram"
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

                  {feature.id === "employer-value-proposition" && (
                    <div
                      className={cn(
                        "p-4 rounded-lg",
                        isDark ? "bg-[#2C4725] text-white" : "bg-[#f0f7eb] text-[#2C4725]",
                      )}
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Employer Value Proposition</h4>
                        <p className={isDark ? "text-white/80 text-sm" : "text-[#2C4725]/80 text-sm"}>
                          De unieke belofte die u als werkgever doet aan (potentiële) medewerkers
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex items-center mb-2">
                            <Award className={cn("h-4 w-4 mr-2", isDark ? "text-[#a6e267]" : "text-[#2C4725]")} />
                            <span className={isDark ? "text-sm text-white/90" : "text-sm text-[#2C4725]/90"}>
                              Carrière & Ontwikkeling
                            </span>
                          </div>
                          <p className={cn("text-xs", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                            Groeimogelijkheden en persoonlijke ontwikkeling
                          </p>
                        </div>
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex items-center mb-2">
                            <Heart className={cn("h-4 w-4 mr-2", isDark ? "text-[#a6e267]" : "text-[#2C4725]")} />
                            <span className={isDark ? "text-sm text-white/90" : "text-sm text-[#2C4725]/90"}>
                              Cultuur & Waarden
                            </span>
                          </div>
                          <p className={cn("text-xs", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                            Unieke bedrijfscultuur en gedeelde waarden
                          </p>
                        </div>
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex items-center mb-2">
                            <Globe className={cn("h-4 w-4 mr-2", isDark ? "text-[#a6e267]" : "text-[#2C4725]")} />
                            <span className={isDark ? "text-sm text-white/90" : "text-sm text-[#2C4725]/90"}>
                              Impact & Purpose
                            </span>
                          </div>
                          <p className={cn("text-xs", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                            Maatschappelijke impact en zingeving in werk
                          </p>
                        </div>
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex items-  isDark ? "bg-white/10" : \"bg-white/50")}>
                          <div className="flex items-center mb-2">
                            <Building className={cn("h-4 w-4 mr-2", isDark ? "text-[#a6e267]" : "text-[#2C4725]")} />
                            <span className={isDark ? "text-sm text-white/90" : "text-sm text-[#2C4725]/90"}>
                              Werkomgeving & Benefits
                            </span>
                          </div>
                          <p className={cn("text-xs", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                            Aantrekkelijke werkomgeving en secundaire voorwaarden
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.id === "employer-branding-strategy" && (
                    <div
                      className={cn(
                        "p-4 rounded-lg",
                        isDark ? "bg-[#2C4725] text-white" : "bg-[#f0f7eb] text-[#2C4725]",
                      )}
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Employer Branding Strategie</h4>
                        <p className={isDark ? "text-white/80 text-sm" : "text-[#2C4725]/80 text-sm"}>
                          Een doelgerichte aanpak om uw werkgeversmerk te versterken
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex justify-between items-center mb-3">
                            <span className={isDark ? "text-sm text-white/80" : "text-sm text-[#2C4725]/80"}>
                              Strategische Elementen
                            </span>
                          </div>
                          <div className="flex gap-2 mb-3 flex-wrap">
                            <span
                              className={cn(
                                "px-3 py-1 rounded-full text-sm",
                                isDark ? "bg-white/20" : "bg-[#2C4725]/10 text-[#2C4725]",
                              )}
                            >
                              Doelgroep Analyse
                            </span>
                            <span
                              className={cn(
                                "px-3 py-1 rounded-full text-sm",
                                isDark ? "bg-[#a6e267] text-[#2C4725]" : "bg-[#2C4725] text-white",
                              )}
                            >
                              Candidate Persona's
                            </span>
                            <span
                              className={cn(
                                "px-3 py-1 rounded-full text-sm",
                                isDark ? "bg-white/20" : "bg-[#2C4725]/10 text-[#2C4725]",
                              )}
                            >
                              Channel Strategie
                            </span>
                            <span
                              className={cn(
                                "px-3 py-1 rounded-full text-sm",
                                isDark ? "bg-white/20" : "bg-[#2C4725]/10 text-[#2C4725]",
                              )}
                            >
                              Content Planning
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
                              Onze employer branding strategie zorgt voor een doelgerichte aanpak om uw werkgeversmerk te versterken en de juiste talenten aan te trekken en te behouden. We bepalen de juiste kanalen, boodschappen en activaties voor uw specifieke doelgroep.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.id === "employer-content" && (
                    <div
                      className={cn(
                        "p-4 rounded-lg",
                        isDark ? "bg-[#2C4725] text-white" : "bg-[#f0f7eb] text-[#2C4725]",
                      )}
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Employer Content & Activatie</h4>
                        <p className={isDark ? "text-white/80 text-sm" : "text-[#2C4725]/80 text-sm"}>
                          Authentieke content die uw werkgeversmerk tot leven brengt
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
                            Content Formats
                          </span>
                        </div>
                        <div className="flex gap-2 mb-3 flex-wrap">
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-sm",
                              isDark ? "bg-white/20" : "bg-[#2C4725]/10 text-[#2C4725]",
                            )}
                          >
                            Employee Stories
                          </span>
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-sm",
                              isDark ? "bg-[#a6e267] text-[#2C4725]" : "bg-[#2C4725] text-white",
                            )}
                          >
                            Video Content
                          </span>
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-sm",
                              isDark ? "bg-white/20" : "bg-[#2C4725]/10 text-[#2C4725]",
                            )}
                          >
                            Social Media
                          </span>
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-sm",
                              isDark ? "bg-white/20" : "bg-[#2C4725]/10 text-[#2C4725]",
                            )}
                          >
                            Careers Website
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
                            We creëren authentieke en impactvolle employer content die uw werkgeversmerk tot leven brengt en resoneert met uw doelgroep. Van employee stories en video content tot social media campagnes en een aantrekkelijke careers website.
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
                    Employer Branding
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
                        {feature.id === "employer-value-proposition" &&
                          item === 1 &&
                          "Unieke belofte die uw organisatie als werkgever onderscheidt"}
                        {feature.id === "employer-value-proposition" &&
                          item === 2 &&
                          "Authentieke weerspiegeling van uw bedrijfscultuur en waarden"}
                        {feature.id === "employer-value-proposition" &&
                          item === 3 &&
                          "Resoneren met de behoeften en motivaties van uw ideale kandidaten"}

                        {feature.id === "employer-branding-strategy" &&
                          item === 1 &&
                          "Doelgerichte strategie gebaseerd op data en inzichten"}
                        {feature.id === "employer-branding-strategy" &&
                          item === 2 &&
                          "Gedetailleerde candidate persona's en journey mapping"}
                        {feature.id === "employer-branding-strategy" &&
                          item === 3 &&
                          "Effectieve channel strategie en content planning"}

                        {feature.id === "employer-content" &&
                          item === 1 &&
                          "Authentieke content die uw werkgeversmerk tot leven brengt"}
                        {feature.id === "employer-content" &&
                          item === 2 &&
                          "Impactvolle employee stories en testimonials"}
                        {feature.id === "employer-content" &&
                          item === 3 &&
                          "Activatie via de juiste kanalen om uw doelgroep te bereiken"}
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

          {/* Employer Branding Elements */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Elementen van Employer Branding
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                De bouwstenen van een sterk en authentiek werkgeversmerk
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employerBrandingElements.map((element, index) => (
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
                    {element.icon}
                  </div>
                  <h4 className={cn("text-xl font-medium mb-2", isDark ? "text-white" : "text-[#2C4725]")}>
                    {element.title}
                  </h4>
                  <p className={cn(isDark ? "text-white/70" : "text-[#2C4725]/70")}>{element.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Steps Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>Ons Proces</h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Een systematische aanpak voor het ontwikkelen van uw werkgeversmerk
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
                Een diepgaande kijk in onze employer branding methodologie
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

          {/* Channel Strategies */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Channel Strategieën
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Effectieve kanalen om uw werkgeversmerk te activeren
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {channelStrategies.map((channel, index) => (
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
                      {channel.icon}
                    </div>
                    <div>
                      <h4 className={cn("text-xl font-medium mb-2", isDark ? "text-white" : "text-[#2C4725]")}>
                        {channel.channel}
                      </h4>
                      <p className={cn("mb-4", isDark ? "text-white/70" : "text-[#2C4725]/70")}>{channel.description}</p>
                    </div>
                  </div>
                  <div className={cn("p-4 rounded-lg", isDark ? "bg-black/20" : "bg-[#f0f7eb]")}>
                    <h5 className={cn("text-sm font-medium mb-2", isDark ? "text-white/90" : "text-[#2C4725]/90")}>
                      Best Practices:
                    </h5>
                    <ul className="space-y-2">
                      {channel.bestPractices.map((practice, i) => (
                        <li key={i} className="flex items-start">
                          <Check
                            className={cn(
                              "h-4 w-4 mr-2 flex-shrink-0 mt-0.5",
                              isDark ? "text-[#a6e267]" : "text-[#2C4725]",
                            )}
                          />
                          <span className={cn("text-sm", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                            {practice}
                          </span>
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
                Hoe employer branding verschillende sectoren helpt groeien
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
                Specialistische kennis en ervaring in alle aspecten van employer branding
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
                Ontdek hoe we bedrijven hebben geholpen met effectieve employer branding
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
                      src={caseStudy.image || "/placeholder.svg"}
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

          {/* Showcases Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Employer Branding Showcases
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Bekijk hoe we werkgeversmerken hebben getransformeerd met effectieve employer branding
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {showcases.map((showcase, index) => (
                <ShowcaseCard key={index} showcase={showcase} isDark={isDark} />
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
                Ontdek hoe wij bedrijven hebben geholpen hun werkgeversmerk te versterken
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
                <ArrowRight className="h-5 w-5 rotate-180" />
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
                <ArrowRight className="h-5 w-5" />
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
                Antwoorden op de meest gestelde vragen over employer branding
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
                Versterk uw Werkgeversmerk vandaag nog
              </h3>
              <p
                className={cn(
                  "max-w-2xl mx-auto mb-8 transition-colors duration-300",
                  isDark
                    ? "text-white/70 group-hover:text-white/90"
                    : "text-[#2C4725]/70 group-hover:text-[#2C4725]/90",
                )}
              >
                Geen gemiste kansen meer in de strijd om talent. Met de expertise van Multichoiceagency ontwikkelt u een authentiek en aantrekkelijk werkgeversmerk dat de juiste talenten aantrekt, uw recruitment verbetert en uw organisatie helpt groeien met de beste mensen aan boord.
              </p>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center px-6 py-3 font-medium rounded-full transition-colors duration-300 group-hover:translate-y-[-2px] transition-transform",
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
