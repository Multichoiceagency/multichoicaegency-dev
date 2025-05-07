import { Palette, ImageIcon, Layout, PenTool, Layers } from "lucide-react"
import ServiceLayout from "@/components/service-layout"
import SEO from "@/components/seo"

export const metadata = {
  title: "Visuele Identiteit | Multichoiceagency",
  description:
    "Creëer een onderscheidende visuele identiteit die uw merk direct herkenbaar maakt. Ontdek hoe wij uw merkwaarden vertalen naar een krachtige visuele taal die resoneert met uw doelgroep.",
}

export default function VisueleIdentiteitPage() {
  return (
    <>

      <ServiceLayout
        title="Visuele Identiteit"
        subtitle="Onderscheidende visuele merkidentiteit"
        description="Creëer een onderscheidende visuele identiteit die uw merk direct herkenbaar maakt en uw merkwaarden visueel tot leven brengt."
        icon={<Palette className="h-4 w-4" />}
        features={[
          {
            title: "Logo design",
            description:
              "Ontwikkel een uniek en memorabel logo dat de essentie van uw merk vat en direct herkenbaar is voor uw doelgroep.",
            icon: (
              <PenTool className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Kleurenpalet",
            description:
              "Creëer een onderscheidend kleurenpalet dat de persoonlijkheid van uw merk versterkt en consistentie biedt over alle touchpoints.",
            icon: (
              <Palette className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Typografie",
            description:
              "Selecteer lettertypen die de toon van uw merk ondersteunen en zorgen voor leesbaarheid en herkenbaarheid in alle communicatie.",
            icon: (
              <Layout className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Beeldtaal",
            description:
              "Ontwikkel een consistente visuele stijl voor fotografie, illustraties en graphics die uw merkidentiteit versterkt.",
            icon: (
              <ImageIcon className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Merkrichtlijnen",
            description:
              "Creëer uitgebreide richtlijnen voor het consistent toepassen van uw visuele identiteit over alle communicatiemiddelen.",
            icon: (
              <Layers className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
        ]}
        process={[
          {
            title: "Onderzoek & analyse",
            description:
              "We beginnen met een grondige analyse van uw merk, doelgroep, concurrenten en markt om inzicht te krijgen in de context waarin uw visuele identiteit moet functioneren.",
          },
          {
            title: "Conceptontwikkeling",
            description:
              "We ontwikkelen meerdere creatieve concepten voor uw visuele identiteit die aansluiten bij uw merkwaarden en -positionering.",
          },
          {
            title: "Design uitwerking",
            description:
              "We werken het gekozen concept uit tot een complete visuele identiteit met logo, kleurenpalet, typografie en beeldtaal.",
          },
          {
            title: "Toepassingen",
            description:
              "We tonen hoe uw nieuwe visuele identiteit wordt toegepast op verschillende communicatiemiddelen, van visitekaartjes tot website.",
          },
          {
            title: "Merkrichtlijnen & implementatie",
            description:
              "We leveren uitgebreide merkrichtlijnen en ondersteunen u bij de implementatie van uw nieuwe visuele identiteit.",
          },
        ]}
        testimonial={{
          quote:
            "De visuele identiteit die Multichoiceagency voor ons heeft ontwikkeld, heeft ons merk een enorme boost gegeven. Het is niet alleen visueel aantrekkelijk, maar vertelt ook perfect het verhaal van ons merk en resoneert met onze doelgroep.",
          author: "Mark de Vries",
          company: "Oprichter, GreenTech Innovations",
          image: "/tech-founder-brainstorm.png",
        }}
        relatedServices={[
          { title: "Merkidentiteit", slug: "merkidentiteit" },
          { title: "Rebranding", slug: "rebranding" },
          { title: "Merkpositionering", slug: "merkpositionering" },
        ]}
        ctaTitle="Klaar voor een onderscheidende visuele identiteit?"
        ctaDescription="Neem contact met ons op voor een vrijblijvend gesprek over hoe wij uw merk visueel tot leven kunnen brengen."
      >
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2D4625] dark:text-white">Waarom visuele identiteit?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Een sterke visuele identiteit is essentieel voor het bouwen van een herkenbaar en onderscheidend merk.
                Een effectieve visuele identiteit:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Maakt uw merk direct herkenbaar voor uw doelgroep
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Communiceert uw merkwaarden en -persoonlijkheid
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Zorgt voor consistentie over alle touchpoints
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Onderscheidt u van concurrenten in een visueel drukke wereld
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-[#2D4625] dark:text-[#a6e267]">
                Elementen van een sterke visuele identiteit
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Een complete visuele identiteit bestaat uit verschillende elementen die samen een coherent geheel
                vormen:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <PenTool className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Logo</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Het centrale visuele element dat uw merk identificeert
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Palette className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Kleurenpalet</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      De kleuren die de persoonlijkheid van uw merk versterken
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Layout className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Typografie</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      De lettertypen die de toon van uw merk ondersteunen
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <ImageIcon className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Beeldtaal</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      De visuele stijl voor fotografie, illustraties en graphics
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
