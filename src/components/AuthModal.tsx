"use client";

import { useState } from "react";
import { useApp } from "./AppContext";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, Mail, Lock, User } from "lucide-react";

export function AuthModal() {
  const { isSignInOpen, isSignUpOpen, closeAuth, login, openSignIn, openSignUp } =
    useApp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isOpen = isSignInOpen || isSignUpOpen;
  const isSignUp = isSignUpOpen;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const displayName = name || email.split("@")[0];
    login(displayName, email);
  };

  const handleOAuthSimulate = (provider: string) => {
    login("Ritik Rai", `ritik@${provider.toLowerCase()}.com`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl relative text-[#09090b] dark:text-[#f4f4f5]"
          >
            {/* Close Button */}
            <button
              onClick={closeAuth}
              className="absolute top-5 right-5 text-[#71717a] hover:text-[#09090b] dark:hover:text-[#f4f4f5] p-1.5 rounded-xl hover:bg-[#fafaf9] dark:hover:bg-[#27272a] transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header Logo & Title */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-600/20">
                <Sparkles size={18} className="fill-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">NEXORA</span>
            </div>

            {/* Modal Title */}
            <h3 className="text-2xl font-bold tracking-tight mb-1">
              {isSignUp ? "Create your Nexora account" : "Welcome back to Nexora"}
            </h3>
            <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] mb-6">
              {isSignUp
                ? "Start discovering AI-matched career opportunities today."
                : "Sign in to access your saved jobs & application pipeline."}
            </p>

            {/* OAuth Buttons */}
            <div className="space-y-2.5 mb-6">
              <button
                type="button"
                onClick={() => handleOAuthSimulate("github")}
                className="w-full bg-[#fafaf9] dark:bg-[#121215] hover:bg-[#e5e7eb] dark:hover:bg-[#27272a] border border-[#e5e7eb] dark:border-[#27272a] text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Continue with GitHub</span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-[#e5e7eb] dark:border-[#27272a] flex-1" />
              <span className="text-[10px] font-mono text-[#71717a] uppercase">OR EMAIL</span>
              <div className="h-px bg-[#e5e7eb] dark:border-[#27272a] flex-1" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="text-[11px] font-mono font-semibold uppercase text-[#71717a] dark:text-[#a1a1aa] mb-1.5 block">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717a]" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ritik Rai"
                      className="w-full bg-[#fafaf9] dark:bg-[#121215] border border-[#e5e7eb] dark:border-[#27272a] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#09090b] dark:text-[#f4f4f5] focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-[11px] font-mono font-semibold uppercase text-[#71717a] dark:text-[#a1a1aa] mb-1.5 block">
                  Work Email
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717a]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ritik@company.com"
                    className="w-full bg-[#fafaf9] dark:bg-[#121215] border border-[#e5e7eb] dark:border-[#27272a] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#09090b] dark:text-[#f4f4f5] focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono font-semibold uppercase text-[#71717a] dark:text-[#a1a1aa] mb-1.5 block">
                  Password
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717a]" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-[#fafaf9] dark:bg-[#121215] border border-[#e5e7eb] dark:border-[#27272a] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#09090b] dark:text-[#f4f4f5] focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 rounded-xl text-xs transition-all shadow-md shadow-blue-600/20 active:scale-[0.98] mt-2"
              >
                {isSignUp ? "Create Account & Start Matching" : "Sign In to Nexora"}
              </button>
            </form>

            {/* Switch Mode Footer */}
            <div className="mt-6 text-center text-xs text-[#71717a] dark:text-[#a1a1aa]">
              {isSignUp ? (
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={openSignIn}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={openSignUp}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    Get Started Free
                  </button>
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
