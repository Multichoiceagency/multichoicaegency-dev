'use client'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeroNieuw from "@/components/HeroNieuw";

const sections = [
  {
    title: "Onze Hoofddiensten",
    services: [
      {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "Creëer prototypes en wireframes voor interactieve en gebruiksvriendelijke ontwerpen.",
        url: "/services/ui-ux-design",
      },
      {
        id: "responsief-webdesign",
        title: "Responsief Webdesign",
        description: "Zorg voor een naadloze gebruikerservaring op desktop, tablet en mobiel.",
        url: "/services/responsief-webdesign",
      },
      {
        id: "Website laten maken",
        title: "Website laten maken",
        description: "Wij ontwikkelen maatwerkoplossingen die perfect passen bij jouw huisstijl.",
        url: "/website-laten-maken",
      },
      {
        id: "Wordpress Website laten maken",
        title: "Wordpress Website laten maken",
        description: "Wij maken hoogwaardige WordPress-websites die volledig aansluiten bij jouw wensen.",
        url: "/services/wordpress-website-laten-maken",
      },
      {
        id: "NextJS Website laten maken",
        title: "NextJS Website laten maken",
        description: "Wij bouwen snelle en efficiënte NextJS-websites die jouw merk naar een hoger niveau tillen.",
        url: "/services/nextjs-website-laten-maken",
      },
      {
        id: "React Website laten maken",
        title: "React Website laten maken",
        description: "Wij ontwikkelen dynamische en gebruiksvriendelijke React-websites die indruk maken.",
        url: "/services/react-website-laten-maken",
      },
      {
        id: "Shopify Website laten maken",
        title: "Shopify Website laten maken",
        description: "Wij creëren prachtige en functionele Shopify-webshops die jouw online verkoop stimuleren.",
        url: "/services/shopify-website-laten-maken",
      },
      {
        id: "Website Teksten & Content",
        title: "Website Teksten & Content",
        description: "Wij leveren professionele website teksten en content die jouw boodschap versterken.",
        url: "/services/website-teksten-en-content",
      },      
    ],
  },
  {
    title: "Ontwikkeling",
    services: [
      {
        id: "frontend-development",
        title: "Frontend Development",
        description: "Bouw snelle en aantrekkelijke interfaces met moderne technologieën.",
        url: "/services/frontend-development",
      },
      {
        id: "backend-development",
        title: "Backend Development",
        description: "Ontwikkel robuuste en schaalbare backend-oplossingen voor elke toepassing.",
        url: "/services/backend-development",
      },
      {
        id: "dashboard-ontwikkeling",
        title: "Dashboard Ontwikkeling",
        description: "Creëer maatwerk dashboards met data-inzichten en interactieve functionaliteiten.",
        url: "/services/dashboard-ontwikkeling",
      },
      {
        id: "crm-systemen",
        title: "CRM Systemen",
        description: "Beheer klantrelaties en verkoopprocessen met efficiënte CRM-oplossingen.",
        url: "/services/crm-systemen",
      },
      {
        id: "lead-management-systemen",
        title: "Lead Management Systemen",
        description: "Automatiseer het beheer van leads en optimaliseer je verkoopprocessen.",
        url: "/services/lead-management-systemen",
      },
      {
        id: "marketing-automatisering",
        title: "Marketing Automatisering",
        description: "Implementeer software om marketingcampagnes effectiever en efficiënter te maken.",
        url: "/services/marketing-automatisering",
      },
      {
        id: "ai-geoptimaliseerde-systemen",
        title: "AI Geoptimaliseerde Systemen",
        description: "Gebruik AI om processen te optimaliseren en complexe problemen op te lossen.",
        url: "/services/ai-geoptimaliseerde-systemen",
      },
      {
        id: "webapplicaties",
        title: "Webapplicaties",
        description: "Ontwikkel moderne, responsieve webapplicaties die overal toegankelijk zijn.",
        url: "/services/webapplicaties",
      },
      {
        id: "e-commerce-platformen",
        title: "E-commerce Platformen",
        description: "Bouw gebruiksvriendelijke en schaalbare e-commerce oplossingen.",
        url: "/services/e-commerce-platformen",
      },
      {
        id: "portalen-en-platformen",
        title: "Portalen en Platformen",
        description: "Ontwikkel portalen en platformen voor interne en externe samenwerking.",
        url: "/services/portalen-en-platformen",
      },
      {
        id: "document-management-systemen",
        title: "Document Management Systemen",
        description: "Beheer documenten efficiënt met versiebeheer en cloudopslag.",
        url: "/services/document-management-systemen",
      },
      {
        id: "data-management-oplossingen",
        title: "Data Management Oplossingen",
        description: "Optimaliseer en beheer grote datasets met betrouwbare datamanagementoplossingen.",
        url: "/services/data-management-oplossingen",
      },
      {
        id: "planning-en-rooster-systemen",
        title: "Planning en Rooster Systemen",
        description: "Implementeer tools voor efficiënte planning en tijdbeheer.",
        url: "/services/planning-en-rooster-systemen",
      },
    ],
  },
  {
    title: "Portalen",
    services: [
      {
        id: "ledenportaal",
        title: "Ledenportaal",
        description: "Digitaliseer administratieve handelingen en verbeter efficiëntie voor verenigingen.",
        url: "/portalen/ledenportaal",
      },
      {
        id: "klantenportaal",
        title: "Klantenportaal",
        description: "Laat klanten bestellingen doorgeven, afspraken maken en orders volgen.",
        url: "/services/klantenportaal",
      },
      {
        id: "medewerkersportaal",
        title: "Medewerkersportaal",
        description: "Bied medewerkers toegang tot informatie zoals loonstroken en planning.",
        url: "/portalen/medewerkersportaal",
      },
      {
        id: "partnerportaal",
        title: "Partnerportaal",
        description: "Verbeter samenwerking met partners via gedeelde projecten en documenten.",
        url: "/portalen/partnerportaal",
      },
      {
        id: "leveranciersportaal",
        title: "Leveranciersportaal",
        description: "Beheer bestellingen en communicatie met leveranciers.",
        url: "/portalen/leveranciersportaal",
      },
      {
        id: "salesportaal",
        title: "Salesportaal",
        description: "Krijg realtime inzicht in verkoopgegevens en klantanalyses.",
        url: "/portalen/salesportaal",
      },
    ],
  },
  {
      title: "INDUSTRIËN",
      services: [
        {
          id: "Website laten maken voor Softwareontwikkeling",
          title: "Website laten maken voor Softwareontwikkeling",
          description: "Laat een professionele website ontwikkelen voor de sector Softwareontwikkeling en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor IT-dienstverlening",
          title: "Website laten maken voor IT-dienstverlening",
          description: "Laat een professionele website ontwikkelen voor de sector IT-dienstverlening en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor E-commerce",
          title: "Website laten maken voor E-commerce",
          description: "Laat een professionele website ontwikkelen voor de sector E-commerce en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor Industrie & Productie",
          title: "Website laten maken voor Industrie & Productie",
          description: "Laat een professionele website ontwikkelen voor de sector Industrie & Productie en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor Gezondheidszorg & Farmacie",
          title: "Website laten maken voor Gezondheidszorg & Farmacie",
          description: "Laat een professionele website ontwikkelen voor de sector Gezondheidszorg & Farmacie en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor Zakelijke dienstverlening",
          title: "Website laten maken voor Zakelijke dienstverlening",
          description: "Laat een professionele website ontwikkelen voor de sector Zakelijke dienstverlening en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor Agri & Food",
          title: "Website laten maken voor Agri & Food",
          description: "Laat een professionele website ontwikkelen voor de sector Agri & Food en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor Bouw & Installatietechniek",
          title: "Website laten maken voor Bouw & Installatietechniek",
          description: "Laat een professionele website ontwikkelen voor de sector Bouw & Installatietechniek en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor Groothandel",
          title: "Website laten maken voor Groothandel",
          description: "Laat een professionele website ontwikkelen voor de sector Groothandel en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor Automotive, Transport & Logistiek",
          title: "Website laten maken voor Automotive, Transport & Logistiek",
          description: "Laat een professionele website ontwikkelen voor de sector Automotive, Transport & Logistiek en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor Media, Reclame & Communicatie",
          title: "Website laten maken voor Media, Reclame & Communicatie",
          description: "Laat een professionele website ontwikkelen voor de sector Media, Reclame & Communicatie en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor Horeca, Toerisme & Recreatie",
          title: "Website laten maken voor Horeca, Toerisme & Recreatie",
          description: "Laat een professionele website ontwikkelen voor de sector Horeca, Toerisme & Recreatie en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
        {
          id: "Website laten maken voor Detailhandel",
          title: "Website laten maken voor Detailhandel",
          description: "Laat een professionele website ontwikkelen voor de sector Detailhandel en vergroot je online succes.",
          url: "/services/website-laten-maken",
        },
      ],
    },
  ];


  const ServicesSection: React.FC = () => {
    return (
      <section className="relative bg-[#FCF4EB] dark:bg-gray-900">
        <HeroNieuw 
          title={"Bouw Samen Met Ons Aan Jouw Digitale Toekomst"} 
          description={"Bij ons staan jouw wensen en ambities centraal. Met een breed scala aan professionele diensten bieden wij maatwerkoplossingen die jouw bedrijf laten groeien, je merk versterken en je klanten tevreden stellen. Ontdek onze expertise en ervaar onze toewijding aan kwaliteit en innovatie."} 
          buttonText={"Vraag een vrijblijvend offerte aan!"} 
          buttonLink={"/offerte-aanvragen"} 
          videoSrc={"https://cloud.multichoiceagency.nl/wp-content/uploads/2025/01/UI-UX-Design-SHOWREEL-2023-｜-Musemind.mp4"} 
        />
  
        <section className="py-40">
          <div className="container mx-auto px-4">
            {sections.map((section) => (
              <div key={section.title} className="mb-16">
                <h2 className="tracking-tight text-white bg-teal-900 font-heading text-4xl md:text-5xl font-medium mb-8 text-center rounded-xl">
                  {section.title}
                </h2>
                <div className="flex flex-wrap -m-4">
                  {section.services.map((service) => (
                    <div key={service.id} className="w-full md:w-1/2 lg:w-1/4 p-4">
                      {/* Extra wrapper voor 3D-perspectief */}
                      <div className="card-3d group">
                        <div
                          className="card-3d-inner rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 relative transition-transform transform"
                          style={{ height: "420px" }}
                        >
                          <p className="tracking-tight text-2xl font-medium text-black dark:text-white group-hover:text-green-600">
                            {service.title}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 mt-4 text-xl transition-opacity duration-300 group-hover:text-green-600">
                            {service.description}
                          </p>
                          <div className="absolute bottom-6 right-6">
                            <a
                              href={service.url}
                              className="flex items-center font-bold text-green-600 dark:text-white hover:text-white dark:hover:text-green-900 hover:underline"
                            >
                              Meer informatie
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="ml-2 transform transition-transform group-hover:translate-x-1"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* CSS voor 3D effect */}
        <style jsx>{`
          .card-3d {
            perspective: 1000px;
          }
          .card-3d-inner {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            transform-style: preserve-3d;
          }
          .card-3d:hover .card-3d-inner {
            transform: rotateY(10deg) rotateX(5deg) scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </section>
    );
  };
  
  export default ServicesSection;
  