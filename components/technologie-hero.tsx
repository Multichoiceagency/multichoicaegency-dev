"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Database, Cloud, Code } from "lucide-react"

export function TechnologieHero() {
  return (
    <section className="relative min-h-[70vh] bg-black">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Technologie Hero"
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
              Onze technologie stack
            </h1>
            <p className="mb-12 text-lg text-white/80">
              We werken met toonaangevende technologieën om innovatieve digitale oplossingen te bouwen die schaalbaar, veilig en toekomstbestendig zijn.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Database className="mb-4 h-8 w-8 text-[#1e7932]" />
                <h3 className="mb-2 text-lg font-medium text-white">Data & Analytics</h3>
                <p className="text-sm text-white/70">Krachtige tools voor data-analyse en visualisatie</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Cloud className="mb-4 h-8 w-8 text-[#1e7932]" />
                <h3 className="mb-2 text-lg font-medium text-white">Cloud Platforms</h3>
                <p className="text-sm text-white/70">Schaalbare en flexibele cloud-infrastructuur</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Code className="mb-4 h-8 w-8 text-[#1e7932]" />
                <h3 className="mb-2 text-lg font-medium text-white">Development</h3>
                <p className="text-sm text-white/70">Moderne frameworks en ontwikkeltools</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}