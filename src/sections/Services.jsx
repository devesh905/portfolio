import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Server, Activity, LayoutGrid } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "BACKEND APIS & SERVICES",
    subtitle: "ASP.NET Core & SQL Server",
    icon: Server,
    description:
      "I build modular, thread-safe backends using C#, ASP.NET Core, and SQL Server. I focus on clean service boundaries, isolated DbContext lifetimes, query tuning, and secure JWT authentication.",
    stack: ["ASP.NET Core", "C# (.NET 8)", "SQL Server", "RESTful APIs", "EF Core 8", "JWT Auth"],
    badge: "THREAD-SAFE .NET",
  },
  {
    number: "02",
    title: "REAL-TIME & HARDWARE",
    subtitle: "Telemetry & Device Bridges",
    icon: Activity,
    description:
      "I write software that connects directly to physical hardware. This includes ingesting raw byte streams from medical monitors via TCP/IP and HL7, custom delta compression, and streaming live feeds with SignalR.",
    stack: ["SignalR", "WebSockets", "TCP/IP", "HL7 Protocols", "Hardware Bridges", "Delta Compression"],
    badge: "SUB-40MS LATENCY",
  },
  {
    number: "03",
    title: "WEB APPS & DASHBOARDS",
    subtitle: "Interactive Clinical Tools",
    icon: LayoutGrid,
    description:
      "I build clean, reliable dashboards and internal tools for clinical staff. Built with modern React and CSS, with predictable async state and automated regression testing.",
    stack: ["React", "JavaScript (ES6+)", "Modern CSS", "Dashboards", "Vite", "Selenium WebDriver"],
    badge: "RESPONSIVE UI",
  },
];

function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="systems" className="py-24 sm:py-32 border-b border-[#E5E5DE] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E56A0] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight leading-tight mb-4">
            What I build.
          </h2>
          <p className="text-base sm:text-lg text-[#4A4C46] leading-relaxed">
            Three core areas where I spend most of my time writing production software.
          </p>
        </div>

        {/* 3 Visually Distinct Capabilities with Subtle Hover Interaction */}
        <div className="border-t border-[#E5E5DE] divide-y divide-[#E5E5DE]">
          {capabilities.map((cap, idx) => {
            const isHovered = hoveredIdx === idx;
            const IconComponent = cap.icon;

            return (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative py-10 sm:py-14 transition-all duration-300 ${
                  isHovered ? "bg-white/80 pl-4 sm:pl-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.03)]" : "pl-0"
                }`}
              >
                {/* Left Cobalt Accent Bar on Hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#1E56A0] rounded-l transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  
                  {/* Column 1: Number & Icon (3 Cols) */}
                  <div className="lg:col-span-3 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl sm:text-4xl font-bold text-[#1E56A0] tracking-tight">
                        {cap.number}
                      </span>
                      <IconComponent
                        size={22}
                        className={`transition-colors duration-200 ${
                          isHovered ? "text-[#1E56A0]" : "text-[#9EA098]"
                        }`}
                      />
                    </div>
                    <span className="font-mono text-[11px] text-[#787A72] uppercase tracking-wider block">
                      {cap.subtitle}
                    </span>
                  </div>

                  {/* Column 2: Title & Plain-English Description (5 Cols) */}
                  <div className="lg:col-span-5 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight group-hover:text-[#1E56A0] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>

                  {/* Column 3: Technical Stack & Feature Badge (4 Cols) */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#787A72] font-semibold">
                        Technical Stack
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold border transition-all ${
                          isHovered
                            ? "bg-[#EFF6FF] text-[#1E56A0] border-[#BFDBFE]"
                            : "bg-[#F3F3ED] text-[#787A72] border-[#E5E5DE]"
                        }`}
                      >
                        {cap.badge}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cap.stack.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono text-[#383A35] bg-[#F3F3ED] border border-[#E5E5DE] px-2.5 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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

export default Services;
