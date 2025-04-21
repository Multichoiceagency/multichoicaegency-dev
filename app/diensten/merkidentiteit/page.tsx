import { Palette, Fingerprint, Layers, MessageSquare, Brush, PenTool } from "lucide-react"
import ServiceLayout from "@/components/service-layout"
import SEO from "@/components/seo"

export const metadata = {
  title: "Merkidentiteit | Multichoiceagency",
  description:
    "Ontwikkel een krachtige merkidentiteit die uw bedrijfswaarden weerspiegelt. Ontdek hoe wij uw merk een unieke visuele en verbale identiteit geven die resoneert met uw doelgroep.",
}

export default function MerkidentiteitPage() {
  return (
    <>
      <SEO
        title="Merkidentiteit | Multichoiceagency"
        description="Ontwikkel een krachtige merkidentiteit die uw bedrijfswaarden weerspiegelt. Ontdek hoe wij uw merk een unieke visuele en verbale identiteit geven die resoneert met uw doelgroep."
        canonical="https://multichoiceagency.nl/diensten/merkidentiteit"
      />

      <ServiceLayout
        title="Merkidentiteit"
        subtitle="Unieke merkidentiteit ontwikkeling"
        description="Ontwikkel een krachtige merkidentiteit die uw bedrijfswaarden weerspiegelt en een blijvende indruk maakt op uw doelgroep."
        icon={<Fingerprint className="h-4 w-4" />}
        features={[
          {
            title: "Visuele identiteit",
            description:
              "Creëer een onderscheidende visuele taal met logo, kleurenpalet, typografie en beeldtaal die uw merk direct herkenbaar maakt.",
            icon: (
              <Palette className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Verbale identiteit",
            description:
              "Ontwikkel een unieke tone-of-voice, merkwaarden en communicatiestijl die uw merkpersoonlijkheid versterkt.",
            icon: (
              <MessageSquare className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Merkarchitectuur",
            description:
              "Creëer een samenhangende structuur voor uw merkenportfolio die duidelijkheid schept voor uw klanten en interne stakeholders.",
            icon: (
              <Layers className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Merkrichtlijnen",
            description:
              "Ontvang uitgebreide richtlijnen voor het consistent toepassen van uw merkidentiteit over alle touchpoints.",
            icon: (
              <PenTool className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Merkimplementatie",
            description:
              "Krijg ondersteuning bij het uitrollen van uw nieuwe merkidentiteit over alle communicatiemiddelen en kanalen.",
            icon: (
              <Brush className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
        ]}
        process={[
          {
            title: "Merkanalyse & onderzoek",
            description:
              "We beginnen met een grondige analyse van uw huidige merkidentiteit, marktpositie en doelgroep om inzicht te krijgen in de sterke punten en verbetermogelijkheden.",
          },
          {
            title: "Merkstrategie ontwikkeling",
            description:
              "We definiëren uw merkpersoonlijkheid, waarden, missie en visie die als fundament dienen voor uw visuele en verbale identiteit.",
          },
          {
            title: "Creatieve conceptontwikkeling",
            description:
              "Ons creatieve team ontwikkelt meerdere concepten voor uw nieuwe merkidentiteit, inclusief logo, kleurenpalet, typografie en beeldtaal.",
          },
          {
            title: "Verfijning & finalisering",
            description:
              "Na uw feedback verfijnen we het gekozen concept tot een complete merkidentiteit die perfect aansluit bij uw merkstrategie.",
          },
          {
            title: "Merkrichtlijnen & implementatie",
            description:
              "We leveren uitgebreide merkrichtlijnen en ondersteunen u bij de implementatie van uw nieuwe merkidentiteit over alle touchpoints.",
          },
        ]}
        testimonial={{
          quote:
            "De nieuwe merkidentiteit die Multichoiceagency voor ons heeft ontwikkeld, heeft ons merk een enorme boost gegeven. Niet alleen zien we er nu professioneler uit, maar onze klanten herkennen en waarderen ook de consistentie in onze communicatie.",
          author: "Lisa Jansen",
          company: "Marketing Director, GreenTech Solutions",
          image: "/placeholder.svg?key=tajry",
        }}
        relatedServices={[
          { title: "Merkpositionering", slug: "merkpositionering" },
          { title: "Visuele identiteit", slug: "visuele-identiteit" },
          { title: "Rebranding", slug: "rebranding" },
        ]}
        ctaTitle="Klaar voor een onderscheidende merkidentiteit?"
        ctaDescription="Neem contact met ons op voor een vrijblijvend gesprek over hoe wij uw merk een unieke en krachtige identiteit kunnen geven."
      >
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2D4625] dark:text-white">Waarom merkidentiteit?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Een sterke merkidentiteit is de visuele en verbale vertaling van uw merkwaarden en positionering. Het is
                wat uw merk herkenbaar, onderscheidend en memorabel maakt. Een effectieve merkidentiteit:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Creëert herkenbaarheid en vertrouwen bij uw doelgroep
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Communiceert uw waarden en persoonlijkheid</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Zorgt voor consistentie in alle communicatie</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Onderscheidt u van concurrenten in een drukke markt
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-[#2D4625] dark:text-[#a6e267]">
                Elementen van een sterke merkidentiteit
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Een complete merkidentiteit bestaat uit verschillende elementen die samen een coherent geheel vormen:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Palette className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Visuele elementen</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Logo, kleurenpalet, typografie, iconografie, beeldtaal
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Verbale elementen</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Naam, slogan, tone-of-voice, kernboodschappen
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Fingerprint className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Merkpersoonlijkheid</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Waarden, missie, visie, persoonlijkheidskenmerken
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Layers className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Toepassingen</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Website, social media, drukwerk, verpakkingen, omgevingen
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
