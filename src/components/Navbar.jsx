import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Contact", href: "#contact" },
];

function Navbar({ name }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll-spy: watch each section and mark the one most visible as active
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" } // triggers when section is near vertical center
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  function handleLinkClick() {
    setIsMobileOpen(false);
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-50 transition-all duration-300">
      <nav className="glass-panel rounded-full px-6 py-3 shadow-xl shadow-black/40">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-lg font-extrabold tracking-tight text-white">
              Devesh<span className="text-cyan-400 font-mono">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 font-sans text-sm font-medium">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-cyan-400 bg-cyan-400/5 border-b-2 border-cyan-400/30"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-colors cursor-pointer"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileOpen && (
          <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full glass-panel rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-2 font-sans text-sm font-medium">
              {links.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block w-full px-4 py-2.5 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "text-cyan-400 bg-cyan-400/10"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
