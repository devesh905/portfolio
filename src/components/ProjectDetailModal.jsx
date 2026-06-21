import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { X } from "lucide-react";

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
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel border border-slate-800/80 rounded-[28px] w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex shrink-0 items-start justify-between gap-6 p-6 border-b border-slate-900/60">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 border border-cyan-400/20">
                  {project.status}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white font-sans">{project.title}</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="rounded-full bg-slate-900 border border-slate-850 p-2.5 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Scroll Area */}
            <div className="grid min-h-0 flex-1 gap-6 overflow-y-auto p-6 md:grid-cols-[1.4fr_0.90fr]">
              <div className="space-y-8 pr-2">
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono text-cyan-400/95">
                    Overview
                  </h3>
                  <p className="leading-relaxed text-slate-300 text-sm md:text-base font-sans">
                    {project.fullDescription}
                  </p>
                </div>

                {project.highlights?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono text-cyan-400/95">
                      Key Highlights &amp; Performance
                    </h3>
                    <ul className="space-y-2.5 text-slate-350 text-sm">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.features?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono text-cyan-400/95">
                      What I Built
                    </h3>
                    <ul className="space-y-2.5 text-slate-350 text-sm">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <span className="mt-1 text-cyan-400 text-base font-mono leading-none">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar Stack / Links */}
              <aside className="space-y-6">
                <div className="rounded-2xl border border-slate-900 bg-slate-900/40 p-5 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-400/10 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-900 bg-slate-900/40 p-5 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                    Project Links
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 hover:text-white hover:border-cyan-400 hover:bg-slate-900/80 px-4 py-2.5 text-xs font-semibold transition-all duration-300 cursor-pointer text-center"
                      >
                        <FaGithub size={14} />
                        View Code
                      </a>
                    ) : (
                      <div className="rounded-xl border border-slate-800/40 bg-slate-900/10 px-4 py-2.5 text-xs text-slate-500 font-mono text-center select-none italic">
                        Codebase is Private
                      </div>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:opacity-90 px-4 py-2.5 text-xs font-bold transition-all duration-300 cursor-pointer text-center"
                      >
                        <FaExternalLinkAlt size={12} />
                        Open Live Demo
                      </a>
                    ) : (
                      <div className="rounded-xl border border-slate-800/40 bg-slate-900/10 px-4 py-2.5 text-xs text-slate-500 font-mono text-center select-none italic">
                        Live Demo unavailable
                      </div>
                    )}
                  </div>
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
