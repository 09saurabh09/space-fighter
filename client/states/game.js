/**
 * Created by saurabhk on 05/09/16.
 */

"use strict";

var Game = function(){
    var game = this.game;

};

var cursors, spaceShip, weapon, fireButton, asteroids;
var clients = {};

Game.prototype = {
    init: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        setInterval(this.syncGameState, 0.1);
        socket.on("rightKeyPressed", this.handleRightKey.bind(this));
        socket.on("leftKeyPressed", this.handleLeftKey.bind(this));
        socket.on("upKeyPressed", this.handleUpKey.bind(this));
        socket.on("shootKeyPressed", this.handleShootKey.bind(this));
        socket.on("newClientConnected", this.addNewClient.bind(this));
    },

    preload: function(){

    },
    create: function(){
        console.log("game started");
        this.game.world.setBounds(0, 0, 4000, 4000);
        //this.background = this.game.add.sprite(0,0, 'background');
        //this.space = this.game.add.sprite(0,0, 'space');
        this.createSpaceShip();

        // Add asteroids

        //  Some asteroids to collide with
        asteroids = this.game.add.physicsGroup(Phaser.Physics.ARCADE);

        this.createAsteroids(100);
        this.createStars(100);

        this.game.physics.arcade.enable(asteroids);
        //spaceShip.body.setRectangle();

        // Weapon configuration
        weapon = this.game.add.weapon(30, 'bullet');
        //  The bullet will be automatically killed when it leaves the world bounds
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

        //  The speed at which the bullet is fired
        weapon.bulletSpeed = 600;

        //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
        weapon.fireRate = 100;

        this.game.physics.arcade.enable(weapon);

        cursors = this.game.input.keyboard.createCursorKeys();
        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    },

    update: function() {
        var self = this;
        if(clients[socket.id] && clients[socket.id]["spaceship"]) {
            clients[socket.id]["spaceship"].body.velocity.x = 0;
            clients[socket.id]["spaceship"].body.velocity.y = 0;
            clients[socket.id]["spaceship"].body.angularVelocity = 0;
            if (cursors.left.isDown) {
                //spaceShip.x -= 2;
                //spaceShip.angle = 180;
                //spaceShip.body.moveLeft(200);
                socket.emit("leftKey");
            }
            else if (cursors.right.isDown) {
                //spaceShip.x += 2;
                //spaceShip.angle = 0;
                socket.emit("rightKey");
            }

            if (cursors.up.isDown) {
                //spaceShip.y -= 2;
                //spaceShip.angle = -90;
                socket.emit("upKey");
            }
            else if (cursors.down.isDown)
            {
                //spaceShip.y += 2;
                //spaceShip.angle = 90;
            }

            if (fireButton.isDown) {
                socket.emit("shootKey");
            }

            this.game.physics.arcade.collide(spaceShip, asteroids, function(spaceShip, asteroid){
                spaceShip.kill();
            });

            this.game.physics.arcade.collide(asteroids, asteroids, function(){
            });

            this.game.physics.arcade.collide(weapon.bullets, asteroids, function(weapon, asteroid){
                weapon.kill();
                asteroid.kill();
                self.createAsteroids(1);
            });
            this.game.world.wrap(spaceShip, 0, true);
        }

    },

    createSpaceShip: function() {
        var location = {
            x: this.game.world.bounds.randomX,
            y: this.game.world.bounds.randomY
        };
        socket.emit("loadNewClient", location);

    },

    addNewClient: function(data) {
        var id = data.id;
        var location = data.location;
        spaceShip = this.game.add.sprite(location.x, location.y, 'spaceship');
        spaceShip.anchor.setTo(0.5);
        spaceShip.scale.setTo(0.5);

        // If new client is you only
        if (id == socket.id) {
            this.game.camera.follow(spaceShip);
            weapon.trackSprite(spaceShip, 0, 0, true);
        }
        this.game.physics.arcade.enable(spaceShip);
        clients[id] = {};
        clients[id]["spaceship"] = spaceShip;
    },

    createAsteroids: function(count) {
        for (var i = 0; i < count; i++) {
            var asteroid = asteroids.create(this.game.world.bounds.randomX, this.game.world.bounds.randomY, 'asteroid');
            asteroid.body.setCircle(24);
            asteroid.body.collideWorldBounds = true;
            asteroid.body.bounce.set(1);
            var negativeVelocity = Math.random() > 0.5 ? 1: -1;
            asteroid.body.velocity.set(negativeVelocity * 50 * Math.random(), negativeVelocity * 50 * Math.random());
        }
    },

    createStars: function(count) {
        for (var i = 0; i < count; i++) {
            this.game.add.sprite(this.game.world.bounds.randomX, this.game.world.bounds.randomY, "star");
        }

    },

    handleRightKey: function(client) {
        clients[client]["spaceship"].body.angularVelocity = 200;
    },

    handleLeftKey: function(client) {
        clients[client]["spaceship"].body.angularVelocity = -200;
    },

    handleUpKey: function(client) {
        var ship = clients[client]["spaceship"];
        this.game.physics.arcade.velocityFromAngle(ship.angle, 200, ship.body.velocity);
    },

    handleShootKey: function(client) {
        weapon.fire();
    },

    syncGameState: function() {

    }
};

module.exports = Game;