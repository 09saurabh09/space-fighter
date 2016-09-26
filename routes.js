/**
 * Created by saurabhk on 05/09/16.
 */
"use strict";
const userRoute = require("./server/user/userRoute");

module.exports = function(app) {
    app.use('/api/user', userRoute);
};