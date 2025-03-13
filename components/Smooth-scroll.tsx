"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!scrollRef.current) return

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // Use type assertion to bypass TypeScript checking
        smartphone: { smooth: true } as any,
        tablet: { smooth: true } as any,
        lerp: 0.07,
        multiplier: 1.0,
      })

    // Update scroll on page change
    locomotiveScrollRef.current.update()

    // Cleanup function
    return () => {
      locomotiveScrollRef.current?.destroy()
    }
  }, [pathname])

  // Update scroll when window is resized
  useEffect(() => {
    const handleResize = () => {
      locomotiveScrollRef.current?.update()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}

