var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

});

router.post('/', function(req, res, next) {
  // res.send(req.body);
  // console.log(req.body);
  // console.log(req.body.test);
  // console.log(req.test);
  // console.log(req);
  var io = req.app.get('socketio');
  io.emit('new data', req.body);
  // res.send(JSON.stringify(req.body));
  res.send(true);
  return true;
});


module.exports = router;
