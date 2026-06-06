export interface ScoreComponent {
  label: string;
  raw: number;
  weighted: number;
  weight: number;
}

export interface RoadmapPhase {
  title: string;
  goal: string;
  items: string[];
}

export interface RoleRecommendation {
  title: string;
  focus: string;
  fit_score: number;
  matched: string[];
  missing: string[];
}

export interface AnalysisResult {
  extracted_skills: string[];
  predicted_domain: string;
  confidence: number;
  domain_scores: [string, number][];
  matched_skills: string[];
  missing_skills: string[];
  coverage: number;
  resume_score: number;
  score_breakdown: ScoreComponent[];
  headline: string;
  summary: string;
  strengths: string[];
  gaps: string[];
  roadmap: RoadmapPhase[];
  role_recommendations: RoleRecommendation[];
}

export interface AnalysisResponse {
  result?: AnalysisResult;
  extracted_text_preview?: string;
  error?: string;
}
