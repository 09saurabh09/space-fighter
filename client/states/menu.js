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