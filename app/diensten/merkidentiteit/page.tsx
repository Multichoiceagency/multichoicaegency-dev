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
  Users,
  Target,
  Lightbulb,
  Zap,
  Award,
  BarChart,
  Briefcase,
  ShoppingBag,
  Building,
  Rocket,
  Heart,
  Palette,
  Compass,
  Eye,
  MessageSquare,
  Fingerprint,
  Brush,
  ImageIcon,
  Type,
  PenTool,
  Feather,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

const features = [
  {
    id: "brand-identity",
    title: "Merkidentiteit Ontwikkeling",
    description:
      "Onze experts ontwikkelen een unieke en krachtige merkidentiteit die uw bedrijfswaarden weerspiegelt en resoneert met uw doelgroep.",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    tryLink: "/demo/merkidentiteit",
    videoSrc: "/videos/brand-identity.mp4",
  },
  {
    id: "visual-identity",
    title: "Visuele Identiteit",
    description:
      "Creëer een onderscheidende visuele taal met logo, kleurenpalet, typografie en beeldtaal die uw merk direct herkenbaar maakt.",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    tryLink: "/demo/visuele-identiteit",
    videoSrc: "/videos/visual-identity.mp4",
  },
  {
    id: "brand-guidelines",
    title: "Merkrichtlijnen & Implementatie",
    description:
      "Ontwikkel consistente merkrichtlijnen en implementeer uw nieuwe merkidentiteit over alle touchpoints en communicatiekanalen.",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    tryLink: "/demo/merkrichtlijnen",
    videoSrc: "/videos/brand-guidelines.mp4",
  },
]

const miniFeatures = [
  {
    title: "Logo & Visuele Elementen",
    description: "Ontwikkel een krachtig logo en visuele elementen die uw merk direct herkenbaar maken",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    imageSrc: "/logo-design-steps.png",
  },
  {
    title: "Merkpersoonlijkheid",
    description: "Definieer een unieke merkpersoonlijkheid die resoneert met uw doelgroep",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    imageSrc: "/brand-personality-archetypes.png",
  },
  {
    title: "Tone of Voice",
    description: "Ontwikkel een consistente communicatiestijl die past bij uw merkwaarden",
    icon: <Check className="h-5 w-5" />,
    color: "bg-[#a6e267]",
    imageSrc: "/interconnected-communication-network.png",
  },
]

const testimonials = [
  {
    name: "Thomas Bakker",
    company: "GreenTech Solutions",
    text: "De merkidentiteit die Multichoiceagency voor ons heeft ontwikkeld, heeft ons bedrijf getransformeerd. We zijn nu direct herkenbaar in de markt en onze klanten waarderen de consistente merkervaring.",
    avatar: "/confident-leader.png",
    rating: 5,
  },
  {
    name: "Emma Visser",
    company: "Urban Design",
    text: "Dankzij de nieuwe visuele identiteit die Multichoiceagency heeft gecreëerd, is ons merk nu volledig in lijn met onze waarden en missie. De positieve reacties van klanten overtreffen onze verwachtingen.",
    avatar: "/confident-leader.png",
    rating: 5,
  },
  {
    name: "Joris de Vries",
    company: "Tech Innovators",
    text: "Het team van Multichoiceagency heeft onze merkidentiteit naar een hoger niveau getild. Hun strategische aanpak en creatieve uitvoering hebben geresulteerd in een merk dat echt onderscheidend is in onze sector.",
    avatar: "/confident-young-professional.png",
    rating: 4,
  },
]

const processSteps = [
  {
    number: "01",
    title: "Merkanalyse",
    description: "We beginnen met een grondige analyse van uw huidige merkidentiteit, doelgroep en marktpositie.",
    icon: <Compass className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "Identiteitsontwikkeling",
    description: "We ontwikkelen een unieke merkidentiteit die uw waarden en visie weerspiegelt.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "Visuele Vertaling",
    description: "We vertalen de merkidentiteit naar visuele elementen zoals logo, kleurenpalet en typografie.",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "Implementatie",
    description: "We implementeren de nieuwe merkidentiteit over alle relevante touchpoints en kanalen.",
    icon: <Zap className="h-6 w-6" />,
  },
]

