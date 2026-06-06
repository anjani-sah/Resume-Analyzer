# AI Resume Skill Analyzer & Career Domain Predictor

Flask-based web application that analyzes a student's PDF resume, extracts technical skills, predicts the most suitable career domain, identifies missing skills, and generates a structured learning roadmap.

Version 1.1 now adds weighted resume scoring, role-track recommendations inside each predicted domain, and an admin insights page for reviewing the in-memory catalog.

## What it does

- Accepts machine-readable PDF resumes up to 5 MB
- Extracts text using PyPDF2
- Detects technical skills with a curated skill dictionary and aliases
- Predicts one of five career domains using a TF-IDF + Logistic Regression model
- Computes skill gaps against domain requirements
- Generates a roadmap with learning stages, suggested focus areas, and portfolio ideas
- Breaks the readiness score into weighted components
- Recommends internship/job role tracks within the predicted domain
- Includes an admin insights view at `/admin`
- Presents results in a modern dashboard UI

## Career domains

- Data Science
- Web Development
- AI/ML
- Cybersecurity
- Cloud Computing

## Open-source feature inspiration

This project intentionally borrows product ideas, not code, from well-known resume analysis tools:

- `srbhr/Resume-Matcher`: match breakdowns, keyword coverage, and actionable missing-skill feedback
- `deepakpadhi986/AI-Resume-Analyzer`: resume parsing and structured insight presentation
- `adrianhajdin/ai-resume-analyzer`: polished upload-first flow and dashboard-style insight layout

Integrated feature ideas in this build:

- domain fit scorecards
- confidence indicator for the predicted role
- skill coverage visualization
- structured missing-skill roadmap
- strengths and improvement highlights
- role-level recommendation cards inspired by job-match platforms
- rubric-based scoring visibility for more explainable results

## Project structure

```text
.
├── app.py
├── requirements.txt
├── README.md
└── resume_skill_analyzer
    ├── __init__.py
    ├── routes.py
    ├── data
    │   ├── domains.py
    │   └── training_data.py
    ├── services
    │   ├── analyzer.py
    │   ├── pdf_service.py
    │   ├── predictor.py
    │   ├── roadmap_service.py
    │   └── skill_service.py
    ├── static
    │   ├── app.js
    │   └── styles.css
    └── templates
        └── index.html
```

## Setup

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Open `http://127.0.0.1:5000` in the browser.

## Notes

- Version 1.0 uses in-memory processing only.
- Uploaded resumes are analyzed in memory and are not persisted.
- Best results come from text-based PDFs, not scanned image PDFs.