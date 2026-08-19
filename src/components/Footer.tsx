import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] dark:border-[#27272a] bg-[#fafaf9] dark:bg-[#09090b] py-16 text-[#71717a] dark:text-[#a1a1aa] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Sparkles size={17} className="fill-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#09090b] dark:text-[#f4f4f5] flex items-center gap-1.5">
                NEXORA
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded-md">
                  BY ACDYON
                </span>
              </span>
            </div>
            <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] max-w-[38ch] leading-relaxed mb-4">
              Find work that moves you forward. AI-powered career discovery and matching platform designed for modern software engineers.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#09090b] dark:text-[#f4f4f5] mb-3.5">
              Platform Features
            </p>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#product" className="hover:text-[#09090b] dark:hover:text-[#f4f4f5] transition-colors">
                  Interactive Workspace
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#09090b] dark:hover:text-[#f4f4f5] transition-colors">
                  Contextual Match Radar
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#09090b] dark:hover:text-[#f4f4f5] transition-colors">
                  Salary Benchmarks
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#09090b] dark:hover:text-[#f4f4f5] transition-colors">
                  System Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#09090b] dark:text-[#f4f4f5] mb-3.5">
              Challenge Info
            </p>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="https://github.com/RitikRai07/Acdyon-Technologies-Frontend-Challenge" target="_blank" rel="noreferrer" className="hover:text-[#09090b] dark:hover:text-[#f4f4f5] transition-colors flex items-center gap-1">
                  <span>GitHub Repository</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <span className="text-[#71717a] dark:text-[#a1a1aa]">
                  Built by Ritik Rai
                </span>
              </li>
              <li>
                <span className="text-[#71717a] dark:text-[#a1a1aa]">
                  Next.js 15 & React 19 App
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e5e7eb] dark:border-[#27272a] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© 2026 NEXORA • Crafted for Acdyon Technologies Frontend Challenge</p>
          <p className="text-[#71717a]">Press ↑ ↑ ↓ ↓ ← → ← → B A for Founder Mode 🚀</p>
        </div>
      </div>
    </footer>
  );
}
