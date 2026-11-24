import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ChevronDown, ChevronUp, Layers, CheckCircle2 } from "lucide-react";

const timelineData = [
  {
    period: "Aug 2025 — Present",
    role: "Jr. Software Developer (Backend / .NET)",
    organization: "Chhatrapati Shivaji Subharti Hospital",
    location: "Meerut, UP, India",
    type: "Full-Time Production Engineering",
    responsibilities: [
      "Architected and developed modular ASP.NET Core Web APIs and Microservices to ingest, parse, and process high-frequency real-time patient telemetry data over TCP/IP and HL7 protocol.",
      "Enforced SOLID principles, Clean Architecture, and design patterns (Repository Pattern, Dependency Injection) with custom Global Exception Handling Middleware.",
      "Designed secure RESTful APIs with JWT Authentication & Role-Based Access Control (RBAC) (Super Admin / Admin / Doctor / Staff).",
      "Engineered low-latency live streaming with SignalR and HTML5 Canvas, broadcasting real-time multi-lead ECG waveforms directly from Comen patient monitors at 500Hz.",
      "Optimized SQL Server storage and query performance using delta encoding and GZip compression, reducing database footprint by 45% and accelerating data retrieval.",
      "Built background services (IHostedService) to automate 7-day data purging and UHID normalization, keeping data clean and storage under control.",
      "Integrated AI / LLM APIs (Groq LLaMA 3.3, Whisper) into a bilingual hospital voice assistant on Asterisk PBX.",
    ],
    tech: ["ASP.NET Core (.NET 8)", "C#", "EF Core 8", "SQL Server (T-SQL)", "SignalR", "HL7", "TCP/IP Sockets", "WebSockets"],
  },
  {
    period: "Oct 2024 — Jan 2025",
    role: "Apprentice Engineer (Backend & Automation)",
    organization: "366Pi Technologies",
    location: "Ranchi, India",
    type: "Internship & Production Automation",
    responsibilities: [
      "Developed and maintained automated testing suites for RESTful APIs and web applications using C# (Selenium) and Postman.",
      "Performed functional, regression, and data-driven testing; executed SQL query optimization and indexing checks to validate data pipeline integrity.",
      "Collaborated with senior engineers on sprint reviews, bug triage, and continuous integration validations.",
    ],
    tech: ["C#", "Selenium WebDriver", "Postman", "SQL Server", "Index Optimization", "REST APIs"],
  },
  {
    period: "2024 — Present",
    role: "AI Model Trainer & Multimodal Data Specialist",
    organization: "Independent Technical Projects & AI Benchmarking",
    location: "Remote / NCR, India",
    type: "Generalist AI Specialist",
    responsibilities: [
      "Annotated complex multimodal datasets with bounding boxes, polygon semantic segmentation, keypoints, and video temporal action tags.",
      "Conducted RLHF preference ranking and SFT prompt-response curation across C#, .NET, Python, and clinical workflows.",
      "Audited frontier LLM reasoning chains to identify and eliminate algorithmic hallucinations and race conditions.",
      "Maintained a 99.8% Inter-Annotator Agreement (IAA) score adhering to strict rubrics calibration.",
    ],
    tech: ["Image & Video Annotation", "Polygon Segmentation", "RLHF", "SFT Curation", "Prompt Engineering", "Hallucination Audits"],
  },
  {
    period: "June 2020 — July 2024",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Chandra Shekhar Azad University of Agriculture & Technology",
    location: "Kanpur, India",
    type: "Graduation (OGPA: 8.09 / 10.0)",
    responsibilities: [
      "Rigorous four-year engineering curriculum focused on Object-Oriented Programming (OOP), Data Structures & Algorithms, Relational Database Management Systems, Operating Systems, Computer Networks, and Distributed Computing.",
    ],
    tech: ["C#", "OOP", "SQL", "Data Structures", "Computer Networks", "Operating Systems"],
  },
];

