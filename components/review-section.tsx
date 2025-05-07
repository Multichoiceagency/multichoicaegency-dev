"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote, User, ArrowRight } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    id: 1, name: "Lionzone", company: "", position: "", rating: 5, text: "Snelle service en fixt het allemaal super snel! Thanks", image: "",
  },
  { id: 2, name: "Myserybox", company: "", position: "", rating: 5, text: "Levert uitstekend en professioneel werk", image: "" },
  { id: 3, name: "Autoservice Maaspoort", company: "", position: "", rating: 5, text: "Goede samenwerking met Enes, korte lijnen en mooi website als eindresultaat!", image: "" },
  { id: 4, name: "Thuiszorg D.R.", company: "", position: "", rating: 5, text: "Top Service. Altijd bereikbaar en erg behulpzaam", image: "" },
  { id: 5, name: "Volta Elektrotechniek", company: "", position: "", rating: 5, text: "Heeft een website met een top layout gemaakt!", image: "" },
  { id: 6, name: "Autotrader Voorschoten", company: "", position: "", rating: 5, text: "Hele strakke website gemaakt erg blij mee!", image: "" },
  { id: 7, name: "WJ Webdesign", company: "", position: "", rating: 5, text: "Fijne samenwerking met Enes, aardige gozer en snelle contactlijntjes", image: "" },
  { id: 8, name: "Bin Groothandel", company: "", position: "", rating: 5, text: "Geef veel aandacht aan werk. Heel behulpzaam en verricht top werk!", image: "" },
]

export default function ReviewSection() {
  const [active, setActive] = useState(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length)
    }, 6000)

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [])

  const next = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    setActive((prev) => (prev + 1) % reviews.length)
  }

  const prev = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="bg-[#1a2a18] text-white py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-1 bg-[#2D4625]/50 border border-[#a6e267]/30 text-[#a6e267] rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Klantervaringen
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Wat onze klanten zeggen</h2>
          <p className="text-white/70 text-lg">Ontdek waarom bedrijven door heel Nederland kiezen voor onze digitale oplossingen</p>
        </div>

        <div className="max-w-4xl mx-auto relative overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
            {reviews.map((r, i) => (
              <div key={r.id} className="min-w-full px-4">
                <div className="bg-[#2D4625]/20 border border-[#3a3a3a] rounded-xl p-6 relative shadow-lg">
                  <Quote className="absolute top-4 right-4 w-10 h-10 text-[#a6e267]/10" />
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-1/3 flex flex-col items-center md:items-start">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#a6e267]/30 bg-[#2D4625]/30 flex items-center justify-center">
                        {r.image ? (
                          <Image src={r.image} alt={r.name} width={80} height={80} className="object-cover rounded-full" />
                        ) : (
                          <User className="w-10 h-10 text-[#a6e267]" />
                        )}
                      </div>
                      <h4 className="text-xl font-semibold mt-4 text-center md:text-left">{r.name}</h4>
                      {r.company && <p className="text-[#a6e267] text-sm">{r.company}</p>}
                      {r.position && <p className="text-white/50 text-sm">{r.position}</p>}
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < r.rating ? "text-[#a6e267]" : "text-gray-600"}`} fill={i < r.rating ? "#a6e267" : "none"} />
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/3 text-white/90 text-base leading-relaxed">{r.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-[#2D4625] hover:bg-[#a6e267] transition-colors flex items-center justify-center">
              <ChevronLeft className="text-white" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    active === i ? "bg-[#a6e267] w-6" : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-[#2D4625] hover:bg-[#a6e267] transition-colors flex items-center justify-center">
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D4625] hover:bg-[#a6e267] text-white hover:text-[#1a2a18] rounded-full font-medium transition-colors"
          >
            Bekijk alle reviews
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
