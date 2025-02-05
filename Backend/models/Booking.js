const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hours: Number,
  totalPrice: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);
