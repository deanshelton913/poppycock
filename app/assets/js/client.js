var socket = io.connect();

socket.on('ping', function(msg){
  console.log(msg);
});

$('.ready').click(function(){
  socket.emit('ready', 'player ready!');
});



