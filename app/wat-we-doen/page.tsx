import { WatWeDoenHero } from "@/components/wat-we-doen-hero"
import { Solutions } from "@/components/solutions"
import { Cases } from "@/components/cases"
import { TechToolkit } from "@/components/tech-toolkit"
import { ContactForm } from "@/components/contact-form"

export default function WatWeDoenPage() {
  return (
    <main>
      <WatWeDoenHero />
      <Solutions />
      <Cases />
      <TechToolkit />
      <ContactForm />
    </main>
  )
}