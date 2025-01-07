import './globals.css';
import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/Footer';

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
    <html lang="en">
      <body className={hankenGrotesk.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="auto"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
