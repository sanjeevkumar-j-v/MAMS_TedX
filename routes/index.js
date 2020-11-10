var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', lll: 'sdfg' });
});

router.get("/about", function (req, res, next) {
  res.render("about", { titl: "Express" });
});

router.get("/team", function (req, res, next) {
  res.render("team", { titl: "Express" });
});

router.get("/register", function (req, res, next) {
  res.render("register", { titl: "Express" });
});

module.exports = router;