const statistics = [
  {
    value: "94%",
    label: "van de consumenten waardeert visuele consistentie",
    icon: <Eye className="h-6 w-6" />,
  },
  {
    value: "73%",
    label: "hogere merkherkenning na identiteitsvernieuwing",
    icon: <BarChart className="h-6 w-6" />,
  },
  {
    value: "4.2x",
    label: "meer vertrouwen in merken met sterke identiteit",
    icon: <Users className="h-6 w-6" />,
  },
  {
    value: "58%",
    label: "stijging in klantloyaliteit",
    icon: <Award className="h-6 w-6" />,
  },
]

const caseStudies = [
  {
    title: "Retail Rebrand",
    client: "EcoStyle",
    description: "Een complete merkidentiteit transformatie voor een duurzame modeketen.",
    results: [
      "68% stijging in merkherkenning",
      "42% toename in klantloyaliteit",
      "Succesvolle uitbreiding naar 3 nieuwe markten",
    ],
    image: "/mindful-threads.png",
  },
  {
    title: "Tech Startup Identiteit",
    client: "InnovateTech",
    description: "Een onderscheidende merkidentiteit voor een innovatieve tech startup.",
    results: [
      "Succesvolle financieringsronde van €3.5M",
      "85% positieve feedback van doelgroep",
      "Verdubbeling van gebruikersgroei in 6 maanden",
    ],
    image: "/modern-tech-brand.png",
  },
  {
    title: "Corporate Rebranding",
    client: "Global Finance",
    description: "Een moderne merkidentiteit voor een traditioneel financieel bedrijf.",
    results: [
      "Verjonging van klantenbestand met 35%",
      "63% stijging in online engagement",
      "Succesvolle werving van toptalent",
    ],
    image: "/streamlined-finance.png",
  },
]

const faqs = [
  {
    question: "Wat is merkidentiteit precies?",
    answer:
      "Merkidentiteit is het geheel van visuele en verbale elementen dat een merk definieert en onderscheidt van concurrenten. Het omvat logo, kleurenpalet, typografie, beeldtaal, tone of voice, merkwaarden en merkpersoonlijkheid. Een sterke merkidentiteit zorgt voor herkenbaarheid, consistentie en emotionele verbinding met de doelgroep.",
  },
  {
    question: "Waarom is een sterke merkidentiteit belangrijk?",
    answer:
      "Een sterke merkidentiteit helpt uw bedrijf te onderscheiden in een concurrerende markt, bouwt vertrouwen op bij uw doelgroep, zorgt voor consistentie in alle communicatie, verhoogt de merkherkenning en -loyaliteit, en ondersteunt uw marketingactiviteiten. Het vormt de basis voor hoe uw merk wordt waargenomen en herinnerd door uw doelgroep.",
  },
  {
    question: "Hoe lang duurt het ontwikkelen van een merkidentiteit?",
    answer:
      "De ontwikkeling van een complete merkidentiteit duurt gemiddeld 2-3 maanden, afhankelijk van de complexiteit van uw bedrijf, de omvang van het project en de benodigde toepassingen. Dit omvat onderzoek, strategie, creatieve ontwikkeling, verfijning en implementatieplan. De daadwerkelijke implementatie kan langer duren, afhankelijk van het aantal touchpoints.",
  },
  {
    question: "Moeten we onze huidige merkidentiteit volledig veranderen?",
    answer:
      "Niet noodzakelijk. Soms is een evolutie van uw bestaande merkidentiteit effectiever dan een complete verandering, vooral als uw merk al enige bekendheid geniet. We beginnen met een grondige analyse van uw huidige merkidentiteit en bepalen vervolgens of een verfijning, modernisering of complete herziening het meest geschikt is voor uw doelstellingen.",
  },
  {
    question: "Wat is het verschil tussen merkidentiteit en branding?",
    answer:
      "Merkidentiteit is een onderdeel van branding. Branding is het bredere proces van het bouwen en vormgeven van een merk in de perceptie van de doelgroep, inclusief merkstrategie, positionering, merkervaring en merkidentiteit. Merkidentiteit richt zich specifiek op de visuele en verbale elementen die het merk definiëren en onderscheiden.",
  },
  {
    question: "Hoe zorgen jullie voor consistentie in de merkidentiteit?",
    answer:
      "We ontwikkelen uitgebreide merkrichtlijnen die alle aspecten van uw merkidentiteit documenteren, van logo-gebruik en kleurspecificaties tot typografie, beeldtaal en tone of voice. Deze richtlijnen dienen als referentie voor iedereen die met uw merk werkt, zowel intern als extern, om consistentie te waarborgen over alle touchpoints en communicatiekanalen.",
  },
  {
    question: "Is merkidentiteit ook belangrijk voor kleine bedrijven?",
    answer:
      "Absoluut! Voor kleine bedrijven is een sterke merkidentiteit misschien nog wel belangrijker, omdat het helpt om op te vallen in een markt die vaak wordt gedomineerd door grotere spelers. Een professionele merkidentiteit bouwt vertrouwen op bij potentiële klanten en helpt kleine bedrijven om een professionele indruk te maken die kan concurreren met grotere organisaties.",
  },
]

