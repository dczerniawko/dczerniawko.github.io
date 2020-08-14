var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("news", { title: "News" });
});

module.exports = router;
