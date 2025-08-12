"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

interface HeroProps {
  title: string
  industry?: string
  imageUrl: string
}

export default function Hero({ title, industry, imageUrl }: HeroProps) {
  const { theme } = useTheme()

  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[500px] w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          priority
          style={{ objectFit: "cover" }}
          className="brightness-[0.85]"
        />
        <div className="absolute bottom-4 right-4">
          <button
            className="bg-[#4cd964] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[#3cb953] transition-colors"
            aria-label="Expand"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Title Overlay */}
      <div className="container mx-auto px-6">
        <div className="relative -mt-24 md:-mt-32 mb-12 z-10">
          <div
            className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} p-6 md:p-8 rounded-lg shadow-lg transition-colors duration-200`}
          >
            <div
              className={`flex flex-wrap text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-500"} mb-2 transition-colors duration-200`}
            >
              <span>Multichoiceagency Cases</span>
              {industry && (
                <>
                  <span className="mx-2">•</span>
                  <span>{industry}</span>
                </>
              )}
            </div>
            <h1
              className={`text-3xl md:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-[#333]"} transition-colors duration-200`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

