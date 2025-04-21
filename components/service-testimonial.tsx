"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

interface ServiceTestimonialProps {
  testimonial: {
    quote: string
    author: string
    company: string
    image?: string
  }
}

export default function ServiceTestimonial({ testimonial }: ServiceTestimonialProps) {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#2D4625] dark:bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Quote className="w-full h-full text-white" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          {testimonial.image && (
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#a6e267]/30 flex-shrink-0">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.author}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="text-xl md:text-2xl text-white italic mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="text-[#a6e267] font-semibold">{testimonial.author}</p>
              <p className="text-white/70">{testimonial.company}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
