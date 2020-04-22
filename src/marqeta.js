import { ArgumentError } from './utils/CustomErrors'

const resources = require('./resources')

const CONFIG_KEYS = ['masterAccessToken', 'baseURL']
const BASE_URL = 'https://sandbox-api.marqeta.com/v3'

function Marqeta (appToken, config = {}) {
  if (!(this instanceof Marqeta)) {
    return new Marqeta(appToken, config)
  }

  if (typeof appToken !== 'string') {
    throw new ArgumentError('client initialization requires appToken as first argument')
  }
  for (const key of Object.keys(config)) {
    assertValidConfigKey(key)
  }

  this._config = {
    appToken,
    baseURL: BASE_URL,
    ...config
  }

  this._prepResources()
}

const assertValidConfigKey = (key) => {
  if (CONFIG_KEYS.indexOf(key) === -1) {
    throw new ArgumentError(`'${key}' is not a valid config key`)
  }
}

Marqeta.prototype = {
  getConfig (key) {
    if (key !== 'appToken') {
      assertValidConfigKey(key)
    }
    return this._config[key]
  },
  setConfig (key, value) {
    assertValidConfigKey(key)
    this._config[key] = value
  },
  _prepResources () {
    this.resources = {}
    for (const name in resources) {
      this.resources[name] = resources[name](this)
    }
  }
}

export default Marqeta
