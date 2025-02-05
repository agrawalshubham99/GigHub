const express = require("express");
const router = express.Router();
const {
  createService,
  getServices,
  getService,
} = require("../controllers/serviceController");
const { auth } = require("../middleware/authMiddleware");

router.post("/", auth, createService);
router.get("/", getServices);
router.get("/:id", getService);

module.exports = router;
