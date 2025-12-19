const About = require("../models/About");

// Public – get current about
exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Admin – upsert about
exports.upsertAbout = async (req, res) => {
  try {
    const data = req.body;
    const about = await About.findOneAndUpdate({}, data, {
      new: true,
      upsert: true,
    });
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
