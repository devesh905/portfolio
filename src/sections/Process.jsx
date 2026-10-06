import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    name: "Understand & Scope",
    summary:
      "Deconstructing system constraints, protocol standards (HL7, TCP), and concurrency profiles before writing boilerplate. Ensuring domain boundaries and data volumes are well understood.",
  },
  {
    step: "02",
    name: "Architect & Model",
    summary:
      "Establishing clean domain entities, database normalization, and thread safety. Isolating DbContext lifetimes with IServiceScopeFactory and establishing clear REST or WebSocket API contracts.",
  },
  {
    step: "03",
    name: "Build & Integrate",
    summary:
      "Implementing clean, maintainable C#/.NET Core services, low-latency streaming hubs, and responsive React interfaces with strict error boundaries and predictable state management.",
  },
  {
    step: "04",
    name: "Benchmark & Test",
    summary:
      "Profiling performance under load: reviewing SQL execution plans, verifying index coverage, and running automated regression suites with Selenium WebDriver.",
  },
  {
    step: "05",
    name: "Deploy & Maintain",
    summary:
      "Rolling out containerized builds via Docker, configuring timezone-aware automated data retention policies, and establishing clear operational documentation for internal teams.",
  },
];

function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 border-b border-[#E5E5DE] bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-wider text-[#183654] font-semibold block mb-2.5">
            04 // Engineering Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#141413] tracking-tight leading-tight mb-4">
            How I approach technical problems.
          </h2>
          <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
            A disciplined, predictable engineering process designed to eliminate architectural surprises, concurrency bugs, and deployment friction.
          </p>
        </div>

        {/* Minimal Editorial Steps List */}
        <div className="border-t border-[#E5E5DE]">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="py-8 sm:py-10 border-b border-[#E5E5DE] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
            >
              <div className="md:col-span-2 font-mono text-base font-bold text-[#183654]">
                {item.step} //
              </div>

              <div className="md:col-span-4 text-lg font-bold text-[#141413]">
                {item.name}
              </div>

              <div className="md:col-span-6 text-xs sm:text-sm text-[#4A4C46] leading-relaxed font-normal">
                {item.summary}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;
