from resume_skill_analyzer.services.analyzer import ResumeAnalyzer
from resume_skill_analyzer.services.skill_service import extract_skills
from flask import render_template

from resume_skill_analyzer import create_app
from resume_skill_analyzer.data.domains import DOMAIN_CONFIG


def test_extract_skills_detects_web_stack_terms():
    text = "Built responsive interfaces with HTML, CSS, JavaScript, React and Flask APIs."
    skills = extract_skills(text)

    assert "HTML" in skills
    assert "CSS" in skills
    assert "JavaScript" in skills
    assert "React" in skills
    assert "Flask" in skills


def test_resume_analyzer_predicts_cloud_computing_profile():
    analyzer = ResumeAnalyzer()
    result = analyzer.analyze(
        "Worked on AWS deployments, Docker containers, Kubernetes orchestration, Terraform, Linux administration and CI/CD pipelines."
    )

    assert result["predicted_domain"] == "Cloud Computing"
    assert "Docker" in result["extracted_skills"]
    assert result["coverage"] > 0
    assert result["score_breakdown"]
    assert result["role_recommendations"][0]["title"]


def test_admin_route_renders_successfully():
    app = create_app()
    client = app.test_client()

    response = client.get("/api/admin")

    assert response.status_code == 200
    data = response.get_json()
    assert "admin_summary" in data
    assert "domain_catalog" in data