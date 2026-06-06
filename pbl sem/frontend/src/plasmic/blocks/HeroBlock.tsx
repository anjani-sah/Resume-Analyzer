interface HeroBlockProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  className?: string;
}

export default function HeroBlock({
  title = "Where your resume meets its true potential.",
  subtitle = "Upload your resume, find out your potential in seconds.",
  ctaLabel = "Get Started",
  className = "",
}: HeroBlockProps) {
  return (
    <section
      className={`relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-24 min-h-[80vh] ${className}`.trim()}
    >
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {title}
      </h1>
      <p className="animate-fade-rise-delay text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
        {subtitle}
      </p>
      <button
        className="animate-fade-rise-delay-2 liquid-glass rounded-full px-12 py-4 text-base text-[hsl(var(--foreground))] mt-10 hover:scale-[1.03] transition-transform cursor-pointer"
      >
        {ctaLabel}
      </button>
      <div className="animate-fade-rise-delay-2 flex flex-wrap justify-center gap-10 mt-16 text-center">
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
