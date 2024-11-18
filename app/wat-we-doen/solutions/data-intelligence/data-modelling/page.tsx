"use client"

import { ServicePageTemplate } from '@/components/service-page-template'
import { DataModellingContent } from '@/components/data-modelling-content'
import { ContactFormulier } from '@/components/contact-formulier'

export default function DataModellingPage() {
  return (
    <ServicePageTemplate
      title="Data Modelling"
      description="Transformeer ruwe data naar waardevolle inzichten met geavanceerde data modelling technieken. Ontdek patronen, voorspel trends en neem datagedreven beslissingen."
      backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    >
      <DataModellingContent />
      <ContactFormulier />
    </ServicePageTemplate>
  )
}