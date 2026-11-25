import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Server, Activity, Brain, ArrowUpRight, CheckCircle2 } from "lucide-react";

const BackendPipelineVisual = ({ isHovered, reduceMotion }) => (
  <div className="relative h-[88px] w-full overflow-hidden rounded-xl bg-[#171412] border border-[#2b2623] px-3.5 py-2.5 flex flex-col justify-between select-none">
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundSize: "16px 16px",
        backgroundImage:
          "linear-gradient(to right, rgba(246,244,240,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(246,244,240,0.14) 1px, transparent 1px)",
      }}
    />
    <div
      className={`absolute -right-6 -top-6 w-28 h-28 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
        isHovered ? "opacity-45" : "opacity-20"
      }`}
      style={{ background: "#ff4829" }}
    />

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#a8a29e]">
      <span className="flex items-center gap-1.5 text-[#f6f4f0]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4829] animate-pulse" />
        ASP.NET 8 // YARP
      </span>
      <span className="px-1.5 py-0.5 rounded bg-white/10 text-[#ff8a75] font-semibold">
        -45% DELTA
      </span>
    </div>

    <svg viewBox="0 0 260 40" fill="none" className="relative z-10 w-full h-10">
      <path d="M46 20 H100" stroke="#44403c" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M160 20 H214" stroke="#44403c" strokeWidth="1.5" strokeDasharray="3 3" />

      {!reduceMotion && (
        <motion.circle
          r="2.6"
          fill="#ff4829"
          cy="20"
          animate={{ cx: [46, 100, 160, 214] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
      )}

      <rect x="8" y="8" width="42" height="24" rx="5" fill="#231f1c" stroke="#ff4829" strokeOpacity="0.65" />
      <text x="29" y="23" textAnchor="middle" fill="#f6f4f0" fontSize="8.5" fontFamily="monospace" fontWeight="600">
        API
      </text>

      <rect x="96" y="6" width="68" height="28" rx="6" fill="#292421" stroke="#f6f4f0" strokeOpacity="0.28" />
      <text x="130" y="18" textAnchor="middle" fill="#ff4829" fontSize="7.5" fontFamily="monospace" fontWeight="700">
        SCOPED DI
      </text>
      <text x="130" y="28" textAnchor="middle" fill="#a8a29e" fontSize="6.5" fontFamily="monospace">
        THREAD-SAFE
      </text>

      <rect x="210" y="8" width="42" height="24" rx="5" fill="#231f1c" stroke="#f6f4f0" strokeOpacity="0.28" />
      <text x="231" y="23" textAnchor="middle" fill="#f6f4f0" fontSize="8.5" fontFamily="monospace" fontWeight="600">
        T-SQL
      </text>
    </svg>
  </div>
);

const TelemetryEcgVisual = ({ isHovered, reduceMotion }) => (
  <div className="relative h-[88px] w-full overflow-hidden rounded-xl bg-[#171412] border border-[#2b2623] px-3.5 py-2.5 flex flex-col justify-between select-none">
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundSize: "14px 14px",
        backgroundImage:
          "linear-gradient(to right, rgba(16,185,129,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.18) 1px, transparent 1px)",
      }}
    />
    <div
      className={`absolute -right-6 -top-6 w-28 h-28 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
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

    <svg viewBox="0 0 260 40" fill="none" className="relative z-10 w-full h-10">
      <path
        d="M0 24 H36 L44 19 L52 24 H66 L72 28 L80 6 L88 34 L94 24 H122 L130 19 L138 24 H154 L160 28 L168 6 L176 34 L182 24 H214 L222 19 L230 24 H260"
        stroke="#10b981"
        strokeOpacity="0.22"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M0 24 H36 L44 19 L52 24 H66 L72 28 L80 6 L88 34 L94 24 H122 L130 19 L138 24 H154 L160 28 L168 6 L176 34 L182 24 H214 L222 19 L230 24 H260"
        stroke="#34d399"
        strokeWidth="2"
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
  <div className="relative h-[88px] w-full overflow-hidden rounded-xl bg-[#171412] border border-[#2b2623] px-3.5 py-2.5 flex flex-col justify-between select-none">
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundSize: "16px 16px",
        backgroundImage:
          "linear-gradient(to right, rgba(167,139,250,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(167,139,250,0.16) 1px, transparent 1px)",
      }}
    />
    <div
      className={`absolute -right-6 -top-6 w-28 h-28 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
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

    <div className="relative z-10 flex items-center justify-between gap-3 h-10">
      <svg viewBox="0 0 116 40" fill="none" className="w-28 h-10 shrink-0">
        <rect
          x="6"
          y="4"
          width="104"
          height="32"
          rx="4"
          stroke="#a78bfa"
          strokeOpacity="0.45"
          strokeDasharray="3 3"
        />
        <motion.path
          d="M22 27 L38 10 L76 12 L94 26 L62 31 Z"
          fill="#8b5cf6"
          fillOpacity="0.24"
          stroke="#c4b5fd"
          strokeWidth="1.5"
          animate={
            reduceMotion
              ? undefined
              : { fillOpacity: isHovered ? [0.24, 0.42, 0.24] : 0.24 }
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
          <circle key={i} cx={cx} cy={cy} r="2.2" fill="#171412" stroke="#c4b5fd" strokeWidth="1.4" />
        ))}
      </svg>

      <div className="flex-1 space-y-1 font-mono text-[9px]">
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
    title: "Backend-Focused Full-Stack",
    subtitle: "ASP.NET Core (.NET 8), SQL Server, React.js & Next.js",
    icon: Server,
    accent: "#ff4829",
    accentSoft: "bg-[#ff4829]/10 text-[#ff4829] border-[#ff4829]/25",
    surfaceTint: "from-white via-white to-[#fff5f2]",
    description:
      "Architecting thread-safe REST APIs and microservices in ASP.NET Core (.NET 8) with SOLID principles, SQL Server tuning, and RBAC—paired with responsive frontends built in React.js, Next.js, and Bootstrap.",
    stack: [
      "ASP.NET Core 8",
      "C# / SQL Server",
      "React.js & Next.js",
      "Bootstrap & UI",
      "EF Core & YARP",
      "JWT & RBAC",
    ],
    badge: "FULL-STACK .NET",
    metrics: "45% footprint reduction via Delta & GZip",
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
      "Ingesting raw TCP/IP and HL7 byte streams from bedside monitors, broadcasting 500Hz physiological waveforms via SignalR, and bridging local hardware scanners to web EHRs.",
    stack: [
      "SignalR",
      "TCP/IP Sockets",
      "HL7 Protocol",
      "C# Bridges",
      "32x Delta",
      "HTML5 Canvas",
    ],
    badge: "SUB-40MS LATENCY",
    metrics: "500Hz live ECG stream with zero drops",
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
      "Training frontier AI models via multimodal annotation (bounding boxes, polygon segmentation, video action tagging) and RLHF evaluation—SFT curation, ranking, and STEM/code audits.",
    stack: [
      "Image & Video CV",
      "Polygon Masks",
      "RLHF & SFT",
      "Red-Teaming",
      "Groq & OpenAI",
      "Whisper & VoIP",
    ],
    badge: "GENERALIST EXPERT",
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
        <div className="mb-10 sm:mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#e2dad0] pb-7">
          <div className="max-w-xl">
            <h2 className="text-3xl font-display font-black text-[#171412] sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              What I deliver to{" "}
              <span className="text-[#ff4829]">engineering teams.</span>
            </h2>
            <p className="mt-3 text-base text-[#57534e] sm:text-lg leading-relaxed font-normal">
              Proven competence across backend-focused full-stack applications, live hardware telemetry, and frontier AI model training.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 self-start lg:self-end px-4 py-2 rounded-full bg-[#efe9df] border border-[#d6cebf] text-xs font-mono text-[#57534e] font-medium">
            <span className="text-[#171412] font-semibold">03 Disciplines</span>
            <span className="text-[#d6cebf]">|</span>
            <span>Production &amp; Frontier AI</span>
          </div>
        </div>

        {/* 3 Compact Editorial-Tech Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const isHovered = hoveredIdx === idx;
            const IconComponent = cap.icon;
            const VisualPreview = cap.Visual;

            return (
              <motion.article
                key={cap.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 24, delay: idx * 0.06 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  borderColor: isHovered ? cap.accent : "#ddd4c7",
                  boxShadow: isHovered
                    ? `0 18px 38px -12px rgba(23,20,18,0.14), 0 0 0 1px ${cap.accent}33`
                    : "0 4px 16px rgba(23,20,18,0.04)",
                }}
                className={`group relative overflow-hidden rounded-[1.5rem] border bg-gradient-to-b ${cap.surfaceTint} flex flex-col justify-between transition-colors duration-300`}
              >
                <div
                  className="h-1 w-full transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${cap.accent}, transparent)`,
                    opacity: isHovered ? 1 : 0.45,
                  }}
                />

                <div className="p-5 sm:p-6 flex-1 flex flex-col gap-4">
                  {/* Top Bar: Index + Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border bg-[#f6f4f0] transition-colors duration-300"
                        style={{
                          color: cap.accent,
                          borderColor: isHovered ? `${cap.accent}55` : "#e2dad0",
                        }}
                      >
                        <IconComponent size={15} />
                      </div>
                      <span
                        className="text-xl font-black font-display tracking-tight"
                        style={{ color: cap.accent }}
                      >
                        {cap.number}
                      </span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold uppercase tracking-wider ${cap.accentSoft}`}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: cap.accent }}
                      />
                      {cap.badge}
                    </span>
                  </div>

                  {/* Compact Dark Telemetry / Console Preview */}
                  <VisualPreview isHovered={isHovered} reduceMotion={reduceMotion} />

                  {/* Full-width Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#171412] tracking-tight leading-snug">
                      {cap.title}
                    </h3>
                    <span className="text-xs font-sans font-medium text-[#77716e] block mt-0.5">
                      {cap.subtitle}
                    </span>
                  </div>

                  {/* Concise Description */}
                  <p className="text-sm text-[#57534e] leading-relaxed font-normal">
                    {cap.description}
                  </p>

                  {/* Compact Stack Tags (2 balanced rows) */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {cap.stack.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-mono font-medium text-[#171412] bg-[#efe9df]/80 border border-[#dfd6c7] px-2.5 py-0.5 rounded-full transition-colors duration-200 hover:bg-[#171412] hover:text-[#f6f4f0] hover:border-[#171412] cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verified Outcome Strip */}
                <div className="px-5 sm:px-6 py-3.5 bg-[#efe9df]/70 border-t border-[#e2dad0] flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-[#171412] font-semibold flex items-center gap-2 min-w-0">
                    <CheckCircle2 size={14} style={{ color: cap.accent }} className="shrink-0" />
                    <span className="truncate">{cap.metrics}</span>
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
