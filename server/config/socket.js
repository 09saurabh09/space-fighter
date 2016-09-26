/**
 * Created by saurabhk on 27/09/16.
 */
"use strict";

io.on('connection', function (socket) {
    console.log("client connected");

    socket.on("loadNewClient", function(location) {
        io.emit("newClientConnected", {id: socket.id, location: location});
    });

    socket.on("leftKey", function(){
        io.emit("leftKeyPressed", socket.id);
    });

    socket.on("rightKey", function(){
        io.emit("rightKeyPressed", socket.id);
    });

    socket.on("upKey", function(){
        io.emit("upKeyPressed", socket.id);
    });

    socket.on("disconnect", function(){
        io.emit("userDisconnected", socket.id);
    });
});