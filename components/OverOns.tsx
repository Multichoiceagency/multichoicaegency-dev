'use client'

import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

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
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-24">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <div>
              <h1 className="font-heading text-6xl">Over ons</h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="lg:max-w-lg md:ml-auto">
              <p className="text-xl font-medium mb-10">
                At Flow, we&apos;re committed to a sustainable future. As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
              </p>
              <Link href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-lime-500 border border-lime-500 hover:border-teal-900 bg-lime-500 hover:bg-teal-900 rounded-full transition duration-300">
                Read more
              </Link>
            </div>
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

