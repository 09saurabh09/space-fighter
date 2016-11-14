/**
 * Created by saurabhk on 12/11/16.
 */
"use strict";
let env = process.env.NODE_ENV;
let config = require('dotenv').config({path: `${__dirname}/env/${env}.env`});

global.GAMES = {};
global.SERVER_CONFIG = config;
global.APP_ENV = env;