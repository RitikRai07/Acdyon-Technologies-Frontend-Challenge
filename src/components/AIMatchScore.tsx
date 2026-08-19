"use client";

import { useState } from "react";
import { useApp } from "./AppContext";
import { SpotlightCard } from "./SpotlightCard";
import { motion } from "motion/react";
import {
  Sparkles,
  CheckCircle2,
  Circle,
  Plus,
  Minus,
  Sliders,
} from "lucide-react";

export function AIMatchScore() {
  const { activeSkills, toggleSkill } = useApp();
  const [selectedSeniority, setSelectedSeniority] = useState<"Mid" | "Senior" | "Lead">("Senior");

  const coreSkills = [
    { name: "React", weight: 6 },
    { name: "TypeScript", weight: 5 },
    { name: "Next.js", weight: 6 },
    { name: "REST APIs", weight: 4 },
  ];

  const bonusSkills = [
    { name: "AWS", weight: 4 },
    { name: "Docker", weight: 4 },
    { name: "Tailwind CSS", weight: 3 },
  ];

  // Dynamic Score Calculation
  const coreScore = coreSkills
    .filter((s) => activeSkills.includes(s.name))
    .reduce((sum, s) => sum + s.weight, 0);

  const bonusScore = bonusSkills
    .filter((s) => activeSkills.includes(s.name))
    .reduce((sum, s) => sum + s.weight, 0);

  const seniorityOffset = selectedSeniority === "Lead" ? -3 : selectedSeniority === "Senior" ? 0 : 4;
  const rawScore = 72 + coreScore + bonusScore + seniorityOffset;
  const calculatedScore = Math.min(99, Math.max(65, rawScore));

  return (
    <section id="features" className="py-24 md:py-32 bg-[#fafaf9] dark:bg-[#121215] border-y border-[#e5e7eb] dark:border-[#27272a] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3 shadow-sm">
            <Sparkles size={14} />
            <span>CONTEXTUAL EVALUATION ENGINE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#09090b] dark:text-[#f4f4f5]">
            Know your exact fit before applying.
          </h2>
          <p className="text-base text-[#71717a] dark:text-[#a1a1aa] mt-3 max-w-[60ch] leading-relaxed">
            Nexora scores opportunity alignment across core framework mastery, type safety rigor,
            compensation expectations, and seniority depth in real time.
          </p>
        </div>

        {/* 2-Column Evaluation Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-3xl p-8 md:p-12 shadow-sm">
          {/* Left Side: Dynamic Circular Radial Score + Sub-breakdowns */}
          <div className="lg:col-span-6 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-[#e5e7eb] dark:border-[#27272a] pb-8 lg:pb-0 lg:pr-12">
            {/* Seniority Selector */}
            <div className="flex items-center gap-1.5 bg-[#fafaf9] dark:bg-[#121215] border border-[#e5e7eb] dark:border-[#27272a] p-1 rounded-xl mb-6 text-xs font-mono">
              <span className="text-[#71717a] px-2 flex items-center gap-1">
                <Sliders size={12} /> Target:
              </span>
              {(["Mid", "Senior", "Lead"] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedSeniority(lvl)}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    selectedSeniority === lvl
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-[#71717a] dark:text-[#a1a1aa] hover:text-[#09090b] dark:hover:text-[#f4f4f5]"
                  }`}
                >
                  {lvl} Level
                </button>
              ))}
            </div>

            {/* Animated Radial Circle */}
            <div className="relative w-48 h-48 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="text-[#e5e7eb] dark:text-[#27272a]"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="text-blue-600 dark:text-blue-500"
                  strokeWidth="8"
                  strokeDasharray="263.89"
                  animate={{ strokeDashoffset: 263.89 * (1 - calculatedScore / 100) }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  key={calculatedScore}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-4xl font-bold font-mono tracking-tight text-[#09090b] dark:text-[#f4f4f5]"
                >
                  {calculatedScore}%
                </motion.span>
                <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mt-0.5">
                  {calculatedScore > 90 ? "Excellent Match" : "Strong Match"}
                </span>
                <span className="text-[10px] text-[#71717a] font-mono mt-0.5">
                  {selectedSeniority} Frontend Role
                </span>
              </div>
            </div>

            {/* Score Breakdown List */}
            <div className="w-full space-y-2.5 font-mono text-xs max-w-sm">
              {[
                { name: "Core Stack Mastery", score: `${calculatedScore}%` },
                { name: "Seniority Calibration", score: selectedSeniority === "Lead" ? "88%" : "95%" },
                { name: "Architecture & Rigor", score: activeSkills.includes("Docker") ? "94%" : "86%" },
                { name: "Location & Mode Fit", score: "100%" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between bg-[#fafaf9] dark:bg-[#121215] border border-[#e5e7eb] dark:border-[#27272a] px-4 py-2.5 rounded-xl"
                >
                  <span className="text-[#71717a] dark:text-[#a1a1aa] font-medium">
                    {item.name}
                  </span>
                  <span className="font-bold text-[#09090b] dark:text-[#f4f4f5]">
                    {item.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Spotlight Card for "Why you're a match" */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <SpotlightCard className="!p-6 !rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 size={16} />
                  <span>Verified Competencies (Click to toggle)</span>
                </h3>
                <span className="text-[10px] font-mono text-[#71717a]">Live Recalibration</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {["React", "TypeScript", "Next.js", "REST APIs"].map((skill) => {
                  const hasSkill = activeSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`flex items-center justify-between text-xs font-medium px-3.5 py-2.5 rounded-xl border transition-all ${
                        hasSkill
                          ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 shadow-2xs"
                          : "bg-[#fafaf9] dark:bg-[#121215] border-[#e5e7eb] dark:border-[#27272a] text-[#71717a] line-through opacity-60"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={14} className={hasSkill ? "text-emerald-600" : "text-[#71717a]"} />
                        <span>{skill}</span>
                      </span>
                      {hasSkill ? <Minus size={12} /> : <Plus size={12} />}
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>

            <SpotlightCard className="!p-6 !rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <Circle size={16} />
                  <span>Expandable Skill Boosters (Click to add)</span>
                </h3>
                <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">+4% each</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {["AWS", "Docker"].map((skill) => {
                  const hasSkill = activeSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`flex items-center justify-between text-xs font-medium px-3.5 py-2.5 rounded-xl border transition-all ${
                        hasSkill
                          ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300"
                          : "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-300"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {hasSkill ? (
                          <CheckCircle2 size={14} className="text-emerald-600" />
                        ) : (
                          <Circle size={14} className="text-amber-600" />
                        )}
                        <span>{skill}</span>
                      </span>
                      {hasSkill ? <CheckCircle2 size={13} /> : <Plus size={13} />}
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
