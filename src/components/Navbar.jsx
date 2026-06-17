const links = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Projects", href: "#projects" },
  { id: 3, label: "Contact", href: "#contact" },
];

function Navbar({ name, title }) {
  return (
    <nav>
      <h1>{name}</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;