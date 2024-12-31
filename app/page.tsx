import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Solutions } from "@/components/solutions"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Solutions />
      <Testimonials />
    </main>
  )
}