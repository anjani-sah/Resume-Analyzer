from itertools import combinations

from .domains import DOMAIN_CONFIG, SKILL_ALIASES


DOMAIN_PHRASES = {
    "Data Science": [
        "python pandas numpy statistics dashboard sql analytics",
        "data analysis machine learning visualization jupyter notebooks",
        "cleaning datasets exploratory data analysis regression clustering",
    ],
    "Web Development": [
        "html css javascript react node flask responsive api",
        "frontend backend full stack web application git sql",
        "component ui rest api deployment responsive design",
    ],
    "AI/ML": [
        "python machine learning deep learning tensorflow pytorch sklearn",
        "nlp neural network model training feature engineering",
        "computer vision classification prediction dataset preprocessing",
    ],
    "Cybersecurity": [
        "linux networking ethical hacking owasp wireshark security testing",
        "incident response penetration testing threat hunting siem",
        "forensics cryptography secure systems vulnerability assessment",
    ],
    "Cloud Computing": [
        "aws azure docker kubernetes terraform cicd linux monitoring",
        "cloud deployment containers infrastructure automation devops",
        "k8s pipelines observability networking scalable architecture",
    ],
}


def generate_training_samples():
    samples = []

    for domain, config in DOMAIN_CONFIG.items():
        required = config["required_skills"]
        for phrase in DOMAIN_PHRASES[domain]:
            samples.append((phrase, domain))

        for size in (4, 5, 6):
            for skill_group in combinations(required[: min(len(required), 7)], size):
                text = " ".join(skill_group)
                samples.append((text, domain))

        alias_text = []
        for skill in required[:5]:
            alias_text.extend(SKILL_ALIASES.get(skill, [skill.lower()])[:2])
        samples.append((" ".join(alias_text), domain))

    return samples