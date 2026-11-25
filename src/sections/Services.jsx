import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Server, Activity, Brain, ArrowUpRight, CheckCircle2 } from "lucide-react";

const BackendPipelineVisual = ({ isHovered, reduceMotion }) => (
  <div className="relative h-32 w-full overflow-hidden rounded-xl bg-[#171412] border border-[#2b2623] p-3.5 flex flex-col justify-between select-none">
    {/* Subtle technical grid */}
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundSize: "18px 18px",
        backgroundImage:
          "linear-gradient(to right, rgba(246,244,240,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(246,244,240,0.14) 1px, transparent 1px)",
      }}
    />
    {/* Accent ambient glow */}
    <div
      className={`absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
        isHovered ? "opacity-45" : "opacity-20"
      }`}
      style={{ background: "#ff4829" }}
    />

    {/* Top console status bar */}
    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#a8a29e]">
      <span className="flex items-center gap-1.5 text-[#f6f4f0]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4829] animate-pulse" />
        ASP.NET 8 // YARP
      </span>
      <span className="px-1.5 py-0.5 rounded bg-white/10 text-[#ff8a75] font-semibold">
        -45% DELTA
      </span>
    </div>

    {/* Node topology SVG */}
    <svg viewBox="0 0 260 54" fill="none" className="relative z-10 w-full h-14">
      {/* Connecting lines */}
      <path d="M46 27 H100" stroke="#44403c" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M160 27 H214" stroke="#44403c" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Animated data pulse */}
      {!reduceMotion && (
        <motion.circle
          r="2.8"
          fill="#ff4829"
          cy="27"
          animate={{ cx: [46, 100, 160, 214] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Node 1: API */}
      <rect x="8" y="13" width="42" height="28" rx="6" fill="#231f1c" stroke="#ff4829" strokeOpacity="0.65" />
      <text x="29" y="30" textAnchor="middle" fill="#f6f4f0" fontSize="8.5" fontFamily="monospace" fontWeight="600">
        API
      </text>

      {/* Node 2: Scope Factory */}
      <rect x="96" y="10" width="68" height="34" rx="7" fill="#292421" stroke="#f6f4f0" strokeOpacity="0.28" />
      <text x="130" y="25" textAnchor="middle" fill="#ff4829" fontSize="7.5" fontFamily="monospace" fontWeight="700">
        SCOPED DI
      </text>
      <text x="130" y="36" textAnchor="middle" fill="#a8a29e" fontSize="7" fontFamily="monospace">
        THREAD-SAFE
      </text>

      {/* Node 3: T-SQL */}
      <rect x="210" y="13" width="42" height="28" rx="6" fill="#231f1c" stroke="#f6f4f0" strokeOpacity="0.28" />
      <text x="231" y="30" textAnchor="middle" fill="#f6f4f0" fontSize="8.5" fontFamily="monospace" fontWeight="600">
        T-SQL
      </text>
    </svg>
  </div>
);

const TelemetryEcgVisual = ({ isHovered, reduceMotion }) => (
  <div className="relative h-32 w-full overflow-hidden rounded-xl bg-[#171412] border border-[#2b2623] p-3.5 flex flex-col justify-between select-none">
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundSize: "16px 16px",
        backgroundImage:
          "linear-gradient(to right, rgba(16,185,129,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.18) 1px, transparent 1px)",
      }}
    />
    <div
      className={`absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
        isHovered ? "opacity-40" : "opacity-20"
      }`}
      style={{ background: "#10b981" }}
    />

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#a8a29e]">
      <span className="flex items-center gap-1.5 text-[#f6f4f0]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
        SIGNALR // HL7 TCP
      </span>
      <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-[#6ee7b7] font-semibold">
        500HZ LIVE
      </span>
    </div>

    {/* Live ECG Waveform */}
    <svg viewBox="0 0 260 56" fill="none" className="relative z-10 w-full h-14">
      <path
        d="M0 34 H36 L44 28 L52 34 H66 L72 39 L80 10 L88 46 L94 34 H122 L130 28 L138 34 H154 L160 39 L168 10 L176 46 L182 34 H214 L222 28 L230 34 H260"
        stroke="#10b981"
        strokeOpacity="0.22"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M0 34 H36 L44 28 L52 34 H66 L72 39 L80 10 L88 46 L94 34 H122 L130 28 L138 34 H154 L160 39 L168 10 L176 46 L182 34 H214 L222 28 L230 34 H260"
        stroke="#34d399"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? false : { pathLength: 0.35, pathOffset: 0 }}
        animate={reduceMotion ? undefined : { pathOffset: [0, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

const AiVisionRlhfVisual = ({ isHovered, reduceMotion }) => (
  <div className="relative h-32 w-full overflow-hidden rounded-xl bg-[#171412] border border-[#2b2623] p-3.5 flex flex-col justify-between select-none">
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundSize: "18px 18px",
        backgroundImage:
          "linear-gradient(to right, rgba(167,139,250,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(167,139,250,0.16) 1px, transparent 1px)",
      }}
    />
    <div
      className={`absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
        isHovered ? "opacity-45" : "opacity-20"
      }`}
      style={{ background: "#8b5cf6" }}
    />

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#a8a29e]">
      <span className="flex items-center gap-1.5 text-[#f6f4f0]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
        CV MASK // RLHF
      </span>
      <span className="px-1.5 py-0.5 rounded bg-violet-500/15 text-[#c4b5fd] font-semibold">
        99.8% IAA
      </span>
    </div>

    {/* Segmentation polygon + RLHF scoring bars */}
    <div className="relative z-10 flex items-center justify-between gap-3 h-14">
      <svg viewBox="0 0 116 54" fill="none" className="w-32 h-14 shrink-0">
        {/* Bounding box */}
        <rect
          x="6"
          y="6"
          width="104"
          height="42"
          rx="4"
          stroke="#a78bfa"
          strokeOpacity="0.45"
          strokeDasharray="3 3"
        />
        {/* Polygon mask */}
        <motion.path
          d="M22 36 L38 14 L76 16 L94 34 L62 42 Z"
          fill="#8b5cf6"
          fillOpacity="0.24"
          stroke="#c4b5fd"
          strokeWidth="1.6"
          animate={
            reduceMotion
              ? undefined
              : { fillOpacity: isHovered ? [0.24, 0.42, 0.24] : 0.24 }
          }
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        {[
          [22, 36],
          [38, 14],
          [76, 16],
          [94, 34],
          [62, 42],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" fill="#171412" stroke="#c4b5fd" strokeWidth="1.5" />
        ))}
      </svg>

      {/* RLHF Preference ranking bars */}
      <div className="flex-1 space-y-1.5 font-mono text-[9px]">
        <div className="flex items-center justify-between text-[#d6d3d1]">
          <span>SFT-A</span>
          <span className="text-[#c4b5fd]">0.99</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#c4b5fd]"
            initial={{ width: "78%" }}
            animate={{ width: isHovered ? "96%" : "86%" }}
            transition={{ duration: 0.45 }}
          />
        </div>
        <div className="flex items-center justify-between text-[#78716c]">
          <span>AUDIT</span>
          <span>0 HALLUC.</span>
        </div>
      </div>
    </div>
  </div>
);

const capabilities = [
  {
    number: "01",
    title: "Backend & Distributed Systems",
    subtitle: "ASP.NET Core (.NET 8) & SQL Server",
    icon: Server,
    accent: "#ff4829",
    accentSoft: "bg-[#ff4829]/10 text-[#ff4829] border-[#ff4829]/25",
    surfaceTint: "from-white via-white to-[#fff5f2]",
    description:
      "Architecting enterprise-grade RESTful APIs and microservices with clean architecture, SOLID principles, and thread-safe dependency injection. Deep focus on high-throughput database schemas, stored procedure tuning, delta compression, and multi-tier RBAC security.",
    stack: [
      "ASP.NET Core / .NET 8",
      "C# (OOP & SOLID)",
      "EF Core & LINQ",
      "SQL Server (T-SQL)",
      "Microservices & YARP",
      "JWT & Role-Based Access",
    ],
    badge: "THREAD-SAFE .NET",
    metrics: "45% footprint reduction with Delta & GZip",
    Visual: BackendPipelineVisual,
  },
  {
    number: "02",
    title: "Real-Time Telemetry & Hardware",
    subtitle: "500Hz Streams & Medical Device Sockets",
    icon: Activity,
    accent: "#10b981",
    accentSoft: "bg-emerald-500/10 text-emerald-700 border-emerald-500/25",
    surfaceTint: "from-white via-white to-[#f2fbf7]",
    description:
      "Bridging the physical world with software. Ingesting raw byte streams from bedside hardware over TCP/IP and HL7, streaming 500Hz physiological waveforms via SignalR WebSockets, and engineering local loopback WebSocket services to integrate hardware scanners with web EHRs.",
    stack: [
      "SignalR & WebSockets",
      "TCP/IP Sockets",
      "HL7 Medical Protocols",
      "Hardware Bridges (C#)",
      "Delta Compression (32x)",
      "HTML5 Canvas Rendering",
    ],
    badge: "SUB-40MS LATENCY",
    metrics: "500Hz real-time ECG broadcast without packet drops",
    Visual: TelemetryEcgVisual,
  },
  {
    number: "03",
    title: "AI Model Training & Data Specialist",
    subtitle: "Multimodal Annotation & RLHF Curation",
    icon: Brain,
    accent: "#8b5cf6",
    accentSoft: "bg-violet-500/10 text-violet-700 border-violet-500/25",
    surfaceTint: "from-white via-white to-[#f6f3ff]",
    description:
      "Generalist expert training frontier AI models across diverse projects. End-to-end multimodal annotation (bounding boxes, polygon segmentation, temporal video action tagging) and rigorous RLHF evaluation (SFT prompt curation, preference ranking, and hallucination audits in code and STEM).",
    stack: [
      "Image & Video Annotation",
      "Polygon Segmentation & Bounding Boxes",
      "RLHF & SFT Prompt Curation",
      "Model Evaluation & Red-Teaming",
      "Groq LLaMA 3.3 & OpenAI",
      "Whisper STT & Asterisk VoIP",
    ],
    badge: "GENERALIST EXPERT",
    metrics: "99.8% Inter-Annotator Agreement (IAA) precision",
    Visual: AiVisionRlhfVisual,
  },
];

function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="systems"
      className="relative py-24 sm:py-32 border-b border-[#e2dad0] bg-[#f6f4f0] text-[#171412] overflow-hidden"
    >
      {/* Subtle architectural dot pattern matching editorial paper aesthetic */}
      <div className="absolute inset-0 bg-dot-paper opacity-75 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#e2dad0] pb-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#d6cebf] text-[#ff4829] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4829]" />
              <span>Core Engineering Disciplines</span>
            </div>
            <h2 className="text-3xl font-display font-black text-[#171412] sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              What I deliver to engineering teams.
            </h2>
            <p className="mt-4 text-base text-[#57534e] sm:text-lg leading-relaxed font-normal">
              Proven competence across mission-critical backends, live hardware telemetry, and frontier AI model training.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 self-start lg:self-end px-4 py-2 rounded-full bg-[#efe9df] border border-[#d6cebf] text-xs font-mono text-[#57534e] font-medium">
            <span className="text-[#171412] font-semibold">03 Disciplines</span>
            <span className="text-[#d6cebf]">|</span>
            <span>Production &amp; Frontier AI</span>
          </div>
        </div>

        {/* 3 Signature Editorial-Tech Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {capabilities.map((cap, idx) => {
            const isHovered = hoveredIdx === idx;
            const IconComponent = cap.icon;
            const VisualPreview = cap.Visual;

            return (
              <motion.article
                key={cap.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24, delay: idx * 0.06 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  borderColor: isHovered ? cap.accent : "#ddd4c7",
                  boxShadow: isHovered
                    ? `0 20px 44px -12px rgba(23,20,18,0.14), 0 0 0 1px ${cap.accent}33`
                    : "0 4px 18px rgba(23,20,18,0.04)",
                }}
                className={`group relative overflow-hidden rounded-[1.75rem] border bg-gradient-to-b ${cap.surfaceTint} flex flex-col justify-between transition-colors duration-300`}
              >
                {/* Top Accent Hairline */}
                <div
                  className="h-1 w-full transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${cap.accent}, transparent)`,
                    opacity: isHovered ? 1 : 0.45,
                  }}
                />

                <div className="p-6 sm:p-7 flex-1 flex flex-col space-y-5">
                  {/* Top Bar: Outlined/Bold Index + Status Pill */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-3xl font-black font-display tracking-tighter transition-transform duration-300 group-hover:scale-105"
                        style={{ color: cap.accent }}
                      >
                        {cap.number}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#77716e]">
                        / 03
                      </span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold uppercase tracking-wider ${cap.accentSoft}`}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: cap.accent }}
                      />
                      {cap.badge}
                    </span>
                  </div>

                  {/* Interactive Dark Telemetry / Console Preview */}
                  <VisualPreview isHovered={isHovered} reduceMotion={reduceMotion} />

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2.5">
                      <div
                        className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-[#e2dad0] bg-[#f6f4f0] transition-colors duration-300"
                        style={{
                          color: cap.accent,
                          borderColor: isHovered ? `${cap.accent}55` : "#e2dad0",
                        }}
                      >
                        <IconComponent size={16} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#171412] tracking-tight leading-snug">
                          {cap.title}
                        </h3>
                        <span className="text-xs sm:text-sm font-sans font-medium text-[#77716e] block mt-0.5">
                          {cap.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#57534e] leading-relaxed font-normal">
                    {cap.description}
                  </p>

                  {/* Stack Tags */}
                  <div className="space-y-2 pt-1 mt-auto">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#77716e] block font-semibold">
                      Key Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.stack.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-mono font-medium text-[#171412] bg-[#efe9df]/80 border border-[#dfd6c7] px-2.5 py-1 rounded-full transition-colors duration-200 hover:bg-[#171412] hover:text-[#f6f4f0] hover:border-[#171412] cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Verified Outcome Strip */}
                <div className="px-6 sm:px-7 py-4 bg-[#efe9df]/70 border-t border-[#e2dad0] flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-[#171412] font-semibold flex items-center gap-2 min-w-0">
                    <CheckCircle2 size={14} style={{ color: cap.accent }} className="shrink-0" />
                    <span className="leading-snug">{cap.metrics}</span>
                  </span>
                  <a
                    href="#projects"
                    aria-label={`Inspect ${cap.title} systems`}
                    className="w-7 h-7 rounded-full bg-white border border-[#d6cebf] flex items-center justify-center text-[#171412] shrink-0 transition-all duration-300 group-hover:bg-[#171412] group-hover:text-white group-hover:border-[#171412]"
                  >
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
