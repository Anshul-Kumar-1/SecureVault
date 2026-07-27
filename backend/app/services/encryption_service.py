import os

from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
KEY_PATH = os.path.join(BASE_DIR, "keys", "aes.key")


def load_key():

    # Create a new key if the file doesn't exist
    # OR if it exists but is empty/invalid
    if (not os.path.exists(KEY_PATH)) or os.path.getsize(KEY_PATH) != 32:

        key = os.urandom(32)

        with open(KEY_PATH, "wb") as f:
            f.write(key)

        print("New AES-256 key generated.")

    with open(KEY_PATH, "rb") as f:
        key = f.read()

    print("AES Key Length:", len(key))

    return key

def encrypt_file(input_path, output_path):

    key = load_key()

    iv = os.urandom(16)

    cipher = Cipher(
        algorithms.AES(key),
        modes.CBC(iv)
    )

    encryptor = cipher.encryptor()

    with open(input_path, "rb") as file:
        data = file.read()

    padder = padding.PKCS7(128).padder()

    padded_data = padder.update(data) + padder.finalize()

    encrypted_data = encryptor.update(padded_data) + encryptor.finalize()

    with open(output_path, "wb") as file:
        file.write(iv)
        file.write(encrypted_data)

def decrypt_file(input_path, output_path):

    key = load_key()

    with open(input_path, "rb") as file:
        file_data = file.read()

    # First 16 bytes = IV
    iv = file_data[:16]

    # Remaining bytes = Encrypted Data
    encrypted_data = file_data[16:]

    cipher = Cipher(
        algorithms.AES(key),
        modes.CBC(iv)
    )

    decryptor = cipher.decryptor()

    padded_data = decryptor.update(encrypted_data) + decryptor.finalize()

    unpadder = padding.PKCS7(128).unpadder()

    data = unpadder.update(padded_data) + unpadder.finalize()

    with open(output_path, "wb") as file:
        file.write(data)
    
    