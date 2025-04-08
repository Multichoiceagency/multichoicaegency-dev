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
import FloatingSocialIcons from "@/components/FloatingSocialicons"
import LiveChat from "@/components/livechat"
import SmoothScroll from "@/components/Smooth-scroll"

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
      <body className={`${unbounded.className} smooth-scroll`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* Fixed elements outside of smooth scroll */}
          <FloatingSocialIcons />
          <LiveChat />
          <ScrollToTop />
          <GoogleCalendarButton />
          <QuoteButton />

          {/* Header outside of smooth scroll */}
          <Header />

          {/* Content with smooth scrolling */}
          <SmoothScroll>
            <main>{children}</main>
            {/* Include Footer inside SmoothScroll to ensure proper height calculation */}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
