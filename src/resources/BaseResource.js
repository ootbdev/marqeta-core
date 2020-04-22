import { getConfig, makeRequest, CustomErrors } from '../utils'

class BaseResource {
  constructor({ config }) {
    this._config = config
  }

  _urlFromPath (path) {
    return `${getConfig(this._config, 'baseURL')}/${path.replace(/^\/*/, '')}`
  }

  async _makeRequest (opts) {
    if (Object.keys(opts).indexOf('path') === -1) {
      throw new CustomErrors.ArgumentError(`${this.constructor.name} requires 'path' to make request`)
    }
    return makeRequest({
      ...opts,
      url: this._urlFromPath(opts.path)
    })
  }
}

export default BaseResource
