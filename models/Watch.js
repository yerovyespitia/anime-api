const mongoose = require("mongoose");

const ViewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  opening: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Watch", ViewSchema);
