import { CheckCircle2, XCircle } from "lucide-react";

interface SkillsPanelProps {
  title: string;
  subtitle: string;
  skills: string[];
  variant: "matched" | "missing";
}

export default function SkillsPanel({ title, subtitle, skills, variant }: SkillsPanelProps) {
  const isMatched = variant === "matched";

  return (
    <div className="liquid-glass rounded-2xl p-5 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        {isMatched ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        ) : (
          <XCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
        )}
        <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest">
          {title}
        </div>
      </div>
      <div className="text-[11px] text-[hsl(var(--muted-foreground))] mb-4 ml-6">{subtitle}</div>

      {skills.length === 0 ? (
        <p className="text-[hsl(var(--muted-foreground))] text-xs italic ml-6">
          {isMatched ? "No matching skills found" : "All required skills are present!"}
        </p>
      ) : (
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className={`px-2.5 py-1 rounded-full text-xs border ${
                isMatched
                  ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                  : "bg-amber-500/10 text-amber-300 border-amber-500/20"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
