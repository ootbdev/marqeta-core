"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "makeRequest", {
  enumerable: true,
  get: function () {
    return _makeRequest.default;
  }
});
exports.CustomErrors = exports.setConfig = exports.getConfig = exports.assertValidConfigKey = void 0;

var CustomErrors = _interopRequireWildcard(require("./CustomErrors"));

exports.CustomErrors = CustomErrors;

var _constants = require("../constants");

var _makeRequest = _interopRequireDefault(require("./makeRequest"));

const assertValidConfigKey = key => {
  if (_constants.CONFIG_KEYS.indexOf(key) === -1) {
    throw new CustomErrors.ArgumentError(`'${key}' is not a valid config key`);
  }
};

exports.assertValidConfigKey = assertValidConfigKey;

const getConfig = (config, key) => {
  if (key !== 'appToken') {
    assertValidConfigKey(key);
  }

  return config[key];
};

exports.getConfig = getConfig;

const setConfig = (config, key, value) => {
  assertValidConfigKey(key);
  config[key] = value;
  return config;
};

exports.setConfig = setConfig;