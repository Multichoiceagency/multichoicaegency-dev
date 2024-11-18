"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ExpertiseGrid } from "@/components/expertise-grid"
import { ContactFormulier } from "@/components/contact-formulier"

export default function StrategiePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            alt="Brand Strategy"
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
                Brand, Business & Experience Design
              </h1>
              <p className="mb-8 text-lg text-white/80">
                Wat onderscheidt een sterk merk van een goed bedrijf? Een superieure ervaring.
              </p>
              <Button 
                className="group gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Lees meer over strategie
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <ExpertiseGrid />
      <ContactFormulier />
    </main>
  )
}