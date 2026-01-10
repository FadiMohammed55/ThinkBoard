# ThinkBoard 🧠📝

ThinkBoard is a **full-stack MERN notes application** that allows users to securely create, manage, and organize their notes.  
It features authentication with JWT, protected routes, rate-limited APIs, and a modern React frontend.

---

## 🚀 Features

- User authentication (Register / Login)
- JWT-based protected routes
- Create, read, and delete notes
- User-specific notes
- API rate limiting with Upstash Redis
- Responsive React UI
- Production-ready deployment setup

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Upstash Redis (Rate Limiting)

### Frontend
- React (Vite)
- React Router
- Axios
- TailwindCSS / DaisyUI
- Lucide Icons

---

## 📂 Project Structure

```text

ThinkBoard/
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ └── server.js
│ ├── .env
│ └── README.md
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── index.html
│ └── README.md
│
└── README.md

```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:

```env

PORT=5050
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
NODE_ENV=development

```

---

## ▶️ Run Project Locally

### 1️⃣ Backend

```bash

cd backend
npm install
npm run dev

Backend runs on:

http://localhost:5050

```

### 2️⃣ Frontend

```bash

cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173

```

---

## 🔐 API Authentication Flow


1. Register or Login

2. Receive JWT token

3. Send token in headers:

Authorization: Bearer YOUR_TOKEN

4. Access protected routes (/api/notes)


## 🌍 Deployment

- Backend serves frontend in production

- React Router supported (no 404 on refresh)

- Rate limiting enabled only in production

---

## 👨‍💻 Author

```text

Fadi Mohammed  
Full-Stack MERN Developer

```