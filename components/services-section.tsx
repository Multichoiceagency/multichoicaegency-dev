"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Using the first three services from your carousel as the most important ones
const services = [
  {
    number: "1",
    title: "Strategie",
    description:
      "Een heldere en effectieve strategie is het fundament voor succes. We helpen je bedrijf duidelijk te krijgen wat nu eigenlijk je kernvraag is en wat je werkelijke doelen zijn.",
    icon: "📊",
    tags: ["Marktonderzoek", "Doelgroepanalyse", "Concurrentieanalyse"],
    link: "/strategie",
  },
  {
    number: "2",
    title: "Branding",
    description:
      "Onze expertise in branding helpt je visuele identiteit aan te scherpen voor een digital-first (r)evolutie, zodat je merk weer up-to-date is en iedereen weer weet waar je merk voor staat.",
    icon: "✒️",
    tags: ["Logo Design", "Brand Identity", "Style Guides"],
    link: "/branding",
  },
  {
    number: "3",
    title: "Design",
    description:
      "De kracht van (web)design is niet te onderschatten. Als je je strategie op een rake manier visualiseert, zorg je voor effectieve communicatie en vergroot je daarmee gebruikersinteractie.",
    icon: "🎨",
    tags: ["UX/UI Design", "Wireframing", "Prototyping"],
    link: "/design",
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#2D4625] rounded flex items-center justify-center">
                <span className="text-white text-sm">🔍</span>
              </div>
              <p className="text-[#2D4625] font-medium">Onze expertise</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-[#0f2b3d] leading-tight">Hoe wij werken</h2>
          </div>
          <Link
            href="/diensten"
            className="inline-flex items-center px-6 py-3 bg-[#2D4625] hover:bg-[#1b5a1e] text-white font-medium rounded-full transition-colors duration-300"
          >
            Bekijk alle diensten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
                      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#2D4625] filter blur-[100px] opacity-20 animate-pulse-slow"></div>

              {/* Service Card */}
              <div
                className={cn(
                  "h-full rounded-2xl p-8 transition-all duration-300 border border-gray-100 shadow-sm",
                  hoveredIndex === index ? "bg-[#2D4625] filter animate-pulse-fast text-white" : "bg-gradient-to-br from-white to-gray-50",
                )}
              >
                {/* Number and Icon */}
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={cn(
                      "text-6xl font-medium opacity-20",
                      hoveredIndex === index ? "text-white" : "text-[#2D4625]",
                    )}
                  >
                    {service.number}
                  </span>
                  <div
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center text-2xl",
                      hoveredIndex === index ? "bg-white text-[#2D4625]" : "bg-[#f0f5f0] text-[#2D4625]",
                    )}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3
                  className={cn("text-2xl font-medium mb-4", hoveredIndex === index ? "text-white" : "text-[#0f2b3d]")}
                >
                  {service.title}
                </h3>

                <p className={cn("mb-6", hoveredIndex === index ? "text-white/90" : "text-gray-600")}>
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={cn(
                        "px-3 py-1 text-sm font-medium rounded-full",
                        hoveredIndex === index ? "bg-white/20 text-white" : "bg-[#f0f5f0] text-[#2D4625]",
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={service.link}
                  className={cn(
                    "inline-flex items-center font-medium transition-all duration-300",
                    hoveredIndex === index ? "text-white group" : "text-[#2D4625] group",
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
