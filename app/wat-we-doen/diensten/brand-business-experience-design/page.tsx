"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Cases } from "@/components/cases"
import { ContactFormulier } from "@/components/contact-formulier"

const expertiseItems = [
  {
    title: "Digitale strategie",
    description: "Digitale transformatie voor een toekomstbestendige organisatie.",
    href: "/wat-we-doen/solutions/strategie/digitale-strategie"
  },
  {
    title: "Digitale communicatie",
    description: "Effectieve communicatie via digitale kanalen die uw doelgroep bereikt.",
    href: "/wat-we-doen/solutions/strategie/digitale-communicatie"
  },
  {
    title: "UX/UI methodologie",
    description: "User-centered design methodologieën voor optimale gebruikerservaringen.",
    href: "/wat-we-doen/solutions/strategie/ux-ui-methodologie"
  },
  {
    title: "Service design",
    description: "Creëer uitzonderlijke klantenervaringen met gebruikersgerichte serviceontwerpen.",
    href: "/wat-we-doen/solutions/strategie/service-design"
  },
  {
    title: "Interface design",
    description: "Intuïtieve en aantrekkelijke interfaces die uw merk versterken.",
    href: "/wat-we-doen/solutions/strategie/interface-design"
  },
  {
    title: "UX strategie",
    description: "Strategische aanpak voor optimale gebruikerservaringen.",
    href: "/wat-we-doen/solutions/strategie/ux-strategie"
  }
]

const whyUs = [
  {
    title: "Een holistische aanpak",
    description: "We kijken naar het grotere plaatje en verbinden merkstrategie met gebruikerservaring en technologie."
  },
  {
    title: "Evidence-based methodology",
    description: "Onze aanpak is gebaseerd op data, onderzoek en bewezen methodologieën voor optimale resultaten."
  },
  {
    title: "Een sterke, blijvende basis",
    description: "We bouwen een duurzame strategie die meegroeit met uw organisatie en de veranderende markt."
  }
]

export default function BrandBusinessExperiencePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Brand Experience"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" />
        </div>

        <div className="relative">
          <div className="mx-auto max-w-[1800px] px-10 pt-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="mb-6 text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
                Brand, Business & Experience Design
              </h1>
              <p className="mb-8 text-lg text-white/80">
                We brengen je merk tot leven door elke gebruikerservaring vorm te geven en te verbinden met je merk en bedrijf.
              </p>
              <Button 
                className="group gap-2 rounded-full bg-[#0000ff] px-6 py-3 text-white hover:bg-[#0000ff]/90"
              >
                Contact opnemen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-[1800px] px-10">
        {/* Brand Value Section */}
        <section className="py-24">
          <h2 className="mb-4 text-2xl font-medium">
            Wat onderscheidt een sterk merk van een goed bedrijf? Een superieure ervaring.
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-8 text-lg text-muted-foreground">
                Een sterk merk is een aanwinst voor je bedrijf. Het zorgt voor een superieure ervaring die mensen raakt en verbindt. Wij helpen je om die ervaring te creëren en te versterken.
              </p>
              <Button variant="outline" className="group gap-2">
                Meer over brand experience
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Brand Experience 1"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Brand Experience 2"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Brand Experience 3"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Brand Experience 4"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24">
          <h2 className="mb-12 text-2xl font-medium">Onze expertise & skills</h2>
          <div className="grid gap-8">
            {expertiseItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between border-t border-border py-8"
              >
                <div>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
                <ArrowRight className="h-6 w-6 transform transition-transform group-hover:translate-x-2" />
              </Link>
            ))}
          </div>
        </section>

        {/* Why Us Section */}
        <section className="rounded-3xl bg-[#0000ff] p-12 text-white">
          <h2 className="mb-12 text-2xl font-medium">Waarom iO?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {whyUs.map((item) => (
              <div key={item.title}>
                <h3 className="mb-4 text-xl font-medium">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-24">
          <Cases />
        </section>

        {/* Contact Form */}
        <section className="pb-24">
          <ContactFormulier />
        </section>
      </div>
    </main>
  )
}