"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion, useInView } from "framer-motion";

interface PortfolioItem {
  title: string;
  subtitle: string;
  media: {
    type: "video" | "image";
    src: string;
  };
  image: string;
  logonew: string;
  tags: string[];
  slug: string;
}

async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const response = await fetch(
    "https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch portfolio items");
  }
  const data = await response.json();

  return data.map((item: any) => ({
    title: item.title.rendered,
    subtitle: item.acf.subtitle || "",
    media: {
      type: item.acf.media_type || "image",
      src:
        item.acf.media_type === "video"
          ? item.acf.video_url
          : item.acf.image || "",
    },
    image:
      item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    logonew: item.acf.logonew || "",
    tags: item.acf.tags
      ? item.acf.tags.split(",").map((tag: string) => tag.trim())
      : [],
    slug: item.slug,
  }));
}

export function PortfolioSection() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPortfolioItems() {
      try {
        const items = await getPortfolioItems();
        setPortfolioItems(items);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to load portfolio items. Please try again later.");
        setIsLoading(false);
      }
    }
    fetchPortfolioItems();
  }, []);

  if (isLoading) {
    return <div className="text-white text-center py-24">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-24">{error}</div>;
  }

  return  (
    <>
      <Head>
        <title>Ons Portfolio - Multichoice Agency</title>
        <meta
          name="description"
          content="Ontdek ons diverse portfolio van succesvolle projecten. Bekijk hoe wij de visies van klanten tot leven brengen."
        />
        <meta
          name="reviews"
          content="Lees wat onze klanten zeggen: 'Uitstekende samenwerking', 'Snelle levering', 'Fantastisch resultaat'."
        />
      </Head>
      <section className="bg-[#0A0A0B] py-24">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h2 className="text-green-400 text-lg font-medium tracking-wide uppercase">
              KLANTPROJECTEN
            </h2>
            <h3 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white">
              Onze cases
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && videoRef.current && item.media.type === "video") {
      videoRef.current.play();
    }
  }, [isInView, item.media.type]);

  return (
    <Link href={`/cases/${item.slug}`} className="block">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative rounded-3xl bg-[#141417] p-4 transition-all duration-300 hover:bg-[#1A1A1D] cursor-pointer"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
          {item.media.type === "video" ? (
            <video
              ref={videoRef}
              src={item.media.src}
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
            {item.logonew ? (
              <Image
                src={item.logonew}
                alt={`${item.title} logo`}
                width={50}
                height={50}
                className="object-contain w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">
                {item.title.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <Link href={`/cases/${item.slug}`} className="inline-block">
              <h4 className="text-xl font-semibold text-white transition-colors duration-200 group-hover:text-green-400 hover:underline">
                {item.title}
              </h4>
            </Link>
            <p className="text-gray-400">{item.subtitle}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
