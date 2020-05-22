"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CustomErrors = require("./utils/CustomErrors");

var _resources = _interopRequireDefault(require("./resources"));

var _utils = require("./utils");

var _constants = require("./constants");

class Marqeta {
  constructor(appToken, config = {}) {
    if (typeof appToken !== 'string') {
      throw new _CustomErrors.ArgumentError('client initialization requires appToken as first argument');
    }

    this._config = {
      appToken: appToken,
      baseURL: _constants.BASE_URL
    };

    for (const key of Object.keys(config)) {
      this.setConfig(key, config[key]);
    }

    for (const name in _resources.default) {
      this[name] = new _resources.default[name]({
        config: this._config
      });
    }
  }

  getConfig(key) {
    return (0, _utils.getConfig)(this._config, key);
  }

  setConfig(key, value) {
    return (0, _utils.setConfig)(this._config, key, value);
  }

}

var _default = Marqeta;
exports.default = _default;