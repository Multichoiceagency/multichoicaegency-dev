import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Mock data voor casestudies
const caseStudies = [
  {
    id: 1,
    slug: 'e-commerce-platform-herontwerp',
    title: 'E-commerce Platform Herontwerp',
    client: 'TechGear',
    image: 'https://picsum.photos/seed/case1/800/600',
    summary: 'Vernieuwde de gebruikersinterface en verbeterde de conversiepercentages met 25%.'
  },
  {
    id: 2,
    slug: 'mobiele-app-ontwikkeling',
    title: 'Mobiele App Ontwkkeling',
    client: 'HealthTrack',
    image: 'https://picsum.photos/seed/case2/800/600',
    summary: 'Ontwikkelde een cross-platform mobiele app die de gebruikersbetrokkenheid met 40% verhoogde.'
  },
  {
    id: 3,
    slug: 'cloud-migratie-project',
    title: 'Cloud Migratie Project',
    client: 'DataCorp',
    image: 'https://picsum.photos/seed/case3/800/600',
    summary: 'Migreerde legacy systemen succesvol naar de cloud, waardoor operationele kosten met 30% werden verlaagd.'
  },
  {
    id: 4,
    slug: 'ai-gestuurde-klantenservice',
    title: 'AI-gestuurde Klantenservice',
    client: 'SupportAI',
    image: 'https://picsum.photos/seed/case4/800/600',
    summary: 'Implementeerde een AI-chatbot die 70% van de klantvragen zonder menselijke tussenkomst oploste.'
  },
  {
    id: 5,
    slug: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain Oplossing',
    client: 'LogiChain',
    image: 'https://picsum.photos/seed/case5/800/600',
    summary: 'Ontwikkelde een op blockchain gebaseerd supply chain tracking systeem, waardoor de transparantie met 90% toenam.'
  },
  {
    id: 6,
    slug: 'virtual-reality-training',
    title: 'Virtual Reality Trainingsplatform',
    client: 'EduVR',
    image: 'https://picsum.photos/seed/case6/800/600',
    summary: 'Creëerde een VR-gebaseerd trainingsplatform dat de trainingstijd met 50% verminderde en de retentie verbeterde.'
  },
  {
    id: 7,
    slug: 'iot-slimme-stad',
    title: 'IoT Slimme Stad Infrastructuur',
    client: 'MetroPolis',
    image: 'https://picsum.photos/seed/case7/800/600',
    summary: 'Implementeerde IoT-sensoren en analyses, waardoor de verkeersstroom werd geoptimaliseerd en congestie met 35% werd verminderd.'
  },
  {
    id: 8,
    slug: 'cybersecurity-vernieuwing',
    title: 'Ondernemingsbrede Cybersecurity Vernieuwing',
    client: 'SecureBank',
    image: 'https://picsum.photos/seed/case8/800/600',
    summary: 'Versterkte de beveiligingsinfrastructuur, waardoor succesvolle cyberaanvallen met 95% werden verminderd.'
  },
  {
    id: 9,
    slug: 'data-analyse-platform',
    title: 'Big Data Analyse Platform',
    client: 'InsightCo',
    image: 'https://picsum.photos/seed/case9/800/600',
    summary: 'Bouwde een schaalbaar data-analyseplatform dat dagelijks 10TB aan gegevens verwerkte en realtime inzichten bood.'
  },
  {
    id: 10,
    slug: 'duurzaam-energiebeheer',
    title: 'Duurzaam Energiebeheersysteem',
    client: 'GreenEnergy',
    image: 'https://picsum.photos/seed/case10/800/600',
    summary: 'Ontwikkelde een AI-gestuurd energiebeheersysteem dat de CO2-uitstoot met 40% verminderde.'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function CasesPage() {
  return (
    <div className="space-y-8">
      <motion.h1 
        className="text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Onze Casestudies
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((caseStudy) => (
          <motion.div 
            key={caseStudy.id}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/cases/${caseStudy.slug}`} className="block">
              <div className="relative h-48">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{caseStudy.title}</h2>
                <p className="text-sm text-gray-600 mb-2">Klant: {caseStudy.client}</p>
                <p className="text-gray-700">{caseStudy.summary}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

