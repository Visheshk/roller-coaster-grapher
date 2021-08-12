var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

});

router.post('/', function(req, res, next) {
  res.send(req.body);
  console.log(req.body);
  console.log(req.body.answer);
  var io = req.app.get('socketio');
  io.emit('new data', req.body);
});


module.exports = router;
