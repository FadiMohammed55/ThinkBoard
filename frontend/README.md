# ThinkBoard Frontend

This folder contains the **frontend application** for the ThinkBoard project, built using **React**.

The frontend is responsible for:
- User interface and user experience
- Authentication pages (Login / Register)
- Displaying and managing notes
- Communicating with the backend API

---

## 🚀 Features

- Modern ThinkBoard-style UI
- User authentication (Login / Register)
- Protected pages
- Create, view, and delete notes
- Rate-limit handling UI
- Responsive design

---

## 🛠 Tech Stack

- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- DaisyUI
- JWT Authentication

---

## 📁 Folder Structure

```text

frontend/
└── src/
    ├── api/              # Axios configuration
    ├── components/       # Reusable UI components
    ├── pages/            # Application pages
    │   └── auth/         # Login & Register pages
    ├── App.jsx
    ├── main.jsx
    └── index.css

```

---

## 🔗 Backend Connection

The frontend communicates with the backend API using Axios.

```bash

Base URL:
http://localhost:5050/api

```

Make sure the backend server is running before starting the frontend.

---

## 🔐 Authentication Flow

```text

1. User registers or logs in
2. Backend returns a JWT token
3. Token is stored in localStorage
4. Axios sends the token with each request
5. Protected pages require authentication

```

---

## ▶️ Run Frontend Locally

To run the frontend on your local machine:

```bash


1. Install dependencies

npm install

2. Start the development server

npm run dev

3. The application will run at:

http://localhost:5173

```

⚠️ Make sure the backend server is running on port 5050.

---

## 👨‍💻 Author

```text

Fadi Mohammed  
Full-Stack MERN Developer

```