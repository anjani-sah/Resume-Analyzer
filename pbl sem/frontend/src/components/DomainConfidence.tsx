import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface DomainConfidenceProps {
  scores: [string, number][];
  predicted: string;
}

export default function DomainConfidence({ scores, predicted }: DomainConfidenceProps) {
  const data = scores.map(([domain, score]) => ({
    domain: domain.replace("Cloud Computing", "Cloud").replace("Web Development", "Web Dev"),
    score,
    fullName: domain,
  }));

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="65%">
          <PolarGrid stroke="rgba(255,255,255,0.08)" />
          <PolarAngleAxis
            dataKey="domain"
            tick={{ fill: "hsl(240 4% 66%)", fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(201 100% 10%)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              fontSize: 13,
              color: "#fff",
            }}
            formatter={(value, _name, props) => {
              const p = props.payload as { fullName: string };
              return [`${Number(value).toFixed(1)}%`, p.fullName];
            }}
          />
          <Radar
            dataKey="score"
            stroke="rgba(255,255,255,0.6)"
            fill="rgba(255,255,255,0.12)"
            strokeWidth={1.5}
          />
        </RadarChart>
      </ResponsiveContainer>

      {/* Legend row with predicted badge */}
      <div className="flex items-center justify-center gap-2 mt-2">
        <div className="w-2 h-2 rounded-full bg-white/60" />
        <span className="text-xs text-[hsl(var(--muted-foreground))]">
          Best match: <span className="text-[hsl(var(--foreground))]">{predicted}</span>
        </span>
      </div>
    </div>
  );
}