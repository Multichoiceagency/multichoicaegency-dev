"use client"

import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4 py-36">
      <div className="container max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8 relative">
          <div className="inline-block relative">
            <svg
              className="w-48 h-48 md:w-64 md:h-64"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Circle/Face */}
              <circle cx="100" cy="100" r="96" stroke="#BEF264" strokeWidth="8" className="animate-pulse" />

              {/* Eyes */}
              <circle cx="65" cy="80" r="12" fill="#022C22" className="animate-[blink_2.5s_ease-in-out_infinite]" />
              <circle cx="135" cy="80" r="12" fill="#022C22" className="animate-[blink_2.5s_ease-in-out_infinite]" />

              {/* Smile */}
              <path
                d="M60 125C60 125 80 145 100 145C120 145 140 125 140 125"
                stroke="#022C22"
                strokeWidth="8"
                strokeLinecap="round"
                className="animate-[smile_5s_ease-in-out_infinite]"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-green-900">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pagina niet gevonden</h2>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          De pagina die je zoekt bestaat niet of is verplaatst. Controleer of je de juiste URL hebt ingevoerd of ga
          terug naar de homepagina.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center py-4 px-6 bg-green-900 text-white font-semibold rounded-full text-lg hover:bg-green-700 transition duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Terug naar home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center py-4 px-6 border border-green-900 text-green-900 font-semibold rounded-full text-lg hover:bg-green-50 transition duration-300"
          >
            <Search className="mr-2 h-5 w-5" />
            Zoek op onze site
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-bold mb-4">Misschien vind je deze pagina's interessant:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/website-laten-maken" className="text-green-700 hover:text-green-900 hover:underline">
              Website laten maken
            </Link>
            <Link
              href="/woocommerce-webshop-laten-maken"
              className="text-green-700 hover:text-green-900 hover:underline"
            >
              WooCommerce webshop
            </Link>
            <Link href="/portfolio" className="text-green-700 hover:text-green-900 hover:underline">
              Portfolio
            </Link>
            <Link href="/offerte-aanvragen" className="text-green-700 hover:text-green-900 hover:underline">
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </div>
      {/* Custom animations */}
      <style jsx global>{`
      @keyframes blink {
        0%, 100% { opacity: 1; }
        15% { opacity: 1; }
        20% { opacity: 0.1; }
        25% { opacity: 1; }
      }
      
      @keyframes smile {
        0%, 100% { transform: scaleX(1); }
        50% { transform: scaleX(1.1) scaleY(1.1); }
      }
    `}</style>
    </div>
  )
}

