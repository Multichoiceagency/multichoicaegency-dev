"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const expertiseCategories = [
  {
    title: "Brand & Experience",
    description: "Hoe je een merkstrategie ontwikkelt die aansluit bij je bedrijfsstrategie en doelstellingen.",
    href: "/wat-we-doen/solutions/strategie/brand-communications-strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  },
  {
    title: "Digital & Technologie",
    description: "Digitale transformatie voor een toekomstbestendige organisatie.",
    href: "/wat-we-doen/solutions/strategie/technologiestrategie",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  {
    title: "Communicatiestrategie",
    description: "Ontwikkel een effectieve communicatiestrategie die je doelgroep bereikt.",
    href: "/wat-we-doen/solutions/strategie/brand-communications-strategy/communicatiestrategie",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  },
  {
    title: "Service Design",
    description: "Creëer uitzonderlijke klantenervaringen met gebruikersgerichte serviceontwerpen.",
    href: "/wat-we-doen/solutions/strategie/service-design",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
  }
]

export function StrategieContent() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-[1800px] px-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-8 text-3xl font-medium">Onze expertise & skills</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {expertiseCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={category.href}
                  className="group block overflow-hidden rounded-lg border border-border transition-all hover:border-primary"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-medium">{category.title}</h3>
                    <p className="mb-4 text-muted-foreground">{category.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <span>Lees meer</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg bg-[#0000ff] p-12 text-white"
        >
          <h2 className="mb-6 text-3xl font-medium">Waarom Multichoiceagency?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-xl font-medium">Een holistische aanpak</h3>
              <p className="text-white/80">
                We combineren merkstrategie, technologie en marketing voor maximale impact.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">Evidence-based methodologie</h3>
              <p className="text-white/80">
                Onze strategieën zijn gebaseerd op data en bewezen methodologieën.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">Een sterke, blijvende basis</h3>
              <p className="text-white/80">
                We bouwen duurzame oplossingen die meegroeien met uw organisatie.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}