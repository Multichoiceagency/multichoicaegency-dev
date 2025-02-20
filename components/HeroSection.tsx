"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import { useRef } from "react";
import Link from "next/link";

export function HeroSection() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, amount: 0.5 });

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.4 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const logos = [
    "/partners/zwarte-logos/sydneydranken.png",
    "/partners/zwarte-logos/lovka.png",
    "/partners/zwarte-logos/dutchtransportgroup.png",
    "/partners/zwarte-logos/alkanaany.png",
    "/partners/zwarte-logos/binvino.png",
    "/partners/zwarte-logos/powerforce uitzendgroep.png",
    "/partners/zwarte-logos/sunsen-zonnestudio.png",
    "/partners/zwarte-logos/bouhs-steigerwerken.png",
    "/partners/zwarte-logos/gardenlux.png",
    "/partners/zwarte-logos/binvino.png",
    "/partners/zwarte-logos/hengelvissportschiedam.png",
  ];

  return (
    <section className="w-full bg-white dark:bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          
          {/* Left side: Text content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            
            {/* Agency Label */}
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="text-green-700 dark:text-red-500 text-sm font-bold hover:text-black animate-pulse mb-8"
            >
              FULL-SERVICE DIGITAAL BUREAU
            </motion.p>

            {/* Main Text Block */}
            <motion.div 
              ref={textRef}
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="mb-12"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-gray-900 dark:text-white">
                {[
                  "Wij", "verbeteren", "digitale", "interacties", "tussen", 
                  "mensen", "en", "bedrijven.", "Onze", "aanpak", "combineert", 
                  "innovatie,", "creativiteit", "en", "marketing", "voor", 
                  "unieke", "ervaringen."
                ].map((word, index) => (
                  <motion.span 
                    key={index} 
                    variants={item} 
                    className={`inline-block mr-[0.2em] ${
                      ["creativiteit", "en", "marketing", "voor", "unieke", "ervaringen."].includes(word)
                        ? "text-gray-400 dark:text-gray-500"
                        : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Button */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <Link href="/over-ons">
                <button className="group inline-flex items-center bg-[#FFD60A] hover:bg-[#FFD60A]/90 text-black px-6 py-3 font-medium transition-colors">
                  Over ons
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right side: Client Logos */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center"
          >
            {logos.map((logo, index) => (
              <motion.div key={index} variants={item} className="relative h-12">
                <Image
                  src={logo}
                  alt="Client Logo"
                  height={400}
                  width={400}
                  className="object-contain filter dark:invert dark:opacity-50 opacity-70"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
