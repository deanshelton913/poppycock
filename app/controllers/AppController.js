var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { name: 'John', title: 'PoppyCock' });
});

router.get('/how-to', function(req, res, next) {
  res.render('index', { name: 'John', title: 'PoppyCock' });
});

router.get('/summary', function(req, res, next) {
  res.render('index', { name: 'John', title: 'PoppyCock' });
});

module.exports = router;
