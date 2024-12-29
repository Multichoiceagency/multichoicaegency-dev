'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronRight, 
  faChevronLeft, 
  faXmark, 
  faPalette, 
  faMobileAlt, 
  faGlobe, 
  faCode, 
  faServer, 
  faShoppingCart, 
  faCloud, 
  faFileAlt, 
  faBriefcase, 
  faChartLine, 
  faCalendarAlt, 
  faZap, 
  faDatabase, 
  faChartPie, 
  faRobot, 
  faDesktop, 
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import { AppleStyleThemeSwitcher } from "./apple-style-theme-switcher";
import { MegaMenuCases } from './mega-menu-cases';

interface MenuItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  description?: string;
  submenu?: MenuItem[];
  isNew?: boolean;
}

const menuItems: MenuItem[] = [
  { 
    title: "Wat wij doen", 
    submenu: [
      {
        icon: <FontAwesomeIcon icon={faPalette} className="h-6 w-6" />,
        title: "UI/UX Design",
        description: "Creëer prototypes en wireframes voor interactieve en gebruiksvriendelijke ontwerpen.",
      },
      {
        icon: <FontAwesomeIcon icon={faMobileAlt} className="h-6 w-6" />,
        title: "Responsief Webdesign",
        description: "Zorg voor een naadloze gebruikerservaring op desktop, tablet en mobiel.",
      },
      {
        icon: <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />,
        title: "Custom Webdesign",
        description: "Ontwikkel maatwerkoplossingen die perfect passen bij jouw huisstijl.",
      },      
      {
        icon: <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />,
        title: "E-commerce Platformontwikkeling",
      },
      {
        icon: <FontAwesomeIcon icon={faCloud} className="h-6 w-6" />,
        title: "Headless E-commerce",
      },
      {
        icon: <FontAwesomeIcon icon={faBriefcase} className="h-6 w-6" />,
        title: "Merkstrategie en Storytelling",
      },
    ]
  },
  { title: "Cases" },
  { 
    title: "Development", 
    submenu: [
      {
        icon: <FontAwesomeIcon icon={faCode} className="h-6 w-6" />,
        title: "Frontend Development",
        description: "Bouw snelle en aantrekkelijke interfaces met moderne technologieën.",
      },
      {
        icon: <FontAwesomeIcon icon={faServer} className="h-6 w-6" />,
        title: "Backend Development",
        description: "Ontwikkel robuuste en schaalbare backend-oplossingen voor elke toepassing.",
      },
      {
        icon: <FontAwesomeIcon icon={faChartLine} className="h-6 w-6" />,
        title: "Dashboard Ontwikkeling",
        description: "Creëer maatwerk dashboards met data-inzichten en interactieve functionaliteiten.",
      },
      {
        icon: <FontAwesomeIcon icon={faBriefcase} className="h-6 w-6" />,
        title: "CRM Systemen",
        description: "Beheer klantrelaties en verkoopprocessen met efficiënte CRM-oplossingen.",
      },
      {
        icon: <FontAwesomeIcon icon={faUserPlus} className="h-6 w-6" />,
        title: "Lead Management Systemen",
        description: "Automatiseer het beheer van leads en optimaliseer je verkoopprocessen.",
      },
      {
        icon: <FontAwesomeIcon icon={faChartPie} className="h-6 w-6" />,
        title: "Marketing Automatisering",
        description: "Implementeer software om marketingcampagnes effectiever en efficiënter te maken.",
      },
      {
        icon: <FontAwesomeIcon icon={faRobot} className="h-6 w-6" />,
        title: "AI Geoptimaliseerde Systemen",
        description: "Gebruik AI om processen te optimaliseren en complexe problemen op te lossen.",
      },
      {
        icon: <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />,
        title: "Webapplicaties",
        description: "Ontwikkel moderne, responsieve webapplicaties die overal toegankelijk zijn.",
      },
      {
        icon: <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />,
        title: "E-commerce Platformen",
        description: "Bouw gebruiksvriendelijke en schaalbare e-commerce oplossingen.",
      },
      {
        icon: <FontAwesomeIcon icon={faCloud} className="h-6 w-6" />,
        title: "Portalen en Platformen",
        description: "Ontwikkel portalen en platformen voor interne en externe samenwerking.",
      },
      {
        icon: <FontAwesomeIcon icon={faChartPie} className="h-6 w-6" />,
        title: "Geavanceerde Analytics Tools",
        description: "Krijg waardevolle inzichten met datavisualisaties en rapportages.",
      },
      {
        icon: <FontAwesomeIcon icon={faFileAlt} className="h-6 w-6" />,
        title: "Document Management Systemen",
        description: "Beheer documenten efficiënt met versiebeheer en cloudopslag.",
      },
      {
        icon: <FontAwesomeIcon icon={faDatabase} className="h-6 w-6" />,
        title: "Data Management Oplossingen",
        description: "Optimaliseer en beheer grote datasets met betrouwbare datamanagementoplossingen.",
      },
      {
        icon: <FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" />,
        title: "Planning en Rooster Systemen",
        description: "Implementeer tools voor efficiënte planning en tijdbeheer.",
      },
    ]
  },
  { title: "Portalen", href: "/portalen" },
  { title: "Contact", href: "/contact" },
  { title: "Over Ons", href: "/over-ons" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.title} className="py-4 border-b border-gray-100 dark:border-gray-800">
      {item.submenu || item.title === "Cases" ? (
        <button
          onClick={() => setActiveSubmenu(item.title)}
          className="flex justify-between items-center w-full text-left text-2xl font-medium"
        >
          <span className={activeSubmenu === item.title ? 'text-blue-600' : ''}>
            {item.title}
          </span>
          <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6" />
        </button>
      ) : (
        <Link
          href={item.href || "#"}
          className="flex justify-between items-center w-full text-left text-2xl font-medium"
          onClick={onClose}
        >
          {item.title}
        </Link>
      )}
    </div>
  );

  const renderCasesSubmenu = () => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setActiveSubmenu(null)}
            className="flex items-center text-xl"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 mr-2" />
            Terug
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-900 dark:text-white"
          >
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          </Button>
        </div>
        <div className="mt-4">
          <MegaMenuCases
            isOpen={true}
            onClose={() => {
              setActiveSubmenu(null);
              onClose();
            }}
            isMobile={true}
          />
        </div>
      </div>
    </motion.div>
  );

  const renderSubmenu = (items: MenuItem[]) => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setActiveSubmenu(null)}
            className="flex items-center text-xl"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 mr-2" />
            Terug
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-900 dark:text-white"
          >
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          </Button>
        </div>
        {items.map((item) => (
          <div key={item.title} className="py-4 border-b border-gray-100 dark:border-gray-800">
            <Link
              href={item.href || "#"}
              className="flex items-start gap-4 group"
              onClick={onClose}
            >
              {item.icon && (
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                  {item.icon}
                </div>
              )}
              <div>
                <div className="font-medium text-foreground group-hover:text-primary flex items-center">
                  {item.title}
                  {item.isNew && (
                    <span className="ml-2 text-[10px] font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-1.5 py-0.5 rounded">
                      NIEUW
                    </span>
                  )}
                </div>
                {item.description && (
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="flex items-center">
            <Image
              src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/11/logo-multichoiceagency.png"
              alt="Multichoiceagency Logo"
              width={140}
              height={37}
              className="object-contain transition-colors logo-dark-mode"
            />
          </Link>
          <div className="flex items-center gap-4">
            <AppleStyleThemeSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-900 dark:text-white"
            >
              <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => renderMenuItem(item))}
        </nav>
      </div>

      <AnimatePresence>
        {activeSubmenu &&
          (activeSubmenu === "Cases"
            ? renderCasesSubmenu()
            : renderSubmenu(menuItems.find((item) => item.title === activeSubmenu)?.submenu || []))}
      </AnimatePresence>
    </motion.div>
  );
}
