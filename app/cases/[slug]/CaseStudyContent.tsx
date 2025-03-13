"use client"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import ProjectGallery from "./ProjectGallery"
import ClientInfo from "./ClientInfo"
import ProjectResults from "./ProjectResults"
import Hero from "./Hero"
import Portfolio from "@/components/cases-display"
import Oplossingen from "@/components/oplossingen"

export interface CaseStudy {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  slug: string
  date: string
  acf?: {
    location?: string
    industry?: string
    media_type?: "video" | "image"
    video_url?: string
    tags?: string
    category?: string
    description?: string
    quote?: string
    quote_author?: string
    client_logo?: string
    project_images?: Array<{
      url: string
      alt: string
    }>
    project_results?: Array<{
      title: string
      description: string
    }>
  }
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
    }>
  }
}

export interface CaseStudyContentProps {
  content: CaseStudy
  allCaseStudies: CaseStudy[]
}

// Helper function to decode HTML entities
const decodeHtml = (html: string): string => {
  const txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

export default function CaseStudyContent({ content, allCaseStudies }: CaseStudyContentProps) {
  const { theme } = useTheme()

  // Get related cases (excluding current case)
  const relatedCases = allCaseStudies.filter((cs) => cs.id !== content.id).slice(0, 3)

  // Stock photos from Pexels for additional imagery
  const stockPhotos = [
    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg",
  ]

  // Prepare gallery images
  const galleryImages = content.acf?.project_images || [
    {
      url: content._embedded?.["wp:featuredmedia"]?.[0]?.source_url || stockPhotos[0],
      alt: decodeHtml(content.title.rendered),
    },
    { url: stockPhotos[1], alt: "Project image 2" },
    { url: stockPhotos[2], alt: "Project image 3" },
  ]

  // Prepare project results
  const projectResults = content.acf?.project_results || [
    {
      title: "Verbeterde conversie",
      description: "Door de nieuwe aanpak is de conversie van bezoekers naar sollicitanten significant verbeterd.",
    },
    {
      title: "Hogere kwaliteit sollicitaties",
      description: "De kwaliteit van de binnenkomende sollicitaties is aanzienlijk toegenomen.",
    },
    {
      title: "Betere candidate experience",
      description: "Kandidaten waarderen de verbeterde gebruikerservaring en duidelijke communicatie.",
    },
    {
      title: "Efficiënter recruitmentproces",
      description: "Het recruitmentproces verloopt nu sneller en efficiënter dan voorheen.",
    },
  ]

  // Get the featured image URL
  const featuredImageUrl = content._embedded?.["wp:featuredmedia"]?.[0]?.source_url || stockPhotos[0]

  return (
    <div
      className={`${theme === "dark" ? "bg-gray-900" : "bg-[#f8f9f6]"} min-h-screen pb-20 transition-colors duration-200`}
    >
      {/* Hero Section with Image Above Title */}
      <Hero title={decodeHtml(content.title.rendered)} industry={content.acf?.industry} imageUrl={featuredImageUrl} />

      {/* Main Content Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2">
            <div
              className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-lg overflow-hidden p-6 md:p-8 mb-8 transition-colors duration-200`}
            >
              <div
                className={`prose max-w-none ${theme === "dark" ? "prose-invert" : ""}`}
                dangerouslySetInnerHTML={{ __html: content.content.rendered }}
              />

              {content.acf?.quote && (
                <div
                  className={`mt-8 p-6 ${theme === "dark" ? "bg-gray-700" : "bg-gray-50"} rounded-lg transition-colors duration-200`}
                >
                  <blockquote
                    className={`text-lg font-medium italic ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    "{content.acf.quote}"
                  </blockquote>
                  {content.acf?.quote_author && (
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"} mt-2`}>
                      - {content.acf.quote_author}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - 1/3 width on large screens */}
          <div className="lg:col-span-1">
            {/* Client Info */}
            <ClientInfo
              clientName={content.acf?.quote_author || "Client Name"}
              industry={content.acf?.industry || "Uncategorized"}
              projectDate={content.date}
              logonew={content.acf?.client_logo || ""}
              featuredImage={featuredImageUrl}
            />

            {/* Tags */}
            <div
              className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-md mt-6 transition-colors duration-200`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.acf?.industry && (
                  <span
                    className={`inline-block ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"} rounded-full px-3 py-1 text-xs transition-colors duration-200`}
                  >
                    {content.acf.industry}
                  </span>
                )}
                {content.acf?.location && (
                  <span
                    className={`inline-block ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"} rounded-full px-3 py-1 text-xs transition-colors duration-200`}
                  >
                    {content.acf.location}
                  </span>
                )}
                {content.acf?.tags &&
                  content.acf.tags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className={`inline-block ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"} rounded-full px-3 py-1 text-xs transition-colors duration-200`}
                    >
                      {tag.trim()}
                    </span>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#1e3a29] text-white p-6 rounded-lg mt-6">
              <p className="text-[#4cd964] mb-2">Geïnteresseerd?</p>
              <h2 className="text-xl font-bold mb-4">Bekijk onze diensten</h2>
              <Link
                href="/diensten"
                className="bg-[#4cd964] text-white py-2 px-6 rounded-full inline-block w-max hover:bg-[#3cb953] transition-colors"
              >
                Bekijk diensten
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio and Solutions sections */}
      <div>
        <Portfolio />
      </div>
      <div>
        <Oplossingen />
      </div>
    </div>
  )
}
