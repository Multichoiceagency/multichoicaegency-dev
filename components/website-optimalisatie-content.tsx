"use client"

import { motion } from 'framer-motion'
import { Search, LineChart, Gauge, Layout } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Search,
    title: "SEO Optimalisatie",
    description: "Verbeter uw online zichtbaarheid en organische rankings"
  },
  {
    icon: LineChart,
    title: "Conversie Optimalisatie",
    description: "Verhoog uw conversieratio's met data-gedreven verbeteringen"
  },
  {
    icon: Gauge,
    title: "Performance Optimalisatie",
    description: "Verbeter de laadsnelheid en technische prestaties"
  },
  {
    icon: Layout,
    title: "UX Optimalisatie",
    description: "Optimaliseer de gebruikerservaring voor betere resultaten"
  }
]

const services = [
  {
    title: "SEO",
    description: "Verbeter uw online vindbaarheid",
    href: "/wat-we-doen/solutions/marketing/website-optimalisatie/seo"
  },
  {
    title: "A/B Testing",
    description: "Test en optimaliseer uw website",
    href: "/wat-we-doen/solutions/marketing/website-optimalisatie/a-b-testen"
  },
  {
    title: "Personalisatie",
    description: "Creëer persoonlijke gebruikerservaringen",
    href: "/wat-we-doen/solutions/marketing/website-optimalisatie/personalisatie"
  },
  {
    title: "CRO Scan",
    description: "Analyseer uw conversie mogelijkheden",
    href: "/wat-we-doen/solutions/marketing/website-optimalisatie/cro-scan"
  }
]

export function WebsiteOptimalisatieContent() {
  return (
    <div className="mx-auto max-w-[1800px] px-48 py-24">
      {/* Features */}
      <div className="mb-24 grid gap-8 md:grid-cols-2">
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

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-12 text-3xl font-medium">Onze Optimalisatie Services</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
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