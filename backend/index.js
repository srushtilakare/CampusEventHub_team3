import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
await connectDB(); // connect to MongoDB

const app = express();
app.use(express.json());

// allow your frontend at http://localhost:3000
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("CampusEventHub backend is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
