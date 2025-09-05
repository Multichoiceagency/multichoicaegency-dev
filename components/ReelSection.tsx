'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import Link from 'next/link'

interface Reel {
  src: string
  poster?: string
  title?: string
  description?: string
}

const reels: Reel[] = [
  {
    src: '/video/reel-multichoiceagency.mp4',
    poster: '/posters/reel1.jpg',
    title: 'Multichoice Agency – Digitale Strategie & Creatie',
    description:
      'Wij bouwen converterende websites, krachtige webapplicaties en marketingcampagnes die jouw merk laten groeien. Van design tot deployment.',
  },
]

export default function ReelSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [muted, setMuted] = useState(true)

  const toggleMute = () => {
    setMuted((prev) => {
      const newMute = !prev
      videoRefs.current.forEach((video) => {
        if (video) video.muted = newMute
      })
      return newMute
    })
  }

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = muted
        video.play().catch(() => {})
      }
    })
  }, [muted])

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in')
          }
        }),
      { threshold: 0.3 }
    )

    const zoomElements = document.querySelectorAll('.zoom-target')
    zoomElements.forEach((el) => observer.observe(el))
    return () => zoomElements.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section className="bg-[#1a2a18] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-block bg-[#2D4625] text-white text-sm px-3 py-1 rounded-full mb-4">
          🎥 Multichoice Agency In Actie
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Ontdek wat we voor jouw merk kunnen doen.
        </h2>
        <p className="text-white/70 max-w-xl mx-auto">
          Strategie, design en development onder één dak. Dit is hoe wij impact maken voor onze klanten.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-10">
        {reels.map((reel, i) => (
          <div
            key={i}
            className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-xl group bg-black transform scale-95 transition-transform duration-1000 ease-out zoom-target"
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el
              }}
              src={reel.src}
              poster={reel.poster}
              autoPlay
              muted={muted}
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 z-10">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{reel.title}</h3>
              <p className="text-white/80 text-sm line-clamp-2">{reel.description}</p>

              <div className="flex items-center gap-4 mt-4">
                <Link
                  href="/contact"
                  className="inline-flex px-4 py-2 rounded-full bg-[#a6e267] text-[#1a2a18] text-sm font-medium hover:bg-[#b7ee79] transition"
                >
                  Gratis adviesgesprek
                </Link>
                <button
                  onClick={toggleMute}
                  className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animaties */}
      <style jsx global>{`
        .zoom-target {
          opacity: 0;
          transform: scale(0.92);
        }
        .zoom-in {
          opacity: 1;
          transform: scale(1);
          transition: transform 1s ease, opacity 1s ease;
        }
      `}</style>
    </section>
  )
}
