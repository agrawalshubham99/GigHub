const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controllers/chatController");
const { auth } = require("../middleware/authMiddleware");

router.post("/", auth, sendMessage);

module.exports = router;
