"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Link from "next/link";

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

export function Testimonials() {
  return (
    <section className="pt-20 bg-white dark:bg-gray-900 w-screen overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">Tevreden Klanten</h2>
        <div className="h-[30vh] max-h-[30vh] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="text-center pb-5">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center w-6 h-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <span className="font-medium text-gray-900 dark:text-white">waardering: </span>
            <span className="font-medium text-gray-900 dark:text-white">4.8</span>
            <span className="text-gray-600 dark:text-gray-400">van 5, gebaseerd op</span>
            <span className="font-medium text-gray-900 dark:text-white">90 recensies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

