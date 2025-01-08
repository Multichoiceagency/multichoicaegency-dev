import { BentoGridDemo } from "@/components/BentoGridDemo"
import { Hero } from "@/components/hero"
import { HeroParallaxDemo } from "@/components/heroParallax"
import { HeroSection } from "@/components/HeroSection"
import Oplossingen from "@/components/oplossingen"
import OverOns from "@/components/OverOns"
import { Solutions } from "@/components/solutions"
import Navbar from "@/components/test"
import { Testimonials } from "@/components/testimonials"


export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <Oplossingen />
      <OverOns />
      <HeroParallaxDemo />
      <Solutions />
      <BentoGridDemo />
      <HeroSection />
      <Testimonials />
    </main>
  )
}