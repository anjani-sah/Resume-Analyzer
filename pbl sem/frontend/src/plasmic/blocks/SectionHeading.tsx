interface SectionHeadingProps {
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title = "Section title",
  description = "Short supporting copy for this section.",
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={`${isCentered ? "text-center" : "text-left"} ${className}`.trim()}>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl leading-[0.95] tracking-[-1px] font-normal"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {title}
      </h2>
      <p className={`text-sm sm:text-base text-[hsl(var(--muted-foreground))] mt-4 leading-relaxed ${isCentered ? "max-w-lg mx-auto" : "max-w-2xl"}`.trim()}>
        {description}
      </p>
    </div>
  );
}
