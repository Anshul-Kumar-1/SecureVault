from flask import Flask
from flask_cors import CORS
from config import Config
from app.routes.file_routes import file_bp

from app.routes.auth_routes import auth_bp
from app.routes.tool_routes import tool_bp


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app)

    app.register_blueprint(auth_bp)
    app.register_blueprint(file_bp)
    app.register_blueprint(
    tool_bp,
    url_prefix="/api/tools"
    )

    return app