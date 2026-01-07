import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", rateLimiter, notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
});
