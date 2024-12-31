'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPalette, faMobileAlt, faPencilRuler, faCode, faServer, faShoppingCart, 
  faLink, faShield, faImage, faBullhorn, faSearch, faMegaphone, faGlobe, 
  faPenFancy, faTachometerAlt, faUsers, faUserTie, faChartLine, faRobot, 
  faLaptopCode, faNetworkWired, faFileAlt, faDatabase, faCalendarAlt,
  faHandshake, faTruck
} from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Creëer prototypes en wireframes voor interactieve en gebruiksvriendelijke ontwerpen.',
    icon: faPalette,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    category: 'Diensten'
  },
  {
    id: 'responsief-webdesign',
    title: 'Responsief Webdesign',
    description: 'Zorg voor een naadloze gebruikerservaring op desktop, tablet en mobiel.',
    icon: faMobileAlt,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
    category: 'Diensten'
  },
  {
    id: 'custom-webdesign',
    title: 'Custom Webdesign',
    description: 'Ontwikkel maatwerkoplossingen die perfect passen bij jouw huisstijl.',
    icon: faPencilRuler,
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
    category: 'Diensten'
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Bouw snelle en aantrekkelijke interfaces met moderne technologieën.',
    icon: faCode,
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    category: 'Diensten'
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Ontwikkel robuuste en schaalbare backend-oplossingen voor elke toepassing.',
    icon: faServer,
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    category: 'Oplossingen'
  },
  {
    id: 'e-commerce-platformontwikkeling',
    title: 'E-commerce Platformontwikkeling',
    description: 'Bouw gebruiksvriendelijke en schaalbare e-commerce oplossingen.',
    icon: faShoppingCart,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    category: 'Oplossingen'
  },
  {
    id: 'headless-e-commerce',
    title: 'Headless E-commerce',
    description: 'Flexibele e-commerce oplossingen met gescheiden front- en backend.',
    icon: faLink,
    image: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg',
    category: 'Oplossingen'
  },
  {
    id: 'beveiliging',
    title: 'Beveiliging',
    description: 'Implementeer robuuste beveiligingsmaatregelen voor uw digitale assets.',
    icon: faShield,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    category: 'Oplossingen'
  },
  {
    id: 'logo-ontwerp-visuele-identiteit',
    title: 'Logo Ontwerp & Visuele Identiteit',
    description: 'Creëer een unieke en herkenbare merkidentiteit.',
    icon: faImage,
    image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg',
    category: 'Oplossingen'
  },
  {
    id: 'merkstrategie-storytelling',
    title: 'Merkstrategie en Storytelling',
    description: 'Ontwikkel een sterke merkstrategie en overtuigende verhalen.',
    icon: faBullhorn,
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg',
    category: 'Oplossingen'
  },
  {
    id: 'technische-seo',
    title: 'Technische SEO',
    description: 'Optimaliseer uw website voor betere zoekresultaten.',
    icon: faSearch,
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg',
    category: 'Oplossingen'
  },
  {
    id: 'digitale-marketingcampagnes',
    title: 'Digitale Marketingcampagnes',
    description: 'Effectieve online campagnes om uw doelgroep te bereiken.',
    icon: faMegaphone,
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg',
    category: 'Oplossingen'
  },
  {
    id: 'hosting-domeinbeheer',
    title: 'Hosting en Domeinbeheer',
    description: 'Betrouwbare hosting en efficiënt domeinbeheer.',
    icon: faGlobe,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg',
    category: 'Oplossingen'
  },
  {
    id: 'content-creatie',
    title: 'Content Creatie',
    description: 'Engaging content die uw merk versterkt.',
    icon: faPenFancy,
    image: 'https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg',
    category: 'Oplossingen'
  },
  {
    id: 'dashboard-ontwikkeling',
    title: 'Dashboard Ontwikkeling',
    description: 'Creëer maatwerk dashboards met data-inzichten en interactieve functionaliteiten.',
    icon: faTachometerAlt,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    category: 'Nieuw'
  },
  {
    id: 'crm-systemen',
    title: 'CRM Systemen',
    description: 'Beheer klantrelaties en verkoopprocessen met efficiënte CRM-oplossingen.',
    icon: faUsers,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    category: 'Nieuw'
  },
  {
    id: 'lead-management-systemen',
    title: 'Lead Management Systemen',
    description: 'Automatiseer het beheer van leads en optimaliseer je verkoopprocessen.',
    icon: faUserTie,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    category: 'Nieuw'
  },
  {
    id: 'marketing-automatisering',
    title: 'Marketing Automatisering',
    description: 'Implementeer software om marketingcampagnes effectiever en efficiënter te maken.',
    icon: faChartLine,
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg',
    category: 'Nieuw'
  },
  {
    id: 'ai-geoptimaliseerde-systemen',
    title: 'AI Geoptimaliseerde Systemen',
    description: 'Gebruik AI om processen te optimaliseren en complexe problemen op te lossen.',
    icon: faRobot,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    category: 'Nieuw'
  },
  {
    id: 'webapplicaties',
    title: 'Webapplicaties',
    description: 'Ontwikkel moderne, responsieve webapplicaties die overal toegankelijk zijn.',
    icon: faLaptopCode,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    category: 'Nieuw'
  },
  {
    id: 'portalen-platformen',
    title: 'Portalen en Platformen',
    description: 'Ontwikkel portalen en platformen voor interne en externe samenwerking.',
    icon: faNetworkWired,
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
    category: 'Nieuw'
  },
  {
    id: 'document-management-systemen',
    title: 'Document Management Systemen',
    description: 'Beheer documenten efficiënt met versiebeheer en cloudopslag.',
    icon: faFileAlt,
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
    category: 'Nieuw'
  },
  {
    id: 'data-management-oplossingen',
    title: 'Data Management Oplossingen',
    description: 'Optimaliseer en beheer grote datasets met betrouwbare datamanagementoplossingen.',
    icon: faDatabase,
    image: 'https://images.pexels.com/photos/5598301/pexels-photo-5598301.jpeg',
    category: 'Nieuw'
  },
  {
    id: 'planning-rooster-systemen',
    title: 'Planning en Rooster Systemen',
    description: 'Implementeer tools voor efficiënte planning en tijdbeheer.',
    icon: faCalendarAlt,
    image: 'https://images.pexels.com/photos/1020323/pexels-photo-1020323.jpeg',
    category: 'Nieuw'
  }
]

