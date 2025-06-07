import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, DraftingCompassIcon as Draft, Rocket, Lightbulb, Settings, TrendingUp } from "lucide-react" // Added more icons for variety
import HeroSection from "@/components/Hero-section"

export async function generateMetadata(): Promise<Metadata> {
  const title = "Het Catalyst Framework | Onze Werkwijze voor Digitaal Succes - Multichoiceagency"
  const description =
    "Ontdek ons Catalyst Framework: een bewezen methodologie in 5 fasen die uw visie transformeert in een krachtig, groeiend digitaal platform. Van Vonk tot Voorsprong met Multichoiceagency."
  const ogImageUrl = "/og-catalyst-werkwijze.png" // Specific OG image for this page

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      url: "https://www.multichoiceagency.nl/onze-werkwijze", // Replace with your actual domain
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Het Catalyst Framework - Onze Werkwijze bij Multichoiceagency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: "https://www.multichoiceagency.nl/onze-werkwijze", // Replace with your actual domain
    },
  }
}

const PhaseCard = ({
  icon,
  phaseNumber,
  title,
  description,
  className,
}: {
  icon: React.ReactNode
  phaseNumber: string
  title: string
  description: string
  className?: string
}) => (
  <div
    className={`relative p-6 sm:p-8 bg-white dark:bg-gray-900/70 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-lime-500/10 transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-lime-500/50 dark:hover:border-lime-500/70 group ${className}`}
  >
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
      <div className="flex-shrink-0 w-12 h-12 bg-lime-100 dark:bg-lime-900/50 text-lime-600 dark:text-lime-400 rounded-lg flex items-center justify-center group-hover:bg-lime-500 group-hover:text-white dark:group-hover:bg-lime-500 dark:group-hover:text-gray-900 transition-colors duration-300">
        {icon}
      </div>
      <div className="flex-grow">
        <p className="text-xs font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-wider mb-1">
          {phaseNumber}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>
  </div>
)

export default function OnzeWerkwijzePage() {
  // Using a Dribbble video that might represent strategy or innovation
  const heroVideoSrc = "https://cdn.dribbble.com/userupload/11186399/file/original-1a851034bed5335985141b3b74155991.mp4"

  const phases = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      phaseNumber: "Fase 1",
      title: "De Vonk: Discovery & Diagnosis",
      description:
        "We duiken diep in uw organisatie, markt en doelstellingen. Via workshops en data-analyse smeden we een Strategische Blauwdruk – het kompas voor uw digitale succes.",
      className: "lg:col-span-1",
    },
    {
      icon: <Draft className="w-6 h-6" />,
      phaseNumber: "Fase 2",
      title: "De Architectuur: Design & Prototyping",
      description:
        "Strategie wordt tastbaar. We creëren een solide technische architectuur en een interactief prototype, zodat u de gebruikersreis ervaart en valideert vóór de bouw.",
      className: "lg:col-span-1",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      phaseNumber: "Fase 3",
      title: "De Creatie: Agile Development & Build",
      description:
        "In iteratieve sprints bouwen we een robuust, schaalbaar platform. Transparantie en continue feedback zorgen voor een snelle, kwalitatieve oplevering.",
      className: "lg:col-span-1",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      phaseNumber: "Fase 4",
      title: "De Lancering: Launch & Acceleration",
      description:
        "Een vlekkeloze, strategische livegang. Gevolgd door 'Hypercare' – intensieve monitoring en directe support voor een soepele start en snelle optimalisatie.",
      className: "lg:col-span-1 md:col-span-2 lg:col-start-1",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      phaseNumber: "Fase 5",
      title: "De Groei: Evolution & Partnership",
      description:
        "Uw platform is een levend bedrijfsmiddel. Als strategisch partner zorgen we via data, A/B-tests en een Groei Roadmap voor continue evolutie en blijvende voorsprong.",
      className: "lg:col-span-2",
    },
  ]

  return (
    <div className="bg-gray-50 dark:bg-black">
      <HeroSection
        title="Het Catalyst Framework: Van Vonk tot Voorsprong"
        description="Een bewezen methodologie die complexe uitdagingen omzet in elegante, resultaatgerichte digitale oplossingen. Wij zijn de katalysator voor uw groei en digitale transformatie."
        buttonText="Start Jouw Transformatie"
        buttonLink="/offerte-aanvragen"
        videoSrc={"/partners/ui.mp4"}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Uw Route naar Digitaal Leiderschap
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Ons Catalyst Framework is een iteratief en collaboratief proces dat garant staat voor kwaliteit,
              transparantie en een eindproduct dat uw verwachtingen overtreft. Elke fase bouwt voort op de vorige, wat
              resulteert in een krachtig momentum voor uw project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {phases.map((phase, index) => (
              <PhaseCard
                key={index}
                icon={phase.icon}
                phaseNumber={phase.phaseNumber}
                title={phase.title}
                description={phase.description}
                className={phase.className}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Zap className="w-16 h-16 text-lime-500 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Klaar om de vonk te ontsteken?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Laten we samen ontdekken hoe het Catalyst Framework uw organisatie kan transformeren. Plan een
              vrijblijvend strategiegesprek en zet de eerste stap naar digitale excellentie.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-lime-500 hover:bg-lime-600 text-gray-900 dark:text-white dark:bg-lime-600 dark:hover:bg-lime-700 px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
              >
                <Link href="/contact">Plan een Strategiegesprek</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-lime-500 text-lime-500 hover:bg-lime-500/10 hover:text-lime-600 dark:border-lime-500 dark:text-lime-400 dark:hover:bg-lime-500/20 dark:hover:text-lime-300 px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
              >
                <Link href="/cases">Bekijk Onze Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
