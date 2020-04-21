import { ArgumentError } from './utils/CustomErrors'
const CONFIG_KEYS = [
  'masterAccessToken'
]

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
    ...config
  }
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
  }
}

export default Marqeta
