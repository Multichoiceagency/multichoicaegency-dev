"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Award,
  CheckCircle,
  Clock,
  Star,
  Trophy,
  Briefcase,
  BarChart3,
  Palette,
  FileCheck,
  Dribbble,
  Search,
  ChevronDown,
  ExternalLink,
} from "lucide-react"

interface ReviewsProps {
  className?: string
}

export const Reviews: React.FC<ReviewsProps> = ({ className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const reviews = [
    {
      icon: <Briefcase className="w-12 h-12" />,
      name: "Upwork",
      details: [
        { icon: <CheckCircle className="w-4 h-4" />, text: "100% Succes bij Opdrachten" },
        { icon: <Award className="w-4 h-4" />, text: "Expert-Geverifieerd Badge" },
        { icon: <Clock className="w-4 h-4" />, text: "4.000+ uren gewerkt" },
      ],
      link: "https://www.upwork.com",
      extraContent:
        "We hebben meer dan 200 projecten op Upwork voltooid met een perfect succespercentage en behouden onze Top Rated Plus status.",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      name: "Clutch",
      details: [
        { icon: <Star className="w-4 h-4" />, text: "Gemiddelde Beoordeling: 5,00" },
        { icon: <CheckCircle className="w-4 h-4" />, text: "Geverifieerde Reviews: 55" },
        { icon: <Trophy className="w-4 h-4" />, text: "Top 1000 bureaus op Clutch: 2023" },
        { icon: <Award className="w-4 h-4" />, text: "Global Spring Winnaar: 2024" },
      ],
      link: "https://clutch.co",
      extraContent:
        "Onze klanten geven ons consequent 5 sterren voor onze uitzonderlijke service, communicatie en kwaliteit van werk.",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      name: "Behance",
      details: [
        { icon: <Award className="w-4 h-4" />, text: "UI/UX Award Badge Winnaar" },
        { icon: <Trophy className="w-4 h-4" />, text: "De InDesign Award" },
        { icon: <Star className="w-4 h-4" />, text: "Uitgelicht in Stock" },
      ],
      link: "https://www.behance.net",
      extraContent: "Ons ontwerpwerk is bekroond met meerdere awards en uitgelicht in Behance galerijen.",
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      name: "GoodFirms",
      details: [
        { icon: <Star className="w-4 h-4" />, text: "5,00 Feedback Beoordeling" },
        { icon: <CheckCircle className="w-4 h-4" />, text: "16 Reviews" },
      ],
      link: "https://www.goodfirms.co",
      extraContent:
        "GoodFirms heeft ons erkend als een top ontwikkelingspartner op basis van onze technische expertise en klanttevredenheid.",
    },
    {
      icon: <Search className="w-12 h-12" />,
      name: "Google",
      details: [
        { icon: <Star className="w-4 h-4" />, text: "4,9 Sterren Beoordeling" },
        { icon: <CheckCircle className="w-4 h-4" />, text: "120+ Reviews" },
        { icon: <Award className="w-4 h-4" />, text: "Google Partner" },
      ],
      link: "https://www.google.com",
      extraContent: "Als Google Partner hanteren wij de hoogste standaarden in digitale marketing en SEO-praktijken.",
    },
    {
      icon: <Dribbble className="w-12 h-12" />,
      name: "Dribbble",
      details: [
        {
          icon: <Star className="w-4 h-4" />,
          text: "We hebben de top nog niet bereikt, maar we werken er actief aan.",
        },
      ],
      link: "https://dribbble.com",
      extraContent: "Ons ontwerpteam verbetert zich voortdurend en deelt ons werk met de Dribbble-community.",
    },
  ]

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className={cn("py-0 bg-[#F9F9F9] dark:bg-gray-900", className)}>
      <div className="container mx-auto px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-center py-6 tracking-tight uppercase border-b border-gray-200 dark:border-gray-700">
          Wat onze klanten over ons zeggen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className={cn(
                "relative border border-gray-200 dark:border-gray-700 p-8 transition-all duration-300 flex flex-col items-center cursor-pointer",
                hoveredIndex === index ? "bg-green-700 text-white" : "",
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(index)}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <div className="mb-4">{review.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{review.name}</h3>
              <ul className="space-y-2 w-full">
                {review.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2">
                    {detail.icon}
                    <span className="text-sm">{detail.text}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                className="mt-4 flex items-center gap-1 text-sm font-medium"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {expandedIndex === index ? "Klik om te sluiten" : "Klik voor meer info"}
                <ChevronDown
                  className={cn("w-4 h-4 transition-transform", expandedIndex === index ? "rotate-180" : "")}
                />
              </motion.div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-sm"
                  >
                    <p className="mb-3">{review.extraContent}</p>
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-medium hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Bezoek {review.name} <ExternalLink className="w-3 h-3" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

