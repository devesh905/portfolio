import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ArrowUpRight, Check } from "lucide-react";

function ProjectCard({ title, description, tech, highlights, index, github, demo, status, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={onClick}
      className="border border-[#E5E5DE] bg-white rounded-lg p-6 sm:p-7 flex flex-col justify-between cursor-pointer hover:border-[#C8C8BE] transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-[#141413]">
            {title}
          </h3>
          {status && (
            <span className="text-[11px] font-mono font-medium text-[#183654] bg-[#EDF3F9] px-2.5 py-0.5 rounded border border-[#D0DFEF]">
              {status}
            </span>
          )}
        </div>

        <p className="text-[#4A4C46] text-xs sm:text-sm leading-relaxed mb-4">
          {description}
        </p>

        {highlights && highlights.length > 0 && (
          <div className="mb-4 space-y-1.5 bg-[#FBFBF9] border border-[#EFEFE8] rounded p-3 text-xs text-[#383A35]">
            {highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check size={13} className="text-[#183654] flex-shrink-0 mt-0.5" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono font-medium text-[#141413] bg-[#F3F3ED] border border-[#E5E5DE] px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[#EFEFE8] mt-auto">
        <span className="flex items-center gap-1 text-xs font-semibold text-[#183654]">
          View Architecture &amp; Case Study
          <ArrowUpRight size={13} />
        </span>

        <div className="flex gap-3 items-center" onClick={(e) => e.stopPropagation()}>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#4A4C46] hover:text-[#141413] flex items-center gap-1"
              aria-label={`View code for ${title}`}
            >
              <FaGithub size={13} />
              <span>Source</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#4A4C46] hover:text-[#141413] flex items-center gap-1"
              aria-label={`View demo for ${title}`}
            >
              <FaExternalLinkAlt size={11} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;