"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowRightCircle,
  ArrowLeftCircle,
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
} from "lucide-react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function AutomationServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: "auto",
      spacing: 32,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 24,
        },
      },
    },
  });

  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause && slider.current) {
        slider.current.next();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [pause, slider]);

  const cards = [
    {
      title: "Website Ontwikkeling",
      desc: "Professionele websites die uw merk versterken en conversies verhogen.",
      icon: <Globe className=" w-[140px] h-[280px] text-[#a6e267]" />,
      href: "/webdevelopment/website-laten-maken",
    },
    {
      title: "Software Ontwikkeling",
      desc: "Custom software oplossingen voor uw specifieke bedrijfsbehoeften.",
      icon: (
        <div className="flex space-x-4">
          <Terminal className=" w-[140px] h-[280px] text-[#a6e267]" />
          <Code className=" w-[140px] h-[280px] text-white/70" />
          <Server className=" w-[140px] h-[280px] text-white/70" />
        </div>
      ),
      href: "/webdevelopment/dashboard-ontwikkeling",
    },
    {
      title: "Digitale Transformatie",
      desc: "Begeleid uw organisatie naar een digitale toekomst met onze expertise.",
      icon: (
        <div className="relative">
          <BrainCircuit className=" w-[140px] h-[280px] text-[#2D4625]" />
          <div className="absolute inset-0 animate-ping-slow opacity-30">
            <BrainCircuit className=" w-[140px] h-[280px] text-[#a6e267]" />
          </div>
        </div>
      ),
      href: "/wat-is-ux-ui-design",
    },
    {
      title: "App Ontwikkeling",
      desc: "Native en web apps voor mobiele gebruikers met naadloze ervaringen.",
      icon: (
        <div className="relative w-[140px] h-[280px] bg-black rounded-[30px] p-2 border-4 border-[#333] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[18px] bg-black rounded-b-xl z-10" />
          <div className="w-full h-full bg-[#2D4625]/30 rounded-[22px] flex flex-col p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="text-[8px] text-white">9:41</div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white/70 rounded-full" />
                <div className="w-2 h-2 bg-white/70 rounded-full" />
                <div className="w-2 h-2 bg-white/70 rounded-full" />
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-2">
              <div className="w-full h-1/4 bg-white/10 rounded-lg" />
              <div className="w-full h-1/4 bg-white/10 rounded-lg" />
              <div className="w-full h-1/4 bg-white/10 rounded-lg" />
            </div>
            <div className="h-12 mt-2 bg-[#a6e267]/20 rounded-lg flex items-center justify-center">
              <Smartphone className="h-4 w-4 text-[#a6e267]" />
            </div>
          </div>
        </div>
      ),
      href: "/webdevelopment/app-development",
    },
    {
      title: "Systeem Integratie",
      desc: "Verbind al uw systemen voor naadloze gegevensuitwisseling en analyse.",
      icon: (
        <div className="relative flex justify-center">
          <div className=" w-[140px] h-[280px] rounded-full bg-[#2D4625]/30 flex items-center justify-center">
            <Database className=" w-[140px] h-[280px] text-[#a6e267]" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0f0f0f] border border-[#333] flex items-center justify-center z-30">
            <Globe className=" w-[140px] h-[280px] text-white/70" />
          </div>
          <div className="absolute bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-[#0f0f0f] border border-[#333] flex items-center justify-center z-30">
            <Server className=" w-[140px] h-[280px] text-white/70" />
          </div>
          <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-[#0f0f0f] border border-[#333] flex items-center justify-center z-30">
            <Layers className=" w-[140px] h-[280px] text-white/70" />
          </div>
        </div>
      ),
      href: "/diensten/crm-systemen",
    },
    {
      title: "Business Intelligence",
      desc: "Verkrijg waardevolle inzichten uit uw data voor betere besluitvorming.",
      icon: (
        <div className="bg-[#2D4625]/20 rounded-full p-4">
          <LineChart className=" w-[140px] h-[280px] text-[#a6e267]" />
        </div>
      ),
      href: "/webdevelopment/lead-management",
    },
    {
      title: "Veiligheid & Compliance",
      desc: "Enterprise-grade beveiliging en naleving van regelgeving.",
      icon: (
        <div className="flex flex-col items-center space-y-3">
          <div className=" w-[140px] h-[50px]rounded-full bg-[#2D4625]/30 flex items-center justify-center relative">
            <ShieldCheck className=" w-[140px] h-[50px] text-[#a6e267]" />
            <div className="absolute inset-0 rounded-full border border-[#a6e267]/30 animate-ping-slow opacity-30" />
          </div>
          <div className="flex items-center">
            <div className="w-16 h-6 bg-[#2D4625] rounded-full flex items-center px-1">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <span className="text-xs text-white/60 ml-2">
              ISO Gecertificeerd
            </span>
          </div>
        </div>
      ),
      href: "https://essict.nl/veiligheid-en-compliance",
    },
    {
      title: "Data Integratie",
      desc: "Verbind en analyseer data uit verschillende bronnen.",
      icon: (
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <Database className=" w-[140px] h-[50px] text-[#a6e267] mr-2" />
            <span className="text-xs text-white">CRM Systeem</span>
          </div>
          <div className="flex items-center">
            <Globe className=" w-[140px] h-[50px] text-[#a6e267] mr-2" />
            <span className="text-xs text-white">Website Analytics</span>
          </div>
          <div className="flex items-center">
            <BarChart3 className=" w-[140px] h-[50px] text-[#a6e267] mr-2" />
            <span className="text-xs text-white">ERP Platform</span>
          </div>
        </div>
      ),
      href: "/diensten/data-integratie",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-[#1a2a18] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 bg-[#2D4625] rounded flex items-center justify-center relative">
              <span className="text-white text-xs">✓</span>
              <div className="absolute inset-0 rounded bg-[#a6e267]/50 animate-ping opacity-75" />
            </div>
            <p className="text-white/70 text-sm tracking-wider">DIENSTEN</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-1 relative inline-block">
            Alles wat u nodig heeft voor digitale groei.
            <div className="absolute -bottom-2 left-0 h-[2px] w-1/3 bg-gradient-to-r from-[#a6e267] to-transparent" />
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative group"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {/* Slider Controls */}
          <button
            className="absolute -left-6 top-1/2 z-20 hidden md:flex items-center justify-center p-2 rounded-full bg-[#1a1a1a]/70 hover:bg-[#a6e267] transition"
            onClick={() => slider.current?.prev()}
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </button>
          <button
            className="absolute -right-6 top-1/2 z-20 hidden md:flex items-center justify-center p-2 rounded-full bg-[#1a1a1a]/70 hover:bg-[#a6e267] transition"
            onClick={() => slider.current?.next()}
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </button>

          <div ref={sliderRef} className="keen-slider">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="keen-slider__slide min-w-[280px] md:min-w-0 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg border border-[#333] p-5 flex flex-col group hover:border-[#a6e267] transition-all duration-500 hover:shadow-[0_0_20px_rgba(166,226,103,0.3)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-2">
                  <h3 className="text-white text-lg font-medium group-hover:text-[#a6e267] transition-all duration-300 flex items-center">
                    <div className="w-1 h-5 bg-[#a6e267] mr-2 group-hover:h-7 transition-all duration-300" />
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm">{card.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  {card.icon}
                </div>
                <div className="mt-4 flex justify-end">
                  <a
                    href={card.href}
                    className="inline-flex items-center text-sm text-white/70 hover:text-[#a6e267] transition-all duration-500 group-hover:translate-x-1"
                  >
                    <span>Meer informatie</span>
                    <ArrowRight className="ml-1 h-3 w-3" />
                    <div className="ml-1 h-[1px] w-0 bg-[#a6e267] group-hover:w-4 transition-all duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
