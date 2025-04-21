import { RefreshCw, Compass, Palette, Zap, Users, BarChart } from "lucide-react"
import ServiceLayout from "@/components/service-layout"
import SEO from "@/components/seo"

export const metadata = {
  title: "Rebranding | Multichoiceagency",
  description:
    "Transformeer uw merk met een strategische rebranding. Ontdek hoe wij uw merk kunnen vernieuwen en versterken om beter aan te sluiten bij uw doelgroep, doelen en toekomstvisie.",
}

export default function RebrandingPage() {
  return (
    <>
      <SEO
        title="Rebranding | Multichoiceagency"
        description="Transformeer uw merk met een strategische rebranding. Ontdek hoe wij uw merk kunnen vernieuwen en versterken om beter aan te sluiten bij uw doelgroep, doelen en toekomstvisie."
        canonical="https://multichoiceagency.nl/diensten/rebranding"
      />

      <ServiceLayout
        title="Rebranding"
        subtitle="Strategische merkvernieuwing"
        description="Transformeer uw merk met een strategische rebranding die aansluit bij uw doelgroep, doelen en toekomstvisie."
        icon={<RefreshCw className="h-4 w-4" />}
        features={[
          {
            title: "Merkanalyse",
            description:
              "Analyseer uw huidige merkpositie, perceptie en prestaties om inzicht te krijgen in verbeterpunten en kansen.",
            icon: (
              <BarChart className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Herpositionering",
            description:
              "Ontwikkel een nieuwe, onderscheidende positie in de markt die aansluit bij uw bedrijfsdoelen en doelgroep.",
            icon: (
              <Compass className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Visuele identiteit",
            description:
              "Creëer een vernieuwde visuele identiteit die uw nieuwe merkpositionering en -waarden weerspiegelt.",
            icon: (
              <Palette className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Interne activatie",
            description:
              "Betrek uw medewerkers bij het rebrandingproces en zorg voor draagvlak en consistente implementatie.",
            icon: (
              <Users className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Lancering & implementatie",
            description:
              "Ontwikkel een impactvolle lanceringsstrategie en implementeer uw nieuwe merk over alle touchpoints.",
            icon: (
              <Zap className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
        ]}
        process={[
          {
            title: "Merkaudit & analyse",
            description:
              "We beginnen met een grondige analyse van uw huidige merk, marktpositie, concurrenten en doelgroep om inzicht te krijgen in de noodzaak en richting van de rebranding.",
          },
          {
            title: "Strategie & positionering",
            description:
              "We ontwikkelen een nieuwe merkstrategie en positionering die aansluit bij uw bedrijfsdoelen, doelgroep en toekomstvisie.",
          },
          {
            title: "Creatieve ontwikkeling",
            description:
              "We creëren een nieuwe visuele en verbale identiteit die uw nieuwe merkpositionering en -waarden tot leven brengt.",
          },
          {
            title: "Interne & externe activatie",
            description:
              "We ontwikkelen een plan voor het activeren van uw nieuwe merk, zowel intern bij medewerkers als extern bij klanten en partners.",
          },
          {
            title: "Implementatie & monitoring",
            description:
              "We ondersteunen u bij de implementatie van uw nieuwe merk over alle touchpoints en monitoren de impact en perceptie.",
          },
        ]}
        testimonial={{
          quote:
            "De rebranding die Multichoiceagency voor ons heeft gerealiseerd, heeft ons merk getransformeerd en nieuwe energie gegeven. Het proces was grondig en inclusief, en het resultaat heeft niet alleen onze visuele identiteit vernieuwd maar ook onze hele bedrijfscultuur positief beïnvloed.",
          author: "Robert Janssen",
          company: "CEO, TechSolutions Group",
          image: "/modern-tech-leader.png",
        }}
        relatedServices={[
          { title: "Merkpositionering", slug: "merkpositionering" },
          { title: "Merkidentiteit", slug: "merkidentiteit" },
          { title: "Visuele identiteit", slug: "visuele-identiteit" },
        ]}
        ctaTitle="Klaar voor een merkvernieuwing?"
        ctaDescription="Neem contact met ons op voor een vrijblijvend gesprek over hoe wij uw merk kunnen transformeren met een strategische rebranding."
      >
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2D4625] dark:text-white">Waarom rebranding?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Een rebranding kan een krachtige manier zijn om uw merk te vernieuwen en te versterken. Redenen voor een
                rebranding kunnen zijn:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Verandering in bedrijfsstrategie of -focus</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Fusie, overname of andere organisatorische verandering
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Verouderde merkidentiteit die niet meer aansluit bij de markt
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Negatieve merkassociaties of reputatieproblemen
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Internationale expansie of nieuwe doelgroepen bereiken
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-[#2D4625] dark:text-[#a6e267]">Onze rebranding aanpak</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bij Multichoiceagency geloven we in een strategische en inclusieve aanpak voor rebranding:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <BarChart className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Data-gedreven</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We baseren beslissingen op grondige analyse en inzichten
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Inclusief proces</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We betrekken key stakeholders voor draagvlak en input
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Compass className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Strategisch gefundeerd</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We zorgen dat de rebranding aansluit bij uw bedrijfsstrategie
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Impactvolle implementatie</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We zorgen voor een effectieve lancering en uitrol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  )
}
