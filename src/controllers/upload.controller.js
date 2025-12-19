const path = require("path");
const Media = require("../models/Media");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // If you serve /uploads as static, url can be `/uploads/<filename>`
    const relativePath = `/uploads/${req.file.filename}`;

    const media = await Media.create({
      url: relativePath,
      filename: req.file.filename,
      mimetype: req.file.mimetype,
      size: req.file.size,
      alt: req.body.alt || "",
    });

    res.status(201).json(media);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
