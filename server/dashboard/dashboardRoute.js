/**
 * Created by saurabhk on 13/11/16.
 */
'use strict';

let express = require('express');

let router = express.Router();

/* GET: Show game portal*/
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

/* GET: Join a particular game*/
router.get('/:gameId', (req, res, next) => {
    res.render("game");
});


module.exports = router;