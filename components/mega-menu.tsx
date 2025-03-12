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
  PlayCircle,
  ShoppingBagIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconBrandWordpress } from "@tabler/icons-react";

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
    title: "Website laten maken",
    description: "Wij bouwen dynamische en schaalbare websites.",
    href: "/website-laten-maken",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Webshop laten maken",
    description: "Creëer krachtige online winkels.",
    href: "/webshop-laten-maken",
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
    href: "/maatwerk-website-laten-maken",
  },
  {
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    title: "Shopify Webshop laten maken",
    description: "Ideaal voor snelle conversies",
    href: "/shopify-webshop-laten-maken",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Woocommerce webshop laten maken",
    description: "Geheel een ontwerp op maat naar jouw wensen en eisen.",
    href: "/woocommerce-webshop-laten-maken",  
  },
  {
    icon: <IconBrandWordpress className="h-5 w-5" />,
    title: "Wordpress website laten maken",
    description: "Geheel een ontwerp op maat naar jouw wensen en eisen.",
    href: "/wordpress-website-laten-maken",
  },
];

const solutions: Solution[][] = [
  [
    {
      icon: <Search className="h-5 w-5" />,
      title: "SEO",
      href: "essmarketing.nl",
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Google Ads",
      href: "essmarketing.nl",
    },
  ],
  [
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Social Media",
      href: "essmarketing.nl",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Content Marketing",
      href: "essmakreting.nl",
    },
  ],
  [
    {
      icon: <Video className="h-5 w-5" />,
      title: "Bedrijfsvideo laten maken",
      href: "essmedia.nl",
    },
    {
      icon: <PlayCircle className="h-5 w-5" />,
      title: "Productvideo laten maken",
      href: "essmedia.nl",
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
  className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-b border-border shadow-lg"
  style={{ top: "100%" } as React.CSSProperties}
>
      <div className="container mx-auto max-w-[1800px] py-8 px-10">
        <div className="grid grid-cols-[2fr,3fr,2fr] gap-16">
          {/* Linker kolom – DIENSTEN */}
          <div>
            <h3 className="text-xs font-semibold mb-6 uppercase tracking-wider">
              DIENSTEN
            </h3>
            <div className="space-y-6">
              {directions.map((direction, index) => (
                <Link
                  key={index}
                  href={direction.href}
                  className="flex items-start gap-4 group text-sm"
                  onClick={onClose}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md hover:text-black bg-primary/10 text-primary">
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
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">
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
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 dark:bg-gray-900 text-foreground group-hover:text-primary">
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
                    Vraag dan een vrijblijvend offerte aan of vraag een gratis adviesgesprek aan van 30 minuten.
                  </p>
                </div>
                <Link href="/offerte-aanvragen">
                  <Button variant="outline" className="gap-2 dark:bg-green-700">
                    Meer informatie
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            </div>

          {/* Rechter kolom – Featured Video */}
          <div className="flex flex-col justify-between">
            <div className="relative aspect-video w-full h-[300px] overflow-hidden rounded-lg">
              <video
                src="https://cdn.dribbble.com/userupload/15425359/file/original-2b2e2d473e5fee8e7d8d4f6ee7860d94.mp4"
                poster="https://cdn.dribbble.com/userupload/15425359/file/original-2b2e2d473e5fee8e7d8d4f6ee7860d94.mp4"
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
            </div>
          </div>
        </div>
    </motion.div>
  );
}
