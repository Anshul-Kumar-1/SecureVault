USE securevault;

-- ===========================
-- USERS TABLE
-- ===========================

CREATE TABLE IF NOT EXISTS users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    full_name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- ===========================
-- FILES TABLE
-- ===========================

CREATE TABLE IF NOT EXISTS files (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    original_name VARCHAR(255) NOT NULL,

    stored_name VARCHAR(255) NOT NULL,

    encrypted_name VARCHAR(255),

    file_size BIGINT NOT NULL,

    mime_type VARCHAR(100),

    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_encrypted BOOLEAN DEFAULT FALSE,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE

);
