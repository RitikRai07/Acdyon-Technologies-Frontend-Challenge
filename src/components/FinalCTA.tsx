import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#09090b] text-white py-24 md:py-32 relative overflow-hidden border-t border-neutral-800">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-mono font-medium mb-6 border border-white/15 backdrop-blur-md shadow-sm">
          <Sparkles size={14} className="text-blue-400" />
          <span>JOIN THE NEXT GENERATION OF CAREER DISCOVERY</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter max-w-[24ch] mx-auto leading-[1.04]">
          Your next high-growth engineering role <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">starts here.</span>
        </h2>

        <p className="text-base md:text-lg text-white/70 mt-5 max-w-[52ch] mx-auto leading-relaxed">
          Spend less time searching through spam. Spend more time interviewing with engineering teams that value your craft.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#product"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 active:scale-[0.98] transition-all text-base inline-flex items-center gap-2 group"
          >
            <span>Start Exploring Matches</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium px-8 py-4 rounded-xl active:scale-[0.98] transition-all text-base inline-flex items-center gap-2 backdrop-blur-sm"
          >
            <span>View Match Radar</span>
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs font-mono text-white/50">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-blue-400" /> 100% Free for candidates
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Zap size={14} className="text-amber-400" /> Instant matching
          </span>
        </div>
      </div>
    </section>
  );
}
