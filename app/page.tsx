import Portfolio from "@/components/cases-display"
import ScrollTextFill from "@/components/scroll-text-fill"
import ServicesSection from "@/components/services-section"
import AIAutomationSection from "@/components/ai-automation-section"
import AutomationServices from "@/components/automation-services"
import ReviewSection from "@/components/review-section"
import CTASection from "@/components/cta-section"
import HeroSection from "@/components/Hero-section"
import WhyChooseMultichoice from "@/components/over-multichoiceagency"
import TeamSection from "@/components/team-section"


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection
        videoSrc={"/partners/ui.mp4"} title={"Multichoiceagency - jouw one stop shop full service digital agency"} description={"Als full service digital agency helpen we marketeers, ontwerps en ontwikkelaars samen te werken om digitale ervaringen te bouwen, beheren en optimaliseren die resultaat opleveren."} buttonText={"Gratis Offerte"} buttonLink={"/offerte-aanvragen"} />
      <ScrollTextFill />
      <ServicesSection />
      <WhyChooseMultichoice />
      <AutomationServices />
      <TeamSection />
      <AIAutomationSection />
      <ReviewSection />
      <CTASection />
      <Portfolio />
    </main>
  )
}