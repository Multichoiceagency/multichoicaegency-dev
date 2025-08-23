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
import Script from "next/script"
import AuditPopup from "@/components/AuditPopup"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.multichoiceagency.nl'),
  title: {
    default: "Multichoiceagency",
    template: "%s | Multichoiceagency",
  },
  description: "Maatwerk websites en digitale oplossingen, gebouwd met moderne technologie voor maximale impact.",
  keywords: ["maatwerk websites", "Next.js", "digital agency", "headless cms", "webdesign", "webdevelopment"],
  openGraph: {
    title: "Multichoiceagency",
    description: "Maatwerk websites en digitale oplossingen, gebouwd met moderne technologie voor maximale impact.",
    url: "https://www.multichoiceagency.nl",
    siteName: "Multichoiceagency",
    images: [
      {
        url: "/apple-icon.png",
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
        <meta name="google-site-verification" content="6jc9l_KAuOW7oqBYo2vMNHPwpaDZFDtS-5YSZ5ZotWU" />

        {/* ✅ Google Ads Conversion Tracking */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10834373104"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10834373104');
          `}
        </Script>

        {/* ✅ Hotjar Tracking Code */}
        <Script id="hotjar-init" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6501390,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body className={`${manrope.className} smooth-scroll`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScrollProvider>
            <FloatingSocialIcons />
            <AuditPopup />
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

        {/* ✅ Google Analytics Tracking (GA4) */}
        <GoogleAnalytics gaId="G-FJVX8934WM" />
      </body>
    </html>
  )
}
