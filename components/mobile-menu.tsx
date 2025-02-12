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
} from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import { AppleStyleThemeSwitcher } from "./apple-style-theme-switcher";

interface MenuItem {
  title: string;
  href?: string;
  description?: string;
}

// De hoofdmenu-items – "Wat wij doen" is hier het eerste item.
const menuItems: MenuItem[] = [
  { title: "Wat wij doen" },
  { title: "Cases", href: "/cases" },
  { title: "Development", href: "/development" },
  { title: "Portalen", href: "/portalen" },
  { title: "Contact", href: "/contact" },
  { title: "Over Ons", href: "/over-ons" },
];

// De DIENSTEN zoals jij ze hebt opgegeven
const diensten: MenuItem[] = [
  {
    title: "Web Development",
    description: "Bouw dynamische en schaalbare websites.",
    href: "/web-development",
  },
  {
    title: "UI/UX Design",
    description: "Ontwerp intuïtieve en visueel aantrekkelijke interfaces.",
    href: "/wat-is-ux-ui-design",
  },
  {
    title: "Maatwerk Websites",
    description: "Ontwikkel websites die perfect passen bij jouw merk.",
    href: "/maatwerk-websites",
  },
  {
    title: "E-commerce",
    description: "Creëer krachtige online winkels.",
    href: "/webshop-laten-maken",
  },
  {
    title: "Frontend Development",
    description: "Bouw responsieve en interactieve gebruikersinterfaces.",
    href: "/frontend-development",
  },
  {
    title: "Backend Development",
    description: "Implementeer robuuste server-side oplossingen.",
    href: "/backend-development",
  },
];

// De OPLOSSINGEN zoals opgegeven
const oplossingen: MenuItem[] = [
  { title: "Online Marketing", href: "https://www.essmarketing.nl" },
  { title: "SEO", href: "https://www.essmarketing.nl/seo-uitbesteden" },
  { title: "Google Ads", href: "https://www.essmarketing.nl/google-ads-uitbesteden" },
  { title: "Social Media", href: "https://www.essmarketing.nl/social-media" },
  { title: "Content Marketing", href: "https://www.essmarketing.nl/content-marketing" },
  { title: "Bedrijfsvideo laten maken", href: "https://www.essmedia.nl/bedrijfsvideo-laten-maken" },
  { title: "Productvideo laten maken", href: "https://www.essmedia.nl/productvideo-video-laten-maken" },
  { title: "Instagram & TikTok Reels", href: "https://www.essmedia.nl/reels-laten-maken" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Hier houden we bij welk submenu actief is (in dit geval "Wat wij doen")
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Render een enkel menu-item in het hoofdmenu
  const renderMenuItem = (item: MenuItem) => (
    <div key={item.title} className="py-4 border-b border-gray-100 dark:border-gray-800">
      {/* 
          Als het item submenu's heeft of, zoals hier, "Wat wij doen" is, 
          renderen we een knop die het submenu opent.
      */}
      <button
        onClick={() => setActiveSubmenu(item.title)}
        className="flex justify-between items-center w-full text-left text-2xl font-medium"
      >
        <span>{item.title}</span>
        <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6" />
      </button>
    </div>
  );

  // Speciaal submenu voor "Wat wij doen"
  const renderWatWijDoenSubmenu = () => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
    >
      <div className="p-6">
        {/* Header met terugknop en sluitknop */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setActiveSubmenu(null)} className="flex items-center text-xl">
            <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 mr-2" />
            Terug
          </button>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          </Button>
        </div>

        {/* DIENSTEN-groep */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">DIENSTEN</h2>
          <div className="space-y-4">
            {diensten.map((item) => (
              <Link
                key={item.title}
                href={item.href || "#"}
                onClick={onClose}
                className="block"
              >
                <div className="text-lg font-medium">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* OPLOSSINGEN-groep */}
        <div>
          <h2 className="text-xl font-bold mb-4">OPLOSSINGEN</h2>
          <div className="space-y-4">
            {oplossingen.map((item) => (
              <Link
                key={item.title}
                href={item.href || "#"}
                onClick={onClose}
                className="block"
              >
                <div className="text-lg font-medium">{item.title}</div>
              </Link>
            ))}
          </div>
        </div>
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
        {/* Header met logo en themaswitcher */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="flex items-center">
            <Image
              src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/11/logo-multichoiceagency.png"
              alt="Multichoiceagency Logo"
              width={140}
              height={37}
              className="object-contain transition-colors"
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

        {/* Hoofdmenu */}
        <nav className="mt-6">
          {menuItems.map((item) => renderMenuItem(item))}
        </nav>
      </div>

      {/* Toon het "Wat wij doen" submenu als dat actief is */}
      <AnimatePresence>
        {activeSubmenu === "Wat wij doen" && renderWatWijDoenSubmenu()}
      </AnimatePresence>
    </motion.div>
  );
}
