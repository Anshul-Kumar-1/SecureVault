from flask import Blueprint, jsonify, request
from app.services.auth_service import register_user, login_user
from flask import g
from app.middleware.auth_middleware import token_required

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")


@auth_bp.route("/test", methods=["GET"])
def test():
    return jsonify({
        "success": True,
        "message": "Auth Route Working"
    })


@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    if not data:
        return {
            "success": False,
            "message": "Request body must be valid JSON."
        }, 400

    return register_user(data)

@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    if not data:
        return {
            "success": False,
            "message": "Request body must be valid JSON."
        }, 400

    return login_user(data)

@auth_bp.route("/profile", methods=["GET"])
@token_required
def profile():

    return {
        "success": True,
        "message": "Protected route accessed",
        "user_id": g.user_id
    }