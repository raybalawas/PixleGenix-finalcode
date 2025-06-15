const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  duration: String,
  category: String,
  image: String, // Optional
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Service", serviceSchema);