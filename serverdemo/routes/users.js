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

router.post('/', function(req, res, next) {
  // var id = req.params.id;
  // console.log(id);
  // for (let user of users){
  //   if (user.id ==id){
  //     res.json(users);
  //   }
  //   res.send("Can not find user");
  // }
  
  const user = {
    "id": req.body.id,
    "name": req.body.name
  }
  // var db = req.app.locals.db
  // db.collection('users').insertOne(user);

  res.send("User inserted" + user);

});

module.exports = router;
