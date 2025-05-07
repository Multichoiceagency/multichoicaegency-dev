"use client"

import { useState } from "react"

interface Props {
  vacature: string
}

export default function SollicitatieFormulier({ vacature }: Props) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier komt upload- & verwerklogica
    setSubmitted(true)
  }

  return (
    <section className="bg-gray-700 py-20 px-4 text-white">
      <div className="max-w-2xl mx-auto bg-green-900 py-10 px-10 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Solliciteer op {vacature}</h2>
        {submitted ? (
          <p className="text-[#a6e267]">Bedankt voor je sollicitatie! We nemen spoedig contact op.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
            <input type="text" required placeholder="Naam" className="w-full p-3 bg-[#1a2a18] border border-[#333] rounded text-white" />
            <input type="email" required placeholder="E-mailadres" className="w-full p-3 bg-[#1a2a18] border border-[#333] rounded text-white" />
            <textarea required placeholder="Motivatie" className="w-full p-3 h-32 bg-[#1a2a18] border border-[#333] rounded text-white" />
            <div>
              <label className="block text-white/70 mb-1">CV uploaden (PDF)</label>
              <input type="file" accept=".pdf" required className="text-white" />
            </div>
            <div>
              <label className="block text-white/70 mb-1">Motivatiebrief (optioneel)</label>
              <input type="file" accept=".pdf,.docx" className="text-white" />
            </div>
            <button type="submit" className="bg-[#2D4625] hover:bg-[#a6e267] hover:text-[#2D4625] px-6 py-3 rounded-full font-medium transition-colors">
              Verstuur sollicitatie
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
