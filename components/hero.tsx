"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ArrowRight, Maximize2, Minimize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface Slide {
  video: string
  title: string
  button: string
}

const slides: Slide[] = [
  {
    video: 'https://cdn.pixabay.com/video/2018/12/24/20218-308135835_large.mp4',
    title: 'Transform your digital presence with innovative solutions',
    button: 'View case study',
  },
  {
    video: 'https://cdn.pixabay.com/video/2018/12/24/20218-308135835_large.mp4',
    title: 'Create exceptional user experiences that drive growth',
    button: 'Learn more',
  },
  {
    video: 'https://cdn.pixabay.com/video/2018/12/24/20218-308135835_large.mp4',
    title: 'Build powerful digital platforms for the modern web',
    button: 'Get started',
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const changeSlide = useCallback((index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide(index)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    changeSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, changeSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen()
        setIsFullscreen(true)
      } catch (err) {
        console.error('Error attempting to enable fullscreen:', err)
      }
    } else {
      try {
        await document.exitFullscreen()
        setIsFullscreen(false)
      } catch (err) {
        console.error('Error attempting to exit fullscreen:', err)
      }
    }
  }

  // Update fullscreen state when user uses Esc key
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={slides[currentSlide].video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative h-full">
            <div className="mx-auto h-full max-w-[1800px] px-10">
              <div className="flex h-full flex-col justify-between py-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-3xl pt-32 md:pt-48"
                >
                  <h1 className="text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
                    {slides[currentSlide].title}
                  </h1>
                  <div className="mt-8 flex items-center gap-4">
                    <button className="group flex items-center space-x-2 rounded-full border border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-black">
                      <span>{slides[currentSlide].button}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleFullscreen}
                      className="rounded-full border border-white text-white transition-colors hover:bg-white hover:text-black"
                    >
                      {isFullscreen ? (
                        <Minimize2 className="h-4 w-4" />
                      ) : (
                        <Maximize2 className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between pb-8"
                >
                  <div className="flex space-x-4">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => changeSlide(idx)}
                        className={`h-2 w-2 rounded-full transition-all ${
                          currentSlide === idx ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className="rounded-full border border-white p-4 text-white transition-colors hover:bg-white hover:text-black"
                    disabled={isTransitioning}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}