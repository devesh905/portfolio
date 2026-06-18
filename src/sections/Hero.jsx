import { useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ResumeModal from "./ResumeModal";

function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      <div className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse top-1/3 -z-10"></div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-cyan-400 font-mono mb-4"
      >
        Hi, I'm
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4"
      >
        Devesh
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl text-white/70 max-w-xl"
      >
        .NET Core Developer building real-time healthcare systems —
        ICU monitoring, AI voice assistants, and scalable backends.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <button
          onClick={() => setIsResumeOpen(true)}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <FileText size={18} />
          View Resume
        </button>
        <a
          href="https://github.com/devesh905"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors"
        >
          <FaGithub size={18} />
          GitHub
        </a>
      </motion.div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/DeveshKumarUpadhyay.pdf"
      />
    </section>
  );
}

export default Hero;