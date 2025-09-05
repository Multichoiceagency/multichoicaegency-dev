'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useMemo, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe } from 'lucide-react';

type Locale = 'nl' | 'en' | 'de' | 'fr';

export interface LanguageOption {
  code: Locale;
  label: string;
}

const DEFAULT_LANGUAGES: LanguageOption[] = [
   // { code: 'nl', label: 'Nederlands' },
];

const LOCALES: Locale[] = ['nl'];

function stripLeadingLocale(path: string): { rest: string } {
  const parts = path.split('/');
  const maybe = parts[1] as Locale;
  if (LOCALES.includes(maybe)) {
    const rest = '/' + parts.slice(2).join('/');
    return { rest: rest === '//' ? '/' : rest };
  }
  return { rest: path || '/' };
}

export default function LanguageSwitcher({
  languages = DEFAULT_LANGUAGES,
  className = 'hidden md:flex items-center space-x-6',
}: {
  languages?: LanguageOption[];
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const currentLanguage = useMemo<Locale>(() => {
    const seg = (pathname || '/').split('/')[1] as Locale;
    return LOCALES.includes(seg) ? seg : 'en';
  }, [pathname]);

  const changeLanguage = useCallback(
    (next: Locale) => {
      if (!LOCALES.includes(next)) return;

      document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000;SameSite=Lax`;

      const { rest } = stripLeadingLocale(pathname || '/');
      const qs = searchParams?.toString();
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      const nextUrl = `/${next}${rest}${qs ? `?${qs}` : ''}${hash}`;

      router.push(nextUrl);
      setOpen(false);
    },
    [pathname, searchParams, router]
  );

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!open) return;
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  return (
    <div className={className}>
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(v => !v)}
          className="flex items-center text-white hover:text-primary transition-colors"
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <Globe className="w-5 h-5 text-white group-hover:text-primary" />
          <span className="ml-1 text-sm">{currentLanguage.toUpperCase()}</span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              role="menu"
              className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-[60] border border-gray-200 dark:border-gray-700"
            >
              {languages.map((lang) => {
                const active = currentLanguage === lang.code;
                return (
                  <motion.button
                    key={lang.code}
                    role="menuitem"
                    onClick={() => changeLanguage(lang.code)}
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }} // lichte achtergrond bij hover
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors
                      ${active
                        ? 'text-primary font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                      }`}
                  >
                    {lang.label}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
