const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,

    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Cart = mongoose.model("cart", CartSchema);
