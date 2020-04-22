import { makeRequest } from '../utils'

function Connection (marqeta) {
  if (!(this instanceof Connection)) {
    return new Connection(marqeta)
  }
  this._marqeta = marqeta
}

Connection.prototype = {
  async ping () {
    return makeRequest({
      url: `${this._marqeta.getConfig('baseURL')}/ping`,
      method: 'GET'
    })
  }
}

export default Connection
