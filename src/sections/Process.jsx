import { motion } from "framer-motion";
import { GradientCard } from "@/components/ui/gradient-card";

const ConcurrencyGraphic = () => (
  <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
    <circle cx="140" cy="140" r="82" fill="#fdba74" fillOpacity="0.28" />
    <circle cx="140" cy="140" r="58" stroke="#ea580c" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="5 5" />
    <rect x="72" y="74" width="128" height="32" rx="10" fill="white" fillOpacity="0.65" stroke="#fb923c" strokeOpacity="0.45" />
    <circle cx="90" cy="90" r="5" fill="#ff4829" />
    <rect x="104" y="86" width="62" height="8" rx="4" fill="#ea580c" fillOpacity="0.35" />

    <rect x="88" y="118" width="128" height="32" rx="10" fill="white" fillOpacity="0.72" stroke="#fb923c" strokeOpacity="0.5" />
    <circle cx="106" cy="134" r="5" fill="#f97316" />
    <rect x="120" y="130" width="74" height="8" rx="4" fill="#ea580c" fillOpacity="0.4" />

    <rect x="72" y="162" width="128" height="32" rx="10" fill="white" fillOpacity="0.65" stroke="#fb923c" strokeOpacity="0.45" />
    <circle cx="90" cy="178" r="5" fill="#10b981" />
    <rect x="104" y="174" width="54" height="8" rx="4" fill="#ea580c" fillOpacity="0.35" />
  </svg>
);

const EdgeCompressionGraphic = () => (
  <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
    <circle cx="145" cy="145" r="82" fill="#6ee7b7" fillOpacity="0.28" />
    <path
      d="M42 136 H76 L88 102 L102 164 L118 82 L134 152 L148 118 L160 136 H204"
      stroke="#059669"
      strokeOpacity="0.55"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="78" y="168" width="22" height="28" rx="6" fill="white" fillOpacity="0.75" stroke="#10b981" strokeOpacity="0.45" />
    <rect x="108" y="156" width="22" height="40" rx="6" fill="white" fillOpacity="0.75" stroke="#10b981" strokeOpacity="0.45" />
    <rect x="138" y="176" width="22" height="20" rx="6" fill="#10b981" fillOpacity="0.35" stroke="#059669" strokeOpacity="0.5" />
    <rect x="168" y="182" width="22" height="14" rx="5" fill="#059669" fillOpacity="0.45" />
  </svg>
);

const AiGroundTruthGraphic = () => (
  <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
    <circle cx="145" cy="145" r="82" fill="#c4b5fd" fillOpacity="0.3" />
    <rect x="76" y="78" width="122" height="106" rx="14" fill="white" fillOpacity="0.6" stroke="#8b5cf6" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="6 4" />
    <path d="M104 114 L152 96 L182 130 L144 166 L96 150 Z" fill="#8b5cf6" fillOpacity="0.18" stroke="#7c3aed" strokeOpacity="0.65" strokeWidth="2.5" />
    <circle cx="104" cy="114" r="5" fill="white" stroke="#7c3aed" strokeWidth="2.5" />
    <circle cx="152" cy="96" r="5" fill="white" stroke="#7c3aed" strokeWidth="2.5" />
    <circle cx="182" cy="130" r="5" fill="white" stroke="#7c3aed" strokeWidth="2.5" />
    <circle cx="144" cy="166" r="5" fill="white" stroke="#7c3aed" strokeWidth="2.5" />
    <circle cx="96" cy="150" r="5" fill="white" stroke="#7c3aed" strokeWidth="2.5" />
  </svg>
);

const HardwareResilienceGraphic = () => (
  <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
    <circle cx="145" cy="145" r="82" fill="#cbd5e1" fillOpacity="0.42" />
    <path d="M88 110 C118 110, 118 158, 148 158" stroke="#475569" strokeOpacity="0.45" strokeWidth="2.5" strokeDasharray="5 4" />
    <path d="M88 168 C118 168, 128 118, 168 118" stroke="#64748b" strokeOpacity="0.45" strokeWidth="2.5" />
    <rect x="64" y="92" width="46" height="36" rx="10" fill="white" fillOpacity="0.8" stroke="#64748b" strokeOpacity="0.45" />
    <circle cx="87" cy="110" r="6" fill="#475569" />
    <rect x="64" y="150" width="46" height="36" rx="10" fill="white" fillOpacity="0.8" stroke="#64748b" strokeOpacity="0.45" />
    <circle cx="87" cy="168" r="6" fill="#94a3b8" />
    <rect x="148" y="102" width="54" height="72" rx="12" fill="white" fillOpacity="0.85" stroke="#475569" strokeOpacity="0.5" />
    <circle cx="175" cy="126" r="7" fill="#10b981" />
    <rect x="160" y="144" width="30" height="6" rx="3" fill="#64748b" fillOpacity="0.45" />
    <rect x="160" y="156" width="22" height="6" rx="3" fill="#64748b" fillOpacity="0.3" />
  </svg>
);

