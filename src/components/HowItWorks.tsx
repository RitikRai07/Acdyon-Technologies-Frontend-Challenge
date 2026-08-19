import { UserCheck, Sparkles, Rocket, Check } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Build your verified profile",
      description:
        "Connect your GitHub or upload your resume. Nexora parses your production stack, frameworks, and architecture strengths automatically.",
      icon: UserCheck,
      details: "Instant parsing • Zero manual entry required",
    },
    {
      num: "02",
      title: "Discover calibrated matches",
      description:
        "Receive contextual match evaluations scored against live engineering requirements across verified technology roles.",
      icon: Sparkles,
      details: "Multi-dimensional scoring • Transparent salary bands",
    },
    {
      num: "03",
      title: "Apply & track offers",
      description:
        "Apply directly to engineering hiring managers with complete confidence and manage every interview stage from a single dashboard.",
      icon: Rocket,
      details: "One-click submission • Integrated Kanban pipeline",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#fafaf9] dark:bg-[#121215] border-y border-[#e5e7eb] dark:border-[#27272a] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3 shadow-sm">
            <Sparkles size={14} />
            <span>STREAMLINED WORKFLOW</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#09090b] dark:text-[#f4f4f5]">
            How Nexora Works
          </h2>
          <p className="text-base text-[#71717a] dark:text-[#a1a1aa] mt-3 max-w-[60ch] leading-relaxed">
            Three simple steps between your profile setup and your next career move.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-3xl p-8 hover:border-blue-600/40 dark:hover:border-blue-500/40 transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-600/10 dark:bg-blue-500/15 px-2.5 py-1 rounded-lg">
                      STEP {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                      <IconComp size={22} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#09090b] dark:text-[#f4f4f5] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e5e7eb] dark:border-[#27272a] flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Check size={13} strokeWidth={2.5} />
                  <span>{step.details}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
