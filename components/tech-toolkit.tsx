"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const tools = [
  {
    category: "CMS",
    items: [
      { name: "Adobe Experience Manager", logo: "/logos/aem.svg" },
      { name: "Drupal", logo: "/logos/drupal.svg" },
      { name: "Contentful", logo: "/logos/contentful.svg" },
      { name: "Sitecore", logo: "/logos/sitecore.svg" }
    ]
  },
  {
    category: "E-commerce",
    items: [
      { name: "Shopify", logo: "/logos/shopify.svg" },
      { name: "Magento", logo: "/logos/magento.svg" },
      { name: "WooCommerce", logo: "/logos/woocommerce.svg" }
    ]
  }
]

export function TechToolkit() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-[1800px] px-48">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 block text-sm font-medium uppercase tracking-wider text-[#1e7932]"
        >
          TOOLS & PARTNERS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-medium md:text-4xl"
        >
          Onze tech toolkit
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {tools.map((category) => (
            <div key={category.category}>
              <h3 className="mb-6 text-xl font-medium">{category.category}</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {category.items.map((tool) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 rounded-lg border border-border p-4"
                  >
                    <div className="relative h-8 w-8">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            href="/tech-stack"
            className="group inline-flex items-center gap-2 text-primary"
          >
            <span>Bekijk onze volledige tech stack</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}