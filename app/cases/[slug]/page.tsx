import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    slug: 'e-commerce-platform-herontwerp',
    title: 'E-commerce Platform Herontwerp',
    client: 'TechGear',
    image: 'https://picsum.photos/seed/case1/800/600',
    summary: 'Vernieuwde de gebruikersinterface en verbeterde de conversiepercentages met 25%.',
    description: 'TechGear benaderde ons met de uitdaging om hun e-commerce platform te moderniseren. Ons team voerde uitgebreid gebruikersonderzoek uit en implementeerde een complete herontwerp van de gebruikersinterface. Het nieuwe ontwerp richtte zich op het verbeteren van de gebruikerservaring, het stroomlijnen van het afrekenproces en het optimaliseren voor mobiele apparaten. Als gevolg hiervan zag TechGear een aanzienlijke toename in conversiepercentages en klanttevredenheid.',
    results: [
      'Verhoogde conversiepercentages met 25%',
      'Verminderde winkelwagenverlating met 30%',
      'Verbeterde mobiele verkopen met 45%',
      'Verhoogde de gemiddelde orderwaarde met 15%'
    ]
  },
  {
    id: 2,
    slug: 'mobiele-app-ontwikkeling',
    title: 'Mobiele App Ontwikkeling',
    client: 'HealthTrack',
    image: 'https://picsum.photos/seed/case2/800/600',
    summary: 'Ontwikkelde een cross-platform mobiele app die de gebruikersbetrokkenheid met 40% verhoogde.',
    description: 'HealthTrack had een mobiele app nodig om hun bestaande webplatform voor fitnesstracking aan te vullen. We ontwikkelden een cross-platform mobiele app met behulp van React Native, waardoor een consistente ervaring op iOS- en Android-apparaten werd gegarandeerd. De app integreerde met draagbare apparaten en bood realtime gezondheidsinzichten aan gebruikers. Het resultaat was een aanzienlijke toename in gebruikersbetrokkenheid en dagelijks actieve gebruikers.',
    results: [
      'Verhoogde gebruikersbetrokkenheid met 40%',
      'Bereikte 100.000+ downloads in de eerste maand',
      'Verminderde ontwikkeltijd met 30% door gebruik van cross-platform technologie',
      'Integreerde met 10+ populaire draagbare apparaten'
    ]
  },
  {
    id: 3,
    slug: 'cloud-migratie-project',
    title: 'Cloud Migratie Project',
    client: 'DataCorp',
    image: 'https://picsum.photos/seed/case3/800/600',
    summary: 'Migreerde legacy systemen succesvol naar de cloud, waardoor operationele kosten met 30% werden verlaagd.',
    description: 'DataCorp worstelde met verouderde on-premises infrastructuur die steeds duurder werd om te onderhouden. We stelden een uitgebreide cloudmigratiestrategie voor en voerden deze uit, waarbij hun kritieke systemen en gegevens naar een cloudgebaseerde infrastructuur werden verplaatst. Deze migratie verlaagde niet alleen de kosten, maar verbeterde ook de schaalbaarheid, betrouwbaarheid en veiligheid van DataCorp\'s activiteiten.',
    results: [
      'Verminderde operationele kosten met 30%',
      'Verbeterde systeembeschikbaarheid van 99,9% naar 99,99%',
      'Verhoogde de snelheid van gegevensverwerking met 50%',
      'Implementeerde robuuste disaster recovery met 15 minuten RTO'
    ]
  },
  {
    id: 4,
    slug: 'ai-gestuurde-klantenservice',
    title: 'AI-gestuurde Klantenservice',
    client: 'SupportAI',
    image: 'https://picsum.photos/seed/case4/800/600',
    summary: 'Implementeerde een AI-chatbot die 70% van de klantvragen zonder menselijke tussenkomst oploste.',
    description: 'SupportAI wilde hun klantenservice-efficiëntie verbeteren terwijl ze hoge tevredenheidspercentages behielden. We ontwikkelden en implementeerden een AI-gestuurde chatbot met behulp van natuurlijke taalverwerking en machine learning-algoritmen. De chatbot werd getraind op historische klantinteracties en geïntegreerd met SupportAI\'s kennisbank.',
    results: [
      'Loste 70% van de klantvragen op zonder menselijke tussenkomst',
      'Verminderde de gemiddelde responstijd van 15 minuten naar 30 seconden',
      'Verbeterde klanttevredenheidsscores met 25%',
      'Maakte 24/7 klantenondersteuning mogelijk zonder personeelsuitbreiding'
    ]
  },
  {
    id: 5,
    slug: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain Oplossing',
    client: 'LogiChain',
    image: 'https://picsum.photos/seed/case5/800/600',
    summary: 'Ontwikkelde een op blockchain gebaseerd supply chain tracking systeem, waardoor de transparantie met 90% toenam.',
    description: 'LogiChain stond voor uitdagingen met betrekking tot transparantie en traceerbaarheid in de toeleveringsketen. We implementeerden een op blockchain gebaseerde oplossing die een onveranderlijke registratie van alle transacties in de toeleveringsketen bood. Dit systeem maakte realtime tracking van producten van fabricage tot levering mogelijk, wat het vertrouwen en de efficiëntie in de hele toeleveringsketen verbeterde.',
    results: [
      'Verhoogde de transparantie in de toeleveringsketen met 90%',
      'Verminderde de tijd voor productterugroepingen met 65%',
      'Verminderde gevallen van namaakproducten met 80%',
      'Verbeterde de naleving door leveranciers met 40%'
    ]
  },
  {
    id: 6,
    slug: 'virtual-reality-training',
    title: 'Virtual Reality Trainingsplatform',
    client: 'EduVR',
    image: 'https://picsum.photos/seed/case6/800/600',
    summary: 'Creëerde een VR-gebaseerd trainingsplatform dat de trainingstijd met 50% verminderde en de retentie verbeterde.',
    description: 'EduVR wilde bedrijfstrainingen revolutioneren door middel van meeslepende ervaringen. We ontwikkelden een virtual reality trainingsplatform dat realistische scenario\'s simuleerde voor verschillende industrieën. Het platform omvatte interactieve modules, prestatievolgsystemen en adaptieve leertrajecten op basis van de voortgang van de gebruiker.',
    results: [
      'Verminderde trainingstijd met 50%',
      'Verbeterde informatiebehoud met 80%',
      'Verhoogde betrokkenheid van werknemers bij trainingsprogramma\'s met 70%',
      'Verminderde trainingsgerelateerde reiskosten met 90%'
    ]
  },
  {
    id: 7,
    slug: 'iot-slimme-stad',
    title: 'IoT Slimme Stad Infrastructuur',
    client: 'MetroPolis',
    image: 'https://picsum.photos/seed/case7/800/600',
    summary: 'Implementeerde IoT-sensoren en analyses, waardoor de verkeersstroom werd geoptimaliseerd en congestie met 35% werd verminderd.',
    description: 'MetroPolis wilde transformeren naar een slimme stad om het stedelijk leven te verbeteren. We implementeerden een netwerk van IoT-sensoren door de hele stad en ontwikkelden een centraal analyseplatform. Dit systeem verzamelde en analyseerde gegevens over verkeerspatronen, luchtkwaliteit, energieverbruik en meer, waardoor datagestuurde besluitvorming voor stadsbeheer mogelijk werd.',
    results: [
      'Verminderde verkeerscongestie metVerminderde verkeerscongestie met 35%',
      'Verlaagde energieverbruik in openbare gebouwen met 25%',
      'Verbeterde responstijden van hulpdiensten met 40%',
      'Verhoogde tevredenheid van burgers over stadsdiensten met 60%'
    ]
  },
  {
    id: 8,
    slug: 'cybersecurity-vernieuwing',
    title: 'Ondernemingsbrede Cybersecurity Vernieuwing',
    client: 'SecureBank',
    image: 'https://picsum.photos/seed/case8/800/600',
    summary: 'Versterkte de beveiligingsinfrastructuur, waardoor succesvolle cyberaanvallen met 95% werden verminderd.',
    description: 'SecureBank werd geconfronteerd met toenemende cyberbeveiligingsdreigingen en moest zijn digitale verdediging versterken. We voerden een uitgebreide beveiligingsaudit uit en implementeerden een meerlaagse beveiligingsstrategie. Dit omvatte geavanceerde detectiesystemen voor bedreigingen, trainingsprogramma\'s voor medewerkers en robuuste protocollen voor incidentrespons.',
    results: [
      'Verminderde succesvolle cyberaanvallen met 95%',
      'Verbeterde de tijd voor detectie van bedreigingen van uren naar minuten',
      'Bereikte naleving van alle relevante financiële beveiligingsvoorschriften',
      'Verhoogde het vertrouwen van klanten, wat leidde tot een groei van 10% in nieuwe rekeningen'
    ]
  },
  {
    id: 9,
    slug: 'data-analyse-platform',
    title: 'Big Data Analyse Platform',
    client: 'InsightCo',
    image: 'https://picsum.photos/seed/case9/800/600',
    summary: 'Bouwde een schaalbaar data-analyseplatform dat dagelijks 10TB aan gegevens verwerkte en realtime inzichten bood.',
    description: 'InsightCo had een robuust platform nodig om aan hun groeiende behoeften op het gebied van data-analyse te voldoen. We ontwierpen en implementeerden een cloudgebaseerd big data-analyseplatform met behulp van technologieën zoals Hadoop, Spark en machine learning-algoritmen. Het platform kon enorme hoeveelheden gestructureerde en ongestructureerde gegevens in realtime inlezen, verwerken en analyseren.',
    results: [
      'Maakte verwerking van 10TB aan gegevens per dag mogelijk',
      'Verminderde de tijd voor data-analyse van dagen naar minuten',
      'Bood realtime inzichten, waardoor de snelheid van besluitvorming met 70% verbeterde',
      'Ontdekte nieuwe zakelijke kansen, wat leidde tot een omzetgroei van 20%'
    ]
  },
  {
    id: 10,
    slug: 'duurzaam-energiebeheer',
    title: 'Duurzaam Energiebeheersysteem',
    client: 'GreenEnergy',
    image: 'https://picsum.photos/seed/case10/800/600',
    summary: 'Ontwikkelde een AI-gestuurd energiebeheersysteem dat de CO2-uitstoot met 40% verminderde.',
    description: 'GreenEnergy streefde ernaar het energieverbruik te optimaliseren en de CO2-voetafdruk voor hun klanten te verminderen. We ontwikkelden een AI-gestuurd energiebeheersysteem dat machine learning gebruikte om energiegebruikspatronen te voorspellen en het verbruik te optimaliseren. Het systeem integreerde met verschillende slimme apparaten en hernieuwbare energiebronnen om een uitgebreid energie-ecosysteem te creëren.',
    results: [
      'Verminderde CO2-uitstoot met 40%',
      'Verlaagde energiekosten voor klanten met gemiddeld 30%',
      'Verhoogde het gebruik van hernieuwbare energie met 50%',
      'Verbeterde de stabiliteit van het elektriciteitsnet, waardoor stroomuitval met 75% werd verminderd'
    ]
  }
];

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find(cs => cs.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/cases" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Terug naar Casestudies
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
      <p className="text-xl text-gray-600 mb-6">Klant: {caseStudy.client}</p>
      <div className="relative h-96 mb-8">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="prose prose-lg max-w-none">
        <h2>Overzicht</h2>
        <p>{caseStudy.description}</p>
        <h2>Resultaten</h2>
        <ul>
          {caseStudy.results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

