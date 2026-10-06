import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";

function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="w-full border-t border-[#E5E5DE] bg-white py-14 sm:py-16 text-[#141413]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#EFEFE8] items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <span className="font-sans text-base font-bold text-[#141413] tracking-tight block">
              Devesh Kumar Upadhyay
            </span>
            <p className="text-xs text-[#787A72] leading-relaxed max-w-sm">
              Full-Stack &amp; .NET Systems Engineer specializing in real-time healthcare telemetry, high-throughput APIs, and clean web applications.
            </p>
            <div className="text-[11px] font-mono text-[#9EA098] pt-1">
              Based in India &bull; Available for Remote Roles Worldwide
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[11px] text-[#787A72] uppercase tracking-wider block mb-2 font-semibold">
              Index
            </span>
            <ul className="space-y-1.5 text-xs text-[#4A4C46]">
              <li>
                <a href="#projects" className="hover:text-[#141413] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#141413] transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#141413] transition-colors">
                  Background &amp; Journey
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#141413] transition-colors">
                  Engineering Workflow
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#141413] transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Direct Connect */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[11px] text-[#787A72] uppercase tracking-wider block mb-2 font-semibold">
              Connect
            </span>
            <div className="flex flex-col gap-2 text-xs text-[#4A4C46]">
              <a
                href="https://github.com/devesh905"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#141413] transition-colors"
              >
                <FaGithub size={13} />
                <span>GitHub (devesh905)</span>
              </a>

              <a
                href="https://www.linkedin.com/in/devesh-kumar-upadhyay/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#183654] transition-colors"
              >
                <FaLinkedin size={13} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:deveshkumarupadhayay@gmail.com"
                className="inline-flex items-center gap-2 hover:text-[#141413] transition-colors"
              >
                <FaEnvelope size={13} />
                <span>Direct Email</span>
              </a>

              <a
                href="https://wa.me/919058705009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#1F3D2C] transition-colors"
              >
                <FaWhatsapp size={13} />
                <span>WhatsApp (+91 9058705009)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#787A72]">
          <div className="font-mono text-[11px]">
            &copy; {new Date().getFullYear()} Devesh Kumar Upadhyay. Designed with editorial clarity &bull; React &amp; Vite.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#E5E5DE] hover:border-[#141413] bg-[#FBFBF9] hover:bg-white text-xs font-mono text-[#4A4C46] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <FaArrowUp size={10} />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;