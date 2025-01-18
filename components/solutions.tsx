"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const diensten = [
  {
    title: "UI/UX Design",
    description:
      "Creëer prototypes en wireframes voor interactieve en gebruiksvriendelijke ontwerpen die aansluiten bij je merk.",
    href: "/diensten/webdesign/ui-ux-design",
  },
  {
    title: "Responsief Webdesign",
    description:
      "Zorg voor een naadloze gebruikerservaring op desktop, tablet en mobiel met modern responsief design.",
    href: "/diensten/webdesign/responsief-webdesign",
  },
  {
    title: "Custom Webdesign",
    description:
      "Ontwikkel maatwerkoplossingen die perfect passen bij jouw huisstijl en bedrijfsdoelen.",
    href: "/diensten/webdesign/custom-webdesign",
  },
  {
    title: "Frontend Development",
    description:
      "Bouw snelle en aantrekkelijke interfaces met technologieën zoals React, Next.js en Tailwind CSS.",
    href: "/diensten/webdevelopment/frontend-development",
  },
  {
    title: "Backend Development",
    description:
      "Implementeer robuuste server-side oplossingen met Node.js, Django of Laravel.",
    href: "/diensten/webdevelopment/backend-development",
  },
  {
    title: "E-commerce Platformontwikkeling",
    description:
      "Ontwikkel krachtige webshops met WooCommerce, Shopify of Magento, volledig aangepast aan jouw behoeften.",
    href: "/diensten/ecommerce/ecommerce-platformontwikkeling",
  },
  {
    title: "Headless E-commerce",
    description:
      "Combineer flexibiliteit en snelheid met headless oplossingen zoals Next.js of Gatsby.",
    href: "/diensten/ecommerce/headless-ecommerce",
  },
  {
    title: "Logo Ontwerp & Visuele Identiteit",
    description:
      "Ontwerp een onderscheidend logo en een visuele identiteit die je merk versterkt.",
    href: "/diensten/branding/logo-visuele-identiteit",
  },
  {
    title: "Merkstrategie en Storytelling",
    description:
      "Definieer een sterke merkstrategie en vertel jouw verhaal op een manier die impact maakt.",
    href: "/diensten/branding/merkstrategie-storytelling",
  },
  {
    title: "Technische SEO",
    description:
      "Optimaliseer je website voor zoekmachines en verbeter je zichtbaarheid met technische SEO.",
    href: "/diensten/seo/technische-seo",
  },
  {
    title: "Digitale Marketingcampagnes",
    description:
      "Bereik je doelgroep met effectieve Google Ads, Facebook Ads en meer.",
    href: "/diensten/digitale-marketing/campagnes",
  },
  {
    title: "Hosting en Domeinbeheer",
    description:
      "Zorg voor betrouwbare hosting en professioneel domeinbeheer om je website altijd operationeel te houden.",
    href: "/diensten/technische-ondersteuning/hosting-domeinbeheer",
  },
];

export function Solutions() {
  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-[1800px] px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Sticky on large screens only */}
          <div className="h-fit lg:sticky xl:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 block text-sm font-medium uppercase tracking-wider text-[#1e7932]"
            >
              ONZE DIENSTEN
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="mb-4 text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
                Kies voor{" "}
                <span className="italic text-green-600 hover:text-green-900 animate-in-5s">
                  expertise op maat
                </span>
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Ontdek hoe onze diensten jouw groei kunnen versnellen.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="grid gap-8">
            {diensten.map((dienst, index) => (
              <motion.div
                key={dienst.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative border-t border-border py-8"
              >
                <Link
                  href={dienst.href}
                  className="flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-medium">{dienst.title}</h3>
                    <p className="mt-2 max-w-2xl text-muted-foreground">
                      {dienst.description}
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
