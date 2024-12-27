"use client"

import { ServicePageTemplate } from '@/components/service-page-template'
import { WebsiteOptimalisatieContent } from '@/components/website-optimalisatie-content'
import { ContactFormulier } from '@/components/contact-formulier'

export default function WebsiteOptimalisatiePage() {
  return (
    <ServicePageTemplate
      title="Website Optimalisatie"
      description="Verbeter de prestaties van uw website met data-gedreven optimalisatie. Van SEO tot conversie-optimalisatie, wij helpen u het maximale uit uw online aanwezigheid te halen."
      backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    >
      <WebsiteOptimalisatieContent />
      <ContactFormulier />
    </ServicePageTemplate>
  )
}