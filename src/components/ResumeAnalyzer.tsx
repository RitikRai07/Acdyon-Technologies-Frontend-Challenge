"use client";

import { useState } from "react";
import { useApp } from "./AppContext";
import { motion } from "motion/react";
import {
  UploadCloud,
  FileText,
  Sparkles,
  RefreshCw,
  Award,
  Check,
  Target,
  FileCheck,
} from "lucide-react";

interface OptimizationItem {
  id: string;
  title: string;
  category: "keyword" | "formatting" | "impact";
  points: number;
  applied: boolean;
  explanation: string;
}

export function ResumeAnalyzer() {
  const { addToast, activeSkills, toggleSkill } = useApp();
  const [status, setStatus] = useState<"idle" | "analyzing" | "complete">("idle");
  const [progress, setProgress] = useState(0);
  const [stepMessage, setStepMessage] = useState("Initializing ATS engine...");
  const [fileName, setFileName] = useState("Ritik_Rai_Resume.pdf");

  const [optimizations, setOptimizations] = useState<OptimizationItem[]>([
    {
      id: "opt-docker",
      title: "Add Docker & Containerization keyword to tech stack",
      category: "keyword",
      points: 6,
      applied: false,
      explanation: "Required for 78% of senior frontend roles using modern micro-frontend architectures.",
    },
    {
      id: "opt-metrics",
      title: "Include quantified performance metrics in work history",
      category: "impact",
      points: 5,
      applied: false,
      explanation: "e.g. 'Improved Next.js LCP by 42% and reduced bundle size by 180kb'.",
    },
    {
      id: "opt-cloud",
      title: "Specify CI/CD and automated test coverage (Jest / Playwright)",
      category: "formatting",
      points: 4,
      applied: false,
      explanation: "Validates engineering rigor and production-ready code delivery.",
    },
  ]);

  const baseScore = 82;
  const appliedBonus = optimizations
    .filter((o) => o.applied)
    .reduce((sum, o) => sum + o.points, 0);
  const currentScore = Math.min(100, baseScore + appliedBonus);

  const toggleOptimization = (id: string) => {
    setOptimizations((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextState = !item.applied;
          if (nextState) {
            addToast(`Applied: "${item.title}" (+${item.points} pts)`);
            if (id === "opt-docker" && !activeSkills.includes("Docker")) {
              toggleSkill("Docker");
            }
          } else {
            addToast(`Reverted: "${item.title}" (-${item.points} pts)`, "info");
          }
          return { ...item, applied: nextState };
        }
        return item;
      })
    );
  };

  const startAnalysis = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
    setStatus("analyzing");
    setProgress(0);

    const steps = [
      "Extracting text & parsing semantic structure...",
      "Scoring React 19 & Next.js core competencies...",
      "Benchmarking against top tech ATS filters...",
      "Generating personalized optimization roadmap...",
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += 25;
      const stepIdx = Math.min(Math.floor(current / 25), steps.length - 1);
      setStepMessage(steps[stepIdx]);

      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setStatus("complete");
          addToast("Resume scan complete! ATS Score & roadmap generated.");
        }, 350);
      } else {
        setProgress(current);
      }
    }, 220);
  };

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#09090b] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={14} />
            <span>RESUME OPTIMIZATION ENGINE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#09090b] dark:text-[#f4f4f5]">
            Turn your resume into your strongest leverage.
          </h2>
          <p className="text-base text-[#71717a] dark:text-[#a1a1aa] mt-3 max-w-[60ch] leading-relaxed">
            Scan your resume against live ATS algorithms used by tech leaders. Get instant,
            verifiable recommendations that directly boost your interview callbacks.
          </p>
        </div>

        {/* Card Wrapper */}
        <div className="bg-[#fafaf9] dark:bg-[#121215] border border-[#e5e7eb] dark:border-[#27272a] rounded-3xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto">
          {status === "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-2 border-dashed border-[#e5e7eb] dark:border-[#27272a] hover:border-blue-600 dark:hover:border-blue-500 rounded-2xl p-10 md:p-14 text-center transition-all bg-white dark:bg-[#18181b] relative group cursor-pointer"
            >
              <input
                type="file"
                accept=".pdf,.docx,.doc"
                onChange={startAnalysis}
                className="absolute inset-0 opacity-0 cursor-pointer z-20"
              />

              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud size={32} />
              </div>

              <h3 className="text-xl font-bold text-[#09090b] dark:text-[#f4f4f5] mb-2">
                Drop your resume here or click to browse
              </h3>
              <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] max-w-[42ch] mx-auto mb-6">
                Supports PDF or DOCX formats. Analyzed locally in your browser session for complete privacy.
              </p>

              <button
                type="button"
                onClick={() => startAnalysis()}
                className="relative z-30 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xs font-medium px-6 py-3 rounded-xl shadow-md shadow-blue-600/20 transition-all inline-flex items-center gap-2 active:scale-95"
              >
                <FileText size={16} />
                <span>Analyze ({fileName})</span>
              </button>
            </motion.div>
          )}

          {status === "analyzing" && (
            <div className="py-12 px-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4 animate-spin">
                <RefreshCw size={28} />
              </div>

              <h3 className="text-xl font-bold text-[#09090b] dark:text-[#f4f4f5]">
                Analyzing {fileName}...
              </h3>
              <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] font-mono mt-1 mb-6">
                {stepMessage} ({progress}%)
              </p>

              <div className="w-full max-w-md mx-auto bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] h-3 rounded-full overflow-hidden p-0.5">
                <div
                  className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {status === "complete" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Score Header */}
              <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl p-6 mb-8 gap-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold text-2xl shadow-md shadow-blue-600/30">
                    <Award size={32} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <FileCheck size={14} />
                      <span>ATS COMPLIANCE SCORE • {fileName}</span>
                    </span>
                    <h3 className="text-3xl font-bold text-[#09090b] dark:text-[#f4f4f5] mt-0.5">
                      {currentScore}{" "}
                      <span className="text-base font-normal text-[#71717a]">
                        / 100
                      </span>
                      {appliedBonus > 0 && (
                        <span className="ml-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 px-2 py-0.5 rounded-md">
                          +{appliedBonus} pts added
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-mono text-[#71717a] dark:text-[#a1a1aa] hover:text-[#09090b] dark:hover:text-[#f4f4f5] border border-[#e5e7eb] dark:border-[#27272a] px-3.5 py-2 rounded-xl bg-[#fafaf9] dark:bg-[#121215] transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw size={13} />
                  <span>Scan Another File</span>
                </button>
              </div>

              {/* Sub-breakdown Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-[#71717a] dark:text-[#a1a1aa]">
                      ATS Readability
                    </span>
                    <span className="text-sm font-bold font-mono text-[#09090b] dark:text-[#f4f4f5]">
                      92%
                    </span>
                  </div>
                  <div className="w-full bg-[#fafaf9] dark:bg-[#27272a] h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-[92%]" />
                  </div>
                </div>

                <div className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-[#71717a] dark:text-[#a1a1aa]">
                      Core Stack Depth
                    </span>
                    <span className="text-sm font-bold font-mono text-[#09090b] dark:text-[#f4f4f5]">
                      {optimizations[0].applied ? "98%" : "91%"}
                    </span>
                  </div>
                  <div className="w-full bg-[#fafaf9] dark:bg-[#27272a] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-300"
                      style={{ width: optimizations[0].applied ? "98%" : "91%" }}
                    />
                  </div>
                </div>

                <div className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-[#71717a] dark:text-[#a1a1aa]">
                      Quantified Impact
                    </span>
                    <span className="text-sm font-bold font-mono text-[#09090b] dark:text-[#f4f4f5]">
                      {optimizations[1].applied ? "95%" : "84%"}
                    </span>
                  </div>
                  <div className="w-full bg-[#fafaf9] dark:bg-[#27272a] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full transition-all duration-300"
                      style={{ width: optimizations[1].applied ? "95%" : "84%" }}
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Improvement Suggestions */}
              <div className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#09090b] dark:text-[#f4f4f5] flex items-center gap-2">
                      <Target size={15} className="text-blue-600 dark:text-blue-400" />
                      <span>Actionable Optimization Checklist</span>
                    </h4>
                    <p className="text-[11px] text-[#71717a] dark:text-[#a1a1aa] mt-0.5">
                      Click any item to simulate applying it to your resume and recalculate your live score.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {optimizations.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleOptimization(item.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        item.applied
                          ? "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/60"
                          : "bg-[#fafaf9] dark:bg-[#121215] border-[#e5e7eb] dark:border-[#27272a] hover:border-blue-600/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                            item.applied
                              ? "bg-emerald-600 border-emerald-600 text-white"
                              : "border-[#d1d5db] dark:border-[#3f3f46] bg-white dark:bg-[#18181b]"
                          }`}
                        >
                          {item.applied && <Check size={13} strokeWidth={3} />}
                        </div>
                        <div>
                          <p
                            className={`text-xs font-semibold ${
                              item.applied
                                ? "text-emerald-900 dark:text-emerald-300 line-through opacity-80"
                                : "text-[#09090b] dark:text-[#f4f4f5]"
                            }`}
                          >
                            {item.title}
                          </p>
                          <p className="text-[11px] text-[#71717a] dark:text-[#a1a1aa] mt-0.5">
                            {item.explanation}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0 font-mono text-[11px]">
                        <span
                          className={`px-2.5 py-1 rounded-lg font-semibold ${
                            item.applied
                              ? "bg-emerald-600 text-white"
                              : "bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400"
                          }`}
                        >
                          {item.applied ? "Applied (+ " + item.points + "pts)" : "+ " + item.points + " pts"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
