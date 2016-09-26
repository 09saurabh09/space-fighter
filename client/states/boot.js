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