const expertiseAreas = [
  {
    title: "Merkstrategie",
    description: "Ontwikkeling van merkwaarden, -missie en -visie als basis voor uw identiteit",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Logo Design",
    description: "Creatie van onderscheidende en betekenisvolle logo's die uw merk vertegenwoordigen",
    icon: <PenTool className="h-6 w-6" />,
  },
  {
    title: "Visuele Identiteit",
    description: "Ontwikkeling van kleurenpalet, typografie en visuele elementen",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "Merkpersoonlijkheid",
    description: "Definiëren van de karaktereigenschappen en waarden van uw merk",
    icon: <Fingerprint className="h-6 w-6" />,
  },
  {
    title: "Tone of Voice",
    description: "Ontwikkeling van een consistente communicatiestijl voor uw merk",
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    title: "Merkrichtlijnen",
    description: "Creatie van uitgebreide richtlijnen voor consistent merkgebruik",
    icon: <Briefcase className="h-6 w-6" />,
  },
]

const industryApplications = [
  {
    industry: "E-commerce & Retail",
    description:
      "In de competitieve e-commerce en retailsector is een sterke merkidentiteit essentieel om op te vallen. We helpen retailers om een unieke visuele taal te ontwikkelen die zowel online als offline impact maakt.",
    icon: <ShoppingBag className="h-6 w-6" />,
    benefits: [
      "Verhoogde merkherkenning en onderscheidend vermogen",
      "Consistente klantervaring over alle kanalen",
      "Versterkte emotionele band met klanten",
    ],
  },
  {
    industry: "B2B & Professionele Diensten",
    description:
      "Voor B2B-bedrijven en professionele dienstverleners is een sterke merkidentiteit cruciaal om vertrouwen op te bouwen en expertise uit te stralen in een markt waar relaties centraal staan.",
    icon: <Building className="h-6 w-6" />,
    benefits: [
      "Verhoogd vertrouwen en geloofwaardigheid",
      "Duidelijke communicatie van expertise en specialisatie",
      "Professionele uitstraling die aansluit bij premium dienstverlening",
    ],
  },
  {
    industry: "Startups & Scale-ups",
    description:
      "Voor startups en scale-ups is een onderscheidende merkidentiteit vanaf het begin essentieel om op te vallen, investeerders aan te trekken en een sterke marktpositie op te bouwen.",
    icon: <Rocket className="h-6 w-6" />,
    benefits: [
      "Professionele uitstraling die vertrouwen wekt bij investeerders",
      "Onderscheidend vermogen in een competitieve markt",
      "Flexibele identiteit die kan meegroeien met het bedrijf",
    ],
  },
  {
    industry: "Non-profit & Maatschappelijke Organisaties",
    description:
      "Voor non-profit en maatschappelijke organisaties helpt een authentieke merkidentiteit om uw missie effectiever te communiceren en emotionele verbinding te maken met supporters.",
    icon: <Heart className="h-6 w-6" />,
    benefits: [
      "Effectieve communicatie van missie en impact",
      "Sterkere emotionele verbinding met donateurs en vrijwilligers",
      "Verhoogde geloofwaardigheid en transparantie",
    ],
  },
]

