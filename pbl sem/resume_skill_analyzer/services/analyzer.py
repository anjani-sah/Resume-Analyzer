from ..data.domains import DOMAIN_CONFIG
from .predictor import get_predictor
from .recommendation_service import best_role_alignment, recommend_roles
from .roadmap_service import build_roadmap
from .scoring_service import build_score_breakdown
from .skill_service import compute_domain_overlap, extract_skills, summarize_gaps, summarize_strengths


class ResumeAnalyzer:
    def __init__(self) -> None:
        self.predictor = get_predictor()

    def analyze(self, resume_text: str) -> dict:
        skills = extract_skills(resume_text)
        domain_overlap = compute_domain_overlap(skills)
        analysis_text = " ".join(skills) if skills else resume_text.lower()
        prediction = self.predictor.predict(analysis_text)
        predicted_domain = prediction["domain"]

        if not skills:
            overlap_rank = sorted(
                domain_overlap.items(), key=lambda item: item[1]["coverage"], reverse=True
            )
            if overlap_rank and overlap_rank[0][1]["coverage"] > 0:
                predicted_domain = overlap_rank[0][0]

        matched_skills = domain_overlap[predicted_domain]["matched"]
        missing_skills = domain_overlap[predicted_domain]["missing"]
        coverage = domain_overlap[predicted_domain]["coverage"]
        role_recommendations = recommend_roles(predicted_domain, skills)
        score_breakdown = build_score_breakdown(
            coverage=coverage,
            confidence=prediction["confidence"],
            extracted_skills=skills,
            role_alignment=best_role_alignment(role_recommendations),
        )

        return {
            "extracted_skills": skills,
            "predicted_domain": predicted_domain,
            "confidence": prediction["confidence"],
            "domain_scores": prediction["ranked_scores"],
            "matched_skills": matched_skills,
            "missing_skills": missing_skills,
            "coverage": coverage,
            "resume_score": score_breakdown["resume_score"],
            "score_breakdown": score_breakdown["components"],
            "headline": DOMAIN_CONFIG[predicted_domain]["headline"],
            "summary": DOMAIN_CONFIG[predicted_domain]["summary"],
            "strengths": summarize_strengths(skills, predicted_domain, domain_overlap),
            "gaps": summarize_gaps(predicted_domain, domain_overlap),
            "roadmap": build_roadmap(predicted_domain, matched_skills, missing_skills),
            "role_recommendations": role_recommendations,
        }