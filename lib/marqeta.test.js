"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _marqeta = _interopRequireDefault(require("./marqeta"));

describe('Marqeta Client', () => {
  describe('initialization', () => {
    describe('without appToken as first argument', () => {
      SharedTests.itThrowsArgumentError({
        trigger: () => new _marqeta.default(),
        message: 'client initialization requires appToken as first argument'
      });
    });
  });
});