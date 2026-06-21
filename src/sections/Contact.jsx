import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";

// Formspree endpoint (preserved from original)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrevvwrg";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-24 max-w-xl mx-auto relative">
      {/* Glow highlight blob */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
        >
          Get In Touch
        </motion.h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-panel border border-slate-800/80 rounded-[28px] p-6 sm:p-10 shadow-2xl relative"
      >
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10 flex flex-col items-center justify-center gap-4"
          >
            <CheckCircle size={48} className="text-cyan-400 animate-bounce" />
            <div className="space-y-1">
              <p className="text-white text-lg font-bold">
                Message Sent Successfully!
              </p>
              <p className="text-slate-400 text-sm max-w-xs mx-auto">
                Thank you for reaching out. I'll review your message and reply as soon as possible.
              </p>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-950/50 border border-slate-800/80 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] focus:ring-1 focus:ring-cyan-400 transition-all font-sans text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-950/50 border border-slate-800/80 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] focus:ring-1 focus:ring-cyan-400 transition-all font-sans text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or role requirements..."
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-950/50 border border-slate-800/80 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] focus:ring-1 focus:ring-cyan-400 transition-all font-sans text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-cyan-400/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
            >
              <Send size={15} />
              <span>{status === "sending" ? "Dispatching Message..." : "Send Message"}</span>
            </button>

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 border border-red-500/20 bg-red-950/20 rounded-xl p-3 text-red-400 text-xs justify-center"
              >
                <AlertTriangle size={14} />
                <span>Something went wrong. Please try again or email me directly.</span>
              </motion.div>
            )}
          </form>
        )}
      </motion.div>
    </section>
  );
}

export default Contact;