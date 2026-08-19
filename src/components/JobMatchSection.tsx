"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  MapPin,
  Sparkles,
  CheckCircle2,
  XCircle,
  Building2,
  X,
  IndianRupee,
  ExternalLink,
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  logoColor: string;
  matchScore: number;
  salary: string;
  location: string;
  type: string;
  experience: string;
  matchedSkills: string[];
  missingSkills: string[];
  description: string;
  posted: string;
}

const JOBS_DATA: Job[] = [
  {
    id: "google-react",
    title: "React Developer",
    company: "Google",
    logoColor: "bg-blue-600",
    matchScore: 94,
    salary: "₹12L - ₹20L",
    location: "Remote (India)",
    type: "Remote",
    experience: "0-2 years",
    matchedSkills: ["React", "JavaScript", "Next.js", "Node.js", "Tailwind CSS"],
    missingSkills: ["AWS", "Docker"],
    description:
      "Join Google's Core Web UI team to build next-generation scalable React applications for millions of global users.",
    posted: "2 hours ago",
  },
  {
    id: "microsoft-[#0078d4]",
    title: "Senior Frontend Engineer",
    company: "Microsoft",
    logoColor: "bg-[#0078d4]",
    matchScore: 91,
    salary: "₹18L - ₹28L",
    location: "Bengaluru, Karnataka",
    type: "Hybrid",
    experience: "3-5 years",
    matchedSkills: ["React", "TypeScript", "Next.js", "State Management", "CSS Grid"],
    missingSkills: ["Azure Pipelines", "GraphQL"],
    description:
      "Design accessible, high-performance web components for Azure Cloud Portal & Microsoft Developer Tools.",
    posted: "4 hours ago",
  },
  {
    id: "swiggy-ui",
    title: "Frontend UI Specialist",
    company: "Swiggy",
    logoColor: "bg-orange-500",
    matchScore: 88,
    salary: "₹14L - ₹22L",
    location: "Remote (India)",
    type: "Remote",
    experience: "0-2 years",
    matchedSkills: ["React", "JavaScript", "Framer Motion", "Tailwind CSS"],
    missingSkills: ["React Native", "Redux Toolkit"],
    description:
      "Craft ultra-responsive consumer web interfaces and design system motion primitives for Swiggy Instamart.",
    posted: "1 day ago",
  },
  {
    id: "razorpay-fullstack",
    title: "Fullstack Web Engineer",
    company: "Razorpay",
    logoColor: "bg-blue-700",
    matchScore: 85,
    salary: "₹16L - ₹25L",
    location: "Bengaluru, Karnataka",
    type: "On-site",
    experience: "0-2 years",
    matchedSkills: ["React", "Node.js", "TypeScript", "REST APIs"],
    missingSkills: ["Go", "PostgreSQL Optimization"],
    description:
      "Build seamless payment checkout flows and merchant telemetry analytics dashboards.",
    posted: "2 days ago",
  },
];

