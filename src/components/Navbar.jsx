import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import ResumeModal from "../sections/ResumeModal";

const leftNavLinks = [
  { label: "Systems", href: "#projects" },
  { label: "Capabilities", href: "#systems" },
  { label: "Principles", href: "#principles" },
];

const rightNavLinks = [
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const allNavLinks = [...leftNavLinks, ...rightNavLinks];

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const sectionElements = allNavLinks
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[84px] ${
          isScrolled
            ? "bg-[#f6f4f0]/95 backdrop-blur-md border-b border-[#e2dad0] shadow-[0_4px_24px_rgba(23,20,18,0.06)]"
            : "bg-[#f6f4f0]/85 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
          {/* Desktop 3-Column Grid Layout (Guarantees DEVESH in true horizontal center with zero overlap) */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-full">
            {/* Left Column: Left Nav Links flanking DEVESH on the left */}
            <div className="flex items-center justify-end gap-5 xl:gap-8 pr-6 xl:pr-10 min-w-0">
              {leftNavLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 font-mono text-[11px] xl:text-[12px] tracking-[0.06em] uppercase font-semibold transition-colors duration-200 py-1 whitespace-nowrap ${
                      isActive
                        ? "text-[#ff4829]"
                        : "text-[#171412] hover:text-[#ff4829]"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4829] shrink-0" />
                    )}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Center Column: Perfectly Centered Brand Wordmark */}
            <div className="flex items-center justify-center px-4 shrink-0">
              <a
                href="#top"
                className="font-display font-black text-2xl sm:text-[28px] tracking-[-0.045em] text-[#ff4829] uppercase leading-none transition-transform hover:scale-[1.02] select-none whitespace-nowrap"
              >
                DEVESH
              </a>
            </div>

            {/* Right Column: Right Nav Links flanking DEVESH on the right + Action Buttons */}
            <div className="flex items-center justify-between pl-6 xl:pl-10 h-full min-w-0">
              {/* Right Nav Links */}
              <div className="flex items-center gap-5 xl:gap-8">
                {rightNavLinks.map((link) => {
                  const id = link.href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 font-mono text-[11px] xl:text-[12px] tracking-[0.06em] uppercase font-semibold transition-colors duration-200 py-1 whitespace-nowrap ${
                        isActive
                          ? "text-[#ff4829]"
                          : "text-[#171412] hover:text-[#ff4829]"
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4829] shrink-0" />
                      )}
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Far Right Action Button */}
              <div className="flex items-center shrink-0 ml-4 xl:ml-6">
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#171412]/30 hover:border-[#ff4829] hover:text-[#ff4829] text-[#171412] bg-[#f6f4f0]/90 font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <FileText size={12} className="text-[#ff4829]" />
                  <span>Résumé</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Bar (< lg) */}
          <div className="flex lg:hidden items-center justify-between h-full">
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-full border border-[#171412]/20 hover:border-[#ff4829] text-[#171412] hover:text-[#ff4829] bg-[#f6f4f0] transition-colors cursor-pointer"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <a
              href="#top"
              className="font-display font-black text-2xl tracking-[-0.045em] text-[#ff4829] uppercase leading-none select-none"
            >
              DEVESH
            </a>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#171412]/30 text-[#171412] font-mono text-[11px] font-bold uppercase tracking-wider"
              >
                <FileText size={11} className="text-[#ff4829]" />
                <span>Résumé</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-[#f6f4f0] border-b border-[#e2dad0] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              <nav className="flex flex-col space-y-3">
                {allNavLinks.map((link) => {
                  const id = link.href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex items-center justify-between font-mono text-sm tracking-wider uppercase font-semibold py-1.5 transition-colors ${
                        isActive
                          ? "text-[#ff4829]"
                          : "text-[#171412] hover:text-[#ff4829]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4829]" />
                      ) : (
                        <ArrowUpRight size={14} className="opacity-40" />
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-[#e2dad0] flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileOpen(false);
                    setIsResumeOpen(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#171412]/30 hover:border-[#171412] font-mono text-xs font-bold uppercase tracking-wider text-[#171412]"
                >
                  <FileText size={13} className="text-[#ff4829]" />
                  <span>View Full Résumé</span>
                </button>
              </div>
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
