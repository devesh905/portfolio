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
    <section id="contact" className="py-24 sm:py-36 bg-[#0D1017] text-white border-t border-[#232B3A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Massive Statement */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#162030] border border-[#2D4A77] text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Direct Channels &bull; Opportunities</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.04]">
            Have something difficult to build?
            <br />
            <span className="text-blue-400">Let's talk.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl pt-2">
            Whether you have an open full-time engineering role, a real-time telemetry challenge, or want to discuss backend architecture, reach out directly.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-4">
          
          {/* Primary Email Card (Span 7) */}
          <div className="lg:col-span-7 border border-[#232B3A] bg-[#121620] rounded-xl p-7 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold block">
                Direct Electronic Mail
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight break-all">
                deveshkumarupadhayay@gmail.com
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Best for job specifications, interview scheduling, technical notes, or architectural discussions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#1E2738]">
              <a
                href="mailto:deveshkumarupadhayay@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1E56A0] hover:bg-blue-600 rounded transition-all shadow-sm"
              >
                <Mail size={15} />
                <span>Send an email directly</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-slate-200 hover:text-white border border-[#2A3548] hover:border-slate-400 bg-[#161C28] rounded transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Instant WhatsApp Card (Span 5) */}
          <div className="lg:col-span-5 border border-[#232B3A] bg-[#121620] rounded-xl p-7 sm:p-9 flex flex-col justify-between space-y-6">
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
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Fastest for a quick introduction, urgent questions, or role turnaround discussions.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E2738]">
              <a
                href="https://wa.me/919058705009?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-100 hover:text-white border border-[#2A3548] hover:border-slate-400 bg-[#161C28] rounded transition-all"
              >
                <MessageSquare size={14} className="text-blue-400" />
                <span>Message on WhatsApp</span>
                <ArrowUpRight size={13} className="text-slate-400" />
              </a>
            </div>
          </div>

          {/* Social Profiles & Availability Banner (Full Width 12) */}
          <div className="lg:col-span-12 border border-[#232B3A] bg-[#161C28] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-slate-400" />
              <span>Meerut, India (IST / UTC+5:30) &bull; Open to Remote Roles Worldwide</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/devesh-kumar-upadhyay/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                <FaLinkedin size={14} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/devesh905"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white font-semibold transition-colors"
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