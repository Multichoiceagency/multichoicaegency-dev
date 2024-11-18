"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const solutions = [
  {
    category: "Strategie",
    items: [
      {
        title: "Digitale Strategie",
        description: "Ontwikkel een toekomstbestendige digitale strategie die aansluit bij uw bedrijfsdoelstellingen.",
        href: "/wat-we-doen/solutions/strategie/digitale-strategie"
      },
      {
        title: "E-commerce Strategie",
        description: "Maximaliseer uw online verkooppotentieel met een doordachte e-commerce strategie.",
        href: "/wat-we-doen/solutions/strategie/e-commerce-strategie"
      },
      {
        title: "Service Design",
        description: "Creëer uitzonderlijke klantenervaringen met gebruikersgerichte serviceontwerpen.",
        href: "/wat-we-doen/solutions/strategie/service-design"
      }
    ]
  },
  {
    category: "Technologie",
    items: [
      {
        title: "E-commerce Platforms",
        description: "Implementeer schaalbare e-commerce oplossingen voor optimale online verkoop.",
        href: "/wat-we-doen/solutions/technologie/e-commerce/e-commerce-platforms"
      },
      {
        title: "Custom Development",
        description: "Ontwikkel op maat gemaakte digitale oplossingen die perfect aansluiten bij uw behoeften.",
        href: "/wat-we-doen/solutions/technologie/custom-development-integrations"
      },
      {
        title: "Cloud Infrastructure",
        description: "Bouw een betrouwbare en schaalbare technische basis voor uw digitale diensten.",
        href: "/wat-we-doen/solutions/technologie/cloud-infrastructure"
      }
    ]
  },
  {
    category: "Marketing",
    items: [
      {
        title: "Digital Marketing",
        description: "Bereik en engageer uw doelgroep effectief via digitale kanalen.",
        href: "/wat-we-doen/solutions/marketing/digital-marketing"
      },
      {
        title: "Content Marketing",
        description: "Creëer waardevolle content die uw doelgroep aanspreekt en converteert.",
        href: "/wat-we-doen/solutions/marketing/contentmarketing"
      },
      {
        title: "Marketing Automation",
        description: "Automatiseer en optimaliseer uw marketingprocessen voor betere resultaten.",
        href: "/wat-we-doen/solutions/marketing/marketing-automation"
      }
    ]
  }
]

export function SolutionsGrid() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-[1800px] px-48">
        {solutions.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <h2 className="mb-8 text-2xl font-medium">{category.category}</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-lg border border-border p-6 transition-all hover:border-primary hover:bg-primary/5"
                >
                  <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                  <p className="mb-4 text-muted-foreground">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <span>Lees meer</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}