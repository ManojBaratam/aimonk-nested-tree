# 🌳 Nested Tag Tree - Full Stack Assignment

## 📌 Overview
This project is a full-stack web application that allows users to create, edit, and manage a nested tree structure dynamically.

Each node (tag) can either:
- Contain **data**, OR
- Contain **children nodes**

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Axios

### Backend
- FastAPI
- SQLAlchemy

### Database
- SQLite (can be replaced with PostgreSQL/MySQL)

---

## ✨ Features

- Recursive tree rendering
- Add child nodes dynamically
- Edit node names
- Edit node data
- Collapse / expand nodes
- Convert data node → children node automatically
- Save (Update) tree using REST API
- Load all saved trees on startup

---

## 🧠 Key Concept

The core logic is built using a **recursive component (TagView)** that renders nested structures dynamically.

---

## 🔌 API Endpoints

| Method | Endpoint        | Description        |
|--------|---------------|--------------------|
| GET    | /tree         | Get all trees      |
| POST   | /tree         | Create new tree    |
| PUT    | /tree/{id}    | Update tree        |

---

## 🛠️ Setup Instructions

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
python -m uvicorn main:app --reload