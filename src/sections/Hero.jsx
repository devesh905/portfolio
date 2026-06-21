import { useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ResumeModal from "./ResumeModal";

function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Repeating ECG waveform path (isoelectric line + P-Q-R-S-T complexes)
  const ecgPath = "M 0 50 L 80 50 Q 90 42 100 50 L 120 50 L 125 58 L 132 10 L 139 85 L 144 50 L 155 40 Q 165 50 175 50 L 260 50 Q 270 42 280 50 L 300 50 L 305 58 L 312 10 L 319 85 L 324 50 L 335 40 Q 345 50 355 50 L 440 50 Q 450 42 460 50 L 480 50 L 485 58 L 492 10 L 499 85 L 504 50 L 515 40 Q 525 50 535 50 L 620 50 Q 630 42 640 50 L 660 50 L 665 58 L 672 10 L 679 85 L 684 50 L 695 40 Q 705 50 715 50 L 800 50";

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden bg-grid-pattern pt-28 pb-16"
    >
      {/* Recruiter-focused Subtle Telemetry Stats Background */}
      <div className="absolute top-24 left-6 hidden lg:flex flex-col gap-1.5 font-mono text-[10px] text-cyan-500/40 select-none text-left z-0">
        <div>SYS_STATUS: ACTIVE</div>
        <div>DATA_STREAM: ECG_LIVE</div>
        <div>RATE: 500 Hz</div>
      </div>
      <div className="absolute top-24 right-6 hidden lg:flex flex-col gap-1.5 font-mono text-[10px] text-cyan-500/40 select-none text-right z-0">
        <div>COMPRESSION: DELTA_45X</div>
        <div>TCP_GATEWAY: ONLINE</div>
        <div>LATENCY: &lt; 2ms</div>
      </div>

      {/* Ambient Glowing Neon Blobs */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow top-1/4 -left-12 -z-10"></div>
      <div className="absolute w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow bottom-1/4 -right-12 -z-10"></div>

      {/* Animated Live ECG Telemetry Waveform Background */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full opacity-[0.12] pointer-events-none select-none -z-10">
        <svg
          viewBox="0 0 800 100"
          className="w-full h-32 md:h-48"
          preserveAspectRatio="none"
        >
          <path
            d={ecgPath}
            fill="none"
            stroke="url(#ecgGradient)"
            strokeWidth="2"
            className="animate-ecg"
          />
          <defs>
            <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Content */}
      <div className="max-w-3xl flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/20 text-cyan-400 font-mono text-xs font-semibold mb-6 tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          Ready to Deploy &amp; Build
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base text-cyan-400 font-mono tracking-widest uppercase mb-3"
        >
          Hi, my name is
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6 font-sans bg-clip-text bg-gradient-to-b from-white via-white to-slate-400"
        >
          Devesh Kumar Upadhyay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-sans"
        >
          I am a <span className="text-white font-semibold">.NET Core Developer</span> building real-time healthcare systems. 
          Specialized in medical telemetry (ICU streams), AI-driven voice assistants, and highly scalable distributed backends.
        </motion.p>

        {/* Buttons / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
        >
          <button
            onClick={() => setIsResumeOpen(true)}
            className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 cursor-pointer transform hover:-translate-y-0.5"
          >
            <FileText size={18} />
            View Resume
          </button>
          <a
            href="https://github.com/devesh905"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 border border-slate-700 bg-slate-900/40 backdrop-blur text-slate-200 hover:text-white hover:border-cyan-400 hover:bg-slate-900/80 px-7 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </motion.div>
      </div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/DeveshKumarUpadhyay.pdf"
      />
    </section>
  );
}

export default Hero;