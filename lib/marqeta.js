'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

function Marqeta (appToken, options = {}) {
  this._api = {
    appToken,
    masterAccessToken: options.masterAccessToken
  }
}

Marqeta.prototype = {
  getAppToken () {
    return this._api.appToken
  },

  getMasterAccessToken () {
    return this._api.masterAccessToken
  }

}
var _default = Marqeta
exports.default = _default
