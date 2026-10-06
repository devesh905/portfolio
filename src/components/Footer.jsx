import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";

function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="w-full border-t border-[#1E2738] bg-[#090C12] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#1A2230]">
          
          {/* Brand Info */}
          <div className="space-y-1">
            <span className="font-sans text-base sm:text-lg font-bold text-white tracking-tight block">
              Devesh Kumar Upadhyay
            </span>
            <span className="font-mono text-xs text-blue-400 block">
              Full-Stack &amp; .NET Engineer
            </span>
          </div>

          {/* Direct Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <a
              href="https://github.com/devesh905"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/devesh-kumar-upadhyay/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="mailto:deveshkumarupadhayay@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>

            <a
              href="https://wa.me/919058705009"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom Sub-row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; 2026 Devesh Kumar Upadhyay &bull; Built with React &amp; Vite
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#232B3A] hover:border-slate-400 bg-[#121620] hover:bg-[#181F2C] text-xs font-mono text-slate-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <FaArrowUp size={10} />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;