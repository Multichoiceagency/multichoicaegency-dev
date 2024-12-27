import { ServicePageTemplate } from '@/components/service-page-template'
import { MarketingContent } from '@/components/marketing-content'
import { ContactFormulier } from '@/components/contact-formulier'

export default function MarketingProgramsPage() {
  return (
    <ServicePageTemplate
      title="Marketing Programs & Campaigns"
      subtitle="Onze diensten"
      description="We bereiken je doelgroepen op de juiste kanalen met de juiste tone of voice en versnellen de groei van je merk door full-funnel marketing op maat."
    >
      <MarketingContent />
      <div className="mt-24">
        <ContactFormulier />
      </div>
    </ServicePageTemplate>
  )
}