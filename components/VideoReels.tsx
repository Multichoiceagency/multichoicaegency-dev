"use client";

import React from "react";
import Link from "next/link";

type BadgeTone = "primary" | "success" | "warning" | "neutral";

type Package = {
  name: string;
  videos: number;   // per maand
  price: number;    // totaalprijs
  subtitle: string; // korte omschrijving
  badge?: { label: string; tone?: BadgeTone };
  features?: {
    onLocation?: boolean;   // Op locatie filmen
    customEdit?: boolean;   // Editen naar jouw voorkeur
    multiCompany?: boolean; // Mogelijk voor meerdere bedrijven
    delivery?: boolean;     // Levering NL + BE
  };
  // interne velden (niet getoond)
  cost?: number;
};

const QUOTE_URL = "/offerte-aanvragen";

const badgeToneClass: Record<BadgeTone, string> = {
  primary:
    "bg-primary/10 text-primary ring-1 ring-inset ring-primary/20",
  success:
    "bg-green-100 text-green-700 ring-1 ring-inset ring-green-200",
  warning:
    "bg-amber-100 text-amber-800 ring-1 ring-inset ring-amber-200",
  neutral:
    "bg-gray-100 text-gray-700 ring-1 ring-inset ring-gray-200",
};

const packages: Package[] = [
  {
    name: "Supersmall",
    videos: 4,
    price: 600,
    subtitle: "Ideaal om consistent te starten met socials",
    badge: { label: "Instap", tone: "neutral" },
    features: { onLocation: true, customEdit: true, multiCompany: true, delivery: true },
    cost: 320,
  },
  {
    name: "Pakket 1",
    videos: 10,
    price: 1500,
    subtitle: "Sterke maandelijkse contentstroom",
    badge: { label: "Beste prijs/kwaliteit", tone: "success" },
    features: { onLocation: true, customEdit: true, multiCompany: true, delivery: true },
    cost: 800,
  },
  {
    name: "Pakket 2",
    videos: 16,
    price: 2500,
    subtitle: "Voor groeiende merken en campagnes",
    badge: { label: "⭐ Meest gekozen", tone: "primary" },
    features: { onLocation: true, customEdit: true, multiCompany: true, delivery: true },
    cost: 1280,
  },
  {
    name: "Pakket 3",
    videos: 32,
    price: 4800,
    subtitle: "Maximale zichtbaarheid & meerdere kanalen",
    badge: { label: "Pro", tone: "warning" },
    features: { onLocation: true, customEdit: true, multiCompany: true, delivery: true },
    cost: 2560,
  },
];

function formatEUR(n: number) {
  return n.toLocaleString("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

type Props = {
  title?: string;
  description?: string;
  quoteUrl?: string;
};

export default function VideoReelsPackages({
  title = "🎬 Video Reels Pakketten",
  description = "Kies het pakket dat bij je past. 🎥 Op locatie filmen, ✂️ edit op maat, 🚚 levering door heel Nederland 🇳🇱 & België 🇧🇪.",
  quoteUrl = QUOTE_URL,
}: Props) {
  return (
    <section className="p-4 md:p-8">
      {/* Titel + omschrijving */}
      <header className="mx-auto max-w-5xl mb-6 md:mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600">{description}</p>
      </header>

      {/* Cards */}
      <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg) => {
          const badgeCls = pkg.badge
            ? badgeToneClass[pkg.badge.tone ?? "primary"]
            : "";

          return (
            <Link
              key={pkg.name}
              href={quoteUrl}
              className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label={`Offerte aanvragen voor ${pkg.name}`}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Badge */}
                {pkg.badge?.label && (
                  <div className="mb-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full ${badgeCls}`}
                    >
                      {pkg.badge.label}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-gray-900">{pkg.name}</h2>
                  <p className="text-sm text-gray-500">
                    📦 Startend vanaf <span className="font-medium">{pkg.videos}</span> video’s per maand
                  </p>
                  <p className="mt-1 text-sm text-gray-700">{pkg.subtitle}</p>
                </div>

                {/* Desktop/Tablet: tabel */}
                <div
                  className="overflow-hidden rounded-xl border hidden md:block"
                  aria-label={`${pkg.name} specificaties tabel`}
                >
                  <table className="w-full text-sm">
                    <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-700 w-2/3">💶 Prijs</td>
                        <td className="px-4 py-3 text-right text-gray-900">{formatEUR(pkg.price)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-700">🎥 Op locatie filmen</td>
                        <td className="px-4 py-3 text-right">{pkg.features?.onLocation ? "✅" : "—"}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-700">✂️ Editen naar jouw voorkeur</td>
                        <td className="px-4 py-3 text-right">{pkg.features?.customEdit ? "✅" : "—"}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-700">🏢 Meerdere bedrijven mogelijk</td>
                        <td className="px-4 py-3 text-right">{pkg.features?.multiCompany ? "✅" : "—"}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-700">🚚 Levering NL 🇳🇱 & BE 🇧🇪</td>
                        <td className="px-4 py-3 text-right">{pkg.features?.delivery ? "✅" : "—"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mobiel: lijst (responsive “tabel”) */}
                <div className="md:hidden" aria-label={`${pkg.name} specificaties lijst`}>
                  <ul className="divide-y divide-gray-200 rounded-xl border overflow-hidden text-sm">
                    <li className="flex items-center justify-between px-4 py-3 bg-gray-50">
                      <span className="font-medium text-gray-700">💶 Prijs</span>
                      <span className="text-gray-900">{formatEUR(pkg.price)}</span>
                    </li>
                    <li className="flex items-center justify-between px-4 py-3">
                      <span className="font-medium text-gray-700">🎥 Op locatie filmen</span>
                      <span>{pkg.features?.onLocation ? "✅" : "—"}</span>
                    </li>
                    <li className="flex items-center justify-between px-4 py-3 bg-gray-50">
                      <span className="font-medium text-gray-700">✂️ Editen naar jouw voorkeur</span>
                      <span>{pkg.features?.customEdit ? "✅" : "—"}</span>
                    </li>
                    <li className="flex items-center justify-between px-4 py-3">
                      <span className="font-medium text-gray-700">🏢 Meerdere bedrijven mogelijk</span>
                      <span>{pkg.features?.multiCompany ? "✅" : "—"}</span>
                    </li>
                    <li className="flex items-center justify-between px-4 py-3 bg-gray-50">
                      <span className="font-medium text-gray-700">🚚 Levering NL 🇳🇱 & BE 🇧🇪</span>
                      <span>{pkg.features?.delivery ? "✅" : "—"}</span>
                    </li>
                  </ul>
                </div>

                {/* CTA’s: alles redirect naar offerte */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-full rounded-lg bg-primary text-white py-2.5 text-center font-semibold group-hover:bg-primary/90 transition">
                    Offerte aanvragen
                  </span>
                  <span className="text-xs text-gray-600 select-none">Vergelijk</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
