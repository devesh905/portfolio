import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight, MapPin, Clock, Briefcase, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText("deveshkumarupadhayay@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FBFBF9] border-t border-[#E5E5DE]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-wider text-[#183654] font-semibold block mb-2.5">
            04 &mdash; Direct Contact &amp; Channels
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#141413] tracking-tight leading-tight mb-4">
            Ready to discuss an engineering challenge or full-time role?
          </h2>
          <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
            Direct lines of communication without automated forms or unnecessary intermediaries.
            Feel free to drop an email, start a quick WhatsApp chat, or connect on LinkedIn.
          </p>
        </div>

        {/* Direct Communication Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Primary Email Card (Span 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 border border-[#E5E5DE] bg-white rounded-lg p-7 sm:p-9 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#787A72]">
                <span className="uppercase tracking-wider font-semibold text-[#183654]">
                  Primary Electronic Mail
                </span>
                <span className="flex items-center gap-1.5 text-[#1F3D2C] font-sans">
                  <span className="w-2 h-2 rounded-full bg-[#2E6B47]" />
                  Active Inquiries
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight">
                  deveshkumarupadhayay@gmail.com
                </h3>
                <p className="text-xs sm:text-sm text-[#62645D] mt-2 leading-relaxed">
                  Best for engineering job specs, detailed project briefs, technical architecture discussions, or formal interview scheduling.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-[#EFEFE8]">
              <a
                href="mailto:deveshkumarupadhayay@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#141413] hover:bg-[#2A2B29] rounded transition-all"
              >
                <Mail size={14} />
                <span>Launch Mail Client</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#4A4C46] hover:text-[#141413] border border-[#E5E5DE] bg-[#FBFBF9] hover:bg-white rounded transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-[#1F3D2C]" />
                    <span className="text-[#1F3D2C] font-semibold">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy to Clipboard</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Instant WhatsApp Card (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 border border-[#E5E5DE] bg-white rounded-lg p-7 sm:p-9 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#787A72]">
                <span className="uppercase tracking-wider font-semibold text-[#183654]">
                  Direct Instant Messaging
                </span>
                <span className="text-[#787A72]">Fastest</span>
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <FaWhatsapp size={22} className="text-[#25D366]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight">
                    +91 9058705009
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#62645D] mt-2 leading-relaxed">
                  Direct WhatsApp line for quick questions, quick turnaround role introductions, or immediate engineering collaboration.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#EFEFE8]">
              <a
                href="https://wa.me/919058705009?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#141413] border border-[#D5D5CE] hover:border-[#141413] bg-[#FBFBF9] hover:bg-white rounded transition-all"
              >
                <MessageSquare size={14} className="text-[#183654]" />
                <span>Start WhatsApp Conversation</span>
                <ArrowUpRight size={13} className="text-[#787A72]" />
              </a>
            </div>
          </motion.div>

          {/* Professional Channels: LinkedIn & GitHub (Span 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-7 border border-[#E5E5DE] bg-white rounded-lg p-7 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-[#787A72] block border-b border-[#EFEFE8] pb-3 font-semibold">
              Professional Profiles &amp; Source Code
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <a
                href="https://www.linkedin.com/in/devesh-kumar-upadhyay/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded border border-[#EFEFE8] hover:border-[#C8C8BE] bg-[#FBFBF9] hover:bg-white transition-colors group flex items-start justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#141413]">
                    <FaLinkedin size={16} className="text-[#0A66C2]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-xs text-[#62645D] block font-mono">
                    in/devesh-kumar-upadhyay
                  </span>
                  <span className="text-[11px] text-[#787A72] block">
                    Full career trajectory &amp; recommendations
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-[#787A72] group-hover:text-[#141413] transition-colors mt-0.5" />
              </a>

              <a
                href="https://github.com/devesh905"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded border border-[#EFEFE8] hover:border-[#C8C8BE] bg-[#FBFBF9] hover:bg-white transition-colors group flex items-start justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#141413]">
                    <FaGithub size={16} className="text-[#141413]" />
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-xs text-[#62645D] block font-mono">
                    github.com/devesh905
                  </span>
                  <span className="text-[11px] text-[#787A72] block">
                    Open source codebases &amp; architecture demos
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-[#787A72] group-hover:text-[#141413] transition-colors mt-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Operational Context & Availability (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-5 border border-[#E5E5DE] bg-[#F3F3ED] rounded-lg p-7 space-y-4 text-xs text-[#4A4C46]"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-[#787A72] block border-b border-[#E5E5DE] pb-3 font-semibold">
              Availability &amp; Logistics
            </span>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <Briefcase size={15} className="text-[#183654] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#141413] block">Status:</span>
                  <span>Open to Full-Time Software Engineering &amp; Select Technical Contracting</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#787A72] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#141413] block">Location:</span>
                  <span>Meerut, UP, India (IST / UTC+5:30) &bull; Open to Remote Worldwide</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={15} className="text-[#787A72] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#141413] block">Turnaround Time:</span>
                  <span>Usually responds within 24 business hours</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;