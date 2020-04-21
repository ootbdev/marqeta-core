"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _CustomErrors = require("./utils/CustomErrors");

var _API = _interopRequireDefault(require("./API"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const CONFIG_KEYS = ['masterAccessToken', 'baseURL'];
const BASE_URL = 'https://sandbox-api.marqeta.com/v3';

function Marqeta(appToken, config = {}) {
  if (!(this instanceof Marqeta)) {
    return new Marqeta(appToken, config);
  }

  if (typeof appToken !== 'string') {
    throw new _CustomErrors.ArgumentError('client initialization requires appToken as first argument');
  }

  for (const key of Object.keys(config)) {
    assertValidConfigKey(key);
  }

  this._config = _objectSpread({
    appToken,
    baseURL: BASE_URL
  }, config);
}

const assertValidConfigKey = key => {
  if (CONFIG_KEYS.indexOf(key) === -1) {
    throw new _CustomErrors.ArgumentError(`'${key}' is not a valid config key`);
  }
};

Marqeta.prototype = {
  getConfig(key) {
    if (key !== 'appToken') {
      assertValidConfigKey(key);
    }

    return this._config[key];
  },

  setConfig(key, value) {
    assertValidConfigKey(key);
    this._config[key] = value;
  },

  async ping() {
    return _API.default.ping({
      baseURL: this._config.baseURL
    });
  },

  Users: {
    async list() {
      return _API.default.Users.list({
        baseURL: this._config.baseURL,
        appToken: this._config.appToken,
        accessToken: this.getConfig('masterAccessToken')
      });
    }

  }
};
var _default = Marqeta;
exports.default = _default;