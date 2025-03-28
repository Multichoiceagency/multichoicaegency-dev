import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Unbounded } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"
import GoogleCalendarButton from "@/components/GoogleCalenderButton"
import { Header } from "@/components/header"
import ScrollToTop from "@/components/ScrollToTop"
import QuoteButton from "@/components/OfferteAanvraagKnop"
import FloatingSocialIcons from "@/components/FloatingSocialicons"
import LiveChat from "@/components/livechat"

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
        <ThemeProvider attribute="class" defaultTheme="auto" enableSystem>
            <FloatingSocialIcons />
            <LiveChat />
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
            <GoogleCalendarButton />
            <QuoteButton />
        </ThemeProvider>
      </body>
    </html>
  )
}