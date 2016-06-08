'use strict';

var HttpStatus = require('http-status-codes');

module.exports = {
  getAllDemos: getAllDemos
};

/**
 * Get all demos.
 * TODO: This is just a demo controller. Placeholder for the chat app.
 * Not sure yet if I even will need this yet.
 *
 * @param req
 * @param res
 * @param next
 */
function getAllDemos(req, res, next) {
  res.status(HttpStatus.OK).json([]);
}
