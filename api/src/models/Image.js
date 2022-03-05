const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  path: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Images", ImageSchema);
