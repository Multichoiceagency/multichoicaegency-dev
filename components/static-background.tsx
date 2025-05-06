"use client"

import { useEffect, useRef } from "react"

interface StaticBackgroundProps {
  className?: string
}

export function StaticBackground({ className = "" }: StaticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient background
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#1a2e17")
      gradient.addColorStop(1, "#0f1c0d")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Add subtle particles
    const particles: { x: number; y: number; size: number; speed: number }[] = []

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 40))

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
        })
      }
    }

    // Animate particles
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawBackground()

      ctx.fillStyle = "rgba(255, 255, 255, 0.2)"

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Move particle
        particle.y += particle.speed

        // Reset particle if it goes off screen
        if (particle.y > canvas.height) {
          particle.y = 0
          particle.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animateParticles)
    }

    createParticles()
    animateParticles()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} style={{ zIndex: 0 }} />
}
