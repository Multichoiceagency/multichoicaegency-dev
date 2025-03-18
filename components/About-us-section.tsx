"use client"

import { ArrowRight, Check, Settings, Timer } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function AboutUsSection() {
  const [scrollY, setScrollY] = useState(0)
  const modelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
      className="w-full py-12 md:py-24 flex justify-center dark:bg-gray-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container max-w-[1440px] mx-auto px-4 md:px-6 dark:text-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <motion.div variants={itemVariants}>
            <h2 className="text-base font-medium tracking-wide text-muted-foreground">OVER ONS</h2>
          </motion.div>
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.h1
                className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-2xl"
                variants={itemVariants}
              >
                We zijn meer dan alleen webontwikkelaars, we creëren maatwerk websites, technisch sterke backends &
                effectieve digitale strategieën.
              </motion.h1>
              <motion.p className="max-w-[700px] text-black md:text-xl/relaxed" variants={itemVariants}>
                Bij Multichoiceagency geloven we dat een sterke online aanwezigheid essentieel is voor het succes van
                moderne bedrijven. Met onze expertise in maatwerk webdesign, backend development en digitale
                strategieën, helpen we bedrijven en ondernemers om hun online doelen te realiseren.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  OVER ONS <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="grid gap-8 border-t pt-10 lg:grid-cols-3 bg-green-50 dark:text-gray-800 px-5 pb-4 rounded-xl"
              variants={itemVariants}
            >
              <motion.div className="flex flex-col items-start" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <div className="text-6xl font-bold">
                  12<sup>+</sup>
                </div>
                <p className="text-sm text-muted-foreground">Jaren Ervaring</p>
              </motion.div>
              <motion.div className="space-y-2" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-muted p-2">
                    <Settings className="h-4 w-4" />
                  </div>
                  <h3 className="font-medium">Ervaring & Expertise</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Onze missie is om innovatieve, schaalbare en gebruiksvriendelijke websites te ontwikkelen die niet
                  alleen visueel aantrekkelijk zijn, maar ook technisch optimaal presteren.
                </p>
              </motion.div>
              <motion.div className="space-y-2" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-muted p-2">
                    <Timer className="h-4 w-4" />
                  </div>
                  <h3 className="font-medium">Creatieve Oplossingen</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Van corporate websites tot geavanceerde webshops, wij bieden op maat gemaakte oplossingen die perfect
                  aansluiten bij jouw wensen en bedrijfsdoelstellingen.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="mt-12 overflow-hidden rounded-lg"
          ref={modelRef}
          variants={itemVariants}
          style={{ height: "800px" }}
        >
          <div className="overflow-hidden rounded-lg h-full">
            <div className="w-full h-full relative">
              <iframe
                src="https://my.spline.design/nexbotrobotcharacterconcept-f8ffb96e3cd20e8b0147cef0e795bba8/"
                frameBorder="0"
                width="100%"
                height="100%"
                title="3D Interactive website"
                className="absolute inset-0"
                style={{
                  borderRadius: "0.5rem",
                  background: "transparent",
                }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div className="mt-12 space-y-4" variants={itemVariants}>
          <motion.h3 className="text-xl font-bold" variants={itemVariants}>
            Waarom kiezen voor Multichoiceagency?
          </motion.h3>
          <motion.ul className="grid gap-2 sm:grid-cols-2" variants={containerVariants}>
            {[
              "Maatwerk Webdesign – Unieke en professionele websites die jouw merk laten opvallen.",
              "SEO Geoptimaliseerd – Wij zorgen ervoor dat jouw website goed vindbaar is in Google.",
              "Responsive & Snel – Geoptimaliseerd voor mobiel, tablet en desktop voor een naadloze gebruikerservaring.",
              "Technische Expertise – Wij werken met moderne technologieën zoals Next.js, Vue.js, WordPress en Laravel.",
              "Persoonlijke Ondersteuning – Altijd bereikbaar voor advies, onderhoud en updates.",
            ].map((item, index) => (
              <motion.li key={index} className="flex items-center gap-2" variants={itemVariants} whileHover={{ x: 5 }}>
                <Check className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p className="text-muted-foreground" variants={itemVariants}>
            Wil je een professionele website laten maken of jouw huidige website optimaliseren? Neem vrijblijvend
            contact met ons op en ontdek hoe wij jouw bedrijf online kunnen laten groeien.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}
