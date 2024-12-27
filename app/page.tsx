import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Solutions } from "@/components/solutions"
import { MissionSection } from "@/components/MissionSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { TestimonialsSection } from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Solutions />
      <MissionSection />
      <PortfolioSection />
      <TestimonialsSection />
    </main>
  )
}