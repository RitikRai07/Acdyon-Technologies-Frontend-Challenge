"use client";

import { motion } from "motion/react";
import { Sparkles, Search, CheckCircle2, Rocket } from "lucide-react";

export function FeatureStory() {
  const stories = [
    {
      num: "01",
      title: "Discover With High Precision",
      tagline: "Find verified opportunities aligned with your exact production stack.",
      desc: "Stop sifting through thousands of stale, generic job listings. Nexora's discovery engine indexes verified developer positions calibrated against your frontend & fullstack competencies.",
      icon: Search,
      badge: "TARGETED DISCOVERY",
      metrics: "3.4x higher relevant match rate",
    },
    {
      num: "02",
      title: "Understand Your True Competency Fit",
      tagline: "Transparent fit scores detailing verified skills before you invest time.",
      desc: "Get crystal-clear 0-100% fit scores detailing verified skills, seniority calibration, and live ATS keyword alignment before submitting your application.",
      icon: CheckCircle2,
      badge: "COMPETENCY BREAKDOWN",
      metrics: "Live radar recalibration on skill toggle",
    },
    {
      num: "03",
      title: "Move Forward & Secure Top Offers",
      tagline: "Track your full application pipeline from submission to offer.",
      desc: "Keep momentum with a continuous application tracking pipeline, ATS formatting recommendations, and real-time market salary benchmarks.",
      icon: Rocket,
      badge: "CONTINUOUS MOMENTUM",
      metrics: "Integrated stage-by-stage Kanban pipeline",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#fafaf9] dark:bg-[#121215] border-y border-[#e5e7eb] dark:border-[#27272a] transition-colors overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3 shadow-sm">
            <Sparkles size={14} />
            <span>THE NEXORA ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#09090b] dark:text-[#f4f4f5]">
            Engineered for high-momentum careers.
          </h2>
          <p className="text-base text-[#71717a] dark:text-[#a1a1aa] mt-3 max-w-[60ch] leading-relaxed">
            A cohesive 3-stage capability system driving your career search forward with zero guesswork.
          </p>
        </div>

        {/* 3 Horizontally Layered Parallax Story Blocks */}
        <div className="space-y-12">
          {stories.map((story, i) => {
            const IconComp = story.icon;
            return (
              <motion.div
                key={story.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:border-blue-600/30 dark:hover:border-blue-500/30 transition-all"
              >
                {/* Number & Badge */}
                <div className="md:col-span-4 flex flex-col justify-between h-full border-b md:border-b-0 md:border-r border-[#e5e7eb] dark:border-[#27272a] pb-6 md:pb-0 md:pr-8">
                  <div>
                    <span className="font-mono text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-500 block mb-2 tracking-tight">
                      {story.num}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717a] dark:text-[#a1a1aa] font-semibold">
                      {story.badge}
                    </span>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-2xs">
                      <IconComp size={24} />
                    </div>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800/60">
                      {story.metrics}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-8">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#09090b] dark:text-[#f4f4f5] mb-2">
                    {story.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {story.tagline}
                  </p>
                  <p className="text-xs md:text-sm text-[#71717a] dark:text-[#a1a1aa] leading-relaxed max-w-[65ch]">
                    {story.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
