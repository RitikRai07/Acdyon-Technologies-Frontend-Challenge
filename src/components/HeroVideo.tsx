"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function HeroVideo() {
  return (
    <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-[#e5e7eb] dark:border-[#27272a] bg-[#fafaf9] dark:bg-[#121215] group">
      {/* High-Resolution User Uploaded Hero Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src="/nexora-hero.jpg"
          alt="Nexora AI Career Discovery Platform in Action"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />

        {/* Subtle Ambient Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Interactive Floating AI Match Badge on Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white shadow-xl flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
              NX
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">Nexora AI Engine</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-semibold">
                  LIVE
                </span>
              </div>
              <p className="text-xs text-white/70 mt-0.5">
                Real-time contextual pathway & fit evaluation
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-xl">
            <Sparkles size={13} className="text-emerald-400" />
            <span>92% MATCH</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
