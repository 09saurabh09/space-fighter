/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by saurabhk on 04/09/16.
	 */
	"use strict";
	//require('pixi.js');
	//require('p2');
	//require('phaser');
	//require('./css/parallax.css');
	let boot = __webpack_require__(1);
	let preload = __webpack_require__(4);
	let menu = __webpack_require__(3);
	let theGame = __webpack_require__(2);
	//
	var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "space-fighter-game");
	
	game.state.add("boot",boot);
	game.state.add("preload",preload);
	game.state.add("menu",menu);
	game.state.add("theGame",theGame);
	game.state.start("boot");
	
	var socket = io.connect('http://localhost:8100');

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by saurabhk on 05/09/16.
	 */
	
	// State for setting properties based on device and orientation
	
	var Boot = function(){
	};
	
	Boot.prototype = {
	    preload: function(){
	        //this.load.image('preloader', 'assets/images/preloader.gif');
	    },
	    create: function(){
	        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	        this.scale.pageAlignHorizontally = true;
	        this.scale.pageAlignVertically = true;
	        this.game.state.start("preload");
	    }
	};
	
	module.exports = Boot;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by saurabhk on 05/09/16.
	 */
	
	"use strict";
	
	var Game = function(){
	    var game = this.game;
	
	};
	
	var cursors, spaceShip, weapon, fireButton, asteroids;
	Game.prototype = {
	    init: function() {
	        this.game.physics.startSystem(Phaser.Physics.ARCADE);
	    },
	
	    preload: function(){
	
	    },
	    create: function(){
	        console.log("game started");
	        this.game.world.setBounds(0, 0, 4000, 4000);
	        //this.background = this.game.add.sprite(0,0, 'background');
	        //this.space = this.game.add.sprite(0,0, 'space');
	        spaceShip = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'spaceship');
	        spaceShip.anchor.setTo(0.5);
	        spaceShip.scale.setTo(0.5);
	        this.game.camera.follow(spaceShip);
	
	        // Add asteroids
	
	        //  Some asteroids to collide with
	        asteroids = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
	
	        this.createAsteroids(100);
	        this.createStars(100);
	
	        this.game.physics.arcade.enable(spaceShip);
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
	        weapon.trackSprite(spaceShip, 0, 0, true);
	
	        this.game.physics.arcade.enable(weapon);
	
	        cursors = this.game.input.keyboard.createCursorKeys();
	        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
	    },
	
	    update: function() {
	        spaceShip.body.velocity.x = 0;
	        spaceShip.body.velocity.y = 0;
	        spaceShip.body.angularVelocity = 0;
	        let self = this;
	        if(spaceShip) {
	            if (cursors.left.isDown) {
	                //spaceShip.x -= 2;
	                //spaceShip.angle = 180;
	                //spaceShip.body.moveLeft(200);
	                spaceShip.body.angularVelocity = -200;
	            }
	            else if (cursors.right.isDown) {
	                //spaceShip.x += 2;
	                //spaceShip.angle = 0;
	                spaceShip.body.angularVelocity = 200;
	            }
	
	            if (cursors.up.isDown) {
	                //spaceShip.y -= 2;
	                //spaceShip.angle = -90;
	                this.game.physics.arcade.velocityFromAngle(spaceShip.angle, 200, spaceShip.body.velocity);
	            }
	            else if (cursors.down.isDown)
	            {
	                //spaceShip.y += 2;
	                //spaceShip.angle = 90;
	            }
	
	            if (fireButton.isDown)
	            {
	                weapon.fire();
	            }
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
	
	    },
	
	    createAsteroids: function(count) {
	        for (var i = 0; i < count; i++) {
	            var asteroid = asteroids.create(this.game.world.bounds.randomX, this.game.world.bounds.randomY, 'asteroid');
	            asteroid.body.setCircle(24);
	            asteroid.body.collideWorldBounds = true;
	            asteroid.body.bounce.set(1);
	            let negativeVelocity = Math.random() > 0.5 ? 1: -1;
	            asteroid.body.velocity.set(negativeVelocity * 50 * Math.random(), negativeVelocity * 50 * Math.random());
	        }
	    },
	
	    createStars: function(count) {
	        for (var i = 0; i < count; i++) {
	            this.game.add.sprite(this.game.world.bounds.randomX, this.game.world.bounds.randomY, "star");
	        }
	
	    }
	};
	
	module.exports = Game;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by saurabhk on 05/09/16.
	 */
	var Menu = function () {
	};
	
	Menu.prototype = {
	
	    create: function () {
	        this.game.state.start("theGame");
	    },
	
	    update: function () {
	    },
	
	    onDown: function () {
	        this.game.state.start("theGame");
	    }
	};
	
	module.exports = Menu;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Preloader = function (game) {
	    this.asset = null;
	    this.ready = false;
	};
	
	module.exports = Preloader;
	
	Preloader.prototype = {
	
	    preload: function () {
	        let star = __webpack_require__(7);
	        let asteroid = __webpack_require__(5);
	        let bullet = __webpack_require__(8);
	        let blueship = __webpack_require__(6);
	        //this.asset = this.add.sprite(320, 240, 'preloader');
	        //this.asset.anchor.setTo(0.5, 0.5);
	        //this.load.setPreloadSprite(this.asset);
	        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
	        //this.load.image('test', 'assets/images/test.jpg');
	        //this.load.image('test1', 'assets/images/test1.jpg');
	        //this.load.image('test2', 'assets/images/test2.jpg');
	        //this.load.image('background', 'assets/images/background.jpg');
	        //this.load.image('space', 'assets/images/space.jpg');
	        this.load.image('spaceship', 'images/rsz_blueship.png');
	        this.load.image('asteroid', 'images/rsz_asteroid-icon.png');
	        //this.load.image('asteroid-icon', 'assets/images/rsz_asteroid-icon.png');
	        this.load.image('bullet', 'images/shmup-bullet.png');
	        this.load.image('star', 'images/rsz_star.png');
	    },
	
	    create: function () {
	        //this.asset.cropEnabled = false;
	    },
	
	    update: function () {
	        if (!!this.ready) {
	            this.game.state.start('menu');
	        }
	    },
	
	    onLoadComplete: function () {
	        this.ready = true;
	
	    }
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c36fb53ff00989956600639961b22cce.png";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "818d63756d15690ddd44a308bc03aed1.png";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5901f0ef22428dea7606e52a03d1c8c3.png";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0ef14c936adad7f8a52919338d11c7dd.png";

/***/ }
/******/ ]);