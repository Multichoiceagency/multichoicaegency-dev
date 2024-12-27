"use client"

import { motion } from 'framer-motion'
import { Target, TrendingUp, Users, BarChart } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: "Verhoogde Conversieratio",
    description: "Verbeter uw conversieratio's door potentiële klanten te identificeren die het meest waarschijnlijk zullen converteren."
  },
  {
    icon: TrendingUp,
    title: "Geoptimaliseerde ROI",
    description: "Maximaliseer uw marketingbudget door te focussen op de meest kansrijke leads en prospects."
  },
  {
    icon: Users,
    title: "Klantinzicht",
    description: "Begrijp het gedrag en de voorkeuren van uw klanten beter met geavanceerde voorspellende analyses."
  },
  {
    icon: BarChart,
    title: "Data-Driven Beslissingen",
    description: "Neem betere beslissingen op basis van concrete data en voorspellende modellen."
  }
]

export function ConversionPredictionContent() {
  return (
    <div className="mx-auto max-w-[1800px] px-48 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="mb-6 text-3xl font-medium">
          Voorspel en Verbeter uw Conversies
        </h2>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Met onze conversion prediction modellen kunt u nauwkeurig voorspellen welke leads het meest waarschijnlijk zullen converteren. Dit stelt u in staat om uw marketing- en verkoopinspanningen effectiever te richten.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-border p-6"
            >
              <Icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-medium">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}