'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

interface GalleryImage {
  url: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const { theme } = useTheme();

  if (!images || images.length === 0) {
    return (
      <div className="text-center text-gray-500">
        Geen afbeeldingen beschikbaar.
      </div>
    );
  }

  return (
    <section className="mb-12">
      <h2 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>
        Projectgalerij
      </h2>
      <div className="carousel">
        {images.map((image, index) => (
          <div key={index} className="carousel-cell relative group rounded-lg overflow-hidden shadow-md">
            {/* Afbeelding */}
            <Image
              src={image.url}
              alt={image.alt || 'Afbeelding zonder beschrijving'}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
