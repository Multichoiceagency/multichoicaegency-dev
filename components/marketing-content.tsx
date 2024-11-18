"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function MarketingContent() {
  const features = [
    {
      title: "Doelgroep Targeting",
      description: "Bereik de juiste mensen op het juiste moment met gepersonaliseerde campagnes."
    },
    {
      title: "Full-Funnel Marketing",
      description: "Van awareness tot conversie, we begeleiden klanten door de hele customer journey."
    },
    {
      title: "Data-Driven Aanpak",
      description: "Gebruik van geavanceerde analytics voor optimale campagne prestaties."
    },
    {
      title: "Cross-Channel Strategie",
      description: "Geïntegreerde aanpak over alle relevante marketing kanalen."
    }
  ]

  return (
    <div className="space-y-24">
      {/* Features Grid */}
      <section>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-border p-6"
            >
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Study Section */}
      <section className="relative overflow-hidden rounded-2xl bg-black">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60"
          alt="Marketing Case Study"
          width={800}
          height={400}
          className="h-[400px] w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="px-8">
            <h2 className="mb-4 text-3xl font-medium text-white">Succesverhalen</h2>
            <p className="mb-6 max-w-xl text-white/80">
              Ontdek hoe we merken hebben geholpen hun marketing doelen te bereiken met innovatieve campagnes en data-gedreven strategieën.
            </p>
            <button className="group flex items-center gap-2 text-primary hover:text-primary/80">
              <span>Bekijk onze cases</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}