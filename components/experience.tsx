"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Services data
const services = [
  {
    title: "Strategie",
    description: "Digitale transformatiestrategieën die succes stimuleren",
  },
  {
    title: "Technologie",
    description: "Innovatieve oplossingen gebouwd voor het moderne web",
  },
  {
    title: "Marketing",
    description: "Datagestuurde campagnes die resultaat leveren",
  },
  {
    title: "Design",
    description: "Creatieve ervaringen die inspireren en boeien",
  },
];

// Main component
export function Experience(): JSX.Element {
  const words: string[] = ["Maak elke klantinteractie", "krachtig."];

  return (
    <section className="relative py-5 h-30vh bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`horizontal-${i}`}
            className="absolute left-0 right-0 h-px bg-black/10 dark:bg-white/10"
            style={{ top: `${(i + 1) * 5}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute bottom-0 top-0 w-px bg-black/10 dark:bg-white/10"
            style={{ left: `${(i + 1) * 5}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-[1800px] px-10">
          <div className="flex min-h-screen flex-col items-start justify-center">
            {/* Services Section */}
            <div className="mb-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="rounded-2xl bg-gradient-to-br from-[#1e7932]/20 to-[#1e7932]/10 dark:from-[#1e7932]/30 dark:to-[#1e7932]/20 p-8 backdrop-blur-sm"
                >
                  <h3 className="mb-2 text-2xl font-medium text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/80">{service.description}</p>
                </motion.div>
              ))}
            </div>
 </div>
 </div>
 </div>
 </section>
  );
}
