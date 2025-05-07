import { Play, Film, Zap, Monitor, BarChart, Layers } from "lucide-react"
import ServiceLayout from "@/components/service-layout"
import SEO from "@/components/seo"

export const metadata = {
  title: "Animatie | Multichoiceagency",
  description:
    "Breng uw verhaal tot leven met professionele animaties. Ontdek hoe wij complexe boodschappen vereenvoudigen en uw merk op een dynamische en memorabele manier presenteren.",
}

export default function AnimatiePage() {
  return (
    <>
      <ServiceLayout
        title="Animatie"
        subtitle="Dynamische animaties"
        description="Breng uw verhaal tot leven met professionele animaties die complexe boodschappen vereenvoudigen en uw merk op een dynamische manier presenteren."
        icon={<Play className="h-4 w-4" />}
        features={[
          {
            title: "2D animatie",
            description:
              "Creëer levendige 2D animaties die uw boodschap op een heldere en visueel aantrekkelijke manier overbrengen.",
            icon: (
              <Layers className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "3D animatie",
            description:
              "Ontwikkel realistische 3D animaties die uw producten, diensten of concepten tot leven brengen met diepte en detail.",
            icon: (
              <Monitor className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Motion graphics",
            description:
              "Combineer grafisch ontwerp met beweging om complexe informatie op een visueel aantrekkelijke manier te presenteren.",
            icon: (
              <Zap className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Explainer video's",
            description:
              "Vereenvoudig complexe concepten, producten of diensten met duidelijke en engaging explainer animaties.",
            icon: (
              <Film className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Character animatie",
            description:
              "Breng karakters tot leven die resoneren met uw doelgroep en uw merk een persoonlijkheid geven.",
            icon: (
              <BarChart className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
        ]}
        process={[
          {
            title: "Briefing & concept",
            description:
              "We beginnen met het begrijpen van uw doelstellingen, doelgroep en boodschap om een sterk concept te ontwikkelen.",
          },
          {
            title: "Script & storyboard",
            description:
              "We ontwikkelen een script en storyboard dat uw boodschap helder overbrengt en de visuele flow van de animatie definieert.",
          },
          {
            title: "Style frames & design",
            description:
              "We creëren de visuele stijl van uw animatie, van karakters en omgevingen tot kleurenpalet en typografie.",
          },
          {
            title: "Animatie & sound design",
            description:
              "We brengen uw verhaal tot leven met professionele animatie, voice-over, muziek en geluidseffecten.",
          },
          {
            title: "Afwerking & levering",
            description:
              "We verfijnen de animatie tot in de details en leveren het eindproduct in de gewenste formaten voor verschillende platforms.",
          },
        ]}
        testimonial={{
          quote:
            "De animatievideo die Multichoiceagency voor ons heeft gemaakt, heeft ons geholpen om een complex product op een eenvoudige en aantrekkelijke manier uit te leggen. Het resultaat was niet alleen visueel indrukwekkend, maar heeft ook direct bijgedragen aan een hogere conversie op onze website.",
          author: "Joost Bakker",
          company: "Product Manager, InnovateTech Solutions",
          image: "/collaborative-product-strategy.png",
        }}
        relatedServices={[
          { title: "Videomarketing", slug: "videomarketing" },
          { title: "Contentmarketing", slug: "contentmarketing" },
          { title: "Visuele identiteit", slug: "visuele-identiteit" },
        ]}
        ctaTitle="Klaar om uw verhaal tot leven te brengen?"
        ctaDescription="Neem contact met ons op voor een vrijblijvend gesprek over hoe wij uw boodschap kunnen versterken met professionele animaties."
      >
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2D4625] dark:text-white">Waarom animatie?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Animatie is een krachtig medium om uw boodschap over te brengen en uw doelgroep te engageren. Effectieve
                animatie:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Vereenvoudigt complexe informatie en maakt het toegankelijk
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Trekt en houdt de aandacht van uw doelgroep vast
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Maakt abstracte concepten concreet en visualiseert ideeën
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Creëert een emotionele connectie met uw publiek
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Verhoogt de merkherinnering en conversie</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-[#2D4625] dark:text-[#a6e267]">Animatie toepassingen</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Animatie kan voor diverse doeleinden worden ingezet om uw communicatie te versterken:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Explainer video's</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Leg producten of diensten helder uit</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Bedrijfsvideo's</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Presenteer uw merk en waarden</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Instructievideo's</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Toon stapsgewijze handleidingen</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Social media content</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Creëer engaging korte animaties</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Infographics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Visualiseer data en statistieken</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Productdemo's</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Toon producten in actie</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  )
}
