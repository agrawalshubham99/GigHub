const express = require("express");
const router = express.Router();
const {
  createBooking,
  getMyBookings,
} = require("../controllers/bookingController");
const { auth } = require("../middleware/authMiddleware");

router.post("/", auth, createBooking);
router.get("/me", auth, getMyBookings);

module.exports = router;
