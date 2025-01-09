import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import CaseStudyContent, { CaseStudyContentProps, CaseStudyContent as CaseStudy } from './CaseStudyContent';

async function getCaseStudy(slug: string): Promise<CaseStudy> {
  const res = await fetch(`https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?slug=${slug}&_embed`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    notFound();
  }

  return data[0];
}

async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch case studies');
  }

  return res.json();
}

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();

  return caseStudies.map((cs: CaseStudy) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const allCaseStudies = await getAllCaseStudies();

  const props: CaseStudyContentProps = {
    content: caseStudy,
    allCaseStudies,
  };

  return <CaseStudyContent {...props} />;
}

async function fetchProjectGallery() {
  const response = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed');
  if (!response.ok) {
    throw new Error('Failed to fetch project gallery data');
  }
  return response.json();
}

export const dynamic = 'force-static';