const portalTypes = [
  {
    title: 'Ledenportaal',
    description: 'Voor verenigingen / stichtingen. Digitaliseer administratieve handelingen voor leden.',
    link: '/diensten/ledenportaal',
    icon: faUsers,
    fullDescription: 'Elke vereniging heeft leden. Stel je voor dat bijna alle administratieve handelingen gedigitaliseerd zijn. Leden kunnen hun gegevens inzien, wijzigen, abonnementen beheren en verenigingsnieuws bekijken. Dit bespaart tijd en werk.'
  },
  {
    title: 'Klantenportaal',
    description: 'Voor commerciële organisaties. Verbeter klanttevredenheid en verhoog omzet.',
    link: '/diensten/klantenportaal',
    icon: faUserTie,
    fullDescription: 'Met een klantenportaal kunnen jouw klanten 24/7 bestellingen doorgeven, afspraken maken, orders volgen en informatie bekijken. Dit verbetert klanttevredenheid en verhoogt omzet.'
  },
  {
    title: 'Medewerkersportaal',
    description: 'Intranet voor medewerkers. Versterk interne communicatie.',
    link: '/diensten/medewerkersportaal',
    icon: faUsers,
    fullDescription: 'Een medewerkersportaal fungeert als een intranet waar werknemers informatie kunnen bekijken en delen, zoals loonstroken, planning, beschikbaarheid en (bedrijfs)nieuws. Dit versterkt interne communicatie.'
  },
  {
    title: 'Partnerportaal',
    description: 'Voor zakelijke samenwerkingen. Verbeter samenwerking en transparantie.',
    link: '/diensten/partnerportaal',
    icon: faHandshake,
    fullDescription: 'Partners kunnen toegang krijgen tot gedeelde projecten, documenten en statusupdates. Hiermee verbeter je samenwerking, communicatie en transparantie met je zakelijke partners.'
  },
  {
    title: 'Leveranciersportaal',
    description: 'Voor supply chain management. Stroomlijn je supply chain en minimaliseer fouten.',
    link: '/diensten/leveranciersportaal',
    icon: faTruck,
    fullDescription: 'Met een leveranciersportaal kun je bestellingen beheren, leveringsstatussen volgen en eenvoudig communiceren met je leveranciers. Dit stroomlijnt je supply chain en minimaliseert fouten.'
  },
  {
    title: 'Salesportaal',
    description: 'Voor inzichten in je bedrijf. Verbeter strategieën en identificeer groeikansen.',
    link: '/diensten/salesportaal',
    icon: faChartLine,
    fullDescription: 'Met een salesportaal krijg je realtime inzicht in verkoopgegevens, klantanalyses en prestatieoverzichten. Hiermee kun je strategieën verbeteren en groeikansen identificeren.'
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Onze Diensten
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Ontdek ons uitgebreide aanbod van digitale diensten om uw bedrijf naar het volgende niveau te tillen.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="group"
          >
            Neem contact op
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Expertise</h2>
          {['Diensten', 'Oplossingen', 'Nieuw'].map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {services.filter(service => service.category === category).map((service) => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-64">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        width={1024}
                        height={1024}
                        className="object-cover w-full h-full"
                        priority
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <FontAwesomeIcon icon={service.icon} className="text-white text-4xl" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                      <Link 
                        href={`/diensten/${service.id}`}
                        className="inline-flex items-center mt-4 text-primary hover:underline"
                      >
                        Lees meer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portal Types Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Portaal Oplossingen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portalTypes.map((portal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-primary/10">
                    <FontAwesomeIcon icon={portal.icon} className="text-primary text-2xl" />
                  </div>
                  <CardTitle>{portal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{portal.fullDescription}</CardDescription>
                  <Link 
                    href={portal.link}
                    className="inline-flex items-center mt-4 text-primary hover:underline"
                  >
                    Meer informatie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Digitale Transformatie met Multichoice Agency</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              In het huidige digitale tijdperk is het essentieel voor bedrijven om zich aan te passen en te innoveren. Multichoice Agency staat klaar om u te begeleiden bij elke stap van uw digitale transformatie. Onze uitgebreide diensten zijn ontworpen om uw online aanwezigheid te versterken, uw bedrijfsprocessen te stroomlijnen en uw klantervaring naar een hoger niveau te tillen.
            </p>

            <h3>Webontwikkeling en Design</h3>
            <p>
              Onze expertise in webontwikkeling en design vormt de basis van onze dienstverlening. We creëren niet zomaar websites; we bouwen digitale ervaringen die uw merk tot leven brengen. Van responsieve webdesign tot op maat gemaakte webapplicaties, ons team van ervaren ontwikkelaars en designers zorgt ervoor dat uw online presence niet alleen visueel aantrekkelijk is, maar ook functioneel en gebruiksvriendelijk.
            </p>

            <h3>E-commerce Oplossingen</h3>
            <p>
              In de wereld van online winkelen bieden we geavanceerde e-commerce oplossingen die uw verkoop kunnen stimuleren. Of u nu een startende ondernemer bent of een gevestigd bedrijf, onze e-commerce platforms zijn schaalbaar en aanpasbaar aan uw specifieke behoeften. We integreren veilige betalingsgateways, gebruiksvriendelijke interfaces en krachtige backend-systemen om een naadloze winkelervaring te garanderen voor uw klanten.
            </p>

            <h3>Digitale Marketing en SEO</h3>
            <p>
              Een sterke online aanwezigheid is cruciaal, maar zichtbaarheid is de sleutel tot succes. Onze digitale marketingstrategieën en SEO-diensten zijn ontworpen om uw bereik te vergroten en uw doelgroep effectief te bereiken. We gebruiken data-gedreven inzichten om gerichte campagnes te creëren die resoneren met uw publiek en meetbare resultaten opleveren.
            </p>

            <h3>Portaal- en Platformontwikkeling</h3>
            <p>
              Voor bedrijven die op zoek zijn naar manieren om hun interne processen te optimaliseren of de samenwerking met partners te verbeteren, bieden we op maat gemaakte portaal- en platformoplossingen. Of het nu gaat om een klantenportaal, een medewerkersportaal of een complex samenwerkingsplatform, we ontwikkelen systemen die de efficiëntie verhogen en de communicatie verbeteren.
            </p>

            <h3>Innovatieve Technologieën</h3>
            <p>
              We blijven altijd op de hoogte van de nieuwste technologische ontwikkelingen. Van AI-geoptimaliseerde systemen tot geavanceerde data-analysemogelijkheden, we integreren cutting-edge technologieën in onze oplossingen om uw bedrijf een concurrentievoordeel te geven. Onze expertise in gebieden zoals machine learning en big data stelt ons in staat om intelligente systemen te bouwen die uw bedrijfsprocessen kunnen automatiseren en optimaliseren.
            </p>

            <h3>Maatwerk Softwareontwikkeling</h3>
            <p>
              Soms voldoen standaardoplossingen niet aan de unieke behoeften van uw bedrijf. Daarom bieden we maatwerk softwareontwikkeling. Of het nu gaat om een specifieke bedrijfsapplicatie, een geïntegreerd managementsysteem of een innovatief product, ons team van ervaren ontwikkelaars kan uw ideeën omzetten in realiteit.
            </p>

            <h3>Ondersteuning en Onderhoud</h3>
            <p>
              Onze betrokkenheid eindigt niet bij de lancering van uw project. We bieden doorlopende ondersteuning en onderhoud om ervoor te zorgen dat uw digitale oplossingen optimaal blijven presteren. Van regelmatige updates en beveiligingspatches tot prestatie-optimalisatie, we zorgen ervoor dat uw investering beschermd blijft en blijft groeien.
            </p>

            <h3>Partnerschap voor Succes</h3>
            <p>
              Bij Multichoice Agency geloven we in het opbouwen van langdurige partnerschappen met onze klanten. We nemen de tijd om uw bedrijf, uw doelen en uw uitdagingen te begrijpen. Deze aanpak stelt ons in staat om oplossingen te leveren die niet alleen aan uw huidige behoeften voldoen, maar ook schaalbaar zijn om uw toekomstige groei te ondersteunen.
            </p>

            <p>
              Of u nu een startup bent die de markt wil betreden, een middelgroot bedrijf dat klaar is voor de volgende groeifase, of een grote onderneming die op zoek is naar digitale innovatie, Multichoice Agency heeft de expertise, ervaring en toewijding om uw digitale ambities waar te maken. Neem vandaag nog contact met ons op en ontdek hoe we samen uw digitale toekomst kunnen vormgeven.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om uw digitale transformatie te starten?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Laat ons u helpen uw digitale ambities waar te maken. Neem vandaag nog contact met ons op voor een gratis consultatie.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="group"
          >
            Start uw project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </main>
  )
}

