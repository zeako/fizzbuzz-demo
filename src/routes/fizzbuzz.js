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

        // business logic is embedded in router since the scope is pretty small.
        // we could enable better separation by moving business logic related code to separate folder.
        // also, we cloud move response handling to a separate controller file.
        var c = req.body.count;
        var ans = "";
        if (c % 15 == 0) {
            ans = "fizzbuzz";
        } else if (c % 3 == 0) {
            ans = "fizz";
        } else if (c % 5 == 0) {
            ans = "buzz";
        }

        res.json({
            "errors": [],
            "response": ans
        })
    })
    .all(function (req, res) {
        res.status(405).send();
    });

module.exports = router;
