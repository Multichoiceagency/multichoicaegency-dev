import { SolutionsHero } from "@/components/solutions-hero"
import { SolutionsGrid } from "@/components/solutions-grid"
import { ContactForm } from "@/components/contact-form"

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <SolutionsGrid />
      <ContactForm />
    </main>
  )
}