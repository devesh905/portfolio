import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Backend Engineering & .NET Core APIs",
    description:
      "Architecting modular, maintainable, and high-throughput server backends using ASP.NET Core, C#, Entity Framework Core, and SQL Server. Designed for thread safety, data integrity, and strict concurrency isolation.",
    focusAreas: [
      "Clean Architecture & decoupled service boundaries",
      "Thread-safe database operations (scope isolation with IServiceScopeFactory)",
      "Relational schema design, index tuning, and execution plan review",
      "Secure RESTful APIs with JWT authentication & role-based authorization",
    ],
  },
  {
    number: "02",
    title: "Real-Time Telemetry & Protocol Integration",
    description:
      "Building low-latency pipelines for continuous data feeds, medical device hardware integration, and live client dashboards where dropped packets or connection stalls directly impair operations.",
    focusAreas: [
      "SignalR & WebSocket bi-directional streaming pipelines",
      "Hardware device communication via TCP/IP sockets and HL7 protocol",
      "Custom delta-encoded stream compression (up to 45x bandwidth reduction)",
      "Automated database purge policies with timezone-aware cutoff logic",
    ],
  },
  {
    number: "03",
    title: "Full-Stack Web Applications & Client Systems",
    description:
      "Crafting fast, accessible, and responsive user interfaces that connect cleanly with complex backend systems. Built with modern React, clean CSS, and automated regression testing.",
    focusAreas: [
      "High-performance React web applications & administrative portals",
      "Rigorous mobile and desktop responsiveness without layout shifts",
      "Automated regression testing using Selenium WebDriver (C#)",
      "Predictable state management & resilient API error handling",
    ],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 border-b border-[#E5E5DE] bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-wider text-[#183654] font-semibold block mb-2.5">
            02 // Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#141413] tracking-tight leading-tight mb-4">
            Where I contribute the most value.
          </h2>
          <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
            I specialize in the intersection of reliable backend architecture, low-latency streaming protocols, and clean web applications.
          </p>
        </div>

        {/* Capabilities Editorial List (Divided Rows) */}
        <div className="border-t border-[#E5E5DE]">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="py-10 sm:py-14 border-b border-[#E5E5DE] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Number & Title */}
              <div className="lg:col-span-4 space-y-2">
                <span className="font-mono text-sm font-bold text-[#183654] block">
                  {cap.number} //
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight">
                  {cap.title}
                </h3>
              </div>

              {/* Center Column: Description */}
              <div className="lg:col-span-4">
                <p className="text-sm text-[#4A4C46] leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>

              {/* Right Column: Key Focus Areas */}
              <div className="lg:col-span-4 space-y-2 border-l lg:border-[#EFEFE8] lg:pl-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#787A72] block mb-2">
                  Technical Deliverables:
                </span>
                <ul className="space-y-2 text-xs text-[#383A35]">
                  {cap.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2">
                      <span className="text-[#183654] font-mono mt-0.5">&bull;</span>
                      <span className="leading-snug">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Understated Consultation Note */}
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#787A72]">
          <p className="leading-relaxed">
            Need an engineer for an architectural review, telemetry system, or full-stack web build?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[#183654] hover:underline whitespace-nowrap"
          >
            <span>Start an engineering discussion</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;
