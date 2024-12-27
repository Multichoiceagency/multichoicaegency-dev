"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const technologieën = [
  {
    categorie: "CMS & Digital Experience",
    items: [
      { naam: "Adobe Experience Manager", logo: "/logos/aem.svg", href: "/wat-we-doen/stacks/adobe-experience-cloud" },
      { naam: "Sitecore", logo: "/logos/sitecore.svg", href: "/wat-we-doen/stacks/sitecore" },
      { naam: "Optimizely", logo: "/logos/optimizely.svg", href: "/wat-we-doen/stacks/optimizely" },
      { naam: "Contentful", logo: "/logos/contentful.svg", href: "/wat-we-doen/stacks/contentful" }
    ]
  },
  {
    categorie: "E-commerce",
    items: [
      { naam: "Shopify", logo: "/logos/shopify.svg", href: "/wat-we-doen/stacks/shopify" },
      { naam: "Adobe Commerce", logo: "/logos/magento.svg", href: "/wat-we-doen/stacks/adobe-commerce" },
      { naam: "Commercetools", logo: "/logos/commercetools.svg", href: "/wat-we-doen/stacks/commercetools" },
      { naam: "Shopware", logo: "/logos/shopware.svg", href: "/wat-we-doen/stacks/shopware" }
    ]
  },
  {
    categorie: "Marketing & Analytics",
    items: [
      { naam: "Google Marketing Platform", logo: "/logos/gmp.svg", href: "/wat-we-doen/stacks/google-marketing-platform" },
      { naam: "Salesforce", logo: "/logos/salesforce.svg", href: "/wat-we-doen/stacks/salesforce" },
      { naam: "HubSpot", logo: "/logos/hubspot.svg", href: "/wat-we-doen/stacks/hubspot" },
      { naam: "Adobe Analytics", logo: "/logos/adobe-analytics.svg", href: "/wat-we-doen/stacks/adobe-analytics" }
    ]
  }
]

export function TechnologieGrid() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-[1800px] px-48">
        {technologieën.map((categorie, index) => (
          <motion.div
            key={categorie.categorie}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <h2 className="mb-8 text-2xl font-medium">{categorie.categorie}</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {categorie.items.map((item) => (
                <Link
                  key={item.naam}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-lg border border-border p-6 transition-all hover:border-primary hover:bg-primary/5"
                >
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src={item.logo}
                      alt={item.naam}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.naam}</h3>
                    <div className="mt-1 flex items-center gap-1 text-sm text-primary">
                      <span>Meer info</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}