# AI Resume Skill Analyzer & Career Domain Predictor

A full-stack resume analysis application that accepts a PDF resume, extracts technical skills, predicts a career domain, evaluates skill coverage, calculates a resume readiness score, recommends relevant role tracks, and generates a learning roadmap.

The project combines a Python Flask backend with a React and TypeScript frontend. Resume analysis is performed in memory and the application is designed around five career domains: Data Science, Web Development, AI/ML, Cybersecurity, and Cloud Computing.

## Project Overview

The application is built to help students and job seekers understand how their current technical skills align with different technology career domains.

The main workflow is:

1. Upload a text-based PDF resume.
2. Extract readable text from the PDF.
3. Detect technical skills using a curated skill dictionary and aliases.
4. Compare detected skills against the requirements of each supported career domain.
5. Use a TF-IDF and Logistic Regression pipeline to predict the most likely career domain.
6. Calculate prediction confidence and ranked domain scores.
7. Identify matched and missing skills for the predicted domain.
8. Generate a weighted resume score.
9. Recommend relevant role tracks and show their skill alignment.
10. Generate a three-stage learning and portfolio roadmap.
11. Display the complete analysis through a React dashboard.

## Main Features

### Resume PDF Upload

- Accepts PDF resumes through the web interface.
- Supports text-based or machine-readable PDFs.
- Maximum upload size is 5 MB.
- Uses PyPDF2 for PDF text extraction.
- Rejects unsupported file types.
- Returns useful errors for unreadable or scanned-image PDFs.

### Technical Skill Extraction

The backend uses regular-expression based matching against a curated skill dictionary and skill aliases.

Examples of supported skill groups include:

- Python
- SQL
- Pandas
- NumPy
- Matplotlib
- Statistics
- Machine Learning
- Data Visualization
- Jupyter
- Excel
- HTML
- CSS
- JavaScript
- React
- Node.js
- Flask
- REST API
- Git
- Responsive Design
- Deep Learning
- TensorFlow
- PyTorch
- scikit-learn
- NLP
- Computer Vision
- Data Preprocessing
- Networking
- Linux
- Ethical Hacking
- SIEM
- OWASP
- Incident Response
- Penetration Testing
- Cryptography
- Wireshark
- AWS
- Azure
- Docker
- Kubernetes
- CI/CD
- Terraform
- Monitoring

Aliases are also supported. For example, MySQL, PostgreSQL, and SQLite are mapped to SQL, while OpenCV is mapped to Computer Vision.

## Career Domain Prediction

The application supports five career domains:

1. Data Science
2. Web Development
3. AI/ML
4. Cybersecurity
5. Cloud Computing

The predictor is implemented using a scikit-learn pipeline containing:

- TF-IDF Vectorizer with unigram and bigram features
- Logistic Regression classifier
- Probability-based confidence calculation
- Ranked domain scores

Training samples are generated from the project's domain configuration and training-data module.

## Domain Analysis

For every supported domain, the application maintains:

- Required skills
- Role tracks
- Role-specific must-have skills
- Domain summary
- Learning roadmap
- Suggested portfolio projects
- Headline and descriptive information

The analyzer calculates the following for the predicted domain:

- Matched skills
- Missing skills
- Skill coverage percentage
- Prediction confidence
- Ranked domain scores
- Strengths
- Skill gaps
- Role recommendations
- Resume score
- Score component breakdown
- Personalized learning roadmap

## Resume Scoring

The scoring system produces a weighted resume score using four components:

| Component | Weight |
|---|---:|
| Skill Coverage | 45% |
| Prediction Confidence | 20% |
| Skill Depth | 15% |
| Role Alignment | 20% |

Skill depth is derived from the number of extracted skills, while role alignment is calculated from the recommended role tracks and their matched must-have skills.

The score is returned together with the raw and weighted values of each component so the result is more transparent.

## Role Recommendations

After predicting a domain, the application evaluates the available role tracks for that domain.

Each recommendation contains:

- Role title
- Role focus
- Fit score
- Matched skills
- Missing skills

The project currently includes role tracks such as:

### Data Science

- Data Analyst Intern
- Junior Data Scientist
- BI / Analytics Associate

### Web Development

- Frontend Developer Intern
- Full-Stack Developer Intern
- Backend Web Developer

### AI/ML

- ML Engineer Intern
- NLP Intern
- Computer Vision Intern

### Cybersecurity

- SOC Analyst Intern
- Security Analyst
- Penetration Testing Intern

### Cloud Computing

