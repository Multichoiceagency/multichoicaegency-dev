import { Globe, Newspaper, Users, MessageSquare, Radio, Award } from "lucide-react"
import ServiceLayout from "@/components/service-layout"
import SEO from "@/components/seo"

export const metadata = {
  title: "PR | Multichoiceagency",
  description:
    "Versterk uw reputatie en zichtbaarheid met strategische PR. Ontdek hoe wij uw merk positioneren in de media, relaties opbouwen met relevante stakeholders en uw verhaal vertellen aan het juiste publiek.",
}

export default function PRPage() {
  return (
    <>

      <ServiceLayout
        title="Public Relations"
        subtitle="Strategische PR"
        description="Versterk uw reputatie en zichtbaarheid met strategische PR die uw merk positioneert, relaties opbouwt en uw verhaal vertelt aan het juiste publiek."
        icon={<Globe className="h-4 w-4" />}
        features={[
          {
            title: "Media relations",
            description:
              "Bouw sterke relaties op met relevante media en journalisten om uw merk positief in het nieuws te krijgen.",
            icon: (
              <Newspaper className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Persberichten",
            description:
              "Ontwikkel nieuwswaardige persberichten die de aandacht trekken van media en uw boodschap effectief overbrengen.",
            icon: (
              <MessageSquare className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Stakeholder management",
            description:
              "Identificeer en bouw relaties op met belangrijke stakeholders die invloed hebben op uw bedrijfssucces.",
            icon: (
              <Users className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Crisis communicatie",
            description:
              "Bereid u voor op mogelijke crises en ontwikkel strategieën om effectief te communiceren in uitdagende situaties.",
            icon: (
              <Radio className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Thought leadership",
            description:
              "Positioneer uw bedrijf en leiders als experts in uw vakgebied door strategische content en spreekgelegenheden.",
            icon: (
              <Award className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
        ]}
        process={[
          {
            title: "Analyse & strategie",
            description:
              "We beginnen met een grondige analyse van uw merk, markt en medialandschap om een effectieve PR-strategie te ontwikkelen.",
          },
          {
            title: "Boodschapsontwikkeling",
            description:
              "We ontwikkelen kernboodschappen die uw merkwaarden en -positionering versterken en resoneren met uw doelgroep.",
          },
          {
            title: "Media planning",
            description:
              "We identificeren relevante media en journalisten en ontwikkelen een plan om hen te benaderen met uw verhaal.",
          },
          {
            title: "Content creatie",
            description:
              "We creëren nieuwswaardige content, van persberichten tot opiniestukken, die de aandacht trekt van media en uw doelgroep.",
          },
          {
            title: "Uitvoering & monitoring",
            description:
              "We voeren de PR-activiteiten uit, monitoren de resultaten en sturen bij waar nodig voor maximale impact.",
          },
        ]}
        testimonial={{
          quote:
            "De PR-strategie die Multichoiceagency voor ons heeft ontwikkeld, heeft geleid tot een significante toename in media-aandacht en merkbekendheid. Hun aanpak was niet alleen strategisch maar ook zeer proactief, wat resulteerde in publicaties in toonaangevende media.",
          author: "Laura van Dijk",
          company: "Communications Director, InnovateTech Group",
          image: "/confident-communications-leader.png",
        }}
        relatedServices={[
          { title: "Contentmarketing", slug: "contentmarketing" },
          { title: "Merkpositionering", slug: "merkpositionering" },
          { title: "Campagnes en activatie", slug: "campagnes-en-activatie" },
        ]}
        ctaTitle="Klaar om uw reputatie en zichtbaarheid te versterken?"
        ctaDescription="Neem contact met ons op voor een vrijblijvend gesprek over hoe wij uw merk kunnen positioneren met strategische PR."
      >
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2D4625] dark:text-white">Waarom PR?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Strategische PR is essentieel voor het bouwen en beschermen van uw reputatie en het vergroten van uw
                zichtbaarheid. Effectieve PR:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Vergroot uw geloofwaardigheid en autoriteit in uw vakgebied
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Genereert waardevolle media-aandacht die uw doelgroep bereikt
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Bouwt en beschermt uw reputatie bij belangrijke stakeholders
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Ondersteunt uw marketing- en salesactiviteiten met third-party validatie
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-[#2D4625] dark:text-[#a6e267]">Onze PR expertise</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bij Multichoiceagency bieden we een breed scala aan PR-diensten om uw reputatie en zichtbaarheid te
                versterken:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Newspaper className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Media relations</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Opbouwen van relaties met relevante media en journalisten
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Persberichten & storytelling</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ontwikkelen van nieuwswaardige content die aandacht trekt
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Thought leadership</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Positioneren van uw bedrijf en leiders als experts
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f5f9f5] dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Radio className="h-5 w-5 text-[#2D4625] dark:text-[#a6e267]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Crisis communicatie</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Voorbereiden op en managen van communicatie tijdens crises
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
