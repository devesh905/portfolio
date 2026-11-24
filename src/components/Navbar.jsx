import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import ResumeModal from "../sections/ResumeModal";

const navLinks = [
  { label: "Systems", href: "#projects" },
  { label: "Capabilities", href: "#systems" },
  { label: "Principles", href: "#principles" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const sectionElements = navLinks
        .map((link) => ({
          id: link.href.slice(1),
          el: document.querySelector(link.href),
        }))
        .filter((item) => item.el !== null);

      const scrollPosition = scrollY + 160;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }
      if (scrollY < 200) {
        setActiveSection("");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#f6f4f0]/95 backdrop-blur-md border-b border-[#e2dad0] py-3.5 shadow-[0_4px_20px_rgba(23,20,18,0.06)] opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark (Left) */}
          <a
            href="#top"
            className="flex items-center gap-3 text-left group transition-opacity hover:opacity-85"
          >
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base font-black tracking-tight text-[#171412] uppercase">
                Devesh Upadhyay
              </span>
              <span className="font-mono text-[11px] text-[#ff4829] font-medium tracking-normal -mt-0.5">
                ASP.NET Core &bull; Telemetry &bull; AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-mono tracking-tight transition-colors py-1 relative ${
                    isActive
                      ? "text-[#ff4829] font-bold"
                      : "text-[#57534e] hover:text-[#171412]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff4829] rounded-sm" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-[#171412] hover:text-[#ff4829] border border-[#d6cebf] hover:border-[#ff4829] bg-white rounded-md transition-all cursor-pointer shadow-sm"
            >
              <FileText size={13} className="text-[#ff4829]" />
              <span>Résumé</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#ff4829] hover:bg-[#e03a1d] rounded-md transition-all cursor-pointer shadow-sm"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle mobile navigation menu"
            className="md:hidden rounded-md border border-[#d6cebf] p-2 text-[#171412] hover:text-[#ff4829] bg-white transition-colors cursor-pointer"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileOpen && (
          <div className="md:hidden border-b border-[#e2dad0] bg-[#f6f4f0] px-5 py-4 space-y-3">
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-sm font-mono text-[#57534e] hover:text-[#171412] py-1 border-b border-[#e2dad0]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileOpen(false);
                  setIsResumeOpen(true);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono text-[#171412] border border-[#d6cebf] bg-white rounded-md"
              >
                <FileText size={13} className="text-[#ff4829]" />
                <span>View Résumé</span>
              </button>

              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#ff4829] rounded-md"
              >
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/DeveshKumarUpadhyay.pdf"
      />
    </>
  );
}

export default Navbar;
