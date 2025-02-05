const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  pricePerHour: { type: Number, required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  maxResponses: { type: Number, default: 5 },
});

module.exports = mongoose.model("Service", serviceSchema);
