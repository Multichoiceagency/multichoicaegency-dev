"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, Factory, Briefcase } from "lucide-react"

export function SectorenHero() {
  return (
    <section className="relative min-h-[70vh] bg-black">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Sectoren Hero"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-[1800px] px-48 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 text-2xl font-medium leading-tight text-white md:text-6xl lg:text-3xl">
              Expertise per sector
            </h1>
            <p className="mb-12 text-lg text-white/80">
              Wij begrijpen de unieke uitdagingen en kansen in uw sector. Ontdek onze specifieke expertise en oplossingen voor uw branche.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Building2 className="mb-4 h-8 w-8 text-[#1e7932]" />
                <h3 className="mb-2 text-lg font-medium text-white">B2B</h3>
                <p className="text-sm text-white/70">Digitale transformatie voor zakelijke dienstverlening</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Factory className="mb-4 h-8 w-8 text-[#1e7932]" />
                <h3 className="mb-2 text-lg font-medium text-white">Industrie</h3>
                <p className="text-sm text-white/70">Innovatieve oplossingen voor productie en logistiek</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Briefcase className="mb-4 h-8 w-8 text-[#1e7932]" />
                <h3 className="mb-2 text-lg font-medium text-white">Financieel</h3>
                <p className="text-sm text-white/70">Digitale services voor financiële dienstverleners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}