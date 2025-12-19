const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Portfolio CMS API" });
});

router.use("/auth", require("./auth.routes"));
router.use("/about", require("./about.routes"));
router.use("/skills", require("./skills.routes"));
router.use("/upload", require("./upload.routes"));


module.exports = router;
