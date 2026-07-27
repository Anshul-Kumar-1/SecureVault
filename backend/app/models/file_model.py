from app.database.db import get_db_connection


def create_file(file_data):
    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
    INSERT INTO files
    (
        user_id,
        original_name,
        stored_name,
        encrypted_name,
        file_size,
        mime_type,
        is_encrypted
    )
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """

    values = (
        file_data["user_id"],
        file_data["original_name"],
        file_data["stored_name"],
        file_data["encrypted_name"],
        file_data["file_size"],
        file_data["mime_type"],
        file_data["is_encrypted"],
    )

    cursor.execute(query, values)
    connection.commit()

    file_id = cursor.lastrowid

    cursor.close()
    connection.close()

    return file_id


def get_user_files(user_id):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)

    query = """
    SELECT
        id,
        original_name,
        stored_name,
        encrypted_name,
        file_size,
        mime_type,
        upload_date,
        is_encrypted
    FROM files
    WHERE user_id = %s
    ORDER BY upload_date DESC
    """

    cursor.execute(query, (user_id,))
    files = cursor.fetchall()

    cursor.close()
    connection.close()

    return files


def get_file_by_id(file_id, user_id):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)

    query = """
    SELECT *
    FROM files
    WHERE id = %s AND user_id = %s
    """

    cursor.execute(query, (file_id, user_id))

    file = cursor.fetchone()

    cursor.close()
    connection.close()

    return file


def delete_file(file_id, user_id):
    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
    DELETE FROM files
    WHERE id = %s AND user_id = %s
    """

    cursor.execute(query, (file_id, user_id))
    connection.commit()

    deleted = cursor.rowcount

    cursor.close()
    connection.close()

    return deleted