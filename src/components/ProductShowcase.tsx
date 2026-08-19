"use client";

import { useState } from "react";
import { useApp, JobItem } from "./AppContext";
import { ContainerScroll } from "./ContainerScroll";
import {
  Sparkles,
  CheckSquare,
  Bookmark,
  MapPin,
  IndianRupee,
  Building2,
  Search,
  Send,
  Filter,
  Briefcase,
} from "lucide-react";

const DEMO_JOBS: JobItem[] = [
  {
    id: "stripe-frontend",
    title: "Senior Frontend Engineer",
    company: "Stripe",
    location: "Remote (Global)",
    salary: "₹24L – ₹38L",
    skills: ["React 19", "TypeScript", "Next.js", "Tailwind CSS"],
    matchScore: 96,
    type: "Remote",
    experience: "3-5 years",
    description: "Architect core merchant dashboard interfaces and developer payment components.",
  },
  {
    id: "nexora-labs",
    title: "Lead React Architect",
    company: "Nexora Labs",
    location: "Remote",
    salary: "₹18L – ₹28L",
    skills: ["React", "Next.js 15", "TypeScript", "Node.js"],
    matchScore: 94,
    type: "Remote",
    experience: "2-4 years",
    description: "Craft high-performance AI career discovery dashboards and component libraries.",
  },
  {
    id: "vercel-ui",
    title: "UI Platform Engineer",
    company: "Vercel",
    location: "Hybrid (Bengaluru)",
    salary: "₹30L – ₹45L",
    skills: ["React", "Design Systems", "Next.js", "Performance"],
    matchScore: 92,
    type: "Hybrid",
    experience: "4+ years",
    description: "Build Next.js ecosystem tooling, framework integrations, and design primitives.",
  },
  {
    id: "swiggy-web",
    title: "Staff Web Engineer",
    company: "Swiggy",
    location: "Bengaluru",
    salary: "₹26L – ₹40L",
    skills: ["React", "TypeScript", "REST APIs", "State Management"],
    matchScore: 89,
    type: "On-site",
    experience: "3-5 years",
    description: "Scale high-concurrency food delivery checkout pipelines and consumer web apps.",
  },
];

