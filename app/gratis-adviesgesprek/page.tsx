"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Shield,
  Award,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import CalendarSelector from "@/components/calendar-selector"

export default function GratisAdviesGesprekPage() {
  const [activeTab, setActiveTab] = useState("voordelen")

  const benefits = [
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: "Persoonlijk advies op maat",
      description: "Krijg specifieke aanbevelingen voor uw unieke situatie en doelstellingen.",
    },
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: "Duidelijke strategie",
      description: "We helpen u een concrete roadmap te ontwikkelen voor uw digitale groei.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      title: "Groeimogelijkheden identificeren",
      description: "Ontdek onbenutte kansen om uw online aanwezigheid te versterken.",
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: "Risico's minimaliseren",
      description: "Voorkom kostbare fouten door professioneel advies vooraf.",
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: "Bewezen expertise",
      description: "Profiteer van onze jarenlange ervaring met 500+ succesvolle projecten.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-teal-500" />,
      title: "Geen verplichtingen",
      description: "Volledig vrijblijvend gesprek zonder enige verplichting tot samenwerking.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah van der Berg",
      company: "TechStart BV",
      text: "Het gratis adviesgesprek gaf ons precies de inzichten die we nodig hadden. Hun strategische aanpak heeft ons geholpen om de juiste keuzes te maken.",
      rating: 5,
    },
    {
      name: "Mark Janssen",
      company: "Retail Solutions",
      text: "Binnen 30 minuten hadden we een duidelijk beeld van onze mogelijkheden. Het advies was zeer waardevol en praktisch toepasbaar.",
      rating: 5,
    },
    {
      name: "Lisa Vermeulen",
      company: "Creative Agency",
      text: "Multichoice Agency luistert echt naar je behoeften. Hun advies was spot-on en heeft ons veel tijd en geld bespaard.",
      rating: 5,
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Plan uw gesprek",
      description: "Kies een geschikt tijdstip in onze agenda - volledig gratis en vrijblijvend.",
    },
    {
      step: "2",
      title: "Voorbereiding",
      description: "We bereiden ons voor door uw website en huidige situatie te analyseren.",
    },
    {
      step: "3",
      title: "Het gesprek",
      description: "30-60 minuten persoonlijk advies over uw digitale strategie en mogelijkheden.",
    },
    {
      step: "4",
      title: "Concrete aanbevelingen",
      description: "U ontvangt een samenvatting met praktische tips en volgende stappen.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Gratis Adviesgesprek Hero"
            layout="fill"
            objectFit="cover"
            className="transform scale-110 motion-safe:animate-subtle-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D4625]/90 to-black/70 z-10"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left text-white max-w-4xl"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#a6e267]/20 text-[#a6e267] text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>100% Gratis & Vrijblijvend</span>
            </div>

            <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
              Gratis <span className="text-[#a6e267]">Adviesgesprek</span>
            </h1>
            <p className="text-2xl max-w-3xl text-gray-100 mb-8 leading-relaxed">
              Ontdek in 30 minuten hoe u uw online aanwezigheid kunt versterken en meer klanten kunt bereiken.
              Persoonlijk advies van onze experts, volledig gratis en zonder verplichtingen.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center text-white">
                <CheckCircle className="h-5 w-5 text-[#a6e267] mr-2" />
                <span>Persoonlijk advies op maat</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="h-5 w-5 text-[#a6e267] mr-2" />
                <span>Concrete aanbevelingen</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="h-5 w-5 text-[#a6e267] mr-2" />
                <span>Geen verplichtingen</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#a6e267] text-[#2D4625] hover:bg-white hover:text-[#2D4625] transition-all text-lg px-8 py-4"
                onClick={() => document.getElementById("calendar-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Plan nu uw gratis gesprek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-[#2D4625] text-lg px-8 py-4"
                onClick={() => document.getElementById("voordelen-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Waarom gratis advies?
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 80.75C1248 89.625 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Waarom Gratis Advies Section */}
      <section id="voordelen-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-black mb-4">Waarom een gratis adviesgesprek?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ontdek waarom meer dan 200 ondernemers al hebben gekozen voor ons gratis adviesgesprek
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hoe werkt het?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In 4 eenvoudige stappen naar waardevol advies voor uw bedrijf
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#2D4625] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Wat zeggen onze klanten?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Lees wat ondernemers zeggen over hun gratis adviesgesprek
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Plan nu uw gratis adviesgesprek</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kies een geschikt moment en ontvang binnen 30 minuten waardevol advies voor uw bedrijf
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CalendarSelector />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2D4625]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Klaar om uw digitale groei te versnellen?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Plan vandaag nog uw gratis adviesgesprek en ontdek hoe wij uw bedrijf kunnen helpen groeien
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#a6e267] text-[#2D4625] hover:bg-white hover:text-[#2D4625] text-lg px-8 py-4"
                onClick={() => document.getElementById("calendar-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Plan uw gratis gesprek
                <Calendar className="ml-2 h-5 w-5" />
              </Button>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0103220410"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#2D4625] transition-colors rounded-lg font-medium"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Direct bellen
                </a>
                <a
                  href="mailto:sales@multichoiceagency.nl"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#2D4625] transition-colors rounded-lg font-medium"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email sturen
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS voor animaties */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}
