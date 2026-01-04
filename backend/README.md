# ThinkBoard Backend

This folder contains the **backend API** for the ThinkBoard application, built using the **MERN stack**.

The backend is responsible for:
- User authentication
- Notes management
- API security
- Database communication

---

## 🚀 Features
- JWT authentication (Register / Login)
- Protected routes
- User-based notes (CRUD)
- Rate limiting using Upstash Redis
- RESTful API structure
- MongoDB with Mongoose

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Upstash Redis

---

## 📁 Folder Structure

src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
└── server.js

---

## 🔐 API Routes

### Auth

POST /api/auth/register
POST /api/auth/login

### Notes (Protected)

GET /api/notes
GET /api/notes/:id
POST /api/notes
PUT /api/notes/:id
DELETE /api/notes/:id

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=5050
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

## ▶️ Run Backend Locally

To run the backend on your local machine:

1. Install dependencies

```bash
npm install

2. Start the development server

npm run dev

3. The server will run at:

http://localhost:5050

## 👨‍💻 Author

Fadi Mohammed  
Full-Stack MERN Developer