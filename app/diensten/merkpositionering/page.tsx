import { Compass, Target, Users, BarChart, Lightbulb, Flag } from "lucide-react"
import ServiceLayout from "@/components/service-layout"
import SEO from "@/components/seo"

export const metadata = {
  title: "Merkpositionering | Multichoiceagency",
  description:
    "Versterk uw marktpositie met een onderscheidende merkpositionering. Ontdek hoe wij uw merk strategisch positioneren voor maximale impact en relevantie.",
}

export default function MerkpositioneringPage() {
  return (
    <>
      <SEO
        title="Merkpositionering | Multichoiceagency"
        description="Versterk uw marktpositie met een onderscheidende merkpositionering. Ontdek hoe wij uw merk strategisch positioneren voor maximale impact en relevantie."
        canonical="https://multichoiceagency.nl/diensten/merkpositionering"
      />

      <ServiceLayout
        title="Merkpositionering"
        subtitle="Strategische merkpositionering"
        description="Versterk uw marktpositie met een onderscheidende merkpositionering die resoneert met uw doelgroep en u onderscheidt van de concurrentie."
        icon={<Compass className="h-4 w-4" />}
        features={[
          {
            title: "Onderscheidend vermogen",
            description:
              "Creëer een unieke positie in de markt die uw merk onderscheidt van concurrenten en aansluit bij de behoeften van uw doelgroep.",
            icon: (
              <Target className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Doelgroepgerichte aanpak",
            description:
              "Ontwikkel een merkpositionering die direct aansluit bij de wensen, behoeften en waarden van uw specifieke doelgroep.",
            icon: (
              <Users className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Data-gedreven inzichten",
            description:
              "Gebruik marktonderzoek en data-analyse om uw merkpositionering te onderbouwen met feitelijke inzichten en trends.",
            icon: (
              <BarChart className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Strategische differentiatie",
            description:
              "Identificeer en benadruk de unieke eigenschappen van uw merk die zorgen voor een duidelijke differentiatie in de markt.",
            icon: (
              <Lightbulb className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Consistente merkboodschap",
            description:
              "Ontwikkel een heldere en consistente merkboodschap die uw positionering versterkt over alle communicatiekanalen.",
            icon: (
              <Flag className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
        ]}
        process={[
          {
            title: "Marktanalyse & onderzoek",
            description:
              "We beginnen met een grondige analyse van uw markt, concurrenten en doelgroep om inzicht te krijgen in de huidige positionering en kansen voor differentiatie.",
          },
          {
            title: "Strategische workshops",
            description:
              "In interactieve sessies met uw team identificeren we de kernwaarden, unieke eigenschappen en ambities van uw merk die de basis vormen voor uw positionering.",
          },
          {
            title: "Positioneringsstrategie",
            description:
              "We ontwikkelen een heldere positioneringsstrategie die definieert hoe uw merk zich onderscheidt en welke waarde u biedt aan uw doelgroep.",
          },
          {
            title: "Implementatieplan",
            description:
              "We creëren een concreet plan voor het implementeren van uw nieuwe merkpositionering in alle aspecten van uw communicatie en bedrijfsvoering.",
          },
          {
            title: "Monitoring & optimalisatie",
            description:
              "Na implementatie monitoren we de effectiviteit van uw merkpositionering en stellen we waar nodig bij om maximale impact te garanderen.",
          },
        ]}
        testimonial={{
          quote:
            "De merkpositionering die Multichoiceagency voor ons heeft ontwikkeld, heeft ons geholpen om een duidelijke en onderscheidende plaats in de markt in te nemen. Dit heeft direct geleid tot meer herkenning bij onze doelgroep en een sterkere marktpositie.",
          author: "Martijn de Vries",
          company: "CEO, InnovateTech B.V.",
          image: "/placeholder.svg?key=uusan",
        }}
        relatedServices={[
          { title: "Merkidentiteit", slug: "merkidentiteit" },
          { title: "Rebranding", slug: "rebranding" },
          { title: "Contentmarketing", slug: "contentmarketing" },
        ]}
        ctaTitle="Klaar om uw merk strategisch te positioneren?"
        ctaDescription="Neem contact met ons op voor een vrijblijvend gesprek over hoe wij uw merk kunnen helpen onderscheiden in de markt."
      >
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2D4625] dark:text-white">Waarom merkpositionering?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In een steeds competitievere markt is een sterke merkpositionering essentieel om op te vallen en
                relevant te blijven voor uw doelgroep. Een effectieve merkpositionering:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Onderscheidt u van concurrenten</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Creëert een emotionele connectie met uw doelgroep
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Biedt een duidelijk kader voor alle marketingactiviteiten
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Verhoogt de merkwaarde en klantloyaliteit</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-[#2D4625] dark:text-[#a6e267]">
                Onze merkpositionering aanpak
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bij Multichoiceagency geloven we in een strategische en data-gedreven aanpak voor merkpositionering. We
                combineren marktinzichten met creatief denken om een positionering te creëren die:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#a6e267] rounded-full mr-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Authentiek is voor uw merk</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#a6e267] rounded-full mr-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Relevant is voor uw doelgroep</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#a6e267] rounded-full mr-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Onderscheidend is in de markt</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#a6e267] rounded-full mr-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">Duurzaam is op lange termijn</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#a6e267] rounded-full mr-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Consistent toepasbaar is in alle communicatie
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  )
}
