"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowLeft,
  FileText,
  CheckCircle,
  Send,
  Mail,
  User,
  Building,
  Phone,
  Layers,
  ChevronDown,
  AlertCircle,
  X,
  MessageCircle,
  Euro,
  Calendar,
  Target,
} from "lucide-react"
import { submitQuoteRequest } from "@/app/actions/submit-quote"

interface FormStep {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const formSteps: FormStep[] = [
  {
    id: 1,
    title: "Persoonlijke gegevens",
    description: "Vertel ons wie u bent",
    icon: <User className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Dienst selectie",
    description: "Welke dienst heeft u nodig?",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Project details",
    description: "Beschrijf uw project",
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Budget & timing",
    description: "Wat is uw budget en timing?",
    icon: <Euro className="h-5 w-5" />,
  },
]

export default function MultiLevelQuoteForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    service: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
    timeline: "",
    goals: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formState.name.trim()) errors.name = "Naam is verplicht"
        if (!formState.email.trim()) errors.email = "E-mailadres is verplicht"
        if (formState.email && !/\S+@\S+\.\S+/.test(formState.email)) {
          errors.email = "Voer een geldig e-mailadres in"
        }
        break
      case 2:
        if (!formState.service) errors.service = "Selecteer een dienst"
        break
      case 3:
        if (!formState.message.trim() || formState.message.length < 10) {
          errors.message = "Beschrijf uw project (minimaal 10 tekens)"
        }
        break
      case 4:
        if (!formState.budget) errors.budget = "Selecteer een budget"
        if (!formState.timeline) errors.timeline = "Selecteer een timeline"
        break
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, formSteps.length))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)
    setFormError(null)

    try {
      const submitData = {
        name: formState.name,
        company: formState.company,
        service: formState.service,
        email: formState.email,
        phone: formState.phone,
        message: `${formState.message}\n\nBudget: ${formState.budget}\nTimeline: ${formState.timeline}\nDoelen: ${formState.goals}`,
      }

      const result = await submitQuoteRequest(submitData)

      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsOpen(false)
          setIsSubmitted(false)
          setCurrentStep(1)
          setFormState({
            name: "",
            company: "",
            service: "",
            email: "",
            phone: "",
            message: "",
            budget: "",
            timeline: "",
            goals: "",
          })
        }, 3000)
      } else {
        if (result.validationErrors) {
          const errors: Record<string, string> = {}
          result.validationErrors.forEach((err) => {
            if (err.path[0]) {
              errors[err.path[0] as string] = err.message
            }
          })
          setValidationErrors(errors)
        } else {
          setFormError(result.error || "Er is een fout opgetreden. Probeer het later opnieuw.")
        }
      }
    } catch (error) {
      setFormError("Er is een fout opgetreden. Probeer het later opnieuw.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsOpen(false)
    setCurrentStep(1)
    setFormState({
      name: "",
      company: "",
      service: "",
      email: "",
      phone: "",
      message: "",
      budget: "",
      timeline: "",
      goals: "",
    })
    setValidationErrors({})
    setFormError(null)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Uw naam *"
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                  validationErrors.name ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all`}
              />
              {validationErrors.name && <p className="text-red-600 text-sm mt-1">{validationErrors.name}</p>}
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Building className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="company"
                value={formState.company}
                onChange={handleInputChange}
                placeholder="Bedrijfsnaam (optioneel)"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all"
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="E-mailadres *"
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                  validationErrors.email ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all`}
              />
              {validationErrors.email && <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>}
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Phone className="h-5 w-5" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleInputChange}
                placeholder="Telefoonnummer (optioneel)"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Layers className="h-5 w-5" />
              </div>
              <select
                name="service"
                value={formState.service}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                  validationErrors.service ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all appearance-none`}
              >
                <option value="">Selecteer een dienst *</option>
                <optgroup label="Web Development">
                  <option value="websites">Websites</option>
                  <option value="webshops">Webshops</option>
                  <option value="portalen">Portalen</option>
                  <option value="maatwerk-websites">Maatwerk Websites</option>
                  <option value="shopify-webshop">Shopify Webshop</option>
                  <option value="woocommerce-webshop">WooCommerce Webshop</option>
                  <option value="wordpress-website">WordPress Website</option>
                </optgroup>
                <optgroup label="Online Marketing">
                  <option value="seo">SEO</option>
                  <option value="google-ads">Google Ads</option>
                  <option value="social-media">Social Media</option>
                  <option value="content-marketing">Content Marketing</option>
                  <option value="bedrijfsvideo">Bedrijfsvideo</option>
                  <option value="productvideo">Productvideo</option>
                </optgroup>
                <optgroup label="Software & Integratie">
                  <option value="software-ontwikkeling">Software Ontwikkeling</option>
                  <option value="app-ontwikkeling">App Ontwikkeling</option>
                  <option value="digitale-transformatie">Digitale Transformatie</option>
                  <option value="systeem-integratie">Systeem Integratie</option>
                  <option value="data-integratie">Data Integratie</option>
                </optgroup>
                <optgroup label="Overige Diensten">
                  <option value="business-intelligence">Business Intelligence</option>
                  <option value="veiligheid-compliance">Veiligheid & Compliance</option>
                  <option value="ai-automatisering">AI Automatisering</option>
                </optgroup>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <ChevronDown className="h-5 w-5" />
              </div>
              {validationErrors.service && <p className="text-red-600 text-sm mt-1">{validationErrors.service}</p>}
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Waarom deze dienst?</h4>
              <p className="text-sm text-gray-600">
                Vertel ons kort waarom u geïnteresseerd bent in deze specifieke dienst. Dit helpt ons om u beter van
                dienst te zijn.
              </p>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="relative">
              <textarea
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Beschrijf uw project in detail *"
                rows={5}
                className={`w-full p-4 bg-gray-50 border ${
                  validationErrors.message ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all`}
              />
              {validationErrors.message && <p className="text-red-600 text-sm mt-1">{validationErrors.message}</p>}
            </div>

            <div className="relative">
              <div className="absolute left-3 top-4 text-gray-400">
                <Target className="h-5 w-5" />
              </div>
              <textarea
                name="goals"
                value={formState.goals}
                onChange={handleInputChange}
                placeholder="Wat zijn uw doelen met dit project? (optioneel)"
                rows={3}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Euro className="h-5 w-5" />
              </div>
              <select
                name="budget"
                value={formState.budget}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                  validationErrors.budget ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all appearance-none`}
              >
                <option value="">Selecteer uw budget *</option>
                <option value="2000-5000">€2.000 - €5.000</option>
                <option value="5000-10000">€5.000 - €10.000</option>
                <option value="10000-25000">€10.000 - €25.000</option>
                <option value="25000-50000">€25.000 - €50.000</option>
                <option value="50000+">€50.000+</option>
                <option value="nog-onbekend">Nog onbekend</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <ChevronDown className="h-5 w-5" />
              </div>
              {validationErrors.budget && <p className="text-red-600 text-sm mt-1">{validationErrors.budget}</p>}
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Calendar className="h-5 w-5" />
              </div>
              <select
                name="timeline"
                value={formState.timeline}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                  validationErrors.timeline ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all appearance-none`}
              >
                <option value="">Wanneer wilt u starten? *</option>
                <option value="zo-snel-mogelijk">Zo snel mogelijk</option>
                <option value="binnen-1-maand">Binnen 1 maand</option>
                <option value="binnen-3-maanden">Binnen 3 maanden</option>
                <option value="binnen-6-maanden">Binnen 6 maanden</option>
                <option value="nog-onbekend">Nog onbekend</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <ChevronDown className="h-5 w-5" />
              </div>
              {validationErrors.timeline && <p className="text-red-600 text-sm mt-1">{validationErrors.timeline}</p>}
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Bijna klaar!</h4>
              <p className="text-sm text-blue-700">
                Na het versturen van dit formulier nemen wij binnen 24 uur contact met u op voor een persoonlijk gesprek
                over uw project.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-[#2D4625] hover:bg-[#a6e267] text-white hover:text-[#2D4625] p-4 rounded-full shadow-xl transition-all duration-300 flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Offerte aanvragen"
        >
          <FileText className="h-6 w-6" />
          <span className="hidden sm:inline text-sm font-medium pr-1">Offerte aanvragen</span>
        </motion.button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) resetForm()
            }}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#2D4625] text-white p-6 relative">
                <button
                  onClick={resetForm}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    {formSteps[currentStep - 1]?.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Offerte aanvragen</h2>
                    <p className="text-white/80 text-sm">
                      Stap {currentStep} van {formSteps.length}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-[#a6e267] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / formSteps.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bedankt voor uw aanvraag!</h3>
                    <p className="text-gray-600">
                      We hebben uw offerte aanvraag ontvangen en nemen binnen 24 uur contact met u op.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{formSteps[currentStep - 1]?.title}</h3>
                      <p className="text-gray-600">{formSteps[currentStep - 1]?.description}</p>
                    </div>

                    {formError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start mb-4">
                        <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {renderStepContent()}
                      </motion.div>
                    </AnimatePresence>
                  </>
                )}
              </div>

              {/* Footer */}
              {!isSubmitted && (
                <div className="border-t border-gray-200 p-6 flex justify-between items-center">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Vorige
                  </button>

                  {currentStep < formSteps.length ? (
                    <button
                      onClick={nextStep}
                      className="flex items-center gap-2 px-6 py-2 bg-[#2D4625] hover:bg-[#a6e267] text-white hover:text-[#2D4625] rounded-lg transition-colors font-medium"
                    >
                      Volgende
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-6 py-2 bg-[#2D4625] hover:bg-[#a6e267] text-white hover:text-[#2D4625] rounded-lg transition-colors font-medium disabled:opacity-50"
                    >
                      {isSubmitting ? "Versturen..." : "Offerte aanvragen"}
                      <Send className="h-4 w-4" />
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
