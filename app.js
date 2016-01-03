var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    router = express.Router(),
    app = express(),
    io = require( "socket.io" )(),

    // Controllers
    rootController = require('./app/controllers/RootController'),
    votesController = require('./app/controllers/VotesController'),
    definitionsController = require('./app/controllers/DefinitionsController'),

    // Set up the Routes -> Controller relationship
    controllerMap = {
      '/': rootController, // handle all static pages, and homepage.
      '/votes': votesController,
      '/definitions': definitionsController
    };


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

// Socket.io
app.io = io;  // Do this for some reason... StackOverflow me to... can I remove this?

// Use Controlled routes,
for(var route in controllerMap){
  app.use(route, controllerMap[route](io)); // <-- Pass Socket.io to the controllers :D
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
