"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const diensten = [
  {
    title: "Brand, Business & Experience Design",
    description: "We brengen je merk tot leven door elke gebruikerservaring vorm te geven en te verbinden met je merk en bedrijf.",
    href: "/wat-we-doen/diensten/brand-business-experience-design"
  },
  {
    title: "Digital Platforms",
    description: "We zorgen voor de bouw van technologische teams, architectuur en platforms. Van eenvoudig tot complex, om diensten te digitaliseren en klantloyaliteit te bevorderen.",
    href: "/wat-we-doen/diensten/digital-platforms"
  },
  {
    title: "Marketing Programs & Campaigns",
    description: "We bereiken je doelgroepen op de juiste kanalen met de juiste tone of voice en versnellen de groei van je merk door full-funnel marketing.",
    href: "/wat-we-doen/diensten/marketing-programs-campaigns"
  },
  {
    title: "Creation & Content Production",
    description: "We creëren content die je merkbeleving vormgeeft en gebruikers aantrekt. Onze experts adviseren, plannen en produceren foto-, audio-, tekst- en videomateriaal.",
    href: "/wat-we-doen/diensten/creation-content-production"
  },
  {
    title: "Cloud, Data & Integration",
    description: "We maken je IT-, data- en marketing-infrastructuur schaalbaar. Geïntegreerd met de juiste cloud-partnerships en data setups.",
    href: "/wat-we-doen/diensten/cloud-data-integration"
  },
  {
    title: "Transformation & Consulting",
    description: "We ondersteunen je transformatie, realiseren CX-impact door service design en ontwikkelen digitale kennis binnen je teams.",
    href: "/wat-we-doen/diensten/transformation-consulting"
  }
]

export function Solutions() {
  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-[1800px] px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="sticky top-32 h-fit">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 block text-sm font-medium uppercase tracking-wider text-[#1e7932]"
            >
              ONZE DIENSTEN
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="mb-4 text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
                Blenden van expertise voor{" "}
                <span className="italic text-muted-foreground">optimale ervaringen</span>
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Op zoek naar een specifieke expertise? Ontdek al onze diensten.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="grid gap-8">
            {diensten.map((dienst, index) => (
              <motion.div
                key={dienst.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative border-t border-border py-8"
              >
                <Link href={dienst.href} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-medium">{dienst.title}</h3>
                    <p className="mt-2 max-w-2xl text-muted-foreground">{dienst.description}</p>
                  </div>
                  <ArrowRight className="h-6 w-6 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}