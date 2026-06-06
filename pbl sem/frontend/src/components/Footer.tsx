export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full border-t border-white/5"
      style={{ backdropFilter: "blur(16px)", background: "hsla(201, 100%, 13%, 0.82)" }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 sm:px-12 py-7 max-w-7xl mx-auto">
        <div
          className="text-xl tracking-tight text-[hsl(var(--muted-foreground))]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Resumekaro
        </div>
        <div className="text-xs text-[hsl(var(--muted-foreground))]">
          AI Resume Skill Analyzer — Built with Flask, React & scikit-learn
        </div>
        <div className="text-xs text-[hsl(var(--muted-foreground))]">
          © {new Date().getFullYear()} PBL Project
        </div>
      </div>
    </footer>
  );
}
