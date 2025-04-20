"use client"

import { useEffect, useRef } from "react"

export default function ScrollTextFill() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const textPosition = textElement.getBoundingClientRect().top + scrollPosition
      const textHeight = textElement.offsetHeight

      // Calculate how much of the text should be filled based on scroll position
      // Start filling when the text is 20% into the viewport
      const startFill = textPosition - windowHeight * 0.8
      // Complete filling when the text is 50% through the viewport
      const endFill = textPosition + textHeight - windowHeight * 0.5

      // Calculate fill percentage
      let fillPercentage = (scrollPosition - startFill) / (endFill - startFill)
      fillPercentage = Math.min(Math.max(fillPercentage, 0), 1)

      // Apply the fill effect using background-clip and linear gradient
      textElement.style.backgroundImage = `linear-gradient(
        to right,
        #0f2b3d ${fillPercentage * 100}%,
        #d1d5db ${fillPercentage * 100}%
      )`
    }

    window.addEventListener("scroll", handleScroll)
    // Initial call to set the correct state on load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-4">
        <h2
          ref={textRef}
          className="text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-regular leading-tight tracking-tight text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, #0f2b3d 0%, #d1d5db 0%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Multichoiceagency ontwikkelt custom frontend- en backend-systemen die perfect aansluiten op uw bedrijfsprocessen. Van geavanceerde WordPress-websites tot volledig op maat gemaakte applicaties — wij combineren technologie met doordacht design voor maximale impact.
        </h2>
      </div>
    </section>
  )
}
