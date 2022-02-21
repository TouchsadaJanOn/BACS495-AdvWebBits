var express = require('express');
var router = express.Router();



var student = [
  {"id":1, "name":"Touch"},
  {"id":2, "name": "Owen"},
  {"id":3, "name": "Justin"},
  {"id":4, "name": "Michael"}
]
/* GET a list of student */
router.get('/', function(req, res, next) {
  res.json(student);
  console.log("List of all student");
});

/* GET a single student by ID */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for (let stu of student){
      if (stu.id ==id){ //stu.id refer to the list "student" above
          res.json(stu);
        }
      }
});

/* PUT a single student by ID */
router.put('/update-student/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for (let stu of student){
      if (stu.id ==id){ //stu.id refer to the list "student" above
          stu.name = "Updated Student"
          res.json(stu);
        }
      }
});

/* POST (create) a single student by ID */
router.post('/add-student', function(req, res, next) {
  const newstudent = {
    "id":5, 
    "name": "Matt" 
  };
  student.push(newstudent);
  console.log("Posting/Creating new student " + newstudent);
  res.json(student);
  
});

/* DELETE a single student by ID */
router.delete('/delete-student/:id', function(req, res, next) {
  const id = req.params.id;
  for (let stu of student){
    if (stu.id ==id){ //stu.id refer to the list "student" above
        delete stu.name; 
      }
    }
    res.json(student);
});





module.exports = router;
