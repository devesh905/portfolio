import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Cpu, Database, Wrench } from "lucide-react";

function Process() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="principles"
      className="py-24 sm:py-32 border-b border-[#2D1F57] text-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(111, 79, 204, 0.26), transparent 70%), radial-gradient(circle at 90% 90%, rgba(111, 79, 204, 0.14), transparent 50%), #0F0924",
      }}
    >
      {/* Subtle Ambient Grid Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(111, 79, 204, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(111, 79, 204, 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#25184F] border border-[#6f4fcc]/40 text-[#C4B5FD] text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6f4fcc]" />
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            How I think.
          </h2>
          <p className="text-base sm:text-lg text-[#C4B5FD] leading-relaxed font-normal">
            Pragmatic rules learned from writing code that runs in high-stakes hospital environments.
          </p>
        </div>

        {/* Varied Rhythmic Layout: 1 Wide -> 2 Columns -> 1 Wide */}
        <div className="space-y-6">

          {/* PRINCIPLE 01: Featured Wide Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            onMouseEnter={() => setHoveredIdx(0)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`border rounded-xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm ${
              hoveredIdx === 0
                ? "bg-[#1B113D] border-[#6f4fcc] shadow-[0_12px_40px_-10px_rgba(111,79,204,0.35)]"
                : "bg-[#150E30]/90 border-[#2F1F5E] shadow-[0_4px_25px_rgba(0,0,0,0.2)]"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              
              {/* Left Column: Number, Title, Philosophy (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#A78BFA]">
                    01
                  </span>
                  <ShieldAlert
                    size={22}
                    className={`transition-colors ${
                      hoveredIdx === 0 ? "text-[#C4B5FD]" : "text-[#8B5CF6]"
                    }`}
                  />
                  <span className="font-mono text-xs text-[#C4B5FD] uppercase tracking-wider ml-1">
                    Concurrency &bull; Thread Safety
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Thread safety before speed.
                </h3>

                <p className="text-sm sm:text-base text-[#DDD6FE] leading-relaxed font-normal">
                  Concurrency bugs only appear when real ward traffic hits. When decompressing 500Hz medical streams or running parallel DB requests, I isolate DbContext scopes upfront with <code className="text-[#E9D5FF] bg-[#2A1854] px-1.5 py-0.5 rounded font-mono text-xs border border-[#523396]">IServiceScopeFactory</code> so the application never deadlocks under pressure.
                </p>
              </div>

              {/* Right Column: Applied in Production (5 cols) */}
              <div className="lg:col-span-5 bg-[#0C061D] p-5 rounded-lg border border-[#27184D] space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A78BFA] font-semibold block">
                  Applied in Production:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["IServiceScopeFactory", "Scoped DbContext Isolation", "Parallel Stream Decompression", "Thread-Safe Memory Buffers"].map((ex) => (
                    <span
                      key={ex}
                      className={`text-xs font-mono px-2.5 py-1 rounded border transition-colors ${
                        hoveredIdx === 0
                          ? "bg-[#25184F] border-[#6f4fcc] text-white"
                          : "bg-[#160E33] border-[#342263] text-[#C4B5FD]"
                      }`}
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>


          {/* PRINCIPLES 02 & 03: Paired 2-Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* PRINCIPLE 02 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08 }}
              onMouseEnter={() => setHoveredIdx(1)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`border rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm ${
                hoveredIdx === 1
                  ? "bg-[#1B113D] border-[#6f4fcc] shadow-[0_12px_40px_-10px_rgba(111,79,204,0.35)]"
                  : "bg-[#150E30]/90 border-[#2F1F5E] shadow-[0_4px_25px_rgba(0,0,0,0.2)]"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-bold text-[#A78BFA]">
                      02
                    </span>
                    <Cpu
                      size={20}
                      className={`transition-colors ${
                        hoveredIdx === 1 ? "text-[#C4B5FD]" : "text-[#8B5CF6]"
                      }`}
                    />
                  </div>
                  <span className="font-mono text-[10px] text-[#C4B5FD] uppercase tracking-wider">
                    Hardware &bull; Resilience
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Edge cases over happy paths.
                </h3>

                <p className="text-sm text-[#DDD6FE] leading-relaxed font-normal">
                  In a hospital, bedside monitors unplug, WiFi drops packets, and flatbed scanners send garbled bytes. Software has to expect hardware glitches—with automatic reconnects, safe offline buffers, and unambiguous logs.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#27184D] space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A78BFA] font-semibold block">
                  Production Practices:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Exponential Backoff", "Offline Telemetry Buffers", "Dead-Letter Ingestion", "UHID Normalization"].map((ex) => (
                    <span
                      key={ex}
                      className="text-xs font-mono px-2 py-0.5 rounded border bg-[#0C061D] border-[#2E1E57] text-[#C4B5FD]"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* PRINCIPLE 03 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.12 }}
              onMouseEnter={() => setHoveredIdx(2)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`border rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm ${
                hoveredIdx === 2
                  ? "bg-[#1B113D] border-[#6f4fcc] shadow-[0_12px_40px_-10px_rgba(111,79,204,0.35)]"
                  : "bg-[#150E30]/90 border-[#2F1F5E] shadow-[0_4px_25px_rgba(0,0,0,0.2)]"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-bold text-[#A78BFA]">
                      03
                    </span>
                    <Database
                      size={20}
                      className={`transition-colors ${
                        hoveredIdx === 2 ? "text-[#C4B5FD]" : "text-[#8B5CF6]"
                      }`}
                    />
                  </div>
                  <span className="font-mono text-[10px] text-[#C4B5FD] uppercase tracking-wider">
                    Databases &bull; Performance
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Profile first, optimize second.
                </h3>

                <p className="text-sm text-[#DDD6FE] leading-relaxed font-normal">
                  When an endpoint slows down, I don't guess. I inspect SQL execution plans, index seek-versus-scan stats, and network latency before changing a line of application code. Milliseconds are saved where the real bottleneck lives.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#27184D] space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A78BFA] font-semibold block">
                  Production Practices:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Execution Plan Analysis", "Index Seek vs Scan", "Missing Index DMVs", "Latency Profiling"].map((ex) => (
                    <span
                      key={ex}
                      className="text-xs font-mono px-2 py-0.5 rounded border bg-[#0C061D] border-[#2E1E57] text-[#C4B5FD]"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>


          {/* PRINCIPLE 04: Full-Width Pragmatic Anchor Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.16 }}
            onMouseEnter={() => setHoveredIdx(3)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`border rounded-xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm ${
              hoveredIdx === 3
                ? "bg-[#1B113D] border-[#6f4fcc] shadow-[0_12px_40px_-10px_rgba(111,79,204,0.35)]"
                : "bg-[#150E30]/90 border-[#2F1F5E] shadow-[0_4px_25px_rgba(0,0,0,0.2)]"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#A78BFA]">
                    04
                  </span>
                  <Wrench
                    size={22}
                    className={`transition-colors ${
                      hoveredIdx === 3 ? "text-[#C4B5FD]" : "text-[#8B5CF6]"
                    }`}
                  />
                  <span className="font-mono text-xs text-[#C4B5FD] uppercase tracking-wider ml-1">
                    Architecture &bull; Maintainability
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Simplicity over cleverness.
                </h3>

                <p className="text-sm sm:text-base text-[#DDD6FE] leading-relaxed font-normal">
                  Clever abstractions are painful to maintain at 2 AM. I prefer explicit models, standard .NET idioms, and clean service boundaries that the next engineer can understand in five minutes.
                </p>
              </div>

              <div className="flex flex-wrap lg:flex-col gap-2 shrink-0 lg:border-l lg:border-[#27184D] lg:pl-8">
                {["Explicit Domain Models", "Standard ASP.NET Core", "Clean Service Boundaries", "Zero Magic Abstractions"].map((ex) => (
                  <span
                    key={ex}
                    className="text-xs font-mono px-3 py-1 rounded border bg-[#0C061D] border-[#2E1E57] text-[#C4B5FD] whitespace-nowrap"
                  >
                    {ex}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Process;
