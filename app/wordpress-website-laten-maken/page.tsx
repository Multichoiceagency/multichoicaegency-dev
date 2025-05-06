"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/Hero-section"

export default function WordPressWebsitePage() {
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
    },
  ];

  return (
<>

      {/* Hero Sectie */}
      <HeroNieuw
        title="WordPress Website Laten Maken"
        description="Laat jouw bedrijf groeien met een professionele WordPress website, volledig op maat gemaakt en geoptimaliseerd voor conversie."
        buttonText="Vraag een offerte aan"
        buttonLink="/offerte-aanvragen"
        videoSrc="https://cdn.dribbble.com/users/174905/screenshots/16389783/media/eccd193e8177eb11ffd6829940390a84.mp4"
      />

      {/* Overige Sectie met Extra Informatie en Video */}
      <section className="py-12 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center -mx-4">
            {/* Tekst Kolom */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 dark:text-white">
                Waarom kiezen voor een WordPress website?
              </h2>
              <p className="text-lg text-gray-700 mb-6 dark:text-white">
                WordPress is het populairste CMS ter wereld en biedt een krachtige, flexibele oplossing voor zowel kleine als grote bedrijven. Met een WordPress website heb je volledige controle over de content en kun je gemakkelijk inspelen op veranderende marktomstandigheden.
              </p>
              <Link
                href="/offerte-aanvragen"
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-black text-white bg-green-900 hover:bg-green-500 rounded-full transition duration-200"
              >
                Start jouw project vandaag nog
              </Link>
            </div>
            {/* Video Kolom */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <video
                className="w-full h-full object-contain rounded-md"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://cdn.dribbble.com/users/174905/screenshots/16477552/media/bd568289d5352da6cb5c50663004ec17.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sectie */}
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
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 3).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-green-900 dark:bg-green-900/10 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-white dark:text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.69995V18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <div className="w-full lg:w-1/2 px-4">
                {faqItems.slice(3).map((item, index) => (
                  <button
                    key={index + 3}
                    onClick={() => setOpenAccordion(openAccordion === index + 3 ? null : index + 3)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-green-900 dark:bg-green-900/10 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 3 ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-white dark:text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 3 ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.69995V18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r bg-white text-black dark:text-white dark:bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Klaar om jouw WordPress website te laten maken?</h2>
          <p className="text-lg mb-8 text-black-700 hover:text-green-700 max-w-2xl mx-auto">
            Zet de eerste stap naar een professionele en converterende website die jouw bedrijf laat groeien.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/gratis-consult"
              className="bg-green-700 text-white font-semibold py-4 px-6 rounded-full text-lg hover:bg-green-900 hover:text-white transition duration-300"
            >
              Vraag een gratis consult aan
            </a>
            <a
              href="/portfolio"
              className="border border-white text-black dark:bg-white font-semibold py-4 px-6 rounded-full text-lg hover:bg-white hover:text-green-900 transition duration-300"
            >
              Bekijk onze projecten
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
