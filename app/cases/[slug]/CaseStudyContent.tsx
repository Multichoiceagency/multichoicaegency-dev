'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import ProjectResults from './ProjectResults';
import ProjectGallery from './ProjectGallery';
import ClientInfo from './ClientInfo';
import { GeralateerdeCases } from '@/components/GeralateerdeCases';
import { Button } from "@/components/ui/button";

// Define the shape of your case study object
interface CaseStudy {
  title: { rendered: string };
  content: { rendered: string };
  acf?: {
    project_summary?: string;
    results?: any[];
    project_gallery?: any[];
    client_name?: string;
    industry?: string;
    project_date?: string;
    logonew?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

// Define the props interface and export it
export interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  allCaseStudies: CaseStudy[];
}

export default function CaseStudyContent({ caseStudy, allCaseStudies }: CaseStudyContentProps) {
  const projectSummary = caseStudy.acf?.project_summary || 'Samenvatting niet beschikbaar.';

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[#0A0A0B] overflow-hidden">
        <Image
          src={caseStudy._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'}
          alt={caseStudy.title.rendered}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0B]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{caseStudy.title.rendered}</h1>
            <p className="text-xl md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">{projectSummary}</p>
            <Link href="/cases" passHref>
              <Button variant="outline" className="text-white bg-green-700 hover:bg-green-700 hover:text-gray-900">
                Offerte aanvragen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/cases"
          className="inline-flex items-center text-green-600 dark:text-green-400 font-bold hover:text-green-800 dark:hover:text-green-600 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Terug naar Casestudies
        </Link>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Project Details */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Projectoverzicht</h2>
              <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: caseStudy.content.rendered }}
              />
            </section>

            <ProjectResults results={caseStudy.acf?.results || []} />

            <ProjectGallery images={caseStudy.acf?.project_gallery || []} />
          </div>

          {/* Right Column: Client Info and Project Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <ClientInfo
                clientName={caseStudy.acf?.client_name || 'Onbekend'}
                industry={caseStudy.acf?.industry || 'Onbekend'}
                projectDate={caseStudy.acf?.project_date || 'Onbekend'}
                logonew={caseStudy.acf?.logonew || ''}
              />

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Project Samenvatting</h3>
                <p className="text-gray-700 dark:text-gray-300">{projectSummary}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white rounded-lg">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 my-12 ">
              <GeralateerdeCases />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

