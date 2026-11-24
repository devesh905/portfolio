import { useState } from "react";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { ArrowUpRight } from "lucide-react";

const modalData = {
  icu: {
    id: 1,
    number: "01",
    tag: "REAL-TIME ICU TELEMETRY",
    title: "Digital ICU Management System",
    subtitle: "500Hz live ECG waveform streaming and bedside clinical monitoring",
    role: "Jr. Software Developer at Subharti Hospital",
    status: "Active Production Deployment",
    problem:
      "Intensive care units need instant vitals without delays. Traditional HTTP polling choked hospital networks and introduced unacceptable latency, while uncompressed streams from bedside monitors (Comen & Mindray) flooded SQL Server and caused EF Core DbContext concurrency crashes under parallel load.",
    description:
      "I engineered the real-time telemetry pipeline using ASP.NET Core (.NET 8) and SignalR to stream 500Hz live ECG waveforms directly to nurse monitoring stations. Designed a custom delta compression algorithm reducing network bandwidth by 25–45x without losing signal fidelity. Eliminated database multithreading deadlocks using IServiceScopeFactory for isolated transaction lifetimes, and normalized raw HL7 and TCP/IP data packets from bedside medical devices.",
    tech: ["ASP.NET Core (.NET 8)", "C#", "SignalR", "HL7 Protocols", "TCP/IP Sockets", "SQL Server (T-SQL)", "WebSockets", "HTML5 Canvas"],
    highlights: [
      "Streamed live ECG waveforms at 500Hz synchronization rate using SignalR WebSockets",
      "Engineered custom delta compression cutting telemetry database footprint and network load by 25–45x",
      "Eliminated EF Core concurrency crashes via IServiceScopeFactory scope isolation under parallel decompression",
      "Unified HL7 and TCP/IP socket parsing to normalize multi-vendor hardware feeds (Comen and Mindray)",
      "Implemented automated 7-day data purging background service (IHostedService) with IST cutoff logic",
      "Built multi-role JWT authentication and RBAC for doctors, nurses, and hospital administrators",
    ],
    demo: "https://drive.google.com/drive/folders/1GtrDW4wUPRUL6aCzeLuE9SaTgRE_qIOt?usp=sharing",
    github: null,
  },
  aiData: {
    id: 2,
    number: "02",
    tag: "MULTIMODAL AI & RLHF",
    title: "AI Model Training & Multimodal Data Annotation Suite",
    subtitle: "Computer vision bounding boxes, polygon segmentation & RLHF model evaluation",
    role: "Generalist AI Specialist & Model Trainer",
    status: "Frontier Model Benchmarking",
    problem:
      "Frontier AI models require exceptionally high-quality ground-truth training data. Ambiguous visual boundaries, sloppy polygon labeling, and unverified AI hallucinations degrade model performance and cause catastrophic real-world failures.",
    description:
      "Trained and evaluated frontier AI models across diverse technical projects. Delivered pixel-perfect multimodal annotation (2D/3D bounding boxes, polygon semantic segmentation, keypoints, and temporal video action segmentation) with 99.8% Inter-Annotator Agreement (IAA). Conducted rigorous RLHF evaluation—curating complex SFT prompts, ranking response pairs, and auditing code generation and STEM reasoning to eliminate hallucinations.",
    tech: ["Image Annotation", "Video Annotation", "Polygon Segmentation", "RLHF Evaluation", "Prompt Engineering", "SFT Curation", "Hallucination Audits", "Python"],
    highlights: [
      "Produced multimodal datasets with bounding boxes, polygon masks, keypoints, and video temporal tags",
      "Achieved 99.8% Inter-Annotator Agreement (IAA) score across complex computer vision datasets",
      "Curated instruction-tuning (SFT) prompts and evaluated multi-turn RLHF model responses",
      "Conducted adversarial red-teaming and code generation verification (C#, .NET, Python, SQL)",
      "Systematic evaluation rubrics for STEM accuracy, tone alignment, and hallucination reduction",
      "Experienced as a generalist expert training and aligning frontier models across real-world domains",
    ],
    demo: null,
    github: null,
  },
  his: {
    id: 3,
    number: "03",
    tag: "HOSPITAL INFORMATION SYSTEM",
    title: "Enterprise Hospital Information System (HIS) & Hardware Bridge",
    subtitle: "Outpatient OPD kiosks, document digitization & pharmacy inventory ledger",
    role: "Jr. Software Developer at Subharti Hospital",
    status: "Active Production Deployment",
    problem:
      "Thousands of daily outpatients created severe OPD reception congestion. Paper prescriptions caused pharmacy dispensation delays, and physical document scanners could not talk directly to web-based electronic health record portals.",
    description:
      "Architected the enterprise HIS backend uniting self-registration OPD kiosks with the central pharmacy ledger. Engineered HIS.ScannerBridge—a native C# WebSocket loopback service enabling doctors to trigger local hardware flatbed scanners directly from web browsers without browser extension limits. Automated UHID generation, instant thermal barcode card printing, and real-time medicine inventory stock deductions under strict ACID concurrency.",
    tech: ["ASP.NET Core (.NET 8)", "C#", "EF Core 8", "SQL Server (T-SQL)", "WebSockets", "Hardware Loopback Bridge", "Twilio API", "Razor Pages"],
    highlights: [
      "Architected OPD self-registration kiosks issuing instant UHID barcode cards for outpatients",
      "Built native C# WebSocket service (HIS.ScannerBridge) bridging hardware document scanners to web EHRs",
      "Engineered real-time pharmacy billing and stock calculation engine with strict ACID concurrency",
      "Optimized complex SQL stored procedures and database indexes for high-throughput patient lookups",
      "Integrated Twilio SMS notifications for automated prescription and appointment reminders",
      "Standardized multi-department clinical records across Subharti Hospital wards",
    ],
    demo: null,
    github: null,
  },
  lucy: {
    id: 4,
    number: "04",
    tag: "VOIP TELEPHONY & AI",
    title: "Lucy — Autonomous Hospital Voice Assistant & SmartFleet",
    subtitle: "Bilingual voice AI pipeline integrated with Asterisk PBX telephony & logistics microservices",
    role: "Solo Project",
    status: "Working Prototype",
    problem:
      "Hospital administrative and pharmacy purchase teams spend hours on repetitive vendor calls verifying orders, status, and invoices.",
    description:
      "Built an autonomous voice AI agent integrated directly into an Asterisk PBX phone system. Inbound calls are transcribed via Faster-Whisper, analyzed by Groq LLaMA 3.3 for purchase order extraction, and answered via neural Piper TTS in under 1 second.",
    tech: ["Python", "Asterisk PBX", "Groq API", "LLaMA 3.3", "Faster-Whisper", "Piper TTS", "REST APIs"],
    highlights: [
      "Sub-second voice turnaround on live telephone calls through Asterisk PBX",
      "Accurate bilingual transcription (Hindi & English) using Faster-Whisper",
      "Zero-latency reasoning with Groq-accelerated LLaMA 3.3 models",
      "Low-jitter neural audio synthesis streaming via Piper TTS",
    ],
    demo: "https://drive.google.com/file/d/1kbNnoNojtNPixl6MQc1vu2k2IXOv_BNj/view?usp=sharing",
    github: "https://github.com/devesh905/smartfleetWeb",
  },
};

