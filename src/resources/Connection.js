import BaseResource from './BaseResource'

class Connection extends BaseResource {
  async ping () {
    return this._makeRequest({
      path: '/ping',
      method: 'GET'
    })
  }
}

export default Connection
