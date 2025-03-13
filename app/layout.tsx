import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Unbounded } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"
import GoogleCalendarButton from "@/components/GoogleCalenderButton"
import { Header } from "@/components/header"
import ScrollToTop from "@/components/ScrollToTop"
import QuoteButton from "@/components/OfferteAanvraagKnop"
import SmoothScrolling from "@/components/SmoothScrolling";
import FloatingSocialIcons from "@/components/FloatingSocialicons"
import LiveChat from "@/components/livechat"

// ✅ Google Font configuratie
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "Multichoiceagency",
  description: "Multichoiceagency website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        {/* ✅ PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* ✅ Icons voor verschillende platforms */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* ✅ Theme kleur voor browsers */}
        <meta name="theme-color" content="#134E4A" />

        {/* ✅ Meta-gegevens voor PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Multichoiceagency App" />
      </head>

      <body className={unbounded.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="auto" enableSystem>
            <ScrollToTop />
            <FloatingSocialIcons />
            <LiveChat />
            <Header /><SmoothScrolling>
            {children}</SmoothScrolling>
            <Footer />
            <GoogleCalendarButton />
            <QuoteButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

