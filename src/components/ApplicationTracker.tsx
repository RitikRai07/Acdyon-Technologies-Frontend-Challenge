"use client";

import { useState } from "react";
import { useApp, ApplicationItem } from "./AppContext";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Building2,
  Calendar,
  Clock,
  X,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function ApplicationTracker() {
  const { applications, updateAppStatus } = useApp();
  const [selectedApp, setSelectedApp] = useState<ApplicationItem | null>(null);

  const columns: ("Applied" | "Interview" | "Assessment" | "Offer")[] = [
    "Applied",
    "Interview",
    "Assessment",
    "Offer",
  ];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#09090b] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3 shadow-sm">
            <Sparkles size={14} />
            <span>APPLICATION PIPELINE MANAGER</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#09090b] dark:text-[#f4f4f5]">
            From submission to offer package.
          </h2>
          <p className="text-base text-[#71717a] dark:text-[#a1a1aa] mt-3 max-w-[60ch] leading-relaxed">
            Manage your interviews, code assessments, and offers in one organized, zero-stress pipeline.
            Click any card to advance its stage.
          </p>
        </div>

        {/* 4 Kanban Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map((col) => {
            const colApps = applications.filter((a) => a.status === col);
            return (
              <div
                key={col}
                className="bg-[#fafaf9] dark:bg-[#121215] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl p-4 min-h-[340px] flex flex-col shadow-xs"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#e5e7eb] dark:border-[#27272a] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#09090b] dark:text-[#f4f4f5]">
                      {col}
                    </span>
                  </div>
                  <span className="text-xs font-mono bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] text-[#71717a] dark:text-[#a1a1aa] px-2 py-0.5 rounded-md font-semibold">
                    {colApps.length}
                  </span>
                </div>

                {/* Cards */}
                <div className="space-y-3 flex-1">
                  {colApps.map((app) => (
                    <motion.div
                      key={app.id}
                      layout
                      whileHover={{ scale: 1.02, y: -2 }}
                      onClick={() => setSelectedApp(app)}
                      className={`bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition-all border-l-4 ${
                        col === "Offer"
                          ? "border-l-emerald-500"
                          : col === "Interview"
                          ? "border-l-amber-500"
                          : col === "Assessment"
                          ? "border-l-purple-500"
                          : "border-l-blue-600 dark:border-l-blue-500"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-[#09090b] dark:text-[#f4f4f5]">
                          {app.company}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${app.badgeBg}`}
                        >
                          {app.badgeText}
                        </span>
                      </div>

                      <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] font-medium mb-3 flex items-center gap-1">
                        <Building2 size={12} className="text-blue-600 dark:text-blue-400" />
                        <span>{app.role}</span>
                      </p>

                      <div className="pt-2 border-t border-[#e5e7eb] dark:border-[#27272a] flex items-center justify-between text-[10px] text-[#71717a] dark:text-[#a1a1aa] font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {app.date}
                        </span>
                        <span className="flex items-center gap-0.5 text-blue-600 dark:text-blue-400 font-semibold">
                          Advance <ArrowRight size={10} />
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {colApps.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center py-12 border border-dashed border-[#e5e7eb] dark:border-[#27272a] rounded-xl text-[11px] font-mono text-[#71717a] text-center px-4">
                      <span>No active cards in {col}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details & Status Change Modal */}
      <AnimatePresence>
        {selectedApp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl relative text-[#09090b] dark:text-[#f4f4f5]"
            >
              <button
                onClick={() => setSelectedApp(null)}
                className="absolute top-5 right-5 text-[#71717a] hover:text-[#09090b] dark:hover:text-[#f4f4f5] p-1.5 rounded-xl hover:bg-[#fafaf9] dark:hover:bg-[#27272a] transition-colors"
              >
                <X size={18} />
              </button>

              <h3 className="font-bold text-2xl mb-1">{selectedApp.company}</h3>
              <p className="text-xs font-medium text-[#71717a] dark:text-[#a1a1aa] mb-4">
                {selectedApp.role} • Current: <span className="font-bold text-blue-600 dark:text-blue-400">{selectedApp.status}</span>
              </p>

              <div className="bg-[#fafaf9] dark:bg-[#121215] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl p-4 text-xs space-y-2 mb-6">
                <div className="flex items-start gap-2.5 text-[#71717a] dark:text-[#a1a1aa]">
                  <Clock size={15} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#09090b] dark:text-[#f4f4f5] block mb-0.5">Latest Status Note:</span>
                    <span>{selectedApp.note}</span>
                  </div>
                </div>
              </div>

              {/* Move Stage Actions */}
              <div className="mb-6">
                <label className="text-[11px] font-mono font-semibold uppercase text-[#71717a] dark:text-[#a1a1aa] mb-2 block">
                  Move Stage in Pipeline
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {columns.map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        updateAppStatus(selectedApp.id, st);
                        setSelectedApp(null);
                      }}
                      className={`text-xs font-mono font-semibold py-2.5 px-3 rounded-xl border transition-all text-left flex items-center justify-between ${
                        selectedApp.status === st
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                          : "bg-[#fafaf9] dark:bg-[#121215] border-[#e5e7eb] dark:border-[#27272a] text-[#09090b] dark:text-[#f4f4f5] hover:border-blue-600"
                      }`}
                    >
                      <span>{st}</span>
                      {selectedApp.status === st && <CheckCircle2 size={13} />}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedApp(null)}
                className="w-full bg-[#09090b] dark:bg-white text-white dark:text-[#09090b] font-medium py-3 rounded-xl text-xs sm:text-sm transition-all shadow-sm active:scale-[0.98]"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
