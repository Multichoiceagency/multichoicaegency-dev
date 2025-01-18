"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const duration = speed === "fast" ? 80 : speed === "normal" ? 80 : 120;

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative w-full"
      style={{ 
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
      }}
    >
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left" ? [-containerWidth, 0] : [0, -containerWidth],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        {...(pauseOnHover && { whileHover: { animationPlayState: "paused" } })}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[400px] bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">{item.quote}</p>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white text-xl">{item.name}</p>
              <p className="text-gray-500 dark:text-gray-400">{item.title}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
