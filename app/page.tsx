import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Solutions } from "@/components/solutions"
import RelatedCasesSlider from "@/components/RelatedCasesSlider"

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Solutions />
      <RelatedCasesSlider />
    </main>
  )
}