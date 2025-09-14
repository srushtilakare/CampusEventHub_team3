import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  college: { type: String, required: true },
  city: { type: String, required: true },
  role: { type: String, enum: ["student", "admin", "organization"], default: "student" },
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
