"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class BaseResource {
  constructor({
    config
  }) {
    this._config = config;
  }

  _urlFromPath(path) {
    return `${(0, _utils.getConfig)(this._config, 'baseURL')}/${path.replace(/^\/*/, '')}`;
  }

  async _makeRequest(opts) {
    if (Object.keys(opts).indexOf('path') === -1) {
      throw new _utils.CustomErrors.ArgumentError(`${this.constructor.name} requires 'path' to make request`);
    }

    return (0, _utils.makeRequest)(_objectSpread({}, opts, {
      url: this._urlFromPath(opts.path)
    }));
  }

}

var _default = BaseResource;
exports.default = _default;