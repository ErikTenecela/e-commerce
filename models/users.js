const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    minlength: 6,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
});

module.exports = User = mongoose.model("User", UserSchema);
