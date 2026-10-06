import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { ArrowUpRight, Check } from "lucide-react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    number: "01",
    tag: "FLAGSHIP ENTERPRISE HEALTHCARE PLATFORM",
    title: "Hospital Information System (HIS) & Clinical Portal",
    subtitle: "Enterprise Hospital Management, OPD Registration, Doctor AI Prescription Scanner Bridge, Multi-Store Pharmacy & Billing Engine",
    role: "Full-Stack & .NET 8 Developer at Subharti Hospital",
    status: "Active Production Deployment",
    problem:
      "Large-scale university hospital operations suffered from bottlenecked outpatient queues, fragmented paper prescriptions prone to illegibility, manual campus pharmacy inventory checks, and disjointed billing across OPD and IPD departments. Clinicians and hospital staff required a unified, high-speed digital hospital portal.",
    description:
      "Architected and deployed a multi-module Hospital Information System (HIS) using ASP.NET Core (.NET 8 Web API + Razor Web), Entity Framework Core, and SQL Server. Engineered high-throughput Patient OPD Registration with real-time UHID generation and OPD card printing, built an AI Prescription Scanner interface with a dedicated local C# hardware bridge (HIS.ScannerBridge), implemented an In-Campus Pharmacy Stock Manager with live medicine booking, and delivered integrated diagnostic Smart Lab Reports and automated multi-tier billing engines.",
    tech: ["ASP.NET Core (.NET 8)", "C#", "EF Core 8", "SQL Server", "WebSockets / Hardware Bridge", "AI OCR & Analytics", "Razor Pages", "Twilio SMS", "RESTful APIs", "JWT Auth", "Swagger"],
    highlights: [
      "Rapid Patient OPD Registration & Self-Kiosk with automated UHID generation and OPD card printing",
      "Doctor Prescription AI Scanner with dedicated local hardware bridge (HIS.ScannerBridge) connecting physical scanners",
      "AI-assisted prescription digitizing and prescription analytics dashboard for clinicians",
      "In-Campus Medicine Store manager tracking live inventory across pharmacy stores with delivery dispatch",
      "Smart Lab Reports with automated diagnostic reference ranges, procedure reports, and discharge summaries",
      "Comprehensive patient billing engine covering OPD, IPD package billing, and provisional estimates",
    ],
    features: [
      "Patient OPD Registration & Self-New Register portal with instant doctor appointment assignment",
      "Hardware Scanner Bridge (C# local loopback WebSocket service) streaming scanned prescription documents into web EHR",
      "AI Prescription Scan Analytics & VIPHA telemetry for prescription verification and drug safety",
      "Multi-store Campus Pharmacy Stock Manager with live medicine pricing and availability lookup",
      "Employee & Doctor dashboard: Doctor Schedule Manager, package service registers, and health camp admin",
      "Role-based secure JWT authentication, encrypted audit logging, and automated SMS notifications via Twilio",
    ],
    demo: null,
    github: null,
    archDetails: {
      title: "HIS Enterprise Architectural Pipeline",
      subtitle: ".NET 8 Web API + Hardware Bridge + AI Ingestion",
      stages: [
        {
          label: "STAGE 1: PATIENT INGESTION & OPD",
          sub: "UHID Engine & Kiosks",
          title: "OPD Registration & Self-Kiosk",
          desc: "Real-time demographic validation, automated UHID issuance, and barcode OPD card generation.",
        },
        {
          label: "STAGE 2: HARDWARE & AI SCANNER",
          sub: "Local Bridge & AI OCR",
          title: "HIS.ScannerBridge + AI Analytics",
          desc: "C# local loopback WebSocket bridge interfacing physical scanners with web portal for AI prescription digitizing.",
        },
        {
          label: "STAGE 3: PHARMACY & INVENTORY",
          sub: "Multi-Store Stock",
          title: "Campus Pharmacy Store Manager",
          desc: "Real-time stock query across campus stores, medicine booking, price checks, and ward delivery dispatch.",
        },
        {
          label: "STAGE 4: CLINICAL DIAGNOSTICS & BILLING",
          sub: "Smart Reports & Ledger",
          title: "Diagnostic Lab Reports & Billing Engine",
          desc: "Automated reference range analysis, procedure logs, IPD packages, and provisional bills.",
        },
      ],
      footerNote: "Active production system powering day-to-day outpatient clinics, doctor consultations, and hospital pharmacy operations.",
    },
  },
  {
    id: 2,
    number: "02",
    tag: "REAL-TIME TELEMETRY (500Hz STREAM)",
    title: "Digital ICU Management System",
    subtitle: "High-Frequency Medical Device Telemetry & Bedside ICU Monitoring Panel",
    role: "Jr. Software Developer at Subharti Hospital",
    status: "Active Production Deployment",
    problem:
      "Intensive care units rely on rapid notification of critical patient vitals. Standard HTTP polling introduces unacceptable latency, while uncompressed telemetry from continuous bedside monitors (Mindray & Comen) can congest hospital networks with repetitive packets and trigger concurrency deadlocks in naive database contexts.",
    description:
      "Architected a real-time medical monitoring platform integrating intensive care devices via TCP/IP sockets and HL7 protocol. Engineered 500Hz live ECG waveform streaming with custom delta-encoded compression achieving a 25–45x reduction in bandwidth. Solved EF Core DbContext concurrency crashes during parallel stream decompression by designing an isolated chunk loader using IServiceScopeFactory.",
    tech: ["ASP.NET Core", "C#", "SignalR", "HL7 Protocols", "TCP/IP Sockets", "SQL Server", "WebSockets"],
    highlights: [
      "Live ECG waveform streaming at 500Hz synchronization rate",
      "Custom delta-encoded compression reduced telemetry bandwidth by up to 45x",
      "Eliminated EF Core concurrency crashes via IServiceScopeFactory scope isolation",
      "Unified HL7 + TCP/IP ingestion normalizing Mindray & Comen hardware feeds",
      "Built UHID normalization service preventing record corruption at ingestion",
      "Implemented automated 7-day purge strategy with IST-aware cutoff logic",
    ],
    features: [
      "Real-time clinical patient monitoring dashboard with custom chart renderers",
      "Event-driven alert dispatch & critical threshold notifications for ICU teams",
      "Role-based secure authentication and HIPAA-conscious audit logging in SQL Server",
      "Resilient reconnect and offline telemetry cache buffering for hospital networks",
    ],
    demo: "https://drive.google.com/drive/folders/1GtrDW4wUPRUL6aCzeLuE9SaTgRE_qIOt?usp=sharing",
    github: null,
    archDetails: {
      title: "Telemetry Architecture Blueprint",
      subtitle: "500Hz Stream Protocol",
      stages: [
        {
          label: "STAGE 1: HARDWARE LAYER",
          sub: "TCP / HL7",
          title: "Mindray & Comen ICU Bedside Monitors",
          desc: "Unified parsing layer normalizing dissimilar raw packet structures.",
        },
        {
          label: "STAGE 2: COMPRESSION",
          sub: "25–45x Delta",
          title: "Custom Delta-Encoded Compression",
          desc: "Reduced continuous vital sign bandwidth without signal resolution loss.",
        },
        {
          label: "STAGE 3: CONCURRENCY GUARD",
          sub: "ASP.NET Core",
          title: "IServiceScopeFactory Chunk Loader",
          desc: "Eliminated EF Core DbContext multi-thread access crashes during parallel decompression.",
        },
        {
          label: "STAGE 4: PRESENTATION",
          sub: "SignalR & WebSockets",
          title: "Clinician Live Monitoring Dashboard",
          desc: "Smooth waveform visualizer, alert dispatch & UHID normalized records.",
        },
      ],
      footerNote: "Deployed and maintained in high-acuity hospital ward with automated 7-day retention purge routines.",
    },
  },
  {
    id: 3,
    number: "03",
    tag: "VOIP & TELEPHONY AI",
    title: "Lucy — Voice-Enabled Hospital Assistant",
    subtitle: "Automated VoIP PBX phone inquiries & procurement workflows",
    role: "Systems Developer",
    status: "Production Pilot",
    problem:
      "Hospital procurement staff spent extensive hours handling repetitive phone calls for routine inventory inquiries and vendor order status. Standard web chatbots were inaccessible to warehouse staff using traditional desk phones.",
    description:
      "Built an end-to-end voice AI assistant that interfaces directly with an Asterisk VoIP PBX telephone server. Inbound audio is transcribed via Faster-Whisper, mapped to procurement actions using LLaMA 3.3 via Groq, and converted back into natural speech in real time with Piper neural TTS.",
    tech: ["Python", "Asterisk PBX", "Groq API", "LLaMA 3.3", "Faster-Whisper", "Piper TTS"],
    highlights: [
      "Low-latency speech-to-text pipeline over live VoIP phone connections",
      "Direct Asterisk PBX integration automating routine supplier calls",
      "LLaMA 3.3 intent classification extracting structured procurement queries",
      "Near-instant audio synthesis using neural Piper TTS engine",
    ],
    features: [
      "Whisper-powered speech-to-text recognition fine-tuned for healthcare supplies",
      "Structured purchase order intent extraction and stock level verification",
      "Call transcription audit logs and clinician inquiry history",
    ],
    demo: "https://drive.google.com/file/d/1kbNnoNojtNPixl6MQc1vu2k2IXOv_BNj/view?usp=sharing",
    github: null,
  },
  {
    id: 4,
    number: "04",
    tag: "DISTRIBUTED SYSTEMS",
    title: "SmartFleet — Microservices Logistics Platform",
    subtitle: "Event-driven fleet tracking & dispatch with RabbitMQ and YARP",
    role: "Full-Stack Architect",
    status: "Open Source Codebase",
    problem:
      "Monolithic logistics platforms degrade under heavy telemetry ingest when hundreds of delivery vehicles concurrently push GPS coordinates, trip updates, and status messages to a central API.",
    description:
      "Designed a distributed .NET microservices platform decoupling Auth, Vehicles, Trips, and Telemetry services. Leveraged RabbitMQ message queuing to absorb bursty tracking events and Microsoft YARP API Gateway for dynamic routing, authentication offloading, and SSL termination.",
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
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const flagshipProjects = projects.slice(0, 2);
  const secondaryProjects = projects.slice(2);

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-[#E5E5DE] bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-wider text-[#183654] font-semibold block mb-2.5">
            01 &mdash; Selected Engineering Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#141413] tracking-tight leading-tight mb-4">
            Real systems built for production constraints.
          </h2>
          <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
            Detailed case studies showcasing architecture, data protocols, hardware integration, concurrency management, and real problem-solving from production hospital environments.
          </p>
        </div>

        {/* FLAGSHIP CASE STUDIES: Expansive Editorial Showcases */}
        <div className="space-y-12 mb-14">
          {flagshipProjects.map((featured) => (
            <motion.div
              key={featured.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-[#E5E5DE] bg-white rounded-lg p-6 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Case Breakdown */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#787A72] mb-2">
                      <span className="font-bold text-[#141413]">{featured.number}</span>
                      <span>/</span>
                      <span className="text-[#183654] font-semibold">{featured.tag}</span>
                      <span>&bull;</span>
                      <span>{featured.role}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight">
                      {featured.title}
                    </h3>
                    <p className="text-sm text-[#787A72] font-normal mt-1 leading-snug">
                      {featured.subtitle}
                    </p>
                  </div>

                  {/* Problem statement */}
                  <div className="space-y-1.5 pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#787A72] font-semibold block">
                      The Problem &amp; Operational Context
                    </span>
                    <p className="text-xs sm:text-sm text-[#4A4C46] leading-relaxed">
                      {featured.problem}
                    </p>
                  </div>

                  {/* Architectural Solution */}
                  <div className="space-y-1.5 pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#787A72] font-semibold block">
                      Architectural Solution &amp; Engineering Decisions
                    </span>
                    <p className="text-xs sm:text-sm text-[#4A4C46] leading-relaxed">
                      {featured.description}
                    </p>
                  </div>

                  {/* Concrete Verified Achievements */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#183654] font-semibold block">
                      Key Technical Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#383A35]">
                      {featured.highlights.slice(0, 4).map((h) => (
                        <div key={h} className="flex items-start gap-2 bg-[#FBFBF9] border border-[#EFEFE8] p-2.5 rounded">
                          <Check size={14} className="text-[#183654] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono font-medium text-[#141413] bg-[#F3F3ED] border border-[#E5E5DE] px-2.5 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#EFEFE8]">
                    <button
                      onClick={() => setSelectedProject(featured)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#141413] hover:bg-[#2A2B29] rounded transition-all cursor-pointer"
                    >
                      <span>Read Full Technical Case Study</span>
                      <ArrowUpRight size={13} />
                    </button>

                    {featured.demo && (
                      <a
                        href={featured.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#141413] border border-[#D5D5CE] hover:border-[#141413] bg-white rounded transition-all"
                      >
                        <FaExternalLinkAlt size={11} />
                        <span>View Demo Folder</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Architecture Blueprint Diagram (Dynamically Driven) */}
                <div className="lg:col-span-5 border border-[#E5E5DE] bg-[#F9F9F6] rounded-lg p-5 sm:p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-[#E5E5DE] pb-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#141413]">
                      {featured.archDetails.title}
                    </span>
                    <span className="font-mono text-[11px] text-[#183654] font-semibold">
                      {featured.archDetails.subtitle}
                    </span>
                  </div>

                  {/* Architectural Step Diagram */}
                  <div className="space-y-3 font-mono text-xs">
                    {featured.archDetails.stages.map((stg, sIdx) => (
                      <div key={stg.label}>
                        <div className="border border-[#E5E5DE] bg-white p-3 rounded space-y-1">
                          <div className="flex items-center justify-between text-[11px] text-[#787A72]">
                            <span>{stg.label}</span>
                            <span className="text-[#183654] font-semibold">{stg.sub}</span>
                          </div>
                          <div className="font-sans font-semibold text-[#141413]">
                            {stg.title}
                          </div>
                          <div className="text-[11px] text-[#62645D]">
                            {stg.desc}
                          </div>
                        </div>

                        {sIdx < featured.archDetails.stages.length - 1 && (
                          <div className="flex justify-center text-[#787A72] my-1 text-[11px]">
                            &darr;
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#E5E5DE] text-[11px] text-[#787A72] leading-relaxed">
                    {featured.archDetails.footerNote}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* SECONDARY PROJECTS: Editorial 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-[#E5E5DE] bg-white rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#C8C8BE] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#787A72]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#141413]">{proj.number}</span>
                    <span>/</span>
                    <span className="text-[#183654] font-semibold">{proj.tag}</span>
                  </div>
                  <span className="text-[#787A72]">{proj.status}</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#787A72] font-normal mt-1">
                    {proj.subtitle}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase text-[#787A72] font-semibold block">
                    Problem &amp; Context
                  </span>
                  <p className="text-xs text-[#4A4C46] leading-relaxed">
                    {proj.problem}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase text-[#787A72] font-semibold block">
                    Architecture
                  </span>
                  <p className="text-xs text-[#4A4C46] leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono font-medium text-[#141413] bg-[#F3F3ED] border border-[#E5E5DE] px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer actions */}
              <div className="flex items-center justify-between pt-6 border-t border-[#EFEFE8] mt-6">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183654] hover:underline cursor-pointer"
                >
                  <span>View Technical Specs</span>
                  <ArrowUpRight size={13} />
                </button>

                <div className="flex items-center gap-3">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#4A4C46] hover:text-[#141413]"
                    >
                      <FaGithub size={13} />
                      <span>Code</span>
                    </a>
                  )}

                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#4A4C46] hover:text-[#141413]"
                    >
                      <FaExternalLinkAlt size={11} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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