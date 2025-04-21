"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import ServiceCTA from "./service-cta"
import ServiceProcess from "./service-process"
import ServiceFeatures from "./service-features"
import ServiceTestimonial from "./service-testimonial"

interface ServiceLayoutProps {
  children: ReactNode
  title: string
  subtitle: string
  description: string
  icon: ReactNode
  features: Array<{
    title: string
    description: string
    icon?: ReactNode
  }>
  process: Array<{
    title: string
    description: string
    icon?: ReactNode
  }>
  testimonial?: {
    quote: string
    author: string
    company: string
    image?: string
  }
  relatedServices: Array<{
    title: string
    slug: string
  }>
  ctaTitle?: string
  ctaDescription?: string
}

export default function ServiceLayout({
  children,
  title,
  subtitle,
  description,
  icon,
  features,
  process,
  testimonial,
  relatedServices,
  ctaTitle,
  ctaDescription,
}: ServiceLayoutProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <main className="bg-[#f5f9f5] dark:bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative overflow-hidden bg-[#2D4625] dark:bg-gray-900 pt-32 pb-20 md:pt-40 md:pb-32"
      >
        {/* Futuristic background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full grid grid-cols-12 grid-rows-6">
              {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-[#a6e267]/20"></div>
              ))}
            </div>
          </div>

          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#a6e267] filter blur-[100px] opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#2D4625] filter blur-[120px] opacity-10 animate-pulse-slower"></div>

          {/* Tech lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div style={{ opacity, scale, y }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#a6e267]/20 text-[#a6e267] text-sm font-medium mb-4 border border-[#a6e267]/30">
              {icon}
              <span className="ml-2">{subtitle}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">{description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#a6e267] text-[#2D4625] rounded-full hover:bg-white transition-colors duration-300 font-medium flex items-center"
              >
                Neem contact op
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#meer-informatie"
                className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors duration-300 font-medium"
              >
                Meer informatie
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f5f9f5] dark:from-gray-950 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div id="meer-informatie" className="container mx-auto px-4 py-16">
        {/* Custom content for each service */}
        {children}

        {/* Features Section */}
        <ServiceFeatures features={features} />

        {/* Process Section */}
        <ServiceProcess process={process} />

        {/* Testimonial */}
        {testimonial && <ServiceTestimonial testimonial={testimonial} />}

        {/* Related Services */}
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-[#2D4625] dark:text-white">Gerelateerde diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={`/diensten/${service.slug}`}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-[#2D4625] dark:group-hover:text-[#a6e267] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-[#2D4625] dark:group-hover:bg-[#2D4625] transition-colors duration-300">
                    <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <ServiceCTA
          title={ctaTitle || "Klaar om uw merk naar een hoger niveau te tillen?"}
          description={
            ctaDescription || "Neem contact met ons op voor een vrijblijvend gesprek over hoe wij u kunnen helpen."
          }
        />
      </div>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.2; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </main>
  )
}
