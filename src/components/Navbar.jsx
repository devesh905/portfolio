import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import ResumeModal from "../sections/ResumeModal";

const navLinks = [
  { label: "Selected Work", href: "#projects" },
  { label: "Capabilities", href: "#services" },
  { label: "About & Experience", href: "#about" },
  { label: "Process", href: "#process" },
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
            ? "bg-[#FBFBF9]/90 backdrop-blur-md border-b border-[#E5E5DE] py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-3 text-left group transition-opacity hover:opacity-80"
          >
            <div className="flex flex-col">
              <span className="font-sans text-sm sm:text-base font-bold tracking-tight text-[#141413]">
                Devesh Kumar Upadhyay
              </span>
              <span className="font-mono text-[11px] text-[#787A72] tracking-normal -mt-0.5">
                Full-Stack &amp; .NET Systems Engineer
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
                  className={`text-xs font-medium tracking-tight transition-colors py-1 relative ${
                    isActive
                      ? "text-[#141413] font-semibold"
                      : "text-[#62645D] hover:text-[#141413]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#141413]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4A4C46] hover:text-[#141413] border border-[#E5E5DE] hover:border-[#C8C8BE] bg-white rounded transition-colors cursor-pointer"
            >
              <FileText size={13} className="text-[#787A72]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#141413] hover:bg-[#2A2B29] rounded transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-[#4A4C46] hover:text-[#141413] border border-[#E5E5DE] rounded bg-white transition-colors cursor-pointer"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileOpen && (
          <div className="md:hidden border-b border-[#E5E5DE] bg-[#FBFBF9] px-6 py-5 shadow-lg">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-sm font-medium text-[#4A4C46] hover:text-[#141413] py-1 border-b border-[#EFEFE8]"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    setIsResumeOpen(true);
                  }}
                  className="flex-1 text-center py-2 text-xs font-medium border border-[#E5E5DE] rounded bg-white text-[#141413]"
                >
                  View Resume (PDF)
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex-1 text-center py-2 text-xs font-semibold bg-[#141413] text-white rounded"
                >
                  Get in Touch
                </a>
              </div>
            </nav>
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
