import { FileText, PenTool, Search, BarChart, Users, BookOpen } from "lucide-react"
import ServiceLayout from "@/components/service-layout"
import SEO from "@/components/seo"

export const metadata = {
  title: "Contentmarketing | Multichoiceagency",
  description:
    "Versterk uw online aanwezigheid met strategische contentmarketing. Ontdek hoe wij waardevolle content creëren die uw doelgroep aanspreekt, uw expertise toont en conversies stimuleert.",
}

export default function ContentmarketingPage() {
  return (
    <>
      <SEO
        title="Contentmarketing | Multichoiceagency"
        description="Versterk uw online aanwezigheid met strategische contentmarketing. Ontdek hoe wij waardevolle content creëren die uw doelgroep aanspreekt, uw expertise toont en conversies stimuleert."
        canonical="https://multichoiceagency.nl/diensten/contentmarketing"
      />

      <ServiceLayout
        title="Contentmarketing"
        subtitle="Strategische contentcreatie"
        description="Versterk uw online aanwezigheid met waardevolle content die uw doelgroep aanspreekt, uw expertise toont en conversies stimuleert."
        icon={<FileText className="h-4 w-4" />}
        features={[
          {
            title: "Contentstrategie",
            description:
              "Ontwikkel een doelgerichte contentstrategie die aansluit bij uw bedrijfsdoelen en de behoeften van uw doelgroep.",
            icon: (
              <BookOpen className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Contentcreatie",
            description:
              "Creëer hoogwaardige, relevante content in diverse formats die uw doelgroep informeert, inspireert en activeert.",
            icon: (
              <PenTool className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "SEO-optimalisatie",
            description:
              "Optimaliseer uw content voor zoekmachines om uw online zichtbaarheid te vergroten en organisch verkeer te genereren.",
            icon: (
              <Search className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Content distributie",
            description:
              "Verspreid uw content via de juiste kanalen om maximaal bereik en engagement te realiseren bij uw doelgroep.",
            icon: (
              <Users className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Performance analyse",
            description:
              "Meet en analyseer de prestaties van uw content om inzicht te krijgen in wat werkt en uw strategie continu te verbeteren.",
            icon: (
              <BarChart className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
        ]}
        process={[
          {
            title: "Strategie & doelstellingen",
            description:
              "We beginnen met het definiëren van uw contentdoelstellingen en het ontwikkelen van een strategie die aansluit bij uw bedrijfsdoelen en doelgroep.",
          },
          {
            title: "Doelgroep & onderzoek",
            description:
              "We onderzoeken uw doelgroep, hun behoeften en zoekgedrag om relevante content thema's en formats te identificeren.",
          },
          {
            title: "Content planning",
            description:
              "We ontwikkelen een gedetailleerde contentkalender met thema's, formats en publicatiemomenten voor een consistente contentstroom.",
          },
          {
            title: "Creatie & optimalisatie",
            description:
              "We creëren hoogwaardige content die is geoptimaliseerd voor zoekmachines en aansluit bij de behoeften van uw doelgroep.",
          },
          {
            title: "Distributie & analyse",
            description:
              "We verspreiden uw content via de juiste kanalen en analyseren de prestaties om uw contentstrategie continu te verbeteren.",
          },
        ]}
        testimonial={{
          quote:
            "De contentmarketingstrategie die Multichoiceagency voor ons heeft ontwikkeld, heeft onze online zichtbaarheid enorm verbeterd. We zien niet alleen meer verkeer naar onze website, maar ook een hogere engagement en conversie van bezoekers naar klanten.",
          author: "Sophie Jansen",
          company: "Digital Marketing Manager, HealthTech Solutions",
          image: "/placeholder.svg?key=2ufpr",
        }}
        relatedServices={[
          { title: "SEO", slug: "seo" },
          { title: "Videomarketing", slug: "videomarketing" },
          { title: "Social Media", slug: "social-media" },
        ]}
        ctaTitle="Klaar om uw online aanwezigheid te versterken met contentmarketing?"
        ctaDescription="Neem contact met ons op voor een vrijblijvend gesprek over hoe wij uw merk kunnen versterken met een strategische contentaanpak."
      >
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2D4625] dark:text-white">Waarom contentmarketing?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Contentmarketing is een krachtige strategie om uw doelgroep te bereiken, te engageren en te converteren
                door waardevolle en relevante content aan te bieden. Effectieve contentmarketing:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Vergroot uw online zichtbaarheid en vindbaarheid
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Positioneert u als expert in uw vakgebied</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Bouwt vertrouwen en relaties met uw doelgroep
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Genereert kwalitatieve leads en conversies</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-[#2D4625] dark:text-[#a6e267]">
                Contentformats die werken
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We creëren diverse contentformats die aansluiten bij de behoeften van uw doelgroep en de doelstellingen
                van uw merk:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Blogartikelen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Informatieve en waardevolle artikelen over relevante onderwerpen
                  </p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Whitepapers & e-books</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Diepgaande content die uw expertise demonstreert
                  </p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Infographics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Visuele weergave van complexe informatie</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Video content</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Dynamische content die engagement stimuleert
                  </p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Case studies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Praktijkvoorbeelden die resultaten demonstreren
                  </p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Social media content</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Engaging content voor uw social kanalen</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  )
}
