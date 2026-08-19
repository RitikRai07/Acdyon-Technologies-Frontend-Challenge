"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import { HeroVideo } from "./HeroVideo";
import { useApp } from "./AppContext";
import { FloatingPaths } from "./ui/background-paths";
import {
  ArrowRight,
  ShieldCheck,
  X,
  Send,
  Zap,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export function Hero() {
  const { applyToJob } = useApp();
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  const heroJob = {
    id: "nexora-labs",
    title: "Senior Frontend Engineer",
    company: "Nexora Labs",
    location: "Remote (Global)",
    salary: "₹18L – ₹30L",
    skills: ["React 19", "TypeScript", "Next.js", "Tailwind CSS"],
    matchScore: 96,
    type: "Remote",
    experience: "2-4 years",
    description:
      "Nexora Labs is seeking a passionate Senior Frontend Engineer to craft high-performance web components, design systems, and real-time AI interfaces.",
  };

  const handleApply = () => {
    applyToJob(heroJob);
    setShowPreviewModal(false);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-center pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden bg-[#fafaf9] dark:bg-[#09090b] transition-colors"
    >
      {/* Background Animated Paths */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 dark:bg-blue-500/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Top Text Content */}
        <div className="max-w-3xl flex flex-col items-start text-left mb-12 md:mb-16">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/25 dark:border-blue-500/35 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400"></span>
            </span>
            <span>INTELLIGENT CAREER DISCOVERY • NEXT.JS 15 & REACT 19</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.98] text-[#09090b] dark:text-[#f4f4f5]"
          >
            Find work <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              that moves you forward.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#71717a] dark:text-[#a1a1aa] leading-relaxed max-w-[55ch] mt-6"
          >
            Discover high-impact engineering roles evaluated against your exact technical competencies.
            Zero spam listings, transparent compensation brackets, and verified fit analysis.
          </motion.p>

          {/* Quick Search Tag Pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center gap-2 text-xs font-mono text-[#71717a] dark:text-[#a1a1aa]"
          >
            <span className="font-semibold text-[#09090b] dark:text-[#f4f4f5]">Popular filters:</span>
            {["React 19", "Next.js App Router", "Remote ₹25L+", "Full Stack", "TypeScript"].map((tag) => (
              <a
                key={tag}
                href="#product"
                className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 px-2.5 py-1 rounded-lg transition-colors shadow-2xs"
              >
                {tag}
              </a>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#product"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 active:scale-[0.98] transition-all text-base group"
            >
              <span>Explore Opportunities</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <button
              onClick={() => setShowPreviewModal(true)}
              className="flex items-center gap-2 bg-white dark:bg-[#18181b] hover:bg-[#fafaf9] dark:hover:bg-[#27272a] text-[#09090b] dark:text-[#f4f4f5] border border-[#e5e7eb] dark:border-[#27272a] font-medium px-6 py-3.5 rounded-xl shadow-sm active:scale-[0.98] transition-all text-base"
            >
              <Zap size={16} className="text-amber-500" />
              <span>Live Fit Demo (96%)</span>
            </button>
          </motion.div>

          {/* Credibility Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl text-xs font-mono text-[#71717a] dark:text-[#a1a1aa]"
          >
            <div className="flex items-center gap-2 bg-white/70 dark:bg-[#18181b]/70 border border-[#e5e7eb] dark:border-[#27272a] px-3.5 py-2 rounded-xl backdrop-blur-sm">
              <ShieldCheck size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>100% Verified Roles</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 dark:bg-[#18181b]/70 border border-[#e5e7eb] dark:border-[#27272a] px-3.5 py-2 rounded-xl backdrop-blur-sm">
              <TrendingUp size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>Real Salary Ranges</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 dark:bg-[#18181b]/70 border border-[#e5e7eb] dark:border-[#27272a] px-3.5 py-2 rounded-xl backdrop-blur-sm">
              <Briefcase size={16} className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
              <span>Zero Ghost Listings</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll-Driven Scale Visual Dashboard */}
        <motion.div
          style={{ scale, opacity }}
          className="w-full max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-[#e5e7eb] dark:from-[#27272a] to-transparent shadow-2xl"
        >
          <HeroVideo />
        </motion.div>
      </div>

      {/* Interactive Modal Preview */}
      <AnimatePresence>
        {showPreviewModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative text-[#09090b] dark:text-[#f4f4f5]"
            >
              <button
                onClick={() => setShowPreviewModal(false)}
                className="absolute top-5 right-5 text-[#71717a] hover:text-[#09090b] dark:hover:text-[#f4f4f5] p-1.5 rounded-xl hover:bg-[#fafaf9] dark:hover:bg-[#27272a] transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  NX
                </div>
                <div>
                  <h3 className="font-bold text-xl">{heroJob.title}</h3>
                  <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] font-medium">
                    {heroJob.company} • {heroJob.location} • {heroJob.salary}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-transparent border border-blue-600/20 dark:border-blue-500/30 rounded-2xl p-5 mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase">
                    AI FIT EVALUATION
                  </span>
                  <span className="text-xs font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 font-bold">
                    96% MATCH
                  </span>
                </div>
                <p className="text-sm text-[#09090b] dark:text-[#f4f4f5] font-semibold mt-2">
                  Exceptional alignment with your verified React 19 & Next.js skills.
                </p>
                <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] mt-1 leading-relaxed">
                  Your profile meets all 4 core technical criteria. Estimated interview callback probability is 3.4x higher than standard applicant pools.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleApply}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Apply with Nexora Profile</span>
                </button>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="px-4 py-3 border border-[#e5e7eb] dark:border-[#27272a] text-xs sm:text-sm text-[#71717a] dark:text-[#a1a1aa] rounded-xl font-medium hover:bg-[#fafaf9] dark:hover:bg-[#27272a]"
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
