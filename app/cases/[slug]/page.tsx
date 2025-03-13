import { notFound } from "next/navigation"
import type { Metadata } from "next"
import CaseStudyContent, { type CaseStudyContentProps, type CaseStudy } from "./CaseStudyContent"

// Define the params type exactly as Next.js expects
type Params = {
  slug: string
}

async function getCaseStudy(slug: string): Promise<CaseStudy> {
  const res = await fetch(`https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?slug=${slug}&_embed`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    notFound()
  }

  const data = await res.json()

  if (!data || data.length === 0) {
    notFound()
  }

  return data[0]
}

async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const res = await fetch("https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed", {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch case studies")
  }

  return res.json()
}

export async function generateStaticParams(): Promise<Params[]> {
  const caseStudies = await getAllCaseStudies()

  return caseStudies.map((cs: CaseStudy) => ({
    slug: cs.slug,
  }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug)

  return {
    title: `${caseStudy.title.rendered} | MultiChoice Agency`,
    description: caseStudy.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 160),
    openGraph: {
      title: caseStudy.title.rendered,
      description: caseStudy.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 160),
      images: caseStudy._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [{ url: caseStudy._embedded["wp:featuredmedia"][0].source_url }]
        : [],
      type: "article",
    },
  }
}

// Use the exact type structure that Next.js expects
export default async function Page({ params }: { params: Params }) {
  const caseStudy = await getCaseStudy(params.slug)

  if (!caseStudy) {
    notFound()
  }

  const allCaseStudies = await getAllCaseStudies()

  const props: CaseStudyContentProps = {
    content: caseStudy,
    allCaseStudies,
  }

  return <CaseStudyContent {...props} />
}

export const dynamic = "force-static"

