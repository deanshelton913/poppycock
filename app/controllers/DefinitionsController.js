// Definitions Controller
module.exports = function(io) {
  var app = require('express');
  var router = app.Router();

  router.get('/new', function(req, res, next) {
    res.render('definitions_new', { title: 'PoppyCock' });
  });

    router.get('/create', function(req, res, next) {
    res.render('definitions_create', { title: 'PoppyCock' });
  });

        router.get('/index', function(req, res, next) {
    res.render('definitions_index', { title: 'PoppyCock' });
  });


  return router;
};

