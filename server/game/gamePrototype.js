/**
 * Created by saurabhk on 12/11/16.
 */
"use strict";

let uuid = require('node-uuid');

module.exports = {
    game: function(settings) {
        this.id = uuid.v1();
    }
};