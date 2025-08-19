"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroNieuw from "@/components/Hero-section";

export default function WordPressWebsiteClient() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Waarom een WordPress website laten maken?",
      answer:
        "WordPress is het populairste CMS ter wereld en biedt een flexibele, schaalbare en SEO-vriendelijke oplossing voor jouw website."
    },
    {
      question: "Kan ik zelf de content beheren?",
      answer:
        "Ja, met WordPress beheer je eenvoudig de content via een intuïtief CMS, zelfs zonder technische kennis."
    },
    {
      question: "Hoe lang duurt het om een WordPress website te maken?",
      answer:
        "De ontwikkelingstijd varieert, maar een standaard website wordt meestal binnen 4 tot 8 weken opgeleverd."
    },
    {
      question: "Bieden jullie ondersteuning na de lancering?",
      answer:
        "Ja, we bieden onderhouds- en supportpakketten aan om jouw website veilig en up-to-date te houden."
    },
    {
      question: "Is mijn website responsive?",
      answer:
        "Absoluut, alle WordPress websites die wij ontwikkelen zijn 100% responsive en geoptimaliseerd voor alle apparaten."
    }
  ];

  return (
    <>
      <HeroNieuw
        title="WordPress Website Laten Maken"
        description="Laat jouw bedrijf groeien met een professionele WordPress website, volledig op maat gemaakt en geoptimaliseerd voor conversie."
        buttonText="Vraag een offerte aan"
        buttonLink="/offerte-aanvragen"
        videoSrc="https://cdn.dribbble.com/userupload/15714852/file/original-0fa0f8b2afecbbf12b5775d85d019f51.mp4"
      />

      {/* Introductie */}
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 dark:text-white">
            Meer dan 200+ WordPress websites op maat geleverd
          </h2>
          <p className="text-lg text-gray-700 dark:text-white max-w-4xl mx-auto">
            Wij zijn dé specialist op het gebied van WordPress ontwikkeling. In de afgelopen jaren hebben we meer dan <strong>200 maatwerk websites</strong> gerealiseerd voor uiteenlopende sectoren: van lokale ondernemers en creatieve freelancers tot internationale bedrijven en overheidsinstellingen. Onze focus ligt op gebruiksvriendelijkheid, snelheid, schaalbaarheid én SEO. 
          </p>
        </div>
      </section>

      {/* Over WordPress */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-green-700 mb-4">Waarom kiezen voor WordPress?</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              WordPress is niet zonder reden het meest gebruikte content management systeem ter wereld. Het biedt een robuuste en flexibele basis voor het ontwikkelen van vrijwel elk type website.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
              Dankzij de enorme community, duizenden beschikbare plugins en thema’s, en de continue doorontwikkeling is WordPress enorm schaalbaar. Je website groeit gemakkelijk mee met je bedrijf.
            </p>
          </div>
          <div>
            <Image
              src="/wordpress-mediabibliotheek.png"
              alt="Waarom WordPress"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Elementor Sectie */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/elementor-website-laten-maken.png"
              alt="Elementor builder"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-700 mb-4">Visueel bouwen met Elementor Pro</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Elementor Pro stelt ons in staat om websites te bouwen met een pixel-perfect design, zonder concessies te doen aan snelheid of flexibiliteit. Voor jou betekent dit een krachtige visuele editor waarmee je zelf aanpassingen kunt doen aan teksten, afbeeldingen en indelingen – zonder technische kennis.
            </p>
          </div>
        </div>
      </section>

      {/* Video Showcase Sectie */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
            Bekijk enkele van onze recente realisaties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://cdn.dribbble.com/users/174905/screenshots/16389783/media/eccd193e8177eb11ffd6829940390a84.mp4",
              "https://cdn.dribbble.com/users/174905/screenshots/16477552/media/bd568289d5352da6cb5c50663004ec17.mp4",
              "https://cdn.dribbble.com/userupload/15425359/file/original-2b2e2d473e5fee8e7d8d4f6ee7860d94.mp4",
            ].map((src, i) => (
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg" key={i}>
                <video className="w-full h-full object-cover" src={src} autoPlay loop muted playsInline />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Klaar om jouw WordPress website te laten maken?</h2>
          <p className="text-lg mb-8">
            Start vandaag nog met een krachtige website die jouw merk laat groeien. Vraag vrijblijvend een offerte aan of bekijk onze recente projecten.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/gratis-consult"
              className="bg-white text-green-900 font-semibold py-4 px-6 rounded-full text-lg hover:bg-green-200 transition duration-300"
            >
              Vraag een gratis consult aan
            </a>
            <a
              href="/portfolio"
              className="border border-white text-white font-semibold py-4 px-6 rounded-full text-lg hover:bg-white hover:text-green-900 transition duration-300"
            >
              Bekijk onze projecten
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-700 dark:text-white">
              Hier vind je uitgebreide antwoorden op de meest gestelde vragen over het laten maken van een WordPress website.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 mb-24">
            {faqItems.map((item, index) => (
              <div className="w-full md:w-1/2 px-4 mb-6" key={index}>
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="flex w-full py-4 px-8 items-start justify-between text-left bg-green-900 dark:bg-green-900/10 shadow-md rounded-2xl"
                >
                  <div className="pr-5">
                    <h5 className="text-lg font-medium text-white">{item.question}</h5>
                    <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96" : "max-h-0"}`}>
                      <p className="text-white dark:text-white mt-4">{item.answer}</p>
                    </div>
                  </div>
                  <span className="flex-shrink-0">
                    {openAccordion === index ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" />
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5.69995V18.3" stroke="#BEF264" strokeWidth="1.5" />
                        <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
