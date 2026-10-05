import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ChevronRight, Sparkles, CheckCircle } from "lucide-react";

function ProjectCard({ title, description, tech, highlights, span, index, github, demo, status, onClick }) {
  const statusStyles = {
    Production: {
      text: "text-emerald-400 border-emerald-500/30 bg-emerald-950/30",
      dot: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
    },
    "In Progress": {
      text: "text-amber-400 border-amber-500/30 bg-amber-950/30",
      dot: "bg-amber-400 animate-pulse",
    },
  };

  const statusConfig = statusStyles[status] || {
    text: "text-slate-400 border-slate-700 bg-slate-800/30",
    dot: "bg-slate-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onClick={onClick}
      className={`group glass-panel glass-panel-hover rounded-[26px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer border border-white/10 ${span}`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
              {title}
            </h3>
          </div>
          {status && (
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${statusConfig.text}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot}`} />
              {status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5 group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>

        {/* Highlights Preview (if present) */}
        {highlights && highlights.length > 0 && (
          <div className="mb-5 space-y-1.5 bg-white/[0.02] border border-white/5 rounded-xl p-3">
            {highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle size={13} className="text-cyan-400 flex-shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-lg"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Info / Links */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
        <span className="flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
          View Architecture &amp; Case Study
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>

        <div className="flex gap-3 items-center" onClick={(e) => e.stopPropagation()}>
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/5"
              aria-label={`View code for ${title}`}
            >
              <FaGithub size={13} />
              <span>Source</span>
            </a>
          ) : (
            <span className="text-[10px] text-slate-500 font-mono italic">Client/Private</span>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/30 px-2.5 py-1 rounded-lg border border-cyan-500/30"
              aria-label={`View live demo for ${title}`}
            >
              <FaExternalLinkAlt size={11} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;