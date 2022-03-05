const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

const DOMAIN = "http://localhost:3200/uploads";

// Upload image
router.post("/", async (req, res) => {
  const file = req.file;
  res.json({ result: true, path: DOMAIN + "/" + file.filename });
});

module.exports = router;
