import { fetchCases } from '@/lib/api';
import CasesPageClient from '@/components/cases';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateStaticParams() {
  const cases = await fetchCases();
  return cases.map((caseItem: { slug: string }) => ({
    slug: caseItem.slug,
  }));
}

export default async function CasesPage() {
  const cases = await fetchCases();

  return <CasesPageClient initialCases={cases} />;
}

