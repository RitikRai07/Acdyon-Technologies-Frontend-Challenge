"use client";

import { Sparkles, Compass, Lightbulb, Rocket, CheckCircle2 } from "lucide-react";

export function RepurposedColumns() {
  const pillars = [
    {
      title: "DISCOVER",
      icon: Compass,
      color: "border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/10",
      description: "Direct indexing into verified tech jobs calibrated to your stack.",
      items: [
        {
          heading: "Personalized Opportunities",
          desc: "Targeted job curation evaluated against your exact skill set rather than generic keyword queries.",
        },
        {
          heading: "Deep Context Alignment",
          desc: "Multi-dimensional scoring across compensation expectations, seniority, and tech stack.",
        },
        {
          heading: "Pure Signal Search",
          desc: "Zero spam listings, zero ghost jobs, and zero automated recruiter junk messages.",
        },
      ],
    },
    {
      title: "UNDERSTAND",
      icon: Lightbulb,
      color: "border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10",
      description: "Transparent 0-100% skill breakdown before you invest time applying.",
      items: [
        {
          heading: "Granular Fit Insights",
          desc: "Clear breakdown of verified matched skills vs. missing competencies before you apply.",
        },
        {
          heading: "Live ATS Resume Scanner",
          desc: "Instant ATS parsing evaluation to format your project experience for high visibility.",
        },
        {
          heading: "Tier Unblockers",
          desc: "Actionable recommendations on which technical topics unlock higher compensation tiers.",
        },
      ],
    },
    {
      title: "MOVE FORWARD",
      icon: Rocket,
      color: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
      description: "Complete momentum from one-click application to accepted offer.",
      items: [
        {
          heading: "Pipeline Dashboard",
          desc: "Centralized pipeline dashboard managing every active role from submission to offer review.",
        },
        {
          heading: "Market Salary Radar",
          desc: "Real-time compensation benchmarks keeping your negotiation leverage synchronized with market shifts.",
        },
        {
          heading: "Verified Fast-Track",
          desc: "One-click application submission directly to engineering hiring managers.",
        },
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#09090b] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3 shadow-sm">
            <Sparkles size={14} />
            <span>PRODUCT CAPABILITY PILLARS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#09090b] dark:text-[#f4f4f5]">
            Built around your career trajectory.
          </h2>
          <p className="text-base text-[#71717a] dark:text-[#a1a1aa] mt-3 max-w-[60ch] leading-relaxed">
            Three core pillars designed to eliminate job search friction and move your career forward.
          </p>
        </div>

        {/* 3 Vertical Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((col) => {
            const IconComp = col.icon;
            return (
              <div
                key={col.title}
                className="bg-[#fafaf9] dark:bg-[#121215] border border-[#e5e7eb] dark:border-[#27272a] rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:border-blue-600/40 dark:hover:border-blue-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e5e7eb] dark:border-[#27272a]">
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#09090b] dark:text-[#f4f4f5] block">
                        {col.title}
                      </span>
                      <span className="text-[11px] text-[#71717a] dark:text-[#a1a1aa] mt-0.5 block">
                        {col.description}
                      </span>
                    </div>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${col.color} shadow-sm group-hover:scale-105 transition-transform flex-shrink-0 ml-3`}>
                      <IconComp size={20} />
                    </div>
                  </div>

                  <div className="space-y-6">
                    {col.items.map((item) => (
                      <div key={item.heading}>
                        <h4 className="font-bold text-sm text-[#09090b] dark:text-[#f4f4f5] flex items-center gap-2 mb-1">
                          <CheckCircle2 size={15} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <span>{item.heading}</span>
                        </h4>
                        <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] leading-relaxed pl-6">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
