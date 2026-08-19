'use client';

import { motion } from "motion/react";
import { GearSix, Play } from "@phosphor-icons/react";

const updates = [
  {
    id: 1,
    name: "Priya S.",
    title: "API auth refactor - edge cases handled",
    duration: "1:23",
    tags: ["backend", "auth"],
    time: "3 min ago",
    avatar: (
      <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex-shrink-0" />
    ),
  },
  {
    id: 2,
    name: "Marcus W.",
    title: "Dashboard charts are live in staging",
    duration: "0:58",
    tags: ["frontend", "shipped"],
    time: "45 min ago",
    avatar: (
      <div className="w-10 h-10 bg-[#10b981] rounded-2xl flex-shrink-0" />
    ),
  },
  {
    id: 3,
    name: "Alex K.",
    title: "Onboarding flow - need design feedback",
    duration: "1:31",
    tags: ["product", "feedback"],
    time: "2h ago",
    avatar: (
      <div className="w-10 h-10 bg-[#f43f5e] rounded-tl-2xl rounded-br-2xl flex-shrink-0" />
    ),
  },
  {
    id: 4,
    name: "Jordan L.",
    title: "CI pipeline optimizations merged",
    duration: "0:47",
    tags: ["devops", "shipped"],
    time: "3h ago",
    avatar: (
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-[#a855f7] rotate-45 rounded-sm" />
      </div>
    ),
  },
  {
    id: 5,
    name: "Sam T.",
    title: "User research synthesis from yesterday",
    duration: "1:12",
    tags: ["research", "design"],
    time: "5h ago",
    avatar: (
      <div className="w-10 h-10 bg-[#f97316] rounded-full flex-shrink-0" />
    ),
  },
];

export function ProductDemo() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-wider text-accent mb-4 block">
          See it in action
        </span>
        <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-foreground">
          A standup that respects your time
        </h2>
        <p className="text-lg text-text-secondary mt-4 max-w-[55ch]">
          No scheduling. No awkward silences. Just quick updates your team can
          watch on their own time.
        </p>
      </div>

      {/* Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-surface rounded-2xl border border-border shadow-[0_20px_60px_rgb(0,0,0,0.06)] overflow-hidden"
      >
        {/* macOS Title Bar */}
        <div className="h-10 bg-[#f5f5f4] border-b border-border flex items-center px-4 relative">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-xs text-text-muted font-medium">
            Drift - Team Dashboard
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
          {/* Left Sidebar */}
          <div className="hidden md:flex flex-col bg-[#fafaf9] border-r border-border p-4 h-[600px]">
            {/* User Area */}
            <div className="flex items-center gap-3 mb-8 px-2">
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-surface rounded-full" />
              </div>
              <span className="font-medium text-sm text-foreground">
                Your Team
              </span>
            </div>

            {/* Channels */}
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2 px-2 mt-4">
                CHANNELS
              </div>
              <ul className="space-y-1">
                <li>
                  <button className="w-full text-left text-sm py-1.5 px-2 rounded-md bg-accent/10 text-accent font-medium">
                    #engineering
                  </button>
                </li>
                <li>
                  <button className="w-full text-left text-sm py-1.5 px-2 rounded-md hover:bg-black/5 text-text-secondary transition-colors">
                    #design
                  </button>
                </li>
                <li>
                  <button className="w-full text-left text-sm py-1.5 px-2 rounded-md hover:bg-black/5 text-text-secondary transition-colors">
                    #product
                  </button>
                </li>
                <li>
                  <button className="w-full text-left text-sm py-1.5 px-2 rounded-md hover:bg-black/5 text-text-secondary transition-colors">
                    #all-hands
                  </button>
                </li>
              </ul>
            </div>

            {/* Bottom Links */}
            <div className="mt-auto pt-4">
              <button className="w-full flex items-center gap-2 text-sm text-text-secondary py-1.5 px-2 rounded-md hover:bg-black/5 transition-colors">
                <GearSix size={16} weight="fill" />
                Settings
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6 h-[600px] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-lg text-foreground">
                Today&apos;s updates
              </h3>
              <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-mono">
                4 of 6 watched
              </span>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-2">
              {updates.map((update) => (
                <div
                  key={update.id}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#fafaf9] transition-colors border border-transparent hover:border-border group cursor-pointer"
                >
                  {/* Avatar */}
                  {update.avatar}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <span className="font-medium text-sm text-foreground">
                        {update.name}
                      </span>
                      <span className="text-xs text-text-muted ml-2">
                        {update.time}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mt-0.5 truncate">
                      {update.title}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {update.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#f5f5f4] text-text-secondary text-[10px] px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs bg-[#f5f5f4] text-text-secondary px-2 py-1 rounded-md">
                      {update.duration}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play size={14} weight="fill" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
