"use client"

import { StrategieHero } from "@/components/strategie-hero"
import { StrategieContent } from "@/components/strategie-content"
import { ContactFormulier } from "@/components/contact-formulier"

export default function StrategiePage() {
  return (
    <main>
      <StrategieHero />
      <StrategieContent />
      <ContactFormulier />
    </main>
  )
}