// Votes Controller
module.exports = function(io) {
  var app = require('express');
  var router = app.Router();

  router.get('/new', function(req, res, next) {
    res.render('votes_new', { title: 'PoppyCock' });
  });

  return router;
};

