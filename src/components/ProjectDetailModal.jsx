import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { X, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-[#02040a]/85 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col bg-[#070b16]"
          >
            {/* Header */}
            <div className="flex shrink-0 items-start justify-between gap-6 p-6 sm:p-7 border-b border-white/5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/40 border border-cyan-500/30">
                    <Sparkles size={11} />
                    {project.status}
                  </span>
                  {project.category && (
                    <span className="text-[11px] font-medium text-slate-400">
                      {project.category}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {project.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Scroll Area */}
            <div className="grid min-h-0 flex-1 gap-8 overflow-y-auto p-6 sm:p-8 md:grid-cols-[1.4fr_0.9fr]">
              <div className="space-y-8 pr-1">
                
                {/* Overview */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                    System Architecture &amp; Context
                  </h3>
                  <p className="leading-relaxed text-slate-300 text-sm sm:text-base">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Highlights */}
                {project.highlights?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                      Engineering Highlights &amp; Metrics
                    </h3>
                    <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Features Built */}
                {project.features?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                      Core Implementation &amp; Capabilities
                    </h3>
                    <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar Stack / Links */}
              <aside className="space-y-6">
                
                {/* Technology Stack */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Project Links
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:border-cyan-400/50 hover:bg-white/10 px-4 py-3 text-xs font-semibold transition-all duration-300 cursor-pointer text-center"
                      >
                        <FaGithub size={15} />
                        View Source Repository
                      </a>
                    ) : (
                      <div className="rounded-xl border border-white/5 bg-white/[0.01] px-4 py-2.5 text-xs text-slate-500 font-mono text-center select-none italic">
                        Proprietary / Client Codebase
                      </div>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:opacity-90 px-4 py-3 text-xs font-bold transition-all duration-300 cursor-pointer text-center shadow-md shadow-cyan-500/20"
                      >
                        <FaExternalLinkAlt size={12} />
                        Launch Live Application
                      </a>
                    ) : (
                      <div className="rounded-xl border border-white/5 bg-white/[0.01] px-4 py-2.5 text-xs text-slate-500 font-mono text-center select-none italic">
                        Production Hospital Network Access
                      </div>
                    )}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-5 text-center space-y-2">
                  <p className="text-xs text-slate-300">
                    Interested in building a similar system for your business?
                  </p>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>Let's discuss requirements</span>
                    <ArrowRight size={13} />
                  </a>
                </div>

              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectDetailModal;
