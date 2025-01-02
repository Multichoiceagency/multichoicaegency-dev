import { BentoGridDemo } from "@/components/BentoGridDemo"
import { Hero } from "@/components/hero"
import { HeroParallaxDemo } from "@/components/heroParallax"
import { HeroSection } from "@/components/HeroSection"
import { Solutions } from "@/components/solutions"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroParallaxDemo />
      <Solutions />
      <BentoGridDemo />
      <HeroSection />
      <Testimonials />
    </main>
  )
}