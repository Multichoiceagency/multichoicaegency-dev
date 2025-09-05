'use client';

import { useEffect, useState, useCallback } from 'react';

type DeferredPrompt = Event & {
  prompt: () => Promise<void>;
  userChoice?: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

const STORAGE_KEY = 'pwa-install-dismissed';

function isStandalone() {
  // @ts-ignore iOS Safari
  if (typeof window !== 'undefined' && window.navigator?.standalone) return true;
  if (typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches) return true;
  return false;
}

export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<DeferredPrompt | null>(null);
  const [visible, setVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isStandalone() || localStorage.getItem(STORAGE_KEY) === '1') return;

    const ua = window.navigator.userAgent.toLowerCase();
    const isiOS = /iphone|ipad|ipod/.test(ua);
    setIsIOS(isiOS);

    const onBIP = (e: Event) => {
      e.preventDefault();
      setDeferred(e as DeferredPrompt);
      setVisible(true);
    };

    window.addEventListener('beforeinstallprompt', onBIP);

    let t: number | undefined;
    if (isiOS) t = window.setTimeout(() => setVisible(true), 2000);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBIP);
      if (t) clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const onInstalled = () => {
      setVisible(false);
      setDeferred(null);
      localStorage.setItem(STORAGE_KEY, '1');
    };
    window.addEventListener('appinstalled', onInstalled);
    return () => window.removeEventListener('appinstalled', onInstalled);
  }, []);

  const install = useCallback(async () => {
    if (!deferred) return;
    await deferred.prompt();
    try {
      const choice = await (deferred as any).userChoice;
      if (choice?.outcome === 'accepted') {
        localStorage.setItem(STORAGE_KEY, '1');
        setVisible(false);
        setDeferred(null);
      }
    } catch {}
  }, [deferred]);

  const dismiss = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
    setDeferred(null);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-3 z-[1000] flex justify-center px-2 pointer-events-none">
      <div className="pointer-events-auto max-w-[560px] w-full mx-auto rounded-2xl shadow-lg border border-black/10 bg-white/90 backdrop-blur px-4 py-3 flex items-center gap-3 dark:bg-zinc-900/90 dark:border-white/10">
        <div className="shrink-0 h-8 w-8 rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
          <img src="/web-app-manifest-192x192.png" alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium truncate">App installeren?</p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 truncate">Snel opstarten en fullscreen ervaring.</p>
        </div>
        {isIOS ? (
          <button onClick={dismiss} className="text-xs text-zinc-700 dark:text-zinc-200 underline underline-offset-2">Oké</button>
        ) : (
          <>
            <button onClick={dismiss} className="text-xs px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700">Later</button>
            <button onClick={install} className="text-xs px-3 py-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black">Installeren</button>
          </>
        )}
      </div>
    </div>
  );
}
