'use client'

import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

const OverOns: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
      '(max-width: 1400px)': { slidesToScroll: 4 },
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    { desktop: 'https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/ScreenShot-Tool-20250102170409.png', mobile: 'https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/ScreenShot-Tool-20250102170409.png', link: '/image1' },
    { desktop: 'https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/ScreenShot-Tool-20250102170552.png', mobile: 'https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/ScreenShot-Tool-20250102170552.png', link: '/image2' },
    { desktop: 'https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/ScreenShot-Tool-20250102170812.png', mobile: 'https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/ScreenShot-Tool-20250102170812.png', link: '/image3' },
    { desktop: 'https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/ScreenShot-Tool-20250102171348.png', mobile: 'https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/ScreenShot-Tool-20250102171348.png', link: '/image4' },
    { desktop: 'https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/ScreenShot-Tool-20250102172031.png', mobile: 'https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/ScreenShot-Tool-20250102172031.png', link: '/image5' },
  ];

  return (
    <section className="py-34 lg:py-32 sm:py-16">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        {/* Left Side - Sticky Title */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 sticky top-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl italic text-green-900 font-medium leading-tight md:text-5xl lg:text-6xl">
              Over{" "}
              <span className="italic text-green-600 hover:text-green-900 animate-in-5s">
                ons
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-8">
            Welkom bij Multichoiceagency! Wij zijn een creatief team van experts in design, ontwikkeling en marketing. We zetten onze diverse vaardigheden in om op maat gemaakte digitale oplossingen te creëren. Onze focus ligt op samenwerking, innovatie en het leveren van resultaten die uw verwachtingen overtreffen. Samen streven we ernaar om uw digitale visie werkelijkheid te maken.
            </p>
          </motion.div>
          <div>
          <Link href="/over-ons" className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200">Over ons</Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="embla overflow-hidden -mx-4 sm:mx-0" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-4 sm:pl-4 sm:pr-0"
              >
                <Link href={image.link} className="block w-full aspect-[3/4] sm:aspect-auto sm:h-[800px] relative">
                  <picture className="block w-full h-full">
                    <source 
                      media="(min-width: 640px)" 
                      srcSet={image.desktop}
                    />
                    <Image
                      className="w-full h-full object-cover sm:object-contain rounded-3xl mx-auto"
                      src={image.mobile}
                      alt={`About image ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      style={{
                        maxWidth: 'calc(100% - 2rem)', 
                        maxHeight: '100%',
                      }}
                    />
                  </picture>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
          onClick={scrollPrev}
        >
          <svg className="w-6 h-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
          onClick={scrollNext}
        >
          <svg className="w-6 h-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default OverOns;
