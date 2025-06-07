"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis" // Ensure this import is correct based on your installation

interface SmoothScrollProviderProps {
  children: React.ReactNode
  /**
   * Options for Lenis.
   * @see https://github.com/studio-freight/lenis#options
   */
  options?: Partial<ConstructorParameters<typeof Lenis>[0]> // Use Partial for options
}

const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children, options }) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with corrected and common options
    const lenis = new Lenis({
      // Default options - can be overridden by the `options` prop
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical", // Corrected: 'vertical' or 'horizontal'
      gestureOrientation: "vertical", // Corrected: 'vertical', 'horizontal', or 'both'
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
      touchMultiplier: 2, // Adjust touch scroll speed
      wheelMultiplier: 1, // Adjust wheel scroll speed
      lerp: 0.1, // Interpolation factor for smoothness (0.05 to 0.1 is common)
      // Add other valid Lenis options here as needed
      ...options, // Override default options if `options` prop is provided
    })

    lenisRef.current = lenis

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [options]) // Re-initialize if options change

  return <>{children}</>
}

export default SmoothScrollProvider
