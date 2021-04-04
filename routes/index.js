const express = require("express");
const router = express.Router();

// Initial Page
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
