"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"

const QuoteButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const lastScrollY = useRef(0)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current) {
        // Scrollt naar beneden: toon de knop en start timer om na 1 seconde te verbergen
        setIsVisible(true)
        if (timer.current) {
          clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
          setIsVisible(false)
        }, 1000)
      } else {
        // Scrollt naar boven: verberg de knop direct
        setIsVisible(false)
        if (timer.current) {
          clearTimeout(timer.current)
        }
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  return (
    <Link href="/offerte-aanvragen">
      <Button
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-green-700 uppercase font-bold text-[10px] !text-white hover:bg-green-900 dark:hover:bg-green-900 w-12 h-48 flex items-center justify-center shadow-lg transition-all duration-500 ease-in-out ${
          isVisible
            ? "opacity-100 translate-x-0 animate-pulse-bg"
            : "opacity-0 -translate-x-full"
        } hover:shadow-green-400 hover:shadow-md writing-mode-vertical-rl text-orientation-upright tracking-wide`}
      >
        Gratis offerte
      </Button>
    </Link>
  )
}

export default QuoteButton
