import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Host_Grotesk as hostGroteskFont } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleCalendarButton from "@/components/GoogleCalenderButton";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingSocialIcons from "@/components/FloatingSocialicons";
import FooterSection from "@/components/footer-section";
import ChatBot from "@/components/chatbot";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import { Header } from "@/components/header";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import AuditPopup from "@/components/AuditPopup";
import CrispChat from "@/components/CrispChat";
import InstallPrompt from "@/components/InstallPrompt";

const hostGrotesk = hostGroteskFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Multichoiceagency",
  description: "High-performance websites en AI-gedreven oplossingen.",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/web-app-manifest-192x192.png",
    apple: "/web-app-manifest-512x512.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="6jc9l_KAuOW7oqBYo2vMNHPwpaDZFDtS-5YSZ5ZotWU"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Multichoiceagency.nl"
        />
        <meta name="theme-color" content="#406034" />
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
      <body
        className={`${hostGrotesk.className} smooth-scroll`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
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
            <InstallPrompt />
            <CrispChat />
            <FooterSection />
          </SmoothScrollProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-FJVX8934WM" />
      </body>
    </html>
  );
}
