"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function WatWeDoenHero() {
  return (
    <section className="relative min-h-[80vh] bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Office workspace"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="mx-auto max-w-[1800px] px-48 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 text-2xl font-medium leading-tight text-white md:text-6xl lg:text-3xl">
              Betekenisvolle impact voor jouw merk en business
            </h1>
            <p className="mb-8 text-lg text-white/80">
              Bij Multichoiceagency krijgen alle merken en organisaties die groeien en veranderen de kans om hun digitale ambities waar te maken. Wij zijn jouw partner voor strategie, technologie, marketing en content. Samen maken we impact.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1e7932] px-6 py-3 text-white transition-all hover:bg-[#1e7932]/90"
            >
              <span>Ontdek onze oplossingen</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}