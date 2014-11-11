var express = require('express')
var app = express();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
var paper = require('paper');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});
/*
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
*/
http.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});