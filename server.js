var express = require('express');
    var app = express();
        app.use(express.static( __dirname + '/public_html'))
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('New Connection from: ' + socket.id);

    socket.on('chat', function(msg){
        io.emit('chat', msg);
    });

    socket.on('connect', function(){
        console.log('user connected');
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

server.listen(80, () => {
    console.log('listening on *:80');
});
