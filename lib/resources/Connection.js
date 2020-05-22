"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseResource = _interopRequireDefault(require("./BaseResource"));

class Connection extends _BaseResource.default {
  async ping() {
    return this._makeRequest({
      path: '/ping',
      method: 'GET'
    });
  }

}

var _default = Connection;
exports.default = _default;