- Cloud Operations Intern
- DevOps Intern
- Platform Engineer Intern

## Learning Roadmap

The roadmap service generates three stages based on the predicted domain and the detected skill gaps.

### Foundation

Focuses on foundational or missing skills that should be strengthened first.

### Applied Practice

Suggests additional skills and practical areas to work on.

### Portfolio Proof

Provides project ideas configured for the predicted career domain so users can demonstrate their skills through practical work.

## Strengths and Skill Gaps

The analyzer generates readable feedback based on the extracted skills and domain coverage.

It can identify:

- Relevant skills already present
- Breadth of technical skills
- Domain skill coverage
- Important missing skills
- Areas where projects can provide stronger evidence of capability

## Admin Insights API

The backend provides an admin endpoint at:

```text
GET /api/admin
```

It exposes the in-memory domain catalog and scoring configuration, including:

- Domain configuration
- Required skill counts
- Role-track counts
- Sample skills
- Complete scoring rubric
- Total required skills
- Total role tracks

## API Endpoint

### Analyze Resume

```text
POST /api/analyze
```

The endpoint expects a multipart form upload with the field:

```text
resume
```

Successful responses contain:

- Extracted skills
- Predicted domain
- Confidence
- Ranked domain scores
- Matched skills
- Missing skills
- Coverage
- Resume score
- Score breakdown
- Headline
- Summary
- Strengths
- Gaps
- Roadmap
- Role recommendations
- A short extracted-text preview

The API also handles common errors such as missing files, unsupported file types, files above the 5 MB limit, unreadable PDFs, and unexpected analysis failures.

## Technology Stack

### Backend

- Python
- Flask 3.1.0
- PyPDF2 3.0.1
- scikit-learn 1.6.1
- pytest 8.3.5

### Machine Learning

- TF-IDF Vectorization
- Logistic Regression
- Text classification
- Probability-based domain confidence
- Rule-based skill extraction
- Domain skill coverage analysis

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Lucide React
- Plasmic integration utilities
- clsx
- tailwind-merge
- class-variance-authority

## Frontend Dashboard

The frontend is a Vite-based React and TypeScript application located in the `frontend` directory.

The interface includes reusable components for:

- Navigation bar
- Hero section
- About section
- Features section
- Resume upload
- Video background
- Domain confidence visualization
- Results dashboard
- Score ring
- Score breakdown chart
- Skill coverage chart
- Skills panel
- Strengths and gaps
- Role recommendation cards
- Roadmap timeline
- Footer

The dashboard is designed to present the analysis in a visual and easy-to-understand format rather than returning only raw JSON.

## Frontend Scripts

From the `frontend` directory:

```bash
npm install
npm run dev
```

Other available scripts:

```bash
npm run build
npm run lint
npm run preview
```

## Backend Setup

From the `pbl sem` directory:

### 1. Create a virtual environment

Windows:

```bash
python -m venv .venv
.venv\Scripts\activate
```

Linux or macOS:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 2. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 3. Start the Flask application

```bash
python app.py
```

The Flask development server runs on:

```text
http://127.0.0.1:5000
```

## Frontend and Backend Integration

The Flask application serves the frontend build from:

```text
frontend/dist
```

The Flask app also provides a single-page application fallback so frontend routes can be served through the backend.

For development, the React frontend can be run separately with Vite while the Flask API runs on port 5000.

The frontend API utility is located at:

```text
frontend/src/lib/api.ts
```

## Project Structure

```text
pbl sem/
│
├── .github/
├── .gitignore
├── .vscode/
├── README.md
├── app.py
├── requirements.txt
│
├── frontend/
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   └── src/
│       ├── App.tsx
│       ├── App.css
│       ├── index.css
│       ├── main.tsx
│       ├── assets/
│       │   ├── hero.png
│       │   ├── react.svg
│       │   └── vite.svg
│       ├── components/
│       │   ├── AboutSection.tsx
│       │   ├── DomainConfidence.tsx
│       │   ├── FeaturesSection.tsx
│       │   ├── Footer.tsx
│       │   ├── Hero.tsx
│       │   ├── Navbar.tsx
│       │   ├── ResultsDashboard.tsx
│       │   ├── RoadmapTimeline.tsx
│       │   ├── RoleCards.tsx
│       │   ├── ScoreBreakdownChart.tsx
│       │   ├── ScoreRing.tsx
│       │   ├── SkillCoverageChart.tsx
│       │   ├── SkillsPanel.tsx
│       │   ├── StrengthsGaps.tsx
│       │   ├── UploadSection.tsx
│       │   └── VideoBackground.tsx
│       ├── lib/
│       │   ├── api.ts
│       │   ├── plasmic.ts
│       │   └── utils.ts
│       └── plasmic/
│           └── [generated Plasmic integration files]
│
├── resume_skill_analyzer/
│   ├── __init__.py
│   ├── routes.py
│   ├── data/
│   │   ├── domains.py
│   │   └── training_data.py
│   ├── services/
│   │   ├── analyzer.py
│   │   ├── pdf_service.py
│   │   ├── predictor.py
│   │   ├── recommendation_service.py
│   │   ├── roadmap_service.py
│   │   ├── scoring_service.py
│   │   └── skill_service.py
│   ├── static/
│   │   ├── app.js
│   │   └── styles.css
│   └── templates/
│       ├── admin.html
│       └── index.html
│
└── tests/
    └── test_analyzer.py
```

