"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <div className="w-full pb-48 antialiased relative flex flex-col self-auto">
      <Header />
      <div className="flex-grow flex flex-col justify-between px-4 sm:px-0 space-y-8">
        <ProductRow products={firstRow} direction="rtl" speed={5000} />
        <ProductRow products={secondRow} direction="ltr" speed={7000} />
        <ProductRow products={thirdRow} direction="rtl" speed={6000} />
      </div>
    </div>
  );
};

const ProductRow = ({ 
  products, 
  direction,
  speed
}: { 
  products: Product[], 
  direction: "ltr" | "rtl",
  speed: number
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: direction });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        if (direction === 'rtl') {
          emblaApi.scrollPrev();
        } else {
          emblaApi.scrollNext();
        }
      }, speed);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi, direction, speed]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product, index) => (
            <div key={`${product.title}-${index}`} className="flex-[0_0_100%] min-w-0 pl-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 sm:py-20 px-4 w-full left-0 top-0">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold dark:text-white">
        Full-service
        <br /> met een doordachte mix van expertise
      </h1>
      <p className="max-w-2xl text-sm sm:text-base md:text-xl mt-4 sm:mt-8 dark:text-neutral-200">
        Voor veel organisaties is de route naar succes helder. De ambities voor groei zijn groot, en de bedrijfsstrategie staat al. Toch is digitalisering vaak een nieuw terrein, terwijl het enorme mogelijkheden biedt.
        <br /><br />
        Door ambities op het gebied van marketing, e-commerce en procesoptimalisatie te bespreken, kunnen we samen een effectieve digitaliseringsstrategie ontwikkelen. Veel repetitieve taken kunnen geautomatiseerd worden, waardoor medewerkers meer tijd krijgen om te focussen op groei. Met online marketing en digitale oplossingen kunnen bovendien nieuwe inkomstenstromen worden opgezet.
        <br /><br />
        Om dit proces succesvol te begeleiden, werken we met een team van strategen, creatieven, developers en architecten, afgestemd op de behoeften van jouw project. Door telkens het juiste team samen te stellen, bieden we een full-service aanpak gecombineerd met specialistische expertise.
      </p>
      <Link href="/diensten" className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
        Alle diensten
      </Link>
    </div>
  );
};

const ProductCard = ({
  product,
}: {
  product: Product;
}) => {
  return (
    <div
      className="group/product overflow-hidden h-60 sm:h-96 w-72 sm:w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl h-full"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top rounded-xl absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full rounded-xl gap-4 opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </div>
  );
};

