import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { X, Check, ArrowRight, ExternalLink } from "lucide-react";

function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="border border-[#e2dad0] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col bg-white text-[#171412]"
          >
            {/* Header */}
            <div className="flex shrink-0 items-start justify-between gap-6 p-6 sm:p-7 border-b border-[#e2dad0] bg-[#efe9df]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 text-xs font-mono text-[#77716e]">
                  <span className="text-[#ff4829] font-bold">{project.number || "01"}</span>
                  <span>&bull;</span>
                  <span>{project.role}</span>
                  <span>&bull;</span>
                  <span className="font-semibold text-[#171412]">{project.status}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-[#171412] tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm text-[#57534e] max-w-2xl font-normal">
                  {project.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project modal"
                className="rounded-md border border-[#d6cebf] p-2 text-[#77716e] hover:text-[#171412] hover:border-[#ff4829] bg-white transition-colors cursor-pointer shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Scroll Area */}
            <div className="grid min-h-0 flex-1 gap-8 overflow-y-auto p-6 sm:p-8 md:grid-cols-[1.4fr_0.9fr]">
              <div className="space-y-6 pr-1">
                {/* The Operational Problem */}
                {project.problem && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff4829]">
                      01 &mdash; The Operational Problem
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[#57534e]">
                      {project.problem}
                    </p>
                  </div>
                )}

                {/* Architecture & Implementation */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff4829]">
                    02 &mdash; Architecture &amp; Engineering
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#57534e]">
                    {project.description}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                {project.highlights?.length > 0 && (
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff4829]">
                      03 &mdash; Engineering Highlights
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#57534e]">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check size={14} className="text-[#ff4829] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar: Tech Stack, Metrics & Links */}
              <div className="space-y-5 border-t border-[#e2dad0] pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                {/* Stack */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#77716e]">
                    Technology &amp; Protocols
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech?.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-[#171412] bg-[#efe9df] border border-[#d6cebf] px-2.5 py-1 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2.5 pt-4 border-t border-[#e2dad0]">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#ff4829] hover:bg-[#e03a1d] rounded-md transition-all cursor-pointer shadow-sm"
                    >
                      <ExternalLink size={13} />
                      <span>Watch Live System Demo</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#171412] hover:text-[#ff4829] border border-[#d6cebf] hover:border-[#ff4829] bg-white rounded-md transition-all cursor-pointer shadow-sm"
                    >
                      <FaGithub size={14} />
                      <span>Inspect Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-[#e2dad0] bg-[#efe9df] px-6 py-3.5 text-xs font-mono text-[#77716e]">
              <span>Devesh Kumar Upadhyay &bull; Production Portfolio</span>
              <button
                type="button"
                onClick={onClose}
                className="hover:text-[#171412] cursor-pointer transition-colors font-semibold"
              >
                Close ESC
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectDetailModal;
