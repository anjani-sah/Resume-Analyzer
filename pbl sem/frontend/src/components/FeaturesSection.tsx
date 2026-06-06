import {
  Brain,
  Target,
  BarChart3,
  Route,
  Briefcase,
  Shield,
} from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "AI Domain Prediction",
    description:
      "Automatically classifies your career domain across 5 industry verticals.",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    description:
      "Identifies missing skills by comparing your resume against domain requirements.",
  },
  {
    icon: BarChart3,
    title: "Resume Scoring",
    description:
      "Scores your resume on coverage, confidence, depth, and role alignment.",
  },
  {
    icon: Route,
    title: "Growth Roadmap",
    description:
      "Personalized three-phase plan from foundations to portfolio-ready projects.",
  },
  {
    icon: Briefcase,
    title: "Role Matching",
    description:
      "Matches you to 15+ role tracks with fit scores and skill breakdowns.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "All analysis runs locally. No data is stored or shared with third parties.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative z-10 px-8 sm:px-14 pt-20 pb-28 max-w-7xl w-full">
      <div className="text-center mb-14">
        <h2
          className="animate-fade-rise text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-1px] font-normal"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built for{" "}
          <em className="not-italic text-[hsl(var(--muted-foreground))]">precision</em>
        </h2>
        <p className="animate-fade-rise-delay text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-xl mx-auto mt-5 leading-relaxed">
          Actionable, data-driven insights about your career trajectory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feat) => (
          <div
            key={feat.title}
            className="animate-fade-rise liquid-glass rounded-2xl p-8 group hover:scale-[1.02] transition-transform"
          >
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
              <feat.icon className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
            </div>
            <h3
              className="text-xl font-normal text-[hsl(var(--foreground))] mb-3"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {feat.title}
            </h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              {feat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Domains */}
      <div className="mt-16 text-center">
        <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-6">
          Domains We Analyze
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {["Data Science", "Web Development", "AI/ML", "Cybersecurity", "Cloud Computing"].map(
            (domain) => (
              <span
                key={domain}
                className="liquid-glass rounded-full px-6 py-3 text-sm text-[hsl(var(--foreground))]"
              >
                {domain}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
