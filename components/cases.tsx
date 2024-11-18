"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const cases = [
  {
    title: "Hoe presenteer je een merkervaring voor verschillende bedrijven?",
    client: "Facilicom",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    href: "/cases/facilicom"
  },
  {
    title: "Hoe zorg je er als netbeheerder voor dat we de energietransitie aankunnen?",
    client: "Enexis",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
    href: "/cases/enexis"
  },
  {
    title: "Hoe transformeer je twee telecomgiganten tot één krachtig merk?",
    client: "Odido",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80",
    href: "/cases/odido"
  },
  {
    title: "Hoe optimaliseer je een kleurrijke campagne met data?",
    client: "AkzoNobel",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80",
    href: "/cases/akzonobel"
  }
]

export function Cases() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-[1800px] px-48">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-medium md:text-4xl"
        >
          Onze cases
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((item, index) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.href} className="group block">
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.client}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-xl font-medium">{item.client}</h3>
                <p className="text-muted-foreground">{item.title}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                  <span>Bekijk case</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}