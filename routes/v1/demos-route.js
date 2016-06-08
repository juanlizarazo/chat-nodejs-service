'use strict';

var express = require('express');
var router = express.Router();

var demoController = require(__controllers + 'demos-controller');

/**
 * @api {get} /v1/demos Get demos
 *
 * @apiName getDemo
 * @apiGroup Demo
 */
router.get('/v1/demos', demoController.getAllDemos);

module.exports = router;
