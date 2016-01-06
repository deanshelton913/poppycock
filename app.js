var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    router = express.Router(),
    app = express(),
    io = require( "socket.io" )();

// Database
var sequelize = new Sequelize('poppycock', 'postgres', 'mshCxU6HXG7pW_^_', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Or you can simply use a connection uri
var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');



// View Engine setup
app.set('views', path.join(__dirname, 'app/assets/js/views'));
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

// Static route for public files
app.use(express.static(path.join(__dirname, 'public')));

// Socket.io
app.io = io;  // Do this for some reason... StackOverflow me to... can I remove this?

// Routes
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'PoppyCock' });
});

// Errors
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('app/assets/js/views/error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

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
