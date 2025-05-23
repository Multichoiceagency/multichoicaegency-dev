import { Check } from "lucide-react"

const reasons = [
  {
    title: "Maatwerk Webdesign",
    description:
      "Unieke en professionele websites die jouw merk laten opvallen.",
  },
  {
    title: "SEO Geoptimaliseerd",
    description:
      "Wij zorgen ervoor dat jouw website goed vindbaar is in Google.",
  },
  {
    title: "Responsive & Snel",
    description:
      "Geoptimaliseerd voor mobiel, tablet en desktop voor een naadloze gebruikerservaring.",
  },
  {
    title: "Technische Expertise",
    description:
      "Wij werken met moderne technologieën zoals Next.js, Vue.js, WordPress en Laravel.",
  },
  {
    title: "Persoonlijke Ondersteuning",
    description:
      "Altijd bereikbaar voor advies, onderhoud en updates.",
  },
  {
    title: "Professionele website laten maken?",
    description:
      "Neem vrijblijvend contact met ons op en ontdek hoe wij jouw bedrijf online kunnen laten groeien.",
  },
]

export default function WhyChooseMultichoice() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 relative bg-[#f8faf8] dark:bg-[#0e1a11] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-[#2D4625] text-white font-medium mb-4">
          Waarom kiezen voor Multichoiceagency?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f2b3d] dark:text-white mb-4">
          Jouw partner voor online groei
        </h2>
        <p className="text-[#3a3a3a] dark:text-gray-400">
          Wij ontwerpen, bouwen en ondersteunen websites die resultaat opleveren.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {reasons.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="bg-[#5a7a4f] rounded p-1.5 mt-1 text-white">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#0f2b3d] dark:text-white mb-1">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animated dotted background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(90, 122, 79, 0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      ></div>
    </section>
  )
}