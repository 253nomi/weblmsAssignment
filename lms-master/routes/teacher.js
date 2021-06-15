var express = require('express');
var router = express.Router();
var AssignmentMarks = require('../models/asignmentMarks');
var Attendance = require('../models/attendance');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/uploadAssignmentMarks', function(req, res, next) {
 
  AssignmentMarks.create(req.body)
  .then((data) => {
      console.log('Assignment Marks have been Added ', data);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(data);
  }, (err) => next(err))
  .catch((err) => next(err));
});

router.post('/uploadAttendance', function(req, res, next) {
 
  Attendance.create(req.body)
  .then((data) => {
      console.log('Attendance have been Uploaded ', data);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(data);
  }, (err) => next(err))
  .catch((err) => next(err));
});

router.get('/assignmentmarks', function(req, res, next) {
  AssignmentMarks.find().sort('name').exec(function(error, results) {
    console.log(results);
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

module.exports = router;
