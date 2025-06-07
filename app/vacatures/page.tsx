import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"
import HeroSection from "@/components/Hero-section"
import { Vacature, vacaturesData } from "@/lib/vacatures"

export const metadata: Metadata = {
  title: "Vacatures | Groei met ons mee - Multichoiceagency",
  description:
    "Bekijk onze openstaande vacatures en ontdek jouw carrièremogelijkheden bij Multichoiceagency. Werk aan innovatieve projecten in een dynamisch team.",
  openGraph: {
    title: "Vacatures | Groei met ons mee - Multichoiceagency",
    description: "Vind jouw droombaan bij een toonaangevend digital agency.",
    url: "/vacatures",
  },
}

const VacatureCard = ({ vacature }: { vacature: Vacature }) => (
  <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{vacature.title}</h3>
    <div className="flex items-center text-sm text-lime-600 dark:text-lime-400 mb-3">
      <Briefcase className="w-4 h-4 mr-2 flex-shrink-0" />
      <span>{vacature.department}</span>
    </div>
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
      <span>{vacature.location}</span>
    </div>
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
      <span>
        {vacature.type} - {vacature.experienceLevel}
      </span>
    </div>
    <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 flex-grow">{vacature.shortDescription}</p>
    <Button
      asChild
      variant="outline"
      className="mt-auto group border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-white dark:border-lime-500 dark:text-lime-400 dark:hover:bg-lime-500 dark:hover:text-gray-900"
    >
      <Link href={`/vacatures/${vacature.slug}`}>
        Bekijk Vacature
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </Button>
  </div>
)

export default function VacaturesPage() {
  const heroVideoSrc = "https://cdn.dribbble.com/userupload/5894803/file/original-d9a0d59ac66e6ab93007492a80371ad0.mp4" // Example video for careers

  return (
    <div className="bg-gray-50 dark:bg-black">
      <HeroSection
        title="Werken bij Multichoiceagency: Jouw Toekomst Start Hier"
        description="Wij zijn altijd op zoek naar getalenteerde en gepassioneerde individuen om ons team te versterken. Ontdek onze cultuur, de uitdagingen die we bieden en hoe jij kunt bijdragen aan het succes van onze klanten."
        buttonText="Ontmoet het Team"
        buttonLink="/over-ons" // Link to about us or team page
        videoSrc={heroVideoSrc}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Openstaande Vacatures</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Gepassioneerd door digitale innovatie? Bekijk hieronder onze actuele vacatures en vind de rol die bij jou
              past.
            </p>
          </div>

          {vacaturesData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vacaturesData.map((vacature) => (
                <VacatureCard key={vacature.slug} vacature={vacature} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Momenteel geen openstaande vacatures
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Houd deze pagina in de gaten of stuur ons een open sollicitatie.
              </p>
            </div>
          )}

          <div className="mt-16 lg:mt-20 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Staat jouw droombaan er niet tussen?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
              We zijn altijd geïnteresseerd in contact met talent. Stuur ons je open sollicitatie en overtuig ons van
              jouw toegevoegde waarde!
            </p>
            <Button
              size="lg"
              className="bg-lime-500 hover:bg-lime-600 text-gray-900 dark:text-white dark:bg-lime-600 dark:hover:bg-lime-700"
            >
              <Link href="mailto:careers@multichoice.nl?subject=Open Sollicitatie">Stuur een open sollicitatie</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
