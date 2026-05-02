const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be greater than 0"]
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Food", foodSchema);