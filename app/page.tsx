import { BentoGridDemo } from "@/components/BentoGridDemo"
import { HeroSection } from "@/components/HeroSection"
import Oplossingen from "@/components/oplossingen"
import OverOns from "@/components/OverOns"
import { Solutions } from "@/components/solutions"
import HeroNieuw from "@/components/test"
import { Testimonials } from "@/components/testimonials"
import Portfolio from "@/components/cases-display"
import WebDesignStats from "@/components/web-design-stats"


export default function Home() {
  return (
    <main>
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