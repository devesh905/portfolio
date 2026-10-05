import { motion } from "framer-motion";
import { MessageSquareCode, Compass, Code, Rocket, Headphones, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description:
      "We begin by understanding your exact business goals, user personas, and technical requirements. I create database schemas, system architecture blueprints, and clear deliverables before writing code.",
    highlight: "Clear scope & no surprise delays",
    icon: Compass,
    accent: "text-cyan-400 border-cyan-500/30 bg-cyan-950/30",
  },
  {
    step: "02",
    title: "Rapid Sprints & Live Previews",
    description:
      "Development proceeds in transparent sprints. You receive interactive preview links and regular progress updates so you can test features early and give immediate feedback.",
    highlight: "Regular progress & zero guesswork",
    icon: Code,
    accent: "text-blue-400 border-blue-500/30 bg-blue-950/30",
  },
  {
    step: "03",
    title: "Quality, Speed & Security",
    description:
      "Every module is tested for security, responsiveness across mobile and desktop, SEO readiness, and peak database performance under heavy load.",
    highlight: "95+ Lighthouse speed & clean code",
    icon: Rocket,
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-950/30",
  },
  {
    step: "04",
    title: "Deployment & Post-Launch Care",
    description:
      "Seamless deployment to your preferred cloud provider (Azure, AWS, Docker, Vercel). I provide documentation, handoff walkthroughs, and warranty support so your launch is frictionless.",
    highlight: "Smooth handoff & long-term peace of mind",
    icon: Headphones,
    accent: "text-violet-400 border-violet-500/30 bg-violet-950/30",
  },
];

function Process() {
  return (
    <section id="process" className="px-4 sm:px-6 py-24 max-w-6xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <span>Proven Workflow</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          How We Work <span className="gradient-text-cyan">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          A predictable, transparent, and collaborative process engineered to turn your vision into
          production-ready reality without headaches.
        </motion.p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 relative overflow-hidden group"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-black text-white/30 group-hover:text-cyan-400 transition-colors">
                  {item.step}
                </span>
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.accent}`}>
                  <Icon size={18} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom highlight pill */}
              <div className="pt-4 border-t border-white/5 mt-auto">
                <span className="inline-block text-[11px] font-medium text-cyan-400/90 font-mono">
                  ✓ {item.highlight}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Process;
