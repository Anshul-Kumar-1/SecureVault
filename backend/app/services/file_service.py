import os
import uuid

from flask import g, send_file, after_this_request

from app.utils.response import success_response
from app.services.encryption_service import encrypt_file, decrypt_file
from app.models.file_model import (
    create_file,
    get_user_files,
    get_file_by_id,
    delete_file,
)
from flask import g, send_file, after_this_request

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")
ENCRYPTED_FOLDER = os.path.join(BASE_DIR, "encrypted")
DECRYPTED_FOLDER = os.path.join(BASE_DIR, "decrypted")

def upload_file(file):

    original_name = file.filename

    extension = os.path.splitext(original_name)[1]

    stored_name = f"{uuid.uuid4().hex}{extension}"

    encrypted_name = f"{stored_name}.enc"

    file_path = os.path.join(UPLOAD_FOLDER, stored_name)

    encrypted_path = os.path.join(ENCRYPTED_FOLDER, encrypted_name)

    file.save(file_path)
    file_size = os.path.getsize(file_path)

    try:
        encrypt_file(file_path, encrypted_path)
    
        # Delete original file after successful encryption
        if os.path.exists(file_path):
             os.remove(file_path)
    
    except Exception as e:
        if os.path.exists(file_path):
            os.remove(file_path)

        if os.path.exists(encrypted_path):
            os.remove(encrypted_path)
        raise Exception(f"Encryption failed: {str(e)}")
    
    file_data = {
        "user_id": g.user_id,
        "original_name": original_name,
        "stored_name": stored_name,
        "encrypted_name": encrypted_name,
        "file_size": file_size,
        "mime_type": file.mimetype,
        "is_encrypted": True,
    }
    
    print("Uploading File Data:", file_data)

    file_id = create_file(file_data)

    return success_response(
        "File uploaded successfully",
        {
            "file_id": file_id,
            "original_name": original_name,
            "stored_name": stored_name,
            "size": file_data["file_size"],
        },
    )
def get_files():

    files = get_user_files(g.user_id)

    print("Current User:", g.user_id)
    print("Files:", files)

    return success_response(
        "Files fetched successfully",
        files
    )
    
def download_file(file_id):

    file = get_file_by_id(file_id, g.user_id)

    if not file:
        return {
            "success": False,
            "message": "File not found"
        }, 404

    if not file["encrypted_name"]:
        return {
            "success": False,
            "message": "This file is not encrypted."
        }, 400

    encrypted_path = os.path.join(
        ENCRYPTED_FOLDER,
        file["encrypted_name"]
    )

    decrypted_path = os.path.join(
        DECRYPTED_FOLDER,
        file["stored_name"]
    )

    decrypt_file(encrypted_path, decrypted_path)

    @after_this_request
    def remove_file(response):
        try:
            if os.path.exists(decrypted_path):
                os.remove(decrypted_path)
                print("Temporary decrypted file deleted.")
        except Exception as e:
            print("Delete Error:", e)

        return response

    return send_file(
        decrypted_path,
        as_attachment=True,
        download_name=file["original_name"]
    )
    
def delete_uploaded_file(file_id):

    file = get_file_by_id(file_id, g.user_id)

    print(file)

    if not file:
        return {
            "success": False,
            "message": "File not found"
        }, 404

    if file["encrypted_name"]:

        encrypted_path = os.path.join(
            ENCRYPTED_FOLDER,
            file["encrypted_name"]
        )

        print("Encrypted Path:", encrypted_path)

        print("Exists:", os.path.exists(encrypted_path))

        if os.path.exists(encrypted_path):
            os.remove(encrypted_path)
            print("Encrypted file deleted.")

    delete_file(file_id, g.user_id)

    return success_response(
        "File deleted successfully"
    )
    
    