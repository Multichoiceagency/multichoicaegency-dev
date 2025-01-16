'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  useEffect(() => {
    const paths = document.querySelectorAll(".animate-svg path");
    paths.forEach((path, i) => {
      const length = (path as SVGPathElement).getTotalLength();
      gsap.fromTo(
        path,
        { strokeDasharray: length, strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 3, ease: "power2.inOut", delay: i * 0.2 }
      );
    });
  }, []);

  return (
    <section>
      <div className="relative pt-18 pb-24 sm:pb-32 lg:pt-36 lg:pb-62">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="animate-svg w-full h-full"
            viewBox="0 0 1440 900"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[...Array(40)].map((_, i) => (
              <path
                key={i}
                d={`M0,${100 + i * 20} C360,${200 + i * 20} 720,${0 + i * 20} 1080,${100 + i * 20} C1440,${200 + i * 20} 1800,${0 + i * 20} 2160,${100 + i * 20}`}
                stroke={`rgba(0, 128, 128, ${1 - i * 0.02})`}
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-lg xl:max-w-xl mx-auto text-center">
            <h1 className="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight mb-8">
              Empowering Your Digital Future
            </h1>
            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
              We deliver innovative solutions that drive your business forward. Join us in creating impactful digital experiences tailored to your vision.
            </p>
            <Link
              href="#"
              className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
