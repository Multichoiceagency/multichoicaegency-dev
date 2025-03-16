import { notFound } from "next/navigation"
import CaseStudyContent, { type CaseStudyContentProps, type CaseStudy } from "./CaseStudyContent"

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

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies()

  return caseStudies.map((cs: CaseStudy) => ({
    slug: cs.slug,
  }))
}

// Fix the type definition by using the correct interface
type PageProps = {
  params: { slug: string }
  searchParams?: Record<string, string | string[] | undefined>
}

export default async function Page({ params }: PageProps) {
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

