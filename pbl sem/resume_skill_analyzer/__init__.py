import os

from flask import Flask, send_from_directory


def create_app() -> Flask:
    # Serve React build from frontend/dist
    frontend_dist = os.path.join(os.path.dirname(os.path.dirname(__file__)), "frontend", "dist")

    app = Flask(__name__, static_folder=frontend_dist, static_url_path="")
    app.config.update(
        SECRET_KEY="resume-skill-analyzer-dev",
        MAX_CONTENT_LENGTH=5 * 1024 * 1024,
    )

    from .routes import main_bp

    app.register_blueprint(main_bp)

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_react(path: str):
        # Serve static files if they exist, otherwise serve index.html (SPA fallback)
        if path and os.path.isfile(os.path.join(frontend_dist, path)):
            return send_from_directory(frontend_dist, path)
        return send_from_directory(frontend_dist, "index.html")

    return app