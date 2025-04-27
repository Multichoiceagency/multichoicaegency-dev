import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleCalendarButton from "@/components/GoogleCalenderButton"
import { Header } from "@/components/header"
import ScrollToTop from "@/components/ScrollToTop"
import FloatingSocialIcons from "@/components/FloatingSocialicons"
import SmoothScroll from "@/components/Smooth-scroll"
import FooterSection from "@/components/footer-section"
import Script from "next/script"

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
          <Header />
          <SmoothScroll>
            <main>{children}</main>
            <Script
          src="https://api.lindy.ai/api/lindyEmbed/lindyEmbed.js?a=1215665e-af0b-4ff6-ba9f-8aa4946a1002"
          strategy="afterInteractive"
          crossOrigin="use-credentials"
        />
            <FooterSection />
            </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
