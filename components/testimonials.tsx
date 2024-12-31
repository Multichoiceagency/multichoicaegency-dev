"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  initial: string;
  date: string;
  rating: number;
  text: string;
  avatarColor: string;
  ownerReply?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Fitbyemre Fitness",
    initial: "F",
    date: "14 weken geleden",
    rating: 5,
    text: "Snelle service en fixt het allemaal super snel! Thanks",
    avatarColor: "bg-blue-500"
  },
  {
    id: 2,
    name: "anthony",
    initial: "A",
    date: "26 weken geleden",
    rating: 5,
    text: "Levert uitstekend en professioneel werk",
    avatarColor: "bg-green-500"
  },
  {
    id: 3,
    name: "Autoservice Maaspoort",
    initial: "A",
    date: "33 weken geleden",
    rating: 5,
    text: "Goede samenwerking met Enes, korte lijnen en mooi website als eindresultaat!",
    avatarColor: "bg-yellow-500",
    ownerReply: "Wat geweldig om te horen dat de samenwerking met Enes zo goed verliep en dat jullie tevreden zijn met het eindresultaat..."
  },
  {
    id: 4,
    name: "Derya Aydın",
    initial: "D",
    date: "50 weken geleden",
    rating: 5,
    text: "Top Service. Altijd bereikbaar en erg behulpzaam",
    avatarColor: "bg-red-500",
    ownerReply: "We waarderen uw positieve feedback en zullen blijven werken om u de beste service te bieden. Bedankt voor uw vertrouwen in ons."
  },
  {
    id: 5,
    name: "Abdullah Karaca",
    initial: "A",
    date: "51 weken geleden",
    rating: 5,
    text: "Heeft een website met een top layout gemaakt!",
    avatarColor: "bg-purple-500",
    ownerReply: "We zijn blij om te horen dat u tevreden bent met de lay-out van de website. Uw feedback wordt zeer op prijs gesteld. Dank je!"
  },
  {
    id: 6,
    name: "kubilay yonyul",
    initial: "K",
    date: "15 nov 2023",
    rating: 5,
    text: "Hele strakke website gemaakt erg blij mee!",
    avatarColor: "bg-indigo-500",
    ownerReply: "We zijn blij dat u tevreden bent met uw nieuwe website! Dank u voor uw positieve feedback. We streven ernaar om altijd de beste service te bieden. We hopen dat je meer auto's nu zal verkopen!"
  },
  {
    id: 7,
    name: "Tijl Belt",
    initial: "T",
    date: "27 mei 2023",
    rating: 5,
    text: "Fijne samenwerking met Enes, aardige gozer en snelle contactlijntjes",
    avatarColor: "bg-pink-500",
    ownerReply: "Jij zeker ook Tijl bedankt!"
  },
  {
    id: 8,
    name: "Ravinder Bindra",
    initial: "R",
    date: "15 mei 2023",
    rating: 5,
    text: "Geef veel aandacht aan werk. Heel behulpzaam en verricht top werk!",
    avatarColor: "bg-teal-500",
    ownerReply: "Super bedankt Ravinder, we kijken ernaar uit om jouw bedrijf te latem groeien online!"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  }, [Autoplay()]);
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Tevreden Klanten</h2>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div key={review.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white text-lg font-semibold mr-3`}>
                        {review.initial}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">{review.name}</h3>
                          <div className="flex items-center justify-center w-6 h-6">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">{review.text}</p>
                    {review.ownerReply && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Reactie van eigenaar:</span> {review.ownerReply}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200"
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center w-6 h-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <span className="font-medium">waardering: </span>
            <span className="font-medium">4.8</span>
            <span className="text-gray-600">van 5, gebaseerd op</span>
            <span className="font-medium">90 recensies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

