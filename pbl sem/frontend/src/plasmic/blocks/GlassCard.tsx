import type { ReactNode } from "react";

interface GlassCardProps {
  title?: string;
  body?: string;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function GlassCard({
  title = "Card title",
  body = "Add supporting content here.",
  children,
  align = "left",
  className = "",
}: GlassCardProps) {
  const isCentered = align === "center";

  return (
    <div className={`liquid-glass rounded-2xl p-6 min-w-0 ${className}`.trim()}>
      <div className={isCentered ? "text-center" : "text-left"}>
        <div
          className="text-xl font-normal text-[hsl(var(--foreground))] mb-2"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {title}
        </div>
        <div className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
          {body}
        </div>
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
