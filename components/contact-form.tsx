"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <section className="bg-[#0000ff] py-24 text-white">
      <div className="mx-auto max-w-[1800px] px-48">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-medium md:text-4xl">
              Samen je impact vergroten?
            </h2>
            <div className="space-y-4">
              <p className="text-white/80">
                Neem contact met ons op. We horen graag hoe we jou kunnen helpen.
              </p>
              <div className="flex items-center gap-4">
                <a href="tel:+31882013101" className="text-white/80 hover:text-white">
                  +31 882 013 101
                </a>
                <a href="mailto:business@multichoiceagency.com" className="text-white/80 hover:text-white">
                  business@multichoiceagency.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
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
            <Button className="rounded-full bg-white px-8 text-blue-600 hover:bg-white/90">
              Verstuur bericht
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}