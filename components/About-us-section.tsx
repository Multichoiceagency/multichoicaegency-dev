"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export default function AboutUsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Scroll animation setup for background color transition
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Background gradient that changes with scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [
      "rgba(255, 255, 255, 1)",
      "rgba(255, 255, 255, 0.8)",
      "rgba(27, 121, 53, 0.1)",
      "rgba(255, 255, 255, 0.8)",
      "rgba(255, 255, 255, 1)",
    ],
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.0,
        staggerChildren: 1.0,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section
      ref={ref}
      className="w-full py-16 md:py-24 relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background with color fade effect */}
      <motion.div className="absolute inset-0 -z-10" style={{ background: backgroundColor }} />

      <div className="container max-w-7xl mx-auto dark:bg-black/50 py-10 rounded-xl px-8 md:px-6 relative z-10 dark:text-white">
        {/* Heading with brand color accent */}
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" variants={itemVariants}>
          <span className="text-[#1b7935]">Internetbureau</span> Multichoice, een webdevelopment agency uit Rotterdam
        </motion.h1>

        {/* Intro paragraph */}
        <motion.p className="text-lg mb-12 max-w-4xl" variants={itemVariants}>
          Multichoiceagency is opgericht in 2015. Vanaf de start ligt de focus van onze digital agency op het maken van
          websites met open source software. In een sterk partnership met onze klanten bouwen we met elkaar websites,
          webshops, apps en Mijn-Omgevingen.
        </motion.p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left column - Square Video (6 columns) */}
          <motion.div className="md:col-span-6" variants={itemVariants}>
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <video
                src="https://cdn.dribbble.com/userupload/16909015/file/original-48cccd4aa2194f5d6799dfd3b035d124.mp4"
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          </motion.div>

          {/* Right column - Card with content (6 columns) */}
          <motion.div
            className="md:col-span-6 bg-gray-50 p-8 md:p-10 rounded-lg dark:text-foreground"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-black">Jouw website in goede handen</h2>

            <p className="mb-4 dark:text-black">
              Jij wilt de volgende stap zetten met je website. Je wilt <span className="font-semibold">meer leads</span>{" "}
              genereren, meer verkopen in je webshop of jouw informatievoorziening voor de gebruiker beter op orde
              brengen. Je werkt graag met <span className="font-semibold">standaardoplossingen</span> maar zoekt
              misschien ook een <span className="font-semibold">stukje complex maatwerk</span>. De ervaren
              webspecialisten van ons bureau kunnen jou dan perfect helpen.
            </p>

            <p className="mb-6 dark:text-black">
              Ons internetbureau helpt jou met <span className="text-[#1b7935] font-medium">webdevelopment</span>,{" "}
              <span className="text-[#1b7935] font-medium">webdesign</span> en het bedenken van slimme online
              oplossingen die zorgen voor een betere ervaring voor de eindgebruiker en kostenbesparende processen aan de
              achterkant. Meer <span className="text-[#1b7935] font-medium">Digitale Slagkracht</span> noemen wij dat.
            </p>

            <Link href="/contact" className="inline-flex items-center text-[#1b7935] font-medium hover:underline group">
              Neem contact op
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
