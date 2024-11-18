"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export function ContactFormulier() {
  return (
    <div className="rounded-3xl bg-[#0000ff] p-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl"
      >
        <h2 className="mb-2 text-2xl font-medium">Samen je impact vergroten?</h2>
        <p className="mb-8 text-white/80">
          Neem contact met ons op. We horen graag hoe we jou kunnen helpen.
        </p>

        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              placeholder="Voornaam*"
              className="border-white/20 bg-transparent text-white placeholder:text-white/60"
            />
            <Input
              placeholder="Achternaam*"
              className="border-white/20 bg-transparent text-white placeholder:text-white/60"
            />
          </div>
          <Input
            type="email"
            placeholder="Zakelijk e-mailadres*"
            className="border-white/20 bg-transparent text-white placeholder:text-white/60"
          />
          <Input
            placeholder="Bedrijf*"
            className="border-white/20 bg-transparent text-white placeholder:text-white/60"
          />
          <Textarea
            placeholder="Je vraag of opmerking*"
            className="min-h-[120px] border-white/20 bg-transparent text-white placeholder:text-white/60"
          />
          <Button className="w-full gap-2 rounded-full bg-white px-8 text-[#0000ff] hover:bg-white/90">
            Verstuur bericht
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </motion.div>
    </div>
  )
}