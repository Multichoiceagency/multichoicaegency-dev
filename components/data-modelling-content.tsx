"use client"

import { motion } from 'framer-motion'
import { LineChart, BarChart, PieChart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Voorspel toekomstig gedrag en trends met geavanceerde modellen"
  },
  {
    icon: BarChart,
    title: "Customer Segmentation",
    description: "Identificeer en analyseer verschillende klantsegmenten"
  },
  {
    icon: PieChart,
    title: "Performance Modelling",
    description: "Optimaliseer bedrijfsprestaties met data-driven inzichten"
  }
]

const subServices = [
  {
    title: "Conversion Prediction",
    description: "Voorspel en verbeter conversiekansen",
    href: "/wat-we-doen/solutions/data-intelligence/data-modelling/conversion-prediction"
  },
  {
    title: "Churn Prediction",
    description: "Identificeer en voorkom klantverloop",
    href: "/wat-we-doen/solutions/data-intelligence/data-modelling/churn-prediction"
  },
  {
    title: "Lead Prediction",
    description: "Optimaliseer leadgeneratie en -kwalificatie",
    href: "/wat-we-doen/solutions/data-intelligence/data-modelling/lead-prediction"
  }
]

export function DataModellingContent() {
  return (
    <div className="mx-auto max-w-[1800px] px-48 py-24">
      {/* Features */}
      <div className="mb-24 grid gap-8 md:grid-cols-3">
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

      {/* Sub-services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-12 text-3xl font-medium">Onze Data Modelling Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {subServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-lg border border-border p-6 transition-all hover:border-primary hover:bg-primary/5"
              >
                <h3 className="mb-2 text-xl font-medium">{service.title}</h3>
                <p className="mb-4 flex-grow text-muted-foreground">{service.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span>Lees meer</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}