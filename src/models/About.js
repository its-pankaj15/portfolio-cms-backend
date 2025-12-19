// src/models/About.js
const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    headline: { type: String, required: true },
    bio: { type: String, required: true },
    avatarUrl: { type: String },
    location: { type: String },
    socials: {
      github: String,
      linkedin: String,
      twitter: String,
      website: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", aboutSchema);
