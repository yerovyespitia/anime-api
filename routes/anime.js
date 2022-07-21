const express = require("express")
const router = express.Router()

const Anime = require("../models/Anime")

// Find all animes
router.get("/", async (req, res) => {
  try {
    const anime = await Anime.find({})
    res.status(200).json(anime)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Find an anime
router.get("/:anime", async (req, res) => {
  try {
    const anime = await Anime.findOne({ name: req.params.anime })
    if (!anime) res.status(400).json("This anime does not exist!")
    res.status(200).json(anime)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Add an anime
router.post("/", async (req, res) => {
  try {
    const newAnime = new Anime({
      title: req.body.title,
      synopsis: req.body.synopsis,
      images: req.body.images,
      episodes: req.body.episodes,
    })
    const anime = await newAnime.save()
    res.status(200).json(anime)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
