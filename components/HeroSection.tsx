"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Gauge, Users } from "lucide-react"
import { useEffect, useState, useRef } from "react"

// Carousel componenten
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function PartnersServicesSection() {
  // Configureerbare map voor partner logo's
  const logoFolderPath = "/partners/zwarte-logos"

  // Partner logo bestandsnamen
  const partnerLogos = [
    "Adeaconstruct.png",
    "adeainfra.png",
    "Alkanaany.png",
    "Autoservice Maestropoort.png",
    "Autotradervoorschoten.png",
    "BGR Taxi Amsterdam.png",
    "Binvino.png",
    "BK Bewindvoering.png",
    "Bluelinenetwork.png",
    "bouhs-steigerwerken.png",
    "CKN infratechniek.png",
    "Dutchtransportgroup.png",
    "E&H Bouw bv.png",
    "Ergon bouw aannemersbedrijf.png",
    "gardenlux.png",
    "Hengelvissportschiedam.png",
    "HUB Makelaardij.png",
    "Kozan klussenbedrijf.png",
    "Lionzone.png",
    "Lovka.png",
    "Maazcleanrevolution.png",
    "Menstale.png",
    "Moleculeperfumes.png",
    "notenleverancier.png",
    "Orangereclame.png",
    "Powerforce uitzendgroep.png",
    "sunsen-zonnestudio.png",
    "sydneydranken.png",
    "Tecura therapie coaching.png",
    "Volta elektrotechniek.png",
    "YZ Content.png",
  ]
  
  // Volledige paden naar de logo's
  const partners = partnerLogos.map((logo) => `${logoFolderPath}/${logo}`)

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
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Automatisch scrollen voor de carousel
  const [api, setApi] = useState<any>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!api) return

    // Start automatisch scrollen
    intervalRef.current = setInterval(() => {
      api.scrollNext()
    }, 3000)

    // Cleanup bij unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [api])

  return (
    <section className="w-full py-16 md:py-24 bg-green-50">
      <div className="container max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Partners Carousel */}
        <motion.div className="mb-20" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h2 className="text-2xl font-bold text-center mb-12 text-green-800" variants={itemVariants}>
            Vertrouwd door toonaangevende bedrijven
          </motion.h2>

          <motion.div variants={itemVariants} className="mx-auto max-w-5xl">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                    <div className="p-1">
                      <div className="bg-white p-4 rounded-lg shadow-sm h-[120px] flex items-center justify-center relative">
                        <Image
                          src={partner || "/placeholder.svg"}
                          alt={`Partner logo ${index + 1}`}
                          fill
                          style={{ objectFit: "contain" }}
                          className="p-2"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious className="relative transform-none bg-green-100 hover:bg-green-200 text-green-800 border-green-200" />
                <CarouselNext className="relative transform-none bg-green-100 hover:bg-green-200 text-green-800 border-green-200" />
              </div>
            </Carousel>
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

