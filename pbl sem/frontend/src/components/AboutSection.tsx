export default function AboutSection() {
  return (
    <section className="relative z-10 px-8 sm:px-14 pt-20 pb-28 max-w-5xl w-full text-center">
      <h2
        className="animate-fade-rise text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-1px] font-normal"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        About{" "}
        <em className="not-italic text-[hsl(var(--muted-foreground))]">Resumekaro</em>
      </h2>

      <p className="animate-fade-rise-delay text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
        An AI-powered resume analyzer that helps students and early-career
        professionals understand where they stand — and where to go next.
      </p>

      <div className="animate-fade-rise-delay mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="liquid-glass rounded-2xl p-8">
          <div
            className="text-2xl font-normal text-[hsl(var(--foreground))] mb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            ML-Powered
          </div>
          <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            Machine learning models trained to classify your career domain with high accuracy
          </p>
        </div>

        <div className="liquid-glass rounded-2xl p-8">
          <div
            className="text-2xl font-normal text-[hsl(var(--foreground))] mb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Open Source
          </div>
          <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            Built with Flask, React, and Tailwind — fully transparent and extensible
          </p>
        </div>

        <div className="liquid-glass rounded-2xl p-8">
          <div
            className="text-2xl font-normal text-[hsl(var(--foreground))] mb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Actionable
          </div>
          <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            Concrete role recommendations and personalized growth roadmaps
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="animate-fade-rise-delay-2 mt-14">
        <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-8">
          How It Works
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { step: "01", label: "Upload", desc: "Drop your PDF resume" },
            { step: "02", label: "Extract", desc: "AI parses skills & keywords" },
            { step: "03", label: "Analyze", desc: "ML predicts domain & scores" },
            { step: "04", label: "Act", desc: "Get roadmap & role matches" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div
                className="text-3xl font-normal text-white/10 mb-1"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {item.step}
              </div>
              <div className="text-[hsl(var(--foreground))] text-sm mb-0.5">{item.label}</div>
              <div className="text-[hsl(var(--muted-foreground))] text-xs">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
