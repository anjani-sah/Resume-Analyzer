from flask import Blueprint, current_app, jsonify, render_template, request
from werkzeug.exceptions import RequestEntityTooLarge

from .data.domains import DOMAIN_CONFIG, SCORING_RUBRIC
from .services.analyzer import ResumeAnalyzer
from .services.pdf_service import PDFExtractionError, extract_text_from_pdf


main_bp = Blueprint("main", __name__, url_prefix="/api")
analyzer = ResumeAnalyzer()


@main_bp.errorhandler(RequestEntityTooLarge)
def file_too_large(_error):
    return jsonify(error="File is too large. Upload a PDF smaller than 5 MB."), 413


@main_bp.route("/analyze", methods=["POST"])
def analyze():
    uploaded_file = request.files.get("resume")

    if not uploaded_file or uploaded_file.filename == "":
        return jsonify(error="Choose a PDF resume before running the analysis."), 400
    if not uploaded_file.filename.lower().endswith(".pdf"):
        return jsonify(error="Only PDF resumes are supported in Version 1.0."), 400

    try:
        resume_text = extract_text_from_pdf(uploaded_file)
        result = analyzer.analyze(resume_text)
        return jsonify(result=result, extracted_text_preview=resume_text[:500])
    except PDFExtractionError as exc:
        return jsonify(error=str(exc)), 422
    except Exception:
        current_app.logger.exception("Unexpected resume analysis failure")
        return jsonify(error="Something went wrong while analyzing the resume."), 500


@main_bp.route("/admin", methods=["GET"])
def admin():
    admin_summary = []
    total_required_skills = 0
    total_role_tracks = 0

    for domain, config in DOMAIN_CONFIG.items():
        required_count = len(config["required_skills"])
        total_required_skills += required_count
        total_role_tracks += len(config["role_tracks"])
        admin_summary.append(
            {
                "domain": domain,
                "required_count": required_count,
                "role_count": len(config["role_tracks"]),
                "sample_skills": config["required_skills"][:5],
            }
        )

    return jsonify(
        domain_catalog=DOMAIN_CONFIG,
        admin_summary=admin_summary,
        rubric=SCORING_RUBRIC,
        total_required_skills=total_required_skills,
        total_role_tracks=total_role_tracks,
    )