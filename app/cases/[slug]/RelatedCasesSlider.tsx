"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CaseStudy {
  title: { rendered: string };
  slug: string;
  acf: {
    subtitle: string;
    media_type: "video" | "image";
    video_url: string;
    image: string;
    logo: string;
    tags: string;
  };
  _embedded: {
    'wp:featuredmedia': Array<{ source_url: string }>;
  };
}

interface RelatedCasesSliderProps {
  currentSlug: string;
  allCaseStudies: CaseStudy[];
}

export default function RelatedCasesSlider({ currentSlug, allCaseStudies }: RelatedCasesSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const relatedCases = allCaseStudies.filter(cs => cs.slug !== currentSlug).slice(0, 6);

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setCanScrollLeft(sliderRef.current.scrollLeft > 0);
        setCanScrollRight(
          sliderRef.current.scrollLeft <
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        );
      }
    };

    sliderRef.current?.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => sliderRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#0A0A0B] py-24">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-green-400 text-lg font-medium tracking-wide uppercase">
            GERELATEERDE CASES
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white">
            Ontdek meer projecten
          </h3>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide"
          >
            {relatedCases.map((item, index) => (
              <PortfolioCard key={item.slug} item={item} index={index} />
            ))}
          </div>
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, index }: { item: CaseStudy; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const [imageError, setImageError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    if (isInView && videoRef.current && item.acf.media_type === "video") {
      videoRef.current.play().catch(error => console.error("Autoplay failed:", error));
    }
  }, [isInView, item.acf.media_type]);

  return (
    <Link href={`/cases/${item.slug}`} className="block">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative rounded-3xl bg-[#141417] p-4 transition-all duration-300 hover:bg-[#1A1A1D] cursor-pointer w-80 flex-shrink-0"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
          {item.acf.media_type === "video" ? (
            <video
              ref={videoRef}
              src={item.acf.video_url}
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <Image
              src={imageError || !item._embedded?.['wp:featuredmedia']?.[0]?.source_url ? '/default-portfolio-image.jpg' : item._embedded['wp:featuredmedia'][0].source_url}
              alt={item.title.rendered}
              width={320}
              height={240}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/5">
            {item.acf.logo && !logoError ? (
              <Image
                src={item.acf.logo}
                alt={`${item.title.rendered} logo`}
                width={40}
                height={40}
                className="object-cover"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">
                {item.title.rendered.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white transition-colors duration-200 group-hover:text-green-400 hover:underline">
              {item.title.rendered}
            </h4>
            <p className="text-gray-400">{item.acf.subtitle}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.acf.tags.split(',').map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}

