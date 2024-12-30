"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    description:
      "Boost uw online impact met onze expertise in frontend development. Wij bouwen interactieve interfaces die uw klanten aantrekken en vasthouden.",
    button: "Bekijk onze casestudy",
  },
  {
    video: "https://videos.pexels.com/video-files/4974708/4974708-hd_1920_1080_25fps.mp4",
    title: "We bouwen Schaalbare Backend Oplossingen",
    description:
      "Maximaliseer de efficiëntie van uw bedrijfsprocessen met onze betrouwbare backend systemen. Ontdek hoe wij uw technologie naar het volgende niveau tillen.",
    button: "Lees meer over onze aanpak",
  },
  {
    video: "https://videos.pexels.com/video-files/8865910/8865910-hd_1920_1080_25fps.mp4",
    title: "Haal Meer uit API-Integraties",
    description:
      "Verbind uw systemen moeiteloos en verbeter uw bedrijfsvoering. Ontsluit nieuwe mogelijkheden met onze naadloze API-integratie-oplossingen.",
    button: "Plan een kennismaking",
  },
  {
    video: "https://videos.pexels.com/video-files/29955671/12855523_2560_1440_60fps.mp4",
    title: "Meer dan 8 Jaar Ervaring",
    description:
      "Met ruim 8 jaar ervaring leveren wij oplossingen die uw bedrijf naar nieuwe hoogten brengen. Vertrouw op ons om uw digitale ambities waar te maken.",
    button: "Ontdek onze expertise",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = useCallback(
    (index: number) => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    changeSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, changeSlide]);

  const previousSlide = useCallback(() => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, changeSlide]);

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x < -100) {
      nextSlide();
    } else if (info.offset.x > 100) {
      previousSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") previousSlide();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, previousSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[80vh] sm:h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col"
        >
          <motion.video
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={slides[currentSlide].video} type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-black/60" />

          {/* Text Content - Left Bottom */}
          <div className="absolute bottom-24 left-6 sm:left-10 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-white"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
                {slides[currentSlide].title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <button className="group flex items-center space-x-2 rounded-full border border-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-colors hover:bg-white hover:text-black">
                <span>{slides[currentSlide].button}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Navigation Dots - Below Content */}
            <div className="abdsolute items-bottom space-x-3 mt-8">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => changeSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentSlide === idx ? "bg-white w-6" : "bg-white/50 w-1.5"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Arrows - Right Bottom */}
          <div className="absolute bottom-10 right-10 flex gap-3">
            <button
              onClick={previousSlide}
              className="rounded-full border border-white p-2 sm:p-3 text-white transition-colors hover:bg-white hover:text-black"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full border border-white p-2 sm:p-3 text-white transition-colors hover:bg-white hover:text-black"
              disabled={isTransitioning}
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
