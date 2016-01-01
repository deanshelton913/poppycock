var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PoppyCock' });
});

router.get('/votes/new', function(req, res, next) {
  res.render('votes/new', { title: 'PoppyCock' });
});

router.get('/definitions', function(req, res, next) {
  res.render('definitions/index', { title: 'PoppyCock' });
});

router.get('/definitions/new', function(req, res, next) {
  res.render('definitions/new', { title: 'PoppyCock' });
});

router.get('/how-to', function(req, res, next) {
  res.render('how-to', { title: 'PoppyCock' });
});

router.get('/summary', function(req, res, next) {
  res.render('summary', { title: 'PoppyCock' });
});

module.exports = router;
