import "./globals.css";
import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";
import GoogleCalendarButton from "@/components/GoogleCalenderButton";
import { Header } from "@/components/header";
import ScrollToTop from "@/components/ScrollToTop";
import LiveChat from "@/components/livechat";

// Importeer PT Sans met de gewenste subsets en gewicht(en)
const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Voeg hier de gewenste diktes toe
});

export const metadata: Metadata = {
  title: "Multichoiceagency",
  description: "Jouw online maatwerk en website specialisten",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        {/* Manifest voor PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Icons voor verschillende platforms */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* Theme kleur voor browsers */}
        <meta name="theme-color" content="#134E4A" />

        {/* Meta-gegevens voor PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta
          name="apple-mobile-web-app-title"
          content="Multichoiceagency App"
        />
      </head>
      {/* Gebruik de ptSans-className om PT Sans toe te passen op de body */}
      <body className={ptSans.className}>
        <ScrollToTop />
        <ThemeProvider attribute="class" defaultTheme="auto" enableSystem>
          <Header />
          {children}
          <Footer />
          <GoogleCalendarButton />
          <LiveChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
