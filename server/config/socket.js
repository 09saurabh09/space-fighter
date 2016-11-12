/**
 * Created by saurabhk on 27/09/16.
 */
"use strict";

io.on('connection', function (socket) {
    console.log("client connected");

    socket.on("loadNewClient", function(location) {
        io.emit("newClientConnected", {id: socket.client.id, location: location});
    });

    socket.on("leftKey", function(){
        io.emit("leftKeyPressed", socket.client.id);
    });

    socket.on("rightKey", function(){
        io.emit("rightKeyPressed", socket.client.id);
    });

    socket.on("upKey", function(){
        io.emit("upKeyPressed", socket.client.id);
    });

    socket.on("shootKey", function(){
        io.emit("shootKeyPressed", socket.client.id);
    });

    socket.on("disconnect", function(){
        io.emit("userDisconnected", socket.client.id);
    });
});