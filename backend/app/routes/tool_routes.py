from flask import Blueprint, request, send_file, jsonify
from werkzeug.utils import secure_filename

import os
import tempfile

from app.services.encryption_service import encrypt_file

tool_bp = Blueprint("tool", __name__)

print("✅ tool_routes.py loaded")

@tool_bp.route("/encrypt", methods=["POST"])
def encrypt_tool():

    if "file" not in request.files:
        return jsonify({
            "success": False,
            "message": "No file uploaded"
        }), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({
            "success": False,
            "message": "Invalid filename"
        }), 400

    try:

        temp_dir = tempfile.gettempdir()

        filename = secure_filename(file.filename)

        input_path = os.path.join(
            temp_dir,
            filename
        )

        encrypted_path = input_path + ".enc"

        file.save(input_path)

        encrypt_file(
            input_path,
            encrypted_path
        )

        os.remove(input_path)

        return send_file(
            encrypted_path,
            as_attachment=True,
            download_name=filename + ".enc"
        )

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500
        
    print("🔥 Encrypt endpoint reached")
    
@tool_bp.route("/decrypt", methods=["POST"])
def decrypt_tool():

    if "file" not in request.files:
        return jsonify({
            "success": False,
            "message": "No file uploaded"
        }), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({
            "success": False,
            "message": "Invalid filename"
        }), 400

    try:

        temp_dir = tempfile.gettempdir()

        filename = secure_filename(file.filename)

        input_path = os.path.join(temp_dir, filename)

        # Remove .enc extension if present
        if filename.endswith(".enc"):
            output_filename = filename[:-4]
        else:
            output_filename = filename + "_decrypted"

        output_path = os.path.join(temp_dir, output_filename)

        file.save(input_path)

        from app.services.encryption_service import decrypt_file

        decrypt_file(
            input_path,
            output_path
        )

        os.remove(input_path)

        return send_file(
            output_path,
            as_attachment=True,
            download_name=output_filename
        )

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500