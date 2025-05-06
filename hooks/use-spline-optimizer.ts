"use client"

import { useState, useEffect } from "react"

export function useSplineOptimizer() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false)
  const [shouldUseSpline, setShouldUseSpline] = useState(true)

  useEffect(() => {
    // Check if device is likely to struggle with 3D
    const checkDeviceCapabilities = () => {
      // Check for low memory (if available in browser)
      const lowMemory =
        "deviceMemory" in navigator &&
        // @ts-ignore - deviceMemory is not in the standard TypeScript navigator type
        (navigator.deviceMemory as number) < 4

      // Check for low-end CPU (if available)
      const lowCPU = "hardwareConcurrency" in navigator && navigator.hardwareConcurrency < 4

      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      // Check if mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      // Disable Spline if device is likely to struggle
      if (lowMemory || lowCPU || prefersReducedMotion || isMobile) {
        setShouldUseSpline(false)
      }
    }

    // Run the check
    checkDeviceCapabilities()

    // Set up listener for Spline loading
    const handleSplineLoad = () => {
      setIsSplineLoaded(true)

      // Once loaded, optimize the Spline viewer
      const splineViewer = document.querySelector("spline-viewer")
      if (splineViewer) {
        // Set attributes for better performance
        splineViewer.setAttribute("render-on-demand", "true")
        splineViewer.setAttribute("auto-resize", "false")

        // Reduce quality on mobile
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          splineViewer.setAttribute("pixel-ratio", "1")
        }
      }
    }

    // Listen for Spline load event
    window.addEventListener("spline-viewer-load", handleSplineLoad)

    return () => {
      window.removeEventListener("spline-viewer-load", handleSplineLoad)
    }
  }, [])

  return { isSplineLoaded, shouldUseSpline }
}
