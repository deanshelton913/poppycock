var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    router = express.Router(),
    app = express(),

    // Controllers
    appController = require('./app/controllers/AppController'),
    votesController = require('./app/controllers/VotesController'),
    definitionsController = require('./app/controllers/DefinitionsController'),

    // Routes
    routes = {
      '/': appController,
      '/votes': votesController
    }

// View Engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Logger
app.use(logger('dev'));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Static route
app.use(express.static(path.join(__dirname, 'public')));

// Use Controlled routes
for(var route in routes){
  app.use(route, routes[route]);
}

// Errors
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
