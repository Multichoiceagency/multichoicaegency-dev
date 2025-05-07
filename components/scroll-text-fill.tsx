"use client"

import { useEffect, useRef, useState } from "react"

export default function ScrollTextFill() {
  const containerRef = useRef<HTMLDivElement>(null)
  const firstWordRef = useRef<HTMLSpanElement>(null)
  const restTextRef = useRef<HTMLSpanElement>(null)
  const [fillPercentage, setFillPercentage] = useState(0)

  useEffect(() => {
    const containerElement = containerRef.current
    const firstWordElement = firstWordRef.current
    const restTextElement = restTextRef.current

    if (!containerElement || !firstWordElement || !restTextElement) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const containerPosition = containerElement.getBoundingClientRect().top + scrollPosition
      const containerHeight = containerElement.offsetHeight

      // Calculate how much of the text should be filled based on scroll position
      // Start filling when the container is 20% into the viewport
      const startFill = containerPosition - windowHeight * 0.8
      // Complete filling when the container is 50% through the viewport
      const endFill = containerPosition + containerHeight - windowHeight * 0.5

      // Calculate fill percentage
      let newFillPercentage = (scrollPosition - startFill) / (endFill - startFill)
      newFillPercentage = Math.min(Math.max(newFillPercentage, 0), 1)

      setFillPercentage(newFillPercentage)

      // Get the width of the first word as a percentage of the total text width
      const firstWordWidth = firstWordElement.offsetWidth
      const totalWidth = containerElement.offsetWidth
      const firstWordPercentage = firstWordWidth / totalWidth

      // Calculate how much of each part should be filled
      if (newFillPercentage <= firstWordPercentage) {
        // We're still filling the first word
        const firstWordFillPercentage = (newFillPercentage / firstWordPercentage) * 100

        firstWordElement.style.backgroundImage = `linear-gradient(
          to right,
          #14532d ${firstWordFillPercentage}%,
          #d1d5db ${firstWordFillPercentage}%
        )`

        // Rest text is still unfilled
        restTextElement.style.backgroundImage = `linear-gradient(
          to right,
          #14532d 0%,
          #d1d5db 0%
        )`
      } else {
        // First word is completely filled
        firstWordElement.style.backgroundImage = `linear-gradient(
          to right,
          #14532d 100%,
          #d1d5db 100%
        )`

        // Calculate how much of the rest text should be filled
        const restTextFillPercentage = ((newFillPercentage - firstWordPercentage) / (1 - firstWordPercentage)) * 100

        restTextElement.style.backgroundImage = `linear-gradient(
          to right,
          #14532d ${restTextFillPercentage}%,
          #d1d5db ${restTextFillPercentage}%
        )`
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial call to set the correct state on load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-24 md:py-32 lg:py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-regular leading-tight tracking-tight">
          <span
            ref={firstWordRef}
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #14532d 0%, #d1d5db 0%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Multichoiceagency
          </span>{" "}
          <span
            ref={restTextRef}
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #14532d 0%, #d1d5db 0%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            ontwikkelt custom frontend- en backend-systemen die perfect aansluiten op uw bedrijfsprocessen. Van
            geavanceerde WordPress-websites tot volledig op maat gemaakte applicaties — wij combineren technologie met
            doordacht design voor maximale impact.
          </span>
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />
    </section>
  )
}
