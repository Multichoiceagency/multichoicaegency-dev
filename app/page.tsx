import { Testimonials } from "@/components/testimonials"
import Portfolio from "@/components/cases-display"
import HeroNieuw from "@/components/HeroNieuw"
import ContactOpnemen from "@/components/ContactOpnemen"
import TeamSection from "@/components/team-section"
import { BentoGridDemo } from "@/components/BentoGridDemo"
import AboutUsSection from "@/components/About-us-section"
import HeroSection from "@/components/HeroSection"
import { Typewriter } from "@/components/typewriter"
import ServicesCarousel from "@/components/services-carousel"


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroNieuw 
      title={"Bouw Samen Met Ons Aan Jouw Digitale Toekomst"} 
      description={"Ontdek innovatieve oplossingen die jouw bedrijf naar nieuwe hoogten brengen. Wij creëren digitale ervaringen op maat, volledig afgestemd op jouw visie."} 
      buttonText={"Onze expertises"} 
      buttonLink={"/diensten"} 
      videoSrc={"/partners/ui.mp4"} />
      <Typewriter />
      <ServicesCarousel />
      <AboutUsSection />
      <TeamSection />
      <Portfolio />
      <HeroSection />
      <Testimonials />
      <ContactOpnemen />
    </main>
  )
}