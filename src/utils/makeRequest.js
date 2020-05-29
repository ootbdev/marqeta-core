import axios from 'axios'
import { ArgumentError } from './CustomErrors'
const VALID_METHODS = ['get', 'post', 'put', 'delete']

const makeRequest = async (options = {}) => {
  let { url, method, appToken, accessToken, params, data } = options
  if (!url) {
    throw new ArgumentError('makeRequest requires a url')
  }
  method = String(method || '').toLowerCase()
  if (VALID_METHODS.indexOf(method) === -1) {
    method = 'get'
  }
  const config = { url, method }
  if (appToken || accessToken) {
    if (appToken && appToken.length && accessToken && accessToken.length) {
      config.auth = {
        username: appToken,
        password: accessToken
      }
    } else {
      throw new ArgumentError('makeRequest with auth requires both appToken and accessToken')
    }
  }
  if (method === 'get' && params && Object.keys(params).length) {
    config.params = params
  } else if (typeof data === 'object') {
    config.data = data
  }

  return axios(config)
}

export default makeRequest
