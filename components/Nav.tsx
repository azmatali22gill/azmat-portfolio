import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
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
          <a
            href="https://beloze-website.vercel.app/Home.html"
            target="_blank"
            rel="noopener"
            className="nav-cta"
          >
            Beloze
          </a>
        </div>
      </div>
    </nav>
  );
}