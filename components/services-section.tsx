"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const services = [
  {
    number: "1",
    title: "Strategie",
    description:
      "Een heldere en effectieve strategie is het fundament voor succes. We helpen je bedrijf duidelijk te krijgen wat nu eigenlijk je kernvraag is en wat je werkelijke doelen zijn.",
    icon: "📊",
    tags: ["Marktonderzoek", "Doelgroepanalyse", "Concurrentieanalyse"],
    link: "/diensten",
  },
  {
    number: "2",
    title: "Branding",
    description:
      "Onze expertise in branding helpt je visuele identiteit aan te scherpen voor een digital-first (r)evolutie, zodat je merk weer up-to-date is en iedereen weer weet waar je merk voor staat.",
    icon: "✒️",
    tags: ["Logo Design", "Brand Identity", "Style Guides"],
    link: "/diensten",
  },
  {
    number: "3",
    title: "Design",
    description:
      "De kracht van (web)design is niet te onderschatten. Als je je strategie op een rake manier visualiseert, zorg je voor effectieve communicatie en vergroot je daarmee gebruikersinteractie.",
    icon: "🎨",
    tags: ["UX/UI Design", "Wireframing", "Prototyping"],
    link: "/diensten",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#0e1a11] transition-colors duration-500 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-dark rounded flex items-center justify-center">
                <span className="text-white text-sm">🔍</span>
              </div>
              <p className="text-brand-dark font-medium dark:text-white">Onze expertise</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-[#0f2b3d] dark:text-white leading-tight">
              Hoe wij werken
            </h2>
          </div>
          <Link
            href="/diensten"
            className="inline-flex items-center px-6 py-3 bg-brand-dark hover:bg-brand DEFAULT text-white font-medium rounded-full transition-colors duration-300"
          >
            Bekijk alle diensten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated Blob */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl pointer-events-none">
                <div
                  className={cn(
                    "absolute rounded-full bg-brand blur-25 opacity-30 animation-pop-blob",
                    index === 0 && "top-6 left-6 w-44 h-44",
                    index === 1 && "top-8 right-6 w-48 h-48",
                    index === 2 && "bottom-4 left-12 w-52 h-52"
                  )}
                ></div>
              </div>

              {/* Service Card */}
              <div
                className={cn(
                  "relative h-full rounded-2xl p-8 transition-all duration-300 border shadow-sm z-10",
                  "border-gray-100 dark:border-gray-800",
                  "hover:border-brand/60",
                  hoveredIndex === index
                    ? "bg-brand-dark text-white animate-pulse-fast"
                    : "bg-gradient-to-br from-white to-gray-50 dark:from-[#18281c] dark:to-[#1e2d22]"
                )}
              >
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={cn(
                      "text-6xl font-medium opacity-20",
                      hoveredIndex === index ? "text-white" : "text-brand-dark dark:text-white/10"
                    )}
                  >
                    {service.number}
                  </span>
                  <div
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center text-2xl",
                      hoveredIndex === index
                        ? "bg-white text-brand-dark"
                        : "bg-[#f0f5f0] dark:bg-[#2b3c2b] text-brand-dark dark:text-white"
                    )}
                  >
                    {service.icon}
                  </div>
                </div>

                <h3
                  className={cn(
                    "text-2xl font-medium mb-4",
                    hoveredIndex === index ? "text-white" : "text-[#0f2b3d] dark:text-white"
                  )}
                >
                  {service.title}
                </h3>

                <p
                  className={cn(
                    "mb-6",
                    hoveredIndex === index ? "text-white/90" : "text-gray-600 dark:text-gray-300"
                  )}
                >
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={cn(
                        "px-3 py-1 text-sm font-medium rounded-full",
                        hoveredIndex === index
                          ? "bg-white/20 text-white"
                          : "bg-[#f0f5f0] dark:bg-[#2b3c2b] text-brand-dark dark:text-white"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.link}
                  className={cn(
                    "inline-flex items-center font-medium transition-all duration-300 group",
                    hoveredIndex === index ? "text-white" : "text-brand-dark dark:text-white"
                  )}
                >
                  Meer informatie
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
