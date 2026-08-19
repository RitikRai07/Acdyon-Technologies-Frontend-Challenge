"use client";

import React, { createContext, useContext, useState } from "react";

export interface JobItem {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  skills: string[];
  matchScore: number;
  type: string;
  experience: string;
  description: string;
}

export interface ApplicationItem {
  id: string;
  company: string;
  role: string;
  status: "Applied" | "Interview" | "Assessment" | "Offer";
  badgeBg: string;
  badgeText: string;
  date: string;
  note: string;
}

interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "info" | "warning";
}

interface AppContextType {
  // Auth
  user: { name: string; email: string; role: string; avatar: string } | null;
  isSignInOpen: boolean;
  isSignUpOpen: boolean;
  openSignIn: () => void;
  openSignUp: () => void;
  closeAuth: () => void;
  login: (name: string, email: string) => void;
  logout: () => void;

  // Saved Jobs
  savedJobIds: string[];
  toggleSaveJob: (jobId: string) => void;

  // Applications
  applications: ApplicationItem[];
  applyToJob: (job: JobItem) => void;
  updateAppStatus: (
    id: string,
    status: "Applied" | "Interview" | "Assessment" | "Offer"
  ) => void;

  // Profile Skills for Dynamic Matching
  activeSkills: string[];
  toggleSkill: (skill: string) => void;

  // Toast
  toasts: ToastMessage[];
  addToast: (message: string, type?: "success" | "info" | "warning") => void;
  removeToast: (id: string) => void;
}

const DEFAULT_APPLICATIONS: ApplicationItem[] = [
  {
    id: "app-ms",
    company: "Microsoft",
    role: "Software Engineer",
    status: "Applied",
    badgeBg:
      "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-400",
    badgeText: "Applied",
    date: "1 day ago",
    note: "Application submitted via Nexora One-Click",
  },
  {
    id: "app-goog",
    company: "Google",
    role: "Frontend Engineer",
    status: "Interview",
    badgeBg:
      "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-400",
    badgeText: "Round 2 Interview",
    date: "3 days ago",
    note: "Technical System Architecture round scheduled",
  },
  {
    id: "app-amzn",
    company: "Amazon",
    role: "SDE I",
    status: "Assessment",
    badgeBg:
      "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-400",
    badgeText: "Coding Test Due",
    date: "4 days ago",
    note: "90-minute online coding challenge pending",
  },
  {
    id: "app-nexora",
    company: "Nexora Labs",
    role: "React Developer",
    status: "Offer",
    badgeBg:
      "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400",
    badgeText: "Offer Received",
    date: "1 week ago",
    note: "Official offer package under review",
  },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Auth state
  const [user, setUser] = useState<{
    name: string;
    email: string;
    role: string;
    avatar: string;
  } | null>({
    name: "Ritik Rai",
    email: "ritik@acdyon.com",
    role: "Senior Frontend Engineer",
    avatar: "RR",
  });
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // Saved Jobs state
  const [savedJobIds, setSavedJobIds] = useState<string[]>(["nexora-labs"]);

  // Applications state
  const [applications, setApplications] = useState<ApplicationItem[]>(
    DEFAULT_APPLICATIONS
  );

  // Profile Skills state
  const [activeSkills, setActiveSkills] = useState<string[]>([
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "REST APIs",
  ]);

  // Toast state
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (
    message: string,
    type: "success" | "info" | "warning" = "success"
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const openSignIn = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
  };

  const openSignUp = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const closeAuth = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
  };

  const login = (name: string, email: string) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    setUser({
      name,
      email,
      role: "Frontend Engineer",
      avatar: initials || "NX",
    });
    closeAuth();
    addToast(`Welcome back, ${name}! Signed in successfully.`);
  };

  const logout = () => {
    setUser(null);
    addToast("Signed out successfully.", "info");
  };

  const toggleSaveJob = (jobId: string) => {
    if (savedJobIds.includes(jobId)) {
      setSavedJobIds((prev) => prev.filter((id) => id !== jobId));
      addToast("Removed job from saved items.", "info");
    } else {
      setSavedJobIds((prev) => [...prev, jobId]);
      addToast("Saved job to your Nexora bookmark list!");
    }
  };

  const applyToJob = (job: JobItem) => {
    // Check if already applied
    const existing = applications.find((a) => a.company === job.company);
    if (existing) {
      addToast(
        `Already applied to ${job.company} (${existing.status}).`,
        "warning"
      );
      return;
    }

    const newApp: ApplicationItem = {
      id: `app-${Date.now()}`,
      company: job.company,
      role: job.title,
      status: "Applied",
      badgeBg:
        "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-400",
      badgeText: "Applied",
      date: "Just now",
      note: `Applied with Nexora Profile (${job.matchScore}% Match)`,
    };

    setApplications((prev) => [newApp, ...prev]);
    addToast(
      `Applied to ${job.title} at ${job.company}! Added to Application Tracker.`
    );
  };

  const updateAppStatus = (
    id: string,
    status: "Applied" | "Interview" | "Assessment" | "Offer"
  ) => {
    let badgeBg = "bg-blue-50 dark:bg-blue-950/40 text-blue-700";
    let badgeText: string = status;

    if (status === "Interview") {
      badgeBg = "bg-amber-50 dark:bg-amber-950/40 text-amber-700";
      badgeText = "Interview Scheduled";
    } else if (status === "Assessment") {
      badgeBg = "bg-purple-50 dark:bg-purple-950/40 text-purple-700";
      badgeText = "Assessment Pending";
    } else if (status === "Offer") {
      badgeBg = "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700";
      badgeText = "Offer Received 🎉";
    }

    setApplications((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status, badgeBg, badgeText } : a
      )
    );
    addToast(`Updated status to ${status}.`);
  };

  const toggleSkill = (skill: string) => {
    if (activeSkills.includes(skill)) {
      setActiveSkills((prev) => prev.filter((s) => s !== skill));
      addToast(`Removed ${skill} from profile skills.`, "info");
    } else {
      setActiveSkills((prev) => [...prev, skill]);
      addToast(`Added ${skill}! Recalibrated AI job match scores.`);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        isSignInOpen,
        isSignUpOpen,
        openSignIn,
        openSignUp,
        closeAuth,
        login,
        logout,
        savedJobIds,
        toggleSaveJob,
        applications,
        applyToJob,
        updateAppStatus,
        activeSkills,
        toggleSkill,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
