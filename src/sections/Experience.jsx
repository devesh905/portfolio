import { Building2, Calendar, Activity, Sparkles, Database, GraduationCap } from "lucide-react";

const timelineData = [
  {
    period: "Aug 2025 — Present",
    role: "Junior Software Developer (Backend / .NET 8)",
    organization: "Chhatrapati Shivaji Subharti Hospital",
    location: "Meerut, UP, India",
    type: "Production Healthcare Deployment",
    nodeIcon: Activity,
    description:
      "Architected and engineered modular ASP.NET Core (.NET 8) telemetry services ingesting high-frequency multi-lead ECG waveforms from Comen and Mindray bedside patient monitors at 500Hz via TCP/IP and HL7. Engineered custom delta compression reducing network load by 25–45x, eliminated EF Core database deadlocks with IServiceScopeFactory isolation, and automated 7-day data retention background services.",
    tech: [
      "ASP.NET Core (.NET 8)",
      "C#",
      "SignalR WebSockets",
      "HL7 Protocols",
      "TCP/IP Sockets",
      "SQL Server (T-SQL)",
      "EF Core 8",
      "Delta Compression",
    ],
  },
  {
    period: "2024 — Present",
    role: "AI Model Trainer & Multimodal Data Specialist",
    organization: "Frontier AI Training & Research Labs",
    location: "Remote / NCR, India",
    type: "Generalist AI Specialist",
    nodeIcon: Sparkles,
    description:
      "Trained and aligned frontier AI models with pixel-perfect multimodal annotation across high-resolution image and video datasets (2D/3D bounding boxes, polygon semantic segmentation, keypoints, and temporal action tagging) with 99.8% Inter-Annotator Agreement (IAA). Conducted multi-turn RLHF preference ranking, SFT prompt-response curation, and code reasoning audits to eliminate hallucinations.",
    tech: [
      "Multimodal Annotation",
      "Computer Vision",
      "Polygon Segmentation",
      "RLHF Evaluation",
      "SFT Curation",
      "Prompt Engineering",
      "Hallucination Audits",
      "Python",
    ],
  },
  {
    period: "Oct 2024 — Jan 2025",
    role: "Apprentice Engineer (Backend & Automation)",
    organization: "366Pi Technologies",
    location: "Ranchi, India",
    type: "Production Automation & QA",
    nodeIcon: Database,
    description:
      "Developed and executed automated testing suites for RESTful APIs and distributed web platforms using C# (Selenium WebDriver) and Postman. Performed SQL Server query optimization, indexing audits, and regression pipelines to ensure data integrity and eliminate production release bottlenecks.",
    tech: [
      "C#",
      "Selenium WebDriver",
      "Postman",
      "SQL Server",
      "Query Optimization",
      "REST APIs",
    ],
  },
  {
    period: "June 2020 — July 2024",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Chandra Shekhar Azad University of Agriculture & Technology",
    location: "Kanpur, India",
    type: "Graduation (OGPA: 8.09 / 10.0)",
    nodeIcon: GraduationCap,
    description:
      "Rigorous four-year engineering curriculum focused on Object-Oriented Programming (OOP), Data Structures & Algorithms, Relational Database Management Systems, Operating Systems, Computer Networks, and Distributed Computing.",
    tech: [
      "C#",
      "OOP",
      "SQL",
      "Data Structures",
      "Computer Networks",
      "Operating Systems",
    ],
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
  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-[#e2dad0] bg-[#efe9df] text-[#171412]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#d6cebf] text-[#ff4829] text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
            <span>Career History &amp; Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#171412] tracking-tight leading-tight">
            Work experience &amp; stack.
          </h2>
          <p className="text-base sm:text-lg text-[#57534e] leading-relaxed font-normal">
            Real-world engineering roles, mission-critical healthcare deployments, and frontier AI model training.
          </p>
        </div>

        {/* Vertical Timeline (Matching User's Reference Layout) */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[17px] sm:left-[21px] top-4 bottom-8 w-[2px] bg-[#d6cebf]" />

          <div className="space-y-12 sm:space-y-16">
            {timelineData.map((item) => (
              <div key={item.period} className="relative group">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[27px] sm:-left-[33px] top-1 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#171412] group-hover:border-[#ff4829] flex items-center justify-center text-[#171412] group-hover:text-[#ff4829] shadow-sm transition-all duration-300 z-10">
                  <item.nodeIcon size={18} />
                </div>

                {/* Content Block */}
                <div className="pl-4 sm:pl-6 space-y-2.5">
                  {/* Company Row */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white border border-[#d6cebf] flex items-center justify-center text-[#ff4829] shadow-xs shrink-0">
                      <Building2 size={14} />
                    </div>
                    <span className="font-bold text-sm sm:text-base text-[#171412] tracking-tight">
                      {item.organization}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-white border border-[#d6cebf] text-[#57534e]">
                      {item.location}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold font-display text-[#171412] tracking-tight">
                    {item.role}
                  </h3>

                  {/* Date / Metadata Row */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#78716c] font-medium">
                    <Calendar size={14} className="text-[#ff4829]" />
                    <span>{item.period}</span>
                    <span>&bull;</span>
                    <span className="text-[#171412] font-semibold">{item.type}</span>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-sm sm:text-base text-[#57534e] leading-relaxed max-w-3xl font-normal pt-1">
                    {item.description}
                  </p>

                  {/* Tech Stack Pills (Matching Reference Image) */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-[#171412] text-[#f6f4f0] hover:bg-[#ff4829] transition-colors shadow-xs cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Master Technical Stack Competency Matrix */}
        <div className="pt-8 space-y-6 border-t border-[#e2dad0]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#d6cebf] text-[#ff4829] text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
              <span>Complete Technical Competency Matrix</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-[#171412] tracking-tight leading-tight">
              Tools, frameworks &amp; protocols applied in production.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStackGroups.map((group) => (
              <div
                key={group.domain}
                className="border border-[#e2dad0] bg-white rounded-2xl p-6 space-y-2.5 shadow-xs hover:border-[#ff4829]/60 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff4829] shrink-0" />
                  <h4 className="font-display text-base sm:text-lg text-[#171412] font-bold tracking-tight">
                    {group.domain}
                  </h4>
                </div>
                <p className="text-sm text-[#57534e] leading-relaxed font-sans font-normal">
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
