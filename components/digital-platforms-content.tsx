"use client"

import { motion } from 'framer-motion'
import { Code, Server, Users, Shield } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Op maat gemaakte digitale platforms voor jouw specifieke behoeften"
  },
  {
    icon: Server,
    title: "Technische Architectuur",
    description: "Schaalbare en toekomstbestendige technische fundamenten"
  },
  {
    icon: Users,
    title: "Team Samenstelling",
    description: "Expertteams voor ontwikkeling en implementatie"
  },
  {
    icon: Shield,
    title: "Security & Performance",
    description: "Veilige en hoogpresterende digitale oplossingen"
  }
]

export function DigitalPlatformsContent() {
  return (
    <div className="mx-auto max-w-[1800px] px-48 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="mb-6 text-3xl font-medium">
          Bouw je digitale fundament
        </h2>
        <p className="max-w-3xl text-lg text-muted-foreground">
          We ontwikkelen robuuste digitale platforms die je bedrijf helpen groeien en je klanten beter te bedienen.
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