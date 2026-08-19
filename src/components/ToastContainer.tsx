"use client";

import { useApp } from "./AppContext";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Info, AlertTriangle, X } from "lucide-react";

export function ToastContainer() {
  const { toasts, removeToast } = useApp();

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="pointer-events-auto bg-[#09090b] dark:bg-[#18181b] border border-blue-500/30 text-white rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-3 text-xs font-mono"
          >
            <div className="flex items-center gap-2.5">
              {toast.type === "success" && (
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
              )}
              {toast.type === "info" && (
                <Info size={16} className="text-blue-400 flex-shrink-0" />
              )}
              {toast.type === "warning" && (
                <AlertTriangle size={16} className="text-amber-400 flex-shrink-0" />
              )}
              <span className="text-[#f4f4f5] leading-snug">{toast.message}</span>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#a1a1aa] hover:text-white p-0.5 rounded-lg transition-colors"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
