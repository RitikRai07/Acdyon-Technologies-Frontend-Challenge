"use client";

import { useEffect, useState } from "react";
import { Sparkle, Magnet, FileText, CheckCircle2 } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafaf9]/90 backdrop-blur-md border-b border-[#e5e7eb] shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#2563eb] text-white flex items-center justify-center font-bold shadow-sm shadow-[#2563eb]/20">
            <Sparkle size={20} className="fill-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg tracking-tight text-[#0a0a0a]">
                JobPilot
              </span>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#2563eb]/10 text-[#2563eb] border border-[#2563eb]/20">
                AI MATCH
              </span>
            </div>
            <span className="text-[10px] text-[#6b7280] font-mono tracking-wider">
              BY ACDYON TECHNOLOGIES
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#6b7280]">
          <a
            href="#hero"
            className="hover:text-[#0a0a0a] transition-colors flex items-center gap-1.5"
          >
            Product
          </a>
          <a
            href="#job-match"
            className="hover:text-[#0a0a0a] transition-colors flex items-center gap-1.5"
          >
            <Magnet size={15} />
            AI Match
          </a>
          <a
            href="#resume-analyzer"
            className="hover:text-[#0a0a0a] transition-colors flex items-center gap-1.5"
          >
            <FileText size={15} />
            Resume Analyzer
          </a>
          <a
            href="#tracker"
            className="hover:text-[#0a0a0a] transition-colors flex items-center gap-1.5"
          >
            <CheckCircle2 size={15} />
            Tracker
          </a>
          <a
            href="#insights"
            className="hover:text-[#0a0a0a] transition-colors"
          >
            Insights
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#job-match"
            className="hidden sm:inline-flex text-xs font-mono font-medium text-[#6b7280] hover:text-[#0a0a0a] px-3 py-2"
          >
            SIGN IN
          </a>
          <a
            href="#job-match"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm shadow-[#2563eb]/20 active:scale-[0.98] transition-all flex items-center gap-2"
          >
            Find Your Match
          </a>
        </div>
      </div>
    </header>
  );
}
