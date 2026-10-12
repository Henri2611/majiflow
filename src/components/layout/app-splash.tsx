"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Droplets } from "lucide-react";

/**
 * Brand splash shown on the very first load while the app hydrates, then fades
 * away. It lives in the root layout, so client-side navigation never shows it.
 */
export function AppSplash() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="app-splash fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-background"
        >
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex size-14 items-center justify-center rounded-2xl bg-[#0052FF] text-white shadow-accent"
          >
            <Droplets className="size-7" aria-hidden />
          </motion.span>
          <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-[#0052FF] animate-pulse-dot" aria-hidden />
            Loading MajiFlow…
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
