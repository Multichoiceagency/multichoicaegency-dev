export const metadata = {
  title: "Multichoiceagency | Full Service Digital Agency Rotterdam",
  description:
    "Website laten maken? Multichoiceagency ontwikkelt professionele websites vanaf €1995. Design, development en automatisering onder één dak.",
  alternates: {
    canonical: "https://www.multichoiceagency.nl/",
  },
  openGraph: {
    title: "Multichoiceagency | Maatwerk Website laten maken vanaf €1995",
    description:
      "Full service digital agency voor webdesign, maatwerk development en AI-oplossingen. Binnen 5 werkdagen live.",
    url: "https://www.multichoiceagency.nl/",
    siteName: "Multichoiceagency",
    images: [
      {
        url: "https://www.multichoiceagency.nl/website-laten-maken.png", // Zorg dat dit in /public staat
        width: 1200,
        height: 630,
        alt: "Multichoiceagency – Maatwerk Website laten maken",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multichoiceagency | Website laten maken vanaf €1995",
    description:
      "Design, development en AI-oplossingen voor resultaatgerichte websites. Binnen 5 werkdagen live.",
    images: ["https://www.multichoiceagency.nl/website-laten-maken.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

import Portfolio from "@/components/cases-display"
import ScrollTextFill from "@/components/scroll-text-fill"
import ServicesSection from "@/components/services-section"
import AIAutomationSection from "@/components/ai-automation-section"
import AutomationServices from "@/components/automation-services"
import ReviewSection from "@/components/review-section"
import CTASection from "@/components/cta-section"
import HeroSection from "@/components/Hero-section"
import WhyChooseMultichoice from "@/components/over-multichoiceagency"
import TeamSection from "@/components/team-section"

export default function Home() {
  return (
    <>
      {/* ✅ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Website laten maken",
            provider: {
              "@type": "Organization",
              name: "Multichoiceagency",
              url: "https://www.multichoiceagency.nl",
              logo: "https://www.multichoiceagency.nl/logo.svg",
              sameAs: [
                "https://www.linkedin.com/company/multichoiceagency/",
                "https://www.instagram.com/multichoiceagency/",
                "https://www.facebook.com/profile.php?id=61553986303783"
              ]
            },
            areaServed: {
              "@type": "Country",
              name: "Nederland"
            },
            description:
              "Multichoiceagency bouwt professionele maatwerk websites vanaf €799. Binnen 5 werkdagen live, volledig responsive, SEO geoptimaliseerd en voorzien van onderhoud en support.",
            offers: {
              "@type": "Offer",
              price: "1995.00",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock"
            }
          }),
        }}
      />

      <main className="overflow-x-hidden">
        <HeroSection
          videoSrc="/partners/ui.mp4"
          title="Jouw digitale verhaal, krachtig verteld."
          description="Full-service digitale expertise in design, ontwikkeling & marketing – volledig afgestemd op jouw merkverhaal."
          buttonText="Gratis Offerte"
          buttonLink="/offerte-aanvragen"
        />
        <ScrollTextFill />
        <ServicesSection />
        <WhyChooseMultichoice />
        <AutomationServices />
        <TeamSection />
        <AIAutomationSection />
        <ReviewSection />
        <CTASection />
        <Portfolio />
      </main>
    </>
  )
}
