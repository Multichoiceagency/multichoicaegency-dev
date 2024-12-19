"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Mail, Phone, Menu, X, ChevronDown, ArrowRight, Search } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (item: string) => {
    setActiveSubMenu((prev) => (prev === item ? null : item));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      {/* Top bar - only shown when not scrolled */}
      {!isScrolled && (
        <div className="hidden border-b border-white/10 md:block">
          <div className="mx-auto flex h-10 max-w-[1800px] items-center justify-between px-10">
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="tel:+31882013101"
                className="flex items-center gap-2 text-white hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +31 882 013 101
              </Link>
              <Link
                href="mailto:business@multichoiceagency.com"
                className="flex items-center gap-2 text-white hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                business@multichoiceagency.com
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main navigation */}
      <div
        className={`border-b transition-all ${
          isScrolled ? "border-border" : "border-white/10"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-10">
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Multichoiceagency
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center gap-8 ${
              isScrolled ? "ml-auto mr-8" : ""
            }`}
          >
            <div className="group relative">
              <Link
                href="/webdevelopment"
                className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80"
                }`}
              >
                WEBSITES
              </Link>
            </div>

            <Link
              href="/cases"
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white"
              }`}
            >
              E-COMMERCE
            </Link>

            <Link
              href="/carriere"
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white"
              }`}
            >
              DEVELOPMENT
            </Link>

            <Link
              href="/development"
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white"
              }`}
            >
              CASES
            </Link>
            <Link
              href="/industrien"
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white"
              }`}
            >
              INDUSTRIEEN
            </Link>
            <Link
              href="/over-ons"
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white"
              }`}
            >
              OVER ONS
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white"
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Desktop Buttons: Search, Theme Switcher, Contact */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={`transition-colors ${
                isScrolled
                  ? "text-foreground hover:bg-foreground/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeSwitcher isScrolled={isScrolled} />
            <Button className="group gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Contact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
              className={`${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-gray-400"
              }`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-50 bg-background dark:bg-background-dark flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 border-b border-border">
              {/* Logo */}
              <Link
                href="/"
                className="text-2xl font-bold text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Multichoiceagency
              </Link>
              {/* Close and Theme Switcher */}
              <div className="flex items-center gap-4">
                <ThemeSwitcher isScrolled={true} />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Links with Book Folding Animation */}
            <motion.nav
              className="flex flex-col flex-grow items-center justify-center p-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: "-100%" },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <ul className="space-y-6 text-left w-full">
                {["wat-we-doen", "cases", "carriere", "insights", "over-ons"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 70 }}
                    >
                      <Link
                        href={`/${item}`}
                        className="text-lg font-medium w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.replace("-", " ")}
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.nav>

            {/* Footer with Contact Info */}
            <div className="mt-auto p-8 border-t border-border">
              <div className="space-y-4">
                <div className="flex flex-col text-sm space-y-2">
                  <Link
                    href="tel:+31882013101"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    010 322 04 10
                  </Link>
                  <Link
                    href="mailto:business@multichoiceagency.com"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    info@multichoiceagency.com
                  </Link>
                </div>
                <Button className="w-full mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Vraag een offerte aan
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
