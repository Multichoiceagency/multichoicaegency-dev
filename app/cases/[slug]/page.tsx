import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import RelatedCases from './RelatedCases';
import ProjectResults from './ProjectResults';
import ProjectGallery from './ProjectGallery';
import ClientInfo from './ClientInfo';

async function getCaseStudy(slug: string) {
  const res = await fetch(`https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?slug=${slug}&_embed`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  return data[0];
}

async function getAllCaseStudies() {
  const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed');
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

  const projectSummary = caseStudy.content.rendered.split('.')[0] + '.';

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/cases" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Terug naar Casestudies
        </Link>
        
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{caseStudy.title.rendered}</h1>
          <p className="text-xl text-gray-600">{projectSummary}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Project Details */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Projectoverzicht</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.content.rendered }} />
            </section>

            <ProjectResults results={caseStudy.acf?.results || []} />
            
            <ProjectGallery images={caseStudy.acf?.project_gallery || []} />
          </div>

          {/* Right Column: Client Info and Project Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <ClientInfo 
                clientName={caseStudy.acf?.client_name}
                industry={caseStudy.acf?.industry}
                projectDate={caseStudy.acf?.project_date}
              />

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Project Samenvatting</h3>
                <p className="text-gray-700">{projectSummary}</p>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={caseStudy._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'}
                  alt={caseStudy.title.rendered}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    <RelatedCases currentSlug={''} />

    </div>
  );
}

