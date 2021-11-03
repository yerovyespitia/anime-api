const mongoose = require("mongoose");

const ViewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  episodes: [
    {
      nameEp: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      thumbnail: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Season", ViewSchema);
