var express = require('express');
var router = express.Router();

/* POST fizzbuzz. */
router
    .route('/')
    .post(function (req, res, next) {
        res.send('fizzbuzz placeholder');
    })
    .all(function (req, res) {
        console.log("Hey mami")
        res.status(405).send();
    });

module.exports = router;
