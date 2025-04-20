import Portfolio from "@/components/cases-display"
import HeroNieuw from "@/components/HeroNieuw"
import ScrollTextFill from "@/components/scroll-text-fill"
import ServicesSection from "@/components/services-section"
import AIAutomationSection from "@/components/ai-automation-section"
import AutomationServices from "@/components/automation-services"
import ReviewSection from "@/components/review-section"
import CTASection from "@/components/cta-section"


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroNieuw 
      title={"Bouw Samen Met Ons Aan Jouw Digitale Toekomst"} 
      description={"Ontdek innovatieve oplossingen die jouw bedrijf naar nieuwe hoogten brengen. Wij creëren digitale ervaringen op maat, volledig afgestemd op jouw visie."} 
      buttonText={"Onze expertises"} 
      buttonLink={"/diensten"} 
      videoSrc={"/partners/ui.mp4"} />
      <ScrollTextFill />
      <ServicesSection />
      <AIAutomationSection />
      <AutomationServices />
      <ReviewSection />
      <CTASection />
      <Portfolio />
    </main>
  )
}