export function JobMatchSection() {
  const [searchQuery, setSearchQuery] = useState("Frontend Developer");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedExp, setSelectedExp] = useState("All");
  const [activeModalJob, setActiveModalJob] = useState<Job | null>(null);

  // Filter Jobs
  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.matchedSkills.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesLocation =
      selectedLocation === "All" ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());

    const matchesType =
      selectedType === "All" ||
      job.type.toLowerCase() === selectedType.toLowerCase();

    const matchesExp =
      selectedExp === "All" || job.experience === selectedExp;

    return matchesSearch && matchesLocation && matchesType && matchesExp;
  });

  return (
    <section id="job-match" className="py-24 md:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-xs font-mono font-medium mb-3">
            <Sparkles size={13} />
            <span>AI MATCHING & FILTERS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#0a0a0a]">
            Know your fit before you apply.
          </h2>
          <p className="text-base text-[#6b7280] mt-3 max-w-[60ch] leading-relaxed">
            Acdyon AI analyzes job descriptions in real-time and scores your match
            percentage based on verified skills and experience.
          </p>
        </div>

        {/* Polished Search & Filters Bar */}
        <div className="bg-[#fafaf9] border border-[#e5e7eb] rounded-2xl p-4 md:p-6 shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <label className="text-[11px] font-mono font-medium uppercase text-[#6b7280] mb-1 block">
                Search Jobs
              </label>
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b7280]"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Job title, skill, or company..."
                  className="w-full bg-white border border-[#e5e7eb] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="md:col-span-3">
              <label className="text-[11px] font-mono font-medium uppercase text-[#6b7280] mb-1 block">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-white border border-[#e5e7eb] rounded-xl px-3 py-2.5 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#2563eb] transition-all"
              >
                <option value="All">All Locations</option>
                <option value="India">India</option>
                <option value="Remote">Remote</option>
                <option value="Bengaluru">Bengaluru</option>
              </select>
            </div>

            {/* Type Filter */}
            <div className="md:col-span-2">
              <label className="text-[11px] font-mono font-medium uppercase text-[#6b7280] mb-1 block">
                Work Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-white border border-[#e5e7eb] rounded-xl px-3 py-2.5 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#2563eb] transition-all"
              >
                <option value="All">All Types</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

            {/* Experience Filter */}
            <div className="md:col-span-2">
              <label className="text-[11px] font-mono font-medium uppercase text-[#6b7280] mb-1 block">
                Experience
              </label>
              <select
                value={selectedExp}
                onChange={(e) => setSelectedExp(e.target.value)}
                className="w-full bg-white border border-[#e5e7eb] rounded-xl px-3 py-2.5 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#2563eb] transition-all"
              >
                <option value="All">Any Experience</option>
                <option value="0-2 years">0-2 years</option>
                <option value="3-5 years">3-5 years</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-[#e5e7eb] hover:border-[#2563eb]/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Company Logo & Match Score */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl ${job.logoColor} text-white flex items-center justify-center font-bold text-lg shadow-sm`}
                    >
                      {job.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#0a0a0a] group-hover:text-[#2563eb] transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-xs text-[#6b7280] font-medium flex items-center gap-1.5">
                        <Building2 size={13} className="text-[#2563eb]" />
                        <span>{job.company}</span>
                        <span>•</span>
                        <span>{job.posted}</span>
                      </p>
                    </div>
                  </div>

                  {/* AI Match Badge */}
                  <div className="bg-[#2563eb]/10 text-[#2563eb] border border-[#2563eb]/20 px-3 py-1 rounded-full font-mono text-xs font-bold flex items-center gap-1">
                    <Sparkles size={12} />
                    <span>{job.matchScore}% MATCH</span>
                  </div>
                </div>

                <p className="text-xs text-[#6b7280] leading-relaxed mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {job.matchedSkills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-md font-medium flex items-center gap-1"
                    >
                      {skill} ✓
                    </span>
                  ))}
                  {job.matchedSkills.length > 3 && (
                    <span className="text-xs font-mono text-[#6b7280]">
                      +{job.matchedSkills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Footer Details & Modal Trigger */}
              <div className="pt-4 border-t border-[#e5e7eb] flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs font-mono text-[#6b7280]">
                  <span className="flex items-center gap-1 text-[#0a0a0a] font-semibold">
                    <IndianRupee size={12} className="text-[#2563eb]" />
                    {job.salary}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {job.type}
                  </span>
                </div>

                <button
                  onClick={() => setActiveModalJob(job)}
                  className="bg-[#fafaf9] hover:bg-[#2563eb] text-[#0a0a0a] hover:text-white border border-[#e5e7eb] hover:border-[#2563eb] text-xs font-medium px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 active:scale-[0.98]"
                >
                  <span>Why you&apos;re a match</span>
                  <ExternalLink size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-[#fafaf9] rounded-2xl border border-[#e5e7eb]">
            <p className="text-base text-[#6b7280] font-medium">
              No jobs matching your exact filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLocation("All");
                setSelectedType("All");
                setSelectedExp("All");
              }}
              className="mt-3 text-xs font-mono text-[#2563eb] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* "Why You're a Match" Interactive Modal */}
      <AnimatePresence>
        {activeModalJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white border border-[#e5e7eb] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalJob(null)}
                className="absolute top-4 right-4 text-[#6b7280] hover:text-[#0a0a0a] p-1 rounded-lg hover:bg-[#fafaf9] transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${activeModalJob.logoColor} text-white flex items-center justify-center font-bold text-base shadow-sm`}
                >
                  {activeModalJob.company.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#0a0a0a]">
                    {activeModalJob.title}
                  </h3>
                  <p className="text-xs text-[#6b7280]">
                    {activeModalJob.company} — {activeModalJob.location}
                  </p>
                </div>
              </div>

              {/* Match Banner */}
              <div className="bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-xl p-4 mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-[#2563eb] font-semibold">
                    ACDYON MATCH SCORE
                  </p>
                  <p className="text-2xl font-bold text-[#0a0a0a] mt-0.5">
                    {activeModalJob.matchScore}% Compatibility
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-mono font-bold text-sm shadow-md shadow-[#2563eb]/30">
                  {activeModalJob.matchScore}%
                </div>
              </div>

              {/* Skills Analysis */}
              <div className="space-y-4 mb-6">
                {/* Matched Skills */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#6b7280] font-semibold mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>Matched Skills ({activeModalJob.matchedSkills.length})</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalJob.matchedSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg font-medium flex items-center gap-1"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Missing Skills */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#6b7280] font-semibold mb-2 flex items-center gap-1.5">
                    <XCircle size={14} className="text-amber-600" />
                    <span>Missing Skills ({activeModalJob.missingSkills.length})</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalJob.missingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-lg font-medium flex items-center gap-1"
                      >
                        ○ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Recommendation Tip */}
              <div className="bg-[#fafaf9] border border-[#e5e7eb] rounded-xl p-4 text-xs text-[#6b7280] leading-relaxed mb-6">
                <span className="font-semibold text-[#0a0a0a]">💡 Acdyon Recommendation:</span>{" "}
                Adding <span className="font-mono text-[#2563eb]">{activeModalJob.missingSkills[0]}</span> to your project section will increase your match score to 98% for this role.
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    alert(`Application submitted to ${activeModalJob.company} via JobPilot!`);
                    setActiveModalJob(null);
                  }}
                  className="flex-1 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium py-2.5 rounded-xl text-sm transition-all shadow-sm active:scale-[0.98]"
                >
                  Apply Now with JobPilot
                </button>
                <button
                  onClick={() => setActiveModalJob(null)}
                  className="px-4 py-2.5 border border-[#e5e7eb] text-sm text-[#6b7280] hover:text-[#0a0a0a] rounded-xl font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
