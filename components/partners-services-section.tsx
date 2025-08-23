"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Gauge, Users } from "lucide-react"

export default function HeroSection() {
  const partners = [
    // witte logos
    "/partners/witte-logos/Adeaconstruct.png",
    "/partners/witte-logos/adeainfra.png",
    "/partners/witte-logos/Alkanaany.png",
    "/partners/witte-logos/Autoservice-Maestropoort.png",
    "/partners/witte-logos/Autotraderovorschooten.png",
    "/partners/witte-logos/BGR-TaxiAmsterdam.png",
    "/partners/witte-logos/Binvino.png",
    "/partners/witte-logos/BK-Bewindvoering.png",
    "/partners/witte-logos/Bluelinenetwork.png",
    "/partners/witte-logos/CKN-infratechniek.png",
    "/partners/witte-logos/Cleopatra-beauty.png",
    "/partners/witte-logos/Dutchtransportgroup.png",
    "/partners/witte-logos/E&H-Bouwbv.png",
    "/partners/witte-logos/Ergon-bouw-aannemersbedrijf.png",
    "/partners/witte-logos/handtekening-wit.png",
    "/partners/witte-logos/Hengelvissportschiedam.png",
    "/partners/witte-logos/HUB-Makelaardij.png",
    "/partners/witte-logos/Kozan-klusbedrijf.png",
    "/partners/witte-logos/Lionzone.png",
    "/partners/witte-logos/logo-bouhs-steigerwerken-1.png",
    "/partners/witte-logos/Lovka.png",
    "/partners/witte-logos/Maazcleanrevolution.png",
    "/partners/witte-logos/Menstale.png",
    "/partners/witte-logos/Moleculeperfumes.png",
    "/partners/witte-logos/notenleverancier.png",
    "/partners/witte-logos/Orangereclame.png",
    "/partners/witte-logos/Powerforce-uitzendgroep.png",
    "/partners/witte-logos/Sunsen-Zonnestudio.png",
    "/partners/witte-logos/sydneydranken.png",
    "/partners/witte-logos/Tovla-elektrotechniek.png",
    "/partners/witte-logos/YZ-Content.png",

    // zwarte logos (voorbeeld uit jouw snippet)
    "/partners/zwarte-logos/sydneydranken.png",
    "/partners/zwarte-logos/lovka.png",
    "/partners/zwarte-logos/dutchtransportgroup.png",
    "/partners/zwarte-logos/alkanaany.png",
    "/partners/zwarte-logos/binvino.png",
    "/partners/zwarte-logos/powerforce-uitzendgroep.png",
    "/partners/zwarte-logos/sunsen-zonnestudio.png",
    "/partners/zwarte-logos/bouhs-steigerwerken.png",
    "/partners/zwarte-logos/gardenlux.png",
    "/partners/zwarte-logos/hengelvissportschiedam.png",
  ]

  const services = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Inclusieve webomgevingen",
      description:
        "Sommige organisaties werken al jaren aan digitale inclusiviteit, terwijl anderen net beginnen. Bij Multichoiceagency hebben we jarenlange expertise op dit gebied. We zijn opgeleid door toonaangevende certificeringsinstanties in Nederland en hebben toegankelijkheid volledig geïntegreerd in onze werkwijze, van concept tot realisatie.",
      link: "toegankelijkheid",
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Snelheid en efficiëntie",
      description:
        "Een snelle website is meer dan alleen gebruikersgemak. Het verbetert je positie in zoekmachines en zorgt voor efficiënte code die minder serverruimte verbruikt. Als ervaren webontwikkelaars weten we precies welke optimalisaties het grootste verschil maken voor jouw specifieke situatie.",
      link: "performance",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Veilige digitale omgeving",
      description:
        "Beveiliging is geen optie maar een standaard onderdeel van elk project dat we uitvoeren. We werken samen met vooraanstaande hostingpartners en zorgen voor een perfecte afstemming tussen je website en serveromgeving, wat resulteert in maximale bescherming tegen online bedreigingen.",
      link: "beveiliging",
    },
  ]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,   // was 0.3
      staggerChildren: 0.05, // was 0.2
    },
  },
}

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",   // snappier dan tween
      stiffness: 520,   // hoger = sneller
      damping: 26,      // lager = minder traag
      mass: 0.6,
    },
  },
}

  return (
    <section className="w-full py-16 md:py-24 bg-green-50">
      <div className="container max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Partners Grid */}
        <motion.div className="mb-20" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h2 className="text-2xl font-bold text-center mb-12 text-green-800" variants={itemVariants}>
            Vertrouwd door toonaangevende bedrijven
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
            variants={containerVariants}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="w-full max-w-[200px] h-[100px] relative flex items-center justify-center bg-white p-4 rounded-lg shadow-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <Image
                  src={partner || "/placeholder.svg"}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="transition-opacity duration-300 hover:opacity-80 p-2"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div className="space-y-12" initial="hidden" animate="visible" variants={containerVariants}>
          <div className="text-center space-y-4">
            <motion.h3 className="text-lg font-medium text-green-600" variants={itemVariants}>
              Expertise
            </motion.h3>
            <motion.h2 className="text-3xl md:text-4xl font-bold text-green-900" variants={itemVariants}>
              Zo versterken wij jouw online aanwezigheid
            </motion.h2>
          </div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-800">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <Link
                  href={`/diensten/${service.link}`}
                  className="text-green-600 font-medium hover:text-green-700 hover:underline inline-flex items-center"
                >
                  Ontdek meer over {service.title.toLowerCase()}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

