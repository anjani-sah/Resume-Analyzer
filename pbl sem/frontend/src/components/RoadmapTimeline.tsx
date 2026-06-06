import { BookOpen, Wrench, FolderGit2 } from "lucide-react";
import type { RoadmapPhase } from "../types";

interface RoadmapTimelineProps {
  phases: RoadmapPhase[];
}

const PHASE_ICONS = [BookOpen, Wrench, FolderGit2];

export default function RoadmapTimeline({ phases }: RoadmapTimelineProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
      {/* Connector line (desktop) */}
      <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-white/10" />

      {phases.map((phase, i) => {
        const Icon = PHASE_ICONS[i] ?? BookOpen;
        return (
          <div key={phase.title} className="liquid-glass rounded-2xl p-5 relative min-w-0">
            {/* Phase number circle */}
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Icon className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            </div>

            <div className="text-[10px] text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-1.5">
              Phase {i + 1}
            </div>
            <h4
              className="text-base font-normal text-[hsl(var(--foreground))] mb-1.5"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {phase.title}
            </h4>
            <p className="text-xs text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed">
              {phase.goal}
            </p>

            <div className="space-y-1.5">
              {phase.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-xs text-[hsl(var(--foreground))]">
                  <div className="w-1 h-1 rounded-full bg-white/30 mt-1.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
