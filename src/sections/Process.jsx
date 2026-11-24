import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Cpu, Database, Wrench, Layers, Radio, CheckCircle2 } from "lucide-react";

const principles = [
  {
    number: "01",
    domain: "Concurrency & Thread Safety",
    title: "Thread safety before raw speed.",
    icon: ShieldAlert,
    accent: "#ff4829",
    description:
      "Concurrency bugs only appear when real ward traffic hits. When decompressing 500Hz medical telemetry streams or executing parallel requests, I isolate DbContext lifetimes upfront with IServiceScopeFactory so the service never deadlocks under pressure.",
    applied: [
      "IServiceScopeFactory",
      "Scoped DbContext Isolation",
      "Parallel Stream Decompression",
      "Thread-Safe Memory Buffers",
    ],
  },
  {
    number: "02",
    domain: "Data & Edge Efficiency",
    title: "Compress at the edge, not in the database.",
    icon: Database,
    accent: "#ff4829",
    description:
      "Writing uncompressed sensor data to disk saturates hospital networks and bloats database indexes. By applying a custom delta-encoding algorithm paired with GZip, we slashed telemetry storage footprints by 45% while streaming 500Hz waveforms seamlessly.",
    applied: [
      "Custom Delta Encoding",
      "GZip Compression",
      "High-Frequency T-SQL Ingestion",
      "Chunked Waveform Storage",
    ],
  },
  {
    number: "03",
    domain: "Frontier AI & Data Quality",
    title: "Strict ground truth: zero tolerance for hallucinations.",
    icon: Layers,
    accent: "#ff4829",
    description:
      "An AI model is only as dependable as the human expertise that trains it. Whether drawing polygon masks on surgical instruments or ranking RLHF reasoning chains in C# and STEM, rigorous rubrics and sub-pixel accuracy prevent downstream model failure.",
    applied: [
      "99.8% IAA Agreement",
      "Pixel-Perfect Bounding Boxes",
      "RLHF Preference Calibration",
      "Code & Reasoning Audits",
    ],
  },
  {
    number: "04",
    domain: "Hardware & Resilience",
    title: "Treat hardware networks as hostile and intermittent.",
    icon: Wrench,
    accent: "#ff4829",
    description:
      "Bedside monitors get unplugged, WiFi drops, and serial bridges reboot. My backend services utilize defensive heartbeat checks, local WebSocket loopbacks (ws://127.0.0.1:8181), and graceful fallback queues to guarantee zero patient data loss.",
    applied: [
      "Local WebSocket Bridge",
      "Defensive Reconnection Logic",
      "Heartbeat Ping Verification",
      "HL7 Message Queue Buffers",
    ],
  },
];

function Process() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`border rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-white shadow-sm ${
                  isHovered
                    ? "border-[#ff4829]/70 shadow-[0_12px_32px_rgba(23,20,18,0.08)] -translate-y-1"
                    : "border-[#e2dad0]"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-2xl font-black font-display text-[#ff4829]">
                      {item.number}
                    </span>
                    <span className="text-[#77716e] font-semibold uppercase tracking-wider text-[10px]">
                      {item.domain}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <IconComponent size={20} className="text-[#ff4829] shrink-0" />
                    <h3 className="text-lg font-bold font-display text-[#171412] tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#e2dad0] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#77716e] block font-semibold">
                    Applied In Production:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.applied.map((app) => (
                      <span
                        key={app}
                        className="text-[11px] font-mono text-[#171412] bg-[#efe9df] border border-[#d6cebf] px-2 py-0.5 rounded-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Process;
