import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#hire", label: "Why Hire" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="logo">
          azmat<span className="dot">.</span>dev
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <ThemeToggle />
          <a href="#contact" className="nav-cta">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}