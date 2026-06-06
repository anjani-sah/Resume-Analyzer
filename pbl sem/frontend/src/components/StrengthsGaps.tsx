import { TrendingUp, AlertTriangle } from "lucide-react";

interface StrengthsGapsProps {
  items: string[];
  type: "strengths" | "gaps";
}

export default function StrengthsGaps({ items, type }: StrengthsGapsProps) {
  const isStrengths = type === "strengths";

  return (
    <div className="liquid-glass rounded-2xl p-5 min-w-0">
      <div className="flex items-center gap-2 mb-4">
        {isStrengths ? (
          <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        ) : (
          <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
        )}
        <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest">
          {isStrengths ? "Strengths" : "Gap Areas"}
        </div>
      </div>

      <div className="space-y-2.5">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2 text-xs leading-relaxed">
            <div
              className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                isStrengths ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            <span className="text-[hsl(var(--foreground))]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
