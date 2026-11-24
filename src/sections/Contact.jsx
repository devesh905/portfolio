import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, MapPin, Phone } from "lucide-react";
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
      className="py-24 sm:py-36 text-[#171412] border-t border-[#e2dad0] bg-[#efe9df] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-paper opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16 relative z-10">
        
        {/* Massive Statement */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-[#d6cebf] text-[#ff4829] text-xs font-mono font-semibold uppercase tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4829]" />
            <span>Direct Channels &bull; Opportunities</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-black font-display text-[#171412] tracking-tight leading-[1.05]">
            Have an engineering challenge?
            <br />
            <span className="text-[#ff4829]">
              Let's build together.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#57534e] leading-relaxed font-normal max-w-2xl pt-2">
            Whether you have an open full-time backend role (.NET / C#), high-frequency telemetry system, or require a generalist expert for frontier AI model training, reach out directly.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-2">
          
          {/* Primary Email Card (Span 7) */}
          <div className="lg:col-span-7 border border-[#e2dad0] hover:border-[#ff4829]/70 bg-white rounded-xl p-7 sm:p-9 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-sm hover:shadow-md group">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#ff4829] font-bold block">
                Direct Electronic Mail
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-[#171412] tracking-tight break-all">
                deveshkumarupadhayay@gmail.com
              </h3>
              <p className="text-xs sm:text-sm text-[#77716e] leading-relaxed font-normal">
                Best for job specifications, architectural inquiries, interviews, or contract briefs. Monitored daily.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#e2dad0]">
              <a
                href="mailto:deveshkumarupadhayay@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#ff4829] hover:bg-[#e03a1d] rounded-md transition-all shadow-sm cursor-pointer"
              >
                <Mail size={15} />
                <span>Send direct email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-[#171412] border border-[#d6cebf] hover:border-[#ff4829] bg-white rounded-md transition-colors cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-[#ff4829]" />
                    <span className="text-[#ff4829] font-bold">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-[#77716e]" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Instant Phone & WhatsApp Card (Span 5) */}
          <div className="lg:col-span-5 border border-[#e2dad0] hover:border-[#ff4829]/70 bg-white rounded-xl p-7 sm:p-9 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-sm hover:shadow-md group">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#ff4829] font-bold block">
                Direct Phone &amp; WhatsApp
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-[#171412] tracking-tight">
                +91 9058705009
              </h3>
              <p className="text-xs sm:text-sm text-[#77716e] leading-relaxed font-normal">
                Direct voice call, technical discussions, or instant messaging over WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#e2dad0]">
              <a
                href="https://wa.me/919058705009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#171412] hover:bg-[#ff4829] rounded-md transition-all shadow-sm"
              >
                <FaWhatsapp size={16} />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href="tel:+919058705009"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-[#171412] border border-[#d6cebf] hover:border-[#ff4829] bg-white rounded-md transition-colors shadow-sm"
              >
                <Phone size={13} className="text-[#77716e]" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

        </div>

        {/* Professional Profiles Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#e2dad0]">
          <a
            href="https://www.linkedin.com/in/devesh-kumar-upadhyay/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#e2dad0] hover:border-[#ff4829] bg-white rounded-xl p-5 flex items-center justify-between group transition-all shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-md bg-[#efe9df] border border-[#d6cebf] text-[#171412] group-hover:text-[#ff4829] transition-colors">
                <FaLinkedin size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-[#77716e] uppercase tracking-wider block font-semibold">
                  Professional Network
                </span>
                <span className="font-bold text-sm text-[#171412] group-hover:text-[#ff4829] transition-colors">
                  LinkedIn Profile
                </span>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[#77716e] group-hover:text-[#ff4829] transition-colors" />
          </a>

          <a
            href="https://github.com/devesh905"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#e2dad0] hover:border-[#ff4829] bg-white rounded-xl p-5 flex items-center justify-between group transition-all shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-md bg-[#efe9df] border border-[#d6cebf] text-[#171412] group-hover:text-[#ff4829] transition-colors">
                <FaGithub size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-[#77716e] uppercase tracking-wider block font-semibold">
                  Source Code &amp; Repos
                </span>
                <span className="font-bold text-sm text-[#171412] group-hover:text-[#ff4829] transition-colors">
                  GitHub Profile
                </span>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[#77716e] group-hover:text-[#ff4829] transition-colors" />
          </a>

          <div className="border border-[#e2dad0] bg-white rounded-xl p-5 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-md bg-[#efe9df] border border-[#d6cebf] text-[#ff4829]">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-[#77716e] uppercase tracking-wider block font-semibold">
                  Geographic Base
                </span>
                <span className="font-bold text-sm text-[#171412]">
                  Meerut / NCR, India
                </span>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-[#ff4829] animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
