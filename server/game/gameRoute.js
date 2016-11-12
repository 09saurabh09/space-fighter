/**
 * Created by saurabhk on 12/11/16.
 */
'use strict';

let express = require('express');

let router = express.Router();

const gameController = require("./gameController");

/* POST: Create new game room */
router.post('/', (req, res, next) => {
    gameController.createGame(req, res);
});

module.exports = router;