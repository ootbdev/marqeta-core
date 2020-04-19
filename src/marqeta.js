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

export default Marqeta
