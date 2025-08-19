"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Bot, Search, BarChart3, MessageSquare, Clock, Zap } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "data-analysis",
    title: "Analyseer bedrijfsdata",
    description:
      "Onze AI analyseert uw bedrijfsgegevens, identificeert trends en geeft u waardevolle inzichten om betere beslissingen te nemen.",
    icon: <BarChart3 className="h-5 w-5" />,
    color: "bg-emerald-500",
    tryLink: "/diensten",
  },
  {
    id: "content-creation",
    title: "Creëer content op maat",
    description:
      "Genereer professionele content voor uw website, social media of e-mails die perfect aansluit bij uw doelgroep en merkidentiteit.",
    icon: <MessageSquare className="h-5 w-5" />,
    color: "bg-blue-500",
    tryLink: "/diensten",
  },
  {
    id: "customer-service",
    title: "24/7 klantenservice",
    description:
      "Onze AI-chatbots beantwoorden vragen van klanten op elk moment van de dag, zorgen voor snelle oplossingen en verhogen de klanttevredenheid.",
    icon: <Clock className="h-5 w-5" />,
    color: "bg-purple-500",
    tryLink: "/diensten",
  },
]

const miniFeatures = [
  {
    title: "Workflow Automatisering",
    description: "Automatiseer repetitieve taken en processen voor meer efficiëntie",
    icon: <Zap className="h-5 w-5" />,
    color: "bg-amber-500",
  },
  {
    title: "Markt Verkenner",
    description: "Ontdek nieuwe kansen en trends in uw markt met AI-analyse",
    icon: <Search className="h-5 w-5" />,
    color: "bg-rose-500",
  },
  {
    title: "Digitale Assistent",
    description: "Persoonlijke AI-assistent die taken overneemt en uw team ondersteunt",
    icon: <Bot className="h-5 w-5" />,
    color: "bg-indigo-500",
  },
]

