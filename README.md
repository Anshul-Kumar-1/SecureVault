# 🔐 SecureVault

> A secure full-stack file encryption and decryption system built with **React**, **Flask**, **MySQL**, **JWT Authentication**, and **AES-256 Encryption**.

![GitHub Repo stars](https://img.shields.io/github/stars/Anshul-Kumar-1/SecureVault?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Anshul-Kumar-1/SecureVault?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/Anshul-Kumar-1/SecureVault?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Flask](https://img.shields.io/badge/Flask-Backend-black?style=for-the-badge&logo=flask)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue?style=for-the-badge&logo=mysql)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)
![AES-256](https://img.shields.io/badge/AES--256-Encryption-success?style=for-the-badge)

---

## 📌 Overview

SecureVault is a secure full-stack web application that enables users to upload, encrypt, decrypt, and manage files safely using **AES-256 encryption**.

The application provides user authentication using **JWT**, stores encrypted files securely, and offers an intuitive dashboard for file management.

---

# ✨ Features

- 🔐 AES-256 File Encryption
- 🔓 Secure File Decryption
- 👤 User Registration & Login
- 🔑 JWT Authentication
- 📁 File Upload & Download
- 🗑 Delete Files
- 👨 Profile Management
- 📊 Interactive Dashboard
- 🌙 Dark / Light Theme
- ⚡ Modern Responsive UI
- 🐳 Docker Support
- ☸ Kubernetes Deployment
- 📄 REST API
- 🧪 Unit Tests

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- CSS3
- JavaScript
- React Router

## Backend

- Python
- Flask
- JWT Authentication

## Database

- MySQL

## Security

- AES-256 Encryption
- Password Hashing
- JWT Tokens

## DevOps

- Docker
- Docker Compose
- Kubernetes

---

# 📂 Project Structure

```
SecureVault
│
├── backend
│   ├── app
│   │   ├── database
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│   │
│   ├── tests
│   ├── app.py
│   ├── config.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── docker
├── docs
├── kubernetes
├── LICENSE
└── README.md
```

---

# 📸 Screenshots

## Home Page

> Add screenshot here

```
screenshots/home.png
```

---

## Login

```
screenshots/login.png
```

---

## Dashboard

```
screenshots/dashboard.png
```

---

## Encryption

```
screenshots/encrypt.png
```

---

## Profile

```
screenshots/profile.png
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Anshul-Kumar-1/SecureVault.git
```

```
cd SecureVault
```

---

# ⚙ Backend Setup

```
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Linux / Mac

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run backend

```bash
python app.py
```

---

# ⚙ Frontend Setup

```
cd frontend
```

Install packages

```bash
npm install
```

Start project

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create

```
backend/.env
```

Example

```
SECRET_KEY=your_secret_key

JWT_SECRET_KEY=your_jwt_secret

DB_HOST=localhost

DB_PORT=3306

DB_NAME=securevault

DB_USER=root

DB_PASSWORD=password
```

---

# 🐳 Docker

Build

```bash
docker-compose up --build
```

---

# ☸ Kubernetes

Deploy

```bash
kubectl apply -f kubernetes/
```

---

# 📄 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/register |
| POST | /api/login |

---

## Files

| Method | Endpoint |
|---------|----------|
| POST | /api/upload |
| GET | /api/files |
| DELETE | /api/delete |

---

## Encryption

| Method | Endpoint |
|---------|----------|
| POST | /api/encrypt |
| POST | /api/decrypt |

---

# 🔒 Security

- AES-256 Encryption
- JWT Authentication
- Password Hashing
- Secure File Storage
- Environment Variables
- Authentication Middleware

---

# 🧪 Testing

```
pytest
```

---

# 📈 Future Improvements

- Two Factor Authentication
- Email Verification
- Password Reset
- Cloud Storage Integration
- Role Based Authentication
- File Sharing
- File Versioning
- Activity Logs
- Encryption History

---

# 🤝 Contributing

Contributions are welcome.

Fork the repository.

Create a new branch.

Submit a Pull Request.

---

# 👨‍💻 Author

**Anshul Kumar**

B.Tech Computer Science Engineering

GitHub

https://github.com/Anshul-Kumar-1

LinkedIn

https://www.linkedin.com/in/anshul-kumar-25577b2aa

---

# 📜 License

This project is licensed under the MIT License.

See the LICENSE file for details.

---

## ⭐ Support

If you found this project useful, please consider giving it a **Star ⭐** on GitHub.
