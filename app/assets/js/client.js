var React = require('react');
var ReactDOM = require('react-dom');
var IndexTemplate = require('./views/IndexTemplate');

// var io = require('socket.io');
var component = ReactDOM.render(<IndexTemplate/>, document.getElementById('main'));

var socket = io.connect();
socket.on('ping', function(msg){
  console.log(msg);
});

$('.ready').click(function(){
  socket.emit('ready', 'player ready!');
});

