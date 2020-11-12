var express = require('express');
var router = express.Router();
var { body, validationResult } = require('express-validator');

/* POST fizzbuzz. */
router
    .route('/')
    .post([
        body('count').isInt()
    ], function (req, res, next) {
        var errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                "errors": errors.errors,
                "response": ""
            });
        }

        res.json({
            "errors": [],
            "response": "placeholder"
        })
    })
    .all(function (req, res) {
        res.status(405).send();
    });

module.exports = router;
