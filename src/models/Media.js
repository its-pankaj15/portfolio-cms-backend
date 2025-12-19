const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },       // public URL or relative path
    filename: { type: String, required: true },
    mimetype: { type: String, required: true },
    size: { type: Number, required: true },
    alt: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Media", mediaSchema);
