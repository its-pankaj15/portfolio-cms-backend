const router = require("express").Router();
const upload = require("../middleware/upload");
const { auth, adminOnly } = require("../middleware/auth");
const { uploadImage } = require("../controllers/upload.controller");

// Admin-only image upload
router.post(
  "/image",
  auth,
  adminOnly,
  upload.single("file"), // form field name: "file"
  uploadImage
);

module.exports = router;
