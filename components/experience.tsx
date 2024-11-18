"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const services = [
  {
    title: "Strategie",
    description: "Digitale transformatieplannen die succes stimuleren",
  },
  {
    title: "Technologie",
    description: "Innovatieve oplossingen gebouwd voor het moderne web",
  },
  {
    title: "Marketing",
    description: "Data-gedreven campagnes die resultaten leveren",
  },
  {
    title: "Design",
    description: "Creatieve ervaringen die inspireren en betrekken",
  },
];

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const tileVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Tiles start small and transparent
    visible: (index: number) => ({
      opacity: 1,
      scale: 1, // Tiles grow to their full size
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.1, // Staggered animation based on index
      },
    }),
  };

  return (
    <section className="relative min-h-screen bg-black dark:bg-white">
      {/* Animated Tile Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={ref}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 grid-rows-4 sm:grid-rows-6 md:grid-rows-8 lg:grid-rows-10 h-full w-full"
        >
          {Array.from({ length: 100 }).map((_, index) => (
            <motion.div
              key={index}
              className="bg-dark-700 dark:bg-gray-300 border border-gray-600/30 dark:border-black/20 aspect-square"
              variants={tileVariants}
              initial="hidden"
              animate={controls}
              custom={index}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16 pb-16">
        <div className="mx-auto max-w-[1800px] px-10">
          <div className="flex min-h-screen flex-col items-start justify-center text-white dark:text-black">
            {/* Service Boxes */}
            <div className="mb-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                  }}
                  className="rounded-2xl bg-gradient-to-br from-[#1e7932]/20 to-[#1e7932]/10 p-8 backdrop-blur-sm dark:bg-gradient-to-br dark:from-[#d1fae5]/40 dark:to-[#d1fae5]/20"
                >
                  <h3 className="mb-2 text-2xl font-medium">{service.title}</h3>
                  <p className="text-opacity-80">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Main Text */}
            <div className="mb-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 text-xl italic"
              >
                Ervaring is alles
              </motion.p>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl font-medium leading-tight md:text-7xl"
                >
                  Maak elke klantinteractie{" "}
                  <span className="text-[#1e7932] dark:text-[#10b981]">
                    krachtig.
                  </span>
                </motion.h2>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12 max-w-3xl text-lg text-opacity-60"
            >
              Transformeer uw merk en bedrijf met uitzonderlijke digitale
              ervaringen die groei en innovatie stimuleren. Ons team van
              experts levert baanbrekende oplossingen die u een voorsprong geven
              op de concurrentie.
            </motion.p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="group flex items-center gap-2 rounded-full bg-[#1e7932] px-6 py-3 text-white transition-all hover:bg-[#1e7932]/90 dark:bg-[#10b981] dark:hover:bg-[#10b981]/90"
            >
              <span>Ontdek onze oplossingen</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
