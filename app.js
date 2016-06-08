'use strict';

global.__base = __dirname + '/';
global.__controllers = __base + 'src/controllers/';
global.__services = __base + 'src/services/';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var demoRoute = require('./routes/v1/demos-route');

var app = express();

app.use(logger('dev'));

// Default all default text/plain header content to application/json
app.use(bodyParser.json());

/**
 * Routes
 */
app.use('/', demoRoute);

/**
 * Error handlers
 */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  err.errors = {};
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    delete err.status;
    console.error(err);
    res.json(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    errors: {}
  });
});

module.exports = app;
