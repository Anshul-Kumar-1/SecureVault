from app import create_app
from app.database.db import get_db_connection


app = create_app()
print("\n===== Registered Routes =====")
print(app.url_map)
print("=============================\n")

@app.route("/")
def home():

    connection = get_db_connection()

    if connection:
        connection.close()

        return {
            "success": True,
            "message": "SecureVault Backend Running",
            "database": "Connected"
        }

    return {
        "success": False,
        "message": "Database Connection Failed"
    }, 500


if __name__ == "__main__":
    app.run(debug=True)



