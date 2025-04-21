import { Users, Award, Heart, Briefcase, Target, UserPlus } from "lucide-react"
import ServiceLayout from "@/components/service-layout"
import SEO from "@/components/seo"

export const metadata = {
  title: "Employer Branding | Multichoiceagency",
  description:
    "Versterk uw positie als werkgever met een krachtige employer branding strategie. Ontdek hoe wij u helpen om talent aan te trekken, te behouden en uw werkgeversmerk te versterken.",
}

export default function EmployerBrandingPage() {
  return (
    <>
      <SEO
        title="Employer Branding | Multichoiceagency"
        description="Versterk uw positie als werkgever met een krachtige employer branding strategie. Ontdek hoe wij u helpen om talent aan te trekken, te behouden en uw werkgeversmerk te versterken."
        canonical="https://multichoiceagency.nl/diensten/employer-branding"
      />

      <ServiceLayout
        title="Employer Branding"
        subtitle="Aantrekkelijk werkgeversmerk"
        description="Versterk uw positie als werkgever en trek de beste talenten aan met een authentieke en aantrekkelijke employer branding strategie."
        icon={<Briefcase className="h-4 w-4" />}
        features={[
          {
            title: "Werkgeverspositionering",
            description:
              "Ontwikkel een onderscheidende positie als werkgever die aansluit bij uw bedrijfscultuur en aantrekkelijk is voor uw doelgroep.",
            icon: (
              <Target className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Employee Value Proposition",
            description:
              "Creëer een overtuigende waardepropositie die duidelijk maakt waarom talent voor uw organisatie zou moeten kiezen.",
            icon: (
              <Award className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Cultuur & waarden",
            description:
              "Breng uw unieke bedrijfscultuur en waarden tot leven in uw communicatie om de juiste talenten aan te trekken.",
            icon: (
              <Heart className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Talent acquisition",
            description:
              "Ontwikkel effectieve strategieën en campagnes om de beste talenten aan te trekken en te werven.",
            icon: (
              <UserPlus className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Medewerkersbetrokkenheid",
            description:
              "Creëer programma's en communicatie die de betrokkenheid en loyaliteit van uw huidige medewerkers versterken.",
            icon: (
              <Users className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
        ]}
        process={[
          {
            title: "Analyse & onderzoek",
            description:
              "We beginnen met een grondige analyse van uw huidige employer brand, bedrijfscultuur, medewerkerservaringen en de perceptie in de arbeidsmarkt.",
          },
          {
            title: "Strategie ontwikkeling",
            description:
              "We ontwikkelen een employer branding strategie die aansluit bij uw bedrijfsdoelen, cultuur en de behoeften van uw doelgroep.",
          },
          {
            title: "Employee Value Proposition",
            description:
              "We creëren een overtuigende EVP die duidelijk maakt wat uw organisatie uniek maakt als werkgever en waarom talent voor u zou moeten kiezen.",
          },
          {
            title: "Creatieve uitwerking",
            description:
              "We vertalen uw employer brand strategie naar creatieve concepten, content en campagnes die resoneren met uw doelgroep.",
          },
          {
            title: "Implementatie & activatie",
            description:
              "We ondersteunen u bij de implementatie van uw employer brand over alle relevante kanalen en touchpoints, zowel intern als extern.",
          },
        ]}
        testimonial={{
          quote:
            "De employer branding strategie die Multichoiceagency voor ons heeft ontwikkeld, heeft een enorme impact gehad op onze wervingskracht. We trekken nu niet alleen meer sollicitanten aan, maar ook kandidaten die veel beter passen bij onze cultuur en waarden.",
          author: "Emma Bakker",
          company: "HR Director, TechSolutions Group",
          image: "/placeholder.svg?key=s8ko4",
        }}
        relatedServices={[
          { title: "Merkidentiteit", slug: "merkidentiteit" },
          { title: "Contentmarketing", slug: "contentmarketing" },
          { title: "Videomarketing", slug: "videomarketing" },
        ]}
        ctaTitle="Klaar om uw werkgeversmerk te versterken?"
        ctaDescription="Neem contact met ons op voor een vrijblijvend gesprek over hoe wij uw organisatie kunnen helpen om de beste talenten aan te trekken en te behouden."
      >
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2D4625] dark:text-white">Waarom employer branding?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In een competitieve arbeidsmarkt is een sterk werkgeversmerk essentieel om de beste talenten aan te
                trekken en te behouden. Een effectieve employer branding strategie:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Trekt de juiste talenten aan die passen bij uw cultuur
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Verlaagt wervingskosten en time-to-hire</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Verhoogt de betrokkenheid en loyaliteit van medewerkers
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Versterkt uw algemene merkimago en reputatie</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-[#2D4625] dark:text-[#a6e267]">
                De impact van een sterk werkgeversmerk
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-[#f5f9f5] dark:bg-gray-800 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-[#2D4625] dark:text-[#a6e267]">75%</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    van de kandidaten onderzoekt het werkgeversmerk voordat ze solliciteren
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-[#f5f9f5] dark:bg-gray-800 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-[#2D4625] dark:text-[#a6e267]">50%</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    lagere kosten per hire met een sterk werkgeversmerk
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-[#f5f9f5] dark:bg-gray-800 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-[#2D4625] dark:text-[#a6e267]">28%</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    lager personeelsverloop bij bedrijven met een sterk werkgeversmerk
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-[#f5f9f5] dark:bg-gray-800 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-[#2D4625] dark:text-[#a6e267]">2x</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    zoveel kwalitatieve sollicitaties bij een sterk werkgeversmerk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  )
}
