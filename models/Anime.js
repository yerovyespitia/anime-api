const mongoose = require("mongoose")

const AnimeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  synopsis: {
    type: String,
  },
  images: [
    {
      banner: {
        type: String,
      },
      logo: {
        type: String,
      },
      thumbnail: {
        type: String,
      },
    },
  ],
  episodes: [
    {
      title: {
        type: String,
      },
      thumbnail: {
        type: String,
      },
    },
  ],
})

module.exports = mongoose.model("Anime", AnimeSchema)
