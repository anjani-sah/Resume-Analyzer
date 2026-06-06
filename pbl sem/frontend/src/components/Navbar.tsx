interface NavbarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Analyze", id: "analyze" },
  { label: "Features", id: "features" },
  { label: "About", id: "about" },
];

export default function Navbar({ onNavigate, currentSection }: NavbarProps) {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/5"
      style={{ backdropFilter: "blur(16px)", background: "hsla(201, 100%, 13%, 0.82)" }}
    >
      <nav className="flex flex-row items-center justify-between px-8 sm:px-12 py-5 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="text-2xl tracking-tight cursor-pointer bg-transparent border-none"
          style={{ fontFamily: "'Instrument Serif', serif", color: "hsl(var(--foreground))" }}
        >
          Resumekaro
        </button>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm transition-colors bg-transparent border-none cursor-pointer pb-0.5 ${
                currentSection === link.id
                  ? "text-[hsl(var(--foreground))] border-b border-white/30"
                  : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onNavigate("analyze")}
          className="liquid-glass rounded-full px-5 py-2 text-sm text-[hsl(var(--foreground))] hover:scale-[1.03] transition-transform cursor-pointer"
        >
          Analyze Resume
        </button>
      </nav>
    </header>
  );
}
