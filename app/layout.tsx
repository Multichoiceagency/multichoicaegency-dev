import './globals.css';
import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/Footer';
import GoogleCalendarButton from '@/components/GoogleCalenderButton';

// Initialize Hanken Grotesk
const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Multichoiceagency',
  description: 'Jouw online maatwerk en website specialisten',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={hankenGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="auto"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <GoogleCalendarButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
