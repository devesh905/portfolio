import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText("deveshkumarupadhayay@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 text-white border-t border-[#2D1F57] relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(111, 79, 204, 0.32), transparent 70%), radial-gradient(circle at 85% 85%, rgba(111, 79, 204, 0.16), transparent 50%), #0F0924",
      }}
    >
      {/* Subtle Ambient Grid Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(111, 79, 204, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(111, 79, 204, 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16 relative z-10">
        
        {/* Massive Statement */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#25184F] border border-[#6f4fcc]/40 text-[#C4B5FD] text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6f4fcc]" />
            <span>Direct Channels &bull; Opportunities</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.04]">
            Have something difficult to build?
            <br />
            <span className="text-[#A78BFA]">Let's talk.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#DDD6FE] leading-relaxed font-normal max-w-2xl pt-2">
            Whether you have an open full-time engineering role, a real-time telemetry challenge, or want to discuss backend architecture, reach out directly.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-4">
          
          {/* Primary Email Card (Span 7) */}
          <div className="lg:col-span-7 border border-[#2F1F5E] hover:border-[#6f4fcc] bg-[#150E30]/90 rounded-xl p-7 sm:p-9 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(111,79,204,0.22)] backdrop-blur-sm group">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A78BFA] font-semibold block">
                Direct Electronic Mail
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight break-all">
                deveshkumarupadhayay@gmail.com
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B5FD] leading-relaxed font-normal">
                Best for job specifications, interview scheduling, technical notes, or architectural discussions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#27184D]">
              <a
                href="mailto:deveshkumarupadhayay@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#6f4fcc] hover:bg-[#5b3ab8] rounded transition-all shadow-[0_4px_24px_rgba(111,79,204,0.4)] cursor-pointer"
              >
                <Mail size={15} />
                <span>Send an email directly</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-white border border-[#342263] hover:border-[#6f4fcc] bg-[#1F1345] hover:bg-[#281859] rounded transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-[#C4B5FD]" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Instant WhatsApp Card (Span 5) */}
          <div className="lg:col-span-5 border border-[#2F1F5E] hover:border-[#6f4fcc] bg-[#150E30]/90 rounded-xl p-7 sm:p-9 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(111,79,204,0.22)] backdrop-blur-sm group">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold block">
                Instant Chat
              </span>
              <div className="flex items-center gap-3">
                <FaWhatsapp size={22} className="text-[#25D366]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  +91 9058705009
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#C4B5FD] leading-relaxed font-normal">
                Fastest for a quick introduction, urgent questions, or role turnaround discussions.
              </p>
            </div>

            <div className="pt-6 border-t border-[#27184D]">
              <a
                href="https://wa.me/919058705009?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white border border-[#342263] hover:border-[#6f4fcc] bg-[#1F1345] hover:bg-[#281859] rounded transition-all"
              >
                <MessageSquare size={14} className="text-[#A78BFA]" />
                <span>Message on WhatsApp</span>
                <ArrowUpRight size={13} className="text-[#C4B5FD]" />
              </a>
            </div>
          </div>

          {/* Social Profiles & Availability Banner (Full Width 12) */}
          <div className="lg:col-span-12 border border-[#2A1B54] bg-[#120B29] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#DDD6FE]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#A78BFA]" />
              <span>Meerut, India (IST / UTC+5:30) &bull; Open to Remote Roles Worldwide</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/devesh-kumar-upadhyay/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#A78BFA] hover:text-white font-semibold transition-colors"
              >
                <FaLinkedin size={14} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/devesh905"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C4B5FD] hover:text-white font-semibold transition-colors"
              >
                <FaGithub size={14} />
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;