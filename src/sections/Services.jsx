import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const BackendPipelineVisual = ({ isHovered, reduceMotion, stack }) => (
  <div className="relative h-[190px] w-full overflow-hidden rounded-t-2xl bg-[#faf8f5] border border-b-0 border-white/40 px-4 pt-3 pb-3 flex flex-col justify-between select-none shadow-2xl transition-transform duration-500 origin-bottom group-hover:scale-[1.04]">
    {/* Subtle dot matrix background */}
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        backgroundSize: "14px 14px",
        backgroundImage:
          "radial-gradient(circle, rgba(70,100,130,0.18) 1px, transparent 1px)",
      }}
    />
    <div
      className={`absolute -right-6 -top-6 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
        isHovered ? "opacity-35" : "opacity-15"
      }`}
      style={{ background: "#ff4829" }}
    />

    {/* Window Topbar */}
    <div className="relative z-10 flex items-center justify-between pb-2 border-b border-[#e9e3d8] text-[10px] font-mono text-[#57534e]">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
        <span className="ml-1.5 font-bold text-[#171412] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4829] animate-pulse" />
          ASP.NET 8 // YARP
        </span>
      </div>
      <span className="px-2 py-0.5 rounded-full bg-[#ff4829]/10 text-[#d83518] border border-[#ff4829]/20 font-bold">
        -45% DELTA
      </span>
    </div>

    {/* Interactive Pipeline Diagram */}
    <svg viewBox="0 0 260 44" fill="none" className="relative z-10 w-full h-14 my-auto">
      <path d="M46 22 H100" stroke="#d5ccc0" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M160 22 H214" stroke="#d5ccc0" strokeWidth="1.5" strokeDasharray="3 3" />

      {!reduceMotion && (
        <motion.circle
          r="3"
          fill="#ff4829"
          cy="22"
          animate={{ cx: [46, 100, 160, 214] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
      )}

      <rect x="8" y="10" width="42" height="24" rx="6" fill="#ffffff" stroke="#e2d9cd" strokeWidth="1.5" />
      <text x="29" y="25" textAnchor="middle" fill="#171412" fontSize="9" fontFamily="monospace" fontWeight="700">
        API
      </text>

      <rect x="94" y="8" width="70" height="28" rx="6" fill="#ffffff" stroke="#ff4829" strokeWidth="1.5" />
      <text x="129" y="20" textAnchor="middle" fill="#d83518" fontSize="7.5" fontFamily="monospace" fontWeight="800">
        SCOPED DI
      </text>
      <text x="129" y="30" textAnchor="middle" fill="#57534e" fontSize="6.5" fontFamily="monospace" fontWeight="600">
        THREAD-SAFE
      </text>

      <rect x="210" y="10" width="42" height="24" rx="6" fill="#ffffff" stroke="#e2d9cd" strokeWidth="1.5" />
      <text x="231" y="25" textAnchor="middle" fill="#171412" fontSize="9" fontFamily="monospace" fontWeight="700">
        T-SQL
      </text>
    </svg>

    {/* Tech Stack Pills in Window */}
    <div className="relative z-10 flex flex-wrap gap-1.5 pt-2 border-t border-[#e9e3d8]">
      {stack.map((item) => (
        <span
          key={item}
          className="text-[9.5px] font-mono font-medium text-[#292524] bg-white border border-[#ded5c7] px-2 py-0.5 rounded-md shadow-2xs"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const TelemetryEcgVisual = ({ isHovered, reduceMotion, stack }) => (
  <div className="relative h-[190px] w-full overflow-hidden rounded-t-2xl bg-[#faf8f5] border border-b-0 border-white/40 px-4 pt-3 pb-3 flex flex-col justify-between select-none shadow-2xl transition-transform duration-500 origin-bottom group-hover:scale-[1.04]">
    {/* Subtle medical grid background */}
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        backgroundSize: "14px 14px",
        backgroundImage:
          "linear-gradient(to right, rgba(61,136,104,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(61,136,104,0.12) 1px, transparent 1px)",
      }}
    />
    <div
      className={`absolute -right-6 -top-6 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
        isHovered ? "opacity-35" : "opacity-15"
      }`}
      style={{ background: "#10b981" }}
    />

    {/* Window Topbar */}
    <div className="relative z-10 flex items-center justify-between pb-2 border-b border-[#e9e3d8] text-[10px] font-mono text-[#57534e]">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
        <span className="ml-1.5 font-bold text-[#171412] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
          SIGNALR // HL7 TCP
        </span>
      </div>
      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 border border-emerald-500/25 font-bold">
        500HZ LIVE
      </span>
    </div>

    {/* 500Hz Real-Time ECG Waveform */}
    <svg viewBox="0 0 260 44" fill="none" className="relative z-10 w-full h-14 my-auto">
      <path
        d="M0 26 H36 L44 21 L52 26 H66 L72 30 L80 8 L88 36 L94 26 H122 L130 21 L138 26 H154 L160 30 L168 8 L176 36 L182 26 H214 L222 21 L230 26 H260"
        stroke="#a7f3d0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M0 26 H36 L44 21 L52 26 H66 L72 30 L80 8 L88 36 L94 26 H122 L130 21 L138 26 H154 L160 30 L168 8 L176 36 L182 26 H214 L222 21 L230 26 H260"
        stroke="#059669"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? false : { pathLength: 0.35, pathOffset: 0 }}
        animate={reduceMotion ? undefined : { pathOffset: [0, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
      />
    </svg>

    {/* Tech Stack Pills in Window */}
    <div className="relative z-10 flex flex-wrap gap-1.5 pt-2 border-t border-[#e9e3d8]">
      {stack.map((item) => (
        <span
          key={item}
          className="text-[9.5px] font-mono font-medium text-[#292524] bg-white border border-[#ded5c7] px-2 py-0.5 rounded-md shadow-2xs"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const AiVisionRlhfVisual = ({ isHovered, reduceMotion, stack }) => (
  <div className="relative h-[190px] w-full overflow-hidden rounded-t-2xl bg-[#faf8f5] border border-b-0 border-white/40 px-4 pt-3 pb-3 flex flex-col justify-between select-none shadow-2xl transition-transform duration-500 origin-bottom group-hover:scale-[1.04]">
    {/* Subtle dot matrix background */}
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        backgroundSize: "14px 14px",
        backgroundImage:
          "radial-gradient(circle, rgba(136,79,115,0.18) 1px, transparent 1px)",
      }}
    />
    <div
      className={`absolute -right-6 -top-6 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
        isHovered ? "opacity-35" : "opacity-15"
      }`}
      style={{ background: "#8b5cf6" }}
    />

    {/* Window Topbar */}
    <div className="relative z-10 flex items-center justify-between pb-2 border-b border-[#e9e3d8] text-[10px] font-mono text-[#57534e]">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
        <span className="ml-1.5 font-bold text-[#171412] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
          CV MASK // RLHF
        </span>
      </div>
      <span className="px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-800 border border-violet-500/25 font-bold">
        99.8% IAA
      </span>
    </div>

    {/* AI Bounding Box & Polygon Vector Workspace */}
    <div className="relative z-10 flex items-center justify-between gap-3 h-14 my-auto">
      <svg viewBox="0 0 116 40" fill="none" className="w-28 h-12 shrink-0">
        <rect
          x="6"
          y="4"
          width="104"
          height="32"
          rx="4"
          stroke="#c4b5fd"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <motion.path
          d="M22 27 L38 10 L76 12 L94 26 L62 31 Z"
          fill="#8b5cf6"
          fillOpacity="0.2"
          stroke="#7c3aed"
          strokeWidth="1.6"
          animate={
            reduceMotion
              ? undefined
              : { fillOpacity: isHovered ? [0.2, 0.4, 0.2] : 0.2 }
          }
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        {[
          [22, 27],
          [38, 10],
          [76, 12],
          [94, 26],
          [62, 31],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.2" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.6" />
        ))}
      </svg>

      <div className="flex-1 space-y-1.5 font-mono text-[9px]">
        <div className="flex items-center justify-between text-[#44403c] font-semibold">
          <span>SFT-A</span>
          <span className="text-violet-700 font-bold">0.99</span>
        </div>
        <div className="h-2 w-full rounded-full bg-[#e9e3d8] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500"
            initial={{ width: "78%" }}
            animate={{ width: isHovered ? "96%" : "86%" }}
            transition={{ duration: 0.45 }}
          />
        </div>
        <div className="flex items-center justify-between text-[#78716c] font-medium">
          <span>AUDIT</span>
          <span className="text-emerald-700 font-bold">0 HALLUC.</span>
        </div>
      </div>
    </div>

    {/* Tech Stack Pills in Window */}
    <div className="relative z-10 flex flex-wrap gap-1.5 pt-2 border-t border-[#e9e3d8]">
      {stack.map((item) => (
        <span
          key={item}
          className="text-[9.5px] font-mono font-medium text-[#292524] bg-white border border-[#ded5c7] px-2 py-0.5 rounded-md shadow-2xs"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const capabilities = [
  {
    number: "01",
    title: "Backend-Focused Full-Stack",
    cardBg: "bg-[#466482]",
    description:
      "Architecting thread-safe REST APIs and microservices in ASP.NET Core (.NET 8) with SOLID principles, SQL Server tuning, and RBAC—paired with React.js, Next.js & Bootstrap.",
    stack: [
      "ASP.NET Core 8",
      "SQL Server",
      "React & Next.js",
      "EF Core & YARP",
      "JWT & RBAC",
    ],
    badge: "01 • FULL-STACK .NET • REACT & NEXT.JS",
    metrics: "45% footprint reduction via Delta & GZip",
    Visual: BackendPipelineVisual,
  },
  {
    number: "02",
    title: "Real-Time Telemetry & Hardware",
    cardBg: "bg-[#3d8868]",
    description:
      "Ingesting raw TCP/IP and HL7 byte streams from bedside monitors, broadcasting 500Hz physiological waveforms via SignalR, and bridging local hardware scanners to web EHRs.",
    stack: [
      "SignalR",
      "TCP/IP Sockets",
      "HL7 Protocol",
      "C# Bridges",
      "HTML5 Canvas",
    ],
    badge: "02 • SUB-40MS LATENCY • 500HZ STREAMS",
    metrics: "500Hz live ECG stream with zero drops",
    Visual: TelemetryEcgVisual,
  },
  {
    number: "03",
    title: "AI Model Training & Data Specialist",
    cardBg: "bg-[#884f73]",
    description:
      "Training frontier AI models via multimodal annotation (bounding boxes, polygon segmentation, video action tagging) and RLHF evaluation—SFT curation, ranking & STEM audits.",
    stack: [
      "Image & Video CV",
      "Polygon Masks",
      "RLHF & SFT",
      "Red-Teaming",
      "Groq & Whisper",
    ],
    badge: "03 • GENERALIST EXPERT • RLHF & CV",
    metrics: "99.8% Inter-Annotator Agreement (IAA)",
    Visual: AiVisionRlhfVisual,
  },
];

function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="systems"
      className="relative py-20 sm:py-24 border-b border-[#e2dad0] bg-[#f6f4f0] text-[#171412] overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-paper opacity-75 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14 border-b border-[#e2dad0] pb-7">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-black text-[#171412] sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              What I deliver to{" "}
              <span className="text-[#ff4829]">engineering teams.</span>
            </h2>
            <p className="mt-3 text-base text-[#57534e] sm:text-lg leading-relaxed font-normal">
              Proven competence across backend-focused full-stack applications, live hardware telemetry, and frontier AI model training.
            </p>
          </div>
        </div>

        {/* 3 Portfolio-Style Colored Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {capabilities.map((cap, idx) => {
            const isHovered = hoveredIdx === idx;
            const VisualPreview = cap.Visual;

            return (
              <a
                key={cap.number}
                href="#projects"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] ${cap.cardBg} min-h-[450px] sm:min-h-[480px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer`}
              >
                {/* Top Editorial Content (matches Projects bento card layout) */}
                <div className="relative z-20 flex flex-col gap-2.5 p-7 sm:p-8">
                  <span className="self-start px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider bg-white/25 text-white backdrop-blur-md border border-white/20">
                    {cap.badge}
                  </span>

                  <h3 className="text-2xl font-bold font-display text-white tracking-tight leading-snug">
                    {cap.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] leading-relaxed text-white/90 font-normal">
                    {cap.description}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white/90 group-hover:text-white transition-colors mt-1.5">
                    <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white">
                      {cap.metrics}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                {/* Bottom Flush System Preview Window */}
                <div className="mt-auto flex w-full justify-center overflow-hidden px-6 pt-2">
                  <VisualPreview
                    isHovered={isHovered}
                    reduceMotion={reduceMotion}
                    stack={cap.stack}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
