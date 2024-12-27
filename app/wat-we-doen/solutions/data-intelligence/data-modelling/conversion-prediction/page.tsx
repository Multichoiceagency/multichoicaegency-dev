"use client"

import { ServicePageTemplate } from '@/components/service-page-template'
import { ConversionPredictionContent } from '@/components/conversion-prediction-content'
import { ContactFormulier } from '@/components/contact-formulier'

export default function ConversionPredictionPage() {
  return (
    <ServicePageTemplate
      title="Conversion Prediction"
      description="Maximaliseer uw conversies met voorspellende analyses. Identificeer kansrijke leads en optimaliseer uw verkoopproces met data-driven inzichten."
      backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    >
      <ConversionPredictionContent />
      <ContactFormulier />
    </ServicePageTemplate>
  )
}