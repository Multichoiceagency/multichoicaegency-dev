"use client";

import { useState, useEffect, useRef, JSX } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Case {
  id: number;
  title: { rendered: string };
  slug: string;
  featured_media: number;
  acf?: {
    location?: string;
    industry?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      media_details?: {
        sizes?: {
          full?: { source_url: string };
          large?: { source_url: string };
          medium?: { source_url: string };
        };
      };
    }>;
  };
}

// Helperfunctie om HTML-entiteiten te decoderen
function decodeHtml(html: string): string {
  if (typeof window !== "undefined") {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  return html;
}

function getImageUrl(caseItem: Case): string {
  const featuredMedia = caseItem._embedded?.["wp:featuredmedia"]?.[0];
  if (!featuredMedia) {
    console.warn(`No featured media for case ${caseItem.id}`);
    return "/placeholder.svg";
  }
  const sizes = featuredMedia.media_details?.sizes;
  return (
    sizes?.full?.source_url ||
    sizes?.large?.source_url ||
    sizes?.medium?.source_url ||
    featuredMedia.source_url ||
    "/placeholder.svg"
  );
}

export default function CaseSlider(): JSX.Element {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Refs voor container en slider
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  // Berekende drag-ruimte
  const [dragWidth, setDragWidth] = useState(0);
  // Animation controls voor de slider
  const controls = useAnimation();

  // Stel de kaartbreedte en spacing in
  const SLIDE_WIDTH = 400;
  const SLIDE_SPACING = 48; // overeenkomend met space-x-12 (48px)
  const EFFECTIVE_SLIDE_WIDTH = SLIDE_WIDTH + SLIDE_SPACING;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Data fetchen
  useEffect(() => {
    async function fetchCases() {
      try {
        const res = await fetch(
          "https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=100"
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch cases: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setCases(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching cases"
        );
      } finally {
        setLoading(false);
      }
    }
    fetchCases();
  }, []);

  // Bereken de totale draggable breedte
  useEffect(() => {
    if (containerRef.current && sliderRef.current) {
      const totalWidth = sliderRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setDragWidth(totalWidth - containerWidth);
    }
  }, [cases]);

  // Bereken hoeveel slides er volledig zichtbaar zijn in de container
  const visibleCount =
    containerRef.current && containerRef.current.offsetWidth
      ? Math.floor(containerRef.current.offsetWidth / EFFECTIVE_SLIDE_WIDTH)
      : 1;
  const maxIndex = Math.max(cases.length - visibleCount, 0);

  // Automatische sliding (elke 5 seconden) als er niet over de slider wordt gehooverd
  useEffect(() => {
    if (!isHovered && cases.length > visibleCount) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          const newIndex = prev === maxIndex ? 0 : prev + 1;
          controls.start({
            x: -newIndex * EFFECTIVE_SLIDE_WIDTH,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          });
          return newIndex;
        });
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, maxIndex, controls, cases.length, visibleCount]);

  // Functie voor linker pijl
  const slideLeft = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.max(prev - 1, 0);
      controls.start({
        x: -newIndex * EFFECTIVE_SLIDE_WIDTH,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
      return newIndex;
    });
  };

  // Functie voor rechter pijl
  const slideRight = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.min(prev + 1, maxIndex);
      controls.start({
        x: -newIndex * EFFECTIVE_SLIDE_WIDTH,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
      return newIndex;
    });
  };

  // Bij drag-einde: bepaal op welke slide gesnapt moet worden
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const currentX = -currentIndex * EFFECTIVE_SLIDE_WIDTH;
    const newX = currentX + info.offset.x;
    let newIndex = Math.round(-newX / EFFECTIVE_SLIDE_WIDTH);
    newIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentIndex(newIndex);
    controls.start({
      x: -newIndex * EFFECTIVE_SLIDE_WIDTH,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
    setIsHovered(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  }

  if (cases.length === 0) {
    return <div className="text-center py-12">No cases available.</div>;
  }

  return (
    <section className="py-12 md:py-24 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Onze Cases
        </h2>
        {/* Container met overflow-visible zodat pijlen buiten de slider zichtbaar zijn */}
        <div className="relative overflow-visible">
          {/* Linker pijl */}
          <button
            onClick={slideLeft}
            aria-label="Slide Left"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider met drag-functionaliteit */}
          <div
            className="cursor-grab"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -dragWidth }}
              onDragStart={() => setIsHovered(true)}
              onDragEnd={handleDragEnd}
              animate={controls}
              initial={{ x: 0 }}
              ref={sliderRef}
              className="flex space-x-12"
            >
              {cases.map((caseItem) => (
                <motion.div
                  key={caseItem.id}
                  className="min-w-[400px] bg-teal-900 dark:bg-gray-800 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/cases/${caseItem.slug}`}>
                    <div className="relative h-64">
                      <Image
                        src={getImageUrl(caseItem)}
                        alt={decodeHtml(caseItem.title.rendered)}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300"
                        onError={(e) => {
                          console.error("Image load error for case:", caseItem.id, e);
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="pt-2">
                      {/* Titel met hover-overlay */}
                      <div className="relative group">
                        <h3 className="text-xl font-semibold text-white px-3 dark:text-white">
                          {decodeHtml(caseItem.title.rendered)}
                        </h3>
                        <div className="absolute inset-0 flex items-center justify-bottom px-6 py-6 bg-teal-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white  text-lg font-medium">Meer bekijken</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                      {caseItem.acf?.location && (
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {caseItem.acf.location}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Rechter pijl */}
          <button
            onClick={slideRight}
            aria-label="Slide Right"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
