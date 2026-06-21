import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ChevronRight } from "lucide-react";

function ProjectCard({ title, description, tech, span, index, github, demo, status, onClick }) {
  const statusStyles = {
    Production: {
      text: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20",
      dot: "bg-emerald-400"
    },
    "In Progress": {
      text: "text-amber-400 border-amber-500/20 bg-amber-950/20",
      dot: "bg-amber-400 animate-pulse"
    },
  };

  const statusConfig = statusStyles[status] || {
    text: "text-slate-400 border-slate-700 bg-slate-800/20",
    dot: "bg-slate-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onClick={onClick}
      className={`group glass-panel glass-panel-hover rounded-[24px] p-6 flex flex-col justify-between cursor-pointer ${span}`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>
          {status && (
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusConfig.text}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot}`} />
              {status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-350 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-500/10 px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Info / Links */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-900/60 mt-auto">
        <span className="flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
          View details
          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </span>

        <div className="flex gap-4 items-center" onClick={(e) => e.stopPropagation()}>
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              aria-label={`View code for ${title}`}
            >
              <FaGithub size={14} />
              <span>Code</span>
            </a>
          ) : (
            <span className="text-[11px] text-slate-500 font-mono italic">Private Repo</span>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              aria-label={`View live demo for ${title}`}
            >
              <FaExternalLinkAlt size={12} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;