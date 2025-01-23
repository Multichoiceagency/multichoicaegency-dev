"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useAnimation, type Variants } from "framer-motion"
import { MapPin, Route, FileSpreadsheet, Cog } from "lucide-react"

const timelineItems = [
  {
    date: "Fase 1",
    title: "Plattegrond",
    description:
      "In deze initiële fase verzamelen we essentiële data over je bedrijf, doelgroep en markt. Dit inzicht gebruiken we om een stevige basis te leggen voor de strategie achter de website.",
    icon: <MapPin className="w-10 h-10" />,
  },
  {
    date: "Fase 2",
    title: "Route",
    description:
      "Met de verzamelde inzichten stellen we concrete en meetbare doelstellingen op. Dit stippelt het traject uit voor het ontwerp en de technische vereisten van de website, waarbij de klanttevredenheid voorop staat.",
    icon: <Route className="w-10 h-10" />,
  },
  {
    date: "Fase 3",
    title: "Formule",
    description:
      "Hier nemen we de stap van concept naar visualisatie. We ontwikkelen schetsen en wireframes die een helder beeld geven van het uiteindelijke ontwerp, met aandacht voor de gebruikerservaring en functionaliteit.",
    icon: <FileSpreadsheet className="w-10 h-10" />,
  },
  {
    date: "Fase 4",
    title: "Techniek",
    description:
      "In de techniek fase transformeren we het strategisch plan en ontwerp naar werkende modules en functionaliteiten. Deze worden nauwgezet ontwikkeld en getest, waarna de website of applicatie zorgvuldig wordt geïmplementeerd.",
    icon: <Cog className="w-10 h-10" />,
  },
]

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const ProcessTimeline: React.FC = () => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  return (
    <div ref={ref} className="w-screen scrollbar-hide">
      <div className="w-full flex space-x-8 py-8 px-4 min-w-max">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-64"
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            custom={index}
          >
            <div className="w-20 h-20 bg-teal-900 rounded-full flex items-center justify-center text-white mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-teal-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 text-center">{item.description}</p>
            {index < timelineItems.length - 1 && <div className="w-full h-1 bg-teal-900 mt-4"></div>}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProcessTimeline

