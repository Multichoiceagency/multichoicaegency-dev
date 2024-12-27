"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Mail, Phone, Menu, X, ChevronDown, ArrowRight, Search } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const res = await fetch(
        `https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?search=${encodeURIComponent(
          searchQuery
        )}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch search results.");
      }
      const data = await res.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchRedirect = () => {
    if (searchQuery.trim() !== "") {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      setIsSearchOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : "bg-transparent"
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
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/11/logo-multichoiceagency.png"
              alt="Multichoiceagency Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              "WEBSITES",
              "E-COMMERCE",
              "DEVELOPMENT",
              "CASES",
              "INDUSTRIEEN",
              "OVER ONS",
              "CONTACT",
            ].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons: Search, Theme Switcher, Contact */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
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

      {/* Search Box */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute top-0 left-0 w-full bg-background p-4 flex flex-col items-center shadow-md z-50"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchRedirect();
              }}
              className="flex items-center gap-4 w-full max-w-[600px]"
            >
              <input
                type="text"
                placeholder="Typ om te zoeken"
                className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
              >
                Zoeken
              </Button>
              <Button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
