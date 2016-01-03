// Definitions Controller
module.exports = function(io) {
  var app = require('express');
  var router = app.Router();

  router.get('/new', function(req, res, next) {
    res.render('definitions_new', { title: 'PoppyCock' });
  });

  return router;
};

