var express = require('express');
var router = express.Router();
let times = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  times++;
  res.send('User accesses are : '+ times);
});

module.exports = router;
