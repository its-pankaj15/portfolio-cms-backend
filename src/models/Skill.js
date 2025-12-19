// src/models/Skill.js
const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: String },         // e.g. "Beginner", "Intermediate", "Expert"
    category: { type: String },      // e.g. "Frontend", "Backend"
    iconUrl: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
