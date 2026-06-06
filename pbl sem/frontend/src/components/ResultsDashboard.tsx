import type { AnalysisResult } from "../types";
import ScoreRing from "./ScoreRing";
import ScoreBreakdownChart from "./ScoreBreakdownChart";
import SkillCoverageChart from "./SkillCoverageChart";
import SkillsPanel from "./SkillsPanel";
import DomainConfidence from "./DomainConfidence";
import RoleCards from "./RoleCards";
import RoadmapTimeline from "./RoadmapTimeline";
import StrengthsGaps from "./StrengthsGaps";

interface ResultsDashboardProps {
  result: AnalysisResult;
  onReset: () => void;
}

export default function ResultsDashboard({ result, onReset }: ResultsDashboardProps) {
  const totalSkills = result.matched_skills.length + result.missing_skills.length;

  return (
    <section className="relative z-10 px-8 sm:px-12 pt-16 pb-28 max-w-7xl w-full">
      {/* Header */}
      <div className="animate-fade-rise text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl leading-[0.95] tracking-[-1px] font-normal"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Your{" "}
          <em className="not-italic text-[hsl(var(--muted-foreground))]">analysis</em>{" "}
          is ready.
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] text-base mt-3 max-w-xl mx-auto">
          {result.headline}
        </p>
      </div>

      {/* Score + Breakdown row */}
      <div className="animate-fade-rise-delay grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        {/* Score ring */}
        <div className="liquid-glass rounded-2xl p-5 flex flex-col items-center justify-center min-w-0">
          <ScoreRing score={result.resume_score} />
          <div className="mt-3 text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest">
            Resume Score
          </div>
        </div>

        {/* Score breakdown chart */}
        <div className="liquid-glass rounded-2xl p-5 min-w-0">
          <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-3">
            Score Breakdown
          </div>
          <ScoreBreakdownChart components={result.score_breakdown} />
        </div>

        {/* Skill coverage donut */}
        <div className="liquid-glass rounded-2xl p-5 flex flex-col items-center justify-center min-w-0">
          <SkillCoverageChart
            matched={result.matched_skills.length}
            missing={result.missing_skills.length}
          />
          <div className="mt-3 text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest">
            Skill Coverage
          </div>
          <div className="text-[hsl(var(--muted-foreground))] text-xs mt-1">
            {result.matched_skills.length} of {totalSkills} skills matched
          </div>
        </div>
      </div>

      {/* Domain prediction */}
      <div className="animate-fade-rise-delay liquid-glass rounded-2xl p-5 mb-6 min-w-0">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-1">
              Predicted Domain
            </div>
            <div
              className="text-2xl sm:text-3xl font-normal text-[hsl(var(--foreground))]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {result.predicted_domain}
            </div>
            <div className="text-[hsl(var(--muted-foreground))] text-sm mt-1 max-w-md">
              {result.summary}
            </div>
          </div>
          <div className="text-right flex-shrink-0 ml-4">
            <div
              className="text-3xl font-normal text-[hsl(var(--foreground))]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {result.confidence.toFixed(1)}%
            </div>
            <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest">
              Confidence
            </div>
          </div>
        </div>
        <DomainConfidence scores={result.domain_scores} predicted={result.predicted_domain} />
      </div>

      {/* Skills row */}
      <div className="animate-fade-rise-delay grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <SkillsPanel
          title="Matched Skills"
          subtitle={`${result.matched_skills.length} of ${totalSkills} required skills found`}
          skills={result.matched_skills}
          variant="matched"
        />
        <SkillsPanel
          title="Missing Skills"
          subtitle="Focus areas for improvement"
          skills={result.missing_skills}
          variant="missing"
        />
      </div>

      {/* Strengths & Gaps */}
      <div className="animate-fade-rise-delay grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <StrengthsGaps items={result.strengths} type="strengths" />
        <StrengthsGaps items={result.gaps} type="gaps" />
      </div>

      {/* Role recommendations */}
      <div className="animate-fade-rise-delay-2 mb-6">
        <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-5 text-center">
          Role Recommendations
        </div>
        <RoleCards roles={result.role_recommendations} />
      </div>

      {/* Roadmap */}
      <div className="animate-fade-rise-delay-2 mb-12">
        <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-5 text-center">
          Your Growth Roadmap
        </div>
        <RoadmapTimeline phases={result.roadmap} />
      </div>

      {/* Analyze another */}
      <div className="text-center">
        <button
          onClick={onReset}
          className="liquid-glass rounded-full px-10 py-4 text-sm text-[hsl(var(--foreground))] hover:scale-[1.03] transition-transform cursor-pointer"
        >
          Analyze Another Resume
        </button>
      </div>
    </section>
  );
}
