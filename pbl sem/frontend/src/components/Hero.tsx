interface HeroProps {
  onAnalyze: () => void;
}

export default function Hero({ onAnalyze }: HeroProps) {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-36 min-h-[88vh] max-w-7xl w-full">
      {/* Heading */}
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[1.08] tracking-[-2px] max-w-5xl font-normal"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Where your{" "}
        <em className="not-italic text-[hsl(var(--muted-foreground))]">resume</em>{" "}
        meets{" "}
        <em className="not-italic text-[hsl(var(--muted-foreground))]">
          its true potential.
        </em>
      </h1>

      {/* Subtext */}
      <p className="animate-fade-rise-delay text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
        Upload your resume, find out your potential in seconds.
      </p>

      {/* CTA */}
      <button
        onClick={onAnalyze}
        className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-[hsl(var(--foreground))] mt-10 hover:scale-[1.03] transition-transform cursor-pointer"
      >
        Get Started
      </button>

      {/* Stats */}
      <div className="animate-fade-rise-delay-2 flex flex-wrap justify-center gap-14 sm:gap-16 mt-14 text-center">
        {[
          { value: "5", label: "Domains" },
          { value: "37+", label: "Skills" },
          { value: "15", label: "Roles" },
          { value: "<3s", label: "Speed" },
        ].map((stat) => (
          <div key={stat.label}>
            <div
              className="text-2xl sm:text-3xl font-normal text-[hsl(var(--foreground))]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {stat.value}
            </div>
            <div className="text-[11px] text-[hsl(var(--muted-foreground))] mt-0.5 tracking-widest uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
