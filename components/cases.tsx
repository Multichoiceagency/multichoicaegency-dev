'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { decodeHtml } from '@/utils/decodeHtml';

interface Case {
  id: number;
  title: { rendered: string };
  subtitle: string;
  slug: string;
  acf?: {
    location?: string;
    industry?: string;
    media_type?: 'video' | 'image';
    video_url?: string;
    tags?: string;
    category?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

interface CasesPageClientProps {
  initialCases: Case[];
}

export default function CasesPageClient({ initialCases }: CasesPageClientProps) {
  const [cases] = useState<Case[]>(initialCases);
  const [filteredCases, setFilteredCases] = useState<Case[]>(initialCases);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCase, setHoveredCase] = useState<Case | null>(initialCases[0]);

  const industries = ['All', ...Array.from(new Set(cases.map(c => c.acf?.industry).filter(Boolean) as string[]))];

  const filterCases = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredCases(cases);
    } else {
      setFilteredCases(cases.filter(c => c.acf?.industry === filter));
    }
    setHoveredCase(null);
  };

  return (
    <section className="py-12 md:py-24 bg-coolGray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto lg:max-w-none mb-20">
          <div className="flex flex-wrap -mx-4 items-end">
            <div className="w-full 2xl:w-7/12 px-4 mb-16 2xl:mb-0">
              <div className="inline-flex mx-auto items-start">
                <h1 className="font-heading text-3xl xs:text-5xl md:text-6xl lg:text-4xl tracking-tighter pt-4">Onze Cases</h1>
                <span className="block -mb-4 mr-12 lg:mr-8 text-right text-xl sm:text-2xl text-coolGray-600">({cases.length})</span>
              </div>
            </div>
            <div className="w-full 2xl:w-5/12 px-4">
              <ul className="flex flex-wrap -mb-2 items-center justify-end">
                {industries.map((industry) => (
                  <li key={industry} className="mb-2 mr-2 sm:mr-8">
                    <button
                      onClick={() => filterCases(industry)}
                      className={`inline-block py-2.5 px-5 text-lg leading-none ${
                        activeFilter === industry
                          ? 'bg-black text-white'
                          : 'hover:bg-black hover:text-white'
                      } rounded-full transition duration-100`}
                    >
                      {industry}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:max-w-xl mx-auto lg:max-w-none">
          <div className="flex flex-wrap -mx-3 mb-20">
            <div className="w-full lg:w-1/2 px-3 mb-20 lg:mb-0">
              {filteredCases.map((caseItem) => (
                <Link 
                  key={caseItem.id} 
                  href={`/cases/${caseItem.slug}`} 
                  className="group block mb-8"
                  onMouseEnter={() => setHoveredCase(caseItem)}
                  onMouseLeave={() => setHoveredCase(filteredCases[0])}
                >
                  <div className="mb-2">
                    <span className="text-sm font-medium text-coolGray-600">{caseItem.acf?.industry || 'Uncategorized'}</span>
                    <span className="inline-block mx-4">
                      <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z" fill="#A5A5A5"></path>
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-coolGray-600">{caseItem.acf?.location || ''}</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b-2 border-coolGray-200">
                    <h3 className="text-xl font-semibold text-coolGray-800 group-hover:text-black">
                      {decodeHtml(caseItem.title.rendered)}
                    </h3>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-45 transition-transform duration-200">
                      <path d="M22 2L2 22" stroke="#A5A5A5" strokeWidth="3.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M22 20.3393V2H3.66071" stroke="#A5A5A5" strokeWidth="3.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full lg:w-1/2 px-3">
              {hoveredCase && (
                <div className="relative h-[600px] lg:h-[800px] overflow-hidden rounded-lg">
                  {hoveredCase.acf?.media_type === 'video' ? (
                    <video
                      src={Image.url}
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={hoveredCase._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg'}
                      alt={decodeHtml(hoveredCase.title.rendered)}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="transition-opacity duration-300"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="text-center">
            <Link href="/cases" className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black">
              <span className="mr-4">Bekijk alle cases</span>
              <span className="group-hover:rotate-45 transform transition duration-100">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 1.5L1.5 9.5" stroke="black" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.5 8.83571V1.5H2.16429" stroke="black" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

