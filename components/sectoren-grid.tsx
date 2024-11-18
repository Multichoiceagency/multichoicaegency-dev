"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Building, Car, GraduationCap, Heart, Factory, Bank, ShoppingBag, Zap, Users, Government } from "lucide-react"

const sectoren = [
  {
    titel: "Automotive",
    beschrijving: "Digitale oplossingen voor de automotive industrie",
    icon: Car,
    href: "/wat-we-doen/sectoren/automotive"
  },
  {
    titel: "Onderwijs",
    beschrijving: "Innovatieve platformen voor onderwijsinstellingen",
    icon: GraduationCap,
    href: "/wat-we-doen/sectoren/onderwijs"
  },
  {
    titel: "Gezondheidszorg",
    beschrijving: "Digitale transformatie in de zorgsector",
    icon: Heart,
    href: "/wat-we-doen/sectoren/gezondheidszorg"
  },
  {
    titel: "Maakindustrie",
    beschrijving: "Smart industry oplossingen",
    icon: Factory,
    href: "/wat-we-doen/sectoren/maakindustrie"
  },
  {
    titel: "Financiële sector",
    beschrijving: "Digitale innovatie voor financiële dienstverleners",
    icon: Bank,
    href: "/wat-we-doen/sectoren/financiele-sector"
  },
  {
    titel: "Detailhandel",
    beschrijving: "E-commerce en omnichannel retail oplossingen",
    icon: ShoppingBag,
    href: "/wat-we-doen/sectoren/detailhandel"
  },
  {
    titel: "Energie & Utilities",
    beschrijving: "Digitale transformatie voor nutsbedrijven",
    icon: Zap,
    href: "/wat-we-doen/sectoren/energie-nutsvoorzieningen-telco"
  },
  {
    titel: "Non-profit",
    beschrijving: "Digitale oplossingen voor non-profit organisaties",
    icon: Users,
    href: "/wat-we-doen/sectoren/non-profit"
  },
  {
    titel: "Overheid",
    beschrijving: "Digitale dienstverlening voor overheidsinstellingen",
    icon: Government,
    href: "/wat-we-doen/sectoren/overheid"
  }
]

export function SectorenGrid() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-[1800px] px-48">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectoren.map((sector, index) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={sector.titel}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={sector.href}
                  className="group flex h-full flex-col rounded-lg border border-border p-6 transition-all hover:border-primary hover:bg-primary/5"
                >
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-medium">{sector.titel}</h3>
                  <p className="mb-4 flex-grow text-muted-foreground">{sector.beschrijving}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <span>Lees meer</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}