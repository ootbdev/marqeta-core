import BaseResource from './BaseResource'

class Connection extends BaseResource {
  constructor (opts) {
    super(opts)
  }

  async ping () {
    return this._makeRequest( {
      path: '/ping',
      method: 'GET'
    })
  }
}

export default Connection
