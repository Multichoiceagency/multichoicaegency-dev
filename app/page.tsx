import { BentoGridDemo } from "@/components/BentoGridDemo"
import { HeroSection } from "@/components/HeroSection"
import Oplossingen from "@/components/oplossingen"
import { Testimonials } from "@/components/testimonials"
import Portfolio from "@/components/cases-display"
import HeroNieuw from "@/components/HeroNieuw"
import ContactOpnemen from "@/components/ContactOpnemen"
import AnimatedText from "@/components/AnimatedText"


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroNieuw 
      title={"Bouw Samen Met Ons Aan Jouw Digitale Toekomst"} 
      description={"Ontdek innovatieve oplossingen die jouw bedrijf naar nieuwe hoogten brengen. Wij creëren digitale ervaringen op maat, volledig afgestemd op jouw visie."} 
      buttonText={"Ontdek onze diensten"} 
      buttonLink={"/diensten"} 
      videoSrc={"https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/UI-UX-Design-SHOWREEL-2023-｜-Musemind.mp4"} />
      <Oplossingen />
      <BentoGridDemo />
      <HeroSection />
      <Portfolio />
      <AnimatedText />
      <Testimonials />
      <ContactOpnemen />
    </main>
  )
}