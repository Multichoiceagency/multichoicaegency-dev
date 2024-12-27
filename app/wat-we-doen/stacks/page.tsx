"use client"

import { TechnologieHero } from "@/components/technologie-hero"
import { TechnologieGrid } from "@/components/technologie-grid"
import { ContactFormulier } from "@/components/contact-formulier"

export default function StacksPage() {
  return (
    <main>
      <TechnologieHero />
      <TechnologieGrid />
      <ContactFormulier />
    </main>
  )
}