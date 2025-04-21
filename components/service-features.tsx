"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface ServiceFeaturesProps {
  features: Array<{
    title: string
    description: string
    icon?: ReactNode
  }>
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-[#2D4625] dark:text-white">Voordelen</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-[#f5f9f5] dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#2D4625] transition-colors duration-300">
              {feature.icon || (
                <CheckCircle className="h-6 w-6 text-[#2D4625] dark:text-[#a6e267] group-hover:text-white transition-colors duration-300" />
              )}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-[#2D4625] dark:group-hover:text-[#a6e267] transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
