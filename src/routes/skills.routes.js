const router = require("express").Router();
const { auth, adminOnly } = require("../middleware/auth");
const {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skills.controller");

router.get("/", getSkills);
router.post("/", auth, adminOnly, createSkill);
router.put("/:id", auth, adminOnly, updateSkill);
router.delete("/:id", auth, adminOnly, deleteSkill);

module.exports = router;
