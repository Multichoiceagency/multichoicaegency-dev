// app/cases/[slug]/page.tsx
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

import { notFound } from "next/navigation";

async function getCase(slug: string) {
  const API = process.env.API_ORIGIN ?? process.env.NEXT_PUBLIC_API_ORIGIN;
  if (!API) throw new Error("API_ORIGIN ontbreekt");

  const res = await fetch(`${API}/cases/${slug}`, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) return null;

  const ct = res.headers.get("content-type") ?? "";
  if (!ct.includes("application/json")) return null;

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getCase(params.slug);
  if (!data) return notFound();

  return <div>{data.title}</div>;
}

// ⚠️ Haal generateStaticParams hier dus weg of zet ‘m leeg
export async function generateStaticParams() {
  return [];
}
