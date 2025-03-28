"use client"

import type React from "react"
import { useEffect, useState, useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface WordSegment {
  text: string
  className?: string
}

interface TypewriterProps {
  className?: string
  cursorClassName?: string
}

export const Typewriter: React.FC<TypewriterProps> = ({ className, cursorClassName }: TypewriterProps) => {
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
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])

  // New transformations for height and font size
  const height = useTransform(scrollYProgress, [0, 1], ["100vh", "70vh"])
  // Changed font size to start at 48px and grow to 72px when scrolling down
  const fontSize = useTransform(scrollYProgress, [0, 0.5, 1], ["48px", "72px", "48px"])

  // Hardcoded text content directly in the component
  const words: WordSegment[][] = [
    [{ text: "WIJ CREËREN DESIGNS OP MAAT" }],
    [{ text: "DIGITAAL ONTWERP", className: "text-green-400" }, { text: ", CODE" }],
    [{ text: "& VORMEN MERKEN." }],
    [{ text: "GROOT OF KLEIN." }],
  ]

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)
  const [currentText, setCurrentText] = useState<string>("")
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [isLineComplete, setIsLineComplete] = useState<boolean>(false)
  const [displayedLines, setDisplayedLines] = useState<ReactNode[]>([])

  useEffect(() => {
    const currentLine: WordSegment[] = words[currentWordIndex]
    const fullText: string = currentLine.map((word) => word.text).join("")

    const type = (): void => {
      if (!isDeleting && !isLineComplete) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        } else {
          setIsLineComplete(true)

          // Create the completed line with proper styling
          const lineElements: ReactNode[] = []
          let charIndex = 0

          for (const word of currentLine) {
            const wordLength: number = word.text.length
            const wordText: string = fullText.substring(charIndex, charIndex + wordLength)

            lineElements.push(
              <span
                key={charIndex}
                className={cn(
                  "transition-colors duration-300 hover:text-green-900 dark:hover:text-green-400",
                  word.className,
                  word.className?.includes("text-green-400") && theme === "dark" ? "text-green-300" : "",
                )}
              >
                {wordText}
              </span>,
            )

            charIndex += wordLength
          }

          setDisplayedLines((prev) => [
            ...prev,
            <div key={currentWordIndex} className="flex flex-wrap">
              {lineElements}
            </div>,
          ])

          // Move to the next line
          if (currentWordIndex < words.length - 1) {
            setTimeout(() => {
              setCurrentWordIndex(currentWordIndex + 1)
              setCurrentText("")
              setIsLineComplete(false)
            }, 500)
          }
        }
      }
    }

    const typingDelay: number = 50 // Adjust typing speed
    const timer: NodeJS.Timeout = setTimeout(type, typingDelay)

    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, isLineComplete, words, theme])

  // Render the current typing line
  const renderCurrentLine = (): ReactNode => {
    if (isLineComplete) return null

    const currentLine: WordSegment[] = words[currentWordIndex]
    const fullLineText: string = currentLine.map((word) => word.text).join("")

    // Calculate which parts of the text are visible
    const visibleText: string = currentText

    const lineElements: ReactNode[] = []
    let charIndex = 0

    for (const word of currentLine) {
      const wordLength: number = word.text.length
      const startIndex: number = charIndex
      const endIndex: number = charIndex + wordLength

      // Get the visible portion of this word
      const visiblePortion: string = visibleText.substring(
        Math.max(startIndex, 0),
        Math.min(endIndex, visibleText.length),
      )

      if (visiblePortion.length > 0) {
        lineElements.push(
          <span
            key={charIndex}
            className={cn(
              "transition-colors duration-300 hover:text-green-900 dark:hover:text-green-400",
              word.className,
              word.className?.includes("text-green-600") && theme === "dark" ? "text-green-700" : "",
            )}
          >
            {visiblePortion}
          </span>,
        )
      }

      charIndex += wordLength
    }

    return (
      <div className="flex flex-wrap">
        {lineElements}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className={cn("ml-1 inline-block h-full w-[3px] bg-black dark:bg-white", cursorClassName)}
        />
      </div>
    )
  }

  return (
    <motion.main
      ref={containerRef}
      className="flex flex-col items-center justify-center p-8 bg-[#F9F9F9] dark:bg-gray-900 relative overflow-hidden"
      style={{ height }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="w-[80%] mx-auto perspective-[1200px]"
        style={{
          rotateX,
          rotateY,
          scale,
          opacity,
          y,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <motion.div
          className={cn("font-bold tracking-tight leading-tight text-black dark:text-white", className)}
          style={{ fontSize }}
        >
          {displayedLines}
          {renderCurrentLine()}
        </motion.div>
      </motion.div>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </motion.main>
  )
}

