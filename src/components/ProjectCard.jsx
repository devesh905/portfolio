import { motion } from "framer-motion";

function ProjectCard({ title, description, tech, span, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 ${span}`}
    >
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/60 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;