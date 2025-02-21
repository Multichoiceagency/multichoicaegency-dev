"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// Import en cast AnimatePresence zodat het children accepteert.
import { AnimatePresence as FramerAnimatePresence } from "framer-motion";
import React from "react";
import { useOutsideClick } from "@/hooks/use-outside-click"; // Pas het pad aan indien nodig

const AnimatePresence = FramerAnimatePresence as unknown as React.FC<{ children?: React.ReactNode }>;

import { Button } from "@/components/ui/button";
import { AnnouncementBanner } from "./announcement-banner";
import { MegaMenu } from "./mega-menu";
import { MegaMenuCases } from "./mega-menu-cases";
import { MegaMenuDevelopment } from "./mega-menu-development";
import { MobileMenu } from "./mobile-menu";
import { Menu, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { AppleStyleThemeSwitcher } from "./apple-style-theme-switcher";
import { MegaMenuIndustrie } from "./mega-menu-industrie";
import { MegaMenuPortalen } from "./mega-menu-portalen";

interface Case {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  logonew: string;
  tags: string[];
  slug: string;
  category: string;
}

export function Header(): JSX.Element {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Ref die we koppelen aan het header-container-element.
  const headerRef = useRef<HTMLDivElement>(null);

  // Gebruik useOutsideClick om menus te sluiten als er buiten de header wordt geklikt.
  useOutsideClick(headerRef, () => {
    setActiveMegaMenu(null);
    setIsMobileMenuOpen(false);
  });

  // Scroll-handling om de header te tonen/verbergen.
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setIsScrolled(currentScrollTop > 50);
      setIsHeaderVisible(currentScrollTop < lastScrollTop || currentScrollTop < 50);
      lastScrollTop = currentScrollTop;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ophalen van case-categorieën en industrieën
  useEffect(() => {
    const fetchCaseCategories = async () => {
      try {
        const res = await fetch("https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=100");
        const data = await res.json();
        console.log("Case data:", data);
        const casesArray = Array.isArray(data) ? data : Object.values(data);
        const categorySet = new Set<string>(casesArray.map((item: any) => item.category || "Uncategorized"));
        const categoriesArray = ["All", ...Array.from(categorySet)];
        setCategories(categoriesArray);
      } catch (error) {
        console.error("Error fetching case categories:", error);
      }
    };

    const fetchIndustries = async () => {
      try {
        const res = await fetch("https://cloud.multichoiceagency.nl/wp-json/wp/v2/industries?_embed&per_page=100");
        const data = await res.json();
        console.log("Industries data:", data);
        const industriesArray = Array.isArray(data) ? data : Object.values(data);
        const industryList = industriesArray.map((industry: any) => industry.name);
        setIndustries(["All Industries", ...industryList]);
      } catch (error) {
        console.error("Error fetching industries:", error);
      }
    };

    fetchCaseCategories();
    fetchIndustries();
  }, []);

  return (
    <motion.div
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {!isScrolled && <AnnouncementBanner isVisible={!isScrolled} />}
      </AnimatePresence>
      <motion.header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="mx-auto flex h-16 md:h-20 max-w-[1800px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={theme === "dark" ? "/logos/logo-wit.png" : "/logos/logo.png"}
              alt="Multichoiceagency Logo"
              width={isScrolled ? 200 : 170}
              height={80}
              className="object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {["Wat doen wij", "Cases", "Development", "Portalen", "Industrieën", "Contact", "Over Ons"].map(
              (item, index) => (
                <div key={index} className="relative">
                  {item === "Contact" || item === "Over Ons" ? (
                    <Link
                      href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                    >
                      {item}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setActiveMegaMenu(activeMegaMenu === item ? null : item)}
                      className="text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 flex items-center gap-1"
                    >
                      {item}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeMegaMenu === item ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              )
            )}
          </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <AppleStyleThemeSwitcher />
          
          {/* Inloggen Button with Link */}
          <Link href="/inloggen">
            <Button
              variant="ghost"
              className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
            >
              Inloggen
            </Button>
          </Link>

          {/* Offerte Aanvragen Button with Link */}
          <Link href="/offerte-aanvragen">
            <Button className="bg-green-400 uppercase font-bold text-sm text-white hover:bg-green-900 dark:hover:bg-green-900">
              Offerte aanvragen
            </Button>
          </Link>
        </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMegaMenu === "Wat doen wij" ? (
            <MegaMenu isOpen={activeMegaMenu === "Wat doen wij"} onClose={() => setActiveMegaMenu(null)} />
          ) : activeMegaMenu === "Cases" ? (
            <MegaMenuCases isOpen={activeMegaMenu === "Cases"} onClose={() => setActiveMegaMenu(null)} />
          ) : activeMegaMenu === "Development" ? (
            <MegaMenuDevelopment isOpen={activeMegaMenu === "Development"} onClose={() => setActiveMegaMenu(null)} />
          ) : activeMegaMenu === "Portalen" ? (
            <MegaMenuPortalen isOpen={activeMegaMenu === "Portalen"} onClose={() => setActiveMegaMenu(null)} />
          ) : activeMegaMenu === "Industrieën" ? (
            <MegaMenuIndustrie isOpen={activeMegaMenu === "Industrieën"} onClose={() => setActiveMegaMenu(null)} />
          ) : null}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
          )}
        </AnimatePresence>
      </motion.header>
    </motion.div>
  );
}
