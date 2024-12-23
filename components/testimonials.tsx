"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Moon, Sun } from 'lucide-react';
import { useTheme } from "next-themes";

interface Testimonial {
  name: string;
  title: string;
  company: string;
  companyLogo: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dave Christison",
    title: "Co-founder & COO",
    company: "status",
    companyLogo: "/placeholder.svg?height=30&width=100",
    image: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
  },
  {
    name: "Jordan Wilson",
    title: "Digital Marketing Director",
    company: "BanQu",
    companyLogo: "/placeholder.svg?height=30&width=100",
    image: "https://cdn.pixabay.com/photo/2017/08/06/06/25/woman-2589485_1280.jpg",
  },
  {
    name: "David Malmborg",
    title: "VP of Marketing",
    company: "nivati",
    companyLogo: "/placeholder.svg?height=30&width=100",
    image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </button>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={testimonial.image}
        alt={`${testimonial.name}'s testimonial`}
        layout="responsive"
        width={400}
        height={300}
        objectFit="cover"
        className="transition-all duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="text-2xl font-bold text-white mb-2">
          {testimonial.name}
        </h4>
        <p className="text-gray-300 text-lg mb-2">
          {testimonial.title}
        </p>
        <div className="h-8">
          <Image
            src={testimonial.companyLogo}
            alt={`${testimonial.company} logo`}
            width={100}
            height={30}
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-white dark:bg-[#0A0A0B] py-24 transition-colors duration-300">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="flex items-center gap-2 text-green-600 dark:text-purple-400 text-lg font-medium tracking-wide uppercase">
            BEKIJK <Heart className="fill-current w-4 h-4" /> 
          </h2>
          <h3 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-gray-900 dark:text-white">
          ONZE KLANTVERHALEN
                    </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <ThemeToggle />
    </section>
  );
}

