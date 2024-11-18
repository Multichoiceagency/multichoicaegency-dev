"use client"

import { motion } from 'framer-motion'
import { MessageSquare, Users, BarChart, Target } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: MessageSquare,
    title: "Community Management",
    description: "Bouw en beheer actieve online communities die uw merk versterken"
  },
  {
    icon: Users,
    title: "Social Branding",
    description: "Ontwikkel een sterke merkidentiteit op sociale mediaplatforms"
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Meet en optimaliseer uw social media prestaties"
  },
  {
    icon: Target,
    title: "Doelgroep Targeting",
    description: "Bereik de juiste doelgroep met gerichte content en advertenties"
  }
]

const services = [
  {
    title: "Social Brands",
    description: "Bouw een sterk merk op sociale media",
    href: "/wat-we-doen/solutions/marketing/social-media/social-brands"
  },
  {
    title: "Webcare & Conversation Management",
    description: "Professioneel beheer van online interacties",
    href: "/wat-we-doen/solutions/marketing/social-media/webcare-conversation-management"
  },
  {
    title: "Community Management",
    description: "Actieve community building en engagement",
    href: "/wat-we-doen/solutions/marketing/social-media/conversational-community-management"
  }
]

export function SocialMediaContent() {
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
        <h2 className="mb-12 text-3xl font-medium">Onze Social Media Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
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