import { BentoGridDemo } from "@/components/BentoGridDemo"
import { HeroSection } from "@/components/HeroSection"
import Oplossingen from "@/components/oplossingen"
import OverOns from "@/components/OverOns"
import { Solutions } from "@/components/solutions"
import { Testimonials } from "@/components/testimonials"
import Portfolio from "@/components/cases-display"
import WebDesignStats from "@/components/web-design-stats"
import HeroNieuw from "@/components/HeroNieuw"


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroNieuw />
      <Oplossingen />
      <OverOns />
      <Portfolio />
      <Solutions />
      <BentoGridDemo />
      <HeroSection />
      <WebDesignStats />
      <Testimonials />
    </main>
  )
}