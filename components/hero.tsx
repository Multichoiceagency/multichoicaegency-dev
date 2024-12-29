"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ArrowLeft, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Slide {
  video: string;
  title: string;
  description: string;
  button: string;
}

const slides: Slide[] = [
  {
    video: "https://cdn.pixabay.com/video/2018/12/24/20218-308135835_large.mp4",
    title: "Transformeer uw digitale aanwezigheid",
    description: "Creëer uitzonderlijke gebruikerservaringen met onze expertise in frontend development. Bouw interactieve interfaces die uw doelgroep boeien.",
    button: "Bekijk casestudy",
  },
  {
    video: "https://cdn.pixabay.com/video/2022/10/24/136268-764387688_tiny.mp4",
    title: "Bouw robuuste backend systemen",
    description: "Ontwikkel schaalbare en betrouwbare applicaties met onze backend expertise. Optimaliseer uw bedrijfsprocessen met efficiënte dataverwerking.",
    button: "Lees meer",
  },
  {
    video: "https://cdn.pixabay.com/video/2016/11/15/6378-191636243_tiny.mp4",
    title: "Naadloze API-integraties",
    description: "Verbind uw systemen effectief met onze API-integraties. Stroomlijn data-uitwisseling en ontsluit nieuwe functionaliteiten voor uw applicaties.",
    button: "Begin nu",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error("Error bij het inschakelen van fullscreen:", err);
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (err) {
        console.error("Error bij het verlaten van fullscreen:", err);
      }
    }
  };

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

          <div className="relative flex-grow flex items-center">
            <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex flex-col h-full py-6 sm:py-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl space-y-6"
                >
                  <div className="space-y-3">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white">
                      {slides[currentSlide].title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed py-10">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="group flex items-center space-x-2 rounded-full border border-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white transition-colors hover:bg-white hover:text-black">
                      <span>{slides[currentSlide].button}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="relative py-4 sm:py-6">
            <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between w-full"
              >
                <div className="flex space-x-3">
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
                <div className="flex items-center gap-3">
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
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

