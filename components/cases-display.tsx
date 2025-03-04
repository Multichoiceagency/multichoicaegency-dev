"use client";

import { useEffect, useState, useRef } from "react";
import "flickity/css/flickity.css"; // Zorg ervoor dat Flickity's CSS wordt geladen
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { decodeHtml } from "@/utils/decodeHtml"; // Importeren van decodeHtml functie

interface Case {
  id: number;
  title: { rendered: string };
  slug: string;
  acf?: {
    industry?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

export default function Portfolio() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const flickityRef = useRef<any>(null);
  const flickityContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchCases() {
      try {
        const res = await fetch(
          "https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=6"
        );
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
        const data = await res.json();
        setCases(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching cases");
      } finally {
        setLoading(false);
      }
    }
    fetchCases();
  }, []);

  useEffect(() => {
    async function loadFlickity() {
      if (typeof window !== "undefined") {
        const FlickityModule = await import("flickity");
        const FlickityInstance = FlickityModule.default;

        if (flickityContainerRef.current) {
          flickityRef.current = new FlickityInstance(flickityContainerRef.current, {
            cellAlign: "left",
            freeScroll: true,
            contain: true,
            friction: 0.15,
            wrapAround: true,
            pageDots: false,
            prevNextButtons: false,
            draggable: true,
          });
        }
      }
    }

    loadFlickity();
    return () => flickityRef.current?.destroy();
  }, [cases]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container px-4 mx-auto overflow-visible">
        {/* Header */}
        <div className="flex flex-wrap items-center -mx-4 mb-16">
          <div className="w-full xl:w-2/3 px-4 mb-8 xl:mb-0">
            <span className="text-sm font-semibold uppercase text-green-600">
            Een Greep Uit Ons Portfolio
            </span>
            <h2 className="max-w-2xl font-bold uppercase font-heading text-3xl sm:text-4xl dark:text-white">
              Ontdek onze cases
            </h2>
          </div>
          <div className="w-full xl:w-auto ml-auto px-4 xl:text-right">
            <Link
              href="/cases"
              className="inline-block w-full dark:bg-green-700 hover:bg-green-700 hover:text-white dark:hover:text-black sm:w-auto py-4 px-6 text-center font-heading font-medium text-base text-gray-900 dark:text-white border border-gray-900 dark:border-white hover:text-green-500 hover:border-green-500 rounded-sm transition duration-150"
            >
              Bekijk alle cases
            </Link>
          </div>
        </div>

        {/* Flickity Slider */}
        <div ref={flickityContainerRef} className="overflow-visible max-w-screen-xl w-screen">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="w-80 sm:w-96 md:w-[400px] p-2">
              <div className="relative rounded-lg overflow-visible shadow-lg bg-white dark:bg-gray-800">
                {/* Afbeelding */}
                <div className="relative w-full h-64">
                  <Image
                    src={
                      caseItem._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "/placeholder.svg"
                    }
                    alt={decodeHtml(caseItem.title.rendered)}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                {/* Content Sectie */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block font-heading text-xs uppercase font-semibold bg-green-600 text-white px-3 py-1 rounded">
                      {decodeHtml(caseItem.acf?.industry || "Project")}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold sm:text-lg text-gray-900 dark:text-white mb-4">
                    {decodeHtml(caseItem.title.rendered)}
                  </h3>
                  <Link
                    href={`/cases/${caseItem.slug}`}
                    className="group inline-flex items-center font-heading font-medium text-green-600 dark:text-green-400 hover:text-green-700 transition-colors duration-200"
                  >
                    <span className="mr-4 text-green-600 hover:text-green-900 dark:text-white">Bekijk project</span>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-700 text-white group-hover:bg-gray-900">
                      <ArrowUpRight size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
