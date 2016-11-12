/**
 * Created by saurabhk on 05/09/16.
 */
"use strict";
const userRoute = require("./server/user/userRoute");
const gameRoute = require("./server/game/gameRoute");
const dashboardRoute = require("./server/dashboard/dashboardRoute");

module.exports = function(app) {

    // Add routes for your module
    app.use('/', dashboardRoute);

    app.use('/api/user', userRoute);

    app.use('/api/game', gameRoute);
};