import { fetchCases } from '@/lib/api';
import CasesPageClient from '@/components/cases';

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

