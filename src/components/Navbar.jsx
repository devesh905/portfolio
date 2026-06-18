import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

const links = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Contact", href: "#contact" },
];

function Navbar({ name, title }) {
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
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-9 h-9 rounded-lg" />
          <span className="text-xl font-bold text-white">
            {name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-cyan-400" : "text-white/80 hover:text-cyan-400"
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
          className="md:hidden text-white/80 hover:text-cyan-400 transition-colors"
        >
          {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-6 bg-black/40 backdrop-blur-md">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-cyan-400" : "text-white/80 hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;