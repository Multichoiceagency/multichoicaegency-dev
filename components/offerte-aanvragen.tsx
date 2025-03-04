"use client";
import React from "react";

export default function OfferteAanvraagPage() {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Linkerkolom: Iframe */}
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-2">Persoonlijke offerte ontvangen?</h2>
          <p className="text-gray-600 mb-6">
            Vraag hem hier aan. Je krijgt binnen 1 werkdag een reactie.
          </p>

          {/* In plaats van het formulier gebruiken we nu het iframe */}
          <iframe
            width="600"
            height="850"
            src="https://projecten.mlt.multichoiceagency.nl/forms/quote/86dde4d027d53fd5b3ba634b439ccf92"
            frameBorder="0"
            sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
            allowFullScreen
            className="w-full h-[850px]" 
          />
        </div>

        {/* Rechterkolom: Extra info en review */}
        <div className="space-y-6 lg:pl-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Gratis adviesgesprek?</h3>
            <p className="text-gray-600 mb-4">
              Bel ons gerust! <strong>074 711 03 24</strong>
            </p>
            <ul className="space-y-2 text-gray-700">
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
          </div>

          {/* Voorbeeld van een review/testimonial */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center mb-2">
              <p className="font-bold">Ingrid van Doremalen</p>
              <div className="ml-2 flex space-x-1 text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              MooiOnline heeft mij geholpen met het gestalte geven van mijn nieuwe
              onderneming. Van ontwerp logo, tot ontwerp website en alle andere zaken
              die daarbij komen kijken.
            </p>
            <p className="text-xs text-gray-500">
              Geplaatst op <span className="ml-1 text-blue-500">Google</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
