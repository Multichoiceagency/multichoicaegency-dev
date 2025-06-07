import type { Metadata } from "next" // Added for SEO
import WebDevelopmentClientPage from "./WebDevelopmentClientPage"

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const title = "Webdevelopment Diensten | Strategisch Ontwerp & Slimme Oplossingen"
  const description =
    "Ontdek onze webdevelopment diensten: van high-performance websites en complexe webshops tot schaalbare maatwerk portalen. Wij bouwen digitale platformen die werken."
  const ogImageUrl = "/webdevelopment-multichoice.png" // Replace with your actual OG image URL

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      url: "https://www.multichoiceagency.nl/webdevelopment", // Replace with your actual URL
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Professioneel Webdevelopment door Multichoiceagency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImageUrl],
    },
    // You can add more metadata here like keywords, canonical URL, etc.
  }
}

export default function WebDevelopmentPage() {
  return <WebDevelopmentClientPage />
}
