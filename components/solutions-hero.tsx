"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function SolutionsHero() {
  return (
    <section className="relative min-h-[70vh] bg-black">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Solutions Hero"
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
              Onze oplossingen voor digitale transformatie
            </h1>
            <p className="mb-8 text-lg text-white/80">
              Van strategie tot implementatie, van marketing tot technologie. Wij bieden end-to-end oplossingen die uw digitale ambities werkelijkheid maken.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}