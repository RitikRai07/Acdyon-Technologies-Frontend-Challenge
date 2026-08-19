"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Rocket, Sparkles, X } from "lucide-react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function EasterEgg({ triggerCount }: { triggerCount: number }) {
  const [progress, setProgress] = useState(0);
  const [activated, setActivated] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Trigger when logo is clicked 5+ times
  useEffect(() => {
    if (triggerCount > 0 && triggerCount % 5 === 0) {
      setActivated(true);
    }
  }, [triggerCount]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activated) return;

      const expected = KONAMI_CODE[progress];
      if (e.key === expected) {
        const next = progress + 1;
        setProgress(next);
        if (next === KONAMI_CODE.length) {
          setActivated(true);
        }
      } else {
        setProgress(0);
      }
    },
    [progress, activated]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const dismiss = () => {
    setActivated(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <>
      {/* Founder Mode Modal */}
      <AnimatePresence>
        {activated && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-[#09090b] text-white border border-blue-500/50 rounded-3xl max-w-md w-full p-8 shadow-2xl relative text-center overflow-hidden"
            >
              <button
                onClick={dismiss}
                className="absolute top-5 right-5 text-white/60 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-4 animate-bounce shadow-xl shadow-blue-600/40">
                <Rocket size={32} />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/70 px-3 py-1 rounded-full border border-blue-800/80">
                SECRET EASTER EGG UNLOCKED
              </span>

              <h2 className="text-3xl font-bold tracking-tight mt-4">
                Founder Mode: Active 🚀
              </h2>

              <p className="text-xs text-white/70 mt-2 leading-relaxed">
                Welcome to Nexora Founder Mode by <span className="text-white font-semibold">Ritik Rai</span>. All candidate profiles now receive VIP priority indexing and zero-wait fast-track evaluations.
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col items-center justify-center gap-1.5 text-xs font-mono text-blue-400">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>Acdyon Technologies Frontend Challenge</span>
                </div>
                <span className="text-white/50 text-[11px]">Crafted with Next.js 15, React 19 & Tailwind CSS v4</span>
              </div>

              <button
                onClick={dismiss}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl text-sm transition-all shadow-md shadow-blue-600/30 active:scale-95"
              >
                Continue Exploring in Founder Mode
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Persistent Toast after dismiss */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[121] bg-[#09090b] border border-blue-500/50 text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-mono font-medium flex items-center gap-2.5 backdrop-blur-md"
          >
            <Rocket size={15} className="text-blue-400" />
            <span>Founder Mode Active • Ritik Rai Profile</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
