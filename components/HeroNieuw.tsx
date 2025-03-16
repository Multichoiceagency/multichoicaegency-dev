'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  videoSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  videoSrc,
}) => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const startTime = 6; // Begin op 6 seconden
      const endTime = 100; // Eindig op 100 seconden (1:40)
      video.currentTime = startTime;

      const handleTimeUpdate = () => {
        if (video.currentTime >= endTime) {
          video.currentTime = startTime; // Terug naar starttijd
          video.play(); // Herstart de video
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  return (
    <section
      className={`mt-28 p-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="relative pt-32 pb-32 sm:pt-48 sm:pb-48 px-4 xs:px-8 xl:px-12 rounded-3xl overflow-hidden">
        {/* HTML5 Video Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover aspect-video sm:aspect-auto"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        {/* Black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>

        {/* Content overlay */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col items-center text-center text-white">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl xl:text-8xl tracking-tight mb-6 sm:mb-8">
              {title}
            </h1>
            <p className="max-w-sm sm:max-w-md xl:max-w-3xl text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10">
              {description}
            </p>
            <Link
              href={buttonLink}
              className="inline-flex py-3 px-5 sm:py-4 sm:px-6 items-center justify-center text-base sm:text-lg font-medium text-white bg-teal-900 hover:bg-lime-600 rounded-full transition duration-200"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
