'use client';

import React from 'react';
import Image from 'next/image';
import AuthorInfo from '@/components/AuthorInfo';
import SocialShare from '@/components/SocialShare';
import NewsletterSignup from '@/components/NewsLetterSignup';
import AuthorBio from '@/components/AuthorBio';
import { formatDate } from '@/utils/formatDate';
import ClientInfo from './ClientInfo';

export interface CaseStudyContent {
  slug: any;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  acf?: {
    logonew?: string;
    client_name?: string;
    project_date?: string;
    author_image?: string;
    author_bio?: string;
    clientName?: string;
    industry?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}


export interface CaseStudyContentProps {
  content: CaseStudyContent;
  allCaseStudies: Array<CaseStudyContent>; // Adjust types based on your API data structure
}


export default function CaseStudyContent({ content, allCaseStudies }: CaseStudyContentProps) {
  const featuredImage =
    content._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg?height=400&width=800';

  return (
    <section className=" pt-5 pb-12 md:pb-24">
      {/* Hero Section */}
      <div className="relative pt-5 pb-80">
        <Image
          className="absolute top-0 left-0 w-full h-full"
          src="/flow-assets/content/bg-teal-waves.png"
          alt="Background"
          width={1440}
          height={823}
        />

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl xs:text-5xl md:text-6xl tracking-xs text-white mb-6">
              {content.title.rendered}
            </h2>
            <div className="flex items-center justify-center">
              <span className="mx-3">
                <svg
                  width="5"
                  height="4"
                  viewBox="0 0 5 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2" r="2" fill="#929C9A"></circle>
                </svg>
              </span>
              <span className="text-sm font-medium text-white">
                Geplaatst op {formatDate(content.date)}
              </span>
            </div>
          </div>
        </div>

      {/* Main Content Section */}
      <div className="container mx-auto -mt-64 px-4 relative">
        <div className="flex flex-wrap -mx-4 mb-18">
          {/* Left Column */}
          <div className="w-full md:w-1/6 px-4 mb-6 md:mb-0 ">
            <AuthorInfo
              name={content.acf?.client_name ?? 'Unknown Author'}
              image={content.acf?.author_image ?? '/placeholder.svg?height=100&width=100'}
              logo={content.acf?.logonew ?? '/placeholder.svg?height=50&width=50'}
            />
          </div>



          {/* Center Column */}
          <div className="w-full md:w-4/6 px-4 mb-6 md:mb-0 rounded-md">
            <Image
              src={featuredImage}
              alt={content.title.rendered}
              width={800}
              height={600}
              layout="responsive"
              className="block w-full max-w-3xl mx-auto"
            />
          </div>

          {/* Right Column */}
          <div className="w-full md:w-auto px-4">
            <div className="flex flex-row md:flex-col items-center justify-end gap-4">
              <span className="block lg:mb-2 text-sm font-medium text-gray-700 md:text-white md:opacity-80">
              </span>
              <SocialShare />
            </div>
          </div>
        </div>

        {/* Content and Additional Info */}
        <div className="max-w-lg lg:max-w-2xl mx-auto `${theme === 'dark' ? 'bg-white' : 'bg-gray-400'} p-6 rounded-lg shadow-md transition-colors duration-200`}">
          <div className='max-w-lg lg:max-w-2xl mx-auto pt-5 pb-10'>
          <ClientInfo 
          clientName={content.acf?.client_name ?? 'Unknown Author'}
           industry={content.acf?.industry ?? 'Unknown Author'}
           projectDate={content.acf?.project_date ?? 'projectdatum'} 
           logonew={''} />
          </div>
          <div
            className="prose prose-lg max-w-none dark:prose-invert mb-16"
            dangerouslySetInnerHTML={{ __html: content.content.rendered }}
          />
          <NewsletterSignup />
          <AuthorBio
            name="Multichoiceagency"
            role="Online maatwerk specialisten"
            image="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/11/favicon.jpg"
            bio="Multichoice Agency staat al ruim 8 jaar bekend als dé expert in webdesign, webdevelopment en online marketing. Met een klantgerichte aanpak creëren we op maat gemaakte websites die niet alleen visueel aantrekkelijk zijn, maar ook converteren. Onze marketingstrategieën zijn gericht op meetbare resultaten, waardoor jouw bedrijf kan groeien en bloeien in de digitale wereld. Kies voor kwaliteit, innovatie en betrouwbaarheid. Kies voor Multichoice Agency."
          />
          
        </div>
      </div>
    </section>

  );
}
