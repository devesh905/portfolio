import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Sparkles, CheckCircle2, MessageSquare, Terminal } from "lucide-react";
import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ResumeModal from "./ResumeModal";

function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Repeating ECG waveform path (smooth, low-opacity background visual)
  const ecgPath = "M 0 50 L 80 50 Q 90 42 100 50 L 120 50 L 125 58 L 132 10 L 139 85 L 144 50 L 155 40 Q 165 50 175 50 L 260 50 Q 270 42 280 50 L 300 50 L 305 58 L 312 10 L 319 85 L 324 50 L 335 40 Q 345 50 355 50 L 440 50 Q 450 42 460 50 L 480 50 L 485 58 L 492 10 L 499 85 L 504 50 L 515 40 Q 525 50 535 50 L 620 50 Q 630 42 640 50 L 660 50 L 665 58 L 672 10 L 679 85 L 684 50 L 695 40 Q 705 50 715 50 L 800 50";

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 overflow-hidden bg-grid-pattern pt-32 pb-20"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -top-20 -left-20 pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] top-1/3 -right-20 pointer-events-none -z-10" />
      <div className="absolute w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] bottom-10 left-1/3 pointer-events-none -z-10" />

      {/* Subtle Live ECG Waveform Overlay */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full opacity-[0.08] pointer-events-none select-none -z-10">
        <svg viewBox="0 0 800 100" className="w-full h-36 md:h-52" preserveAspectRatio="none">
          <path d={ecgPath} fill="none" stroke="url(#ecgGradientHero)" strokeWidth="2.5" className="animate-ecg" />
          <defs>
            <linearGradient id="ecgGradientHero" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-5xl flex flex-col items-center relative z-10">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/25 text-emerald-300 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span>Available for Freelance Projects &amp; Full-Time Roles</span>
        </motion.div>

        {/* Introduction Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-cyan-400 text-sm sm:text-base font-semibold tracking-wider uppercase mb-3"
        >
          <span>Full-Stack &amp; .NET Core Engineer</span>
        </motion.div>

        {/* High-Impact Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl text-center"
        >
          Building <span className="gradient-text-cyan whitespace-nowrap">High-Performance</span> Web Apps
          <br className="hidden sm:inline" />
          {" "}&amp; <span className="gradient-text-accent whitespace-nowrap">Real-Time</span> Systems.
        </motion.h1>

        {/* Professional Bio / Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal mb-8"
        >
          I'm <span className="text-white font-semibold">Devesh Kumar Upadhyay</span>. I help startups and businesses
          transform complex ideas into sleek, scalable web applications, robust .NET Core backends,
          and sub-second real-time telemetry dashboards.
        </motion.p>

        {/* Value Pills / Specializations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 text-xs sm:text-sm font-medium text-slate-300"
        >
          <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5 backdrop-blur-sm">
            <CheckCircle2 size={14} className="text-cyan-400" />
            Modern React Frontends
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5 backdrop-blur-sm">
            <CheckCircle2 size={14} className="text-cyan-400" />
            Scalable ASP.NET Core &amp; APIs
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5 backdrop-blur-sm">
            <CheckCircle2 size={14} className="text-cyan-400" />
            SignalR &amp; 500Hz Telemetry
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5 backdrop-blur-sm">
            <CheckCircle2 size={14} className="text-cyan-400" />
            AI &amp; Speech Systems
          </span>
        </motion.div>

        {/* Call-to-Actions (Client-First) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-slate-950 font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-blue-400 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Start a Project / Hire Me</span>
            <ArrowRight size={17} />
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-slate-200 font-semibold bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore Work</span>
          </a>

          <button
            onClick={() => setIsResumeOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-300 hover:text-white font-medium bg-transparent hover:bg-white/5 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            <FileText size={16} className="text-cyan-400" />
            <span>Resume</span>
          </button>
        </motion.div>

        {/* Quick Social & Direct Chat Connections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-4 mt-10 pt-6 border-t border-white/5"
        >
          <span className="text-xs text-slate-400 font-medium">Quick Connect:</span>

          <a
            href="https://github.com/devesh905"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-white/10 transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="mailto:deveshkumarupadhayay@gmail.com"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/10 transition-all"
            aria-label="Direct Email"
          >
            <FaEnvelope size={16} />
          </a>

          <a
            href="https://wa.me/?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/40 hover:text-emerald-300 text-xs font-semibold transition-all"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={16} />
            <span>WhatsApp</span>
          </a>
        </motion.div>

        {/* Live Metrics Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full mt-14 pt-8"
        >
          <div className="glass-panel rounded-2xl p-4 text-center border border-white/5 hover:border-cyan-500/20 transition-all">
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-sans">&lt; 2ms</span>
            <span className="text-[11px] sm:text-xs font-medium text-cyan-400 uppercase tracking-wider">Stream Latency</span>
          </div>

          <div className="glass-panel rounded-2xl p-4 text-center border border-white/5 hover:border-cyan-500/20 transition-all">
            <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-300 font-sans">45x</span>
            <span className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">Delta Compression</span>
          </div>

          <div className="glass-panel rounded-2xl p-4 text-center border border-white/5 hover:border-cyan-500/20 transition-all">
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-sans">500 Hz</span>
            <span className="text-[11px] sm:text-xs font-medium text-cyan-400 uppercase tracking-wider">Telemetry Rate</span>
          </div>

          <div className="glass-panel rounded-2xl p-4 text-center border border-white/5 hover:border-cyan-500/20 transition-all">
            <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-sans">100%</span>
            <span className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">Production Uptime</span>
          </div>
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