import { Megaphone, Target, BarChart, Zap, Globe, Rocket } from "lucide-react"
import ServiceLayout from "@/components/service-layout"
import SEO from "@/components/seo"

export const metadata = {
  title: "Campagnes en Activatie | Multichoiceagency",
  description:
    "Creëer impactvolle marketingcampagnes die uw doelgroep activeren. Ontdek hoe wij uw merk tot leven brengen met strategische campagnes en activaties die resultaten opleveren.",
}

export default function CampagnesEnActivatiePage() {
  return (
    <>
      <SEO
        title="Campagnes en Activatie | Multichoiceagency"
        description="Creëer impactvolle marketingcampagnes die uw doelgroep activeren. Ontdek hoe wij uw merk tot leven brengen met strategische campagnes en activaties die resultaten opleveren."
        canonical="https://multichoiceagency.nl/diensten/campagnes-en-activatie"
      />

      <ServiceLayout
        title="Campagnes en Activatie"
        subtitle="Impactvolle marketingcampagnes"
        description="Creëer impactvolle marketingcampagnes die uw doelgroep activeren en uw merk tot leven brengen met meetbare resultaten."
        icon={<Megaphone className="h-4 w-4" />}
        features={[
          {
            title: "Strategische campagnes",
            description:
              "Ontwikkel doelgerichte campagnes die aansluiten bij uw bedrijfsdoelen en een meetbare impact hebben op uw resultaten.",
            icon: (
              <Target className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Creatieve concepten",
            description:
              "Creëer onderscheidende en memorabele campagneconcepten die resoneren met uw doelgroep en uw boodschap versterken.",
            icon: (
              <Zap className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Omnichannel activatie",
            description:
              "Activeer uw campagnes over alle relevante kanalen voor een consistente en impactvolle merkervaring.",
            icon: (
              <Globe className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Performance marketing",
            description:
              "Optimaliseer uw campagnes voor maximale ROI met data-gedreven inzichten en continue optimalisatie van uw marketingkanalen.",
            icon: (
              <BarChart className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Campagne analyse",
            description:
              "Meet en analyseer de resultaten van uw campagnes om inzicht te krijgen in de effectiviteit en toekomstige campagnes te verbeteren.",
            icon: (
              <Rocket className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
        ]}
        process={[
          {
            title: "Strategie & doelstellingen",
            description:
              "We beginnen met het definiëren van duidelijke campagnedoelstellingen en een strategie die aansluit bij uw bedrijfsdoelen en doelgroep.",
          },
          {
            title: "Creatieve conceptontwikkeling",
            description:
              "We ontwikkelen onderscheidende creatieve concepten die uw boodschap op een impactvolle manier overbrengen aan uw doelgroep.",
          },
          {
            title: "Kanaalstrategie & planning",
            description:
              "We bepalen de optimale mix van kanalen en touchpoints om uw doelgroep te bereiken en plannen de uitrol van uw campagne.",
          },
          {
            title: "Productie & implementatie",
            description:
              "We produceren alle benodigde campagnematerialen en implementeren uw campagne over alle geselecteerde kanalen.",
          },
          {
            title: "Monitoring & optimalisatie",
            description:
              "We monitoren de prestaties van uw campagne continu en optimaliseren waar nodig om maximale resultaten te behalen.",
          },
        ]}
        testimonial={{
          quote:
            "De campagne die Multichoiceagency voor ons heeft ontwikkeld, heeft alle verwachtingen overtroffen. Niet alleen was het creatieve concept onderscheidend en perfect passend bij ons merk, maar de resultaten waren ook meetbaar beter dan bij eerdere campagnes.",
          author: "Thomas van der Berg",
          company: "Marketing Manager, Dutch Retail Group",
          image: "/placeholder.svg?key=4wkjs",
        }}
        relatedServices={[
          { title: "Contentmarketing", slug: "contentmarketing" },
          { title: "Videomarketing", slug: "videomarketing" },
          { title: "PR", slug: "pr" },
        ]}
        ctaTitle="Klaar voor een impactvolle campagne?"
        ctaDescription="Neem contact met ons op voor een vrijblijvend gesprek over hoe wij uw merk kunnen activeren met een strategische en creatieve campagne."
      >
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2D4625] dark:text-white">Waarom campagnes en activatie?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Effectieve marketingcampagnes zijn essentieel om uw merk te activeren, uw doelgroep te bereiken en uw
                bedrijfsdoelen te realiseren. Een strategische campagne:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Vergroot de zichtbaarheid en bekendheid van uw merk
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Stimuleert concrete actie bij uw doelgroep</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Versterkt uw merkpositionering en -waarden</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Levert meetbare resultaten en ROI</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-[#2D4625] dark:text-[#a6e267]">Onze campagne expertise</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bij Multichoiceagency combineren we strategisch denken met creatieve concepten en data-gedreven
                optimalisatie om campagnes te creëren die echt impact maken:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Branding campagnes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Versterk uw merkbekendheid en -perceptie</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Product launches</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Introduceer nieuwe producten met impact</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Lead generatie</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Genereer kwalitatieve leads voor uw sales team
                  </p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Conversie campagnes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stimuleer directe verkoop en conversie</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Loyaliteitsprogramma's</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Versterk klantrelaties en loyaliteit</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Evenement activaties</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Creëer memorabele merkbeleving</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  )
}
