import { BasePage } from '@/components/base-page'
import { FeatureSection } from '@/components/feature-section'
import { CaseStudies } from '@/components/case-studies'
import { ContactForm } from '@/components/contact-form'

export const metadata = {
  title: 'E-commerce Solutions | Multichoice Agency',
  description: 'Boost your online sales with our cutting-edge e-commerce solutions. We create user-friendly, conversion-optimized online stores.',
}

export default function ECommercePage() {
  return (
    <BasePage title={metadata.title} description={metadata.description}>
      <HeroSection
        title="Boost Your Online Sales"
        description="Create a powerful e-commerce presence with our cutting-edge solutions"
        backgroundImage="/images/ecommerce-hero.jpg"
        buttonText="Start Your E-commerce Project"
      />
      <FeatureSection
        title="Our E-commerce Expertise"
        features={[
          {
            title: "Custom E-commerce Platforms",
            description: "Tailored solutions to meet your unique business needs",
            icon: "ShoppingCart"
          },
          {
            title: "Mobile-First Design",
            description: "Optimized for seamless shopping on all devices",
            icon: "Smartphone"
          },
          {
            title: "Secure Payment Integration",
            description: "Multiple payment gateways for safe transactions",
            icon: "Shield"
          }
        ]}
      />
      <CaseStudies category="e-commerce" />
      <ContactForm />
    </BasePage>
  )
}

