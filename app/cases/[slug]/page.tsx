import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import CaseStudyContent, { CaseStudyContentProps } from './CaseStudyContent';

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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug);
  const projectSummary = caseStudy.acf?.project_summary || 'Samenvatting niet beschikbaar.';

  return {
    title: `${caseStudy.title.rendered} - Case Study`,
    description: projectSummary,
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug);
  const allCaseStudies = await getAllCaseStudies();

  if (!caseStudy) {
    notFound();
  }

  const props: CaseStudyContentProps = {
    caseStudy,
    allCaseStudies
  };

  return <CaseStudyContent params={{
    slug: ''
  }} {...props} />;
}

export const dynamic = 'force-static';

