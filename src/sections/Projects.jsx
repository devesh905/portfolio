import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetailModal from "../components/ProjectDetailModal";
import IcuDashboardVisual from "../components/IcuDashboardVisual";
import IcuArchitectureFlow from "../components/IcuArchitectureFlow";
import HisSystemVisual from "../components/HisSystemVisual";
import AiAnnotationVisual from "../components/AiAnnotationVisual";
import { ArrowRight, ExternalLink, Activity, Layers, Building2, Radio, Server, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";

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
    title: "Lucy — Autonomous Hospital Voice Assistant",
    subtitle: "Bilingual voice AI pipeline integrated with Asterisk PBX telephony",
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
    github: null,
  },
  smartfleet: {
    id: 5,
    number: "05",
    tag: "DISTRIBUTED MICROSERVICES",
    title: "SmartFleet — Logistics Telemetry & Gateway Platform",
    subtitle: "Event-driven microservices architecture with RabbitMQ and Microsoft YARP",
    role: "Open Source Project",
    status: "Open Source",
    problem:
      "Real-time GPS fleet tracking services suffer from write contention when thousands of vehicles post concurrent telemetry packets to monolithic APIs.",
    description:
      "Engineered an event-driven microservices architecture where vehicle telemetry is buffered through RabbitMQ message queues to prevent database locks. Microsoft YARP handles API Gateway reverse proxying, authentication offloading, and rate limiting.",
    tech: [".NET Microservices", "RabbitMQ", "Microsoft YARP", "Docker", "PostgreSQL", "React"],
    highlights: [
      "Decoupled telemetry ingestion pipeline using RabbitMQ message broker",
      "Configured Microsoft YARP as high-throughput reverse proxy and API Gateway",
      "Independent microservice scalability for Auth, Tracking, and Reporting domains",
      "Containerized deployment workflow using Docker & Docker Compose",
    ],
    demo: null,
    github: "https://github.com/devesh905/smartfleetWeb",
  },
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [icuTab, setIcuTab] = useState("monitor");

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-[#e2dad0] bg-[#efe9df] text-[#171412]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-14 sm:space-y-18">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#e2dad0] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-[#d6cebf] text-[#ff4829] text-xs font-mono font-semibold uppercase tracking-wider">
              <span>Production Systems &bull; High Reliability</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-[#171412] tracking-tight leading-tight">
              Software proven in intensive care &amp; AI labs.
            </h2>
            <p className="text-base sm:text-lg text-[#57534e] leading-relaxed font-normal">
              Direct technical case studies: real-time hospital telemetry, computer vision annotation &amp; RLHF data training, and distributed microservices.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center bg-white p-1 rounded-md border border-[#d6cebf] text-xs font-mono shadow-sm">
            {[
              { id: "all", label: "All Systems" },
              { id: "telemetry", label: "Telemetry & Healthcare" },
              { id: "ai", label: "AI Training & CV" },
              { id: "microservices", label: "Microservices & VoIP" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer font-medium ${
                  activeCategory === cat.id
                    ? "bg-[#171412] text-white shadow-sm font-semibold"
                    : "text-[#57534e] hover:text-[#171412]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>


        {/* ============================================================== */}
        {/* SYSTEM 01: DIGITAL ICU TELEMETRY (FLAGSHIP)                   */}
        {/* ============================================================== */}
        {(activeCategory === "all" || activeCategory === "telemetry") && (
          <div id="project-icu" className="scroll-mt-28">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-[#e2dad0] bg-white rounded-xl p-6 sm:p-8 space-y-6 shadow-sm hover:border-[#ff4829]/60 hover:shadow-md transition-all"
            >
              {/* Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e2dad0] pb-4 text-xs font-mono text-[#57534e]">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#ff4829] text-sm">01</span>
                  <span className="text-[#d6cebf]">/</span>
                  <span className="text-[#171412] font-semibold uppercase tracking-wider">
                    REAL-TIME ICU TELEMETRY SYSTEM
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#ff4829] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#ff4829] animate-pulse" />
                  <span>Production Deployment &bull; Subharti Hospital</span>
                </div>
              </div>

              {/* High-Impact Interactive Preview Card */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#57534e]">
                    <span>Interactive Workspace:</span>
                    <button
                      type="button"
                      onClick={() => setIcuTab("monitor")}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                        icuTab === "monitor"
                          ? "bg-[#171412] text-white"
                          : "bg-[#efe9df] text-[#57534e] hover:text-[#171412] border border-[#d6cebf]"
                      }`}
                    >
                      Live 500Hz Stream Console
                    </button>
                    <button
                      type="button"
                      onClick={() => setIcuTab("architecture")}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                        icuTab === "architecture"
                          ? "bg-[#171412] text-white"
                          : "bg-[#efe9df] text-[#57534e] hover:text-[#171412] border border-[#d6cebf]"
                      }`}
                    >
                      Pipeline Architecture Blueprint
                    </button>
                  </div>

                  <span className="text-xs font-mono text-[#ff4829] font-semibold hidden sm:inline">
                    Latency: &lt; 40ms &bull; 0 Frame Loss
                  </span>
                </div>

                {/* Render Selected View */}
                {icuTab === "monitor" ? <IcuDashboardVisual /> : <IcuArchitectureFlow />}
              </div>

              {/* Split Content: Summary on Left, Metrics & Actions on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 border-t border-[#e2dad0]">
                {/* Information (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#171412] tracking-tight">
                      Digital ICU Management System
                    </h3>
                    <p className="text-xs font-mono text-[#ff4829] mt-1 font-semibold">
                      ASP.NET Core (.NET 8) &bull; SignalR &bull; TCP/IP &amp; HL7 Protocols &bull; SQL Server
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#57534e] leading-relaxed font-normal">
                    Engineered the mission-critical telemetry engine connecting bedside patient monitors (Comen &amp; Mindray) via TCP/IP sockets. Streams 500Hz multi-lead ECG waveforms directly to HTML5 Canvas dashboards with sub-40ms latency. Slashed network saturation by 25–45x using delta compression, and isolated database transaction scopes to eliminate EF Core multithreading deadlocks.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[
                      "ASP.NET Core (.NET 8)",
                      "C#",
                      "SignalR WebSockets",
                      "HL7 & TCP/IP",
                      "SQL Server",
                      "Delta Compression",
                      "IServiceScopeFactory",
                      "JWT Auth",
                    ].map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-[#171412] bg-[#efe9df] border border-[#d6cebf] px-2.5 py-1 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics & Actions (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#ff4829]">500 Hz</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Live Waveform Sync</div>
                    </div>
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#171412]">32x</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Bandwidth Slashed</div>
                    </div>
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#171412]">&lt; 40 ms</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Broadcast Latency</div>
                    </div>
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#ff4829]">Zero</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Concurrency Deadlocks</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(modalData.icu)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#ff4829] hover:bg-[#e03a1d] rounded-md transition-all cursor-pointer shadow-sm"
                    >
                      <span>View Technical Case Study</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href="https://drive.google.com/drive/folders/1GtrDW4wUPRUL6aCzeLuE9SaTgRE_qIOt?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#171412] hover:text-[#ff4829] border border-[#d6cebf] hover:border-[#ff4829] bg-white rounded-md transition-all cursor-pointer shadow-sm"
                    >
                      <ExternalLink size={13} />
                      <span>Watch System Video &amp; Drive Folder</span>
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}


        {/* ============================================================== */}
        {/* SYSTEM 02: AI MODEL TRAINING & ANNOTATION (FLAGSHIP LAB)      */}
        {/* ============================================================== */}
        {(activeCategory === "all" || activeCategory === "ai") && (
          <div id="project-ai-data" className="scroll-mt-28">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-[#e2dad0] bg-white rounded-xl p-6 sm:p-8 space-y-6 shadow-sm hover:border-[#ff4829]/60 hover:shadow-md transition-all"
            >
              {/* Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e2dad0] pb-4 text-xs font-mono text-[#57534e]">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#ff4829] text-sm">02</span>
                  <span className="text-[#d6cebf]">/</span>
                  <span className="text-[#171412] font-semibold uppercase tracking-wider">
                    MULTIMODAL AI &amp; RLHF TRAINING PIPELINE
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#ff4829] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#ff4829] animate-pulse" />
                  <span>Generalist Expert &bull; Frontier Model Benchmarks</span>
                </div>
              </div>

              {/* Embedded Interactive Annotation Lab Sandbox */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#57534e]">
                    <span>Interactive AI Training Workbench:</span>
                    <span className="text-[#ff4829] font-semibold">Toggle bounding boxes, polygon masks &amp; RLHF audit</span>
                  </div>
                  <span className="text-xs font-mono text-[#ff4829] font-semibold hidden sm:inline">
                    IAA Precision: 99.8%
                  </span>
                </div>

                <AiAnnotationVisual />
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 border-t border-[#e2dad0]">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#171412] tracking-tight">
                      AI Model Training &amp; Multimodal Data Annotation Suite
                    </h3>
                    <p className="text-xs font-mono text-[#ff4829] mt-1 font-semibold">
                      Computer Vision &bull; RLHF &bull; Bounding Boxes &bull; Polygon Masks &bull; SFT Prompt Curation
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#57534e] leading-relaxed font-normal">
                    Specialized in generating high-fidelity ground-truth data for frontier AI models. Performs precision multimodal annotation on images and 4K video sequences (bounding boxes, polygon semantic segmentation, keypoints, and temporal action tagging). In addition, conducts RLHF evaluation and SFT prompt engineering across C#, .NET, Python, and clinical workflows to eliminate reasoning errors and hallucinations.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[
                      "Image & Video Annotation",
                      "Bounding Boxes",
                      "Polygon Segmentation",
                      "Temporal Action Indexing",
                      "RLHF Preference Ranking",
                      "SFT Prompt Curation",
                      "Hallucination Audits",
                      "Inter-Annotator Agreement (IAA)",
                    ].map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-[#171412] bg-[#efe9df] border border-[#d6cebf] px-2.5 py-1 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#ff4829]">99.8%</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Agreement Score (IAA)</div>
                    </div>
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#171412]">Sub-pixel</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Bbox Precision</div>
                    </div>
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#171412]">0.0%</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Tolerance for Hallucinations</div>
                    </div>
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#ff4829]">Multi-Domain</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Code, Health, STEM</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(modalData.aiData)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#ff4829] hover:bg-[#e03a1d] rounded-md transition-all cursor-pointer shadow-sm"
                    >
                      <span>Inspect Annotation &amp; RLHF Methodology</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}


        {/* ============================================================== */}
        {/* SYSTEM 03: HOSPITAL INFORMATION SYSTEM (HIS)                  */}
        {/* ============================================================== */}
        {(activeCategory === "all" || activeCategory === "telemetry") && (
          <div id="project-his" className="scroll-mt-28">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-[#e2dad0] bg-white rounded-xl p-6 sm:p-8 space-y-6 shadow-sm hover:border-[#ff4829]/60 hover:shadow-md transition-all"
            >
              {/* Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e2dad0] pb-4 text-xs font-mono text-[#57534e]">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#ff4829] text-sm">03</span>
                  <span className="text-[#d6cebf]">/</span>
                  <span className="text-[#171412] font-semibold uppercase tracking-wider">
                    HOSPITAL EHR PLATFORM // .NET 8
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#ff4829] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#ff4829]" />
                  <span>Production Deployment &bull; Subharti Hospital</span>
                </div>
              </div>

              {/* Embedded HIS System Visual */}
              <HisSystemVisual />

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 border-t border-[#e2dad0]">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#171412] tracking-tight">
                      Hospital Information System (HIS) &amp; Scanner Bridge
                    </h3>
                    <p className="text-xs font-mono text-[#ff4829] mt-1 font-semibold">
                      ASP.NET Core (.NET 8) &bull; EF Core 8 &bull; SQL Server &bull; WebSockets &bull; Hardware Loopback
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#57534e] leading-relaxed font-normal">
                    Modernized hospital workflows across outpatient check-in, prescription digitization, and pharmacy operations. Developed OPD self-registration kiosks issuing instant UHID barcode cards, engineered HIS.ScannerBridge (a native C# WebSocket loopback service bridging physical flatbed scanners to the web browser), and established real-time medicine inventory stock and billing calculation engines.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[
                      "ASP.NET Core (.NET 8)",
                      "C#",
                      "EF Core 8",
                      "SQL Server",
                      "WebSockets (8181)",
                      "Hardware Scanner Bridge",
                      "Razor Pages",
                      "Twilio SMS",
                      "JWT Auth",
                    ].map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-[#171412] bg-[#efe9df] border border-[#d6cebf] px-2.5 py-1 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#ff4829]">Instant</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">UHID &amp; Barcode Card</div>
                    </div>
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#171412]">Native C#</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Hardware Bridge Service</div>
                    </div>
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#171412]">Unified</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Pharmacy &amp; Billing</div>
                    </div>
                    <div className="border border-[#e2dad0] bg-[#f6f4f0] p-3.5 rounded-md">
                      <div className="text-2xl font-bold font-mono text-[#ff4829]">Daily Active</div>
                      <div className="text-xs text-[#77716e] font-mono mt-0.5">Subharti Hospital Wards</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(modalData.his)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#ff4829] hover:bg-[#e03a1d] rounded-md transition-all cursor-pointer shadow-sm"
                    >
                      <span>View Technical Case Study</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}


        {/* ============================================================== */}
        {/* SYSTEMS 04 & 05: VOIP AI (LUCY) & MICROSERVICES (SMARTFLEET)   */}
        {/* ============================================================== */}
        {(activeCategory === "all" || activeCategory === "microservices") && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Lucy - VoIP Telephony AI */}
            <div className="border border-[#e2dad0] bg-white rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-[#ff4829]/60 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#57534e]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#ff4829]">04</span>
                    <span className="text-[#d6cebf]">/</span>
                    <span className="text-[#171412] font-semibold">VOIP TELEPHONY &amp; AI</span>
                  </div>
                  <span className="text-[#ff4829] font-semibold">Working Prototype</span>
                </div>

                <div>
                  <h4 className="text-xl font-bold font-display text-[#171412] tracking-tight">
                    Lucy &mdash; Autonomous Hospital Voice Assistant
                  </h4>
                  <p className="text-xs text-[#ff4829] mt-1 font-mono font-medium">
                    Asterisk PBX &bull; Faster-Whisper &bull; Groq LLaMA 3.3 &bull; Piper TTS
                  </p>
                </div>

                <p className="text-sm text-[#57534e] leading-relaxed font-normal">
                  Engineered an AI voice agent connected directly to an Asterisk VoIP PBX phone server. Automatically handles supplier calls, transcribing spoken Hindi and English with Faster-Whisper, extracting purchase order queries with Groq LLaMA 3.3, and responding in real time (&lt;1s loop) with neural Piper TTS.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Python", "Asterisk PBX", "Groq API", "LLaMA 3.3", "Faster-Whisper", "Piper TTS", "REST APIs"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-[#171412] bg-[#efe9df] border border-[#d6cebf] px-2 py-0.5 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#e2dad0] mt-6">
                <button
                  type="button"
                  onClick={() => setSelectedProject(modalData.lucy)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff4829] hover:text-[#e03a1d] cursor-pointer"
                >
                  <span>Technical details</span>
                  <ArrowRight size={13} />
                </button>

                <a
                  href="https://drive.google.com/file/d/1kbNnoNojtNPixl6MQc1vu2k2IXOv_BNj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#57534e] hover:text-[#171412]"
                >
                  <ExternalLink size={12} />
                  <span>Video Demo</span>
                </a>
              </div>
            </div>

            {/* SmartFleet - Distributed Microservices */}
            <div className="border border-[#e2dad0] bg-white rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-[#ff4829]/60 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#57534e]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#ff4829]">05</span>
                    <span className="text-[#d6cebf]">/</span>
                    <span className="text-[#171412] font-semibold">DISTRIBUTED MICROSERVICES</span>
                  </div>
                  <span className="text-[#77716e]">Open Source</span>
                </div>

                <div>
                  <h4 className="text-xl font-bold font-display text-[#171412] tracking-tight">
                    SmartFleet &mdash; Logistics Telemetry Platform
                  </h4>
                  <p className="text-xs text-[#ff4829] mt-1 font-mono font-medium">
                    .NET Microservices &bull; RabbitMQ &bull; Microsoft YARP &bull; Docker
                  </p>
                </div>

                <p className="text-sm text-[#57534e] leading-relaxed font-normal">
                  Architected an event-driven logistics platform to ingest concurrent vehicle telemetry without database locks. Utilizes RabbitMQ message broker for async buffering during load spikes and Microsoft YARP API Gateway for dynamic routing, authentication offloading, and rate limiting.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[".NET Microservices", "RabbitMQ", "YARP Gateway", "Docker", "PostgreSQL", "React"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-[#171412] bg-[#efe9df] border border-[#d6cebf] px-2 py-0.5 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#e2dad0] mt-6">
                <button
                  type="button"
                  onClick={() => setSelectedProject(modalData.smartfleet)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff4829] hover:text-[#e03a1d] cursor-pointer"
                >
                  <span>Technical details</span>
                  <ArrowRight size={13} />
                </button>

                <a
                  href="https://github.com/devesh905/smartfleetWeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#57534e] hover:text-[#171412]"
                >
                  <FaGithub size={13} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

          </div>
        )}

      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
