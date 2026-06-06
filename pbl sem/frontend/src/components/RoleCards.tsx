import { Briefcase, CheckCircle2, XCircle } from "lucide-react";
import type { RoleRecommendation } from "../types";

interface RoleCardsProps {
  roles: RoleRecommendation[];
}

export default function RoleCards({ roles }: RoleCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {roles.map((role, i) => {
        const color =
          role.fit_score >= 70
            ? "emerald"
            : role.fit_score >= 40
            ? "amber"
            : "red";

        return (
          <div key={role.title} className="liquid-glass rounded-2xl p-5 flex flex-col min-w-0">
            {/* Rank badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
                <span className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest">
                  #{i + 1} Match
                </span>
              </div>
              <span
                className={`text-2xl font-normal ${
                  color === "emerald"
                    ? "text-emerald-400"
                    : color === "amber"
                    ? "text-amber-400"
                    : "text-red-400"
                }`}
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {role.fit_score}%
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-base font-normal text-[hsl(var(--foreground))] mb-1.5"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {role.title}
            </h3>
            <p className="text-xs text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed">
              {role.focus}
            </p>

            {/* Skills */}
            <div className="mt-auto space-y-2">
              {role.matched.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {role.matched.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {s}
                    </span>
                  ))}
                </div>
              )}
              {role.missing.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {role.missing.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-amber-500/10 text-amber-300 border border-amber-500/20"
                    >
                      <XCircle className="w-3 h-3" />
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
