"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Slide {
  video: string;
  title: string;
  description: string;
  button: string;
}

const slides: Slide[] = [
  {
    video: "https://videos.pexels.com/video-files/4480970/4480970-hd_1920_1080_25fps.mp4",
    title: "Transformeer uw Digitale Aanwezigheid Vandaag",
    description: "Boost uw online impact met onze expertise in frontend development. Wij bouwen interactieve interfaces die uw klanten aantrekken en vasthouden.",
    button: "Bekijk onze casestudy",
  },
  {
    video: "https://videos.pexels.com/video-files/4974708/4974708-hd_1920_1080_25fps.mp4",
    title: "We bouwen Schaalbare Backend Oplossingen",
    description: "Maximaliseer de efficiëntie van uw bedrijfsprocessen met onze betrouwbare backend systemen. Ontdek hoe wij uw technologie naar het volgende niveau tillen.",
    button: "Lees meer over onze aanpak",
  },
  {
    video: "https://videos.pexels.com/video-files/8865910/8865910-hd_1920_1080_25fps.mp4",
    title: "Haal Meer uit API-Integraties",
    description: "Verbind uw systemen moeiteloos en verbeter uw bedrijfsvoering. Ontsluit nieuwe mogelijkheden met onze naadloze API-integratie-oplossingen.",
    button: "Plan een kennismaking",
  },
  {
    video: "https://videos.pexels.com/video-files/29955671/12855523_2560_1440_60fps.mp4",
    title: "Meer dan 8 Jaar Ervaring",
    description: "Met ruim 8 jaar ervaring leveren wij oplossingen die uw bedrijf naar nieuwe hoogten brengen. Vertrouw op ons om uw digitale ambities waar te maken.",
    button: "Ontdek onze expertise",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen sm:h-80vh w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={slides[currentSlide].video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-2xl mx-auto px-8 pb-20 text-left">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8"
            >
              {slides[currentSlide].description}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.button
              key={`button-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white text-black font-semibold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300 flex items-center mr-auto"
            >
              {slides[currentSlide].button}
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.button>
          </AnimatePresence>
        </div>

        <div className="w-full flex justify-between items-center px-8 pb-8">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 transition duration-300 rounded-full p-2"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 transition duration-300 rounded-full p-2"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