export default function AIAutomationSection() {
  const [activeFeature, setActiveFeature] = useState("data-analysis")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(".animatable")
    animatableElements.forEach((el) => observer.observe(el))

    return () => {
      animatableElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-[#1a2a18] text-white relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full grid grid-cols-12 grid-rows-6">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-[#a6e267]/20"></div>
            ))}
          </div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#2D4625] filter blur-[100px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#a6e267] filter blur-[120px] opacity-10 animate-pulse-slower"></div>

        {/* Tech lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animatable fade-in-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2D4625]/50 text-[#a6e267] text-sm font-medium mb-4 border border-[#a6e267]/30">
            <Bot className="h-4 w-4 mr-2" />
            <span className="relative">
              Slim & Efficiënt
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#a6e267] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 relative inline-block">
            Automatiseer uw bedrijf met AI
            <div className="absolute -bottom-2 left-0 h-[2px] w-1/3 bg-gradient-to-r from-[#a6e267] to-transparent"></div>
          </h2>
          <p className="text-lg text-white/70">
            Ontdek hoe Multichoiceagency AI-technologie inzet om uw bedrijfsprocessen te stroomlijnen, kosten te
            verlagen en groei te stimuleren.
          </p>
        </div>

        {/* Main Features */}
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24 animatable fade-in-up",
              index % 2 === 1 ? "md:flex-row-reverse" : "",
              index === 0 ? "delay-1" : index === 1 ? "delay-2" : "delay-3",
            )}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={cn("order-2 md:order-1", index % 2 === 1 ? "md:order-2" : "md:order-1")}
            >
              <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl border border-[#333333] overflow-hidden p-6 group hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)]">
                {feature.id === "data-analysis" && (
                  <div className="bg-[#2D4625] text-white p-4 rounded-lg">
                    <div className="mb-6">
                      <h4 className="text-xl font-medium mb-2">Bedrijfsanalyse Dashboard</h4>
                      <p className="text-white/80 text-sm">Real-time inzichten en prestatie-indicatoren</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-white/80">Omzet</span>
                          <span className="text-sm text-green-300">+24%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full mb-1">
                          <div className="h-2 bg-green-400 rounded-full w-3/4"></div>
                        </div>
                        <p className="text-lg font-medium">€24,500</p>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-white/80">Conversie</span>
                          <span className="text-sm text-green-300">+12%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full mb-1">
                          <div className="h-2 bg-green-400 rounded-full w-1/2"></div>
                        </div>
                        <p className="text-lg font-medium">3.8%</p>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-white/80">Bezoekers</span>
                          <span className="text-sm text-green-300">+18%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full mb-1">
                          <div className="h-2 bg-green-400 rounded-full w-2/3"></div>
                        </div>
                        <p className="text-lg font-medium">12,845</p>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-white/80">Klanten</span>
                          <span className="text-sm text-green-300">+8%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full mb-1">
                          <div className="h-2 bg-green-400 rounded-full w-2/5"></div>
                        </div>
                        <p className="text-lg font-medium">487</p>
                      </div>
                    </div>
                  </div>
                )}

                {feature.id === "content-creation" && (
                  <div className="bg-[#2D4625] text-white p-4 rounded-lg">
                    <div className="mb-6">
                      <h4 className="text-xl font-medium mb-2">Content Generator</h4>
                      <p className="text-white/80 text-sm">Professionele content op maat gemaakt</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg mb-4">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm text-white/80">Wat voor content wilt u genereren?</span>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Social media post</span>
                        <span className="px-3 py-1 bg-[#a6e267] text-[#2D4625] rounded-full text-sm">
                          Website tekst
                        </span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">E-mail</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                        <p className="text-sm text-white/90">
                          Ontdek hoe onze innovatieve oplossingen uw bedrijf naar een hoger niveau kunnen tillen. Met
                          jarenlange ervaring en een team van experts staan wij klaar om u te helpen groeien in een
                          digitale wereld.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                        Opnieuw genereren
                      </button>
                      <button className="px-3 py-1 bg-[#a6e267] hover:bg-[#95cc5a] text-[#2D4625] rounded-lg text-sm transition-colors">
                        Kopiëren
                      </button>
                    </div>
                  </div>
                )}

                {feature.id === "customer-service" && (
                  <div className="bg-[#2D4625] text-white p-4 rounded-lg">
                    <div className="mb-6">
                      <h4 className="text-xl font-medium mb-2">AI Klantenservice</h4>
                      <p className="text-white/80 text-sm">24/7 beschikbaar voor uw klanten</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg mb-4">
                      <div className="flex justify-end mb-3">
                        <div className="bg-white/20 px-3 py-2 rounded-lg rounded-tr-none max-w-[80%]">
                          <p className="text-sm">Hoe kan ik mijn bestelling volgen?</p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#a6e267] flex items-center justify-center mr-2">
                          <Bot className="h-4 w-4 text-[#2D4625]" />
                        </div>
                        <div className="bg-[#a6e267] text-[#2D4625] px-3 py-2 rounded-lg rounded-tl-none max-w-[80%]">
                          <p className="text-sm">
                            U kunt uw bestelling volgen door in te loggen op uw account en naar 'Mijn Bestellingen' te
                            gaan. Daar vindt u de actuele status en een track & trace code. Kan ik u nog ergens anders
                            mee helpen?
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-white/20 px-3 py-2 rounded-lg rounded-tr-none max-w-[80%]">
                          <p className="text-sm">Nee, dank je wel!</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center bg-white/5 rounded-lg p-2 border border-white/10">
                      <input
                        type="text"
                        placeholder="Typ uw vraag..."
                        className="bg-transparent border-0 outline-none text-white flex-1 text-sm"
                      />
                      <button className="p-2 bg-[#a6e267] text-[#2D4625] rounded-lg">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={cn("order-1 md:order-2", index % 2 === 1 ? "md:order-1" : "md:order-2")}
            >
              <div className="flex items-start mb-4">
                <div className={cn("p-2 rounded-lg mr-4", feature.color)}>{feature.icon}</div>
                <span className="text-sm font-medium text-white/70">AI Functionaliteit</span>
              </div>

              <h3 className="text-2xl font-medium text-white mb-4">{feature.title}</h3>

              <p className="text-white/70 mb-6">{feature.description}</p>

              <ul className="space-y-3 mb-8">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D4625] flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-[#a6e267]" />
                    </div>
                    <span className="text-white/70">
                      {feature.id === "data-analysis" && item === 1 && "Real-time inzichten in bedrijfsprestaties"}
                      {feature.id === "data-analysis" && item === 2 && "Voorspellende analyses voor toekomstige trends"}
                      {feature.id === "data-analysis" &&
                        item === 3 &&
                        "Aangepaste rapportages voor uw specifieke behoeften"}

                      {feature.id === "content-creation" &&
                        item === 1 &&
                        "Content afgestemd op uw doelgroep en branding"}
                      {feature.id === "content-creation" &&
                        item === 2 &&
                        "SEO-geoptimaliseerde teksten voor betere vindbaarheid"}
                      {feature.id === "content-creation" && item === 3 && "Consistente communicatie over alle kanalen"}

                      {feature.id === "customer-service" && item === 1 && "Directe antwoorden op veelgestelde vragen"}
                      {feature.id === "customer-service" &&
                        item === 2 &&
                        "Naadloze overdracht naar menselijke medewerkers indien nodig"}
                      {feature.id === "customer-service" &&
                        item === 3 &&
                        "Meertalige ondersteuning voor internationale klanten"}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={feature.tryLink}
                className="inline-flex items-center px-6 py-3 bg-[#2D4625] hover:bg-[#1b5a1e] text-white font-medium rounded-full transition-colors duration-300"
              >
                Probeer nu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        ))}

        {/* Mini Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {miniFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-6 border border-[#333333] hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] group"
            >
              <div className="flex items-center mb-4">
                <div
                  className={cn(
                    "p-2 rounded-lg mr-3 transition-colors duration-300",
                    feature.color,
                    "group-hover:bg-[#2D4625]",
                  )}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-[#a6e267] transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {feature.description}
              </p>
              <div className="mt-3 h-[1px] w-0 bg-[#a6e267] group-hover:w-full transition-all duration-700 ease-in-out"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-[#333333] hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D4625]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 group-hover:text-[#a6e267] transition-colors duration-300">
              24/7/365 — altijd beschikbaar voor uw bedrijf
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 group-hover:text-white/90 transition-colors duration-300">
              Geen gemiste kansen meer, geen wachttijden. Met onze AI-oplossingen is uw bedrijf altijd operationeel,
              zelfs buiten kantooruren. Ontdek hoe wij uw bedrijf kunnen ondersteunen, dag en nacht.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#2D4625] hover:bg-[#a6e267] text-white hover:text-[#2D4625] font-medium rounded-full transition-colors duration-300 group-hover:translate-y-[-2px] transition-transform"
            >
              Plan een gesprek
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#a6e267] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
        </motion.div>
      </div>
      {/* Add CSS for animations */}
      <style jsx global>{`
        .animatable {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-in-up {
          transition-property: opacity, transform;
        }
        
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        
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
      `}</style>
    </section>
  )
}
