import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// helper to create token
const createToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ================= Register =================
router.post("/register", async (req, res) => {
  try {
    const { fullName, email, contact, college, city, role, password, confirmPassword } = req.body;

    // basic validation
    if (!fullName || !email || !contact || !college || !city || !role || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // check if email already registered
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already registered with this email" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullName, email, contact, college, city, role, password: hashed
    });

    const token = createToken(user);
    res.status(201).json({ message: "Registration successful", token, user });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// ================= Login (by email or username) =================
// Accepts: { identifier, password, role }
// identifier = email OR fullName
router.post("/login", async (req, res) => {
  try {
    const { identifier, password, role } = req.body;

    if (!identifier || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // find by email OR fullName with role match
    const user = await User.findOne({
      role,
      $or: [{ email: identifier }, { fullName: identifier }]
    });

    if (!user) return res.status(400).json({ message: "User not registered" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = createToken(user);
    res.json({ message: "Login successful", token, user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

export default router;
