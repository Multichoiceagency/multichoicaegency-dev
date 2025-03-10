import HeroNieuw from "@/components/HeroNieuw";
import Link from "next/link";
import React from "react";

// Omdat dit een server component is, gebruiken we een async functie
export default async function VacaturesIndexPage() {
  // Haal de vacatures dynamisch op via de API-route
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/vacatures`, { cache: "no-store" });
  const vacatures = await res.json();

  return (
    <div className="bg-white text-black">
      <HeroNieuw
        title="Vacatures bij Multichoiceagency"
        description="Ontdek uitdagende carrièremogelijkheden binnen ons team. Wij bieden SEO-geoptimaliseerde vacatures voor professionals in diverse disciplines, zodat u altijd de perfecte match vindt."
        buttonText="Bekijk Vacatures"
        buttonLink="/vacatures"
        videoSrc="https://videos.pexels.com/video-files/123456789/example.mp4"
      />

      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Onze Openstaande Vacatures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vacatures.map((vacature: any) => (
              <div
                key={vacature.slug}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {vacature.title}
                </h3>
                <p className="text-gray-600 mb-4">{vacature.shortDescription}</p>
                <Link href={`/vacatures/${vacature.slug}`}>
                  <span className="text-green-600 font-bold cursor-pointer hover:underline">
                    Lees Meer &rarr;
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
