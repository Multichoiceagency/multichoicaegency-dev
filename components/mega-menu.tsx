"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Palette, Smartphone, Globe, Code, Server, ShoppingCart, Headphones, FileText, PenTool, Briefcase, Search, TrendingUp, HardDrive } from 'lucide-react';

interface Direction {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Solution {
  icon: React.ReactNode;
  title: string;
  isNew?: boolean;
}

const directions: Direction[] = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Creëer prototypes en wireframes voor interactieve en gebruiksvriendelijke ontwerpen.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Responsief Webdesign",
    description: "Zorg voor een naadloze gebruikerservaring op desktop, tablet en mobiel.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Custom Webdesign",
    description: "Ontwikkel maatwerkoplossingen die perfect passen bij jouw huisstijl.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Frontend Development",
    description: "Bouw snelle en aantrekkelijke interfaces met moderne technologieën.",
  },
];

const solutions: Solution[][] = [
  [
    {
      icon: <Server className="h-5 w-5" />,
      title: "Backend Development",
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "E-commerce Platformontwikkeling",
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Headless E-commerce",
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Beveiliging",
    },
  ],
  [
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "Logo Ontwerp & Visuele Identiteit",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Merkstrategie en Storytelling",
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Technische SEO",
    },
  ],
  [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Digitale Marketingcampagnes",
    },
    {
      icon: <HardDrive className="h-5 w-5" />,
      title: "Hosting en Domeinbeheer",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Content Creatie",
      isNew: true,
    },
  ],
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 right-0 bg-white dark:bg-background border-b border-border shadow-lg"
      style={{ top: '100%' }}
    >
      <div className="container mx-auto max-w-[1800px] py-8 px-10">
        <div className="grid grid-cols-[2fr,3fr,2fr] gap-16">
          {/* Left Column - Directions */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
              DIENSTEN
            </h3>
            <div className="space-y-6">
              {directions.map((direction, index) => (
                <Link
                  key={index}
                  href="ui"
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
                      href="#"
                      className="flex items-center gap-3 group"
                      onClick={onClose}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 dark:bg-gray-800 text-foreground group-hover:text-primary">
                        {solution.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground group-hover:text-primary">
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
                  <h4 className="font-medium">Andere oplossingen nodig?</h4>
                  <p className="text-sm text-muted-foreground">
                    Voor teams van 300+ met geavanceerde beveiliging, controle en ondersteuning
                  </p>
                </div>
                <Button variant="outline" className="gap-2">
                  Praat met sales
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Video */}
          <div className="flex flex-col justify-between">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <video
                src="https://cdn.pixabay.com/video/2022/10/24/136268-764387688_tiny.mp4"
                poster="https://cdn.pixabay.com/video/2022/10/24/136268-764387688_tiny.mp4"
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
                <h3 className="text-white text-xl font-semibold mb-2">Leer meer over onze diensten</h3>
                <p className="text-white/80 text-sm mb-4">Ontdek hoe ons platform uw organisatie kan helpen groeien.</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Uitgelichte Case Study</h4>
              <p className="text-sm text-muted-foreground mb-4">Zie hoe XYZ Organisatie hun online aanwezigheid verbeterde met ons platform.</p>
              <Button variant="link" className="p-0 h-auto text-sm text-primary">
                Lees case study
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