const showcases = [
  {
    title: "Complete Merkidentiteit",
    client: "EcoStyle",
    description:
      "Een complete merkidentiteit transformatie voor een duurzaam modebedrijf, inclusief logo, kleurenpalet, typografie en beeldtaal.",
    before: {
      image: "/faded-glamour-logo.png",
      description: "Verouderd logo en inconsistente visuele identiteit zonder duidelijke merkpersoonlijkheid.",
    },
    after: {
      image: "/eco-conscious-threads.png",
      description:
        "Moderne, coherente merkidentiteit die de duurzame waarden van het bedrijf weerspiegelt en resoneert met de doelgroep.",
    },
    results: [
      "68% stijging in merkherkenning binnen 3 maanden",
      "42% toename in klantloyaliteit en herhalingsaankopen",
      "Succesvolle uitbreiding naar 3 nieuwe markten",
    ],
  },
  {
    title: "Logo & Visuele Identiteit",
    client: "TechInnovate",
    description:
      "Een onderscheidend logo en visuele identiteit voor een innovatieve tech startup die hun vooruitstrevende karakter weerspiegelt.",
    before: {
      image: "/placeholder.svg?height=400&width=600&query=generic tech company logo",
      description:
        "Generiek logo en visuele identiteit die niet aansloot bij het innovatieve karakter van het bedrijf.",
    },
    after: {
      image: "/placeholder.svg?height=400&width=600&query=innovative tech company brand identity",
      description:
        "Dynamisch, modern logo en visuele identiteit die de innovatieve geest van het bedrijf perfect weerspiegelt.",
    },
    results: [
      "85% positieve feedback van doelgroep op nieuwe identiteit",
      "Succesvolle financieringsronde van €3.5M na rebrand",
      "Verdubbeling van gebruikersgroei in 6 maanden",
    ],
  },
  {
    title: "Corporate Rebranding",
    client: "Global Finance",
    description:
      "Een moderne merkidentiteit voor een traditioneel financieel bedrijf dat wilde verjongen zonder betrouwbaarheid te verliezen.",
    before: {
      image: "/placeholder.svg?height=400&width=600&query=traditional financial company logo",
      description: "Verouderde, conservatieve merkidentiteit die jonge professionals niet aansprak.",
    },
    after: {
      image: "/placeholder.svg?height=400&width=600&query=modern financial brand identity",
      description:
        "Moderne, toegankelijke merkidentiteit die betrouwbaarheid combineert met innovatie en aanspreekt bij een breder publiek.",
    },
    results: [
      "Verjonging van klantenbestand met 35% meer millennials",
      "63% stijging in online engagement en social media volgers",
      "Succesvolle werving van toptalent uit de tech sector",
    ],
  },
]

const brandIdentityElements = [
  {
    title: "Logo & Beeldmerk",
    description: "Het visuele anker van uw merkidentiteit dat direct herkenbaar is en uw merkwaarden communiceert.",
    icon: <PenTool className="h-6 w-6" />,
  },
  {
    title: "Kleurenpalet",
    description: "Een strategisch gekozen kleurenschema dat emoties oproept en uw merk onderscheidt van concurrenten.",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "Typografie",
    description:
      "Zorgvuldig geselecteerde lettertypen die de persoonlijkheid van uw merk versterken en leesbaarheid garanderen.",
    icon: <Type className="h-6 w-6" />,
  },
  {
    title: "Beeldtaal",
    description: "Een consistente visuele stijl voor fotografie en illustraties die uw merkidentiteit versterkt.",
    icon: <ImageIcon className="h-6 w-6" />,
  },
  {
    title: "Tone of Voice",
    description: "Een herkenbare communicatiestijl die past bij uw merkpersoonlijkheid en doelgroep.",
    icon: <Feather className="h-6 w-6" />,
  },
  {
    title: "Grafische Elementen",
    description: "Unieke visuele elementen die uw merkidentiteit versterken en herkenbaarheid creëren.",
    icon: <Brush className="h-6 w-6" />,
  },
]

