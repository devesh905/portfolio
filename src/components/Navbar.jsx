const links = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Projects", href: "#projects" },
  { id: 3, label: "Contact", href: "#contact" },
];

function Navbar({ name, title }) {
  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {name} {title}
        </h1>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-white/80 hover:text-cyan-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;