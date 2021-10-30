const express = require("express");
const router = express.Router();

router.get("/:anime", (req, res) => {
  res.send("watch route");
});

router.post("/", (req, res) => {});

module.exports = router;
