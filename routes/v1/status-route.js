'use strict';

var express = require('express');
var router = express.Router();

var statusController = require(__controllers + 'status-controller');

/**
 * @api {get} /v1/demos Get demos
 *
 * @apiName getDemo
 * @apiGroup Demo
 */
router.get('/v1/status', statusController.getStatusCollection);

module.exports = router;
