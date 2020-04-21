import { ArgumentError } from './utils/CustomErrors'
import API from './API'

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
    return Marqeta.prototype._config[key]
  },
  setConfig (key, value) {
    assertValidConfigKey(key)
    this._config[key] = value
  },
  async ping () {
    return API.ping({ baseURL: this.getConfig('baseURL') })
  },
  Users: {
    test () {
      console.log(_this)
    },
    async list () {
      return API.Users.list({
        baseURL: this.getConfig('baseURL'),
        appToken: this.getConfig('appToken'),
        accessToken: this.getConfig('masterAccessToken')
      })
    }
  }
}

export default Marqeta
