"use client";

import React, { useState, useEffect } from "react";

type ExitIntentPopupProps = {
  /** Schakel de popup in of uit */
  enabled: boolean;
  /** URL naar je achtergrondafbeelding */
  backgroundImageUrl: string;
};

export default function ExitIntentPopup({
  enabled = false,
  backgroundImageUrl,
}: ExitIntentPopupProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!enabled) return; // Als popup uitgeschakeld is, doe niets.

    function handleMouseOut(e: MouseEvent) {
      // Check of de muis bovenaan (y < 10) het scherm verlaat.
      if (e.clientY < 10) {
        setShowPopup(true);
      }
    }

    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [enabled]);

  if (!enabled || !showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Popup container, met achtergrondafbeelding */}
      <div
        className="relative w-full max-w-lg p-6 rounded-lg bg-white shadow-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Sluitknop */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-black bg-white bg-opacity-70 hover:bg-opacity-100 px-2 py-0.5 rounded"
        >
          ✕
        </button>

        {/* Teksten en CTA-knop */}
        <div className="bg-white bg-opacity-80 p-4 rounded-md">
          <h2 className="font-bold text-2xl mb-2">Wacht..hoe goed scoor jij in Google?</h2>
          <p className="mb-4">
            Om beter vindbaar te worden is het belangrijk om te weten hoe goed je op dit moment
            vindbaar bent. Ontdek wat jouw meest succesvolle zoekwoorden en pagina’s zijn en kom er
            achter wat jij nog beter kunt doen!
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
            Krijg gratis toegang →
          </button>
          <p className="text-sm mt-2 font-bold">Tijdelijk gratis t.w.v. € 49,99</p>
        </div>
      </div>
    </div>
  );
}
