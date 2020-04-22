import { ArgumentError } from './utils/CustomErrors'

import resources from './resources'
import { getConfig, setConfig } from './utils'
import { BASE_URL } from './constants'

function Marqeta (appToken, config = {}) {
  if (!(this instanceof Marqeta)) {
    return new Marqeta(appToken, config)
  }

  if (typeof appToken !== 'string') {
    throw new ArgumentError('client initialization requires appToken as first argument')
  }

  this._config = {
    appToken: appToken,
    baseURL: BASE_URL,
  }

  for (const key of Object.keys(config)) {
    this.setConfig(key, config[key])
  }

  for (const name in resources) {
    this[name] = new resources[name]({ config: this._config })
  }
}

Marqeta.prototype = {
  getConfig (key) {
    return getConfig(this._config, key)
  },
  setConfig (key, value) {
    return setConfig(this._config, key, value)
  }
}

export default Marqeta
