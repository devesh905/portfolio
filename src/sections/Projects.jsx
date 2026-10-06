import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetailModal from "../components/ProjectDetailModal";
import IcuDashboardVisual from "../components/IcuDashboardVisual";
import IcuArchitectureFlow from "../components/IcuArchitectureFlow";
import HisSystemVisual from "../components/HisSystemVisual";
import HisArchitectureFlow from "../components/HisArchitectureFlow";
import { ArrowRight, ArrowUpRight, ExternalLink, Activity, Building2, Radio, Truck } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const modalData = {
  icu: {
    id: 1,
    number: "01",
    tag: "REAL-TIME TELEMETRY (500Hz STREAM)",
    title: "Digital ICU Management System",
    subtitle: "High-Frequency Medical Device Telemetry & Bedside ICU Monitoring Panel",
    role: "Jr. Software Developer at Subharti Hospital",
    status: "Active Production Deployment",
    problem:
      "Intensive care units rely on immediate notification of critical patient vitals. Standard HTTP polling introduces unacceptable latency, while uncompressed telemetry from continuous bedside monitors (Mindray & Comen) can congest hospital networks with repetitive packets and trigger concurrency deadlocks in naive database contexts.",
    description:
      "I implemented the real-time telemetry pipeline using ASP.NET Core and SignalR to stream 500Hz live ECG waveforms. Designed a custom delta-encoded compression algorithm achieving a 25–45x reduction in bandwidth without loss of signal resolution. Solved EF Core DbContext multi-threaded concurrency crashes during parallel stream decompression by designing an isolated chunk loader using IServiceScopeFactory. Integrated TCP/IP sockets and HL7 protocol parsing to normalize data from Mindray and Comen hardware monitors.",
    tech: ["ASP.NET Core", "C#", "SignalR", "HL7 Protocols", "TCP/IP Sockets", "SQL Server", "WebSockets"],
    highlights: [
      "Live ECG waveform streaming at 500Hz synchronization rate using SignalR",
      "Custom delta-encoded compression reduced telemetry bandwidth by up to 25–45x",
      "Eliminated EF Core concurrency crashes via IServiceScopeFactory scope isolation",
      "Unified HL7 and TCP/IP parsing normalizing Mindray and Comen hardware feeds",
      "Built UHID normalization routine preventing patient record corruption at ingestion",
      "Implemented automated 7-day data retention purge routine with IST cutoff logic",
    ],
    features: [
      "Real-time clinical patient monitoring dashboard with custom waveform visualizer",
      "Event-driven alert dispatch & critical threshold notifications for ICU staff",
      "Role-based secure authentication and audit logging in SQL Server",
      "Resilient reconnect and offline telemetry cache buffering for hospital networks",
    ],
    demo: "https://drive.google.com/drive/folders/1GtrDW4wUPRUL6aCzeLuE9SaTgRE_qIOt?usp=sharing",
    github: null,
  },
  his: {
    id: 2,
    number: "02",
    tag: "ENTERPRISE HEALTHCARE PLATFORM",
    title: "Hospital Information System (HIS) & Clinical Portal",
    subtitle: "Enterprise Hospital Management, OPD Registration, Hardware Scanner Bridge, Pharmacy & Billing",
    role: "Full-Stack & .NET 8 Developer at Subharti Hospital",
    status: "Active Production Deployment",
    problem:
      "Hospital operations suffered from bottlenecked outpatient queues, fragmented paper prescriptions prone to illegibility, manual campus pharmacy inventory checks, and disjointed billing across OPD and IPD departments. Clinicians and staff required a unified, fast internal portal.",
    description:
      "Contributed to the multi-module Hospital Information System built with ASP.NET Core (.NET 8 Web API + Razor), Entity Framework Core, and SQL Server. Implemented the Patient OPD Registration portal and self-registration kiosks with automated UHID generation and barcode OPD card printing. Built HIS.ScannerBridge, a dedicated local C# WebSocket service that interfaces flatbed scanners (Canon P-208II) with the web EHR for doctor prescription digitizing and AI OCR parsing. Implemented the campus pharmacy multi-store inventory manager and contributed to the automated patient billing calculation engine.",
    tech: ["ASP.NET Core (.NET 8)", "C#", "EF Core 8", "SQL Server", "WebSockets / Hardware Bridge", "Razor Pages", "Twilio SMS", "RESTful APIs", "JWT Auth"],
    highlights: [
      "Rapid Patient OPD Registration with automated UHID generation and barcode card printing",
      "Engineered HIS.ScannerBridge (local C# WebSocket service) connecting physical flatbed scanners",
      "Prescription digitizing pipeline with OCR parsing for clinician review",
      "Multi-store Campus Pharmacy Stock Manager with live medicine inventory lookup",
      "Smart Lab Reports with automated diagnostic reference ranges and procedure records",
      "Automated patient billing calculation engine covering OPD consultations and packages",
    ],
    features: [
      "Patient OPD Registration & Self-Check-in kiosk with automated queue ticketing",
      "Hardware Scanner Bridge (C# local loopback WebSocket service) streaming documents to web EHR",
      "Campus Pharmacy Stock Manager with live medicine pricing and availability lookup",
      "Doctor Schedule Manager, package service registers, and health camp administration",
      "Role-based secure JWT authentication, encrypted audit logging, and Twilio SMS alerts",
    ],
    demo: null,
    github: null,
  },
  lucy: {
    id: 3,
    number: "03",
    tag: "VOIP & TELEPHONY AI",
    title: "Lucy — Voice-Enabled Hospital Assistant",
    subtitle: "Automating routine phone inquiries over Asterisk VoIP PBX",
    role: "Systems Developer (Personal Project & Pilot)",
    status: "Working Prototype",
    problem:
      "Hospital warehouse and procurement staff spent hours answering repetitive phone calls about supplier orders and routine inventory queries. Web chatbots were ineffective for staff on desk phones.",
    description:
      "I built an end-to-end voice assistant that integrates with an Asterisk VoIP PBX telephone server. Audio is transcribed using Faster-Whisper, mapped to procurement actions via LLaMA 3.3 on Groq, and converted back into natural speech in real time with Piper neural TTS.",
    tech: ["Python", "Asterisk PBX", "Groq API", "LLaMA 3.3", "Faster-Whisper", "Piper TTS"],
    highlights: [
      "Low-latency speech-to-text pipeline over live VoIP phone connections",
      "Direct Asterisk PBX integration automating routine supplier calls",
      "LLaMA 3.3 intent classification extracting structured procurement queries",
      "Real-time audio synthesis using neural Piper TTS engine",
    ],
    features: [
      "Whisper-powered speech-to-text recognition fine-tuned for healthcare supplies",
      "Structured purchase order intent extraction and stock level verification",
      "Call transcription audit logs and inquiry history",
    ],
    demo: "https://drive.google.com/file/d/1kbNnoNojtNPixl6MQc1vu2k2IXOv_BNj/view?usp=sharing",
    github: null,
  },
  smartfleet: {
    id: 4,
    number: "04",
    tag: "DISTRIBUTED SYSTEMS",
    title: "SmartFleet — Microservices Logistics Platform",
    subtitle: "Event-driven fleet tracking & dispatch with RabbitMQ and YARP",
    role: "Full-Stack Developer (Open Source)",
    status: "Open Source Codebase",
    problem:
      "Monolithic logistics systems degrade when hundreds of delivery vehicles concurrently push GPS coordinates, trip updates, and status messages to a central API endpoint.",
    description:
      "I built a decoupled .NET microservices architecture separating Auth, Vehicles, Trips, and Telemetry services. Leveraged RabbitMQ for asynchronous message queuing during traffic spikes and Microsoft YARP as a reverse proxy gateway for route management and authentication.",
    tech: [".NET Microservices", "ASP.NET Core", "RabbitMQ", "Microsoft YARP", "Docker", "React", "PostgreSQL"],
    highlights: [
      "Decoupled event-driven pub/sub messaging architecture via RabbitMQ",
      "Microsoft YARP API gateway reverse proxy with authentication offloading",
      "Containerized multi-service deployment with Docker Compose",
      "Interactive React dispatch dashboard with live fleet state visualization",
    ],
    features: [
      "Modular microservices: Auth, Vehicles, Trips, and Telemetry services",
      "Reliable transaction retries for delivery dispatch queues",
      "Responsive React UI with route status updates and map rendering",
    ],
    demo: null,
    github: "https://github.com/devesh905/smartfleetWeb",
  },
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProjectTab, setActiveProjectTab] = useState("icu");

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-[#E5E5DE] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Section Header & Sticky-Style Project Index */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#E5E5DE]">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E56A0] text-xs font-mono font-semibold uppercase tracking-wider">
              <span>Selected Engineering Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight leading-tight">
              Case studies &amp; systems.
            </h2>
            <p className="text-base sm:text-lg text-[#4A4C46] leading-relaxed">
              Real software built for high-stakes healthcare and distributed production constraints.
            </p>
          </div>

          {/* Interactive Project Quick Index */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 text-xs font-mono">
            <a
              href="#project-icu"
              onClick={() => setActiveProjectTab("icu")}
              className={`px-3.5 py-2 rounded border whitespace-nowrap transition-all ${
                activeProjectTab === "icu"
                  ? "bg-[#141413] text-white border-[#141413] font-semibold"
                  : "bg-white text-[#4A4C46] border-[#E5E5DE] hover:border-[#1E56A0]"
              }`}
            >
              01 // DIGITAL ICU
            </a>

            <a
              href="#project-his"
              onClick={() => setActiveProjectTab("his")}
              className={`px-3.5 py-2 rounded border whitespace-nowrap transition-all ${
                activeProjectTab === "his"
                  ? "bg-[#141413] text-white border-[#141413] font-semibold"
                  : "bg-white text-[#4A4C46] border-[#E5E5DE] hover:border-[#1E56A0]"
              }`}
            >
              02 // HOSPITAL HIS
            </a>

            <a
              href="#project-secondary"
              onClick={() => setActiveProjectTab("secondary")}
              className={`px-3.5 py-2 rounded border whitespace-nowrap transition-all ${
                activeProjectTab === "secondary"
                  ? "bg-[#141413] text-white border-[#141413] font-semibold"
                  : "bg-white text-[#4A4C46] border-[#E5E5DE] hover:border-[#1E56A0]"
              }`}
            >
              03 // DISTRIBUTED &amp; VOIP
            </a>
          </div>
        </div>


        {/* ============================================================== */}
        {/* PROJECT 01: DIGITAL ICU (VISUALLY DOMINANT ON DARK CANVAS)     */}
        {/* ============================================================== */}
        <div id="project-icu" className="scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-[#232B3A] bg-[#0B0F17] text-white rounded-xl p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] space-y-10"
          >
            {/* Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1E2738] pb-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="font-bold text-blue-400 text-sm">01</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-200 font-semibold uppercase tracking-wider">
                  REAL-TIME MEDICAL TELEMETRY (500Hz STREAM)
                </span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active In-Hospital Deployment &bull; Subharti Hospital</span>
              </div>
            </div>

            {/* Title & Domain Summary */}
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Digital ICU Management System
              </h3>
              <p className="text-base text-slate-300 font-normal">
                Sub-second medical device telemetry, 500Hz waveform streaming, and bedside clinical monitoring.
              </p>
            </div>

            {/* HUGE VISUAL AREA: Digital ICU Bedside Dashboard (55-60% dominant visual) */}
            <div className="pt-2">
              <IcuDashboardVisual />
            </div>

            {/* Structured Engineering Storytelling (Problem, Engineering, Result, Tech) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-sm border-t border-[#1E2738]">
              {/* Problem */}
              <div className="space-y-2 bg-[#121824] p-4 rounded-lg border border-[#1E2738]">
                <span className="font-mono text-xs uppercase tracking-wider text-rose-400 font-bold block">
                  The Problem
                </span>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-normal">
                  Continuous bedside monitors (Mindray &amp; Comen) push high-frequency vitals that congest hospital networks if uncompressed, while standard HTTP polling introduces clinical lag. Concurrent stream decompression frequently triggered database deadlocks.
                </p>
              </div>

              {/* Engineering */}
              <div className="space-y-2 bg-[#121824] p-4 rounded-lg border border-[#1E2738]">
                <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-bold block">
                  The Engineering
                </span>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-normal">
                  Implemented TCP/IP socket ingestion, normalized HL7 packets, and built a custom delta-encoded compression algorithm achieving 25&ndash;45x bandwidth reduction. Isolated EF Core DbContext lifetimes via <code className="text-sky-300 font-mono">IServiceScopeFactory</code> to eliminate concurrency crashes.
                </p>
              </div>

              {/* Result */}
              <div className="space-y-2 bg-[#121824] p-4 rounded-lg border border-[#1E2738]">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold block">
                  The Result
                </span>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-normal">
                  Real-time bedside monitoring with smooth 500Hz ECG waveform rendering, sub-40ms end-to-end SignalR latency, and rock-solid thread safety under continuous hospital ward operation.
                </p>
              </div>
            </div>

            {/* Interactive Technical Architecture Diagram */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                Technical Architecture Flow (Hover node to inspect responsibility):
              </span>
              <IcuArchitectureFlow />
            </div>

            {/* Tech Stack & Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1E2738]">
              <div className="flex flex-wrap gap-1.5">
                {["C#", "ASP.NET Core", "SignalR", "HL7 Protocols", "TCP/IP Sockets", "SQL Server", "WebSockets"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-slate-200 bg-[#162030] border border-[#253348] px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(modalData.icu)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1E56A0] hover:bg-blue-600 rounded transition-all cursor-pointer shadow-sm"
                >
                  <span>View case study &amp; details</span>
                  <ArrowRight size={13} />
                </button>

                <a
                  href="https://drive.google.com/drive/folders/1GtrDW4wUPRUL6aCzeLuE9SaTgRE_qIOt?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-200 border border-[#2D3B52] hover:border-slate-300 bg-[#121824] rounded transition-all"
                >
                  <ExternalLink size={12} />
                  <span>View demo folder</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>


        {/* ============================================================== */}
        {/* PROJECT 02: HOSPITAL INFORMATION SYSTEM (EDITORIAL LIGHT)      */}
        {/* ============================================================== */}
        <div id="project-his" className="scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-[#E5E5DE] bg-white rounded-xl p-6 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-10"
          >
            {/* Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EFEFE8] pb-4 text-xs font-mono text-[#787A72]">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#1E56A0] text-sm">02</span>
                <span>/</span>
                <span className="text-[#141413] font-semibold uppercase tracking-wider">
                  ENTERPRISE HEALTHCARE PLATFORM &bull; .NET 8 WEB API
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#2E6B47] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#2E6B47]" />
                <span>Active Production &bull; Subharti Hospital</span>
              </div>
            </div>

            {/* Title & Domain Summary */}
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] tracking-tight">
                Hospital Information System (HIS) &amp; Clinical Portal
              </h3>
              <p className="text-base text-[#4A4C46] font-normal">
                Outpatient registration kiosks, local flatbed scanner hardware bridge, in-campus pharmacy and automated multi-tier billing.
              </p>
            </div>

            {/* VISUAL COMPOSITION: HIS Clinical Modules */}
            <div className="pt-2">
              <HisSystemVisual />
            </div>

            {/* Structured Engineering Storytelling (Problem, Engineering, Result, Tech) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-sm border-t border-[#EFEFE8]">
              {/* Problem */}
              <div className="space-y-2 bg-[#FBFBF9] p-4 rounded-lg border border-[#EFEFE8]">
                <span className="font-mono text-xs uppercase tracking-wider text-rose-700 font-bold block">
                  The Problem
                </span>
                <p className="text-[#4A4C46] leading-relaxed text-xs sm:text-sm font-normal">
                  Outpatient clinics suffered from bottlenecked morning queues, paper prescriptions prone to doctor handwriting errors, and disconnected inventory between wards and in-campus pharmacy stores.
                </p>
              </div>

              {/* Engineering */}
              <div className="space-y-2 bg-[#FBFBF9] p-4 rounded-lg border border-[#EFEFE8]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#1E56A0] font-bold block">
                  The Engineering
                </span>
                <p className="text-[#4A4C46] leading-relaxed text-xs sm:text-sm font-normal">
                  Engineered OPD registration kiosks with automated UHID generation and barcode printing. Built <code className="text-[#1E56A0] font-mono text-xs">HIS.ScannerBridge</code> (a dedicated C# WebSocket service) interfacing Canon P-208II flatbeds directly with web EHR for prescription digitizing.
                </p>
              </div>

              {/* Result */}
              <div className="space-y-2 bg-[#FBFBF9] p-4 rounded-lg border border-[#EFEFE8]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#2E6B47] font-bold block">
                  The Result
                </span>
                <p className="text-[#4A4C46] leading-relaxed text-xs sm:text-sm font-normal">
                  Unified internal hospital portal streamlining patient check-in, prescription digitization, campus pharmacy stock verification, and provisional billing calculation engines.
                </p>
              </div>
            </div>

            {/* Interactive Technical Architecture Diagram */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#787A72] font-semibold block">
                Technical Architecture Flow (Hover node to inspect responsibility):
              </span>
              <HisArchitectureFlow />
            </div>

            {/* Tech Stack & Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EFEFE8]">
              <div className="flex flex-wrap gap-1.5">
                {["ASP.NET Core (.NET 8)", "C#", "EF Core 8", "SQL Server", "WebSockets", "Razor Pages", "Twilio SMS", "JWT Auth"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-[#383A35] bg-[#F3F3ED] border border-[#E5E5DE] px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(modalData.his)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#141413] hover:bg-[#1E56A0] rounded transition-all cursor-pointer shadow-sm"
              >
                <span>View case study &amp; details</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        </div>


        {/* ============================================================== */}
        {/* PROJECT 03: DISTRIBUTED SYSTEMS & TELEPHONY AI                 */}
        {/* ============================================================== */}
        <div id="project-secondary" className="scroll-mt-28 space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#E5E5DE] pb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#1E56A0] font-semibold block mb-1">
                Additional Engineering Work
              </span>
              <h3 className="text-2xl font-bold text-[#141413] tracking-tight">
                AI Telephony &amp; Distributed Microservices
              </h3>
            </div>
            <span className="text-xs font-mono text-[#787A72] hidden sm:inline">
              Verified Production &amp; Open Source Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Lucy - VoIP AI */}
            <div className="border border-[#E5E5DE] bg-white rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:border-[#1E56A0] transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#787A72]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#141413]">03</span>
                    <span>/</span>
                    <span className="text-[#1E56A0] font-semibold">VOIP &amp; TELEPHONY AI</span>
                  </div>
                  <span className="text-[#2E6B47] font-medium">Working Prototype</span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#141413] tracking-tight">
                    Lucy &mdash; Voice Hospital Assistant
                  </h4>
                  <p className="text-xs text-[#787A72] mt-0.5 font-mono">
                    Asterisk VoIP PBX &bull; Faster-Whisper &bull; LLaMA 3.3 &bull; Piper TTS
                  </p>
                </div>

                <p className="text-sm text-[#4A4C46] leading-relaxed">
                  Automated routine hospital supplier inventory inquiries over telephone lines. Integrates directly with an Asterisk PBX phone server, transcribing speech with Faster-Whisper, extracting purchase intent via LLaMA 3.3 on Groq, and synthesizing speech in real time with Piper TTS.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Python", "Asterisk PBX", "Groq API", "LLaMA 3.3", "Faster-Whisper", "Piper TTS"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-[#383A35] bg-[#F3F3ED] border border-[#E5E5DE] px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#EFEFE8] mt-6">
                <button
                  onClick={() => setSelectedProject(modalData.lucy)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E56A0] hover:underline cursor-pointer"
                >
                  <span>Technical details</span>
                  <ArrowRight size={12} />
                </button>

                <a
                  href="https://drive.google.com/file/d/1kbNnoNojtNPixl6MQc1vu2k2IXOv_BNj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#4A4C46] hover:text-[#141413]"
                >
                  <ExternalLink size={11} />
                  <span>Video Demo</span>
                </a>
              </div>
            </div>

            {/* SmartFleet - Microservices */}
            <div className="border border-[#E5E5DE] bg-white rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:border-[#1E56A0] transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#787A72]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#141413]">04</span>
                    <span>/</span>
                    <span className="text-[#1E56A0] font-semibold">DISTRIBUTED SYSTEMS</span>
                  </div>
                  <span className="text-[#787A72]">Open Source</span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#141413] tracking-tight">
                    SmartFleet &mdash; Microservices Logistics
                  </h4>
                  <p className="text-xs text-[#787A72] mt-0.5 font-mono">
                    .NET Microservices &bull; RabbitMQ &bull; YARP Reverse Proxy &bull; Docker
                  </p>
                </div>

                <p className="text-sm text-[#4A4C46] leading-relaxed">
                  Decoupled logistics platform handling concurrent vehicle GPS telemetry. Uses RabbitMQ message queues to buffer high-traffic bursts, Microsoft YARP API Gateway for dynamic route reverse proxying and authentication offloading, containerized with Docker.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[".NET Microservices", "RabbitMQ", "YARP Gateway", "Docker", "PostgreSQL", "React"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-[#383A35] bg-[#F3F3ED] border border-[#E5E5DE] px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#EFEFE8] mt-6">
                <button
                  onClick={() => setSelectedProject(modalData.smartfleet)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E56A0] hover:underline cursor-pointer"
                >
                  <span>Technical details</span>
                  <ArrowRight size={12} />
                </button>

                <a
                  href="https://github.com/devesh905/smartfleetWeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4A4C46] hover:text-[#141413]"
                >
                  <FaGithub size={13} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;