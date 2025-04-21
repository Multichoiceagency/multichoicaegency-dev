"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCTAProps {
  title: string
  description: string
}

export default function ServiceCTA({ title, description }: ServiceCTAProps) {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-100 dark:border-gray-800 relative overflow-hidden"
      >
        {/* Futuristic background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="h-full w-full grid grid-cols-12 grid-rows-6">
              {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-[#2D4625]/20"></div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#2D4625] filter blur-[80px] opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#a6e267] filter blur-[80px] opacity-10"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D4625] dark:text-white">{title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#2D4625] text-white dark:bg-[#a6e267] dark:text-[#2D4625] rounded-full hover:bg-[#1b5a1e] dark:hover:bg-white transition-colors duration-300 font-medium flex items-center"
            >
              Neem contact op
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/cases"
              className="px-8 py-4 bg-transparent border border-[#2D4625]/30 dark:border-white/30 text-[#2D4625] dark:text-white rounded-full hover:bg-[#2D4625]/10 dark:hover:bg-white/10 transition-colors duration-300 font-medium"
            >
              Bekijk onze cases
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
