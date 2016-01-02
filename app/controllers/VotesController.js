var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
  res.render('index', { name: 'John', title: 'PoppyCock' });
});

module.exports = router;