## Backend Modules

### `app.py`

Application entry point. Creates the Flask app through `create_app()` and starts the development server when executed directly.

### `resume_skill_analyzer/__init__.py`

Creates and configures the Flask application, registers the API blueprint, applies the 5 MB request limit, and serves the React build from `frontend/dist`.

### `routes.py`

Contains the Flask API routes for resume analysis and admin insights.

### `data/domains.py`

Stores the career-domain catalog, required skills, role tracks, project suggestions, roadmap content, skill aliases, and scoring rubric.

### `data/training_data.py`

Provides the training samples used to build the career-domain classifier.

### `services/analyzer.py`

Coordinates the complete analysis pipeline from skill extraction through prediction, scoring, role recommendations, strengths, gaps, and roadmap generation.

### `services/pdf_service.py`

Extracts text from uploaded PDFs and validates that readable text is available.

### `services/predictor.py`

Builds the TF-IDF and Logistic Regression classifier and returns domain predictions with confidence values and ranked scores.

### `services/skill_service.py`

Extracts skills, calculates domain overlap, and creates strengths and gap summaries.

### `services/recommendation_service.py`

Calculates role-level fit scores using the required skills for each role track.

### `services/scoring_service.py`

Calculates the weighted resume readiness score and exposes its component-level breakdown.

### `services/roadmap_service.py`

Builds the Foundation, Applied Practice, and Portfolio Proof roadmap stages.

## Testing

The project includes automated tests under:

```text
tests/test_analyzer.py
```

Run the test suite with:

```bash
pytest
```

The testing dependency is included in `requirements.txt`.

## Environment and Configuration

The frontend contains:

```text
frontend/.env.example
```

and an environment configuration file for local frontend settings.

Do not commit real secrets or sensitive environment values. Use `.env.example` as the template for local configuration.

## Data and Privacy

The backend is designed for in-memory resume processing.

- Uploaded resumes are not intentionally persisted by the analyzer.
- PDF text is extracted during the request.
- The application returns analysis results through the API.
- The default maximum request size is 5 MB.
- Text-based PDFs provide better results than scanned image PDFs.

## Limitations

- The classifier uses a project-defined training dataset rather than a large external resume dataset.
- Skill extraction depends on the configured skill dictionary and aliases.
- The application currently accepts PDF resumes only.
- Scanned image PDFs without an embedded text layer are not supported by the current PDF extraction implementation.
- Domain predictions should be treated as guidance generated by the project's model and rules, not as definitive career decisions.

## Future Improvements

Potential improvements include:

- OCR support for scanned resumes
- Larger and more diverse training data
- Transformer-based resume classification
- Semantic skill extraction using embeddings or NLP models
- Job-description matching
- Resume section detection
- ATS compatibility analysis
- Resume keyword optimization
- Personalized project recommendations
- Cloud deployment
- Persistent user accounts and analysis history
- Model evaluation metrics and validation reports
- More career domains and role tracks

## Project Purpose

This project demonstrates the integration of:

- Full-stack web development
- Natural language processing concepts
- Machine learning classification
- PDF document processing
- Rule-based skill extraction
- Explainable scoring
- Career-domain analysis
- Interactive data visualization
- REST API development
- React and Flask integration

It is suitable as an academic project demonstrating how machine learning and web technologies can be combined to build a practical career-support application.

## Author

Anjani Sah

B.Tech CSE, AI & Data Science
MIT World Peace University, Pune

## Repository

Project repository: `anjani-sah/Resume-Analyzer`

Project folder: `pbl sem`
