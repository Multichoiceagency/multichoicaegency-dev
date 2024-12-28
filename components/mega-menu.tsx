"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
    icon: (
      <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 text-blue-600">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" />
        </svg>
      </div>
    ),
    title: "Banking",
    description: "Store, manage and move your funds safely.",
  },
  {
    icon: (
      <div className="flex h-8 w-8 items-center justify-center rounded bg-purple-100 text-purple-600">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
    ),
    title: "Collect",
    description: "Gather payments for dues, donations, events & more.",
  },
  {
    icon: (
      <div className="flex h-8 w-8 items-center justify-center rounded bg-green-100 text-green-600">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      </div>
    ),
    title: "Spend",
    description: "Control member spending with digital debit cards.",
  },
  {
    icon: (
      <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-100 text-orange-600">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6" />
          <path d="M12 18V6" />
        </svg>
      </div>
    ),
    title: "Earn",
    description: "Set up a passive fundraising program for consistent donations.",
  },
];

const solutions: Solution[][] = [
  [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
          <path d="M9 12v6" />
          <path d="M13 12v6" />
          <path d="M14 7.5c-1 0-1.8.7-2 1.5-1.4-2-4.5-1.9-5.9.2l-1 1.7c-1.4 2.3-.5 5.4 2.1 6.3 2.6 1 5.5-.2 6.8-2.7" />
        </svg>
      ),
      title: "Fraternities & Sororities",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 9.5V8a2 2 0 0 0-2-2h-6.5" />
          <path d="M6 12h8" />
          <path d="M6 16h8" />
          <path d="M2 8v11a2 2 0 0 0 2 2h14" />
          <path d="M6 2h4" />
          <path d="M8 2v4" />
          <path d="M2 8h16" />
        </svg>
      ),
      title: "College Clubs",
      isNew: true,
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="m4.93 4.93 14.14 14.14" />
          <path d="m19.07 4.93-14.14 14.14" />
        </svg>
      ),
      title: "Sports Club",
    },
  ],
  [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      ),
      title: "Multi-chapter Orgs",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
          <path d="M12 3v6" />
        </svg>
      ),
      title: "PTAs",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Girl Scouts",
    },
  ],
  [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </svg>
      ),
      title: "Booster Clubs",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v12" />
          <path d="m8 11 4 4 4-4" />
          <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
        </svg>
      ),
      title: "Summer Camps",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
          <circle cx="10" cy="13" r="8" />
        </svg>
      ),
      title: "Winter Camps",
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
              DIRECTIONS
            </h3>
            <div className="space-y-6">
              {directions.map((direction, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-start gap-4 group"
                  onClick={onClose}
                >
                  {direction.icon}
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
              SOLUTIONS FOR BANKING
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
                            NEW
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
                  <h4 className="font-medium">Need different solutions?</h4>
                  <p className="text-sm text-muted-foreground">
                    For teams of 300+ with advanced security, control, and support
                  </p>
                </div>
                <Button variant="outline" className="gap-2">
                  Talk to sales
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="flex flex-col justify-between">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Learn more about our features"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Learn more about our features</h3>
                <p className="text-white/80 text-sm mb-4">Discover how our platform can help your organization thrive.</p>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black w-fit">
                  Watch video
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Featured Case Study</h4>
              <p className="text-sm text-muted-foreground mb-4">See how XYZ Organization improved their financial management with our platform.</p>
              <Button variant="link" className="p-0 h-auto text-sm text-primary">
                Read case study
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

