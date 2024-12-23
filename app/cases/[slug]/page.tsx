import React from 'react';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import ProjectResults from './ProjectResults';
import ProjectGallery from './ProjectGallery';
import ClientInfo from './ClientInfo';
import { GeralateerdeCases } from '@/components/GeralateerdeCases';

async function getCaseStudy(slug: string) {
  const res = await fetch(`https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?slug=${slug}&_embed`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  return data[0];
}

async function getAllCaseStudies() {
  const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch case studies');
  return res.json();
}

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((cs: any) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug);
  const allCaseStudies = await getAllCaseStudies();

  if (!caseStudy) {
    notFound();
  }

  const projectSummary = caseStudy.acf?.project_summary || 'Samenvatting niet beschikbaar.';

  return (
    <html lang="en" className="dark">
      <Head>
        <title>{caseStudy.title.rendered} - Case Study</title>
        <meta name="description" content={projectSummary} />
      </Head>
      <body className="bg-white dark:bg-gray-900 dark:text-gray-100">
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
              <p className="text-xl md:text-xl text-gray-300 max-w-3xl mx-auto">{projectSummary}</p>
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
              <section className="mb-12">
                  <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Projectoverzicht</h2>
                  <div
                    className="prose prose-lg max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: caseStudy.content.rendered }}
                  />
                </section>
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
      </body>
    </html>
  );
}

export const dynamic = 'force-static';
