import re

from ..data.domains import DOMAIN_CONFIG, SKILL_ALIASES


SKILL_PATTERNS = {
    skill: re.compile(r"\b(?:" + "|".join(re.escape(alias) for alias in aliases) + r")\b", re.IGNORECASE)
    for skill, aliases in SKILL_ALIASES.items()
}


def extract_skills(text: str) -> list[str]:
    normalized = text.lower()
    matched = [skill for skill, pattern in SKILL_PATTERNS.items() if pattern.search(normalized)]
    return sorted(matched)


def compute_domain_overlap(skills: list[str]) -> dict[str, dict]:
    skill_set = set(skills)
    overlap = {}

    for domain, config in DOMAIN_CONFIG.items():
        required = config["required_skills"]
        matched = [skill for skill in required if skill in skill_set]
        missing = [skill for skill in required if skill not in skill_set]
        coverage = round((len(matched) / len(required)) * 100) if required else 0
        overlap[domain] = {
            "matched": matched,
            "missing": missing,
            "coverage": coverage,
        }

    return overlap


def summarize_strengths(skills: list[str], predicted_domain: str, domain_overlap: dict[str, dict]) -> list[str]:
    matched = domain_overlap[predicted_domain]["matched"]
    strengths = []

    if matched:
        strengths.append(f"Relevant domain skills detected: {', '.join(matched[:4])}.")
    if len(skills) >= 6:
        strengths.append("Resume shows breadth across multiple technical tools and concepts.")
    if domain_overlap[predicted_domain]["coverage"] >= 50:
        strengths.append("Skill coverage is already competitive for entry-level internship screening.")
    if not strengths:
        strengths.append("Resume includes a starting technical foundation, but it needs stronger domain signaling.")

    return strengths


def summarize_gaps(predicted_domain: str, domain_overlap: dict[str, dict]) -> list[str]:
    missing = domain_overlap[predicted_domain]["missing"]
    if not missing:
        return ["The resume already covers the tracked baseline skills for this domain."]

    gaps = [
        f"Most important missing skills: {', '.join(missing[:4])}.",
    ]
    if len(missing) > 4:
        gaps.append("Adding projects that demonstrate these skills will improve credibility faster than listing them alone.")
    return gaps