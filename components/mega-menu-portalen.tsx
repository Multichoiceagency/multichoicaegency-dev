"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUserTie,
  faTrophy,
  faHandshake,
  faTruck,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

interface Portal {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  buttonText: string;
}

const portals: Portal[] = [
  {
    icon: <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-primary" />,
    title: "Ledenportaal",
    subtitle: "Voor verenigingen / stichtingen",
    description:
      "Elke vereniging heeft leden. Stel je voor dat bijna alle administratieve handelingen gedigitaliseerd zijn. Leden kunnen hun gegevens inzien, wijzigen, abonnementen beheren en verenigingsnieuws bekijken. Dit bespaart tijd en werk.",
    link: "/portalen/ledenportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} className="h-6 w-6 text-primary" />,
    title: "Klantenportaal",
    subtitle: "Voor commerciële organisaties",
    description:
      "Met een klantenportaal kunnen jouw klanten 24/7 bestellingen doorgeven, afspraken maken, orders volgen en informatie bekijken. Dit verbetert klanttevredenheid en verhoogt omzet.",
    link: "/portalen/klantenportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faTrophy} className="h-6 w-6 text-primary" />,
    title: "Medewerkersportaal",
    subtitle: "Intranet voor medewerkers",
    description:
      "Een medewerkersportaal fungeert als een intranet waar werknemers informatie kunnen bekijken en delen, zoals loonstroken, planning, beschikbaarheid en (bedrijfs)nieuws. Dit versterkt interne communicatie.",
    link: "/portalen/medewerkersportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faHandshake} className="h-6 w-6 text-primary" />,
    title: "Partnerportaal",
    subtitle: "Voor zakelijke samenwerkingen",
    description:
      "Partners kunnen toegang krijgen tot gedeelde projecten, documenten en statusupdates. Hiermee verbeter je samenwerking, communicatie en transparantie met je zakelijke partners.",
    link: "/portalen/partnerportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faTruck} className="h-6 w-6 text-primary" />,
    title: "Leveranciersportaal",
    subtitle: "Voor supply chain management",
    description:
      "Met een leveranciersportaal kun je bestellingen beheren, leveringsstatussen volgen en eenvoudig communiceren met je leveranciers. Dit stroomlijnt je supply chain en minimaliseert fouten.",
    link: "/portalen/leveranciersportaal",
    buttonText: "Meer informatie",
  },
  {
    icon: <FontAwesomeIcon icon={faChartBar} className="h-6 w-6 text-primary" />,
    title: "Salesportaal",
    subtitle: "Voor inzichten in je bedrijf",
    description:
      "Met een salesportaal krijg je realtime inzicht in verkoopgegevens, klantanalyses en prestatieoverzichten. Hiermee kun je strategieën verbeteren en groeikansen identificeren.",
    link: "/portalen/salesportaal",
    buttonText: "Meer informatie",
  },
];

interface MegaMenuPortalenProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenuPortalen({ isOpen, onClose }: MegaMenuPortalenProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 right-0 bg-white dark:bg-background border-b border-border shadow-lg"
      style={{ top: "100%" }}
    >
      <div className="container mx-auto max-w-[1800px] py-8 px-10">
        <div className="grid grid-cols-3 gap-6">
          {portals.map((portal, index) => (
            <Link href={portal.link} key={index}>
              <div
                onClick={onClose}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm cursor-pointer hover:shadow-md transition"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    {portal.icon}
                  </div>
                  <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {portal.subtitle}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {portal.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-4">
                  {portal.description}
                </p>
                <Button variant="outline" className="text-primary border-primary">
                  {portal.buttonText}
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
