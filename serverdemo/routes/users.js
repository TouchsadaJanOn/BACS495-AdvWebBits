var express = require('express');
var router = express.Router();



var users = [
  {"id":1, "name":"Touch"},
  {"id":2, "name": "Owen"}
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for (let user of users){
    if (user.id ==id){
      res.json(users);
    }
    res.send("Can not find user");
  }
  
});

module.exports = router;
