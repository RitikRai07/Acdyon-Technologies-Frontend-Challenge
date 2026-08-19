import { ShieldCheck, Cpu, Zap, Lock } from "lucide-react";

export function TrustStrip() {
  return (
    <section className="border-y border-[#e5e7eb] bg-[#fafaf9] py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] shadow-sm">
            <Cpu size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0a0a0a]">Acdyon Match Engine</p>
            <p className="text-xs text-[#6b7280]">Deep contextual skill scoring</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] shadow-sm">
            <Zap size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0a0a0a]">98.4% Match Accuracy</p>
            <p className="text-xs text-[#6b7280]">Validated against actual hires</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] shadow-sm">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0a0a0a]">14,000+ Verified Jobs</p>
            <p className="text-xs text-[#6b7280]">No ghost posts or spam</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] shadow-sm">
            <Lock size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0a0a0a]">Private & Direct</p>
            <p className="text-xs text-[#6b7280]">Zero recruiter cold emails</p>
          </div>
        </div>
      </div>
    </section>
  );
}
