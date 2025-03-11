'use client'
import Link from 'next/link';
import { Button } from './ui/button';

const QuoteButton = () => {
  return (
    <>
      {/* Offerte Aanvragen Knop rechts onderaan */}
      <Link href="/offerte-aanvragen">
        <Button className="fixed bottom-4 right-32 z-50 bg-green-700 uppercase font-bold text-sm text-white hover:bg-green-900 dark:hover:bg-green-900 active:animate-clickButton transition transform hover:shadow-lg">
          Offerte aanvragen
        </Button>
      </Link>
      
      {/* Custom CSS voor de klik-animatie */}
      <style jsx>{`
        @keyframes clickButton {
          0% { transform: scale(1); }
          50% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        /* Deze class wordt toegepast als de knop actief is */
        .active\\:animate-clickButton:active {
          animation: clickButton 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default QuoteButton;
