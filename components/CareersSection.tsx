"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Laptop,
  Code,
  Server,
  Handshake,
  Rocket,
  Search,
  UserCircle,
  Shield,
} from "lucide-react"

const roles = [
  {
    slug: "webdesigner",
    icon: <Laptop className="h-5 w-5" />,
    title: "Webdesigner",
    description: "Vertaal visuele identiteit naar pixel-perfecte designs die scoren bij de klant.",
  },
  {
    slug: "frontend-developer",
    icon: <Code className="h-5 w-5" />,
    title: "Frontend Developer",
    description: "Bouw interactieve en responsieve interfaces in React of Next.js die écht presteren.",
  },
  {
    slug: "backend-developer",
    icon: <Server className="h-5 w-5" />,
    title: "Backend Developer",
    description: "Zorg voor solide APIs, veilige systemen en schaalbare architectuur achter de schermen.",
  },
  {
    slug: "accountmanager",
    icon: <Handshake className="h-5 w-5" />,
    title: "Accountmanager",
    description: "Onderhoud klantrelaties, bewaak projecten en ontdek groeikansen binnen jouw accounts.",
  },
  {
    slug: "sales-stagiair",
    icon: <Rocket className="h-5 w-5" />,
    title: "Sales Stagiair(e)",
    description: "Leer sales van A tot Z en werk mee aan het uitbreiden van onze klantenkring.",
  },
  {
    slug: "seo-specialist",
    icon: <Search className="h-5 w-5" />,
    title: "SEO Specialist",
    description: "Optimaliseer websites voor zoekmachines en verhoog online zichtbaarheid van onze klanten.",
  },
  {
    slug: "projectmanager",
    icon: <UserCircle className="h-5 w-5" />,
    title: "Projectmanager",
    description: "Leid projecten van start tot finish en bewaak tijd, kwaliteit en communicatie.",
  },
  {
    slug: "support-medewerker",
    icon: <Shield className="h-5 w-5" />,
    title: "Support medewerker",
    description: "Help klanten snel en vriendelijk met hun vragen en technische issues.",
  },
]

export default function CareersSection() {
  return (
    <section className="py-24 bg-[#1a2a18] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Vacatures</h2>
          <p className="text-white/70">
            Bekijk onze openstaande functies en ontdek hoe jij impact kunt maken bij Multichoiceagency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, i) => (
            <motion.div
              key={role.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a]/80 border border-[#333] p-6 rounded-xl group hover:border-[#a6e267] hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-[#2D4625] mr-3">{role.icon}</div>
                <h3 className="text-lg font-semibold group-hover:text-[#a6e267] transition-colors">
                  {role.title}
                </h3>
              </div>
              <p className="text-white/60 mb-4">{role.description}</p>
              <Link
                href={`/werken-bij/${role.slug}`}
                className="inline-block text-sm text-[#a6e267] hover:underline"
              >
                Bekijk vacature →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
