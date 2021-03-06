'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var express = require('express');
var methodOverride = require('method-override');
var _ = require('lodash');
var _db = require('underscore-db');
var low = require('lowdb');
var fileAsync = require('lowdb/lib/storages/file-async');
var bodyParser = require('../body-parser');
var validateData = require('./validate-data');
var plural = require('./plural');
var nested = require('./nested');
var singular = require('./singular');
var mixins = require('../mixins');

module.exports = function (source) {
  // Create router
  var router = express.Router();

  // Add middlewares
  router.use(methodOverride());
  router.use(bodyParser);

  // Create database
  var db = void 0;
  if (_.isObject(source)) {
    db = low();
    db.setState(source);
  } else {
    db = low(source, { storage: fileAsync });
  }

  validateData(db.getState());

  // Add underscore-db methods to db
  db._.mixin(_db);

  // Add specific mixins
  db._.mixin(mixins);

  // Expose database
  router.db = db;

  // Expose render
  router.render = function (req, res) {
    res.jsonp(res.locals.data);
  };

  // GET /db
  router.get('/db', function (req, res) {
    res.jsonp(db.getState());
  });

  // Handle /:parent/:parentId/:resource
  router.use(nested());

  // Create routes
  db.forEach(function (value, key) {
    if (_.isPlainObject(value.data)) {
      router.use('/' + key, singular(db, key));
      return;
    }

    if (_.isArray(value.data)) {
      router.use('/' + key, plural(db, key));
      return;
    }

    var msg = 'Type of "' + key + '" (' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + ') ' + (_.isObject(source) ? '' : 'in ' + source) + ' is not supported. ' + 'Use objects or arrays of objects.';

    throw new Error(msg);
  }).value();

  router.use(function (req, res) {
    if (!res.locals.data) {
      res.status(404);
      res.locals.data = {};
    }

    router.render(req, res);
  });

  router.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.stack);
  });

  return router;
};