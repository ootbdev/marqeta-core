function Marqeta (appToken, config = {}) {
  if (!(this instanceof Marqeta)) {
    return new Marqeta(appToken, config)
  }

  this._config = {
    appToken,
    masterAccessToken: config.masterAccessToken
  }
}

Marqeta.prototype = {
  getConfig (key) {
    return this._config[key]
  },
  setConfig (key, value) {
    this._config[key] = value
  }
}

export default Marqeta
