import { FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full border-t border-slate-900/60 bg-slate-950/20 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand block */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-white text-sm font-bold font-sans">
            Devesh Kumar Upadhyay
          </p>
          <p className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
            .NET Core Developer
          </p>
        </div>

        {/* Social / Contact Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/devesh905"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/25 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="#contact"
            className="w-9 h-9 rounded-full bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/25 transition-all duration-300"
            aria-label="Send Message"
          >
            <FaEnvelope size={16} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[11px] font-mono text-slate-500 tracking-wider">
          &copy; {new Date().getFullYear()} &bull; Built with React &amp; Tailwind
        </div>
      </div>
    </footer>
  );
}

export default Footer;