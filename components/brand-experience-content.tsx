"use client"

import { motion } from 'framer-motion'
import { Palette, Users, Target, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: "Merkidentiteit & Design",
    description: "Ontwikkel een sterke visuele identiteit die resoneert met je doelgroep"
  },
  {
    icon: Users,
    title: "User Experience Design",
    description: "Creëer intuïtieve en engaging gebruikerservaringen"
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description: "Definieer je merkstrategie en positionering in de markt"
  },
  {
    icon: Lightbulb,
    title: "Innovatie & Conceptontwikkeling",
    description: "Ontwikkel innovatieve concepten die je merk versterken"
  }
]

export function BrandExperienceContent() {
  return (
    <div className="mx-auto max-w-[1800px] px-48 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="mb-6 text-3xl font-medium">
          Breng je merk tot leven
        </h2>
        <p className="max-w-3xl text-lg text-muted-foreground">
          We helpen organisaties bij het creëren van betekenisvolle merkervaringen die resoneren met hun doelgroep en bedrijfsdoelstellingen.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-border p-6"
            >
              <Icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}