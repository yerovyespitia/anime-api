const mongoose = require("mongoose")

const ViewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  wallpaper: {
    type: String,
    required: true,
    unique: true,
  },
  logo: {
    type: String,
    required: true,
    unique: true,
  },
})

module.exports = mongoose.model("View", ViewSchema)
