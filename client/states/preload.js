var Preloader = function (game) {
    this.asset = null;
    this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

    preload: function () {
        var star = require("file!../images/rsz_star.png");
        var asteroid = require("file!../images/rsz_asteroid-icon.png");
        var bullet = require("file!../images/shmup-bullet.png");
        var blueship = require("file!../images/rsz_blueship.png");
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
