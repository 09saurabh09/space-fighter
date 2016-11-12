/**
 * Created by saurabhk on 12/11/16.
 */
'use strict';

let Game = require("./gamePrototype").game;

module.exports = {
    createGame: function (req, res) {
        let game = new Game(req.body.settings);
        GAMES[game.id] = game;
        res.status(200).send({gameId: game.id});
    }
};