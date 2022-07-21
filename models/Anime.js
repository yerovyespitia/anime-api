const mongoose = require("mongoose")

const AnimeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  synopsis: {
    type: String,
    required: true,
    unique: true,
  },
  images: [
    {
      banner: {
        type: String,
      },
      logo: {
        type: String,
      },
    },
  ],
  num_seasons: {
    type: Number,
    default: 1,
  },
  episodes: [
    {
      episode: {
        type: Number,
        unique: true,
      },
      season: {
        type: Number,
      },
      title: {
        type: String,
      },
      thumbnail: {
        type: String,
        unique: true,
      },
    },
  ],
})

module.exports = mongoose.model("Anime", AnimeSchema)
