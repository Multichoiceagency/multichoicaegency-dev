"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    title: "Strategy",
    description: "Digital transformation roadmaps that drive success"
  },
  {
    title: "Technology",
    description: "Innovative solutions built for the modern web"
  },
  {
    title: "Marketing",
    description: "Data-driven campaigns that deliver results"
  },
  {
    title: "Design",
    description: "Creative experiences that inspire and engage"
  }
]

export function Experience() {
  const words = [
    "Make every customer interaction",
    "powerful.",
  ]

  return (
    <section className="relative min-h-screen bg-black">
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`horizontal-${i}`}
            className="absolute left-0 right-0 h-px bg-white/10"
            style={{ top: `${(i + 1) * 5}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute bottom-0 top-0 w-px bg-white/10"
            style={{ left: `${(i + 1) * 5}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-[1800px] px-10">
          <div className="flex min-h-screen flex-col items-start justify-center">
            {/* Service Boxes */}
            <div className="mb-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="rounded-2xl bg-gradient-to-br from-[#1e7932]/20 to-[#1e7932]/10 p-8 backdrop-blur-sm"
                >
                  <h3 className="mb-2 text-2xl font-medium text-white">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Main Text */}
            <div className="mb-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 text-xl italic text-white/80"
              >
                Experience is everything
              </motion.p>

              <div className="overflow-hidden">
                {words.map((word, index) => (
                  <motion.h2
                    key={word}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={cn(
                      "text-5xl font-medium leading-tight md:text-7xl",
                      index === words.length - 1 ? "text-[#1e7932]" : "text-white"
                    )}
                  >
                    {word}
                  </motion.h2>
                ))}
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12 max-w-3xl text-lg text-white/60"
            >
              Transform your brand and business with exceptional digital experiences that drive growth and innovation. Our team of experts delivers cutting-edge solutions that keep you ahead of the competition.
            </motion.p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="group flex items-center gap-2 rounded-full bg-[#1e7932] px-6 py-3 text-white transition-all hover:bg-[#1e7932]/90"
            >
              <span>Discover our solutions</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}