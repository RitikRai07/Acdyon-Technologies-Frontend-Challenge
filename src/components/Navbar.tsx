"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { useApp } from "./AppContext";
import {
  Sun,
  Moon,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  LogOut,
  Search,
  CheckCircle2,
} from "lucide-react";

export function Navbar({ onLogoClick }: { onLogoClick?: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const { user, openSignIn, openSignUp, logout } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

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
          ? "bg-[#fafaf9]/85 dark:bg-[#09090b]/85 backdrop-blur-xl border-b border-[#e5e7eb] dark:border-[#27272a] shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={onLogoClick}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500 text-white flex items-center justify-center font-bold shadow-md shadow-blue-600/25 group-hover:scale-105 transition-transform">
            <Sparkles size={19} className="fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-[#09090b] dark:text-[#f4f4f5] flex items-center gap-1.5">
              NEXORA
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded-md">
                PRO
              </span>
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/70 dark:bg-[#18181b]/70 border border-[#e5e7eb] dark:border-[#27272a] rounded-full px-4 py-1.5 shadow-sm backdrop-blur-md text-xs font-medium text-[#71717a] dark:text-[#a1a1aa]">
          <a
            href="#product"
            className="px-3 py-1.5 rounded-full hover:text-[#09090b] dark:hover:text-[#f4f4f5] hover:bg-[#fafaf9] dark:hover:bg-[#27272a] transition-all"
          >
            Workspace
          </a>
          <a
            href="#features"
            className="px-3 py-1.5 rounded-full hover:text-[#09090b] dark:hover:text-[#f4f4f5] hover:bg-[#fafaf9] dark:hover:bg-[#27272a] transition-all"
          >
            Match Radar
          </a>
          <a
            href="#how-it-works"
            className="px-3 py-1.5 rounded-full hover:text-[#09090b] dark:hover:text-[#f4f4f5] hover:bg-[#fafaf9] dark:hover:bg-[#27272a] transition-all"
          >
            Architecture
          </a>
          <a
            href="#insights"
            className="px-3 py-1.5 rounded-full hover:text-[#09090b] dark:hover:text-[#f4f4f5] hover:bg-[#fafaf9] dark:hover:bg-[#27272a] transition-all"
          >
            Salary Benchmarks
          </a>
        </nav>

        {/* Right Side: Theme Toggle & Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Search Shortcut Pill */}
          <a
            href="#product"
            className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-[#71717a] dark:text-[#a1a1aa] bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] px-3 py-1.5 rounded-xl shadow-sm hover:border-blue-500 transition-colors"
          >
            <Search size={13} />
            <span>Search roles</span>
            <kbd className="bg-[#fafaf9] dark:bg-[#27272a] border border-[#e5e7eb] dark:border-[#3f3f46] px-1.5 py-0.5 rounded text-[9px] font-semibold">
              ⌘K
            </kbd>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-xl bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] text-[#71717a] dark:text-[#a1a1aa] hover:text-[#09090b] dark:hover:text-[#f4f4f5] flex items-center justify-center transition-all shadow-sm active:scale-95"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          {/* User Auth Controls */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] pl-2 pr-3 py-1.5 rounded-xl shadow-sm hover:border-blue-600 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-[10px] flex items-center justify-center shadow-sm">
                  {user.avatar}
                </div>
                <div className="text-left hidden sm:block">
                  <span className="text-xs font-bold text-[#09090b] dark:text-[#f4f4f5] block leading-tight">
                    {user.name}
                  </span>
                </div>
              </button>

              {/* User Dropdown */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl shadow-xl py-2 z-50 text-xs">
                  <div className="px-3.5 py-2.5 border-b border-[#e5e7eb] dark:border-[#27272a]">
                    <p className="font-bold text-[#09090b] dark:text-[#f4f4f5]">{user.name}</p>
                    <p className="text-[10px] text-[#71717a] font-mono truncate mt-0.5">{user.email}</p>
                    <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 px-2 py-0.5 rounded-md font-semibold">
                      <CheckCircle2 size={10} />
                      <span>Verified Profile</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      logout();
                    }}
                    className="w-full text-left px-3.5 py-2 text-red-600 dark:text-red-400 hover:bg-[#fafaf9] dark:hover:bg-[#27272a] flex items-center gap-2 transition-colors font-medium mt-1"
                  >
                    <LogOut size={14} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={openSignIn}
                className="hidden sm:inline-flex text-xs font-mono font-medium text-[#71717a] dark:text-[#a1a1aa] hover:text-[#09090b] dark:hover:text-[#f4f4f5] px-3 py-2 transition-colors"
              >
                Log in
              </button>
              <button
                onClick={openSignUp}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xs md:text-sm font-medium px-4 py-2 rounded-xl shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center gap-1.5"
              >
                <span>Get Started</span>
                <ArrowRight size={15} />
              </button>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#71717a] dark:text-[#a1a1aa] hover:text-[#09090b] dark:hover:text-[#f4f4f5]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#18181b] border-b border-[#e5e7eb] dark:border-[#27272a] px-6 py-4 space-y-3 shadow-lg">
          <a
            href="#product"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#71717a] dark:text-[#a1a1aa] py-1"
          >
            Workspace
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#71717a] dark:text-[#a1a1aa] py-1"
          >
            Match Radar
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#71717a] dark:text-[#a1a1aa] py-1"
          >
            Architecture
          </a>
          <a
            href="#insights"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#71717a] dark:text-[#a1a1aa] py-1"
          >
            Salary Benchmarks
          </a>
        </div>
      )}
    </header>
  );
}
