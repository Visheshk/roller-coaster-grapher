var express = require('express');
var router = express.Router();
// var d3 = require("d3");
// var Plotly = require('plotly.js-dist-min');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

