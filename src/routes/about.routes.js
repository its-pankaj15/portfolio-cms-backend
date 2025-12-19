const router = require("express").Router();
const { auth, adminOnly } = require("../middleware/auth");
const { getAbout, upsertAbout } = require("../controllers/about.controller");

router.get("/", getAbout);
router.put("/", auth, adminOnly, upsertAbout);

module.exports = router;
