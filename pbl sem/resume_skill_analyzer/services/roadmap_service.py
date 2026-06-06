from ..data.domains import DOMAIN_CONFIG


def build_roadmap(predicted_domain: str, matched_skills: list[str], missing_skills: list[str]) -> list[dict]:
    domain_data = DOMAIN_CONFIG[predicted_domain]
    focus_skills = missing_skills[:6] if missing_skills else domain_data["required_skills"][:3]

    phases = [
        {
            "title": "Foundation",
            "goal": domain_data["roadmap"][0],
            "items": focus_skills[:2] or matched_skills[:2],
        },
        {
            "title": "Applied Practice",
            "goal": domain_data["roadmap"][1],
            "items": focus_skills[2:4] or domain_data["required_skills"][2:4],
        },
        {
            "title": "Portfolio Proof",
            "goal": domain_data["roadmap"][2],
            "items": domain_data["projects"],
        },
    ]

    return phases