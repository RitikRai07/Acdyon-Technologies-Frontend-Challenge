import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#2563eb]/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-medium mb-6 border border-white/15">
          <Sparkles size={13} className="text-[#2563eb]" />
          <span>JOIN 14,000+ DEVELOPERS ON ACDYON JOBPILOT</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter max-w-[22ch] mx-auto leading-[1.02]">
          Ready to find the job <span className="text-[#2563eb]">that fits you?</span>
        </h2>

        <p className="text-base text-white/70 mt-5 max-w-[45ch] mx-auto leading-relaxed">
          Create your free JobPilot profile in 2 minutes. Get instant AI skill match scores for top tech opportunities.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#job-match"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-[#2563eb]/30 active:scale-[0.98] transition-all text-base inline-flex items-center gap-2"
          >
            <span>Start Matching Jobs Now</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <p className="text-xs text-white/50 mt-4 font-mono">
          Free for candidates • No credit card required
        </p>
      </div>
    </section>
  );
}
