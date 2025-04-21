"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ServiceProcessProps {
  process: Array<{
    title: string
    description: string
    icon?: ReactNode
  }>
}

export default function ServiceProcess({ process }: ServiceProcessProps) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-[#2D4625] dark:text-white">Onze aanpak</h2>
      <div className="space-y-8">
        {process.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-[#2D4625] text-white flex items-center justify-center text-2xl font-bold">
                {index + 1}
              </div>
            </div>
            <div className="flex-grow bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-[#2D4625] dark:text-[#a6e267]">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
