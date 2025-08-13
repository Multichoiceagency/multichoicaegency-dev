import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleCalendarButton from "@/components/GoogleCalenderButton"
import ScrollToTop from "@/components/ScrollToTop"
import FloatingSocialIcons from "@/components/FloatingSocialicons"
import FooterSection from "@/components/footer-section"
import ChatBot from "@/components/chatbot"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import { Header } from "@/components/header"
import { GoogleAnalytics } from '@next/third-parties/google'

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

// ✅ VERPLICHT voor correcte Open Graph en Twitter image URLs
export const metadata: Metadata = {
  metadataBase: new URL('https://www.multichoiceagency.nl'), // <-- verander naar je productie-URL
  title: {
    default: "Multichoiceagency",
    template: "%s | Multichoiceagency",
  },
  // <meta name="google-site-verification" content="6jc9l_KAuOW7oqBYo2vMNHPwpaDZFDtS-5YSZ5ZotWU" />, // Moved to <head>
  description: "Maatwerk websites en digitale oplossingen, gebouwd met moderne technologie voor maximale impact.",
  keywords: ["maatwerk websites", "Next.js", "digital agency", "headless cms", "webdesign", "webdevelopment"],
  openGraph: {
    title: "Multichoiceagency",
    description: "Maatwerk websites en digitale oplossingen, gebouwd met moderne technologie voor maximale impact.",
    url: "https://www.multichoiceagency.nl",
    siteName: "Multichoiceagency",
    images: [
      {
        url: "/apple-icon.png", // <-- Zorg dat deze image bestaat in je /public map
        width: 1080,
        height: 1080,
        alt: "Multichoiceagency preview",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multichoiceagency",
    description: "Maatwerk websites en digitale oplossingen, gebouwd met moderne technologie voor maximale impact.",
    images: ["/logos/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        {/* Eventueel extra meta's hier */}
        <meta name="google-site-verification" content="6jc9l_KAuOW7oqBYo2vMNHPwpaDZFDtS-5YSZ5ZotWU" />
      </head>
      <body className={`${manrope.className} smooth-scroll`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScrollProvider>
            <FloatingSocialIcons />
            <ScrollToTop />
            <Header />
            <main>
              {children}
              <ChatBot />
              <GoogleCalendarButton />
            </main>
            <FooterSection />
          </SmoothScrollProvider>
        </ThemeProvider>

        {/* Optional: Google Analytics ID, bijv. G-XXXXXXXX */}
        <GoogleAnalytics gaId="G-FJVX8934WM" />
      </body>
    </html>
  )
}
