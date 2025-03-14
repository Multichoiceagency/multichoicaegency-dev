"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

interface SmoothScrollProps {
  children: React.ReactNode
}

// Define a type for the internal structure we need to access
interface LocomotiveScrollInstance extends LocomotiveScroll {
  scroll: {
    instance: {
      scroll: {
        y: number
      }
    }
  }
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!scrollRef.current) return

    // Initialize Locomotive Scroll with optimized settings
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true } as any,
      tablet: { smooth: true } as any,
      lerp: 0.07,
      multiplier: 1.0,
      scrollFromAnywhere: true,
      touchMultiplier: 2.5,
    })

    // Initial update
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update()
    }

    // Use ResizeObserver to detect content size changes
    const resizeObserver = new ResizeObserver(() => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update()
      }
    })

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current)
    }

    // Update after images and other resources are loaded
    const handleLoad = () => {
      setTimeout(() => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.update()
        }
      }, 200)
    }

    window.addEventListener('load', handleLoad)

    // Additional update after a delay to catch any late-loading content
    const timer = setTimeout(() => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update()
      }
    }, 1000)

    // Cleanup function
    return () => {
      window.removeEventListener('load', handleLoad)
      resizeObserver.disconnect()
      clearTimeout(timer)
      
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }
    }
  }, [pathname])

  // Update scroll when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle scroll to bottom edge case
  useEffect(() => {
    const handleScrollToBottom = () => {
      if (!locomotiveScrollRef.current || !scrollRef.current) return
      
      // Use type assertion to access internal properties
      const scrollInstance = locomotiveScrollRef.current as any
      let currentY = 0
      
      try {
        // Try to access the scroll position safely
        currentY = scrollInstance.scroll?.instance?.scroll?.y || 0
      } catch (e) {
        console.warn("Could not access scroll position", e)
      }
      
      const maxY = scrollRef.current.scrollHeight - window.innerHeight
      
      // If we're trying to scroll past the bottom, force an update
      if (currentY >= maxY - 50) {
        setTimeout(() => {
          if (locomotiveScrollRef.current) {
            locomotiveScrollRef.current.update()
            
            // Force scroll to bottom if needed
            if (currentY >= maxY - 10) {
              locomotiveScrollRef.current.scrollTo(document.body.scrollHeight)
            }
          }
        }, 100)
      }
    }
    
    // Add event listener to the locomotive-scroll instance
    if (locomotiveScrollRef.current) {
      // Use type assertion to access the 'on' method if it's not in the type definitions
      (locomotiveScrollRef.current as any).on?.('scroll', handleScrollToBottom)
    }
    
    return () => {
      if (locomotiveScrollRef.current) {
        // Use type assertion to access the 'off' method if it's not in the type definitions
        (locomotiveScrollRef.current as any).off?.('scroll', handleScrollToBottom)
      }
    }
  }, [])

  // Force update when DOM mutations occur (for dynamic content)
  useEffect(() => {
    if (!scrollRef.current) return
    
    const mutationObserver = new MutationObserver(() => {
      if (locomotiveScrollRef.current) {
        setTimeout(() => {
          if (locomotiveScrollRef.current) {
            locomotiveScrollRef.current.update()
          }
        }, 100)
      }
    })
    
    mutationObserver.observe(scrollRef.current, {
      childList: true,
      subtree: true
    })
    
    return () => mutationObserver.disconnect()
  }, [])

  return (
    <div 
      ref={scrollRef} 
      data-scroll-container
      className="min-h-screen"
      style={{ paddingBottom: '50px' }} // Add padding to ensure scrolling to the very end
    >
      {children}
    </div>
  )
}