const express = require("express");
const router = express.Router();

const Watch = require("../models/Watch");

router.get("/", async (req, res) => {
  try {
    const watch = await Watch.find({});
    res.status(200).json(watch);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:anime", async (req, res) => {
  try {
    const watch = await Watch.findOne({ name: req.params.anime });
    !watch && res.status(400).json("Wrong Anime");
    res.status(200).json(watch);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newWatch = new Watch({
      name: req.body.name,
      opening: req.body.opening,
    });
    const watch = await newWatch.save();
    res.status(200).json(watch);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {});

module.exports = router;
