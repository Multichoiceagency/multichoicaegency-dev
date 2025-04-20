"use client"
import { useEffect, useRef } from "react"
import {
  ArrowRight,
  Code,
  Database,
  Smartphone,
  Globe,
  BarChart3,
  Terminal,
  Server,
  Bot,
  BrainCircuit,
  Layers,
  LineChart,
  ShieldCheck,
} from "lucide-react"

export default function AutomationServices() {
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
    <section ref={sectionRef} className="py-16 bg-[#1a2a18] text-white relative overflow-hidden">
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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#2D4625] filter blur-[100px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#a6e267] filter blur-[120px] opacity-10 animate-pulse-slower"></div>

        {/* Tech lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a6e267]/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12 animatable fade-in-up">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 bg-[#2D4625] rounded flex items-center justify-center relative">
              <span className="text-white text-xs">✓</span>
              <div className="absolute inset-0 rounded bg-[#a6e267]/50 animate-ping opacity-75"></div>
            </div>
            <p className="text-white/70 text-sm tracking-wider">DIENSTEN</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-1 relative inline-block">
            Alles wat u nodig heeft voor digitale groei.
            <div className="absolute -bottom-2 left-0 h-[2px] w-1/3 bg-gradient-to-r from-[#a6e267] to-transparent"></div>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Row 1 */}
          <div className="col-span-12 md:col-span-4 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg border border-[#333333] p-5 flex flex-col group hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] animatable fade-in-up delay-1">
            <div className="mb-2">
              <h3 className="text-white text-lg font-medium group-hover:text-[#a6e267] transition-colors duration-300 flex items-center">
                <div className="w-1 h-5 bg-[#a6e267] mr-2 group-hover:h-7 transition-all duration-300"></div>
                Website Ontwikkeling
              </h3>
              <p className="text-white/60 text-sm">
                Professionele websites die uw merk versterken en conversies verhogen.
              </p>
            </div>
            <div className="mt-auto pt-4 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <div className="bg-[#0f0f0f] rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D4625]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-4 flex flex-col w-full relative z-10">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-24 h-3 bg-white/20 rounded-full"></div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-3 bg-white/20 rounded-full"></div>
                      <div className="w-8 h-3 bg-white/20 rounded-full"></div>
                      <div className="w-8 h-3 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-full h-24 bg-[#2D4625]/30 rounded-lg mb-3 group-hover:bg-[#2D4625]/50 transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Globe className="h-10 w-10 text-[#a6e267]" />
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#a6e267] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                  </div>
                  <div className="w-full h-12 bg-white/10 rounded-lg mb-3"></div>
                  <div className="w-3/4 h-3 bg-white/20 rounded-full"></div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="/diensten/website-ontwikkeling"
                  className="inline-flex items-center text-sm text-white/70 hover:text-[#a6e267] transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-500"
                >
                  <span>Meer informatie</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                  <div className="ml-1 h-[1px] w-0 bg-[#a6e267] group-hover:w-4 transition-all duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg border border-[#333333] p-5 flex flex-col group hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] animatable fade-in-up delay-2">
            <div className="mb-2">
              <h3 className="text-white text-lg font-medium group-hover:text-[#a6e267] transition-colors duration-300 flex items-center">
                <div className="w-1 h-5 bg-[#a6e267] mr-2 group-hover:h-7 transition-all duration-300"></div>
                Software Ontwikkeling
              </h3>
              <p className="text-white/60 text-sm">Custom software oplossingen voor uw specifieke bedrijfsbehoeften.</p>
            </div>
            <div className="mt-auto pt-4 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <div className="bg-[#0f0f0f] rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D4625]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-6">
                    <Terminal className="h-8 w-8 text-[#a6e267] group-hover:scale-110 transition-transform duration-300" />
                    <Code className="h-8 w-8 text-white/70 group-hover:text-[#a6e267] transition-colors duration-300" />
                    <Server className="h-8 w-8 text-white/70 group-hover:text-[#a6e267] transition-colors duration-300" />
                  </div>
                  <div className="mt-4 w-full flex justify-center">
                    <div className="h-1 w-0 bg-[#a6e267] group-hover:w-3/4 transition-all duration-1000 ease-in-out"></div>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <div className="h-full w-full flex flex-col">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex-1 flex">
                        {Array.from({ length: 10 }).map((_, j) => (
                          <div key={j} className="flex-1 border-[0.5px] border-[#a6e267]/20"></div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="/diensten/software-ontwikkeling"
                  className="inline-flex items-center text-sm text-white/70 hover:text-[#a6e267] transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-500"
                >
                  <span>Meer informatie</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                  <div className="ml-1 h-[1px] w-0 bg-[#a6e267] group-hover:w-4 transition-all duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg border border-[#333333] p-5 flex flex-col group hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] animatable fade-in-up delay-3">
            <div className="mb-2">
              <h3 className="text-white text-lg font-medium group-hover:text-[#a6e267] transition-colors duration-300 flex items-center">
                <div className="w-1 h-5 bg-[#a6e267] mr-2 group-hover:h-7 transition-all duration-300"></div>
                Digitale Transformatie
              </h3>
              <p className="text-white/60 text-sm">
                Begeleid uw organisatie naar een digitale toekomst met onze expertise.
              </p>
            </div>
            <div className="mt-auto pt-4 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <div className="bg-[#0f0f0f] rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D4625]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="relative">
                    <BrainCircuit className="h-16 w-16 text-[#2D4625] group-hover:text-[#a6e267] transition-colors duration-500" />
                    <div className="absolute inset-0 animate-ping-slow opacity-30 flex items-center justify-center">
                      <BrainCircuit className="h-16 w-16 text-[#a6e267]" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-[#a6e267]/30 rounded-full animate-spin-slow"></div>
                    <div className="absolute w-48 h-48 border border-[#a6e267]/20 rounded-full animate-reverse-spin-slow"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="/diensten/digitale-transformatie"
                  className="inline-flex items-center text-sm text-white/70 hover:text-[#a6e267] transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-500"
                >
                  <span>Meer informatie</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                  <div className="ml-1 h-[1px] w-0 bg-[#a6e267] group-hover:w-4 transition-all duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-12 md:col-span-6 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg border border-[#333333] p-5 flex flex-col group hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] animatable fade-in-up delay-4">
            <div className="mb-2">
              <h3 className="text-white text-lg font-medium group-hover:text-[#a6e267] transition-colors duration-300 flex items-center">
                <div className="w-1 h-5 bg-[#a6e267] mr-2 group-hover:h-7 transition-all duration-300"></div>
                App Ontwikkeling
              </h3>
              <p className="text-white/60 text-sm">
                Native en web apps voor mobiele gebruikers met naadloze ervaringen.
              </p>
            </div>
            <div className="mt-auto pt-4 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <div className="bg-[#0f0f0f] rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D4625]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-4 flex justify-center relative z-10">
                  <div className="relative w-[140px] h-[280px] bg-black rounded-[30px] p-2 border-4 border-[#333] overflow-hidden">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[18px] bg-black rounded-b-xl z-10"></div>
                    <div className="w-full h-full bg-[#2D4625]/30 rounded-[22px] flex flex-col p-3 group-hover:bg-[#2D4625]/50 transition-colors duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-[8px] text-white">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col space-y-2">
                        <div className="w-full h-1/4 bg-white/10 rounded-lg group-hover:bg-[#a6e267]/20 transition-colors duration-300 delay-100"></div>
                        <div className="w-full h-1/4 bg-white/10 rounded-lg group-hover:bg-[#a6e267]/20 transition-colors duration-300 delay-200"></div>
                        <div className="w-full h-1/4 bg-white/10 rounded-lg group-hover:bg-[#a6e267]/20 transition-colors duration-300 delay-300"></div>
                      </div>
                      <div className="h-12 mt-2 bg-[#a6e267]/20 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-4 w-4 text-[#a6e267]" />
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-[#a6e267]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#a6e267] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="/diensten/app-ontwikkeling"
                  className="inline-flex items-center text-sm text-white/70 hover:text-[#a6e267] transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-500"
                >
                  <span>Meer informatie</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                  <div className="ml-1 h-[1px] w-0 bg-[#a6e267] group-hover:w-4 transition-all duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg border border-[#333333] p-5 flex flex-col group hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] animatable fade-in-up delay-5">
            <div className="mb-2">
              <h3 className="text-white text-lg font-medium group-hover:text-[#a6e267] transition-colors duration-300 flex items-center">
                <div className="w-1 h-5 bg-[#a6e267] mr-2 group-hover:h-7 transition-all duration-300"></div>
                Systeem Integratie
              </h3>
              <p className="text-white/60 text-sm">
                Verbind al uw systemen voor naadloze gegevensuitwisseling en analyse.
              </p>
            </div>
            <div className="mt-auto pt-4 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <div className="bg-[#0f0f0f] rounded-lg overflow-hidden p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D4625]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-[#2D4625]/30 flex items-center justify-center z-20 group-hover:bg-[#2D4625] transition-colors duration-500">
                    <Database className="h-8 w-8 text-[#a6e267]" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#333] z-10 group-hover:border-[#a6e267]/50 transition-colors duration-500 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#333] z-0 group-hover:border-[#a6e267]/30 transition-colors duration-500 group-hover:scale-110 transition-transform duration-1000"></div>

                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0f0f0f] border border-[#333] flex items-center justify-center z-30 group-hover:border-[#a6e267] transition-colors duration-300">
                    <Globe className="h-4 w-4 text-white/70 group-hover:text-[#a6e267] transition-colors duration-300" />
                  </div>

                  <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-[#0f0f0f] border border-[#333] flex items-center justify-center z-30 group-hover:border-[#a6e267] transition-colors duration-300">
                    <Server className="h-4 w-4 text-white/70 group-hover:text-[#a6e267] transition-colors duration-300" />
                  </div>

                  <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-[#0f0f0f] border border-[#333] flex items-center justify-center z-30 group-hover:border-[#a6e267] transition-colors duration-300">
                    <Layers className="h-4 w-4 text-white/70 group-hover:text-[#a6e267] transition-colors duration-300" />
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="w-64 h-64 border border-[#a6e267]/10 rounded-full animate-spin-slow"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="/diensten/systeem-integratie"
                  className="inline-flex items-center text-sm text-white/70 hover:text-[#a6e267] transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-500"
                >
                  <span>Meer informatie</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                  <div className="ml-1 h-[1px] w-0 bg-[#a6e267] group-hover:w-4 transition-all duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="col-span-12 md:col-span-4 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg border border-[#333333] p-5 flex flex-col group hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] animatable fade-in-up delay-6">
            <div>
              <h3 className="text-white text-lg font-medium group-hover:text-[#a6e267] transition-colors duration-300 flex items-center">
                <div className="w-1 h-5 bg-[#a6e267] mr-2 group-hover:h-7 transition-all duration-300"></div>
                Business Intelligence
              </h3>
              <p className="text-white/60 text-sm">
                Verkrijg waardevolle inzichten uit uw data voor betere besluitvorming.
              </p>
            </div>
            <div className="mt-4 flex justify-center transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <div className="bg-[#2D4625]/20 rounded-full p-4 group-hover:bg-[#2D4625]/40 transition-colors duration-300 relative">
                <LineChart className="h-8 w-8 text-[#a6e267] relative z-10" />
                <div className="absolute inset-0 rounded-full border border-[#a6e267]/30 group-hover:scale-110 transition-transform duration-500 group-hover:border-[#a6e267]/50"></div>
                <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 border border-[#a6e267]/20"></div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href="/diensten/business-intelligence"
                className="inline-flex items-center text-sm text-white/70 hover:text-[#a6e267] transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-500"
              >
                <span>Meer informatie</span>
                <ArrowRight className="ml-1 h-3 w-3" />
                <div className="ml-1 h-[1px] w-0 bg-[#a6e267] group-hover:w-4 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg border border-[#333333] p-5 flex flex-col group hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] animatable fade-in-up delay-7">
            <div>
              <h3 className="text-white text-lg font-medium group-hover:text-[#a6e267] transition-colors duration-300 flex items-center">
                <div className="w-1 h-5 bg-[#a6e267] mr-2 group-hover:h-7 transition-all duration-300"></div>
                Veiligheid & Compliance
              </h3>
              <p className="text-white/60 text-sm">Enterprise-grade beveiliging en naleving van regelgeving.</p>
            </div>
            <div className="mt-4 flex flex-col items-center transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2D4625]/30 flex items-center justify-center mr-3 group-hover:bg-[#2D4625] transition-colors duration-300 relative">
                  <ShieldCheck className="h-5 w-5 text-[#a6e267]" />
                  <div className="absolute inset-0 rounded-full border border-[#a6e267]/30 animate-ping-slow opacity-30"></div>
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-300">
                  Hoge beveiligingsgraad
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-6 bg-[#2D4625] rounded-full flex items-center px-1 group-hover:bg-[#a6e267] transition-colors duration-300 relative">
                  <div className="w-4 h-4 bg-white rounded-full transform transition-transform duration-300 group-hover:translate-x-[175%]"></div>
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-white animate-pulse-slow"></div>
                </div>
                <span className="text-xs text-white/60 ml-2 group-hover:text-white transition-colors duration-300">
                  ISO Gecertificeerd
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href="/diensten/veiligheid-compliance"
                className="inline-flex items-center text-sm text-white/70 hover:text-[#a6e267] transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-500"
              >
                <span>Meer informatie</span>
                <ArrowRight className="ml-1 h-3 w-3" />
                <div className="ml-1 h-[1px] w-0 bg-[#a6e267] group-hover:w-4 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg border border-[#333333] p-5 flex flex-col group hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)] animatable fade-in-up delay-8">
            <div>
              <h3 className="text-white text-lg font-medium group-hover:text-[#a6e267] transition-colors duration-300 flex items-center">
                <div className="w-1 h-5 bg-[#a6e267] mr-2 group-hover:h-7 transition-all duration-300"></div>
                Data Integratie
              </h3>
              <p className="text-white/60 text-sm">Verbind en analyseer data uit verschillende bronnen.</p>
            </div>
            <div className="mt-4 flex flex-col items-center transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <div className="w-full bg-[#0f0f0f] rounded-lg p-3 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D4625]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="text-xs text-white/60 mb-2 group-hover:text-white transition-colors duration-300 relative z-10">
                  Verbonden databronnen:
                </div>
                <div className="flex flex-col space-y-2 relative z-10">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#2D4625]/30 flex items-center justify-center mr-2 group-hover:bg-[#2D4625] transition-colors duration-300">
                      <Database className="h-3 w-3 text-[#a6e267]" />
                    </div>
                    <span className="text-xs text-white">CRM Systeem</span>
                    <div className="ml-auto w-2 h-2 rounded-full bg-[#a6e267] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#2D4625]/30 flex items-center justify-center mr-2 group-hover:bg-[#2D4625] transition-colors duration-300">
                      <Globe className="h-3 w-3 text-[#a6e267]" />
                    </div>
                    <span className="text-xs text-white">Website Analytics</span>
                    <div className="ml-auto w-2 h-2 rounded-full bg-[#a6e267] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#2D4625]/30 flex items-center justify-center mr-2 group-hover:bg-[#2D4625] transition-colors duration-300">
                      <BarChart3 className="h-3 w-3 text-[#a6e267]" />
                    </div>
                    <span className="text-xs text-white">ERP Platform</span>
                    <div className="ml-auto w-2 h-2 rounded-full bg-[#a6e267] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#a6e267] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href="/diensten/data-integratie"
                className="inline-flex items-center text-sm text-white/70 hover:text-[#a6e267] transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-500"
              >
                <span>Meer informatie</span>
                <ArrowRight className="ml-1 h-3 w-3" />
                <div className="ml-1 h-[1px] w-0 bg-[#a6e267] group-hover:w-4 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          {/* Row 4 - Bottom buttons */}
          <div className="col-span-12 md:col-span-4 flex items-center justify-center animatable fade-in-up delay-9">
            <button className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#333333] rounded-lg py-2 px-4 flex items-center justify-center w-full hover:border-[#a6e267] hover:bg-[#1a1a1a] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-[#a6e267]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="w-5 h-5 bg-[#2D4625]/30 rounded flex items-center justify-center mr-2 group-hover:bg-[#2D4625] transition-colors duration-300 relative z-10">
                <Bot className="h-3 w-3 text-[#a6e267]" />
              </div>
              <span className="text-white text-sm relative z-10">Bekijk Portfolio</span>
            </button>
          </div>

          <div className="col-span-12 md:col-span-4 flex items-center justify-center animatable fade-in-up delay-10">
            <button className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#333333] rounded-lg py-2 px-4 flex items-center justify-center w-full hover:border-[#a6e267] hover:bg-[#1a1a1a] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-[#a6e267]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="w-5 h-5 bg-[#2D4625]/30 rounded flex items-center justify-center mr-2 group-hover:bg-[#2D4625] transition-colors duration-300 relative z-10">
                <Code className="h-3 w-3 text-[#a6e267]" />
              </div>
              <span className="text-white text-sm relative z-10">Onze Werkwijze</span>
            </button>
          </div>

          <div className="col-span-12 md:col-span-4 flex items-center justify-center animatable fade-in-up delay-11">
            <button className="bg-[#2D4625] border border-[#2D4625] rounded-lg py-2 px-4 flex items-center justify-center w-full hover:bg-[#a6e267] hover:border-[#a6e267] hover:text-[#2D4625] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="text-white text-sm group-hover:text-[#2D4625] relative z-10">Neem contact op</span>
              <ArrowRight className="ml-2 h-4 w-4 text-white group-hover:text-[#2D4625] group-hover:translate-x-1 transition-all duration-300 relative z-10" />
            </button>
          </div>
        </div>
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
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .delay-6 { transition-delay: 0.6s; }
        .delay-7 { transition-delay: 0.7s; }
        .delay-8 { transition-delay: 0.8s; }
        .delay-9 { transition-delay: 0.9s; }
        .delay-10 { transition-delay: 1.0s; }
        .delay-11 { transition-delay: 1.1s; }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
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
