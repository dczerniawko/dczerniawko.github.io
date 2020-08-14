var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("admin", { title: "Admin" });
});

module.exports = router;
