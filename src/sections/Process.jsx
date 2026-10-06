import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Cpu, Database, Wrench } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "THREAD SAFETY BEFORE SPEED",
    icon: ShieldAlert,
    text: "Concurrency issues are the hardest bugs to track down because they only appear under real production load. When handling high-frequency streams or parallel database requests, I solve scope isolation and race conditions upfront.",
    examples: ["IServiceScopeFactory", "Scoped DbContext Isolation", "Parallel Stream Decompression", "Thread-Safe Memory Buffers"],
  },
  {
    number: "02",
    title: "REAL-WORLD EDGE CASES OVER HAPPY PATHS",
    icon: Cpu,
    text: "In hospital production, physical devices unplug, networks jitter, and scanners send unexpected payloads. I design software assuming components will fail intermittently—with clean buffers, automatic reconnect logic, and clear error logs.",
    examples: ["Exponential Backoff", "Offline Telemetry Buffers", "Dead-Letter Ingestion", "UHID Normalization Service"],
  },
  {
    number: "03",
    title: "MEASURED QUERIES OVER GUESSWORK",
    icon: Database,
    text: "When an endpoint slows down, I don't guess. I inspect SQL execution plans, review indexing, and analyze where milliseconds are actually lost before refactoring application code.",
    examples: ["Execution Plan Analysis", "Index Seek vs Scan Review", "Missing Index DMVs", "Query Regressions Profiling"],
  },
  {
    number: "04",
    title: "SIMPLICITY OVER CLEVERNESS",
    icon: Wrench,
    text: "Code is read far more often than written. I prefer explicit models, straightforward C#/.NET idioms, and clear service boundaries over clever abstractions that make maintenance painful for the next person.",
    examples: ["Explicit Domain Entities", "Standard ASP.NET Core Idioms", "Clean Service Boundaries", "Zero Magic Abstractions"],
  },
];

function Process() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="principles" className="py-24 sm:py-32 border-b border-[#232B3A] bg-[#0D1117] text-white bg-grid-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#162030] border border-[#2D4A77] text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            How I think.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Lessons learned from writing code that runs in high-stakes, real-world hospital environments.
          </p>
        </div>

        {/* 4 Large Interactive Principles */}
        <div className="border-t border-[#232B3A] divide-y divide-[#232B3A]">
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
                className={`py-10 sm:py-12 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start ${
                  isHovered ? "bg-[#131924]/80 pl-4 sm:pl-6 rounded-lg" : "pl-0"
                }`}
              >
                {/* Large Number & Icon (3 Cols) */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-blue-400">
                      {item.number}
                    </span>
                    <IconComponent
                      size={22}
                      className={`transition-colors ${
                        isHovered ? "text-blue-400" : "text-slate-500"
                      }`}
                    />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                    PRINCIPLE {item.number}
                  </span>
                </div>

                {/* Title & Core Philosophy (5 Cols) */}
                <div className="lg:col-span-5 space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>

                {/* Interactive Technical Examples (4 Cols) */}
                <div className="lg:col-span-4 space-y-2 bg-[#090D14] p-4 rounded border border-[#1A2332]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Applied In Production:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.examples.map((ex) => (
                      <span
                        key={ex}
                        className={`text-xs font-mono px-2 py-0.5 rounded border transition-colors ${
                          isHovered
                            ? "bg-[#162030] border-[#3B82F6] text-blue-300"
                            : "bg-[#101622] border-[#232B3A] text-slate-300"
                        }`}
                      >
                        {ex}
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
