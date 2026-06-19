import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, tech, span, index, github, demo, status, onClick }) {
  const statusStyles = {
    Production: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    "In Progress": "text-amber-400 bg-amber-400/10 border-amber-400/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 flex flex-col ${span}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {status && (
          <span
            className={`text-xs font-mono px-2 py-1 rounded-md border whitespace-nowrap ${
              statusStyles[status] || "text-white/60 bg-white/5 border-white/10"
            }`}
          >
            {status}
          </span>
        )}
      </div>

      <p className="text-white/60 mb-4 flex-grow">{description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-auto pt-2 border-t border-white/10">
        <button
          type="button"
          onClick={onClick}
          className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-left text-sm font-medium text-cyan-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-colors"
        >
          View details
        </button>

        <div className="flex flex-wrap gap-3 items-center">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={16} />
              Code
            </a>
          ) : (
            <span className="text-sm text-white/30 italic">Private codebase</span>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-cyan-400 transition-colors"
            >
              <FaExternalLinkAlt size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;