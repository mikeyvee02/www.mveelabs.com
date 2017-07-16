// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8089;

server.listen(port, function () {
  console.log('!!!Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// Chatroom
var numUsers = 0;

var users = [];


io.on('connection', function (socket)
{
    var ip = socket.request.connection.remoteAddress;



    socket.on('connected', function(username){
        // console.log("A user has connected.");
        // numUsers++;
        // var user = {"name":username, "ip": ip };
        // socket.emit('usersonline', numUsers);
        // users.push(user);
        // //console.log(users);
        console.log("A user has connected.");
    });

    socket.on('disconnect', function(username) {
    console.log("A user has disconnected");
    });


    socket.on('queryusers', function(){
        socket.emit('numusers', numUsers);
    });

    // function up(user)
    // {
    //
    // }
    // function down(user)
    // {
    //
    // }
    // function left(user)
    // {
    //
    // }
    // function right(user)
    // {
    //
    // }


    socket.on('keypress', function(key){
        switch(key) {
            case 13: // enter
                console.log("enter");
                break;
            case 37: // left
                console.log("left");
                break;

            case 38: // up
                console.log("up");
                break;

            case 39: // right
                console.log("right");
                break;

            case 40: // down
                console.log("down");
                break;

            default: return; // exit this handler for other keys
        }
    });


});



//
// //io.on('connection', function (socket) {
//   var addedUser = false;
//
//   // when the client emits 'new message', this listens and executes
//   socket.on('new message', function (data) {
//     // we tell the client to execute 'new message'
//     socket.broadcast.emit('new message', {
//       username: socket.username,
//       message: data
//     });
//   });
//
//   // when the client emits 'add user', this listens and executes
//   socket.on('add user', function (username) {
//     if (addedUser) return;
//
//     // we store the username in the socket session for this client
//     socket.username = username;
//     ++numUsers;
//     addedUser = true;
//     socket.emit('login', {
//       numUsers: numUsers
//     });
//     // echo globally (all clients) that a person has connected
//     socket.broadcast.emit('user joined', {
//       username: socket.username,
//       numUsers: numUsers
//     });
//   });
//
//   // when the client emits 'typing', we broadcast it to others
//   socket.on('typing', function () {
//     socket.broadcast.emit('typing', {
//       username: socket.username
//     });
//   });
//
//   // when the client emits 'stop typing', we broadcast it to others
//   socket.on('stop typing', function () {
//     socket.broadcast.emit('stop typing', {
//       username: socket.username
//     });
//   });
//
//   // when the user disconnects.. perform this
//   socket.on('disconnect', function () {
//     if (addedUser) {
//       --numUsers;
//
//       // echo globally that this client has left
//       socket.broadcast.emit('user left', {
//         username: socket.username,
//         numUsers: numUsers
//       });
//     }
//   });
