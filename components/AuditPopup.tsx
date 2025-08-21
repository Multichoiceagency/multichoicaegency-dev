"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

function setCookie(name: string, value: string, days: number) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
  return match ? match[2] : null
}

export default function AuditPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (getCookie("auditPopupShown")) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100

      if (scrolled >= 40) {
        setCookie("auditPopupShown", "true", 1)

        const timer = setTimeout(() => {
          setIsOpen(true)
        }, 5000)

        window.removeEventListener("scroll", handleScroll)
        return () => clearTimeout(timer)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    let website = formData.website.trim()
    if (!/^https?:\/\//i.test(website)) {
      website = "https://" + website
    }

    try {
      const res = await fetch("/api/send-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      })

      if (res.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-0">
      {/* Blurry overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg z-10 animate-slideUpFade border border-gray-200">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Afbeelding */}
            <div className="w-full h-46 overflow-hidden rounded-t-2xl">
              <img
                src="/website-laten-maken.png"
                alt="Website laten maken"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Vraag uw gratis website audit aan
              </h2>
              <p className="text-gray-700 text-center mb-4">
                Ontvang daarnaast{" "}
                <span className="font-semibold text-green-700">
                  10% korting
                </span>{" "}
                op uw eerste project!
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Uw naam"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-700 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Uw e-mailadres"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-700 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Uw telefoonnummer"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-700 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Uw websiteadres (bijv. mijnsite.nl)"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-700 focus:outline-none"
                  required
                />

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 text-white rounded-lg py-3 font-semibold hover:bg-green-800 transition"
                >
                  {isSubmitting ? "Versturen..." : "Verstuur aanvraag"}
                </button>

                {/* Tweede CTA */}
                <a
                  href="https://www.multichoiceagency.nl/gratis-adviesgesprek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center border-2 border-green-700 text-green-700 rounded-lg py-3 font-semibold hover:bg-green-50 transition"
                >
                  Gratis adviesgesprek plannen
                </a>
              </form>
            </div>
          </>
        ) : (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Bedankt!</h2>
            <p className="text-gray-700">
              Uw aanvraag is ontvangen. We nemen snel contact met u op.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
