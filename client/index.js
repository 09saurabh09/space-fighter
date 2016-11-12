/**
 * Created by saurabhk on 04/09/16.
 */
"use strict";
//require('pixi.js');
//require('p2');
//require('phaser');
//require('./css/parallax.css');
let boot = require("./states/boot");
let preload = require("./states/preload");
let menu = require("./states/menu");
let theGame = require("./states/game");
//
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "space-fighter-game");

game.state.add("boot",boot);
game.state.add("preload",preload);
game.state.add("menu",menu);
game.state.add("theGame",theGame);
game.state.start("boot");

window.socket = io.connect('http://localhost:8100');
window.PRIORITY_ACCUMULATOR = {};