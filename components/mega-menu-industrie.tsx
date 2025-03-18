"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faBuilding,
  faGraduationCap,
  faLeaf,
  faUtensils,
  faTools,
  faChartLine,
  faGlobe,
  faLightbulb,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JSX } from "react";

interface Direction {
  icon: JSX.Element;
  title: string;
  description: string;
  href: string;
}

interface Solution {
  icon: JSX.Element;
  title: string;
  href: string;
  isNew?: boolean;
}

const directions: Direction[] = [
  {
    icon: <FontAwesomeIcon icon={faHospital} className="h-6 w-6 text-primary" />,
    title: "Website laten maken voor Gezondheidszorg",
    description: "Wij bouwen veilige en gebruiksvriendelijke websites die zorginstellingen verbinden met hun patiënten.",
    href: "/website-laten-maken/website-laten-maken-voor-gezondheidszorg",
  },
  {
    icon: <FontAwesomeIcon icon={faBuilding} className="h-6 w-6 text-primary" />,
    title: "Website laten maken voor Bouw",
    description: "Onze oplossingen tonen uw projecten en maken het gemakkelijk voor klanten om offertes aan te vragen.",
    href: "/website-laten-maken/website-laten-maken-voor-bouw",
  },
  {
    icon: <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6 text-primary" />,
    title: "Website laten maken voor Onderwijs",
    description: "Wij creëren interactieve platforms die leren en communiceren eenvoudiger maken voor scholen en universiteiten.",
    href: "/website-laten-maken/website-laten-maken-voor-onderwijs",
  },
  {
    icon: <FontAwesomeIcon icon={faLeaf} className="h-6 w-6 text-primary" />,
    title: "Website laten maken voor Duurzaamheid",
    description: "Met onze expertise laten we uw groene initiatieven stralen via een inspirerende online aanwezigheid.",
    href: "/website-laten-maken/website-laten-maken-voor-duurzaamheid",
  },
  {
    icon: <FontAwesomeIcon icon={faUtensils} className="h-6 w-6 text-primary" />,
    title: "Website laten maken voor Horeca",
    description: "Wij ontwikkelen stijlvolle websites met online reserveringssystemen en menu-integraties.",
    href: "/website-laten-maken/website-laten-maken-voor-horeca",
  },
];

const solutions: Solution[][] = [
  [
    {
      icon: <FontAwesomeIcon icon={faTools} className="h-5 w-5 text-muted-foreground" />,
      title: "Digitale oplossingen voor Zorg",
      href: "/oplossingen/digitale-zorg",
    },
    {
      icon: <FontAwesomeIcon icon={faGlobe} className="h-5 w-5 text-muted-foreground" />,
      title: "Online platforms voor Bouwprojecten",
      href: "/oplossingen/online-bouw",
    },
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5 text-muted-foreground" />,
      title: "E-learning voor Onderwijs",
      href: "/oplossingen/e-learning",
    },
  ],
  [
    {
      icon: <FontAwesomeIcon icon={faEdit} className="h-5 w-5 text-muted-foreground" />,
      title: "Branding voor Duurzaamheidsinitiatieven",
      href: "/oplossingen/branding",
    },
    {
      icon: <FontAwesomeIcon icon={faUtensils} className="h-5 w-5 text-muted-foreground" />,
      title: "Strategieën voor Horeca",
      href: "/oplossingen/horeca",
    },
    {
      icon: <FontAwesomeIcon icon={faChartLine} className="h-5 w-5 text-muted-foreground" />,
      title: "SEO voor Lokale Bedrijven",
      href: "/oplossingen/seo-lokale-bedrijven",
    },
  ],
  [
    {
      icon: <FontAwesomeIcon icon={faLightbulb} className="h-5 w-5 text-muted-foreground" />,
      title: "Marketing voor Industrieën",
      href: "/oplossingen/marketing-industrie",
    },
    {
      icon: <FontAwesomeIcon icon={faGlobe} className="h-5 w-5 text-muted-foreground" />,
      title: "Webhosting en Domeinbeheer",
      href: "/oplossingen/webhosting",
    },
    {
      icon: <FontAwesomeIcon icon={faEdit} className="h-5 w-5 text-muted-foreground" />,
      title: "Content Creatie",
      href: "/oplossingen/content-creatie",
      isNew: true,
    },
  ],
];

interface MegaMenuIndustrieProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenuIndustrie({ isOpen, onClose }: MegaMenuIndustrieProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-b border-border shadow-lg"
      style={{ top: "100%" }}
    >
      <div className="container mx-auto max-w-[1800px] py-8 px-10">
        <div className="grid grid-cols-[2fr,3fr,2fr] gap-16">
          {/* Left Column - Directions */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
              INDUSTRIËN
            </h3>
            <div className="space-y-6">
              {directions.map((direction, index) => (
                <Link
                  key={index}
                  href={direction.href}
                  className="flex items-start gap-4 group"
                  onClick={onClose}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                    {direction.icon}
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary">
                      {direction.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {direction.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Middle Column - Solutions */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
              OPLOSSINGEN
            </h3>
            <div className="grid grid-cols-3 gap-8">
              {solutions.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-6">
                  {column.map((solution, index) => (
                    <Link
                      key={index}
                      href={solution.href}
                      className="flex items-center gap-3 group"
                      onClick={onClose}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 dark:bg-gray-800 text-foreground group-hover:text-primary">
                        {solution.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-medium text-foreground group-hover:text-primary">
                          {solution.title}
                        </span>
                        {solution.isNew && (
                          <span className="text-[10px] font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-1.5 py-0.5 rounded">
                            NIEUW
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Heb je andere vragen ?</h4>
                  <p className="text-sm text-muted-foreground">
                    Wij helpen je graag met maatwerk voor jouw unieke behoeften.
                  </p>
                </div>
                <Link href="/industrien">
                  <Button variant="outline" className="gap-2">
                    Bekijk alle industrien
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Video */}
          <div className="flex flex-col justify-between">
            <div className="relative aspect-video w-full h-[300px] overflow-hidden rounded-lg">
              <video
                src="https://cdn.dribbble.com/userupload/15397598/file/original-efa7e29c3212f8e5b3558d574c7a6654.mp4"
                poster="https://cdn.dribbble.com/userupload/15397598/file/original-efa7e29c3212f8e5b3558d574c7a6654.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <track kind="captions" src="/videos/services-overview-captions.vtt" srcLang="nl" label="Nederlands" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Meer over onze industrie-oplossingen
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Ontdek hoe wij jouw branche ondersteunen met maatwerk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
