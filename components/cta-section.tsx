"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  FileText,
  CheckCircle,
  Clock,
  Send,
  Mail,
  User,
  Building,
  Phone,
  Layers,
  ChevronDown,
  AlertCircle,
  Euro,
  ChevronLeft,
} from "lucide-react"
import { submitQuoteRequest } from "@/app/actions/submit-quote"
import Image from "next/image"

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
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

  const totalSteps = 4

  // Handle visibility detection for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear validation error for this field
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
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(currentStep)) {
      return
    }

    setIsSubmitting(true)
    setFormError(null)
    setValidationErrors({})

    try {
      // Combine all form data into the message field for the existing submitQuoteRequest function
      const combinedMessage = `
Project Details: ${formState.message}
Budget: ${formState.budget}
Timeline: ${formState.timeline}
Goals: ${formState.goals || "Niet opgegeven"}
      `.trim()

      const submissionData = {
        name: formState.name,
        company: formState.company,
        service: formState.service,
        email: formState.email,
        phone: formState.phone,
        message: combinedMessage,
      }

      const result = await submitQuoteRequest(submissionData)

      if (result.success) {
        setIsSubmitted(true)
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
        setCurrentStep(1)

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        // Handle validation errors
        if (result.validationErrors) {
          const errors: Record<string, string> = {}
          result.validationErrors.forEach((err) => {
            if (err.path[0]) {
              errors[err.path[0] as string] = err.message
            }
          })
          setValidationErrors(errors)
        } else {
          // Handle other errors
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Uw naam"
                  required
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
                  placeholder="Bedrijfsnaam"
                  className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                    validationErrors.company ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all`}
                />
                {validationErrors.company && <p className="text-red-600 text-sm mt-1">{validationErrors.company}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="E-mailadres"
                  required
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
                  placeholder="Telefoonnummer"
                  className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                    validationErrors.phone ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all`}
                />
                {validationErrors.phone && <p className="text-red-600 text-sm mt-1">{validationErrors.phone}</p>}
              </div>
            </div>
          </>
        )

      case 2:
        return (
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Layers className="h-5 w-5" />
            </div>
            <select
              name="service"
              required
              value={formState.service}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                validationErrors.service ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all appearance-none`}
            >
              <option value="" disabled>
                Selecteer een dienst
              </option>
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
        )

      case 3:
        return (
          <div className="relative">
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              placeholder="Beschrijf kort uw project of vraag"
              rows={4}
              required
              className={`w-full p-4 bg-gray-50 border ${
                validationErrors.message ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all`}
            ></textarea>
            {validationErrors.message && <p className="text-red-600 text-sm mt-1">{validationErrors.message}</p>}

            <div className="mt-5">
              <textarea
                name="goals"
                value={formState.goals}
                onChange={handleInputChange}
                placeholder="Wat zijn uw doelen voor dit project? (optioneel)"
                rows={3}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all"
              ></textarea>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-5">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Euro className="h-5 w-5" />
              </div>
              <select
                name="budget"
                required
                value={formState.budget}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                  validationErrors.budget ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all appearance-none`}
              >
                <option value="" disabled>
                  Selecteer uw budget
                </option>
                <option value="€2.000 - €5.000">€2.000 - €5.000</option>
                <option value="€5.000 - €10.000">€5.000 - €10.000</option>
                <option value="€10.000 - €25.000">€10.000 - €25.000</option>
                <option value="€25.000 - €50.000">€25.000 - €50.000</option>
                <option value="€50.000+">€50.000+</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <ChevronDown className="h-5 w-5" />
              </div>
              {validationErrors.budget && <p className="text-red-600 text-sm mt-1">{validationErrors.budget}</p>}
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Clock className="h-5 w-5" />
              </div>
              <select
                name="timeline"
                required
                value={formState.timeline}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${
                  validationErrors.timeline ? "border-red-300 ring-1 ring-red-300" : "border-gray-200"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4625]/50 focus:border-transparent transition-all appearance-none`}
              >
                <option value="" disabled>
                  Wanneer wilt u starten?
                </option>
                <option value="Zo snel mogelijk">Zo snel mogelijk</option>
                <option value="Binnen 1 maand">Binnen 1 maand</option>
                <option value="Binnen 2-3 maanden">Binnen 2-3 maanden</option>
                <option value="Binnen 3-6 maanden">Binnen 3-6 maanden</option>
                <option value="Nog niet zeker">Nog niet zeker</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <ChevronDown className="h-5 w-5" />
              </div>
              {validationErrors.timeline && <p className="text-red-600 text-sm mt-1">{validationErrors.timeline}</p>}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const benefits = [
    {
      icon: <FileText className="h-5 w-5 text-[#a6e267]" />,
      title: "Gedetailleerde offerte",
      description: "Ontvang binnen 24 uur een uitgebreide offerte op maat voor uw project.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-[#a6e267]" />,
      title: "Geen verplichtingen",
      description: "Vrijblijvend advies zonder enige verplichtingen of kosten.",
    },
    {
      icon: <Clock className="h-5 w-5 text-[#a6e267]" />,
      title: "Snelle respons",
      description: "Ons team neemt binnen 24 uur contact met u op om uw wensen te bespreken.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full grid grid-cols-12 grid-rows-6">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-[#2D4625]/20"></div>
            ))}
          </div>
        </div>

        {/* Subtle glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#2D4625] filter blur-[100px] opacity-5 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#a6e267] filter blur-[120px] opacity-5 animate-pulse-slower"></div>

        {/* Tech lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2D4625]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2D4625]/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden border border-[#2D4625]/10 group"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D4625] to-[#a6e267]"></div>
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5 pointer-events-none">
                <div className="absolute inset-0 border-2 border-[#2D4625]/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-[15%] border border-[#a6e267]/40 rounded-full animate-reverse-spin-slow"></div>
                <div className="absolute inset-[35%] bg-[#2D4625]/20 rounded-full"></div>
              </div>

              <div className="mb-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2D4625]/10 text-[#2D4625] text-sm font-medium mb-4">
                  <Send className="h-4 w-4 mr-2" />
                  <span>100% gratis en vrijblijvend</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium text-[#0f2b3d] mb-4">Vraag een Gratis Adviesgesprek aan</h2>
                <p className="text-gray-600">
                  Vul het formulier in en ontvang een gratis adviesgesprek voor uw project.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#2D4625]/10 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#2D4625] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-[#2D4625] mb-2">Bedankt voor uw aanvraag!</h3>
                  <p className="text-gray-600">
                        We hebben uw aanvraag voor een gratis adviesgesprek ontvangen en nemen binnen 24 uur contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Progress indicator */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#2D4625]">
                        Stap {currentStep} van {totalSteps}
                      </span>
                      <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#2D4625] to-[#a6e267] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* General form error message */}
                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start">
                      <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {renderStepContent()}

                  <div className="flex justify-between pt-2">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-300 flex items-center group"
                      >
                        <ChevronLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Vorige</span>
                      </button>
                    )}

                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="ml-auto py-3 px-6 bg-[#2D4625] hover:bg-[#a6e267] text-white hover:text-[#2D4625] font-medium rounded-lg transition-colors duration-300 flex items-center group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 w-full h-full bg-[#a6e267]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        <span className="relative z-10">Volgende</span>
                        <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="ml-auto py-3 px-6 bg-[#2D4625] hover:bg-[#a6e267] text-white hover:text-[#2D4625] font-medium rounded-lg transition-colors duration-300 flex items-center group relative overflow-hidden disabled:opacity-50"
                      >
                        <div className="absolute inset-0 w-full h-full bg-[#a6e267]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        <span className="relative z-10">{isSubmitting ? "Versturen..." : "Offerte aanvragen"}</span>
                        <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    )}
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-medium text-white mb-6">Waarom kiezen voor Multichoiceagency?</h3>
                <p className="text-white mb-8">
                  Als full-service digitaal bureau bieden wij complete oplossingen voor uw online aanwezigheid. Van
                  website ontwikkeling tot digitale marketing, wij zorgen voor resultaten die uw verwachtingen
                  overtreffen.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    className="flex bg-white p-6 rounded-xl shadow-sm border border-[#2D4625]/10 hover:border-[#2D4625]/30 transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-[#2D4625]/10 rounded-full flex items-center justify-center group-hover:bg-[#2D4625] transition-colors duration-300">
                        <div className="text-[#2D4625] group-hover:text-white transition-colors duration-300">
                          {benefit.icon}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[#0f2b3d] mb-1 group-hover:text-[#2D4625] transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { number: "500+", label: "Projecten" },
                  { number: "200+", label: "Tevreden klanten" },
                  { number: "10+", label: "Jaar ervaring" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-xl p-4 text-center hover:bg-[#2D4625]/10 transition-colors duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#2D4625]">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.2; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes reverse-spin-slow {
          to { transform: rotate(-360deg); }
        }
        
        .animate-reverse-spin-slow {
          animation: reverse-spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  )
}
