/**
 * Created by saurabhk on 15/11/16.
 */
'use strict';

function mongoUrl() {
    var mongoUrl;
    switch(APP_ENV) {

        case "development":
            mongoUrl = "mongodb://localhost:27017/space-fighter";
            break;

        case "staging":
        case "production":
            break;

        default:
            mongoUrl = "mongodb://localhost:27017/space-fighter";
            break;
    }
    return mongoUrl;
}

module.exports = {
    mongoUrl: mongoUrl()
};