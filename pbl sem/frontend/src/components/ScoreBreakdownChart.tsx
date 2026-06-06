import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import type { ScoreComponent } from "../types";

interface ScoreBreakdownChartProps {
  components: ScoreComponent[];
}

const LABEL_MAP: Record<string, string> = {
  "Skill coverage": "Coverage",
  "Prediction confidence": "Confidence",
  "Skill depth": "Depth",
  "Role alignment": "Alignment",
};

export default function ScoreBreakdownChart({ components }: ScoreBreakdownChartProps) {
  const data = components.map((c) => ({
    name: LABEL_MAP[c.label] || c.label,
    value: Math.round(c.raw),
    weighted: c.weighted,
    weight: c.weight,
  }));

  const getColor = (value: number) =>
    value >= 70 ? "#34d399" : value >= 40 ? "#fbbf24" : "#f87171";

  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={data} layout="vertical" margin={{ left: 4, right: 8, top: 4, bottom: 4 }}>
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis
          type="category"
          dataKey="name"
          width={66}
          tick={{ fill: "hsl(240 4% 66%)", fontSize: 10 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            background: "hsl(201 100% 10%)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            fontSize: 12,
            color: "#fff",
          }}
          formatter={(value, _name, props) => {
            const p = props.payload as { weight: number; weighted: number };
            return [`${value}% (weighted: ${p.weighted.toFixed(1)} · ${p.weight}%)`, ""];
          }}
        />
        <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={14}>
          {data.map((entry, i) => (
            <Cell key={i} fill={getColor(entry.value)} fillOpacity={0.7} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
