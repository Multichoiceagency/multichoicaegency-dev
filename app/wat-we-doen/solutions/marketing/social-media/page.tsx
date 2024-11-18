"use client"

import { ServicePageTemplate } from '@/components/service-page-template'
import { SocialMediaContent } from '@/components/social-media-content'
import { ContactFormulier } from '@/components/contact-formulier'

export default function SocialMediaPage() {
  return (
    <ServicePageTemplate
      title="Social Media Marketing"
      description="Bereik en engageer uw doelgroep effectief via sociale mediakanalen. Wij helpen u met het ontwikkelen en uitvoeren van een doelgerichte social media strategie."
      backgroundImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
    >
      <SocialMediaContent />
      <ContactFormulier />
    </ServicePageTemplate>
  )
}