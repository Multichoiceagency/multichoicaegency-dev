"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { AnnouncementBanner } from "./announcement-banner";
import { MegaMenu } from "./mega-menu";
import { Menu, X, ChevronDown } from 'lucide-react';

<style jsx global>{`
  .logo-dark-mode {
    filter: brightness(0) invert(1);
  }
  @media (prefers-color-scheme: light) {
    .logo-dark-mode {
      filter: none;
    }
  }
`}</style>

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <AnimatePresence>
        {!isScrolled && <AnnouncementBanner isVisible={!isScrolled} />}
      </AnimatePresence>
      <motion.header
        className={`w-full transition-all duration-300 ${
          isScrolled ? "bg-background border-b border-border" : "bg-white dark:bg-background"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/11/logo-multichoiceagency.png"
              alt="Multichoiceagency Logo"
              width={140}
              height={37}
              className="object-contain transition-colors logo-dark-mode"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {["Wat wij doen", "Cases", "Development", "Portalen", "Contact", "Over Ons"].map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => setActiveMegaMenu(activeMegaMenu === item ? null : item)}
                  className="text-sm font-medium text-foreground hover:text-primary flex items-center gap-1"
                >
                  {item}
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeMegaMenu === item ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeSwitcher isScrolled={isScrolled} />
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Log In
            </Button>
            <Button className="bg-[#4842E3] text-white hover:bg-[#4842E3]/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-foreground hover:text-primary"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMegaMenu && (
            <MegaMenu
              isOpen={!!activeMegaMenu}
              onClose={() => setActiveMegaMenu(null)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-x-0 top-0 bg-background shadow-xl z-50 overflow-y-auto lg:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Image
                    src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/11/logo-multichoiceagency.png"
                    alt="Multichoiceagency Logo"
                    width={140}
                    height={37}
                    className="object-contain transition-colors logo-dark-mode"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground hover:text-primary"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="space-y-6">
                  {["Wat wij doen", "Use Cases", "Prices", "Customers", "About"].map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="block text-lg font-medium text-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 space-y-4">
                  <Button className="w-full" variant="outline">
                    Log In
                  </Button>
                  <Button className="w-full bg-[#4842E3] text-white hover:bg-[#4842E3]/90">
                    Get Started
                  </Button>
                  <div className="flex justify-center">
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}

