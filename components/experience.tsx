"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from 'lucide-react'
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Strategie",
    description: "Digitale transformatiestrategieën die succes stimuleren",
  },
  {
    title: "Technologie",
    description: "Innovatieve oplossingen gebouwd voor het moderne web",
  },
  {
    title: "Marketing",
    description: "Datagestuurde campagnes die resultaat leveren",
  },
  {
    title: "Design",
    description: "Creatieve ervaringen die inspireren en boeien",
  },
]

export function Experience(): JSX.Element {
  const words: string[] = [
    "Maak elke klantinteractie",
    "krachtig.",
  ]

  return (
    <section className="relative py-5 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Geanimeerde rasterlijnen */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`horizontal-${i}`}
            className="absolute left-0 right-0 h-px bg-black/10 dark:bg-white/10"
            style={{ top: `${(i + 1) * 5}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute bottom-0 top-0 w-px bg-black/10 dark:bg-white/10"
            style={{ left: `${(i + 1) * 5}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Inhoud */}
      <div className="relative z-10">
        <div className="mx-auto max-w-[1800px] px-10">
          <div className="flex min-h-screen flex-col items-start justify-center">
            {/* Dienstvakken */}
            <div className="mb-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="rounded-2xl bg-gradient-to-br from-[#1e7932]/20 to-[#1e7932]/10 dark:from-[#1e7932]/30 dark:to-[#1e7932]/20 p-8 backdrop-blur-sm"
                >
                  <h3 className="mb-2 text-2xl font-medium text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-white/80">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Hoofdtekst */}
            <div className="mb-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 text-xl italic text-gray-600 dark:text-white/80"
              >
                Ervaring maakt het verschil
              </motion.p>

              <div className="overflow-hidden">
                {words.map((word, index) => (
                  <motion.h2
                    key={word}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={cn(
                      "text-5xl font-medium leading-tight md:text-7xl pb-4",
                      index === words.length - 1 ? "text-[#1e7932]" : "text-gray-800 dark:text-white"
                    )}
                  >
                    {word}
                  </motion.h2>
                ))}
              </div>
            </div>

            {/* Beschrijving en Afbeelding */}
            <div className="mb-12 flex flex-col-reverse md:flex-row items-center gap-8">
              {/* Beschrijving */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="md:w-1/2 text-lg text-gray-600 dark:text-white/60"
              >
                Transformeer je merk en bedrijf met uitzonderlijke digitale ervaringen die groei en innovatie stimuleren. Ons team van experts levert geavanceerde oplossingen die je een voorsprong geven op de concurrentie.
              </motion.p>

              {/* Afbeelding */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="md:w-1/2"
              >
                <img
                  src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Stock afbeelding beschrijving"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>

            {/* Knop */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="group flex items-center gap-2 rounded-full bg-[#1e7932] px-6 py-3 text-white transition-all hover:bg-[#1e7932]/90 dark:bg-[#2a9d47] dark:hover:bg-[#2a9d47]/90"
            >
              <span>Ontdek onze oplossingen</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
