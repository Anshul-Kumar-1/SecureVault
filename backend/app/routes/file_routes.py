from flask import Blueprint, request

from app.middleware.auth_middleware import token_required
from app.services.file_service import (
    upload_file,
    get_files,
    download_file,
    delete_uploaded_file,
)

file_bp = Blueprint("files", __name__, url_prefix="/api/files")


# Upload File
@file_bp.route("/upload", methods=["POST"])
@token_required
def upload():

    if "file" not in request.files:
        return {
            "success": False,
            "message": "No file selected."
        }, 400

    file = request.files["file"]

    return upload_file(file)


# Get All Files
@file_bp.route("", methods=["GET"])
@token_required
def get_all_files():

    return get_files()


# Download File
@file_bp.route("/download/<int:file_id>", methods=["GET"])
@token_required
def download(file_id):

    return download_file(file_id)


# Delete File
@file_bp.route("/<int:file_id>", methods=["DELETE"])
@token_required
def delete(file_id):

    return delete_uploaded_file(file_id)