const methodologyDetails = [
  {
    title: "Merkanalyse & Onderzoek",
    description:
      "We beginnen met een grondige analyse van uw huidige merkidentiteit, doelgroep, concurrenten en marktpositie om inzichten te verzamelen voor een effectieve merkidentiteit.",
    steps: [
      "Analyse van huidige merkidentiteit en -perceptie",
      "Doelgroeponderzoek en -inzichten",
      "Concurrentieanalyse en marktpositionering",
      "Identificatie van onderscheidende merkwaarden",
    ],
    icon: <Compass className="h-6 w-6" />,
  },
  {
    title: "Merkstrategie",
    description:
      "Op basis van de inzichten uit de onderzoeksfase ontwikkelen we een strategische basis voor uw merkidentiteit, inclusief merkwaarden, -missie, -visie en -persoonlijkheid.",
    steps: [
      "Definitie van merkwaarden, -missie en -visie",
      "Ontwikkeling van merkpersoonlijkheid",
      "Positionering en onderscheidend vermogen",
      "Merkarchitectuur en -hiërarchie",
    ],
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Creatieve Ontwikkeling",
    description:
      "We vertalen de merkstrategie naar concrete visuele en verbale elementen die samen een coherente en onderscheidende merkidentiteit vormen.",
    steps: [
      "Logo-ontwikkeling en -verfijning",
      "Kleurenpalet en typografie selectie",
      "Ontwikkeling van grafische elementen en patronen",
      "Beeldtaal en fotografie richtlijnen",
    ],
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Verbale Identiteit",
    description:
      "We ontwikkelen een verbale identiteit die aansluit bij uw merkpersoonlijkheid en resoneert met uw doelgroep, inclusief tone of voice, tagline en kernboodschappen.",
    steps: [
      "Ontwikkeling van tone of voice en schrijfstijl",
      "Creatie van tagline en kernboodschappen",
      "Naamgeving voor producten of diensten",
      "Ontwikkeling van merkterminologie",
    ],
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    title: "Merkrichtlijnen",
    description:
      "We documenteren alle aspecten van uw merkidentiteit in uitgebreide merkrichtlijnen die zorgen voor consistentie in alle toepassingen en communicatie.",
    steps: [
      "Ontwikkeling van uitgebreide merkrichtlijnen",
      "Logo-gebruik en beschermingszone",
      "Kleur- en typografiespecificaties",
      "Toepassingsvoorbeelden en templates",
    ],
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: "Implementatie & Activatie",
    description:
      "We ondersteunen u bij de implementatie van uw nieuwe merkidentiteit over alle relevante touchpoints en helpen uw team om de nieuwe identiteit te omarmen en consistent toe te passen.",
    steps: [
      "Ontwikkeling van implementatieplan en roadmap",
      "Uitrol over digitale en fysieke touchpoints",
      "Training van medewerkers en partners",
      "Ontwikkeling van lancerings- en activatiecampagnes",
    ],
    icon: <Zap className="h-6 w-6" />,
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
              Wij creëren jouw unieke
              <span className="block">merkidentiteit</span>
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
              Wij ontwikkelen een unieke merkidentiteit die
              <span className="block text-[#a6e267] font-medium">uw bedrijf onderscheidt en laat groeien.</span>
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
              src={
                showcase.before.image ||
                `/placeholder.svg?height=400&width=600&query=outdated brand identity logo design`
              }
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
              src={
                showcase.after.image || `/placeholder.svg?height=400&width=600&query=modern brand identity logo design`
              }
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

export default function MerkidentiteitSection() {
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
              name: "Merkidentiteit",
              description:
                "Professionele merkidentiteit diensten om uw merk te versterken en herkenbaar te maken in de markt.",
              provider: {
                "@type": "Organization",
                name: "Multichoiceagency",
                url: "https://www.multichoiceagency.nl",
              },
              serviceType: "Brand Identity",
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
              Uniek & Herkenbaar
            </span>
            <h2
              className={cn(
                "text-4xl md:text-5xl font-bold mb-6 relative inline-block",
                isDark ? "text-white" : "text-[#2C4725]",
              )}
            >
              Merkidentiteit
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
              <span className="relative">Merkidentiteit Experts</span>
            </div>
            <p className={cn("text-lg", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
              Ontdek hoe Multichoiceagency een unieke en krachtige merkidentiteit ontwikkelt die uw bedrijf onderscheidt
              en laat groeien.
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
                  Wat is merkidentiteit?
                </h3>
                <p className={cn("mb-4", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                  Merkidentiteit is het geheel van visuele en verbale elementen dat uw merk definieert en onderscheidt
                  van concurrenten. Het omvat logo, kleurenpalet, typografie, beeldtaal, tone of voice en
                  merkpersoonlijkheid.
                </p>
                <p className={cn("mb-4", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                  Een sterke merkidentiteit zorgt voor herkenbaarheid, consistentie en emotionele verbinding met uw
                  doelgroep. Het is de visuele en verbale vertaling van uw merkwaarden, missie en visie.
                </p>
                <p className={cn(isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                  Bij Multichoiceagency ontwikkelen we unieke merkidentiteiten die uw bedrijf onderscheiden, uw
                  doelgroep aanspreken en uw bedrijf helpen groeien in een competitieve markt.
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
                  src="/placeholder.svg?height=600&width=800&query=brand identity diagram colorful"
                  alt="Merkidentiteit diagram"
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

                  {feature.id === "brand-identity" && (
                    <div
                      className={cn(
                        "p-4 rounded-lg",
                        isDark ? "bg-[#2C4725] text-white" : "bg-[#f0f7eb] text-[#2C4725]",
                      )}
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Merkidentiteit Elementen</h4>
                        <p className={isDark ? "text-white/80 text-sm" : "text-[#2C4725]/80 text-sm"}>
                          De bouwstenen van een sterke merkidentiteit
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex items-center mb-2">
                            <PenTool className={cn("h-4 w-4 mr-2", isDark ? "text-[#a6e267]" : "text-[#2C4725]")} />
                            <span className={isDark ? "text-sm text-white/90" : "text-sm text-[#2C4725]/90"}>
                              Logo Design
                            </span>
                          </div>
                          <p className={cn("text-xs", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                            Het visuele anker van uw merkidentiteit
                          </p>
                        </div>
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex items-center mb-2">
                            <Palette className={cn("h-4 w-4 mr-2", isDark ? "text-[#a6e267]" : "text-[#2C4725]")} />
                            <span className={isDark ? "text-sm text-white/90" : "text-sm text-[#2C4725]/90"}>
                              Kleurenpalet
                            </span>
                          </div>
                          <p className={cn("text-xs", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                            Strategisch gekozen kleuren die emoties oproepen
                          </p>
                        </div>
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex items-center mb-2">
                            <Type className={cn("h-4 w-4 mr-2", isDark ? "text-[#a6e267]" : "text-[#2C4725]")} />
                            <span className={isDark ? "text-sm text-white/90" : "text-sm text-[#2C4725]/90"}>
                              Typografie
                            </span>
                          </div>
                          <p className={cn("text-xs", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                            Lettertypen die uw merkpersoonlijkheid versterken
                          </p>
                        </div>
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex items-center mb-2">
                            <Feather className={cn("h-4 w-4 mr-2", isDark ? "text-[#a6e267]" : "text-[#2C4725]")} />
                            <span className={isDark ? "text-sm text-white/90" : "text-sm text-[#2C4725]/90"}>
                              Tone of Voice
                            </span>
                          </div>
                          <p className={cn("text-xs", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                            Uw unieke communicatiestijl en taalgebruik
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.id === "visual-identity" && (
                    <div
                      className={cn(
                        "p-4 rounded-lg",
                        isDark ? "bg-[#2C4725] text-white" : "bg-[#f0f7eb] text-[#2C4725]",
                      )}
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Visuele Identiteit</h4>
                        <p className={isDark ? "text-white/80 text-sm" : "text-[#2C4725]/80 text-sm"}>
                          De visuele taal van uw merk
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className={cn("p-4 rounded-lg", isDark ? "bg-white/10" : "bg-white/50")}>
                          <div className="flex justify-between items-center mb-3">
                            <span className={isDark ? "text-sm text-white/80" : "text-sm text-[#2C4725]/80"}>
                              Logo Varianten
                            </span>
                          </div>
                          <div className="flex gap-2 mb-3 justify-between">
                            <div className={cn("p-2 rounded-lg", isDark ? "bg-white/20" : "bg-[#2C4725]/10")}>
                              <div className="w-12 h-12 bg-[#a6e267] rounded-lg flex items-center justify-center">
                                <span className="text-[#2C4725] font-bold">M</span>
                              </div>
                              <p
                                className={cn(
                                  "text-xs mt-1 text-center",
                                  isDark ? "text-white/70" : "text-[#2C4725]/70",
                                )}
                              >
                                Primair
                              </p>
                            </div>
                            <div className={cn("p-2 rounded-lg", isDark ? "bg-white/20" : "bg-[#2C4725]/10")}>
                              <div className="w-12 h-12 bg-[#2C4725] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">M</span>
                              </div>
                              <p
                                className={cn(
                                  "text-xs mt-1 text-center",
                                  isDark ? "text-white/70" : "text-[#2C4725]/70",
                                )}
                              >
                                Secundair
                              </p>
                            </div>
                            <div className={cn("p-2 rounded-lg", isDark ? "bg-white/20" : "bg-[#2C4725]/10")}>
                              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-[#2C4725] font-bold">M</span>
                              </div>
                              <p
                                className={cn(
                                  "text-xs mt-1 text-center",
                                  isDark ? "text-white/70" : "text-[#2C4725]/70",
                                )}
                              >
                                Monochroom
                              </p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h5
                              className={cn("text-sm font-medium mb-2", isDark ? "text-white/90" : "text-[#2C4725]/90")}
                            >
                              Kleurenpalet
                            </h5>
                            <div className="flex gap-2">
                              <div className="w-8 h-8 rounded-full bg-[#a6e267]"></div>
                              <div className="w-8 h-8 rounded-full bg-[#2C4725]"></div>
                              <div className="w-8 h-8 rounded-full bg-[#f5f9f3]"></div>
                              <div className="w-8 h-8 rounded-full bg-[#333333]"></div>
                              <div className="w-8 h-8 rounded-full bg-white border border-gray-200"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.id === "brand-guidelines" && (
                    <div
                      className={cn(
                        "p-4 rounded-lg",
                        isDark ? "bg-[#2C4725] text-white" : "bg-[#f0f7eb] text-[#2C4725]",
                      )}
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Merkrichtlijnen</h4>
                        <p className={isDark ? "text-white/80 text-sm" : "text-[#2C4725]/80 text-sm"}>
                          Consistente toepassing van uw merkidentiteit
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
                            Uitgebreide merkrichtlijnen
                          </span>
                        </div>
                        <div className="flex gap-2 mb-3">
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-sm",
                              isDark ? "bg-white/20" : "bg-[#2C4725]/10 text-[#2C4725]",
                            )}
                          >
                            Logo gebruik
                          </span>
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-sm",
                              isDark ? "bg-[#a6e267] text-[#2C4725]" : "bg-[#2C4725] text-white",
                            )}
                          >
                            Kleurspecificaties
                          </span>
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-sm",
                              isDark ? "bg-white/20" : "bg-[#2C4725]/10 text-[#2C4725]",
                            )}
                          >
                            Typografie
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
                            Onze merkrichtlijnen zorgen voor consistentie in alle communicatie-uitingen, van website en
                            social media tot drukwerk en presentaties. Ze bevatten gedetailleerde instructies voor het
                            gebruik van alle merkidentiteitselementen.
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
                    Merkidentiteit
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
                        {feature.id === "brand-identity" &&
                          item === 1 &&
                          "Strategische ontwikkeling van merkwaarden en -persoonlijkheid"}
                        {feature.id === "brand-identity" &&
                          item === 2 &&
                          "Unieke merkidentiteit die resoneert met uw doelgroep"}
                        {feature.id === "brand-identity" &&
                          item === 3 &&
                          "Onderscheidend vermogen in een competitieve markt"}

                        {feature.id === "visual-identity" &&
                          item === 1 &&
                          "Professioneel logo design en visuele elementen"}
                        {feature.id === "visual-identity" &&
                          item === 2 &&
                          "Strategisch kleurenpalet en typografie selectie"}
                        {feature.id === "visual-identity" &&
                          item === 3 &&
                          "Consistente beeldtaal en grafische elementen"}

                        {feature.id === "brand-guidelines" &&
                          item === 1 &&
                          "Uitgebreide merkrichtlijnen voor consistent gebruik"}
                        {feature.id === "brand-guidelines" &&
                          item === 2 &&
                          "Templates en voorbeelden voor alle communicatie-uitingen"}
                        {feature.id === "brand-guidelines" &&
                          item === 3 &&
                          "Training en ondersteuning bij implementatie"}
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

          {/* Brand Identity Elements */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Elementen van Merkidentiteit
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                De bouwstenen van een sterke en onderscheidende merkidentiteit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandIdentityElements.map((element, index) => (
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
                Een systematische aanpak voor het ontwikkelen van uw merkidentiteit
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
                Een diepgaande kijk in onze merkidentiteit methodologie
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
                Hoe merkidentiteit verschillende sectoren helpt groeien
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
                Specialistische kennis en ervaring in alle aspecten van merkidentiteit
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
                Ontdek hoe we bedrijven hebben geholpen met effectieve merkidentiteit
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
                        `/placeholder.svg?height=400&width=600&query=professional ${encodeURIComponent(caseStudy.title.toLowerCase()) || "/placeholder.svg"}`
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

          {/* Showcases Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className={cn("text-3xl font-bold mb-4", isDark ? "text-white" : "text-[#2C4725]")}>
                Merkidentiteit Showcases
              </h3>
              <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/70" : "text-[#2C4725]/70")}>
                Bekijk hoe we merken hebben getransformeerd met effectieve merkidentiteit
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
                Ontdek hoe wij bedrijven hebben geholpen hun merkidentiteit te versterken
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
                          src={
                            testimonials[activeTestimonial].avatar ||
                            "/placeholder.svg?height=200&width=200&query=professional business portrait"
                          }
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
                Antwoorden op de meest gestelde vragen over merkidentiteit
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
                    src={
                      feature.imageSrc ||
                      `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(feature.title.toLowerCase())}`
                    }
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
                Versterk uw Merkidentiteit vandaag nog
              </h3>
              <p
                className={cn(
                  "max-w-2xl mx-auto mb-8 transition-colors duration-300",
                  isDark
                    ? "text-white/70 group-hover:text-white/90"
                    : "text-[#2C4725]/70 group-hover:text-[#2C4725]/90",
                )}
              >
                Geen gemiste kansen meer in uw merkidentiteit. Met de expertise van Multichoiceagency ontwikkelt u een
                unieke en krachtige merkidentiteit die uw bedrijf onderscheidt, uw doelgroep aanspreekt en uw bedrijf
                helpt groeien in een competitieve markt.
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
