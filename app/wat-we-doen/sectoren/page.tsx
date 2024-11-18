"use client"

import { SectorenHero } from "@/components/sectoren-hero"
import { SectorenGrid } from "@/components/sectoren-grid"
import { ContactFormulier } from "@/components/contact-formulier"

export default function SectorenPage() {
  return (
    <main>
      <SectorenHero />
      <SectorenGrid />
      <ContactFormulier />
    </main>
  )
}