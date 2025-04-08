"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface TypewriterProps {
  className?: string
}

export const Typewriter: React.FC<TypewriterProps> = ({ className }: TypewriterProps) => {
  const { theme, setTheme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Transform values based on scroll position
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 0.9, 1, 0.9, 0.8])

  // Enhanced opacity for stronger fade-in and fade-out effect
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0, 1, 1, 1, 0])

  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  // Slower background color transformation with more keyframes for smoother transition
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.4, 0.45, 0.55, 0.6, 0.65, 1],
    [
      "rgba(249, 249, 249, 0.8)",
      "rgba(249, 249, 249, 0.8)",
      "rgba(27, 121, 53, 0.1)",
      "rgba(27, 121, 53, 0.7)",
      "rgba(27, 121, 53, 0.7)",
      "rgba(27, 121, 53, 0.1)",
      "rgba(249, 249, 249, 0.8)",
      "rgba(249, 249, 249, 0.8)",
    ],
  )

  // Gradient background for the inset container
  const gradientBg = useTransform(
    scrollYProgress,
    [0, 0.35, 0.4, 0.45, 0.55, 0.6, 0.65, 1],
    [
      "linear-gradient(135deg, rgba(249, 249, 249, 0.5), rgba(249, 249, 249, 0.5))",
      "linear-gradient(135deg, rgba(249, 249, 249, 0.5), rgba(249, 249, 249, 0.5))",
      "linear-gradient(135deg, rgba(27, 121, 53, 0.2), rgba(166, 226, 103, 0.2))",
      "linear-gradient(135deg, rgba(27, 121, 53, 0.9), rgba(166, 226, 103, 0.8))",
      "linear-gradient(135deg, rgba(27, 121, 53, 0.9), rgba(166, 226, 103, 0.8))",
      "linear-gradient(135deg, rgba(27, 121, 53, 0.2), rgba(166, 226, 103, 0.2))",
      "linear-gradient(135deg, rgba(249, 249, 249, 0.5), rgba(249, 249, 249, 0.5))",
      "linear-gradient(135deg, rgba(249, 249, 249, 0.5), rgba(249, 249, 249, 0.5))",
    ],
  )

  // Text color transformation based on scroll - slower transition
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.45, 0.55, 0.65, 1],
    ["#000000", "#000000", "#ffffff", "#ffffff", "#000000", "#000000"],
  )

  // New transformations for height and font size with responsive values
  const height = useTransform(scrollYProgress, [0, 1], ["100vh", "70vh"])

  // Responsive font size based on screen size and scroll position
  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["clamp(24px, 5vw, 48px)", "clamp(32px, 7vw, 72px)", "clamp(24px, 5vw, 48px)"],
  )

  // Static content instead of typewriter effect
  const content = (
    <>
      <div className="flex flex-wrap">
        <span className="transition-colors duration-300 hover:text-green-900 dark:hover:text-green-400">
          WIJ CREËREN DESIGNS OP MAAT
        </span>
      </div>
      <div className="flex flex-wrap">
        <span
          className={cn(
            "transition-colors duration-300 hover:text-green-900 dark:hover:text-green-400",
            "text-green-400",
            theme === "dark" ? "text-green-300" : "",
          )}
        >
          DIGITAAL ONTWERP
        </span>
        <span className="transition-colors duration-300 hover:text-green-900 dark:hover:text-green-400">, CODE</span>
      </div>
      <div className="flex flex-wrap">
        <span className="transition-colors duration-300 hover:text-green-900 dark:hover:text-green-400">
          & VORMEN MERKEN.
        </span>
      </div>
      <div className="flex flex-wrap">
        <span className="transition-colors duration-300 hover:text-green-900 dark:hover:text-green-400">
          GROOT OF KLEIN.
        </span>
      </div>
    </>
  )

  return (
    <motion.main
      ref={containerRef}
      className="flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden bg-[#F9F9F9] dark:bg-gray-900"
      style={{
        height,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 800, damping: 30 }}
    >
      {/* Inset background with rounded corners */}
      <motion.div
        className="absolute inset-4 sm:inset-8 rounded-xl shadow-lg"
        style={{
          background: gradientBg,
          boxShadow: useTransform(
            scrollYProgress,
            [0, 0.4, 0.5, 0.6, 1],
            [
              "0 4px 6px rgba(0, 0, 0, 0.05)",
              "0 4px 6px rgba(0, 0, 0, 0.05)",
              "0 10px 25px rgba(27, 121, 53, 0.2)",
              "0 4px 6px rgba(0, 0, 0, 0.05)",
              "0 4px 6px rgba(0, 0, 0, 0.05)",
            ],
          ),
        }}
      />

      <motion.div
        className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto perspective-[1400px] z-10"
        style={{
          rotateX,
          rotateY,
          scale,
          opacity,
          y,
          transformStyle: "preserve-3d",
          color: textColor,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <motion.div
          className={cn("font-bold tracking-tight leading-tight text-balance break-words", className)}
          style={{ fontSize }}
        >
          {content}
        </motion.div>
      </motion.div>

      {/* Animated gradient overlay for enhanced fade effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.1, 0.9, 1],
            [
              "linear-gradient(to bottom, rgba(249, 249, 249, 1), rgba(249, 249, 249, 0))",
              "linear-gradient(to bottom, rgba(249, 249, 249, 0), rgba(249, 249, 249, 0))",
              "linear-gradient(to bottom, rgba(249, 249, 249, 0), rgba(249, 249, 249, 0))",
              "linear-gradient(to bottom, rgba(249, 249, 249, 0), rgba(249, 249, 249, 1))",
            ],
          ),
        }}
      />

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-20"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </motion.main>
  )
}

export default Typewriter
