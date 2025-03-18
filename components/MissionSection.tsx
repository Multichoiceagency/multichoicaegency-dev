"use client"

import { JSX, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const services = [
  "Webdesign",
  "Web Development",
  "E-commerce Development",
  "Branding"
]

export function MissionSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Inhoud */}
      <motion.div className="relative z-10" style={{ opacity, y }}>
        <div className="mx-auto max-w-[1800px] px-10">
          <div className="flex min-h-screen flex-col md:flex-row items-center justify-center gap-12">
            {/* Hoofdtekst */}
            <div className="mb-12 max-w-2xl md:w-1/2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 text-xl italic text-gray-600 dark:text-gray-300"
              >
                Onze missie
              </motion.p>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl font-medium leading-tight md:text-5xl text-gray-800 dark:text-white mb-8"
                >
                  Wij zijn gespecialiseerd in{" "}
                  <span className="italic">het ontwikkelen van gebruikerservaringen</span>
                  <span className="text-[#1e7932] dark:text-[#2ecc71]">.</span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-12 text-lg text-gray-600 dark:text-gray-300"
              >
                Onze missie is om bedrijven te begeleiden door gezamenlijke creatieve processen
                om hun digitale dromen te realiseren{" "}
                <span className="italic">(en ondertussen van het leven te genieten)</span>
                . We hechten waarde aan goede relaties, kwaliteitswerk en het maken van een betekenisvol verschil door:
              </motion.p>

              {/* Services List */}
              <div className="space-y-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0"
                  >
                    <motion.h3 
                      className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-white cursor-pointer inline-block relative"
                      whileHover={{ 
                        scale: 1.05, 
                        color: "#1e7932",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {service}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1e7932] dark:bg-[#2ecc71]"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Afbeelding */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="md:w-1/2 relative h-[600px] w-full rounded-lg overflow-hidden"
            >
              <Image
                src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg"
                alt="Website laten maken"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

