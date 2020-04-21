"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ping = _interopRequireDefault(require("./ping"));

var _Users = _interopRequireDefault(require("./Users"));

var _default = {
  ping: _ping.default,
  Users: _Users.default
};
exports.default = _default;