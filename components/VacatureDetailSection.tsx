"use client"

import { motion } from "framer-motion"

interface VacatureDetailSectionProps {
  title: string
  intro: string
  responsibilities: string[]
  requirements: string[]
}

export default function VacatureDetailSection({
  title,
  intro,
  responsibilities,
  requirements,
}: VacatureDetailSectionProps) {
  return (
    <section className="py-20 bg-[#1a2a18] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-white/70 mb-8">{intro}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-3">Wat ga je doen?</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              {responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Wat vragen we van jou?</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              {requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
