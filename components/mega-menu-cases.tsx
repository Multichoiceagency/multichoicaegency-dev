'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { decodeHtml } from '@/utils/decodeHtml'; // Importeren van decodeHtml functie

interface Case {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  logonew: string;
  tags: string[];
  slug: string;
  category: string;
}

interface MegaMenuCasesProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

export function MegaMenuCases({ isOpen, onClose, isMobile = false }: MegaMenuCasesProps) {
  const [cases, setCases] = useState<Case[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCases = async () => {
      const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=100');
      const data = await res.json();

      const formattedCases = data.map((item: any) => ({
        id: item.id,
        title: decodeHtml(item.title.rendered),
        subtitle: item.acf?.subtitle ? decodeHtml(item.acf.subtitle) : "",
        image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
        logonew: item.acf?.logonew || "",
        tags: item.acf?.tags ? item.acf.tags.split(",").map((tag: string) => tag.trim()) : [],
        slug: item.slug,
        category: item.acf?.category || 'Uncategorized',
      }));

      setCases(formattedCases);
    };

    if (isOpen) {
      fetchCases();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Beperk de getoonde cases tot 4
  const limitedCases = cases.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={isMobile ? "h-screen flex flex-col" : "absolute left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg"}
      style={isMobile ? {} : { top: '100%' }}
    >
      <div className={isMobile ? "flex flex-col flex-grow" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8"}>
        {isMobile && (
          <div className="mb-4 px-4 pt-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Onze Cases</h2>
            <Link href="/cases">
              <Button className="w-full bg-green-500 justify-center text-white hover:bg-green-600">
                Bekijk alle cases
              </Button>
            </Link>
          </div>
        )}
        {!isMobile && (
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Onze Cases</h2>
        )}
        <div ref={scrollContainerRef} className="grid grid-cols-2 gap-8">
          {limitedCases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/cases/${caseItem.slug}`} className="group block" onClick={onClose}>
                <div className="relative aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-95"
                  />
                </div>
                <h3 className="text-l font-bold mb-2 text-gray-900 group-hover:text-green-600 dark:text-white">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {caseItem.subtitle}
                </p>
                <div className="flex items-center text-green-500 group-hover:text-green-600 transition-colors mb-6">
                  <span className="text-sm font-medium">Bekijk case</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {!isMobile && (
          <div className="mt-8">
            <Link href="/cases">
              <Button className="w-full bg-green-500 justify-center text-white hover:bg-green-600">
                Bekijk alle cases
              </Button>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
