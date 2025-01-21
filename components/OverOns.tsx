"use client";

import React from "react";
import Image from "next/image";

export default function OverOns() {
  return (
    <section className="w-screen bg-white py-20 px-20 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 lg:aspect-auto">
          <Image
            src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Een professional werkt op een whiteboard"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Over ons
          </h2>
          <div className="h-1 w-16 bg-teal-700 mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            Wij maken maatwerk websites en helpen bedrijven groeien door sterke
            online strategieën te ontwikkelen en uit te voeren. Onze expertise
            op het gebied van webdesign, grafisch ontwerp en online marketing
            zorgt ervoor dat jouw bedrijf succesvol kan zijn op digitale
            kanalen.
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-800 transition-colors"
          >
            Over ons
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
