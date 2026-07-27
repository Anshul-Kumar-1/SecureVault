from app.database.db import get_db_connection


def find_user_by_email(email):
    connection = get_db_connection()

    if not connection:
        return None

    cursor = connection.cursor(dictionary=True)

    query = """
        SELECT * FROM users
        WHERE email = %s
    """

    cursor.execute(query, (email,))

    user = cursor.fetchone()

    cursor.close()
    connection.close()

    return user


def create_user(name, email, password):
    connection = get_db_connection()

    if not connection:
        return False

    cursor = connection.cursor()

    query = """
        INSERT INTO users(full_name, email, password)
        VALUES(%s, %s, %s)
    """

    cursor.execute(query, (name, email, password))

    connection.commit()

    cursor.close()
    connection.close()

    return True


def find_user_by_id(user_id):
    connection = get_db_connection()

    if not connection:
        return None

    cursor = connection.cursor(dictionary=True)

    query = """
        SELECT id, full_name, email, created_at
        FROM users
        WHERE id = %s
    """

    cursor.execute(query, (user_id,))

    user = cursor.fetchone()

    cursor.close()
    connection.close()

    return user