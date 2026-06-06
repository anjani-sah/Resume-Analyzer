from ..data.domains import SCORING_RUBRIC


def build_score_breakdown(
    coverage: int,
    confidence: float,
    extracted_skills: list[str],
    role_alignment: float,
) -> dict:
    skill_depth = min(len(extracted_skills) * 8, 100)

    weighted = {
        "skill_coverage": round(coverage * SCORING_RUBRIC["skill_coverage"], 1),
        "prediction_confidence": round(confidence * SCORING_RUBRIC["prediction_confidence"], 1),
        "skill_depth": round(skill_depth * SCORING_RUBRIC["skill_depth"], 1),
        "role_alignment": round(role_alignment * SCORING_RUBRIC["role_alignment"], 1),
    }

    resume_score = round(sum(weighted.values()), 1)

    return {
        "resume_score": resume_score,
        "components": [
            {
                "label": "Skill coverage",
                "raw": coverage,
                "weighted": weighted["skill_coverage"],
                "weight": int(SCORING_RUBRIC["skill_coverage"] * 100),
            },
            {
                "label": "Prediction confidence",
                "raw": round(confidence, 1),
                "weighted": weighted["prediction_confidence"],
                "weight": int(SCORING_RUBRIC["prediction_confidence"] * 100),
            },
            {
                "label": "Skill depth",
                "raw": skill_depth,
                "weighted": weighted["skill_depth"],
                "weight": int(SCORING_RUBRIC["skill_depth"] * 100),
            },
            {
                "label": "Role alignment",
                "raw": round(role_alignment, 1),
                "weighted": weighted["role_alignment"],
                "weight": int(SCORING_RUBRIC["role_alignment"] * 100),
            },
        ],
    }