export function ProductShowcase() {
  const { user, savedJobIds, toggleSaveJob, applications, applyToJob } = useApp();
  const [activeTab, setActiveTab] = useState("Opportunities");
  const [searchFilter, setSearchFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState<"All" | "Remote" | "Hybrid" | "On-site">("All");
  const [onlyHighMatch, setOnlyHighMatch] = useState(false);

  const filteredJobs = DEMO_JOBS.filter((j) => {
    const matchesSearch =
      j.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      j.company.toLowerCase().includes(searchFilter.toLowerCase()) ||
      j.skills.some((s) => s.toLowerCase().includes(searchFilter.toLowerCase()));

    const matchesLocation = locationFilter === "All" || j.type === locationFilter;
    const matchesHighMatch = !onlyHighMatch || j.matchScore >= 90;

    return matchesSearch && matchesLocation && matchesHighMatch;
  });

  const savedJobsList = DEMO_JOBS.filter((j) => savedJobIds.includes(j.id));

  return (
    <section id="product" className="bg-white dark:bg-[#09090b] transition-colors py-12">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-4 shadow-sm">
              <Sparkles size={14} />
              <span>LIVE WORKSPACE DEMO</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#09090b] dark:text-[#f4f4f5]">
              Your career discovery cockpit.
            </h2>
            <p className="text-base text-[#71717a] dark:text-[#a1a1aa] mt-3 max-w-[60ch] leading-relaxed mx-auto">
              Test drive the live candidate dashboard — filter verified openings, inspect ATS match breakdowns, and manage your pipeline in real time.
            </p>
          </div>
        }
      >
        {/* Inside Card Content */}
        <div className="h-full w-full bg-[#fafaf9] dark:bg-[#121215] flex flex-col">
          {/* macOS Title Bar */}
          <div className="h-11 bg-white dark:bg-[#18181b] border-b border-[#e5e7eb] dark:border-[#27272a] flex items-center justify-between px-5 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] dark:text-[#a1a1aa]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Nexora OS • Live Candidate Environment</span>
            </div>
            <div className="text-[11px] font-mono text-[#71717a] dark:text-[#a1a1aa] hidden sm:block">
              v2.4 Production
            </div>
          </div>

          {/* Grid Layout: Sidebar + Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
            {/* Sidebar (col-span-3) */}
            <div className="md:col-span-3 bg-white dark:bg-[#18181b] border-r border-[#e5e7eb] dark:border-[#27272a] p-5 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono font-bold uppercase text-[#71717a] dark:text-[#a1a1aa] mb-4 tracking-wider flex items-center gap-1.5">
                  <Briefcase size={13} />
                  <span>CANDIDATE PORTAL</span>
                </div>

                <nav className="space-y-1.5">
                  {[
                    { name: "Opportunities", icon: Sparkles, count: filteredJobs.length },
                    { name: "Applications", icon: CheckSquare, count: applications.length },
                    { name: "Saved Roles", icon: Bookmark, count: savedJobIds.length },
                  ].map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeTab === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all text-left ${
                          isActive
                            ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20"
                            : "text-[#71717a] dark:text-[#a1a1aa] hover:bg-[#fafaf9] dark:hover:bg-[#27272a] hover:text-[#09090b] dark:hover:text-[#f4f4f5]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComponent size={15} />
                          <span>{item.name}</span>
                        </div>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                            isActive
                              ? "bg-white/20 text-white font-bold"
                              : "bg-[#fafaf9] dark:bg-[#27272a] text-[#71717a] dark:text-[#a1a1aa]"
                          }`}
                        >
                          {item.count}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar User Info */}
              <div className="pt-4 border-t border-[#e5e7eb] dark:border-[#27272a] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  {user ? user.avatar : "RR"}
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-xs font-bold text-[#09090b] dark:text-[#f4f4f5] truncate">
                    {user ? user.name : "Ritik Rai"}
                  </span>
                  <span className="text-[10px] text-[#71717a] dark:text-[#a1a1aa] font-mono truncate">
                    {user ? user.role : "Senior Frontend Engineer"}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content Area (col-span-9) */}
            <div className="md:col-span-9 p-6 md:p-8 overflow-y-auto">
              {/* Tab: Applications */}
              {activeTab === "Applications" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#09090b] dark:text-[#f4f4f5]">
                        Your Active Applications ({applications.length})
                      </h3>
                      <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] mt-0.5">
                        Track progress across stages in real-time.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {applications.map((app) => (
                      <div
                        key={app.id}
                        className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-base text-[#09090b] dark:text-[#f4f4f5]">
                              {app.company}
                            </h4>
                            <span className="text-xs font-mono text-[#71717a]">• {app.role}</span>
                          </div>
                          <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] mt-1">
                            {app.note}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-mono px-3 py-1 rounded-full border ${app.badgeBg}`}>
                            {app.badgeText}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Saved Roles */}
              {activeTab === "Saved Roles" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#09090b] dark:text-[#f4f4f5]">
                        Saved Bookmarks ({savedJobsList.length})
                      </h3>
                      <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] mt-0.5">
                        Roles bookmarked for review and one-click application.
                      </p>
                    </div>
                  </div>

                  {savedJobsList.length === 0 ? (
                    <div className="py-16 text-center border border-dashed border-[#e5e7eb] dark:border-[#27272a] rounded-2xl">
                      <Bookmark size={28} className="text-[#71717a] mx-auto mb-2 opacity-50" />
                      <p className="text-xs font-mono text-[#71717a]">No bookmarks saved yet. Click bookmark on any job card.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {savedJobsList.map((job) => (
                        <div
                          key={job.id}
                          className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl p-5 shadow-sm"
                        >
                          <h4 className="font-bold text-base text-[#09090b] dark:text-[#f4f4f5]">{job.title}</h4>
                          <p className="text-xs text-[#71717a] mt-0.5">{job.company} • {job.salary}</p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                              {job.matchScore}% Match
                            </span>
                            <button
                              onClick={() => applyToJob(job)}
                              className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded-lg font-medium"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab: Opportunities (Default) */}
              {activeTab === "Opportunities" && (
                <>
                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#09090b] dark:text-[#f4f4f5] flex items-center gap-2">
                        <span>Curated Matches for Ritik</span>
                        <span className="animate-pulse text-lg">⚡</span>
                      </h3>
                      <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-0.5">
                        {filteredJobs.length} positions matched with &gt;88% technical fit.
                      </p>
                    </div>

                    {/* Search Input */}
                    <div className="relative max-w-xs w-full">
                      <Search
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717a] dark:text-[#a1a1aa]"
                      />
                      <input
                        type="text"
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        placeholder="Search title, company, skill..."
                        className="w-full bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-xl pl-9 pr-3 py-2 text-xs text-[#09090b] dark:text-[#f4f4f5] focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  {/* Filter Pills Row */}
                  <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
                    <span className="font-mono text-[11px] text-[#71717a] mr-1 flex items-center gap-1">
                      <Filter size={12} /> Filter:
                    </span>
                    {(["All", "Remote", "Hybrid", "On-site"] as const).map((loc) => (
                      <button
                        key={loc}
                        onClick={() => setLocationFilter(loc)}
                        className={`px-3 py-1 rounded-lg font-medium transition-all ${
                          locationFilter === loc
                            ? "bg-[#09090b] dark:bg-white text-white dark:text-[#09090b] shadow-xs"
                            : "bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] text-[#71717a] dark:text-[#a1a1aa] hover:border-blue-500"
                        }`}
                      >
                        {loc}
                      </button>
                    ))}

                    <button
                      onClick={() => setOnlyHighMatch(!onlyHighMatch)}
                      className={`ml-auto px-3 py-1 rounded-lg font-mono text-[11px] font-semibold transition-all flex items-center gap-1.5 border ${
                        onlyHighMatch
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-white dark:bg-[#18181b] border-[#e5e7eb] dark:border-[#27272a] text-blue-600 dark:text-blue-400 hover:border-blue-500"
                      }`}
                    >
                      <Sparkles size={12} />
                      <span>&gt;90% Match Only</span>
                    </button>
                  </div>

                  {/* Job Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredJobs.map((job) => {
                      const isSaved = savedJobIds.includes(job.id);
                      return (
                        <div
                          key={job.id}
                          className="bg-white dark:bg-[#18181b] border border-[#e5e7eb] dark:border-[#27272a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <div>
                                <h4 className="font-bold text-base text-[#09090b] dark:text-[#f4f4f5] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {job.title}
                                </h4>
                                <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] flex items-center gap-1 mt-0.5 font-medium">
                                  <Building2
                                    size={13}
                                    className="text-blue-600 dark:text-blue-400"
                                  />
                                  <span>{job.company}</span>
                                </p>
                              </div>

                              <div className="bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-600/20 dark:border-blue-500/30 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold flex items-center gap-1 flex-shrink-0">
                                <Sparkles size={11} />
                                <span>{job.matchScore}% Match</span>
                              </div>
                            </div>

                            <p className="text-xs text-[#71717a] dark:text-[#a1a1aa] line-clamp-2 mb-3">
                              {job.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 my-3">
                              {job.skills.map((s) => (
                                <span
                                  key={s}
                                  className="text-[11px] bg-[#fafaf9] dark:bg-[#27272a] text-[#09090b] dark:text-[#f4f4f5] border border-[#e5e7eb] dark:border-[#3f3f46] px-2.5 py-0.5 rounded-md font-medium"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-[#e5e7eb] dark:border-[#27272a] flex items-center justify-between text-xs font-mono">
                            <div className="flex items-center gap-2 text-[#71717a] dark:text-[#a1a1aa]">
                              <span className="flex items-center gap-0.5 text-[#09090b] dark:text-[#f4f4f5] font-semibold">
                                <IndianRupee
                                  size={12}
                                  className="text-blue-600 dark:text-blue-400"
                                />
                                {job.salary}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <MapPin size={12} />
                                {job.location}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => applyToJob(job)}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-sm active:scale-95"
                              >
                                <Send size={11} />
                                <span>Apply</span>
                              </button>
                              <button
                                onClick={() => toggleSaveJob(job.id)}
                                aria-label="Save job"
                                className={`p-1.5 rounded-lg border transition-colors ${
                                  isSaved
                                    ? "bg-blue-50 dark:bg-blue-950/50 border-blue-200 text-blue-600"
                                    : "bg-white dark:bg-[#18181b] border-[#e5e7eb] dark:border-[#27272a] text-[#71717a]"
                                }`}
                              >
                                <Bookmark
                                  size={14}
                                  className={isSaved ? "fill-current" : ""}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
