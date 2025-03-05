// pages/OfferteAanvraagPage.tsx
'use client';

import React from 'react';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import Link from 'next/link';

const testimonials = [
  {
    quote: "Snelle service en fixt het allemaal super snel! Thanks",
    name: "Fitbyemre Fitness",
  },
  {
    quote: "Levert uitstekend en professioneel werk",
    name: "anthony",
  },
  {
    quote: "Goede samenwerking met Enes, korte lijnen en mooi website als eindresultaat!",
    name: "Autoservice Maaspoort",
  },
  {
    quote: "Top Service. Altijd bereikbaar en erg behulpzaam",
    name: "Derya Aydın",
  },
  {
    quote: "Heeft een website met een top layout gemaakt!",
    name: "Abdullah Karaca",
  },
  {
    quote: "Hele strakke website gemaakt erg blij mee!",
    name: "kubilay yonyul",
  },
  {
    quote: "Fijne samenwerking met Enes, aardige gozer en snelle contactlijntjes",
    name: "Tijl Belt",
  },
  {
    quote: "Geef veel aandacht aan werk. Heel behulpzaam en verricht top werk!",
    name: "Ravinder Bindra",
  },
];

export default function OfferteAanvraagPage() {
  const handleAdviceButtonClick = () => {
    const googleButton = document.getElementById('googleCalendarButton');
    if (googleButton) {
      googleButton.click();
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Linkerkolom: Iframe met offerte aanvraag */}
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-2">
            Persoonlijke offerte ontvangen?
          </h2>
          <p className="text-gray-600 mb-6">
            Vraag hem hier aan. Je krijgt binnen 1 werkdag een reactie.
          </p>
          <iframe
            width="600"
            height="1000"
            src="https://projecten.mlt.multichoiceagency.nl/forms/quote/86dde4d027d53fd5b3ba634b439ccf92"
            frameBorder="0"
            sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
            allowFullScreen
            className="w-full h-[1000px]"
          />
        </div>

        {/* Rechterkolom: Sticky sectie met adviesinfo en reviews */}
        <div className="sticky top-0 space-y-6 lg:pl-8">
          {/* Adviesinfo en knop */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-2">Gratis adviesgesprek?</h3>
            <p className="text-green-700 mb-4">
              Bel ons gerust! <strong><Link href="tel:0103220410">010 322 04 10</Link></strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start space-x-2">
                <span className="text-yellow-500 text-xl">✓</span>
                <span>Ruim 1500 tevreden klanten</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-500 text-xl">✓</span>
                <span>Meer dan 15 jaar ervaring</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-500 text-xl">✓</span>
                <span>Klanten waarderen ons met een 9.6</span>
              </li>
            </ul>
            <button
              onClick={handleAdviceButtonClick}
              className="block bg-green-700 hover:bg-green-700 text-white text-center font-semibold py-2 px-4 rounded"
            >
              Gratis adviesgesprek aanvragen
            </button>
          </div>

          {/* Testimonials / Reviews */}
          <div className="bg-white p-4 rounded-md shadow-md w-full">
            <h4 className="text-xl font-bold mb-4 text-center">
              Tevreden Klanten
            </h4>
            <div className="h-[30vh] max-h-[30vh] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex items-center justify-center w-6 h-6">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-900">waardering:</span>
              <span className="font-medium text-gray-900">4.8</span>
              <span className="text-gray-600">van 5, gebaseerd op</span>
              <span className="font-medium text-gray-900">90 recensies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
