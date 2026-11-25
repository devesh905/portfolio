import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";

function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="w-full border-t border-[#171412] bg-[#171412] text-[#f6f4f0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#292420]">
          
          {/* Brand Info */}
          <div className="space-y-1">
            <span className="font-display text-base sm:text-lg font-black text-white tracking-tight block uppercase">
              Devesh Kumar Upadhyay
            </span>
            <span className="font-mono text-xs text-[#ff4829] block font-semibold">
              Backend-Focused Full-Stack (.NET 8 &bull; React &bull; Next.js) &bull; Real-Time Telemetry
            </span>
          </div>

          {/* Direct Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#a8a29e]">
            <a
              href="https://github.com/devesh905"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff4829] transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/devesh-kumar-upadhyay/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff4829] transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="mailto:deveshkumarupadhayay@gmail.com"
              className="hover:text-[#ff4829] transition-colors"
            >
              Email
            </a>

            <a
              href="https://wa.me/919058705009"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff4829] transition-colors"
            >
              WhatsApp
            </a>

            <a
              href="/DeveshKumarUpadhyay.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff4829] hover:underline font-bold"
            >
              Curriculum Vitae (PDF)
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="self-start md:self-auto inline-flex items-center gap-2 px-3 py-2 text-xs font-mono text-[#a8a29e] hover:text-[#ff4829] border border-[#38332f] hover:border-[#ff4829] bg-[#221e1a] rounded-md transition-colors cursor-pointer"
          >
            <FaArrowUp size={11} className="text-[#ff4829]" />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom Credits and Legal Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#77716e]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff4829]" />
            <span>Chhatrapati Shivaji Subharti Hospital &bull; Production Telemetry</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} Devesh Kumar Upadhyay. Designed for high-reliability engineering.
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
