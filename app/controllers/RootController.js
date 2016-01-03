// Root Controller
module.exports = function(io) {
  var app = require('express');
  var router = app.Router();

  router.get('/', function(req, res, next) {
    res.render('index', { title: 'PoppyCock' });
  });

  router.get('/how-to', function(req, res, next) {
    res.render('how-to', { title: 'PoppyCock' });
  });

  router.get('/summary', function(req, res, next) {
    res.render('index', { title: 'PoppyCock' });
  });

  router.get('/styleguide', function(req, res, next) {
    res.render('styleguide', { title: 'PoppyCock' });
  });

  return router;
};

