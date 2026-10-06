import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import ResumeModal from "./ResumeModal";

function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 border-b border-[#E5E5DE] bg-[#FBFBF9]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Subtle Top Metadata Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-10 border-b border-[#EFEFE8] text-xs font-mono text-[#787A72]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#183654]" />
            <span className="text-[#141413] font-medium">Devesh Kumar Upadhyay</span>
            <span className="text-[#C8C8BE]">/</span>
            <span>Portfolio &amp; Selected Systems</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-[#787A72]" />
              India &bull; Available for Remote Roles
            </span>
          </div>
        </motion.div>

        {/* Hero Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Statement (Left Column - 8 Cols) */}
          <div className="lg:col-span-8 space-y-7">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-[#183654] font-semibold block mb-3">
                Full-Stack &amp; .NET Systems Engineer
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#141413] tracking-tight leading-[1.14]">
                I build reliable web applications, distributed backend services, and real-time telemetry systems.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-[#4A4C46] leading-relaxed max-w-2xl font-normal"
            >
              Junior Software Developer with hands-on production experience in high-stakes healthcare engineering.
              From sub-second medical device streaming (HL7 / SignalR) to clean ASP.NET Core APIs and responsive React applications,
              I build software where data integrity, low latency, and clear architecture are paramount.
            </motion.p>

            {/* Direct CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#141413] hover:bg-[#2A2B29] rounded transition-all"
              >
                <span>View Selected Work</span>
                <ArrowDown size={15} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#141413] hover:text-black border border-[#D5D5CE] hover:border-[#141413] bg-white rounded transition-all"
              >
                <span>Discuss an Opportunity</span>
                <ArrowUpRight size={15} />
              </a>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#4A4C46] hover:text-[#141413] hover:underline underline-offset-4 transition-colors cursor-pointer"
              >
                <FileText size={15} />
                <span>Read CV (PDF)</span>
              </button>
            </motion.div>

            {/* Direct Verified Social & Communication Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-4 pt-6 text-xs text-[#787A72]"
            >
              <span className="font-mono uppercase tracking-wider text-[11px] text-[#9EA098]">
                Direct Links:
              </span>

              <a
                href="https://github.com/devesh905"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#4A4C46] hover:text-[#141413] transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={15} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/devesh-kumar-upadhyay/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#4A4C46] hover:text-[#183654] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:deveshkumarupadhayay@gmail.com"
                className="inline-flex items-center gap-1.5 text-[#4A4C46] hover:text-[#141413] transition-colors"
                aria-label="Direct Email"
              >
                <FaEnvelope size={14} />
                <span>Email</span>
              </a>

              <a
                href="https://wa.me/919058705009?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#1F3D2C] hover:text-black font-medium transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={15} />
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Engineering Practice Spec Sheet (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 border border-[#E5E5DE] bg-white rounded p-6 sm:p-7 space-y-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <div className="border-b border-[#EFEFE8] pb-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#787A72] block mb-1">
                Engineering Focus
              </span>
              <h2 className="text-sm font-bold text-[#141413]">
                Production Experience
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="font-mono text-[10px] text-[#9EA098] uppercase block">
                  Current Role &amp; Domain
                </span>
                <span className="text-[#141413] font-medium block mt-0.5">
                  Jr. Software Developer at Subharti Hospital
                </span>
                <span className="text-[#62645D] text-[11px] block mt-0.5">
                  Real-time intensive care telemetry &amp; device integration
                </span>
              </div>

              <div className="pt-3 border-t border-[#EFEFE8]">
                <span className="font-mono text-[10px] text-[#9EA098] uppercase block">
                  Primary Stack
                </span>
                <span className="text-[#141413] font-medium block mt-0.5">
                  C#, ASP.NET Core, SQL Server, React
                </span>
              </div>

              <div className="pt-3 border-t border-[#EFEFE8]">
                <span className="font-mono text-[10px] text-[#9EA098] uppercase block">
                  Protocols &amp; Streaming
                </span>
                <span className="text-[#141413] font-medium block mt-0.5">
                  SignalR, HL7 Protocols, TCP/IP Sockets, WebSockets
                </span>
              </div>

              <div className="pt-3 border-t border-[#EFEFE8]">
                <span className="font-mono text-[10px] text-[#9EA098] uppercase block">
                  Key Accomplishment
                </span>
                <span className="text-[#4A4C46] text-[11px] block mt-0.5 leading-relaxed">
                  Engineered 500Hz ECG waveform streaming with 25–45x delta compression and isolated scope concurrency.
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#EFEFE8]">
              <a
                href="#about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183654] hover:underline"
              >
                <span>Read engineering background</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>

        </div>

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