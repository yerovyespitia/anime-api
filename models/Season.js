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
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
    },
  ],
});

const dbd = [
  {
    name: "",
    episodes: [
      {
        nameEp: "1. ",
        time: "24 min",
        thumbnail: "",
      },
    ],
  },
];

module.exports = mongoose.model("Season", ViewSchema);
