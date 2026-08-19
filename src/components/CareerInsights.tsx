"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  TrendingUp,
  Layers,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

export function CareerInsights() {
  const [selectedRoleTier, setSelectedRoleTier] = useState<"Mid" | "Senior" | "Staff">("Senior");

  const skills = [
    { name: "React 19 & Next.js Architecture", percentage: 96, color: "bg-blue-600 dark:bg-blue-500" },
    { name: "TypeScript & Design Systems", percentage: 91, color: "bg-indigo-500" },
    { name: "State & API Data Caching", percentage: 84, color: "bg-emerald-500" },
    { name: "Containerization & Cloud CI/CD", percentage: 68, color: "bg-amber-500" },
  ];

  const salaryData = {
    Mid: {
      range: "₹14L – ₹24L",
      median: "₹18.5L",
      openings: "420+ active roles",
      keyRequirement: "Component modularity, React hooks, REST API integrations",
    },
    Senior: {
      range: "₹24L – ₹42L",
      median: "₹32L",
      openings: "280+ active roles",
      keyRequirement: "Next.js SSR/ISR, performance optimization, design system tokens",
    },
    Staff: {
      range: "₹42L – ₹65L+",
      median: "₹52L",
      openings: "85+ active roles",
      keyRequirement: "Cross-team frontend architecture, build pipelines, tech strategy",
    },
  };

  return (
    <section id="insights" className="py-24 md:py-32 bg-[#fafaf9] dark:bg-[#121215] border-y border-[#e5e7eb] dark:border-[#27272a] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3 shadow-sm">
            <Sparkles size={14} />
            <span>CAREER & MARKET BENCHMARKING</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#09090b] dark:text-[#f4f4f5]">
            Know your market value & next leap.
          </h2>
          <p className="text-base text-[#71717a] dark:text-[#a1a1aa] mt-3 max-w-[60ch] leading-relaxed">
            Real engineering salary distributions and actionable technical gaps to help you negotiate and level up with confidence.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skill Progress Bar Box (col-span-7) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#09090b] dark:text-[#f4f4f5] flex items-center gap-2">
                <Layers size={18} className="text-blue-600 dark:text-blue-400" />
                <span>Verified Skill Competency Breakdown</span>
              </h3>
              <span className="text-[11px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800 font-semibold">
                Live Radar
              </span>
            </div>

            <div className="space-y-6">
              {skills.map((item, i) => (
                <div key={item.name}>
                  <div className="flex justify-between items-center mb-2 text-xs">
                    <span className="font-semibold text-[#09090b] dark:text-[#f4f4f5]">
                      {item.name}
                    </span>
                    <span className="font-bold font-mono text-[#09090b] dark:text-[#f4f4f5]">
                      {item.percentage}%
                    </span>
                  </div>

                  <div className="w-full bg-[#fafaf9] dark:bg-[#27272a] h-3.5 rounded-full overflow-hidden p-0.5 border border-[#e5e7eb] dark:border-[#3f3f46]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                      className={`h-full rounded-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Growth Tip Footer */}
            <div className="mt-8 pt-6 border-t border-[#e5e7eb] dark:border-[#27272a] flex items-center justify-between text-xs text-[#71717a] dark:text-[#a1a1aa]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-blue-600 dark:text-blue-400" />
                <span>Calibrated against 1,200+ verified engineering job descriptions.</span>
              </span>
            </div>
          </div>

          {/* Interactive Salary Benchmark Card (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
              {/* Background Glow Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-2xl pointer-events-none rounded-full" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white/15 text-white flex items-center justify-center shadow-sm">
                  <IndianRupee size={22} />
                </div>
                <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl text-[11px] font-mono">
                  {(["Mid", "Senior", "Staff"] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setSelectedRoleTier(tier)}
                      className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                        selectedRoleTier === tier
                          ? "bg-white text-blue-900 shadow-sm"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <span className="text-[11px] font-mono text-white/80 uppercase font-semibold block mb-1">
                {selectedRoleTier} Frontend Benchmark
              </span>

              <h3 className="text-3xl font-extrabold text-white tracking-tight mb-1">
                {salaryData[selectedRoleTier].range}
              </h3>

              <div className="flex items-center gap-3 text-xs font-mono text-white/90 mb-5">
                <span>Median: {salaryData[selectedRoleTier].median}</span>
                <span>•</span>
                <span>{salaryData[selectedRoleTier].openings}</span>
              </div>

              <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                <p className="text-[11px] font-mono text-blue-200 uppercase font-bold mb-1 flex items-center gap-1">
                  <TrendingUp size={12} />
                  <span>Key Tier Unblocker:</span>
                </p>
                <p className="text-xs text-white leading-relaxed">
                  {salaryData[selectedRoleTier].keyRequirement}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
