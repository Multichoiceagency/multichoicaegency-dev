"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Box {
  title: string;
  description: string;
  className?: string;
}

export const BackgroundBoxes = ({
  className,
  boxes,
}: {
  className?: string;
  boxes: Box[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const closestIndex = boxes.reduce((closest, _, index) => {
      const boxWidth = rect.width / 2;
      const boxHeight = rect.height / 2;
      const boxX = (index % 2) * boxWidth + boxWidth / 2;
      const boxY = Math.floor(index / 2) * boxHeight + boxHeight / 2;

      const distance = Math.sqrt(
        Math.pow(mouseX - boxX, 2) + Math.pow(mouseY - boxY, 2)
      );

      if (distance < closest.distance) {
        return { index, distance };
      }
      return closest;
    }, { index: 0, distance: Infinity }).index;

    setHoveredIndex(closestIndex);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => {
        setIsMouseOver(false);
        setHoveredIndex(null);
      }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 h-full w-full",
        className
      )}
    >
      {boxes.map((box, idx) => (
        <div
          key={idx}
          className={cn(
            "relative h-full w-full border border-white/10",
            box.className
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isMouseOver && hoveredIndex === idx ? 1 : 0,
              scale: isMouseOver && hoveredIndex === idx ? 1.1 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMouseOver && hoveredIndex === idx ? 1 : 0,
              y: isMouseOver && hoveredIndex === idx ? 0 : 20,
            }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="relative z-10 h-full w-full p-8"
          >
            <div className="flex h-full flex-col justify-end">
              <h3 className="mb-2 text-2xl font-bold text-white">{box.title}</h3>
              <p className="text-sm text-white/80">{box.description}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};