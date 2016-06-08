'use strict';

var HttpStatus = require('http-status-codes');
var os = require('os');

module.exports = {
  getStatusCollection: getStatusCollection
};

/**
 * Get status collection
 *
 * @param req
 * @param res
 * @param next
 */
function getStatusCollection(req, res, next) {
  let statusCollection = [
    {
      cpu: getCpuStatus()
    }
  ];

  res.status(HttpStatus.OK).json(statusCollection);
}

/**
 * Get cup status
 *
 * @returns {Object}
 */
function getCpuStatus() {
  return os.cpus();
}
