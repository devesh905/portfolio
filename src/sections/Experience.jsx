import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";

const timelineData = [
  {
    period: "2025 — Present",
    role: "Jr. Software Developer",
    organization: "Chhatrapati Shivaji Subharti Hospital",
    location: "Meerut, UP, India",
    type: "Full-Time Production Engineering",
    responsibilities: [
      "Implemented patient OPD registration portals and self-registration kiosks with automated UHID generation and barcode card printing.",
      "Engineered HIS.ScannerBridge (dedicated local C# WebSocket service) bridging physical flatbed scanners (Canon P-208II) to the web EHR for doctor prescription digitizing.",
      "Contributed to multi-store campus pharmacy stock lookup and automated patient billing calculation engines.",
      "Implemented 500Hz live ECG waveform streaming with SignalR for the Digital ICU monitoring panel.",
      "Built a custom delta-encoded compression routine achieving a 25–45x reduction in telemetry bandwidth without losing waveform resolution.",
      "Eliminated multithreaded EF Core DbContext crashes during parallel decompression using IServiceScopeFactory scope isolation.",
      "Integrated TCP/IP and HL7 parsing layers to normalize feeds from Mindray and Comen bedside hardware monitors.",
    ],
    tech: ["ASP.NET Core (.NET 8)", "C#", "EF Core 8", "SQL Server", "SignalR", "HL7", "TCP/IP", "WebSockets"],
  },
  {
    period: "2024 — 2025",
    role: "Apprentice Engineer",
    organization: "366Pi Technologies",
    location: "Ranchi, India",
    type: "Engineering Apprenticeship",
    responsibilities: [
      "Built automated regression test suites using Selenium WebDriver (C#) across core web application flows.",
      "Assisted in reviewing SQL execution plans and adding targeted indexes to reduce query latency on reporting endpoints.",
      "Collaborated with senior engineers on sprint reviews, bug reproduction, and QA validation.",
    ],
    tech: ["C#", "Selenium WebDriver", "SQL Server", "Index Optimization", "ASP.NET Core"],
  },
  {
    period: "2020 — 2024",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Chandra Shekhar Azad University of Agriculture & Technology",
    location: "Kanpur, India",
    type: "Undergraduate Degree (OGPA: 8.09 / 10.0)",
    responsibilities: [
      "Four-year undergraduate degree with strong foundation in distributed computing, concurrency, operating systems, relational database architecture, and data structures.",
    ],
    tech: ["C#", "Data Structures", "Database Management", "Operating Systems", "Networking"],
  },
];

const techStackGroups = [
  {
    domain: "Backend & Core",
    items: "C# · ASP.NET Core (.NET 8) · EF Core 8 · RESTful APIs · Python · Razor Pages",
  },
  {
    domain: "Real-Time & Telemetry",
    items: "SignalR · WebSockets · TCP/IP Sockets · HL7 Protocols · Hardware Bridges · Delta Compression",
  },
  {
    domain: "Data & Storage",
    items: "SQL Server · MySQL · Database Normalization · Index Optimization · Execution Plans",
  },
  {
    domain: "Frontend",
    items: "React · JavaScript (ES6+) · Modern CSS · Vite · Component Architecture",
  },
  {
    domain: "Testing & DevOps",
    items: "Selenium WebDriver (C#) · Docker · Git & GitHub · Postman · Swagger · Twilio API",
  },
];

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default first one expanded

  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-[#E5E5DE] bg-[#F7F7F4]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E56A0] text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Career &bull; Production History</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight leading-tight">
            Experience &amp; stack.
          </h2>
          <p className="text-base sm:text-lg text-[#4A4C46] leading-relaxed">
            Real production roles and the technical tools applied across daily engineering work.
          </p>
        </div>

        {/* Visual Career Timeline */}
        <div className="space-y-6">
          <div className="border-t border-[#E5E5DE] divide-y divide-[#E5E5DE] bg-white rounded-xl border shadow-[0_2px_15px_rgba(0,0,0,0.02)] overflow-hidden">
            {timelineData.map((item, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div key={item.period} className="p-6 sm:p-8 transition-colors">
                  <div
                    onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#1E56A0]">
                          {item.period}
                        </span>
                        <span className="text-xs text-[#787A72] font-mono hidden sm:inline">&bull;</span>
                        <span className="text-xs text-[#787A72] font-mono hidden sm:inline">{item.type}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight group-hover:text-[#1E56A0] transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-xs font-mono text-[#5A5C55]">
                        {item.organization} &bull; {item.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#1E56A0] hidden sm:inline font-semibold">
                        {isExpanded ? "Hide Details" : "View Details"}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-[#E5E5DE] bg-[#FBFBF9] flex items-center justify-center text-[#4A4C46] group-hover:border-[#1E56A0] group-hover:text-[#1E56A0] transition-colors">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Responsibility Breakdown */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-6 mt-6 border-t border-[#EFEFE8] space-y-4"
                    >
                      <ul className="space-y-2 text-xs sm:text-sm text-[#4A4C46]">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <span className="text-[#1E56A0] font-mono text-sm mt-0.5">&bull;</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono text-[#383A35] bg-[#F3F3ED] border border-[#E5E5DE] px-2.5 py-1 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Engineering Stack (Clean Typography, No Huge Grid of Badges) */}
        <div className="pt-8 space-y-6">
          <div className="border-b border-[#E5E5DE] pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#1E56A0] font-semibold block mb-1">
              Applied Tooling
            </span>
            <h3 className="text-2xl font-bold text-[#141413] tracking-tight">
              Visual Engineering Stack
            </h3>
          </div>

          <div className="border-t border-[#E5E5DE] divide-y divide-[#E5E5DE] bg-white rounded-xl border shadow-[0_2px_15px_rgba(0,0,0,0.02)] overflow-hidden">
            {techStackGroups.map((group) => (
              <div
                key={group.domain}
                className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline hover:bg-[#FBFBF9] transition-colors"
              >
                <div className="md:col-span-4 font-mono text-xs font-bold text-[#1E56A0] uppercase tracking-wider">
                  {group.domain}
                </div>
                <div className="md:col-span-8 text-xs sm:text-sm text-[#383A35] font-mono leading-relaxed">
                  {group.items}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
