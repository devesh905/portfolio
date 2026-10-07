import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { ArrowRight, ExternalLink } from "lucide-react";
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
      "Intensive care units need instant vitals. Polling introduced clinical delay, while uncompressed streams from bedside monitors (Mindray & Comen) clogged hospital networks and caused DbContext concurrency crashes under parallel load.",
    description:
      "I built the real-time telemetry pipeline using ASP.NET Core and SignalR to stream 500Hz live ECG waveforms. Designed a custom delta compression algorithm cutting bandwidth by 25–45x without losing signal quality. Fixed EF Core multithreading deadlocks using IServiceScopeFactory, and integrated TCP/IP and HL7 parsing to normalize hardware monitor feeds.",
    tech: ["ASP.NET Core", "C#", "SignalR", "HL7 Protocols", "TCP/IP Sockets", "SQL Server", "WebSockets"],
    highlights: [
      "Live ECG waveform streaming at 500Hz synchronization rate using SignalR",
      "Custom delta compression reduced telemetry bandwidth by up to 25–45x",
      "Eliminated EF Core concurrency crashes via IServiceScopeFactory scope isolation",
      "Unified HL7 and TCP/IP parsing normalizing Mindray and Comen hardware feeds",
      "UHID normalization routine preventing patient record corruption at ingestion",
      "Automated 7-day data retention purge routine with IST cutoff logic",
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
    tag: "HOSPITAL EHR PLATFORM",
    title: "Hospital Information System (HIS)",
    subtitle: "OPD registration kiosks, hardware scanner bridge, campus pharmacy & billing",
    role: "Full-Stack & .NET 8 Developer at Subharti Hospital",
    status: "Active Production Deployment",
    problem:
      "Outpatient clinics faced morning bottlenecks, handwritten paper prescriptions couldn't be indexed, and pharmacy stock was disconnected from billing.",
    description:
      "Contributed to the multi-module hospital platform built on ASP.NET Core (.NET 8) and SQL Server. Implemented OPD self-registration kiosks with instant UHID barcode cards, built HIS.ScannerBridge (a local C# WebSocket service linking Canon flatbed scanners to the web EHR for OCR digitization), and developed the campus pharmacy stock and billing engine.",
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
    tag: "VOIP & AI",
    title: "Lucy — Voice Hospital Assistant",
    subtitle: "Automating routine supplier phone inquiries over Asterisk VoIP PBX",
    role: "Systems Developer (Personal Project & Pilot)",
    status: "Working Prototype",
    problem:
      "Procurement staff spent hours answering repetitive phone calls about supplier orders. Web chatbots didn't help staff relying on desk phones.",
    description:
      "Built an end-to-end voice assistant integrated with an Asterisk VoIP PBX server. Audio is transcribed using Faster-Whisper, mapped to order queries via LLaMA 3.3 on Groq, and converted to speech in real time with Piper TTS.",
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
    tag: "DISTRIBUTED SERVICES",
    title: "SmartFleet — Microservices Logistics",
    subtitle: "Event-driven fleet tracking with RabbitMQ and YARP",
    role: "Full-Stack Developer (Open Source)",
    status: "Open Source Codebase",
    problem:
      "Central APIs choke when hundreds of delivery vehicles concurrently push GPS coordinates and trip updates.",
    description:
      "Built a decoupled .NET microservices architecture separating Auth, Vehicles, and Telemetry. Used RabbitMQ for async message buffering during traffic spikes and Microsoft YARP API Gateway for dynamic routing and auth offloading.",
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

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-[#E5E5DE] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#E5E5DE]">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E56A0] text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight leading-tight">
            Systems I've built.
          </h2>
          <p className="text-base sm:text-lg text-[#4A4C46] leading-relaxed">
            Production backend systems, real-time telemetry pipelines, and healthcare workflows.
          </p>
        </div>


        {/* ============================================================== */}
        {/* PROJECT 01: DIGITAL ICU (CLEAN & DIRECT ARCHITECTURAL CARD)    */}
        {/* ============================================================== */}
        <div id="project-icu" className="scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border border-[#E5E5DE] bg-white rounded-xl p-6 sm:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:border-[#1E56A0] transition-colors space-y-6"
          >
            {/* Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EFEFE8] pb-4 text-xs font-mono text-[#787A72]">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#1E56A0] text-sm">01</span>
                <span>/</span>
                <span className="text-[#141413] font-semibold uppercase tracking-wider">
                  REAL-TIME ICU TELEMETRY
                </span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>In Production &bull; Subharti Hospital</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Main Information (Col 7) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight">
                    Digital ICU Management System
                  </h3>
                  <p className="text-sm font-mono text-[#1E56A0] mt-1 font-medium">
                    ASP.NET Core &bull; SignalR &bull; HL7 &amp; TCP/IP &bull; SQL Server
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
                  Engineered the real-time telemetry pipeline to stream 500Hz bedside ECG waveforms with sub-40ms latency directly to doctors' monitoring stations. Designed a custom delta compression algorithm that reduced network bandwidth by 25–45x, and normalized raw HL7 and TCP/IP data packets from Mindray and Comen bedside hardware monitors.
                </p>

                {/* What I Specifically Built */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141413] block">
                    What I Built:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#383A35]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E56A0] font-bold mt-0.5">&bull;</span>
                      <span><strong>500Hz Stream Pipeline:</strong> High-frequency live waveform transmission using SignalR WebSockets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E56A0] font-bold mt-0.5">&bull;</span>
                      <span><strong>Custom Delta Compression:</strong> Slashed packet size by 25–45x to eliminate hospital network saturation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E56A0] font-bold mt-0.5">&bull;</span>
                      <span><strong>Hardware Normalization:</strong> Integrated TCP/IP sockets and HL7 parsers for multi-vendor bedside monitors.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E56A0] font-bold mt-0.5">&bull;</span>
                      <span><strong>Concurrency Fixes:</strong> Resolved multi-threaded EF Core database deadlocks via scoped service factories.</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {["C#", "ASP.NET Core", "SignalR", "HL7 Protocols", "TCP/IP Sockets", "SQL Server", "WebSockets"].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-[#383A35] bg-[#F3F3ED] border border-[#E5E5DE] px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Metrics & Actions (Col 5) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Metric Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-[#EFEFE8] bg-[#FBFBF9] p-4 rounded-lg">
                    <div className="text-2xl font-bold font-mono text-[#1E56A0]">500Hz</div>
                    <div className="text-xs text-[#787A72] font-mono mt-1">Live ECG Stream</div>
                  </div>
                  <div className="border border-[#EFEFE8] bg-[#FBFBF9] p-4 rounded-lg">
                    <div className="text-2xl font-bold font-mono text-emerald-600">32x</div>
                    <div className="text-xs text-[#787A72] font-mono mt-1">Bandwidth Saved</div>
                  </div>
                  <div className="border border-[#EFEFE8] bg-[#FBFBF9] p-4 rounded-lg">
                    <div className="text-2xl font-bold font-mono text-[#141413]">&lt;40ms</div>
                    <div className="text-xs text-[#787A72] font-mono mt-1">Render Latency</div>
                  </div>
                  <div className="border border-[#EFEFE8] bg-[#FBFBF9] p-4 rounded-lg">
                    <div className="text-2xl font-bold font-mono text-emerald-600">24/7</div>
                    <div className="text-xs text-[#787A72] font-mono mt-1">Active ICU Wards</div>
                  </div>
                </div>

                {/* Action Card */}
                <div className="border border-[#EFEFE8] bg-[#FBFBF9] p-5 rounded-lg space-y-3">
                  <button
                    onClick={() => setSelectedProject(modalData.icu)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#141413] hover:bg-[#1E56A0] rounded transition-all cursor-pointer shadow-sm"
                  >
                    <span>View Case Study &amp; Technical Details</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href="https://drive.google.com/drive/folders/1GtrDW4wUPRUL6aCzeLuE9SaTgRE_qIOt?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#141413] hover:text-[#1E56A0] border border-[#D5D5CE] hover:border-[#1E56A0] bg-white rounded transition-all"
                  >
                    <ExternalLink size={13} />
                    <span>View Demo Drive Folder</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>


        {/* ============================================================== */}
        {/* PROJECT 02: HOSPITAL INFORMATION SYSTEM (CLEAN & DIRECT CARD)  */}
        {/* ============================================================== */}
        <div id="project-his" className="scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border border-[#E5E5DE] bg-white rounded-xl p-6 sm:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:border-[#1E56A0] transition-colors space-y-6"
          >
            {/* Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EFEFE8] pb-4 text-xs font-mono text-[#787A72]">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#1E56A0] text-sm">02</span>
                <span>/</span>
                <span className="text-[#141413] font-semibold uppercase tracking-wider">
                  HOSPITAL EHR PLATFORM // .NET 8
                </span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>In Production &bull; Subharti Hospital</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Main Information (Col 7) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight">
                    Hospital Information System (HIS)
                  </h3>
                  <p className="text-sm font-mono text-[#1E56A0] mt-1 font-medium">
                    ASP.NET Core (.NET 8) &bull; EF Core 8 &bull; SQL Server &bull; WebSockets &bull; Razor Pages
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
                  Developed core operational modules for Subharti Hospital, replacing manual paper bottlenecks with digital workflows. Implemented self-service OPD kiosks, engineered a native hardware bridge service to stream scanner documents into web records, and built the campus pharmacy inventory and billing pipeline.
                </p>

                {/* What I Specifically Built */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141413] block">
                    What I Built:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#383A35]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E56A0] font-bold mt-0.5">&bull;</span>
                      <span><strong>OPD Check-In Kiosks:</strong> Self-registration kiosk engine with automatic UHID creation and thermal barcode printing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E56A0] font-bold mt-0.5">&bull;</span>
                      <span><strong>HIS.ScannerBridge:</strong> Local C# WebSocket service bridging physical Canon scanners with the web EHR for OCR digitization.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E56A0] font-bold mt-0.5">&bull;</span>
                      <span><strong>Pharmacy Stock &amp; Billing:</strong> Campus pharmacy management tracking real-time medicine batches, pricing, and automated checkout.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E56A0] font-bold mt-0.5">&bull;</span>
                      <span><strong>EHR &amp; Queue Management:</strong> Automated token displays, diagnostic report attachment, and role-based staff permissions.</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {["ASP.NET Core (.NET 8)", "C#", "EF Core 8", "SQL Server", "WebSockets", "Razor Pages", "Twilio SMS", "JWT Auth"].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-[#383A35] bg-[#F3F3ED] border border-[#E5E5DE] px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Metrics & Actions (Col 5) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Metric Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-[#EFEFE8] bg-[#FBFBF9] p-4 rounded-lg">
                    <div className="text-2xl font-bold font-mono text-[#1E56A0]">Instant</div>
                    <div className="text-xs text-[#787A72] font-mono mt-1">UHID &amp; Barcode Card</div>
                  </div>
                  <div className="border border-[#EFEFE8] bg-[#FBFBF9] p-4 rounded-lg">
                    <div className="text-2xl font-bold font-mono text-emerald-600">Native C#</div>
                    <div className="text-xs text-[#787A72] font-mono mt-1">Hardware Scanner Bridge</div>
                  </div>
                  <div className="border border-[#EFEFE8] bg-[#FBFBF9] p-4 rounded-lg">
                    <div className="text-2xl font-bold font-mono text-[#141413]">Unified</div>
                    <div className="text-xs text-[#787A72] font-mono mt-1">Pharmacy &amp; Billing</div>
                  </div>
                  <div className="border border-[#EFEFE8] bg-[#FBFBF9] p-4 rounded-lg">
                    <div className="text-2xl font-bold font-mono text-emerald-600">Active</div>
                    <div className="text-xs text-[#787A72] font-mono mt-1">Hospital OPD Daily</div>
                  </div>
                </div>

                {/* Action Card */}
                <div className="border border-[#EFEFE8] bg-[#FBFBF9] p-5 rounded-lg space-y-3">
                  <button
                    onClick={() => setSelectedProject(modalData.his)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#141413] hover:bg-[#1E56A0] rounded transition-all cursor-pointer shadow-sm"
                  >
                    <span>View Case Study &amp; Technical Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>


        {/* ============================================================== */}
        {/* MORE ENGINEERING WORK: LUCY & SMARTFLEET                      */}
        {/* ============================================================== */}
        <div id="project-secondary" className="scroll-mt-28 space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#E5E5DE] pb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#1E56A0] font-semibold block mb-1">
                More Engineering Work
              </span>
              <h3 className="text-2xl font-bold text-[#141413] tracking-tight">
                VoIP AI &amp; Distributed Systems
              </h3>
            </div>
            <span className="text-xs font-mono text-[#787A72] hidden sm:inline">
              Personal Projects &amp; Open Source
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
                  Built an AI voice assistant connected to an Asterisk VoIP PBX phone server. Automatically answers routine supplier calls, transcribing audio with Faster-Whisper, extracting purchase order queries with LLaMA 3.3, and replying in real time with Piper TTS.
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
                  Built an event-driven logistics platform for high-concurrency GPS telemetry. Uses RabbitMQ to buffer vehicle position bursts and Microsoft YARP API Gateway for dynamic routing, rate limiting, and auth offloading.
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
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#4A4C46] hover:text-[#141413]"
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