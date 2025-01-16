"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
          onTimeUpdate={(e) => {
            const video = e.target as HTMLVideoElement;
            if (video.currentTime >= 100) {
              video.currentTime = 0;
              video.play();
            }
          }}
        >
          <source src="https://www.youtube.com/watch?v=cRg0H4OfjPs" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-center h-full pb-12 text-center">
        <div className="px-8 max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Revolutionize Your Digital Presence Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-6"
          >
            Empower your brand with innovative solutions tailored to captivate your audience and drive unparalleled engagement.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center bg-white text-black font-semibold py-3 px-6 rounded-full text-lg hover:bg-opacity-90 transition duration-300 mx-auto"
          >
            Discover More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
