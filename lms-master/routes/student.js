var express = require('express');
var router = express.Router();
var FB = require('../models/fb');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/provideFeedback', function(req, res, next) {
 
  FB.create(req.body)
  .then((fb) => {
      console.log('Feedback has been Added ', fb);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(fb);
  }, (err) => next(err))
  .catch((err) => next(err));
});



module.exports = router;
