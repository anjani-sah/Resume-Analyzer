from ..data.domains import DOMAIN_CONFIG


def recommend_roles(predicted_domain: str, skills: list[str]) -> list[dict]:
    skill_set = set(skills)
    recommendations = []

    for role in DOMAIN_CONFIG[predicted_domain]["role_tracks"]:
        must_have = role["must_have"]
        matched = [skill for skill in must_have if skill in skill_set]
        missing = [skill for skill in must_have if skill not in skill_set]
        fit_score = round((len(matched) / len(must_have)) * 100) if must_have else 0
        recommendations.append(
            {
                "title": role["title"],
                "focus": role["focus"],
                "fit_score": fit_score,
                "matched": matched,
                "missing": missing,
            }
        )

    recommendations.sort(key=lambda item: item["fit_score"], reverse=True)
    return recommendations


def best_role_alignment(role_recommendations: list[dict]) -> float:
    if not role_recommendations:
        return 0.0
    return float(role_recommendations[0]["fit_score"])