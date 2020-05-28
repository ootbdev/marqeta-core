import BaseResource from '../BaseResource'
import { UnrecognizedFieldError } from '../../utils/CustomErrors'

class Resource extends BaseResource {
  async ping (data) {
    const path = '/ping'
    let method = 'get'
    if (data) {
      const validKeys = ['token', 'payload']
      for (const key of Object.keys(data)) {
        if (validKeys.indexOf(key) === -1) {
          throw new UnrecognizedFieldError(key)
        }
      }
      method = 'post'
    }
    return this._makeRequest({
      method,
      path,
      data
    })
  }
}

export default Resource
