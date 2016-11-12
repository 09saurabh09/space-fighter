/**
 * Created by saurabhk on 05/09/16.
 */
"use strict";
const userRoute = require("./server/user/userRoute");
const gameRoute = require("./server/game/gameRoute");

module.exports = function(app) {

    // Add routes for your module
    app.use('/game', function(req, res) {
        res.render("game");
    });

    app.use('/', function(req, res) {
        res.render('index', { title: 'Express' });
    });

    app.use('/api/user', userRoute);

    app.use('/api/game', gameRoute);
};