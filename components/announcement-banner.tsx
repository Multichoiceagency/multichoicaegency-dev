"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from 'lucide-react';

export function AnnouncementBanner({ isVisible }: { isVisible: boolean }) {
  //const [isVisible, setIsVisible] = useState(true); //Removed as isVisible is now a prop

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-teal-900 text-white overflow-hidden"
    >
      <div className="container mx-auto max-w-[1800px] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/10">BROCHURE</span>
          <span className="text-sm">Vraag nu de digital design rapport aan</span>
        </div>
        <button
          onClick={() => {/*setIsVisible(false)*/}} //Commented out as isVisible is managed externally
          className="p-1 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

