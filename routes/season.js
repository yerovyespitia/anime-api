const express = require("express");
const router = express.Router();

const Season = require("../models/Season");

router.get("/", async (req, res) => {
  try {
    const season = await Season.find({});
    res.status(200).json(season);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:anime", async (req, res) => {
  try {
    const season = await Season.findOne({ name: req.params.anime });
    !season && res.status(400).json("Wrong Anime");
    res.status(200).json(season);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newSeason = new Season({
      name: req.body.name,
      episodes: req.body.episodes,
    });
    const season = await newSeason.save();
    res.status(200).json(season);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
