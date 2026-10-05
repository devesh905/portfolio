import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Send } from "lucide-react";

const links = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Services", href: "#services" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "About", href: "#about" },
  { id: 5, label: "Process", href: "#process" },
  { id: 6, label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Robust scrollspy tracking active section accurately
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // When near the top, always keep "home" active
      if (scrollY < 150) {
        setActiveSection("home");
        return;
      }

      // Check if user reached near the bottom of page -> activate contact
      const isBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // Scroll position with offset for fixed header
      const scrollPosition = scrollY + 220;

      const sectionElements = links
        .map((link) => ({
          id: link.href.slice(1),
          el: document.querySelector(link.href),
        }))
        .filter((item) => item.el !== null);

      // Check from bottom section upwards
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLinkClick(id) {
    if (id) setActiveSection(id);
    setIsMobileOpen(false);
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 transition-all duration-300">
      <nav
        className={`glass-nav rounded-2xl px-5 sm:px-6 py-3 transition-all duration-300 ${
          scrolled ? "shadow-2xl shadow-cyan-950/20 border-cyan-500/20" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo with live pulse */}
          <a
            href="#home"
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              D
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Devesh<span className="text-cyan-400">.</span>dev
              </span>
              <span className="text-[10px] text-emerald-400 font-medium tracking-wide flex items-center gap-1 -mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for Hire
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 text-xs lg:text-sm font-medium">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href.slice(1))}
                    className={`relative px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-cyan-300 bg-cyan-500/10 font-semibold shadow-[inset_0_0_12px_rgba(6,182,212,0.15)]"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action: Let's Talk CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => handleLinkClick("contact")}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <Send size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-colors cursor-pointer border border-white/5"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileOpen && (
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200 md:hidden">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href.slice(1))}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/15 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => handleLinkClick("contact")}
              className="mt-2 text-center py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-md"
            >
              Start a Project / Hire Me
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
