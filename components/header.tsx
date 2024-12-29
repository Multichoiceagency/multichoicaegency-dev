"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnnouncementBanner } from "./announcement-banner";
import { MegaMenu } from "./mega-menu";
import { MegaMenuCases } from "./mega-menu-cases";
import { MegaMenuDevelopment } from "./mega-menu-development"; // Import your Development Mega Menu
import { MobileMenu } from "./mobile-menu";
import { Menu, X, ChevronDown } from 'lucide-react';
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

export function Header() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setIsScrolled(currentScrollTop > 50);
      setIsHeaderVisible(currentScrollTop < lastScrollTop || currentScrollTop < 50);
      lastScrollTop = currentScrollTop;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchCaseCategories = async () => {
      try {
        const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=100');
        const data: Case[] = await res.json();
        const categorySet = new Set<string>(data.map((item) => item.category || 'Uncategorized'));
        const categoriesArray = ['All', ...Array.from(categorySet)];
        setCategories(categoriesArray);
      } catch (error) {
        console.error('Error fetching case categories:', error);
      }
    };

    const fetchIndustries = async () => {
      try {
        const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/industries?_embed&per_page=100');
        const data: { name: string }[] = await res.json();
        const industryList = data.map((industry) => industry.name);
        setIndustries(['All Industries', ...industryList]);
      } catch (error) {
        console.error('Error fetching industries:', error);
      }
    };

    fetchCaseCategories();
    fetchIndustries();
  }, []);

  return (
    <motion.div
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
          isScrolled ? "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800" : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="mx-auto flex h-16 lg:h-20 max-w-[1800px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={
                theme === 'dark'
                  ? "https://cloud.multichoiceagency.nl/wp-content/uploads/2024/12/Logo-wit@4x.png"
                  : "https://cloud.multichoiceagency.nl/wp-content/uploads/2024/11/logo-multichoiceagency.png"
              }
              alt="Multichoiceagency Logo"
              width={isScrolled ? 200 : 170}
              height={isScrolled ? 80 : 80}
              className="object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            {["Wat wij doen", "Cases", "Development", "Portalen", "Industrieën", "Contact", "Over Ons"].map((item, index) => (
              <div key={index} className="relative">
                {item === "Contact" || item === "Over Ons" ? (
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                  >
                    {item}
                  </Link>
                ) : (
                  <button
                    onClick={() => setActiveMegaMenu(activeMegaMenu === item ? null : item)}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 flex items-center gap-1"
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
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <AppleStyleThemeSwitcher />
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400">
              Log In
            </Button>
            <Button className="bg-green-500 text-white hover:bg-green-600">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
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
        {activeMegaMenu === "Wat wij doen" ? (
            <MegaMenu
              isOpen={activeMegaMenu === "Wat wij doen"}
              onClose={() => setActiveMegaMenu(null)}
            />
          ) : activeMegaMenu === "Cases" ? (
            <MegaMenuCases
              isOpen={activeMegaMenu === "Cases"}
              onClose={() => setActiveMegaMenu(null)}
            />
          ) : activeMegaMenu === "Development" ? (
            <MegaMenuDevelopment
              isOpen={activeMegaMenu === "Development"}
              onClose={() => setActiveMegaMenu(null)}
            />
          ) : activeMegaMenu === "Portalen" ? (
            <MegaMenuPortalen
              isOpen={!!activeMegaMenu}
              onClose={() => setActiveMegaMenu(null)}
            />
          ) : activeMegaMenu === "Industrieën" ? (
            <MegaMenuIndustrie
              isOpen={!!activeMegaMenu}
              onClose={() => setActiveMegaMenu(null)}
            />
          ) : null}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </motion.header>
    </motion.div>
  );
}
