const express = require("express");
const router = express.Router();

const View = require("../models/View");

// See all animes
router.get("/", async (req, res) => {
  try {
    const view = await View.find({});
    res.status(200).json(view);
  } catch (err) {
    res.status(500).json(err);
  }
});

// See an anime
router.get("/:anime", async (req, res) => {
  try {
    const view = await View.findOne({ name: req.params.anime });
    !view && res.status(400).json("Wrong Anime");
    res.status(200).json(view);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add an anime
router.post("/", async (req, res) => {
  try {
    const newView = new View({
      name: req.body.name,
      description: req.body.description,
      wallpaper: req.body.wallpaper,
      logo: req.body.logo,
    });
    const view = await newView.save();
    res.status(200).json(view);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
