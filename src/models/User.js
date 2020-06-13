const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  thumbnail: String,
  email: String,
  phone: String,
  password: String,
  axes_truck: Number,
});

module.exports = mongoose.model("User", UserSchema);