const projectCards = [
  {
    key: "icu",
    title: "Digital ICU Management System",
    description:
      "500Hz real-time ECG waveform streaming via SignalR WebSockets with custom delta compression reducing telemetry bandwidth by 25–45x.",
    bgColor: "bg-[#80b3ad]",
    image:
      "https://cdn.21st.dev/assets/localized/468ea6763477bf62330b8bd6830ab925cb20d121f4bdbfc8ce8847dd68f3e46a.png",
    isWide: true,
    badge: "ASP.NET CORE 8 • 500HZ SIGNALR • SUBHARTI HOSPITAL",
    category: "telemetry",
  },
  {
    key: "aiData",
    title: "AI Training & Multimodal Annotation",
    description:
      "Pixel-perfect 2D/3D bounding boxes, polygon semantic segmentation, and RLHF model alignment with 99.8% Inter-Annotator Agreement.",
    bgColor: "bg-[#f48c68]",
    image:
      "https://cdn.21st.dev/assets/localized/3f52b612abfb1c1fe0d488e46d2ee18266f68d5215a1a8b98c588aa5b4e0dfb4.png",
    isWide: false,
    badge: "MULTIMODAL AI • RLHF ALIGNMENT",
    category: "ai",
  },
  {
    key: "his",
    title: "Enterprise HIS & Scanner Bridge",
    description:
      "Native C# WebSocket loopback service bridging hardware flatbed document scanners to web EHRs, OPD kiosks, and central pharmacy inventory.",
    bgColor: "bg-[#3c9bf2]",
    image:
      "https://cdn.21st.dev/assets/localized/d8bddc6a71e5c9991c88edeb5eb231813cae0ac23b1cadc12e66fd8f29454040.png",
    isWide: false,
    badge: "C# WEBSOCKET BRIDGE • SQL SERVER",
    category: "telemetry",
  },
  {
    key: "lucy",
    title: "Lucy Voice AI & SmartFleet Logistics",
    description:
      "Sub-second bilingual telephone voice AI pipeline via Asterisk PBX & Faster-Whisper, paired with event-driven logistics telemetry powered by YARP gateway.",
    bgColor: "bg-[#7a60f9]",
    image:
      "https://cdn.21st.dev/assets/localized/f06acde1d097f0af17ee009592294311872511c272ba7a85e3517d789748b742.png",
    isWide: true,
    badge: "ASTERISK PBX • FASTER-WHISPER • YARP GATEWAY",
    category: "microservices",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectCards
      : projectCards.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#efe9df] text-[#171412] border-b border-[#e2dad0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-14 sm:mb-18 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-[#e2dad0] pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#d6cebf] text-[#ff4829] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <span>Production Systems &bull; High Reliability</span>
            </div>
            <h2 className="text-3xl font-display font-black text-[#171412] sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Software proven in intensive care &amp; AI labs.
            </h2>
            <p className="mt-4 text-base text-[#57534e] sm:text-lg leading-relaxed font-normal">
              Direct technical case studies across real-time hospital telemetry, computer vision annotation &amp; RLHF data training, and distributed microservices.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center bg-white p-1 rounded-full border border-[#d6cebf] text-xs font-mono shadow-xs">
            {[
              { id: "all", label: "All Systems" },
              { id: "telemetry", label: "Telemetry & Health" },
              { id: "ai", label: "AI & RLHF" },
              { id: "microservices", label: "VoIP & Microservices" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
                  activeCategory === cat.id
                    ? "bg-[#171412] text-white shadow-xs font-semibold"
                    : "text-[#57534e] hover:text-[#171412]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio 9 Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.key || idx}
              onClick={() => setSelectedProject(modalData[project.key])}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] ${project.bgColor} ${
                filteredProjects.length === 4
                  ? project.isWide
                    ? "md:col-span-7"
                    : "md:col-span-5"
                  : "md:col-span-6"
              } h-[420px] sm:h-[480px] lg:h-[510px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer`}
            >
              {/* Text Content */}
              <div className="relative z-20 flex flex-col gap-2.5 p-8 sm:p-10">
                <span className="self-start px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider bg-white/25 text-white backdrop-blur-md border border-white/20">
                  {project.badge}
                </span>

                <h3 className="text-2xl font-bold font-display text-white sm:text-3xl tracking-tight leading-snug">
                  {project.title}
                </h3>

                <p className="max-w-md text-sm sm:text-base leading-relaxed text-white/90 font-normal">
                  {project.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white/90 group-hover:text-white transition-colors mt-2">
                  <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white">
                    Click to inspect system specs
                  </span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Mockup Image */}
              <div className="mt-auto flex w-full justify-center overflow-hidden px-6 pt-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover object-top max-h-[220px] sm:max-h-[260px] w-auto rounded-t-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
