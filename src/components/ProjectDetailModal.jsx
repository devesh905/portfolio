import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { X, Check, ArrowRight } from "lucide-react";

function ProjectDetailModal({ project, onClose }) {
  // Close on Escape key
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
          className="fixed inset-0 bg-[#141413]/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="border border-[#E5E5DE] rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col bg-[#FBFBF9] text-[#141413]"
          >
            {/* Header */}
            <div className="flex shrink-0 items-start justify-between gap-6 p-6 sm:p-8 border-b border-[#E5E5DE] bg-white">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3 text-xs font-mono text-[#787A72]">
                  <span>{project.number || "CASE STUDY"}</span>
                  <span>&bull;</span>
                  <span>{project.role || "Engineering Case Study"}</span>
                  <span>&bull;</span>
                  <span className="font-semibold text-[#183654]">{project.status}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm text-[#4A4C46] max-w-2xl font-normal">
                  {project.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="rounded border border-[#E5E5DE] p-2 text-[#787A72] hover:text-[#141413] hover:border-[#C8C8BE] bg-[#FBFBF9] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Scroll Area */}
            <div className="grid min-h-0 flex-1 gap-8 overflow-y-auto p-6 sm:p-8 md:grid-cols-[1.4fr_0.9fr]">
              <div className="space-y-8 pr-1">
                
                {/* The Engineering Problem */}
                {project.problem && (
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#183654]">
                      01 // The Engineering Problem
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[#4A4C46]">
                      {project.problem}
                    </p>
                  </div>
                )}

                {/* Architecture & Decisions */}
                <div className="space-y-2.5">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#183654]">
                    02 // System Architecture &amp; Decisions
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4C46]">
                    {project.fullDescription || project.description}
                  </p>
                </div>

                {/* Real Engineering Highlights */}
                {project.highlights?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#183654]">
                      03 // Implementation Highlights
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#383A35]">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check size={15} className="text-[#183654] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Core Features */}
                {project.features?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#183654]">
                      04 // Capabilities &amp; Modules
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4A4C46]">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-[#787A72] font-mono text-xs mt-0.5">&mdash;</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                
                {/* Tech Stack */}
                <div className="border border-[#E5E5DE] bg-white rounded p-5 space-y-3">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#787A72]">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono font-medium text-[#141413] bg-[#F3F3ED] border border-[#E5E5DE] px-2.5 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="border border-[#E5E5DE] bg-white rounded p-5 space-y-3">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#787A72]">
                    Verification &amp; Links
                  </h4>
                  <div className="flex flex-col gap-2">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded border border-[#141413] bg-[#141413] text-white hover:bg-[#2A2B29] px-4 py-2.5 text-xs font-semibold transition-all"
                      >
                        <FaGithub size={14} />
                        <span>View Source on GitHub</span>
                      </a>
                    ) : (
                      <div className="rounded border border-[#EFEFE8] bg-[#FBFBF9] px-3.5 py-2.5 text-xs text-[#787A72] font-mono text-center">
                        Codebase: Proprietary Hospital Deployment
                      </div>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded border border-[#D5D5CE] bg-white hover:border-[#141413] text-[#141413] px-4 py-2.5 text-xs font-semibold transition-all"
                      >
                        <FaExternalLinkAlt size={11} />
                        <span>Open Video / Demo Folder</span>
                      </a>
                    ) : (
                      <div className="rounded border border-[#EFEFE8] bg-[#FBFBF9] px-3.5 py-2.5 text-xs text-[#787A72] font-mono text-center">
                        Live System: Secure Internal Hospital Network
                      </div>
                    )}
                  </div>
                </div>

                {/* Consultation Note */}
                <div className="border border-[#E5E5DE] bg-[#F3F3ED] rounded p-5 space-y-2">
                  <p className="text-xs text-[#4A4C46] leading-relaxed">
                    Have an upcoming project requiring similar real-time reliability or backend scalability?
                  </p>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183654] hover:underline"
                  >
                    <span>Discuss project requirements</span>
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
