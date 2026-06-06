import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface SkillCoverageChartProps {
  matched: number;
  missing: number;
}

export default function SkillCoverageChart({ matched, missing }: SkillCoverageChartProps) {
  const data = [
    { name: "Matched", value: matched },
    { name: "Missing", value: missing },
  ];
  const COLORS = ["#34d399", "rgba(255,255,255,0.08)"];

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width={120} height={120}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={36}
            outerRadius={52}
            paddingAngle={3}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "hsl(201 100% 10%)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              fontSize: 12,
              color: "#fff",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 mt-1 text-xs text-[hsl(var(--muted-foreground))]">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          {matched} matched
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/10" />
          {missing} missing
        </span>
      </div>
    </div>
  );
}