const techStackGroups = [
  {
    domain: "Backend & Architecture",
    items: "C# · ASP.NET Core (.NET 8) · ASP.NET Core Web API · Entity Framework Core · LINQ · SignalR · Microservices · Clean Architecture · SOLID · Repository Pattern · Dependency Injection · Global Exception Middleware",
  },
  {
    domain: "AI & Model Training",
    items: "Image & Video Annotation · Bounding Boxes · Polygon Semantic Segmentation · Temporal Video Tagging · RLHF Preference Ranking · SFT Prompt Curation · Hallucination Audits · Prompt Engineering · Groq LLaMA 3.3 · Whisper STT · OpenAI APIs · Asterisk PBX VoIP",
  },
  {
    domain: "Databases & Storage",
    items: "Microsoft SQL Server (T-SQL) · Stored Procedures · Indexing & Execution Plans · Delta Compression · GZip · MySQL · SQLite",
  },
  {
    domain: "Networking & Telemetry",
    items: "500Hz SignalR WebSockets · TCP/IP Sockets · HL7 Healthcare Protocol · Hardware Loopback Bridges · YARP API Gateway",
  },
  {
    domain: "Testing & Developer Tools",
    items: "Selenium WebDriver (C#) · Postman · Git / GitHub · Visual Studio 2022 · VS Code · Docker",
  },
];

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-[#e2dad0] bg-[#efe9df] text-[#171412]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-[#d6cebf] text-[#ff4829] text-xs font-mono font-semibold uppercase tracking-wider shadow-sm">
            <span>Career History &amp; Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#171412] tracking-tight leading-tight">
            Work experience &amp; stack.
          </h2>
          <p className="text-base sm:text-lg text-[#57534e] leading-relaxed font-normal">
            Real-world engineering roles, mission-critical healthcare deployments, and frontier AI model training.
          </p>
        </div>

        {/* Visual Career Timeline Accordion */}
        <div className="space-y-4">
          {timelineData.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={item.period}
                className={`border rounded-xl transition-all duration-300 overflow-hidden bg-white shadow-sm ${
                  isExpanded
                    ? "border-[#ff4829]/80 shadow-md"
                    : "border-[#e2dad0] hover:border-[#ff4829]/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="w-full text-left p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                      <span className="text-[#ff4829] font-bold">{item.period}</span>
                      <span className="text-[#d6cebf]">&bull;</span>
                      <span className="text-[#77716e]">{item.location}</span>
                      <span className="text-[#d6cebf]">&bull;</span>
                      <span className="px-2 py-0.5 rounded-sm bg-[#efe9df] border border-[#d6cebf] text-[10px] text-[#171412] font-semibold">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#171412] tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-sm text-[#57534e] font-medium">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden sm:flex flex-wrap gap-1 max-w-xs justify-end">
                      {item.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono text-[#57534e] bg-[#efe9df] border border-[#e2dad0] px-2 py-0.5 rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="p-2 rounded border border-[#d6cebf] bg-[#efe9df] text-[#171412]">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-[#e2dad0] space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff4829] font-bold block">
                        Core Responsibilities &amp; Impact:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#57534e]">
                        {item.responsibilities.map((resp) => (
                          <li key={resp} className="flex items-start gap-2.5">
                            <span className="text-[#ff4829] mt-1 shrink-0">&bull;</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#77716e] font-semibold block mb-1.5">
                        Technologies &amp; Protocols Used:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono text-[#171412] bg-[#efe9df] border border-[#d6cebf] px-2.5 py-1 rounded-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Master Technical Stack Bento Grid */}
        <div className="pt-6 space-y-4">
          <div className="border-b border-[#e2dad0] pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#ff4829] font-bold block mb-1">
              Complete Technical Competency Matrix
            </span>
            <h3 className="text-2xl font-bold font-display text-[#171412] tracking-tight">
              Tools, frameworks &amp; protocols applied in production.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStackGroups.map((group) => (
              <div
                key={group.domain}
                className="border border-[#e2dad0] bg-white rounded-xl p-5 space-y-2.5 shadow-sm hover:border-[#ff4829]/50 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4829]" />
                  <span className="font-mono text-xs text-[#171412] font-bold uppercase tracking-wider">
                    {group.domain}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed font-mono">
                  {group.items}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
