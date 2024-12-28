"use client"

import { useState, useEffect } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'

interface PricingFeature {
  name: string
  basisWordPress: boolean
  premium: boolean
  exclusive: boolean
  enterprise: boolean
}

const features: PricingFeature[] = [
  { name: "Basis gebruiker", basisWordPress: true, premium: true, exclusive: true, enterprise: true },
  { name: "Opslag", basisWordPress: true, premium: true, exclusive: true, enterprise: true },
  { name: "Aantal pagina's", basisWordPress: true, premium: true, exclusive: true, enterprise: true },
  { name: "AI Ready*", basisWordPress: false, premium: true, exclusive: true, enterprise: true },
  { name: "Levertijd", basisWordPress: true, premium: true, exclusive: true, enterprise: true },
  { name: "Responsive design", basisWordPress: true, premium: true, exclusive: true, enterprise: true },
  { name: "Content Management", basisWordPress: true, premium: true, exclusive: true, enterprise: true },
  { name: "Basis SEO Monitor", basisWordPress: true, premium: true, exclusive: true, enterprise: true },
  { name: "Standaard componenten", basisWordPress: true, premium: true, exclusive: true, enterprise: true },
  { name: "Extra modules mogelijk", basisWordPress: false, premium: true, exclusive: true, enterprise: true },
  { name: "CMS training", basisWordPress: true, premium: true, exclusive: true, enterprise: true },
  { name: "FAQ component", basisWordPress: true, premium: true, exclusive: true, enterprise: true },
  { name: "Nieuws module", basisWordPress: false, premium: true, exclusive: true, enterprise: true },
  { name: "Formulieren module", basisWordPress: false, premium: true, exclusive: true, enterprise: true },
  { name: "SEO module", basisWordPress: false, premium: true, exclusive: true, enterprise: true },
  { name: "Multi-taal module", basisWordPress: false, premium: false, exclusive: true, enterprise: true },
  { name: "USP component", basisWordPress: false, premium: false, exclusive: true, enterprise: true },
  { name: "Reviews module", basisWordPress: false, premium: false, exclusive: true, enterprise: true },
  { name: "Maatwerk module", basisWordPress: false, premium: false, exclusive: true, enterprise: true },
  { name: "Geavanceerde integraties", basisWordPress: false, premium: false, exclusive: false, enterprise: true },
  { name: "Uitgebreide analytics", basisWordPress: false, premium: false, exclusive: false, enterprise: true },
  { name: "Personalisatie", basisWordPress: false, premium: false, exclusive: false, enterprise: true },
]

const packages = [
  { name: "Basis Pakket", description: "Custom WordPress website met essentiële functionaliteiten voor effectieve informatievoorziening", price: "Vanaf € 3.500,-", hosting: "Basis Hosting\n€ 45,-", support: "Basis Support (SLA) vanaf € 45,-", tech: "WordPress" },
  { name: "Premium Pakket", description: "Professionele website met uitgebreide content mogelijkheden en modules", price: "Vanaf € 5.500,-", hosting: "Professional Hosting\n€ 60,-", support: "Professional Support (SLA) vanaf € 60,-", tech: "Keuze uit: Next.js, Vue.js, WordPress, of custom" },
  { name: "Exclusive Pakket", description: "Complete website gericht op het omzetten van bezoekers naar klanten", price: "Vanaf € 7.500,-", hosting: "Professional Hosting +\nvanaf € 90,-", support: "Professional Support + vanaf € 90,-", tech: "Keuze uit: Next.js, Vue.js, WordPress, of custom" },
  { name: "Enterprise / Zakelijk", description: "Geavanceerde oplossing op maat met uitgebreide functionaliteiten en integraties", price: "€ 10.000,- tot € 30.000,-", hosting: "Enterprise Hosting\nvanaf € 150,-", support: "Enterprise Support 24/7 vanaf € 250,-", tech: "Keuze uit: Next.js, Vue.js, WordPress, of custom" },
]

export function PricingTable() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null)
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Effectieve website oplossingen</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Elke organisatie heeft unieke doelen voor haar website. Of het nu gaat om een basis WordPress site, een geavanceerde webapplicatie, of een volledig op maat gemaakte enterprise oplossing, 
            wij ontwikkelen elke website met één doel: maximaal resultaat voor uw organisatie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              className={`bg-card rounded-lg shadow-lg p-6 transition-all duration-300 flex flex-col ${expandedPackage === pkg.name ? 'bg-primary text-primary-foreground' : ''}`}
              onMouseEnter={() => setHoveredPackage(pkg.name)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              <motion.h3 
                className="text-xl font-semibold mb-2"
                animate={{ color: expandedPackage === pkg.name ? "var(--primary-foreground)" : (hoveredPackage === pkg.name ? "var(--primary)" : "var(--foreground)") }}
              >
                {pkg.name}
              </motion.h3>
              <p className={`text-sm ${expandedPackage === pkg.name ? 'text-primary-foreground' : 'text-muted-foreground'} h-16 mb-4`}>{pkg.description}</p>
              <div className="mt-auto">
                <motion.p 
                  className="text-lg font-semibold mb-2"
                  animate={{ scale: hoveredPackage === pkg.name ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {pkg.price}
                </motion.p>
                <Button 
                  variant={expandedPackage === pkg.name ? "secondary" : "outline"}
                  className={`w-full rounded-full mb-4 overflow-hidden ${expandedPackage === pkg.name ? 'bg-primary-foreground text-primary' : ''}`}
                  onClick={() => setExpandedPackage(expandedPackage === pkg.name ? null : pkg.name)}
                >
                  <motion.div
                    className="flex items-center justify-center w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Details
                    <motion.div
                      animate={{ rotate: expandedPackage === pkg.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </Button>
              </div>
              <AnimatePresence>
                {expandedPackage === pkg.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-primary-foreground"
                  >
                    <div className="mb-2">
                      <strong>Hosting:</strong><br />{pkg.hosting}
                    </div>
                    <div className="mb-2">
                      <strong>Support:</strong><br />{pkg.support}
                    </div>
                    <div>
                      <strong>Technologie:</strong><br />
                      {pkg.tech}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-muted rounded-lg p-8"
        >
          <h3 className="text-xl font-semibold mb-4">Vergelijk functies</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-2">Functie</th>
                  {packages.map(pkg => (
                    <th key={pkg.name} className="text-center py-2">{pkg.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr 
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ backgroundColor: "var(--accent)", transition: { duration: 0.2 } }}
                    className={index % 2 === 0 ? 'bg-background' : 'bg-muted'}
                  >
                    <td className="py-2">{feature.name}</td>
                    {Object.entries(feature).slice(1).map(([key, value]) => (
                      <td key={key} className="text-center py-2">
                        {value ? (
                          <motion.div
                            whileHover={{ scale: 1.2, color: "var(--primary)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Check className="inline-block h-4 w-4 text-primary" />
                          </motion.div>
                        ) : '-'}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          * AI Ready betekent dat de website is voorbereid voor toekomstige AI-integraties en -functionaliteiten.
        </motion.div>
      </div>
    </section>
  )
}

