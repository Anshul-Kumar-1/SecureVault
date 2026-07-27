from app.utils.jwt_helper import generate_token
from app.models.user_model import find_user_by_email, create_user

from app.utils.password_helper import hash_password
from app.utils.response import success_response, error_response

from app.utils.password_helper import verify_password


def register_user(data):

    
    name = data.get("name", "").strip()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "").strip()

    # Validation
    if not name:
        return error_response("Name is required")

    if not email:
        return error_response("Email is required")

    if not password:
        return error_response("Password is required")

    if len(password) < 6:
        return error_response("Password must be at least 6 characters")

    existing_user = find_user_by_email(email)

    if existing_user:
        return error_response("Email already exists")

    hashed_password = hash_password(password)

    create_user(name, email, hashed_password)

    return success_response("User registered successfully")


def login_user(data):

    email = data.get("email", "").strip().lower()
    password = data.get("password", "").strip()

    if not email:
        return error_response("Email is required")

    if not password:
        return error_response("Password is required")

    user = find_user_by_email(email)

    if not user:
        return error_response("User not found", 404)

    if not verify_password(password, user["password"]):
        return error_response("Invalid password", 401)

    token = generate_token(user["id"])

    return success_response(
        "Login successful",
        {
            "token": token,
            "user": {
                "id": user["id"],
                "full_name": user["full_name"],
                "email": user["email"],
            },
        },
    )
