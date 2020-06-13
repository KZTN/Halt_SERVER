const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const LocationSchema = new mongoose.Schema({
  name: String,
  open_time: String,
  close_time: String,
  rating: Number,
  address: String,
  phone: String,
  thumbnail: String,
  value: Number,
  courtyard: Boolean,
  axes_limit: Number,
  woman_seal: Boolean,
  vegan_seal: Boolean,
  vegetarian_seal: Boolean,
  lgbt_seal: Boolean,
  wifi_seal: Boolean,
  location: {
    type: PointSchema,
    index: "2dsphere",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    { comment: String },
    {rate: Number}
  ],
});

module.exports = mongoose.model("Location", LocationSchema);
