'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages } from 'lucide-react';

export default function TranslateHint() {
  const [show, setShow] = useState(false);
  const [browserLang, setBrowserLang] = useState<string>();
  const [pageLang, setPageLang] = useState<string>();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const userLang = navigator.language.split('-')[0]; // bv. "en"
    const pageLangAttr = document.documentElement.lang || 'nl'; // bv. "nl"

    setBrowserLang(userLang);
    setPageLang(pageLangAttr);

    if (userLang !== pageLangAttr) {
      setShow(true);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] max-w-xs md:max-w-sm bg-gray-900 text-white px-4 py-3 rounded-xl shadow-lg flex items-start gap-3"
        >
          <Languages className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium">
              Deze pagina is in <span className="uppercase">{pageLang}</span>.
            </p>
            <p className="text-xs text-gray-300 mt-0.5">
              Gebruik de <strong>vertaalfunctie van je browser</strong> om naar{' '}
              <span className="uppercase">{browserLang}</span> te vertalen.
            </p>
          </div>
          <button
            onClick={() => setShow(false)}
            className="ml-2 text-gray-400 hover:text-primary transition-colors text-sm"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
