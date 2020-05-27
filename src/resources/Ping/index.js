import BaseResource from '../BaseResource'

class Resource extends BaseResource {
  async ping () {
    return this._makeRequest({
      path: '/ping',
      method: 'GET'
    })
  }
}

export default Resource
