import { Video, Film, Play, Share2, BarChart, Tv } from "lucide-react"
import ServiceLayout from "@/components/service-layout"
import SEO from "@/components/seo"

export const metadata = {
  title: "Videomarketing | Multichoiceagency",
  description:
    "Versterk uw merk met krachtige videomarketing. Ontdek hoe wij impactvolle videocontent creëren die uw doelgroep engageert, uw boodschap overbrengt en conversies stimuleert.",
}

export default function VideomarketingPage() {
  return (
    <>
      <SEO
        title="Videomarketing | Multichoiceagency"
        description="Versterk uw merk met krachtige videomarketing. Ontdek hoe wij impactvolle videocontent creëren die uw doelgroep engageert, uw boodschap overbrengt en conversies stimuleert."
        canonical="https://multichoiceagency.nl/diensten/videomarketing"
      />

      <ServiceLayout
        title="Videomarketing"
        subtitle="Impactvolle videocontent"
        description="Versterk uw merk met krachtige videocontent die uw doelgroep engageert, uw boodschap overbrengt en conversies stimuleert."
        icon={<Video className="h-4 w-4" />}
        features={[
          {
            title: "Videostrategie",
            description:
              "Ontwikkel een doelgerichte videostrategie die aansluit bij uw bedrijfsdoelen en de behoeften van uw doelgroep.",
            icon: (
              <Play className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Videoproductie",
            description:
              "Creëer professionele videocontent in diverse formats die uw merk en boodschap op een impactvolle manier overbrengt.",
            icon: (
              <Film className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Social video",
            description:
              "Ontwikkel engaging videocontent specifiek geoptimaliseerd voor social media platforms en doelgroepen.",
            icon: (
              <Share2 className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Video advertising",
            description:
              "Creëer effectieve video-advertenties die aandacht trekken, uw boodschap overbrengen en conversies stimuleren.",
            icon: (
              <Tv className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
          {
            title: "Video analytics",
            description:
              "Meet en analyseer de prestaties van uw videocontent om inzicht te krijgen in wat werkt en uw strategie te optimaliseren.",
            icon: (
              <BarChart className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
            ),
          },
        ]}
        process={[
          {
            title: "Strategie & briefing",
            description:
              "We beginnen met het definiëren van uw videodoelstellingen, doelgroep en kernboodschap om een duidelijke richting te bepalen.",
          },
          {
            title: "Concept & script",
            description:
              "We ontwikkelen een creatief concept en gedetailleerd script dat uw boodschap op een impactvolle manier overbrengt.",
          },
          {
            title: "Pre-productie",
            description:
              "We plannen alle aspecten van de videoproductie, van locaties en talent tot apparatuur en planning.",
          },
          {
            title: "Productie & opname",
            description:
              "We realiseren de opnames met een professioneel team en hoogwaardige apparatuur voor het beste resultaat.",
          },
          {
            title: "Post-productie & distributie",
            description:
              "We verzorgen de montage, kleurcorrectie, audio en effecten, en ondersteunen bij de distributie van uw video.",
          },
        ]}
        testimonial={{
          quote:
            "De videocampagne die Multichoiceagency voor ons heeft geproduceerd, heeft alle verwachtingen overtroffen. Niet alleen was de kwaliteit uitzonderlijk, maar de video's hebben ook geleid tot een significante toename in engagement en conversies.",
          author: "David Jansen",
          company: "Marketing Director, FutureTech Solutions",
          image: "/confident-marketing-leader.png",
        }}
        relatedServices={[
          { title: "Contentmarketing", slug: "contentmarketing" },
          { title: "Campagnes en activatie", slug: "campagnes-en-activatie" },
          { title: "Animatie", slug: "animatie" },
        ]}
        ctaTitle="Klaar om uw merk te versterken met video?"
        ctaDescription="Neem contact met ons op voor een vrijblijvend gesprek over hoe wij uw merk kunnen versterken met impactvolle videocontent."
      >
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2D4625] dark:text-white">Waarom videomarketing?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Video is een van de meest effectieve content formats om uw doelgroep te bereiken, te engageren en te
                converteren. Effectieve videomarketing:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Trekt meer aandacht dan andere content formats
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Communiceert uw boodschap op een emotionele en memorabele manier
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Verhoogt de conversieratio's op uw website en landingspagina's
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Verbetert uw vindbaarheid in zoekmachines</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-[#2D4625] dark:text-[#a6e267]">Videoformats die werken</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We creëren diverse videoformats die aansluiten bij de behoeften van uw doelgroep en de doelstellingen
                van uw merk:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Bedrijfsvideo's</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Professionele video's die uw merk en waarden presenteren
                  </p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Productvideo's</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Showcases van uw producten en diensten</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Testimonials</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Klantverhalen die vertrouwen opbouwen</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">How-to video's</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Educatieve content die waarde biedt</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Social video's</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Korte, engaging content voor social media</p>
                </div>
                <div className="bg-[#f5f9f5] dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-[#2D4625] dark:text-[#a6e267] mb-2">Video-advertenties</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Impactvolle ads voor diverse platforms</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  )
}
