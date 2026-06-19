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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0a0e17] border border-white/10 rounded-[32px] w-full max-w-5xl max-h-[calc(100dvh-2rem)] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex shrink-0 items-start justify-between gap-4 p-6 border-b border-white/10">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                  {project.status}
                </p>
                <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                <p className="text-sm text-white/60 max-w-2xl">
                  {project.description}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="rounded-full bg-white/5 p-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid min-h-0 flex-1 gap-6 overflow-y-auto p-6 lg:grid-cols-[1.5fr_0.9fr]">
              <div className="space-y-6 text-white/80">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Overview</h3>
                  <p className="leading-7 text-white/70">
                    {project.fullDescription}
                  </p>
                </div>

                {project.highlights?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">Key highlights</h3>
                    <ul className="space-y-2 list-disc list-inside text-white/70">
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.features?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">What I built</h3>
                    <ul className="space-y-2 text-white/70">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1 text-cyan-400">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-white/80">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Technology stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-2 rounded-2xl"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Project links</h3>
                  <div className="flex flex-col gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                      >
                        <FaGithub size={16} />
                        View code
                      </a>
                    ) : (
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/50">
                        Source unavailable
                      </div>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-cyan-500/10 px-4 py-3 text-sm font-medium text-cyan-200 hover:bg-cyan-500/15 transition-colors"
                      >
                        <FaExternalLinkAlt size={14} />
                        Open live demo
                      </a>
                    ) : (
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/50">
                        No live demo available
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
