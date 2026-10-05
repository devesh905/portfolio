import { FaGithub, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="w-full border-t border-white/10 bg-[#04060d] pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Pre-footer Callout Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/20 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-blue-950/30">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <span>Let's Build Something Exceptional</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Have an exciting project in mind?
            </h3>
            <p className="text-slate-300 text-sm max-w-lg">
              I'm open for freelance web applications, scalable .NET backends, and full-time opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="https://wa.me/?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm transition-all"
            >
              <FaWhatsapp size={16} className="text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand block */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-lg font-bold text-white tracking-tight">
                Devesh Kumar Upadhyay
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-xs text-slate-400">
              Full-Stack Web &amp; .NET Core Systems Developer • India
            </p>
          </div>

          {/* Social / Contact Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/devesh905"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-white/10 transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub size={17} />
            </a>
            <a
              href="mailto:deveshkumarupadhayay@gmail.com"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/10 transition-all"
              aria-label="Send Direct Email"
            >
              <FaEnvelope size={16} />
            </a>
            <a
              href="https://wa.me/?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-white/10 transition-all"
              aria-label="WhatsApp Contact"
            >
              <FaWhatsapp size={17} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-pointer"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <FaArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Client Promotion Notice & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <span>Website Designed &amp; Engineered by</span>
            <span className="text-white font-semibold">Devesh Kumar Upadhyay</span>
          </div>

          <div className="font-mono text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} &bull; Crafted with React, Tailwind &amp; Framer Motion
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;