const principles = [
  {
    number: "01",
    badgeText: "01 · Concurrency & Thread Safety",
    badgeColor: "#ff4829",
    gradient: "orange",
    title: "Thread safety before raw speed.",
    description:
      "Concurrency bugs only appear when real ward traffic hits. When decompressing 500Hz medical telemetry streams or executing parallel requests, I isolate DbContext lifetimes upfront with IServiceScopeFactory so the service never deadlocks under pressure.",
    applied: [
      "IServiceScopeFactory",
      "Scoped DbContext Isolation",
      "Parallel Stream Decompression",
      "Thread-Safe Buffers",
    ],
    ctaText: "Inspect ICU Telemetry Architecture",
    ctaHref: "#projects",
    graphic: <ConcurrencyGraphic />,
  },
  {
    number: "02",
    badgeText: "02 · Data & Edge Efficiency",
    badgeColor: "#10B981",
    gradient: "green",
    title: "Compress at the edge, not in the database.",
    description:
      "Writing uncompressed sensor data to disk saturates hospital networks and bloats database indexes. By applying a custom delta-encoding algorithm paired with GZip, we slashed telemetry storage footprints by 45% while streaming 500Hz waveforms seamlessly.",
    applied: [
      "Custom Delta Encoding",
      "GZip Compression",
      "High-Frequency T-SQL",
      "Chunked Waveforms",
    ],
    ctaText: "See 25–45x Bandwidth Reduction",
    ctaHref: "#projects",
    graphic: <EdgeCompressionGraphic />,
  },
  {
    number: "03",
    badgeText: "03 · Frontier AI & Data Quality",
    badgeColor: "#8B5CF6",
    gradient: "purple",
    title: "Strict ground truth: zero tolerance for hallucinations.",
    description:
      "An AI model is only as dependable as the human expertise that trains it. Whether drawing polygon masks on surgical instruments or ranking RLHF reasoning chains in C# and STEM, rigorous rubrics and sub-pixel accuracy prevent downstream model failure.",
    applied: [
      "99.8% IAA Agreement",
      "Polygon Segmentation",
      "RLHF Calibration",
      "Code & STEM Audits",
    ],
    ctaText: "Explore AI & RLHF Case Study",
    ctaHref: "#projects",
    graphic: <AiGroundTruthGraphic />,
  },
  {
    number: "04",
    badgeText: "04 · Hardware & Resilience",
    badgeColor: "#475569",
    gradient: "gray",
    title: "Treat hardware networks as hostile and intermittent.",
    description:
      "Bedside monitors get unplugged, WiFi drops, and serial bridges reboot. My backend services utilize defensive heartbeat checks, local WebSocket loopbacks (ws://127.0.0.1:8181), and graceful fallback queues to guarantee zero patient data loss.",
    applied: [
      "Local WebSocket Bridge",
      "Defensive Reconnection",
      "Heartbeat Verification",
      "HL7 Queue Buffers",
    ],
    ctaText: "View Scanner & Hardware Bridge",
    ctaHref: "#projects",
    graphic: <HardwareResilienceGraphic />,
  },
];

function Process() {
  return (
    <section
      id="principles"
      className="py-24 sm:py-32 border-b border-[#e2dad0] bg-[#f6f4f0] text-[#171412] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-paper opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-14 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#efe9df] border border-[#d6cebf] text-[#ff4829] text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#171412] tracking-tight leading-tight">
            How I think about systems &amp; data.
          </h2>
          <p className="text-base sm:text-lg text-[#57534e] leading-relaxed font-normal">
            Pragmatic rules learned from writing code that runs in high-stakes hospital environments and training frontier models.
          </p>
        </div>

        {/* 4 Gradient Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {principles.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="h-full"
            >
              <GradientCard
                badgeText={item.badgeText}
                badgeColor={item.badgeColor}
                gradient={item.gradient}
                title={item.title}
                description={item.description}
                tags={item.applied}
                ctaText={item.ctaText}
                ctaHref={item.ctaHref}
                graphic={item.graphic}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
