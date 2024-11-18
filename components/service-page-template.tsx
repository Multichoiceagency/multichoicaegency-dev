"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'

interface ServicePageTemplateProps {
  title: string
  subtitle: string
  description: string
  children: React.ReactNode
}

export function ServicePageTemplate({ title, subtitle, description, children }: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=60"
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary"
            >
              {subtitle}
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 max-w-3xl text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 max-w-2xl text-lg text-white/80"
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button className="group gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Neem contact op
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-24">
        {children}
      </div>
    </div>
  )
}