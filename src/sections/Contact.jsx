import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertTriangle,
  Mail,
  Copy,
  Check,
  Sparkles,
  MapPin,
  Clock,
  MessageSquare
} from "lucide-react";
import { FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

// Formspree endpoint (preserved from original)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrevvwrg";

const projectTypes = [
  "Full-Stack Web App",
  ".NET Core / Backend API",
  "Real-Time Telemetry",
  "Full-Time Role",
  "General Inquiry",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText("deveshkumarupadhayay@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "Full-Stack Web App",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-4 sm:px-6 py-24 max-w-6xl mx-auto relative">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <span>Start A Conversation</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Let's Build Something <span className="gradient-text-cyan">Remarkable Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          Whether you have an upcoming project, need freelance web engineering, or are hiring for a
          .NET Core role — I'd love to connect.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-start">

        {/* Left Column: Direct channels and trust cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">
              Direct Contact
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              Prefer instant communication? Reach out via WhatsApp or email directly.
              I typically reply within a few hours.
            </p>

            {/* Email card with 1-click copy */}
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[11px] text-slate-400 font-medium uppercase tracking-wider">Email Address</span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    deveshkumarupadhayay@gmail.com
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-400 border border-white/10 text-xs font-semibold transition-all cursor-pointer flex-shrink-0"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp direct chat link */}
            <a
              href="https://wa.me/?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 hover:bg-emerald-900/30 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <span className="block text-[11px] text-emerald-300/80 font-medium uppercase tracking-wider">Instant Messaging</span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Chat on WhatsApp
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                Start Chat →
              </span>
            </a>

            {/* Info details */}
            <div className="pt-4 border-t border-white/5 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-cyan-400 flex-shrink-0" />
                <span>Response Time: &lt; 24 hours guaranteed</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                <span>Location: India (Available for Remote Worldwide)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: High-Converting Project Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
                <CheckCircle size={36} className="animate-bounce" />
              </div>
              <div className="space-y-2">
                <p className="text-white text-xl font-bold">
                  Message Sent Successfully!
                </p>
                <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, Devesh has received your message and will reply within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold text-white transition-all"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Project Type Picker */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  What are you looking to build?
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${formData.projectType === type
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-semibold shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                          : "bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {/* Hidden input to ensure projectType is included in formspree submission */}
                <input type="hidden" name="projectType" value={formData.projectType} />
              </div>

              {/* Name & Email in 2 columns on tablet/desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="e.g. Rahul Sharma"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="e.g. rahul@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm font-sans"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Project Details or Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, timeline, or requirements..."
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm font-sans resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 mt-2"
              >
                <Send size={16} />
                <span>{status === "sending" ? "Sending Details..." : "Send Project Inquiry"}</span>
              </button>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 border border-red-500/30 bg-red-950/30 rounded-xl p-3 text-red-400 text-xs justify-center"
                >
                  <AlertTriangle size={15} />
                  <span>Something went wrong. Please email directly at deveshkumarupadhayay@gmail.com</span>
                </motion.div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;