const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  thumbnail: String,
  email: String,
  phone: String,
  password: String,
  axes_truck: Number,
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
    },
  ]
});

module.exports = mongoose.model("User", UserSchema);
