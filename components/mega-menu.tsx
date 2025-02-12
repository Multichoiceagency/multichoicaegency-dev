"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Palette,
  Smartphone,
  Globe,
  Code,
  Server,
  ShoppingCart,
  FileText,
  Search,
  TrendingUp,
  Video,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Direction {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface Solution {
  icon: React.ReactNode;
  title: string;
  href: string;
  isNew?: boolean;
}

const directions: Direction[] = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Bouw dynamische en schaalbare websites.",
    href: "/web-development",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Ontwerp intuïtieve en visueel aantrekkelijke interfaces.",
    href: "/wat-is-ux-ui-design",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Maatwerk Websites",
    description: "Ontwikkel websites die perfect passen bij jouw merk.",
    href: "/maatwerk-websites",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "E-commerce",
    description: "Creëer krachtige online winkels.",
    href: "/webshop-laten-maken",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Frontend Development",
    description: "Bouw responsieve en interactieve gebruikersinterfaces.",
    href: "/frontend-development",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend Development",
    description: "Implementeer robuuste server-side oplossingen.",
    href: "/backend-development",
  },
];

const solutions: Solution[][] = [
  [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Online Marketing",
      href: "/online-marketing",
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "SEO",
      href: "/seo",
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Google Ads",
      href: "/google-ads",
    },
  ],
  [
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Social Media",
      href: "/social-media",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Content Marketing",
      href: "/content-marketing",
    },
  ],
  [
    {
      icon: <Video className="h-5 w-5" />,
      title: "Bedrijfsvideo laten maken",
      href: "/bedrijfsvideo",
    },
    {
      icon: <PlayCircle className="h-5 w-5" />,
      title: "Productvideo laten maken",
      href: "/productvideo",
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
      style={{ top: "100%" }}
    >
      <div className="container mx-auto max-w-[1800px] py-8 px-10">
        <div className="grid grid-cols-[2fr,3fr,2fr] gap-16">
          {/* Linker kolom – DIENSTEN */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
              DIENSTEN
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

          {/* Middelste kolom – OPLOSSINGEN */}
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

          {/* Rechter kolom – Featured Video */}
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
                <track
                  kind="captions"
                  src="/videos/services-overview-captions.vtt"
                  srcLang="nl"
                  label="Nederlands"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Leer meer over onze diensten
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Ontdek hoe ons platform uw organisatie kan helpen groeien.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Uitgelichte Case Study</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Zie hoe XYZ Organisatie hun online aanwezigheid verbeterde met ons platform.
              </p>
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
