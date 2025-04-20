import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleCalendarButton from "@/components/GoogleCalenderButton"
import { Header } from "@/components/header"
import ScrollToTop from "@/components/ScrollToTop"
import QuoteButton from "@/components/OfferteAanvraagKnop"
import FloatingSocialIcons from "@/components/FloatingSocialicons"
import SmoothScroll from "@/components/Smooth-scroll"
import FooterSection from "@/components/footer-section"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Multichoiceagency",
  description: "Multichoiceagency website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${manrope.className} smooth-scroll`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* Fixed elements outside of smooth scroll */}
          <FloatingSocialIcons />
          <ScrollToTop />
          <GoogleCalendarButton />
          <QuoteButton />
          <Header />
          <SmoothScroll>
            <main>{children}</main>
            <FooterSection />
            </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
